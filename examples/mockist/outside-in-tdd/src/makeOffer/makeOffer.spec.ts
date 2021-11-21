import { ITradesRepo, IVinylRepo, MakeOffer } from './makeOffer';
import { NotificationsSpy } from './notificationSpy';
import { createMock } from 'ts-auto-mock';

describe('makeOffer', () => {
  describe(`Given a vinyl exists and is available for trade`, () => {
    describe(`When a trader wants to place an offer using money`, () => {
      test(`Then the offer should get created and an email should be sent to the vinyl owner`, async () => {
        // Collaborator #1 - a vinyl repo. Technically, this is acting as a "fake" because
        // the definition of a fake is an object that replaces a dependency that doesn't
        // yet exist. We know that it will be used to fetch data (and test doubles that return
        // data from databases called stubs), but we're not going to bother with that right now in this
        // test.

        let fakeVinylRepo = createMock<IVinylRepo>();

        // Collaborator #2 - trades repo. 

        let mockTradesRepo = createMock<ITradesRepo>();

        // Collaborator #3 - We need a notifications service.
        // Something for sending email. This collaborator has a
        // different responsibility from the previous two. With the previous two, they stand
        // in as objects that we use to issue QUERIES to get data that we'll use to do the work in the
        // use case. With this one, we'll be issuing a COMMAND - probably something like
        // `sendEmail`. Because we want to assert against an OUTGOING interaction, that makes
        // it a type of mock. Mocks help to emulate and examine outgoing interactions.
        // Even more specifically, because we'll write it by hand, that makes it a "spy"
        // (a type of mock). Complicated, I know.

        let notificationsSpy = new NotificationsSpy();

        // Create the subject - MakeOffer

        let makeOffer = new MakeOffer(
          fakeVinylRepo,
          mockTradesRepo,
          notificationsSpy,
        );

        // Act out the behavior

        let result = await makeOffer.execute({
          vinylId: '123',
          tradeType: 'money',
          amountInCents: 100 * 35,
        });

        // All of this should fail initially.
        // We can also assert that the result is truthy and that the email
        // which gets sent, gets sent to the correct user.

        expect(result.isSuccess()).toBeTruthy();
        expect(mockTradesRepo.saveOffer).toHaveBeenCalled();
        expect(notificationsSpy.getEmailsSent().length).toEqual(1);
        expect(notificationsSpy.emailWasSentFor()).toEqual(result.getValue().offerId);
      });
    });
  });
});
