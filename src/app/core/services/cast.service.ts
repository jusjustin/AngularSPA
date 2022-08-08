import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CastDetails } from 'app/shared/models/CastDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http:HttpClient) { }

  getCastDetails(id:number):Observable<CastDetails>{
    return this.http.get<CastDetails>("https://movieshopapi.azurewebsites.net/api/Cast/" + id);
  }

}
