import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, EmailValidator, FormGroup } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';

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
      private toastr: ToastrService) {

    this.createForm = this.formBuilder.group({
      name: '',
      last_name: '',
      email: '',
      phone: '',
      document: '',
      description: ''
    });

  }

  ngOnInit() {
  }

  public create(): void {
    this.user = this.createForm.value;
    
    this.customerService.create(this.user).subscribe(data => {
      
      this.toastr.success(data['message'], 'Customer created');    
    
    }, (err) => {
      console.log(err)
    })
  }
}
