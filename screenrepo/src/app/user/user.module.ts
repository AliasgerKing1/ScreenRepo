import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [UserComponent, HomeComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
