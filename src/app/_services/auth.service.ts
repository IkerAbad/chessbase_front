
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService} from '@auth0/angular-jwt';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userAuthState: any;
  constructor(private http: HttpClient ,  private tokenStorage: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, name: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      name,
      email,
      password
    }, httpOptions);
  }
  isLoggedIn() {
    // get token from local storage
  if(this.tokenStorage.getToken()!=null)
    return true;//return !this.jwtHelper.isTokenExpired(token);
  else
    return false;
  }

  logOut(){
    this.tokenStorage.deleteToken()

  }



}
