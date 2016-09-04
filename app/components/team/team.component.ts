import { Component, Input, OnInit }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { Team }                         from '../../models/team';

import { OwnerService }                  from '../../services/owner.service';

@Component({
    selector: 'team-detail',
    templateUrl: 'app/components/team/team.component.html',
    styleUrls:  ['app/components/team/team.component.css'],
    providers: [ OwnerService ]
})

export class TeamComponent implements OnInit {
    constructor(
        private ownerService: OwnerService,
        private route: ActivatedRoute) {
    }

    @Input() team: Team;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];

            this.ownerService.getTeam(id)
                .then(team => this.team = team);
        });
    }
}