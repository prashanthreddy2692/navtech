import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OrderListComponent } from '../order-list/order-list.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input('orderId') orderId;

  orderForm: FormGroup;
  buttonName: string = 'Create';

  constructor(
    private formBuilder: FormBuilder,
    private service: CommonService,
    private orderList: OrderListComponent
  ) { }

  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      order_no: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      due_date: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]],
      total: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });

    if (this.orderId != 0) {
      this.buttonName = 'Update';
      this.orderInfo(this.orderId);
    }

  }

  save() {

    if (this.orderForm.invalid) {
      return;
    }

    this.order();

  }

  orderInfo(id: Number) {

    this.service.orderInfo(id)
      .subscribe(
        (response: any) => {
          if (response.error == false) {

            let patchValues: any;

            patchValues = {
              order_no: response.data.order_no,
              due_date: new Date(response.data.due_date),
              customer: response.data.customer,
              address: response.data.address,
              phone: response.data.phone,
              total: response.data.order_total,
            }

            this.orderForm.patchValue(patchValues);

          } else {
            console.log("Order Info Data:", response);
          }
        },
        (error: any) => {
          console.log("Order Info Error:", error);
        }
      );

  }

  order() {

    let postData: any = {
      order_no: this.orderForm.value.order_no,
      due_date: this.orderForm.value.due_date,
      customer: this.orderForm.value.customer,
      address: this.orderForm.value.address,
      phone: this.orderForm.value.phone,
      order_total: this.orderForm.value.total,
    }

    if (this.buttonName == 'Create') {

      this.service.orderCreate(postData)
        .subscribe(
          (response: any) => {
            if (response.error == false) {
              this.orderList.modalRef.hide();
              this.orderList.orderList();
              alert(response.message);
            } else {
              console.log("Order Record Creation Data:", response);
            }
          },
          (error: any) => {
            console.log("Order Record Creation Error:", error);
          }
        );

    } else if (this.buttonName == 'Update') {

      this.service.orderUpdate(postData, this.orderId)
        .subscribe(
          (response: any) => {
            if (response.error == false) {
              this.orderList.modalRef.hide();
              this.orderList.orderList();
              alert(response.message);
            } else {
              console.log("Order Record Update Data:", response);
            }
          },
          (error: any) => {
            console.log("Order Record Update Error:", error);
          }
        );

    }

  }

}
