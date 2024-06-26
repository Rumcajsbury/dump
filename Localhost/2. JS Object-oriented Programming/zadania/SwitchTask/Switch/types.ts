export interface ISwitch {
  add(condition: boolean, callback: () => {}): void;
  isValid(): boolean;
  isEmpty(): boolean;
}
