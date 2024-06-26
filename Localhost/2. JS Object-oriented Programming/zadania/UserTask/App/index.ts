import { User } from "../User";
import { AccessLevel, IUser } from "../User/type";
import { IApp, IAppUserModel } from "./types";

class App implements IApp {
  private static instance: IApp;
  private _listOfUsers: IUser[] = [];

  private constructor() {}

  public static getInstance(): IApp {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  get listOfUsers(): IUser[] {
    return this._listOfUsers;
  }

  createMember(userData: IAppUserModel, userType: AccessLevel) {
    return this.createAppUser(userData, userType);
  }

  private createAppUser(
    userData: IAppUserModel,
    accessLevel: AccessLevel
  ): IUser {
    const user = new User({ ...userData, accessLevel });
    this._listOfUsers.push(user);
    return user;
  }

  changeTargetUserPassword(
    password: string,
    targetUserId: string,
    changeRequestingUser: IUser
  ): IUser {
    this.isRequestingUserAnAdmin(changeRequestingUser);
    const user = this.findUserById(targetUserId);
    user.password = password;
    return user;
  }

  changeTargetUserEmailAddress(
    emailAddress: string,
    targetUserId: string,
    changeRequestingUser: IUser
  ): IUser {
    this.isRequestingUserAnAdmin(changeRequestingUser);
    const user = this.findUserById(targetUserId);
    user.emailAddress = emailAddress;
    return user;
  }

  changeTargetUserAccessLevel(
    accessLevel: AccessLevel,
    targetUserId: string,
    changeRequestingUser: IUser
  ): IUser {
    this.isRequestingUserAnAdmin(changeRequestingUser);
    const user = this.findUserById(targetUserId);
    user.accessLevel = accessLevel;
    return user;
  }

  private findUserById(userId: string) {
    const user = this._listOfUsers.find((user) => user.uuid === userId);
    if (!user) throw new Error("There is no user with such id.");
    return user;
  }

  private isRequestingUserAnAdmin(user: IUser) {
    const isAdmin = user.accessLevel === AccessLevel.Admin;
    if (!isAdmin) throw new Error("Requesting user is not an Admin");
  }
}

//polaczyc change do jednej metody
