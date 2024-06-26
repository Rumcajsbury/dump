import { v4 } from "uuid";
import { ContactEditableKeys, ContactModel, IContact } from "./types";
import { ValidationHelper } from "../../utils/ValidatorHelper";

export class Contact implements IContact {
  // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
  public readonly uuid: string;
  private _name: string;
  private _lastName: string;
  private _emailAddress: string;
  private _age: number;
  private readonly _creationDate: Date;
  private _modificationDate: Date;

  constructor(contactModel: ContactModel) {
    const { name, lastName, emailAddress, age } = contactModel;

    const creationDate = new Date();

    this.uuid = v4();
    this._name = "";
    this._lastName = "";
    this._emailAddress = "";
    this._age = 0;
    this._creationDate = creationDate;
    this._modificationDate = creationDate;

    //inclaizacja i validacja w konstruktorze opcjonalnie
    this.update("name", name);
    this.update("lastName", lastName);
    this.update("emailAddress", emailAddress);
    this.update("age", age);
  }

  get name() {
    return this._name;
  }

  get lastName() {
    return this._lastName;
  }

  get emailAddress() {
    return this._emailAddress;
  }

  get age() {
    return this._age;
  }

  update<ContactModelKey extends keyof ContactModel>(
    propName: ContactModelKey,
    value: this[ContactModelKey]
  ): void {
    const valueType = typeof value;

    if (valueType === "string") {
      //check for string values
    }

    if (valueType === "number") {
      if (propName === "age") {
        ValidationHelper.isAgeValid(value);
      }
    }
    const key = `_${propName}` as keyof this;

    this[key] = value;

    this.updateModificationDate();
  }

  // update<ContactModelKey extends keyof ContactEditableKeys>(
  //   propName: ContactModelKey,
  //   value: ContactModel[ContactModelKey]
  // ): void {
  //   const key = `_${propName.toString()}` as keyof this;
  //   //  as keyof this;
  //   const qwe = this[key];
  // }

  //  = value;
  //   update<ContactModelKey extends keyof ContactModel>(
  //     // propName: keyof this,
  //     propName: ContactModelKey,
  //     value: this[ContactModelKey]
  //   ): void {
  //     // const key = `_${propName}`;
  //     const qwe = this[propName]
  //     this[propName] = value
  //     // Object.defineProperty(this, key, { value });
  //     //is it a hack?
  //     //jak walidować
  //     //spro
  //     const isValueStringType = typeof value === 'string'
  //     if (isValueStringType) {
  //       const isEmailKey = propName === 'emailAddress'
  //       if (isEmailKey) {
  //         // ....
  //       }
  //     }
  //     const typedKey = propName
  //     (this)[typedKey] = value
  //     this.updateModificationDate();
  //   }

  // update<ContactModelKey extends keyof ContactModel>(
  //   propName: ContactModelKey,
  //   value: ContactModel[ContactModelKey]
  // ): void {
  //   const key = `_${propName}` as keyof Contact;
  //   const qwe = this[key];
  //   //  = value;

  //   console.log(this);
  //   //  = value;
  //   // const qwe = this;
  // }
  // this
  //contacmodel key umykla typesciptowi
  //   update<ContactModelKey extends keyof ContactModel>(
  //     // propName: keyof this,
  //     propName: ContactModelKey,
  //     value: this[ContactModelKey]
  //   ): void {
  //     // const key = `_${propName}`;

  //     const qwe = this[propName]
  //     this[propName] = value

  //     // Object.defineProperty(this, key, { value });
  //     //is it a hack?
  //     //jak walidować
  //     //spro

  //     const isValueStringType = typeof value === 'string'
  //     if (isValueStringType) {
  //       const isEmailKey = propName === 'emailAddress'
  //       if (isEmailKey) {
  //         // ....
  //       }
  //     }

  //     const typedKey = propName

  //     (this)[typedKey] = value
  //     this.updateModificationDate();
  //   }

  private updateModificationDate() {
    const newModificationDate = new Date();
    this._modificationDate = newModificationDate;
  }
}

// export class Contact implements IContact {
//   // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
//   private readonly _uuid: string;
//   public uuid: string = "";
//   public name: string = "";
//   public lastName: string = "";
//   public emailAddress: string = "";
//   public age: number = 0;
//   private _name: string;
//   private _lastName: string;
//   private _emailAddress: string;
//   private _age: number;
//   private readonly _creationDate: Date;
//   private _modificationDate: Date;

//   constructor(contactModel: ContactModel) {
//     const { name, lastName, emailAddress, age } = contactModel;

//     const creationDate = new Date();

//     this._uuid = v4();
//     this._name = "";
//     this.name = "";
//     this._lastName = "";
//     this._emailAddress = "";
//     this._age = 0;
//     this._creationDate = creationDate;
//     this._modificationDate = creationDate;

//     //inclaizacja i validacja w konstruktorze opcjonalnie
//     this.update("name", name);
//     this.update("lastName", lastName);
//     this.update("emailAddress", emailAddress);
//     this.update("age", age);
//   }
//   // update<ContactModelKey extends ContactEditableKeys>(propName: ContactModelKey, value: ContactModel[ContactModelKey]): void {
//   //   throw new Error("Method not implemented.");
//   // }

//   // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
//   // get uuid() {
//   //   return this._uuid;
//   // }

//   // get name() {
//   //   return this._name;
//   // }

//   // get lastName() {
//   //   return this._lastName;
//   // }

//   // get emailAddress() {
//   //   return this._emailAddress;
//   // }

//   // get age() {
//   //   return this._age;
//   // }

//   // update<ContactModelKey extends keyof ContactModel>(
//   //   propName: ContactModelKey,
//   //   value: ContactModel[ContactModelKey]
//   // ): void {
//   //   (this as Contact)[propName] = value;
//   //   // const key = `_${propName}` as keyof Contact;
//   //   // const qwe = this[key];
//   //   // //  = value;
//   //   // const asd = this[propName];
//   //   // //  = value

//   //   // console.log(this);
//   //   //  = value;
//   //   // const qwe = this;
//   // }
//   // this
//   //contacmodel key umykla typesciptowi
//   //   update<ContactModelKey extends keyof ContactModel>(
//   //     // propName: keyof this,
//   //     propName: ContactModelKey,
//   //     value: this[ContactModelKey]
//   //   ): void {
//   //     // const key = `_${propName}`;

//   //     const qwe = this[propName]
//   //     this[propName] = value

//   //     // Object.defineProperty(this, key, { value });
//   //     //is it a hack?
//   //     //jak walidować
//   //     //spro

//   //     const isValueStringType = typeof value === 'string'
//   //     if (isValueStringType) {
//   //       const isEmailKey = propName === 'emailAddress'
//   //       if (isEmailKey) {
//   //         // ....
//   //       }
//   //     }

//   //     const typedKey = propName

//   //     (this)[typedKey] = value
//   //     this.updateModificationDate();
//   //   }

//   private updateModificationDate() {
//     const newModificationDate = new Date();
//     this._modificationDate = newModificationDate;
//   }
// }

const qwe = new Contact({
  name: "na",
  lastName: "as",
  emailAddress: "asd@asd.pl",
  age: 5,
});

console.log(qwe);
// const name = qwe.update<string>("name", "name");

qwe.update("name", "new name");
qwe.update("age", 11);
// qwe.update("age", "5");
qwe.update("lastName", "gsg");

console.log(qwe);
