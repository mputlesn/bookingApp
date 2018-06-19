import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import booking from '../arrays/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
constructor(private router: Router) { }

  ngOnInit() {
  }

  Book(checkin, checkout, room, adult, child) {

    booking[0] = checkin;
    booking[1] = checkout ;
    booking[2] = room;
    booking[3] = adult;
    booking[4] = child;

    console.log(booking) ;

    if (room > 1) {
      this.router.navigate(['room-choice2']);
    } else {
      this.router.navigate(['room-choice']);
    }

    return false;
  }

}
