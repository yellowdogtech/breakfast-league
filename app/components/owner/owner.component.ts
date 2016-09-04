import { Component, Input, OnInit }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { Owner }                         from '../../models/owner';

import { OwnerService }                  from '../../services/owner.service';

@Component({
    selector: 'owner-detail',
    templateUrl: 'app/components/owner/owner.component.html',
    styleUrls:  ['app/components/owner/owner.component.css'],
    providers: [ OwnerService ]
})

export class OwnerComponent implements OnInit {
    constructor(
        private ownerService: OwnerService,
        private route: ActivatedRoute) {
    }

    @Input() owner: Owner;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            console.log(id);
            this.ownerService.getOwner(id)
                .then(owner => this.owner = owner);
        });
    }

    getVegasTotal(): number {
        let total = 0;

        for(let team of this.owner.teams) {
                total += team.vegas;
        }
        return total;
    }

    getWinTotal(): number {
        let total = 0;

        for(let team of this.owner.teams) {
            total += team.wins;
        }
        return total;
    }

    getPlayoffTotal(): number {
        let total = 0;

        for(let team of this.owner.teams) {
            total += team.playoff_wins * 3;
        }
        return total;
    }

    getConferenceTotal(): number {
        let total = 0;

        for(let team of this.owner.teams) {
            total += team.conference_wins * 7;
        }
        return total;
    }

    getSuperbowlTotal(): number {
        let total = 0;

        for(let team of this.owner.teams) {
            total += team.superbowl_wins * 12;
        }
        return total;
    }

    getScoringTotal(): number {
        let total = 0;

        for(let team of this.owner.teams) {
            total += team.wins + (team.playoff_wins * 3)
                + (team.conference_wins * 7)
                + (team.superbowl_wins * 12);
        }

        return total;
    }

    goBack(): void {
        window.history.back();
    }


}