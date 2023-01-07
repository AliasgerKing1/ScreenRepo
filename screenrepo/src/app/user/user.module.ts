import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { ScreenshotComponent } from './shared/screenshot/screenshot.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    ScreenshotComponent,
    SidebarComponent,
    SearchbarComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
