import { Component, OnInit } from '@angular/core';
import { CastService } from 'app/core/services/cast.service';
import { CastDetails } from 'app/shared/models/CastDetails';
import { Cast } from 'app/shared/models/MovieDetails';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  castDetail!:CastDetails;
  constructor(private castService:CastService) { }

  ngOnInit(): void {
    this.castService.getCastDetails().subscribe(c => {
      this.castDetail = c;
      console.log(this.castDetail);
    })
  }

}
