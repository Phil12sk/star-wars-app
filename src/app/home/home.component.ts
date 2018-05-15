import { Component, OnInit } from '@angular/core';
import { GetFilmsService } from '../_services/get-films-service'
import { GetPeopleService } from '../_services/get-people-service';
import { GetPlanetService } from '../_services/get-planet-service';
import { GetSpecieService } from '../_services/get-specie-service';
import { GetStarshipService } from '../_services/get-starship-service';
import { GetVehicleService } from '../_services/get-vehicle-service';
import { Films } from '../_models/films.model';
import { People } from '../_models/people.model';
import { Planet } from '../_models/planet.model';
import { Specie } from '../_models/specie.model';
import { Starship } from '../_models/starship.model';
import { Vehicle } from '../_models/vehicle.model';
import { AlertComponent } from '../modal/alert.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  films: Films[];
  peoples: People[];
  planets: Planet[];
  species: Specie[];
  starships: Starship[];
  vehicles: Vehicle[];
  constructor(
    private getFilmsService: GetFilmsService,
    private getPeopleService: GetPeopleService,
    private getPlanetService: GetPlanetService,
    private getSpecieService: GetSpecieService,
    private getStarshipService: GetStarshipService,
    private getVehicleService: GetVehicleService,
    private alertComponent: AlertComponent
  ) { }

  openModalInfos(event){
    let evt = Number(event['target']['id']);
    let id: string
    if(evt <= 3){
      id = (Number(evt) + 3).toString();
    }else if(evt > 3 && evt < 7){
      id = (Number(evt) - 3).toString();
    }else{
      id = evt.toString();
    }
    this.getFilmsService.getFilmDetails(id)
      .subscribe(film => this.alertComponent.showAlert(film));
  }

  ngOnInit() {
    this.getFilmsService.getFilms()
      .subscribe(films => this.films = films['results']);

    this.getPeopleService.getPeople()
      .subscribe(people => this.peoples = people['results']);

    this.getPlanetService.getPlanet()
      .subscribe(planet => this.planets = planet['results']);

    this.getSpecieService.getSpecie()
      .subscribe(specie => this.species = specie['results']);

    this.getStarshipService.getStarship()
      .subscribe(starship => this.starships = starship['results']);
    
    this.getVehicleService.getVehicle()
      .subscribe(vehicle => this.vehicles = vehicle['results']);
  }
}
