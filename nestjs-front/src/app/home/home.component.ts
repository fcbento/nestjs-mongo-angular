import { Component, OnInit, PipeTransform } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => {
      this.users$ = data;
    })
  }
}
