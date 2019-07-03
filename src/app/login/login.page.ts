
import { AuthService } from './../core/auth/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authState$: Observable<any>;
  token: string;
  uid = '123';
  baseUrl = 'https://us-central1-firestore-custom-auth-angular.cloudfunctions.net/createToken';

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.authState$ = this.authService.getAuthStateObserver();
  }

  generateToken() {
    const url = `${this.baseUrl}?uid=${this.uid}`;
    this.httpClient.get(url, {responseType: 'text'}).toPromise().then(
      data => {
        this.token = data;
      }
    );
    return true;
  }

  login() {
   this.authService.login(this.token);
  }

  logout() {
    this.authService.logout();
  }
}
