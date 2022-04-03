import { Injectable } from '@angular/core';
import { endPoints } from '@config/endPoints';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountDetails, AuthResponse, CreateSession } from '@interfaces/tmdb.interface';
import { config } from '@config/config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthResponse(token: string): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${endPoints.auth}${token}`)
   }

   createSession(requestToken: string): Observable<CreateSession> {

    return this.http.post<CreateSession>(`${endPoints.createSession}`, {
      "request_token": requestToken
    })
   }

   getAccountDetails(sessionInfo: CreateSession): Observable<AccountDetails> {

    return this.http.get<AccountDetails>(`${endPoints.getAccountDetails}?session_id=${sessionInfo.session_id}`)
   }

   getAuthCookie(cookieName: string): string{
    const cookies = document.cookie.split(';');

    const totalCookies = cookies.length;
    for(let counter = 0; counter < totalCookies; counter++){
       const cookieInfo = cookies[counter].split('=')
       if (cookieInfo[0].trim() === cookieName){
           return cookieInfo[1]
       }
    }

    return '';
  }

  setSessionCookie(sessionInfo: CreateSession, accountInfo: AccountDetails): boolean{
    if (sessionInfo.success === true){
     let d:Date = new Date();
     d.setTime(d.getTime() + config.stayLoggedInForXDays * 24 * 60 * 60 * 1000);
     const expires:string = `expires=${d.toUTCString()}`;
     document.cookie = `sessionId=${sessionInfo.session_id}; ${expires};SameSite=None; Secure; path=/`;
     document.cookie = `accountId=${accountInfo.id}; ${expires};SameSite=None; Secure; path=/`;
     document.cookie = `username=${accountInfo.username}; ${expires};SameSite=None; Secure; path=/`;
     return true;
    }
    return false;
  }

  setAuthCookie(token: AuthResponse, apiKey: string): boolean{
    if (token.success === true){
     let d:Date = new Date();
     d.setTime(d.getTime() + config.stayLoggedInForXDays * 24 * 60 * 60 * 1000);
     const expires:string = `expires=${d.toUTCString()}`;
     document.cookie = `apiKey=${apiKey}; ${expires};SameSite=None; Secure; path=/`;
     document.cookie = `requestToken=${token.request_token}; ${expires};SameSite=None; Secure; path=/`;
     return true;
    }
    return false;
  }

  logout(){
    document.cookie = "apiKey= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;SameSite=None; Secure; path=/"
    document.cookie = "requestToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;SameSite=None; Secure; path=/"
    document.cookie = "sessionId= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;SameSite=None; Secure; path=/"
    document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;SameSite=None; Secure; path=/"
    document.cookie = "accountId= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;SameSite=None; Secure; path=/"
  }

}
