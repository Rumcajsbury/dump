import { ValidatorHelper } from "../ValidatorHelper";
import { Contact } from "./Contact";
import { Group } from "./Group";

// * [ ] Stwórz strukturę danych związaną z biblioteką, pełen opis znajduję się w kodzie poniżej
// * [ ] Wypracuj obiekt charakteryzujący pojedyńczy kontakt
// * [ ] Wypracuj obiekt charakteryzujący grupę kontakt
// * [ ] Wypracuj obiekt charakteryzujący książkę adresową

class AddressBook {
  // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów
  private _contactsList: Contact[] = [];
  private _groupsList: Group[] = [];

  // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
  findContact(phrase: string) {
    const contactInList = this._contactsList.find((contact) => {
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

    if (contactInList) return contactInList;

    for (const group of this._groupsList) {
      const contactInGroup = group.findContactInGroup(phrase);
      if (contactInGroup) return contactInGroup;
    }

    throw new Error(
      "Contact does not exist in contacsList nor in any of groups"
    );
  }

  addContact(contactToAdd: Contact) {
    this._contactsList = [...this._contactsList, contactToAdd];
  }

  removeContact(contactToRemove: Contact) {
    this._contactsList = this._contactsList.filter(
      (contact) => contact.uuid !== contactToRemove.uuid
    );
  }

  addNewGroup(groupName: string) {
    ValidatorHelper.isStringOfMinimalLenght({
      name: "groupName",
      value: groupName,
    });

    const newGroup = new Group(groupName);

    this._groupsList = [...this._groupsList, newGroup];
  }

  removeGroup(groupToRemove: Group) {
    const groupIndex = this._groupsList.findIndex(
      (group) => group.uuid === groupToRemove.uuid
    );

    if (!groupIndex) {
      throw new Error("Group not found in address book.");
    }

    //brake filter
    // this._groupsList = this._groupsList.filter(
    //   (group) => group.uuid !== groupToRemove.uuid
    // );
    this._groupsList = [
      ...this._groupsList.slice(0, groupIndex),
      ...this._groupsList.slice(groupIndex + 1),
    ];
  }
}
