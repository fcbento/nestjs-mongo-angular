import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  
  constructor
    (private formBuilder: FormBuilder,
      private userService: UserService,
      private toastr: ToastrService,
      private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });

  }

  ngOnInit() {
  }

  login(){
    
  }

}
