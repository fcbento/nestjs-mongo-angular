import { Injectable } from '@angular/core';
import { API_URL } from '../api/api';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post(API_URL + '/create', user);
  }
}
