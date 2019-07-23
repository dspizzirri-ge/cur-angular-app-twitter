import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tweetForm:FormGroup = new FormGroup({
    tweet: new FormControl('')
  })

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
  }

  enviarTweet(){

    const form:any = this.tweetForm.getRawValue();
    this.tweetForm.reset({ tweet: {value: '', disabled: false} });

    this.usuarioService.enviarTweet(form.tweet)
      .subscribe();
  }

  limpiarTweet(){

  }
}
