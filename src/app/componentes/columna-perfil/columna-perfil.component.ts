import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-columna-perfil',
  templateUrl: './columna-perfil.component.html',
  styleUrls: ['./columna-perfil.component.css']
})
export class ColumnaPerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  twittear(){
    console.log(arguments);
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    });    
  }
}
