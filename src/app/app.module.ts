import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/common/login/login.component';
import { OrderComponent } from './components/web/order/order.component';
import { OrderListComponent } from './components/web/order-list/order-list.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { DefaultLayoutComponent } from './components/web/default-layout/default-layout.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';

import { MatFormFieldModule, MatInputModule, MatTableModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
/* import { ToastrModule } from 'ngx-toastr'; */
import { ButtonsModule, ModalModule, BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderListComponent,
    LoginComponent,
    PageNotFoundComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
