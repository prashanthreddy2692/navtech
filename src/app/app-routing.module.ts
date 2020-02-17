import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/common/login/login.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { DefaultLayoutComponent } from './components/web/default-layout/default-layout.component';
import { OrderComponent } from './components/web/order/order.component';
import { OrderListComponent } from './components/web/order-list/order-list.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },


  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'order', component: OrderComponent },
      { path: 'order-list', component: OrderListComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
