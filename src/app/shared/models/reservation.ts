export class Reservation {
  constructor(
    private _userId: string,
    private _washingId: string,
    private _carModel: string,
    private _paymentMethod: string,
    private _observations: string,
    private _date: Date = new Date()
  ) {}

  public get userId(): string {
    return this._userId;
  }

  public set userId(value: string) {
    this._userId = value;
  }

  public get washingId(): string {
    return this._washingId;
  }

  public set washingId(value: string) {
    this._washingId = value;
  }

  public get date(): Date {
    return this._date;
  }

  public set date(value: Date) {
    this._date = value;
  }

  public get carModel(): string {
    return this._carModel;
  }

  public set carModel(value: string) {
    this._carModel = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }

  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get observations(): string {
    return this._observations;
  }

  public set observations(value: string) {
    this._observations = value;
  }
}
