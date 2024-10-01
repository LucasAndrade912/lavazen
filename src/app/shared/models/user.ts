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
  private __id: string;
  private __name: string;
  private __email: string;
  private __password: string;
  private __birthDay: string;
  private __phone: string;
  private __address: string;

  constructor(data: Data) {
    this.__id = data.id ?? '';
    this.__name = data.name ?? '';
    this.__email = data.email ?? '';
    this.__password = data.password ?? '';
    this.__birthDay = data.birthDay ?? '';
    this.__phone = data.phone ?? '';
    this.__address = data.address ?? '';
  }

  get id() {
    return this.__id;
  }

  get name() {
    return this.__name;
  }

  get email() {
    return this.__email;
  }

  get password() {
    return this.__password;
  }

  get birthDay() {
    return this.__birthDay;
  }

  get phone() {
    return this.__phone;
  }

  get address() {
    return this.__address;
  }
}
