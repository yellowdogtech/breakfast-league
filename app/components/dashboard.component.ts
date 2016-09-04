import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Owner }                from '../models/owner';
import { Team }                 from '../models/team';
import { OwnerService }         from '../services/owner.service';


@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard.component.html',
    styleUrls: ['app/components/dashboard.component.css'],
    providers: [ OwnerService ]
})

export class DashboardComponent implements OnInit {

    owners: Owner[] = [];

    constructor(
        private router: Router,
        private ownerService: OwnerService
    ) { }

    ngOnInit(): void {
        this.ownerService.getOwners()
             .then(owners => this.owners = owners);
    }

    getVegasSummary(id: number): number {
        let roster = this.owners.filter(owner => owner.id === id);
        let total = 0;

        for(let team of roster[0].teams) {
            total += team.vegas;
        }

        return total;
    }

    getPointSummary(id: number): number {
        let roster = this.owners.filter(owner => owner.id === id);
        let total = 0;

        for(let team of roster[0].teams) {
            total += this.getPoints(team);
        }

        return total;
    }

    getPoints(team: Team): number {
        let total = 0;
        let wins = team.wins;
        let playoffs = team.playoff_wins * 3;
        let conference = team.conference_wins * 7;
        let superbowl = team.superbowl_wins * 12;

        total += (wins + playoffs + conference + superbowl);
        return total;
    }


    // gotoDetail(hero: Hero): void {
    //     console.log(hero.id);
    //     let link = ['/detail', hero.id];
    //     this.router.navigate(link);
    // }
}
