import { Component, OnInit } from '@angular/core';
import { AccountDetails, CreateSession } from '@interfaces/tmdb.interface';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { NotificationService } from '@services/notification/notification.service';
import { concatMap, tap } from 'rxjs';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {

  apiKey : string = '';
  constructor(private notifyService : NotificationService, private authService: AuthService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    const requestToken = this.authService.getAuthCookie('requestToken');

    this.authService.createSession(requestToken).pipe(
      concatMap((res: CreateSession) => this.authService.getAccountDetails(res).pipe(tap((accountDetails: AccountDetails) => this.saveSession(res, accountDetails))))
    ).subscribe(()=>this.spinner.hide());
  }

  saveSession(sessionInfo: CreateSession, forUser: AccountDetails){
    const cookieSet = this.authService.setSessionCookie(sessionInfo, forUser);
    if (cookieSet){

      this.router.navigate(['/user']);
      return;
    }else{
      this.notifyService.showError("There was an error saving your session");
      return;
    }
  }

  handleAuthError(e: any){
    this.notifyService.showError("There was an error verifying your API Key. Please check and try again");
  }

}
