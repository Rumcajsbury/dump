import { IEmail } from "./types";

export class Email implements IEmail {
  from: string = "";
  to: string = "";
  title: string = "";
  cc: string[] = [];
  bcc: string[] = [];
  html: string = "";

  constructor
}
