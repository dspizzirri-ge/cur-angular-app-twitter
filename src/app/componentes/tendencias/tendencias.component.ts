import { Component, OnInit } from '@angular/core';
import { TendenciasService } from 'src/app/servicios/tendencias.service';
import { ITendecias } from 'src/app/interfaces/itendecias';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.css']
})
export class TendenciasComponent implements OnInit {

  tendencias: Array<ITendecias>;

  constructor(private tendenciasService: TendenciasService) {
    this.tendencias = new Array<ITendecias>();
  }

  ngOnInit() {

    this.tendenciasService.getTendencias()
      .subscribe((data) => {
        this.tendencias = [...data]
      })
  }
}
