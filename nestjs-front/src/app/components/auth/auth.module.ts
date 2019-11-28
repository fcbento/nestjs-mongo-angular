import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateCompanyComponent } from './create-company/create-company.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    CreateComponent,
    LoginComponent,
    AuthComponent,
    CreateUserComponent,
    CreateCompanyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class AuthModule { }
