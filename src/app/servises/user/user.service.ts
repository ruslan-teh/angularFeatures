import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../constans";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientModule:HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClientModule.get<IUser[]>(urls.users)
  }

  getUserById(id: number): Observable<IUser>{
    return this.httpClientModule.get<IUser>(`${urls.users}/${id}`)
  }
}
