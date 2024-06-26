// ## Cele główne
// * [ ] Wykorzystując wzorzec projektowy Builder stwórz obiekt json reprezentujacy wszystkie parametry maila (parametry znajdują sie w kodzie poniżej)
// ## Przydatne linki

// - Czym jest wzorzec projektowy "Builder" - https://refactoring.guru/pl/design-patterns/builder
// - Filmik o wzorcu "Builder" - https://www.youtube.com/watch?v=M7Xi1yO_s8E
interface Mail {
  from: string;
  to: string;
  title: string;
  cc: string[];
  bcc: string[];
  html: string;
}
//brak walidacji
//dispose
class EmailBuilder {
  private _mail: Mail;
  constructor() {
    // this._mail = {
    //   from: "",
    //   to: "",
    //   title: "",
    //   cc: [],
    //   bcc: [],
    //   html: "",
    // };
      this.from = "",
      this.to  =""
      this.title = "",
      this.cc  = [],
      this.bcc =[],
      this.html = "",
  }

  setFrom(value: string) {
    this._mail.from = value;
    return this;
  }

  setTo(value: string) {
    this._mail.to = value;
    return this;
  }

  setTitle(value: string) {
    this._mail.title = value;
    return this;
  }

  setCc(value: string[]) {
    this._mail.cc = value;
    return this;
  }

  setBcc(value: string[]) {
    this._mail.bcc = value;
    return this;
  }

  setHtml(value: string) {
    this._mail.html = value;
    return this;
  }

  // Stwórz metody które będą zmieniać parametry from, to, title, cc, bcc, html

    buildMail(): Mail {
      return {
        bcc: this._bcc
      };
    }
}


const builder = new EmailBuilder()
const testEmail = builder.setBcc([]).buildMail()
