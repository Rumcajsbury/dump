import { Contact } from "./Contact";
import { ContactModel } from "./Contact/types";
import { Group } from "./Group";

export interface AddressBook {
  listOfContacts: Contact[];
  listOfGroups: Group[];

  findContactByPhrase(phrase: string): Contact;

  addContactToListOfContacts(contactToAdd: Contact): void;
  removeContactFromListOfContacts(contactToRemove: Contact): void;

  editContact(contactId: string, contactData: ContactModel): Contact;

  addNewGroup(newGroupName:string):void;
  removeGroup(group:Group):void;
  // usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}
