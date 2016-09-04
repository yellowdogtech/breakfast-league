import { Injectable }         from '@angular/core';
import { Headers, Http }      from '@angular/http';

import { Owner }               from '../models/owner';

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

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
