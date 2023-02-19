import { Component, OnInit } from '@angular/core';
import {UserService} from "../../servises/user/user.service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[]
  color = 'red'

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.getAllUsers()
  }


  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value)
  }

}
