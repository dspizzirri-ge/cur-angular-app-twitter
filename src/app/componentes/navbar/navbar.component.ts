import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  backgroundImage: string = "url('data:image/jpeg;base64,')";

  constructor() { }

  ngOnInit() {
  }

  twittear() {

  }

}
