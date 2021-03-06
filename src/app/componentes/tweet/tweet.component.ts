import { Component, OnInit, Input } from '@angular/core';
import { ITweet } from 'src/app/interfaces/itweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input('tweet') tweet:ITweet;
  
  constructor() { }

  ngOnInit() {
  }

  comentar(tweet:ITweet){
    console.log(tweet);
  }

  compartir(tweet:ITweet){
    console.log(tweet);
  }

  corazon(tweet:ITweet){
    console.log(tweet);
  }
}
