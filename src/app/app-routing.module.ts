import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { AccountComponent } from './service/account/account.component';
import { NewAccountComponent } from './service/new-account/new-account.component';
const routes: Routes = [
  {path:'serviceexample', component: ServiceComponent},
  {path:'app', component:AppComponent},
  // { path: 'account', component: AccountComponent },
  // { path: 'newAccount', component: NewAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
