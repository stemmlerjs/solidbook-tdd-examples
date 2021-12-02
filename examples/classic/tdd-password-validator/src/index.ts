
type InvalidPasswordError = 'InvalidLengthError'

type Result = {
  success: boolean;
  errors?: InvalidPasswordError[];
}

export class PasswordValidator {
  validate (password: string) : Result {
    if (password.length < 5 || password.length > 15) {
      return {
        success: false,
        errors: ['InvalidLengthError']
      }
    }

    return {
      success: true
    }
  }
}