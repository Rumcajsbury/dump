export class ValidationHelper {
  private static nameRegExp = new RegExp(
    /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}(?:[-\s'][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$/
  );
  private static emailRegExp = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );

  private static passwordRegExp = new RegExp(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
  );

  private static dateRegExp = new RegExp(
    /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/
  );

  private constructor() {}

  static isNameValid(value: string) {
    const isValid = this.nameRegExp.test(value);

    this.throwError(!isValid, "Name is not valid.");
  }

  static isEmailValid(value: string) {
    const isValid = this.emailRegExp.test(value);

    this.throwError(!isValid, "Email is not valid.");
  }

  static isPasswordValid(value: string) {
    const isValid = this.passwordRegExp.test(value);

    this.throwError(!isValid, "Password is not valid.");
  }

  static isDateValid(value: string) {
    const isValid = this.dateRegExp.test(value);

    this.throwError(!isValid, "Date is not in MM/DD/YYYY format.");
  }

  static isStringOfMinRequiredLength(value: string, requiredLenght: number) {
    const isOfReuiredLength = value.length >= requiredLenght;

    this.throwError(!isOfReuiredLength, "Value is not of an required length.");
  }

  static isStringLessThanMaxLength(value: string, maxLength: number) {
    const isOfReuiredLength = value.length <= maxLength;

    this.throwError(
      !isOfReuiredLength,
      "Value length is greather tahn required."
    );
  }

  private static throwError(condition: boolean, errorMessage: string) {
    if (condition) throw new Error(errorMessage);
  }
}
