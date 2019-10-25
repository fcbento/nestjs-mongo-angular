import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, EmailValidator, FormGroup } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public createForm: FormGroup;
  public user: User;

  constructor
    (private formBuilder: FormBuilder,
      private customerService: CustomerService,
      private toastr: ToastrService,
      private router: Router) {

    this.createForm = this.formBuilder.group({
      name: '',
      last_name: '',
      email: '',
      phone: '',
      document: '',
      description: '',
      password: ''
    });

  }

  ngOnInit() {}

  public create(): void {
    this.user = this.createForm.value;

    this.customerService.create(this.user).subscribe(data => {

      this.toastr.success(data['message'], `Customer ${this.user.name} created`);
      this.router.navigate(['home']);

    }, (err) => {
      this.toastr.error(err.error.message)
    });
  }
}
