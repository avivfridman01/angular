import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { LogginComponent } from '../components/loggin/loggin.component';
import { AdminComponent } from '../components/admin/admin.component';
import { CompanyComponent } from '../components/company/company.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router'
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuCompanyComponent } from '../components/menu-company/menu-company.component';
import { CompanyCreateComponent } from '../components/company-create/company-create.component';
import { CompanyRemoveComponent } from '../components/company-remove/company-remove.component';
import { CompanyUpdateComponent } from '../components/company-update/company-update.component';
import { CompanyGetComponent } from '../components/company-get/company-get.component';
import { CompanyGetByTypeComponent } from '../components/company-get-by-type/company-get-by-type.component';
import { CompanyGetByDateComponent } from '../components/company-get-by-date/company-get-by-date.component';
import { CompanyGetAllComponent } from '../components/company-get-all/company-get-all.component';
import { CompanyGetByPriceComponent } from '../components/company-get-by-price/company-get-by-price.component';
import { MenuAdminComponent } from '../components/menu-admin/menu-admin.component';
import { MenuCustomerComponent } from '../components/menu-customer/menu-customer.component';
import { Error404Component } from '../components/error404/error404.component';
import { AdminCreateCompanyComponent } from '../components/admin-create-company/admin-create-company.component';
import { AdminRemoveCompanyComponent } from '../components/admin-remove-company/admin-remove-company.component';
import { AdminUpdateCompanyComponent } from '../components/admin-update-company/admin-update-company.component';
import { AdminGetCompanyComponent } from '../components/admin-get-company/admin-get-company.component';
import { AdminGetAllCompaniesComponent } from '../components/admin-get-all-companies/admin-get-all-companies.component';
import { AdminCreateCustomerComponent } from '../components/admin-create-customer/admin-create-customer.component';
import { AdminRemoveCustomerComponent } from '../components/admin-remove-customer/admin-remove-customer.component';
import { AdminUpdateCustomerComponent } from '../components/admin-update-customer/admin-update-customer.component';
import { AdminGetCustomerComponent } from '../components/admin-get-customer/admin-get-customer.component';
import { AdminGetAllCustomersComponent } from '../components/admin-get-all-customers/admin-get-all-customers.component';
import { CustomerPurchaseComponent } from '../components/customer-purchase/customer-purchase.component';
import { CustomerGetAllComponent } from '../components/customer-get-all/customer-get-all.component';
import { CustomerGetAllTypeComponent } from '../components/customer-get-all-type/customer-get-all-type.component';
import { CustomerGetAllPriceComponent } from '../components/customer-get-all-price/customer-get-all-price.component';
import { CompanyUpdateAllComponent } from '../components/company-update-all/company-update-all.component';
import { AdminUpdateAllCustomersComponent } from '../components/admin-update-all-customers/admin-update-all-customers.component';
import { AdminUpdateAllCompaniesComponent } from '../components/admin-update-all-companies/admin-update-all-companies.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LogginComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    FooterComponent,
    MenuCompanyComponent,
    CompanyCreateComponent,
    CompanyRemoveComponent,
    CompanyUpdateComponent,
    CompanyGetComponent,
    CompanyGetByTypeComponent,
    CompanyGetByDateComponent,
    CompanyGetAllComponent,
    CompanyGetByPriceComponent,
    MenuAdminComponent,
    MenuCustomerComponent,
    Error404Component,
    AdminCreateCompanyComponent,
    AdminRemoveCompanyComponent,
    AdminUpdateCompanyComponent,
    AdminGetCompanyComponent,
    AdminGetAllCompaniesComponent,
    AdminCreateCustomerComponent,
    AdminRemoveCustomerComponent,
    AdminUpdateCustomerComponent,
    AdminGetCustomerComponent,
    AdminGetAllCustomersComponent,
    CustomerPurchaseComponent,
    CustomerGetAllComponent,
    CustomerGetAllTypeComponent,
    CustomerGetAllPriceComponent,
    CompanyUpdateAllComponent,
    AdminUpdateAllCustomersComponent,
    AdminUpdateAllCompaniesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule, FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    RouterModule,
    MatSelectModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);