import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from '../components/loggin/loggin.component';
import { AdminComponent } from '../components/admin/admin.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { CompanyComponent } from '../components/company/company.component';
import { CompanyCreateComponent } from '../components/company-create/company-create.component';
import { CompanyRemoveComponent } from '../components/company-remove/company-remove.component';
import { CompanyUpdateComponent } from '../components/company-update/company-update.component';
import { CompanyGetComponent } from '../components/company-get/company-get.component';
import { CompanyGetAllComponent } from '../components/company-get-all/company-get-all.component';
import { CompanyGetByTypeComponent } from '../components/company-get-by-type/company-get-by-type.component';
import { CompanyGetByPriceComponent } from '../components/company-get-by-price/company-get-by-price.component';
import { CompanyGetByDateComponent } from '../components/company-get-by-date/company-get-by-date.component';
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
import { CustomerGetAllComponent } from '../components/customer-get-all/customer-get-all.component';
import { CustomerGetAllTypeComponent } from '../components/customer-get-all-type/customer-get-all-type.component';
import { CustomerGetAllPriceComponent } from '../components/customer-get-all-price/customer-get-all-price.component';
import { CustomerPurchaseComponent } from '../components/customer-purchase/customer-purchase.component';
import { CompanyUpdateAllComponent } from '../components/company-update-all/company-update-all.component';
import { AdminUpdateAllCustomersComponent } from '../components/admin-update-all-customers/admin-update-all-customers.component';
import { AdminUpdateAllCompaniesComponent } from '../components/admin-update-all-companies/admin-update-all-companies.component';

const routes:Routes =[
  {
    path:'',
    redirectTo:'/loggin',
    pathMatch:'full'
},{
    path:'loggin',
    component: LogginComponent
},
{
    path:'admin',
    component: AdminComponent,
    children:[
      {path:'createCompany', component:AdminCreateCompanyComponent},
      {path:'removeCompany', component:AdminRemoveCompanyComponent},
      {path:'updateCompany/:id', component:AdminUpdateCompanyComponent},
      {path:'updateAllCompanies', component:AdminUpdateAllCompaniesComponent},
      {path:'getCompany', component:AdminGetCompanyComponent},
      {path:'getAllCompanies', component:AdminGetAllCompaniesComponent},
      {path:'createCustomer', component:AdminCreateCustomerComponent},
      {path:'removeCustomer', component:AdminRemoveCustomerComponent},
      {path:'updateCustomer/:id', component:AdminUpdateCustomerComponent},
      {path:'updateAllCustomers', component:AdminUpdateAllCustomersComponent},
      {path:'getCustomer', component:AdminGetCustomerComponent},
      {path:'getAllCustomer', component:AdminGetAllCustomersComponent},
    ]
},{
  path:'customer',
  component: CustomerComponent,
  children:[
    {path:'getAll', component: CustomerGetAllComponent},
    {path:'getByType', component: CustomerGetAllTypeComponent},
    {path:'getByPrice', component: CustomerGetAllPriceComponent},
    {path:'purchaseCoupon', component: CustomerPurchaseComponent}
  ]
},{
  path:'company',
  component:CompanyComponent ,
  children:[
      {path:'create', component:CompanyCreateComponent},
      {path:'remove', component:CompanyRemoveComponent},
      {path:'update/:id', component:CompanyUpdateComponent},
      {path:'updateAll', component:CompanyUpdateAllComponent},
      {path:'get', component:CompanyGetComponent},
      {path:'getAll', component:CompanyGetAllComponent},
      {path:'getByType', component:CompanyGetByTypeComponent},
      {path:'getByPrice', component:CompanyGetByPriceComponent},
      {path:'getByDate', component:CompanyGetByDateComponent}
    ]
  },{
    path:'**',
    component:Error404Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
