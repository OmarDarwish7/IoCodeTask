import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import {startWith, map } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [];
  searchKeyword: string = "";
  baseImageUrl: string = "https://image.tmdb.org/t/p/w500";
  searchResults : any[] =[] ;
  currentPage : number  = 1;
  hasMoreData : boolean = true;
  notSearched:boolean = true;
  emptyResults:boolean = false;
  isLoading:boolean = false;

  constructor(
    private appService : AppService,
    private webService : WebService,
  ){}

  ngOnInit() {
  }

  appendData() : void{
    console.log("Trying to append data");
    if(this.hasMoreData && !this.isLoading){
      this.isLoading = true;
    this.webService.get(
      `search/movie?query=${this.searchKeyword}&page=${++this.currentPage}`
    )
    .subscribe((response:any)=>{
      console.log(response);
      if(response.results.length > 0){
      this.searchResults = [...this.searchResults,...response.results]
      }
      else{
        console.log("Has no more data")
        this.hasMoreData = false;
      }
      this.isLoading = false;

    });
    }
  }

  onScroll(){
    console.log("Calling Append Data")
    this.appendData();
  }

  submitSearch(searchKeyword : string | null){
    console.log("in");
    if(searchKeyword != ""){
      this.isLoading = true;
      this.currentPage = 1;
      this.hasMoreData = true;
      this.webService
      .get(`search/movie?query=${searchKeyword}&page=1`)
      .subscribe((response:any)=>{
        this.isLoading = false;
        this.notSearched = false;
        if(response.results.length !=0){
          this.searchResults = response.results;
          this.appService.addSearchSuggestion(searchKeyword!);
          this.emptyResults = false;
          this.searchKeyword = searchKeyword!;
        }
        else{
          this.emptyResults = true;
        }
      });
    }
  }

}


