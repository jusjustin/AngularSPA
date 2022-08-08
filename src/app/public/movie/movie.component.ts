import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'app/core/services/movies.service';
import { Movie } from 'app/shared/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies!:Movie[];
  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getTopGrossingMovies().subscribe(m => {
      this.movies = m;
      console.log(this.movies);
    });
  }

}
