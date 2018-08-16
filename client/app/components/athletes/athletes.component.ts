import { Component }		from '@angular/core';
import { AthleteService }	from '../../services/athlete.service';
import { Athlete }			from '../../../athlete';

@Component({
	moduleId 	: module.id,
	selector	: 'athletes',
	templateUrl	: "athletes.component.html"
})

export class AthletesComponent {
	sports = ['Golf','Tennis','Cricket','Basketball','Baseball','American Football','Aquatics','Archery','Automobile Racing',
				'Badminton','Beach Volleyball','Bobsleigh','Body Building','Boxing','Cross Country Running','Soccer'];
	athletes: Athlete[];
	name: string;
	sport: string;
	association: string;
	dateOfBirth: string;
	team: string;
	gender: string;
	about: string;
	isAlcoholic: boolean;

	constructor (private athleteService:AthleteService){
		this.athleteService.getAthletes()
			.subscribe(athletes => {
				this.athletes = athletes;
				console.log(athletes);
			});
	}

	addAthlete(){
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
		}

		console.log(newAthlete);

		this.athleteService.addAthlete(newAthlete)
			.subscribe(athlete => {
				this.athletes.push(athlete);
				this.name = "";
				this.sport = "";
				this.team = "";
				this.association = "";
				this.dateOfBirth = "";
				this.gender = "";
				this.about = "";
			});
	}

	updateAthlete(athlete){
		var _athlete = {
			_id : athlete._id,
			name: athlete.name,
			sport: athlete.sport,
			dateOfBirth: athlete.dateOfBirth,
			association: athlete.association,
			team: athlete.team,
			gender: athlete.gender,
			about: athlete.about,
			isAlcoholic: !athlete.isAlcoholic
		}

		this.athleteService.updateAthlete(_athlete).subscribe(data => {
			athlete.isAlcoholic = !athlete.isAlcoholic;
		});
	}
}