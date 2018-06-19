import { Component, OnInit } from '@angular/core';
import booking from '../arrays/booking';
import room from '../arrays/room';
import {Room} from '../classes/room';
import totprice from '../arrays/price';
import totPrice from '../arrays/price';

@Component({
  selector: 'app-room-choice',
  templateUrl: './room-choice.component.html',
  styleUrls: ['./room-choice.component.css']
})
export class RoomChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkin = booking[0]
  checkout = booking[1]
  room = booking[2]
  adult = booking[3]
  child = booking[4]

  
  store(pr){

    if (pr === 1)
    {
      let obj = new Room("../../assets/images/party-event-in-bali-hotel-ubud-interior-deco-resort_bali-style-interior-design_interior-design_interior-design-tumblr-definition-salary-school-nyc-free-software-indu.jpg"," 1 King Bed Premium Room",2000);
      room.push(obj);
      totPrice[0] = 2000;

    } 
    else if(pr === 2)
    {
      let obj = new Room("../../assets/images/room.jpg","King Bed Leisure Nonsmoking", 550);
      room.push(obj);
      totPrice[0] = 550;
    }
    else if(pr == 3)
    {
      let obj = new Room("../../assets/images/bed.jpg", "Studio Nonsmoking 1 King Bed", 1500);
      room.push(obj);
      totPrice[0] = 1500;
    }
    else
    {
      let obj = new Room("../../assets/images/room7.jpg", "1 King Bed Nonsmoking", 1500);
      room.push(obj);
      totPrice[0] = 1500;
    }

    console.log(room);
    
  }  
}
