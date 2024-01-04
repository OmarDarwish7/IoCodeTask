import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: any = {};
  @Input() baseImageUrl: string = "";


  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  getFullImageUrl(path:string):string{
    return this.baseImageUrl + path;
  }

  goToMovie(movie: object){
    console.log(movie);
    this.router.navigate(['movie-info',{movie: JSON.stringify(movie)}]);
  }


}
