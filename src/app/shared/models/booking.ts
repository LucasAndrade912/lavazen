export class Booking {
  constructor(
    private _washingId: string,
    private _carModel: string,
    private _carPlate: string,
    private _startHour: string,
    private _paymentMethod: string,
    private _date: string,
    private _observations?: string | null
  ) {}

  public get washingId(): string {
    return this._washingId;
  }

  public set washingId(value: string) {
    this._washingId = value;
  }

  public get date() {
    return this._date;
  }

  public set date(value: string) {
    this._date = value;
  }

  public get carModel(): string {
    return this._carModel;
  }

  public set carModel(value: string) {
    this._carModel = value;
  }

  public get carPlate(): string {
    return this._carPlate;
  }

  public set carPlate(value: string) {
    this._carPlate = value;
  }

  public get startHour(): string {
    return this._startHour;
  }

  public set startHour(value: string) {
    this._startHour = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }

  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get observations(): string | undefined | null {
    return this._observations;
  }

  public set observations(value: string) {
    this._observations = value;
  }
}
