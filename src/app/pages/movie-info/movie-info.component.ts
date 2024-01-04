import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie : any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movie = JSON.parse(this.route.snapshot.paramMap.get('movie')!);
    console.log(this.movie);
  }

  // movie-detail.component.ts
  getFullImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500'; // Adjust the base URL as needed
    return `${baseUrl}${posterPath}`;
  }

  exportToExcel(): void {
    console.log("ÏN")
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([this.movie]);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    console.log(data);
    console.log("saving");
    FileSaver.saveAs(data, `${this.movie.title}.xlsx`);
  }



}
