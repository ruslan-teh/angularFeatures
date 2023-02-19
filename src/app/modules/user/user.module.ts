import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserService} from "../../servises/user/user.service";
import {UserComponent} from "../../components/user/user.component";
import {UsersComponent} from "../../components/users/users.component";
import {UserDetailsComponent} from "../../components/user-details/user-details.component";
import {UserDirective} from "../../directives";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        UserComponent,
        UsersComponent,
        UserDetailsComponent,
        UserDirective
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    UserDetailsComponent,
    UsersComponent
  ],
    providers: [
        UserService
    ]
})
export class UserModule { }
