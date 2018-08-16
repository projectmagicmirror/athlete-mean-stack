import { Component }		from '@angular/core';
import { AthleteService} 	from './services/athlete.service';

@Component({
	moduleId: module.id,
	selector: "my-app",
	templateUrl: "app.component.html",
	providers: [AthleteService]
})

export class AppComponent {}