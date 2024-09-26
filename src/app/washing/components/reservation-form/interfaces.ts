type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export interface ReservationData {
  carPlate: string;
  carModel: string;
  date: string;
  startHour: string;
  paymentMethod: string;
  observations: string;
}

export type FormGroupReservationData = Override<
  ReservationData,
  {
    date: Date;
  }
>;
