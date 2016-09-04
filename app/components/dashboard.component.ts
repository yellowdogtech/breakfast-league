import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Owner }                from '../models/owner';
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

    // gotoDetail(hero: Hero): void {
    //     console.log(hero.id);
    //     let link = ['/detail', hero.id];
    //     this.router.navigate(link);
    // }
}
