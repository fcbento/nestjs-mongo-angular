import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, EmailValidator, FormGroup } from '@angular/forms';
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

  public showCreateCompany: boolean = false;
  public showCreateUser: boolean = false;
  public showChooseRegisterType: boolean = true;
  public option: string;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {

  }

  public prosseguirCadastro() {

    if (this.preventWithoutOption()) {
      if (this.option === 'candidato') {
        this.showCreateUser = true;
        this.showChooseRegisterType = false;
        this.showCreateCompany = false;
      } else {
        this.showCreateUser = false;
        this.showChooseRegisterType = false;
        this.showCreateCompany = true;
      }
    } else {
      this.toastr.error('Escolha umas das opções')
    }
  }

  public escolha(option: string) {
    this.option = option;
  }

  public preventWithoutOption(): boolean {
    if (this.option) {
      return true;
    }
    return false
  }

}
