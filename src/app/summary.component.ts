import { Component, OnInit } from '@angular/core';

import {ProfileService } from './services/profile.service';
import {Profile} from './model/profile';

@Component({
  selector: 'root-container',
  templateUrl: 'views/summary.html',
  providers: [ProfileService]
})


export class SummaryComponent implements OnInit{
	
	profile : Profile;
	
	//create a new profile object 
	constructor(private profileService : ProfileService){
		this.profile = new Profile();
	}

	//initiate profile object with summary info
	ngOnInit(){
		this.profile.summary = this.profileService.getProfileSummary()
	}
	
}
