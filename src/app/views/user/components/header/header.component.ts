import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '@services/notification/notification.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  visible = true;
  userName = '';
  constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService) {
    this.userName = this.authService.getAuthCookie('username');

   }

  ngOnInit(): void {

  }

  toggleMenu(event: any){
    event.preventDefault();
    this.visible = !this.visible;
  }

  logout(event: any){
    event.preventDefault();
    this.authService.logout();
    this.notifyService.showSuccess('You have been logged out! You can relogin back')
    this.router.navigate(['/start/login'])
  }


}

/*
	(function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });

  }); 
})(jQuery); 
*/
