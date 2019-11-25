import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public showLoginForm: boolean;
  public showCreateForm: boolean;
  public activeForm: string;

  constructor() { }

  ngOnInit() {
    this.showCreateForm = false;
    this.showLoginForm = true;
  }

  public goToLoginPage(){
    this.showCreateForm = false;
    this.showLoginForm = true;
    this.activeForm = ''
  }

  public goToCreatePage(){
    this.showCreateForm = true;
    this.showLoginForm = false;
  }

}
