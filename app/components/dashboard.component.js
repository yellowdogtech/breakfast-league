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
var owner_service_1 = require('../services/owner.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, ownerService) {
        this.router = router;
        this.ownerService = ownerService;
        this.owners = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ownerService.getOwners()
            .then(function (owners) { return _this.owners = owners; });
    };
    DashboardComponent.prototype.getVegasSummary = function (id) {
        var roster = this.owners.filter(function (owner) { return owner.id === id; });
        var total = 0;
        for (var _i = 0, _a = roster[0].teams; _i < _a.length; _i++) {
            var team = _a[_i];
            total += team.vegas;
        }
        return total;
    };
    DashboardComponent.prototype.getPointSummary = function (id) {
        var roster = this.owners.filter(function (owner) { return owner.id === id; });
        var total = 0;
        for (var _i = 0, _a = roster[0].teams; _i < _a.length; _i++) {
            var team = _a[_i];
            total += this.getPoints(team);
        }
        return total;
    };
    DashboardComponent.prototype.getPoints = function (team) {
        var total = 0;
        var wins = team.wins;
        var playoffs = team.playoff_wins * 3;
        var conference = team.conference_wins * 7;
        var superbowl = team.superbowl_wins * 12;
        total += (wins + playoffs + conference + superbowl);
        return total;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/components/dashboard.component.html',
            styleUrls: ['app/components/dashboard.component.css'],
            providers: [owner_service_1.OwnerService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, owner_service_1.OwnerService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map