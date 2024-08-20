export class Client {
  constructor(
    private _name: string,
    private _phone: string
  ) {}

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(value: string) {
    this._phone = value;
  }
}
