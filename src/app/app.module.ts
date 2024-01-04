import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
// Angular Material
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LoadingSpinnerComponent } from './layout/loading-spinner/loading-spinner.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { ButtonComponent } from './layout/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    MovieInfoComponent,
    SearchComponentComponent,
    MovieListComponent,
    LoadingSpinnerComponent,
    MovieListItemComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    AsyncPipe,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
