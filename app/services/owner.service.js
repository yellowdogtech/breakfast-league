"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var OwnerService = (function () {
    function OwnerService(http) {
        this.http = http;
        this.dataUrl = 'app/data/data';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    OwnerService.prototype.getOwners = function () {
        return this.http.get('/app/services/owners.json')
            .toPromise()
            .then(function (response) { return response.json().owners; })
            .catch(this.handleError);
    };
    OwnerService.prototype.getOwner = function (id) {
        return this.getOwners()
            .then(function (owner) { return owner.find(function (owner) { return owner.id === id; }); });
    };
    OwnerService.prototype.getTeam = function (id) {
        return this.getOwners()
            .then(function (response) {
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var owner = response_1[_i];
                for (var _a = 0, _b = owner.teams; _a < _b.length; _a++) {
                    var team = _b[_a];
                    if (team.id === id) {
                        return team;
                    }
                }
            }
        });
    };
    OwnerService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    OwnerService.prototype.findTeam = function (id, response) {
        response.forEach(function (owner) {
            var team = owner.teams.find(function (t) { return t.id === id; });
            if (team)
                return team;
        });
        return null;
    };
    OwnerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OwnerService);
    return OwnerService;
}());
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map