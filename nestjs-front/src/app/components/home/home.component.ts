import { Component, OnInit, PipeTransform, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { User } from '../../models/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {}
     
  ngOnInit() {
  }

}
