import { Component, OnInit } from '@angular/core';
import room from '../arrays/room';
import booking from '../arrays/booking';
import user from '../arrays/user';
import bankingInfo from '../arrays/bankingInfo';
import totPrice from '../arrays/price';

@Component({
  selector: 'app-book-reservation',
  templateUrl: './book-reservation.component.html',
  styleUrls: ['./book-reservation.component.css']
})
export class BookReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkin = booking[0];
  checkout = booking[1];
  room = booking[2];
  adult = booking[3];
  child = booking[4]; 
  image = room[0];   
  title = room[1];
  totPrice = totPrice[0];
  fName = user[0];   
  lName = user[1];
  email = user[2];
  country = user[3];
  cell = user[4];
  address = user[5]
  payCardType = bankingInfo[0];
  payCardNum = bankingInfo[1];

}
