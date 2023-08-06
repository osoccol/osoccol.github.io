import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GiftComponent } from './gift/gift.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'gifts', component: GiftComponent},
  {path:'transfer', component: AccountComponent},
  {path:'**', redirectTo: ''},
  {path:'*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
