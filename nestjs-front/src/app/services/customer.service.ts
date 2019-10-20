import { Injectable } from '@angular/core';
import { API_URL } from '../api/api';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post(API_URL + '/create', user);
  }

  getAll() {
    return this.http.get<User[]>(API_URL + '/customers');
  }

  delete(customerID: string) {
    return this.http.delete(API_URL + `/delete/?customerID=${customerID}`);
  }

  update(user: User) {
    return this.http.put(API_URL + `/update/?customerID=${user._id}`, user);
  }
}