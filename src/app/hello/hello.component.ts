import { Component, OnInit, AnimationTransitionEvent } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { GetFilmsService } from '../_services/get-films-service';
import { Films } from '../_models/films.model';

declare var $: any;

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  
})
export class HelloComponent implements OnInit {
  show = false;
  films: Films[];
  
  constructor(
    private router: Router,
    private getFilmsService: GetFilmsService
  ) { }

  redirect(){
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
    let chooseEp = (Math.floor(Math.random() * 7) + 1).toString();
    this.getFilmsService.getFilmDetails(chooseEp)
      .subscribe(film => this.films = film);
    this.getFilmsService.getFilms()
      .subscribe(films => this.films = films['results']);

    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.className = "star";
      var xy = getRandomPosition();
      star.style.top = xy[0] + 'px';
      star.style.left = xy[1] + 'px';
      document.body.appendChild(star);
    }

    function getRandomPosition() {  
      var y = window.innerWidth;
      var x = window.innerHeight;
      var randomX = Math.floor(Math.random()*x);
      var randomY = Math.floor(Math.random()*y);
      return [randomX,randomY];
    }

    setTimeout(function(){
      document.getElementById('endAnimation').style.opacity = '1';
    }, 40000)
  }
}
