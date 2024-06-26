export interface IUser {
  uuid: string;
  name: string;
  lastName: string;
}

export type UserModel = Omit<IUser, "uuid">;
