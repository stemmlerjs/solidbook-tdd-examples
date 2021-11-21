Feature: Calling the elevator

Scenario: Four separate calls at one time
    Given The elevator is positioned on the ground floor
    When The following calls are made
    | Floor   | To |
    | 3       | basement |
    | ground  | basement |
    | 2       | basement |
    | 1       | 3   |
    Then Then the doors should open at floor3, basement, ground, basement, floor2, basement, floor1 and floor3 in this order

