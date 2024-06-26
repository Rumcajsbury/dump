import { v4 } from "uuid";
import { IUser, UserModel } from "./types";
import { ValidationHelper } from "../../utils/ValidatorHelper";

class User implements IUser {
  readonly uuid: string;
  readonly name: string;
  readonly lastName: string;

  constructor(userModel: UserModel) {
    const { name, lastName } = userModel;

    ValidationHelper.isNameValid(name);
    ValidationHelper.isNameValid(lastName);

    this.uuid = v4();
    this.name = name;
    this.lastName = name;
  }
}
