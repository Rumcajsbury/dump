import { AccessLevel, IUser, UserModel } from "../User/type";

export interface IApp {
  listOfUsers: IUser[];

  createMember(userData: IAppUserModel, userType: AccessLevel): IUser;
  updateMember(propToUpdate: MemberUpdateProp, value: typeof MemberUpdateProp);
  changeTargetUserPassword(
    password: string,
    targetUserId: string,
    changeRequestingUser: IUser
  ): IUser;
  changeTargetUserEmailAddress(
    emailAddress: string,
    targetUserId: string,
    changeRequestingUser: IUser
  ): IUser;
  changeTargetUserAccessLevel(
    accessLevel: AccessLevel,
    targetUserId: string,
    changeRequestingUser: IUser
  ): IUser;
}

export type IAppUserModel = Omit<UserModel, "accessLevel">;

export type MemberUpdateProp = Pick<
  UserModel,
  "password" | "emailAddress" | "accessLevel"
>;
