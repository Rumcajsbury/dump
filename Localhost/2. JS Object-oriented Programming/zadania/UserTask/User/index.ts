import { v4 } from "uuid";
import { AccessLevel, Gender, IUser, UserModel } from "./type";
import { ValidationHelper } from "../../utils/ValidatorHelper";

export class User implements IUser {
  readonly uuid: string;
  readonly name: string;
  readonly lastName: string;
  readonly dateOfBirth: string;
  readonly gender: Gender;
  private _password: string;
  private _emailAddress: string;
  private _accessLevel: AccessLevel;

  constructor(userModel: UserModel) {
    const {
      name,
      lastName,
      dateOfBirth,
      gender,
      password,
      emailAddress,
      accessLevel,
    } = userModel;

    ValidationHelper.isNameValid(name);
    ValidationHelper.isNameValid(lastName);
    ValidationHelper.isEmailValid(emailAddress);
    ValidationHelper.isPasswordValid(password);
    ValidationHelper.isDateValid(dateOfBirth);

    this.uuid = v4();
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this._password = password;
    this._emailAddress = emailAddress;
    this._accessLevel = accessLevel;
  }

  set password(value: string) {
    ValidationHelper.isPasswordValid(value);
    this._password = value;
  }

  get password(): string {
    return this._password;
  }

  set emailAddress(value: string) {
    ValidationHelper.isEmailValid(value);
    this._emailAddress = value;
  }

  get emailAddress(): string {
    return this._emailAddress;
  }

  set accessLevel(value: AccessLevel) {
    this._accessLevel = value;
  }
  get accessLevel(): AccessLevel {
    return this._accessLevel;
  }
}

//wszystkie zmiany maja odbywac sie przez APP tylko app mozeedytowac
