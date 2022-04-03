import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StartRoutingModule } from './start-routing.module';
import { AuthorizedComponent } from './authorized/authorized.component';


@NgModule({
  declarations: [
    LoginComponent,
    AuthorizedComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule
  ]
})
export class StartModule { }
