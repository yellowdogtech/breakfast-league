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
var owner_1 = require('../../models/owner');
var owner_service_1 = require('../../services/owner.service');
var OwnerComponent = (function () {
    function OwnerComponent(ownerService, route) {
        this.ownerService = ownerService;
        this.route = route;
    }
    OwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            console.log(id);
            _this.ownerService.getOwner(id)
                .then(function (owner) { return _this.owner = owner; });
        });
    };
    OwnerComponent.prototype.getVegasTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.owner.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            total += team.vegas;
        }
        return total;
    };
    OwnerComponent.prototype.getWinTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.owner.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            total += team.wins;
        }
        return total;
    };
    OwnerComponent.prototype.getPlayoffTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.owner.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            total += team.playoff_wins * 3;
        }
        return total;
    };
    OwnerComponent.prototype.getConferenceTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.owner.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            total += team.conference_wins * 7;
        }
        return total;
    };
    OwnerComponent.prototype.getSuperbowlTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.owner.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            total += team.superbowl_wins * 12;
        }
        return total;
    };
    OwnerComponent.prototype.getScoringTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.owner.teams; _i < _a.length; _i++) {
            var team = _a[_i];
            total += team.wins + (team.playoff_wins * 3)
                + (team.conference_wins * 7)
                + (team.superbowl_wins * 12);
        }
        return total;
    };
    OwnerComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', owner_1.Owner)
    ], OwnerComponent.prototype, "owner", void 0);
    OwnerComponent = __decorate([
        core_1.Component({
            selector: 'owner-detail',
            templateUrl: 'app/components/owner/owner.component.html',
            styleUrls: ['app/components/owner/owner.component.css'],
            providers: [owner_service_1.OwnerService]
        }), 
        __metadata('design:paramtypes', [owner_service_1.OwnerService, router_1.ActivatedRoute])
    ], OwnerComponent);
    return OwnerComponent;
}());
exports.OwnerComponent = OwnerComponent;
//# sourceMappingURL=owner.component.js.map