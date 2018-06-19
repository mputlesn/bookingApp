import { Component, OnInit } from '@angular/core';
import room from '../arrays/room';
import booking from '../arrays/booking';
import user from '../arrays/user';
import bookingInfo from '../arrays/bankingInfo';


@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']


})
export class UserBookingsComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }
  
  checkin = booking[0];
  checkout = booking[1];
  room = booking[2];
  adult = booking[3];
  child = booking[4];  

  test = room;

  bookReservation(fName, lName, email, country, cell, address, payCardType, payCardNum){
    console.log(room);
    user[0] = fName;
    user[1] = lName;
    user[2] = email;
    user[3] = country;
    user[4] = cell;
    user[5] = address
    bookingInfo[0] = payCardType;
    bookingInfo[1] = payCardNum;

    console.log(user);
    console.log(bookingInfo);
    
    
  }

  

}
