import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTabsModule} from "@angular/material/tabs";


import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/login/login.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolver} from "./servises/resolvers/user.resolver";
import {AdminComponent} from "./components/admin/admin.component";
import {AdminGuard} from "./servises/guard/admin.guard";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)
      },
      {
        path: 'users/:id', component: UserDetailsComponent, resolve: {data:UserResolver}
      },
      {
        path: 'posts', loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'admin', component: AdminComponent, canActivate: [AdminGuard]
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTabsModule,
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})


export class AppRoutingModule {
}
