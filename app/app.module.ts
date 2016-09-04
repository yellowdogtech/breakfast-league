import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { DataService }              from './data/data.service';
import './rxjs-extensions';


import { AppComponent }             from './app.component';
import { HeroDetailComponent }      from './hero-detail.component';
import { DashboardComponent }       from './components/dashboard.component';
import { HeroesComponent }          from './heroes.component';
import { HeroService }              from './hero.service';
import { OwnerService }             from './services/owner.service';

import { routing }                  from './app.routing';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    bootstrap:      [AppComponent]
})

export class AppModule { }
