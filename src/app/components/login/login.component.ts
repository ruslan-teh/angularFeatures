import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.loginGroup = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  saveFrom(): void {
    if (this.loginGroup.status === "VALID") {
      this.router.navigate(['admin'], {queryParams: [this.loginGroup.status]})
    }
  }

}
