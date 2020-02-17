import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { CommonService } from 'src/app/services/common.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})


export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'order_no', 'due_date', 'customer', 'address', 'phone', 'order_total', 'action'];
  modalRef: BsModalRef;
  orders: any = [];
  orderId: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private modalService: BsModalService,
    private service: CommonService
  ) { }

  ngOnInit() {

    this.orderList();

  }

  order(template: TemplateRef<any>, orderId: number) {
    this.modalRef = this.modalService.show(template);
    this.orderId = orderId;
  }

  orderList() {

    this.service.orderList()
      .subscribe(
        (response: any) => {
          if (response.error == false) {
            this.orders = new MatTableDataSource(response.data);
            this.orders.paginator = this.paginator;
          } else {
            console.log("Order List Data:", response);
          }
        },
        (error: any) => {
          console.log("Order List Error:", error);
        }
      )

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.orders.filter = filterValue.trim().toLowerCase();
  }

  orderDelete(id: Number) {

    this.service.orderDelete(id)
      .subscribe(
        (response: any) => {
          if (response.error == false) {
            alert(response.message);
            this.orderList();
          } else {
            console.log("Order Delete Data:", response);
          }
        },
        (error: any) => {
          console.log("Order Delete Error:", error);
        }
      );

  }

}
