import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BookingComponent } from './booking/booking.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { BookReservationComponent } from './book-reservation/book-reservation.component';
import { RoomChoiceComponent } from './room-choice/room-choice.component';
import { RoomChoice2Component } from './room-choice2/room-choice2.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninFormComponent,
    SignupFormComponent,
    AboutComponent,
    GallaryComponent,
    BookingComponent,
    UserBookingsComponent,
    BookReservationComponent,
    RoomChoiceComponent,
    RoomChoice2Component,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'gallary', component: GallaryComponent},
      {path: 'signin', component: SigninFormComponent},
      {path: 'signup', component: SignupFormComponent},
      {path: 'booking', component: BookingComponent},
      {path: 'user-bookings', component: UserBookingsComponent},
      {path: 'book-reservation', component: BookReservationComponent},
      {path: 'room-choice', component: RoomChoiceComponent},
      {path: 'room-choice2', component: RoomChoice2Component},
      {path: 'confirm', component: ConfirmComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
