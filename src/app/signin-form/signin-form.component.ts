import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signinUser(e){

    e.preventDefault();
    console.log(e);
    
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(email, password);
    return false;
  }

}
