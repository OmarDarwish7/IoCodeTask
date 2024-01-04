import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { path } from 'pdfkit';
import { SearchComponent } from './pages/search/search.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';

const routes: Routes = [
  {path:'',component:SearchComponent},
  {path:'movie-info',component:MovieInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
