import {IUser} from "../../interfaces";
import {Observable} from "rxjs";
import {UserService} from "../user/user.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<IUser> {

  constructor(private userService: UserService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
      const { id } = route.params;
      return this.userService.getUserById(id);
  }

}
