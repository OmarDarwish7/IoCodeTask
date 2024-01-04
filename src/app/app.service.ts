import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private searchSuggestions: string[] = [];

  constructor() {}

  addSearchSuggestion(keyword:string):void{
    if(!this.searchSuggestions.includes(keyword)){
      if(this.searchSuggestions.length == 10){
        this.searchSuggestions.splice(0,1);
        this.searchSuggestions.push(keyword);
        return
      }
      this.searchSuggestions.push(keyword);
    }
  }
  getSearchSuggestions(): string[]{
    return this.searchSuggestions;
  }


}
