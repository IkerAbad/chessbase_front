import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isSignedIn!: boolean;

  constructor(private storageService: TokenStorageService, private authService: AuthService,public router: Router) { }

  ngOnInit(): void {
    this.isSignedIn = this.authService.isLoggedIn()
  }

  signOut(): void {
    this.authService.logOut()
   this.reloadPage();
   this.router.navigateByUrl("/home")
  }

  reloadPage(): void {
    window.location.reload();
  }
}
