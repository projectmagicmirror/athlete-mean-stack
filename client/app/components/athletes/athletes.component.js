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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var athlete_service_1 = require("../../services/athlete.service");
var AthletesComponent = /** @class */ (function () {
    function AthletesComponent(athleteService) {
        var _this = this;
        this.athleteService = athleteService;
        this.sports = ['Golf', 'Tennis', 'Cricket', 'Basketball', 'Baseball', 'American Football', 'Aquatics', 'Archery', 'Automobile Racing',
            'Badminton', 'Beach Volleyball', 'Bobsleigh', 'Body Building', 'Boxing', 'Cross Country Running', 'Soccer'];
        this.athleteService.getAthletes()
            .subscribe(function (athletes) {
            _this.athletes = athletes;
            console.log(athletes);
        });
    }
    AthletesComponent.prototype.addAthlete = function () {
        var _this = this;
        event.preventDefault();
        var newAthlete = {
            name: this.name,
            sport: this.sport,
            dateOfBirth: this.dateOfBirth,
            association: this.association,
            team: this.team,
            gender: this.gender,
            about: this.about,
            isAlcoholic: false
        };
        console.log(newAthlete);
        this.athleteService.addAthlete(newAthlete)
            .subscribe(function (athlete) {
            _this.athletes.push(athlete);
            _this.name = "";
            _this.sport = "";
            _this.team = "";
            _this.association = "";
            _this.dateOfBirth = "";
            _this.gender = "";
            _this.about = "";
        });
    };
    AthletesComponent.prototype.updateAthlete = function (athlete) {
        var _athlete = {
            _id: athlete._id,
            name: athlete.name,
            sport: athlete.sport,
            dateOfBirth: athlete.dateOfBirth,
            association: athlete.association,
            team: athlete.team,
            gender: athlete.gender,
            about: athlete.about,
            isAlcoholic: !athlete.isAlcoholic
        };
        this.athleteService.updateAthlete(_athlete).subscribe(function (data) {
            athlete.isAlcoholic = !athlete.isAlcoholic;
        });
    };
    AthletesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'athletes',
            templateUrl: "athletes.component.html"
        }),
        __metadata("design:paramtypes", [athlete_service_1.AthleteService])
    ], AthletesComponent);
    return AthletesComponent;
}());
exports.AthletesComponent = AthletesComponent;
//# sourceMappingURL=athletes.component.js.map