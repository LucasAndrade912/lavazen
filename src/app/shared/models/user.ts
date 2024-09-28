interface Data {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  birthDay?: string;
  phone?: string;
  address?: string;
}

export class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private birthDay: string;
  private phone: string;
  private address: string;

  constructor(data: Data) {
    this.id = data.id ?? '';
    this.name = data.name ?? '';
    this.email = data.email ?? '';
    this.password = data.password ?? '';
    this.birthDay = data.birthDay ?? '';
    this.phone = data.phone ?? '';
    this.address = data.address ?? '';
  }
}
