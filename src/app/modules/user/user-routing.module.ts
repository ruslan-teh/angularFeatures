import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "../../components/users/users.component";
import {UserDetailsComponent} from "../../components/user-details/user-details.component";
import {UserResolver} from "../../servises/resolvers/user.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
