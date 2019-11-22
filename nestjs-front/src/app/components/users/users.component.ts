import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public id: string = '';
  public user: User;
  public editForm: FormGroup;

  p: number = 1;

  constructor(private customerService: CustomerService,
    private modalService: NgbModal,
    private toastr: ToastrService) { }

    ngOnInit() {
      this.customerService.getAll().subscribe(data => {
        this.users = data;
      })
    }
  
    openDeleteModal(content, user: User) {
      this.user = user;
      this.modalService.open(content, { centered: true });
    }
  
    openEditModal(content, user: User) {
      this.user = user;
      this.modalService.open(content, { size: 'lg'  });
    }
  
    deleteCustomer() {
      this.customerService.delete(this.user._id).subscribe(data => {
        this.modalService.dismissAll();
  
        this.users.forEach((user, index) => {
          if (user._id === this.user._id)
            this.users.splice(index, 1);
        });
  
        this.toastr.success(data['message'], 'Customer deleted');
      });
    }
  
    updateCustomer(user: User){
        this.customerService.update(user).subscribe(data => {
          this.modalService.dismissAll();
          this.toastr.success(data['message'], 'Customer updated');
        }, (err) => {
          console.log(err)
        })
    }

}
