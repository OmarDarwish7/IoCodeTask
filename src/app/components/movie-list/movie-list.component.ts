import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Output() onScrollEvent = new EventEmitter();
  @Input() searchResults: any[] = [];
  @Input() baseImageUrl: string = "";



  constructor() { }

  ngOnInit(): void {
  }

  onScroll(){
    console.log("Calling Append Data")
    this.onScrollEvent.emit();
  }


}
