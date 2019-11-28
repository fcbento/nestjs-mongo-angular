import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss', '../auth.component.scss']
})
export class CreateUserComponent implements OnInit {

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
