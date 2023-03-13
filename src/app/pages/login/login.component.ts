import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public loginWithGoogle() {
    this.loginService.loginWithGoogle()
    .then(() => this.router.navigate(['/home']))
  }

  public loginAnonymously() {
    this.loginService.loginAnonymously()
    .then(() => this.router.navigate(['/home']))
  }

}
