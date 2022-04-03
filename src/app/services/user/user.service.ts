import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '@interfaces/tmdb.interface';
import { AuthService } from '@services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserInformation(): UserDetails {
    const userName = this.authService.getAuthCookie('username');
    const sessionId = this.authService.getAuthCookie('sessionId')
    const accountId = parseInt(this.authService.getAuthCookie('accountId'));
    const details: UserDetails  = {
      username: userName,
      sessionId,
      accountId
    }
    return details;
  }

}
