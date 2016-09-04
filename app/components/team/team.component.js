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
var router_1 = require('@angular/router');
var team_1 = require('../../models/team');
var owner_service_1 = require('../../services/owner.service');
var TeamComponent = (function () {
    function TeamComponent(ownerService, route) {
        this.ownerService = ownerService;
        this.route = route;
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.ownerService.getTeam(id)
                .then(function (team) { return _this.team = team; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', team_1.Team)
    ], TeamComponent.prototype, "team", void 0);
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'team-detail',
            templateUrl: 'app/components/team/team.component.html',
            styleUrls: ['app/components/team/team.component.css'],
            providers: [owner_service_1.OwnerService]
        }), 
        __metadata('design:paramtypes', [owner_service_1.OwnerService, router_1.ActivatedRoute])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map