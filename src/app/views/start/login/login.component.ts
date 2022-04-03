import { Component, OnInit } from '@angular/core';
import { AuthResponse } from '@interfaces/tmdb.interface';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { NotificationService } from '@services/notification/notification.service';
import { environment } from "environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  apiKey : string = '';
  constructor(private notifyService : NotificationService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  saveAuthState(response: AuthResponse){
    const cookieSet = this.authService.setAuthCookie(response, this.apiKey);
    if (cookieSet){
      //redirect user to tmdb now
      //redirect
      window.location.href =`${environment.verifyToken}${response.request_token}?redirect_to=${environment.appURL}start/authorized`;
      return;
    }else{
      this.notifyService.showError("There was an error saving your session");
      return;
    }
  }

  handleAuthError(e: any){
    this.notifyService.showError("There was an error verifying your API Key. Please check and try again");
  }



  authenticate(): void {
    if (this.apiKey === ''){
      this.notifyService.showError("API Key to TMDB is required");
      return;
    }

    this.authService.getAuthResponse(this.apiKey).subscribe({
      complete: () => { console.log('completed') }, // completeHandler
      error: (e) => { this.handleAuthError(e) },    // errorHandler 
      next: (v) => { console.log('done ' + v); this.saveAuthState(v)},     // nextHandler
  
  });

  }

  handleUserInput(value: string): void{
    this.apiKey = value.trim();
  }

}
