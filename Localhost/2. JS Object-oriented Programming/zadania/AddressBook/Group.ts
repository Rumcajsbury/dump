import { v4 } from "uuid";
import { ValidatorHelper } from "../ValidatorHelper";
import { Contact } from "./Contact";

export class Group {
  // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
  private _uuid: string;
  private _name: string;
  private _contactsList: Contact[] = [];

  constructor(name: string) {
    ValidatorHelper.isStringOfMinimalLenght({ name: "name", value: name });
    this._uuid = v4();

    this._name = name;
  }

  // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
  get uuid() {
    return this._uuid;
  }

  set name(newName: string) {
    ValidatorHelper.isStringOfMinimalLenght({
      name: "newName",
      value: newName,
    });

    this._name = newName;
  }

  get name() {
    return this._name;
  }

  addContactToGroup(contactToAdd: Contact) {
    this._contactsList = [...this._contactsList, contactToAdd];
  }

  removeContactFromGroup(contactToRemove: Contact) {
    this._contactsList = this._contactsList.filter(
      (contact) => contact.uuid !== contactToRemove.uuid
    );
  }

  //   findContactInGroup(contactToFind: Contact): Contact | null {
  //     const contactFound = this._contactsList.find(
  //       (contact) => contact.uuid === contactToFind.uuid
  //     );

  //     return contactFound ? contactFound : null;
  //   }

  findContactInGroup(phrase: string): Contact | undefined {
    const contactFound = this._contactsList.find((contact) => {
      const valuesToSearch = [
        contact.uuid,
        contact.name,
        contact.lastName,
        contact.emailAddress,
      ];

      for (const item of valuesToSearch) {
        if (item.includes(phrase)) return true;
      }

      return false;
    });

    return contactFound;
  }
}
