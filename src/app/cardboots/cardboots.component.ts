import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardboots',
  templateUrl: './cardboots.component.html',
  styleUrls: ['./cardboots.component.css']
})
export class CardbootsComponent implements OnInit {
  title = 'Title of a longer featured blog postrapAngular';
  para1='Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.';

  constructor() { }

  ngOnInit(): void {
  }

}
