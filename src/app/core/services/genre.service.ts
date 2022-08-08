import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genre } from 'app/shared/models/Genre';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }

  getAllGenres():Observable<Genre>{
    return this.http.get<Genre>("https://movieshopapi.azurewebsites.net/api/Genres");
  }
}
