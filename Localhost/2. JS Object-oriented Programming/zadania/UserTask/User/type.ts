export interface IUser {
  uuid: string;
  name: string;
  lastName: string;
  dateOfBirth: string;
  password: string;
  gender: Gender;
  emailAddress: string;
  accessLevel: AccessLevel;
}

export type UserModel = Omit<
  IUser,
  "uuid" | "changePassword" | "changeEmail" | "changeAccessLevel"
>;

export enum Gender {
  Male,
  Female,
}

export enum AccessLevel {
  User,
  Admin,
}
