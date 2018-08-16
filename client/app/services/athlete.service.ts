import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AthleteService{
	constructor(private http:Http){
		console.log('Athlete Service Initialized...');
	}

	getAthletes(){
		return this.http.get('/api/athletes')
			.map(res => res.json());
	}

	addAthlete(newAthlete){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/athlete', JSON.stringify(newAthlete), {headers: headers})
			.map(res => res.json());
	}

	updateAthlete(athlete){
		console.log(athlete._id)
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put('api/athlete/' + athlete._id, JSON.stringify(athlete), {headers: headers})
			.map(res => res.json());
	}
}