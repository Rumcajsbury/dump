export interface IContact {
  uuid: string;
  name: string;
  lastName: string;
  emailAddress: string;
  age: number;
  update<ContactModelKey extends keyof ContactModel>(
    propName: ContactModelKey,
    value: ContactModel[ContactModelKey]
  ): void;
}

export type ContactEditableKeys = "name" | "lastName" | "emailAddress" | "age";

export type ContactModel = Pick<IContact, ContactEditableKeys>;
// export interface ContactModel {
//   name: string;
//   lastName: string;
//   emailAddress: string;
//   age: number;
// }

// export interface IContact extends ContactModel {
//   uuid: string;
//   update<ContactModelKey extends keyof ContactModel>(
//     propName: ContactModelKey,
//     value: ContactModel[ContactModelKey]
//   ): void;
// }
