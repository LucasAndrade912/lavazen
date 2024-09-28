import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private collectionName = 'users';

  constructor(private firestore: AngularFirestore) {}

  createUser(user: User) {
    return from(this.firestore.collection(this.collectionName).add({ ...user }));
  }
}
