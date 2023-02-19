import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../../interfaces";
import {urls} from "../../constans";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClientModule:HttpClient) { }

  getAllPosts(): Observable<IPosts[]> {
    return this.httpClientModule.get<IPosts[]>(urls.posts)
  }

  getPostsByUserId(id: number): Observable<IPosts[]>{
    return this.httpClientModule.get<IPosts[]>(`${urls.posts}?userId=${id}`)
  }

}
