import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Hero }                 from './hero';
import { HeroService }          from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    constructor(
        private router: Router,
        private heroService: HeroService
    ) { }
    
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }   

    add(name: string): void {
        name = name.trim();
        if(!name) return;

        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }
}
