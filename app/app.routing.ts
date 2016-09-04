import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './components/dashboard.component';
import { OwnerComponent }       from './components/owner/owner.component';
import { TeamComponent }       from './components/team/team.component';

const appRoutes:  Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'owner/:id',
        component: OwnerComponent
    },
    {
        path: 'team/:id',
        component: TeamComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);