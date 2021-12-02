import { PasswordValidator } from ".";

describe('password calculator', () => {
  let result;
  let passwordValidator: PasswordValidator;

  beforeEach(() => {
    result = undefined;
    passwordValidator = new PasswordValidator();
  })

  describe ('length within 5 and 15 characters long', () => {

    it ("knows that 'man' is not valid out of bounds", () => {
      result = passwordValidator.validate('man');

      expect(result.success).toBeFalsy();
      expect(result.errors).toContain('InvalidLengthError')
    });

    it ("knows that 'hello' is valid in bounds", () => {
      result = passwordValidator.validate('hello');

      expect(result.success).toBeTruthy();
    });

    it ("knows that 'hellohello123' is valid in bounds", () => {
      result = passwordValidator.validate('hellohello123');

      expect(result.success).toBeTruthy();
    })

    it ("knows that 'hellohellohello12' is invalid out of bounds", () => {
      result = passwordValidator.validate('hellohellohello12');

      expect(result.success).toBeFalsy();
      expect(result.errors).toContain('InvalidLengthError')
    })
  })

  // .. continue (contains one digit)
  // .. continue (one upper case letter)
})