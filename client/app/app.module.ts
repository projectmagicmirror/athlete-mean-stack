import { NgModule } 			from '@angular/core';
import { BrowserModule }		from '@angular/platform-browser';
import { FormsModule }			from '@angular/forms';
import { HttpModule }			from '@angular/http';

import { AppComponent }			from './app.component';
import { AthletesComponent }	from './components/athletes/athletes.component';

@NgModule ({
	imports 	: [ BrowserModule, FormsModule, HttpModule ],
	declarations: [ AppComponent, AthletesComponent ],
	bootstrap	: [ AppComponent ]
})

export class AppModule {}