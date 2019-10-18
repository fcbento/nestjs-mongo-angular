import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {

    this.createForm = this.formBuilder.group({
      name: ['', Validators.minLength(3)],
      last_name: ['', Validators.minLength(3)],
      email: [''],
      phone: ['', Validators.minLength(3)],
      document: ['', Validators.minLength(3)],
      description: ['', Validators.minLength(3)]
    });

  }

  ngOnInit() {
  }

  create() {
    console.log(this.createForm)
    //this.customerService.create();
  }
}
