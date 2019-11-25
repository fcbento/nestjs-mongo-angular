import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, EmailValidator, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss', '../auth.component.scss']
})
export class CreateComponent implements OnInit {

  public createForm: FormGroup;
  public user: User;

  constructor
    (private formBuilder: FormBuilder,
      private userService: UserService,
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

    this.userService.create(this.user).subscribe(data => {

      this.toastr.success(data['message'], `Customer ${this.user.name} created`);
      this.router.navigate(['home']);

    }, (err) => {
      this.toastr.error(err.error.message)
    });
  }
}
