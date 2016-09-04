import { Injectable }         from '@angular/core';
import { Headers, Http }      from '@angular/http';

import { Owner }              from '../models/owner';
import { Team }               from '../models/team';

import 'rxjs/add/operator/toPromise'


@Injectable()
export class OwnerService {
  private dataUrl = 'app/data/data';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getOwners(): Promise<Owner[]> {
    return this.http.get('/app/services/owners.json')
                .toPromise()
                .then(response => response.json().owners as Owner[])
                .catch(this.handleError);
  }

  getOwner(id: number): Promise<Owner> {
    return this.getOwners()
      .then(owner => owner.find(owner => owner.id === id));
  }

  getTeam(id: number): Promise<Team> {
    return this.getOwners()
      .then(function(response) {
        for(let owner of response) {
          for(let team of owner.teams) {
            if(team.id === id) {
              return team;
            }
          }
        }
      })
  }



  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  findTeam(id:number, response: Owner[]): Team {
    response.forEach(owner => {
      let team = owner.teams.find(t => t.id === id);
        if(team)
          return team;
    });

    return null;

  }
}
