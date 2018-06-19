import { Component, OnInit } from '@angular/core';
import booking from '../arrays/booking';
import room from '../arrays/room';
import {Room} from '../classes/room';
import totPrice from '../arrays/price';

@Component({
  selector: 'app-room-choice2',
  templateUrl: './room-choice2.component.html',
  styleUrls: ['./room-choice2.component.css']
})

export class RoomChoice2Component implements OnInit {

 

  constructor() { }

  ngOnInit() {
  }
  totPrice = 0;

  btnRoom1 = "Select Room";
  btnRoom2 = "Select Room";
  btnRoom3 = "Select Room";
  btnRoom4 = "Select Room";
  btnRoom5 = "Select Room";
  btnRoom6 = "Select Room";
  btnRoom7 = "Select Room";
  btnRoom8 = "Select Room";
  btnRoom9 = "Select Room";

  checkin = booking[0]
  checkout = booking[1]
  room = booking[2]
  adult = booking[3]
  child = booking[4]

  storeAndChange(pr){
    if(pr == 1){
      let obj = new Room("../../assets/images/bed.jpg","Studio Nonsmoking 1 King Bed",1500);
      if (this.btnRoom1 == "Select Room") {
          this.btnRoom1 = "Room Selected"
          this.totPrice += 1500;
          room.push(obj);
      }
      else if( this.btnRoom1 == "Room Selected"){
        this.btnRoom1 = "Select Room"
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
        this.totPrice -= 1500;
      } 
    }
    else if(pr == 2){
      let obj = new Room("../../assets/images/room7.jpg","1 King Bed Nonsmoking",1200);
      if(this.btnRoom2 == "Select Room")
      {
        this.btnRoom2 = "Room Selected"
        this.totPrice += 1200
        room.push(obj);
      }
      else if( this.btnRoom2 == "Room Selected"){
        this.btnRoom2 = "Select Room"
        this.totPrice -= 1200
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
      } 
    }
    else if(pr == 3){
      let obj = new Room("../../assets/images/room.jpg","King Bed Leisure Nonsmoking",1000);
      if(this.btnRoom3 == "Select Room")
      {
        this.btnRoom3 = "Room Selected"
        this.totPrice += 1000
        room.push(obj);
      }
      else if( this.btnRoom3 == "Room Selected"){
        this.btnRoom2 = "Select Room"
        this.totPrice -= 1000
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
      } 
    }
    else if(pr == 4){
      let obj = new Room("../../assets/images/party-event-in-bali-hotel-ubud-interior-deco-resort_bali-style-interior-design_interior-design_interior-design-tumblr-definition-salary-school-nyc-free-software-indu.jpg","1 King Bed Premium Room",1600);
      if(this.btnRoom4 == "Select Room")
      {
        this.btnRoom4 = "Room Selected"
        this.totPrice += 1600
        room.push(obj);
      }
      else if( this.btnRoom4 == "Room Selected"){
        this.btnRoom4 = "Select Room"
        this.totPrice -= 1600
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
      } 
    }
    else if(pr == 5){
      let obj = new Room("../../assets/images/room9.jpg","Luxury Suite",1650);
      if(this.btnRoom5 == "Select Room")
      {
        this.btnRoom5 = "Room Selected"
        this.totPrice += 1650
        room.push(obj);
      }
      else if( this.btnRoom5 == "Room Selected"){
        this.btnRoom5 = "Select Room"
        this.totPrice -= 1650
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
      } 
    }
    else if(pr == 6){
      let obj = new Room("../../assets/images/parakkat-nature-hotels-and-resorts-pallivasal-idukki-hotels-4kfbqqf.jpg","South-East Suite",2000);
      if(this.btnRoom6 == "Select Room")
      {
        this.btnRoom6 = "Room Selected"
        this.totPrice += 2000
        room.push(obj);
      }
      else if( this.btnRoom6 == "Room Selected"){
        this.btnRoom6 = "Select Room"
        this.totPrice -= 2000
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
      } 
    }
    else if(pr == 7){
      let obj = new Room("../../assets/images/parakkat-nature-hotels-and-resorts-pallivasal-idukki-hotels-z62pod.jpg","King Bed Premium Suite",1400);
      if(this.btnRoom7 == "Select Room")
      {
        this.btnRoom7 = "Room Selected"
        this.totPrice += 1400
        room.push(obj);
      }
      else if( this.btnRoom7 == "Room Selected"){
        this.btnRoom7 = "Select Room"
        this.totPrice -= 1400
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
      } 
    }
    else if(pr == 8){
      let obj = new Room("../../assets/images/port-nature-luxury-resort-hotel-spa-7.jpg","2 double Beds Premium Room",1999);
      if(this.btnRoom8 == "Select Room")
      {
        this.btnRoom8 = "Room Selected"
        this.totPrice += 1999
        room.push(obj);
      }
      else if( this.btnRoom8 == "Room Selected"){
        this.btnRoom8 = "Select Room"
        this.totPrice -= 1999
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
      } 
    }
    else if(pr == 9){
      let obj = new Room("../../assets/images/sea-nature-rayong-resort-and-hotel-3.jpg","Two 3/4 Beds Premium Room",1800);
      if(this.btnRoom9 == "Select Room")
      {
        this.btnRoom9 = "Room Selected"
        this.totPrice += 1800
        room.push(obj);
      }
      else if( this.btnRoom9 == "Room Selected"){
        this.btnRoom9 = "Select Room"
        this.totPrice -= 1800
        var index1 = room.indexOf(obj);
        room.splice(index1, 1);
      } 
    }

    totPrice[0] = this.totPrice
    console.log(room);
    

  }
}
