import { Component, OnInit, PipeTransform, ViewChild } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users: User[] = [];
  public id: string = '';

  @ViewChild('deleteSwal', { static: false }) private deleteSwal: SwalComponent;

  constructor(
    private customerService: CustomerService,
    private modalService: NgbModal,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.customerService.getAll().subscribe(data => {
      this.users = data;
    })
  }

  openVerticallyCentered(content, id) {
    this.id = id;
    this.modalService.open(content, { centered: true });
  }

  deleteCustomer() {
    this.customerService.delete(this.id).subscribe(data => {
      this.modalService.dismissAll();

      this.users.forEach((user, index) => {
        if (user['_id'] === this.id)
          this.users.splice(index, 1);
      });

      this.toastr.success(data['message'], 'Customer deleted');
    });
  }

}
