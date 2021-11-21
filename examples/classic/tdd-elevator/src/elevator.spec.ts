import { loadFeature, defineFeature } from 'jest-cucumber';
import { Elevator } from './elevator';
import { Floor } from './floor';

const feature = loadFeature('src/elevator.feature');

defineFeature(feature, test => {
  let elevator: Elevator;

  test('Four separate calls at one time', ({ given, when, then }) => {
    given('The elevator is positioned on the ground floor', () => {
      elevator = new Elevator(Floor.create('ground'));
    });

    when('The following calls are made', calls => {
      for (const call of calls) {
        elevator.call({ from: call.Floor, to: call.To });
      }
      expect(elevator.getCurrentCalls()).toHaveLength(4);
    });

    then(
      /^Then the doors should open at floor(\d+), basement, ground, basement, floor(\d+), basement, floor(\d+) and floor(\d+) in this order$/,
      (arg0, arg1, arg2, arg3) => {
        let floorsOpenedAt: number[] = [];

        while (elevator.hasCalls()) {
          elevator.handleCall();
        }

        floorsOpenedAt = elevator
          .getEvents()
          .filter(e => e.type === 'DoorsOpenedAndClosed')
          .map(e => e.value.floor);

        expect(floorsOpenedAt).toEqual([
          Number(arg0),
          -1,
          0,
          -1,
          Number(arg1),
          -1,
          Number(arg2),
          Number(arg3),
        ]);
      },
    );
  });
});
