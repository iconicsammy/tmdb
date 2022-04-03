import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate() {
        const apiKeyExists = this.authService.getAuthCookie('accountId');
        if (apiKeyExists) {
            return true;
        }

        this.router.navigate(['/start/login']);
        return false;
    }
}