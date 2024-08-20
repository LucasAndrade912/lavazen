import { Client } from './client';
import { Washing } from './washing';

export class WashingReservation {
  constructor(
    private _carModel: string,
    private _paymentMethod: string,
    private _observations: string,
    private _date: Date | null = null,
    private _client: Client | null = null,
    private _washing: Washing | null = null,
  ) {}

  public get client(): Client | null {
    return this._client;
  }

  public set client(value: Client) {
    this._client = value;
  }

  public get washing(): Washing | null {
    return this._washing;
  }

  public set washing(value: Washing) {
    this._washing = value;
  }

  public get date(): Date | null {
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
