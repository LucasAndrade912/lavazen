import { Client } from './client';
import { Washing } from './washing';

export class WashingReservation {
  constructor(
    private _client: Client,
    private _washing: Washing,
    private _date: Date,
    private _carModel: string,
    private _paymentMethod: 'pix' | 'credit card' | 'cash',
    private _observations: string
  ) {}

  public get client(): Client {
    return this._client;
  }

  public set client(value: Client) {
    this._client = value;
  }

  public get washing(): Washing {
    return this._washing;
  }

  public set washing(value: Washing) {
    this._washing = value;
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

  public get paymentMethod(): 'pix' | 'credit card' | 'cash' {
    return this._paymentMethod;
  }

  public set paymentMethod(value: 'pix' | 'credit card' | 'cash') {
    this._paymentMethod = value;
  }

  public get observations(): string {
    return this._observations;
  }

  public set observations(value: string) {
    this._observations = value;
  }
}
