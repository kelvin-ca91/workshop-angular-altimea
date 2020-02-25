import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  @Input('mensaje') message: any
  isShow: boolean = true;
  
  listMovies = [];
  constructor( 
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.listMovies = this.moviesService.list();
  }

  showHidden() {
    this.isShow = !this.isShow;
  }

}
