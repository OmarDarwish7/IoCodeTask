import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { AppService } from 'src/app/app.service';
import {startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  @Output() searchEvent = new EventEmitter<string | null>();



  constructor(
    private appService : AppService
  ) { }

  ngOnInit(): void {
    this.options = this.appService.getSearchSuggestions();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  submitSearch(){
      this.searchEvent.emit(this.myControl.value);
    }

}
