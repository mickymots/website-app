import {
	Injectable
}
from '@angular/core';

import {
	profileSummary
}
from '../data/profileSummary';

import {
	projects
}
from '../data/projects';

 @ Injectable()
export class ProfileService {

	getProfileSummary() {

		return profileSummary.summary;
	}
	
	getProjects() {

		return projects;
	}


}