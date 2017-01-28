import {Project} from './project'

export class Profile{

	 summary : String[]
	 projects: Project[]
	 contact: {}
 
	constructor (){
		this.summary = [];
		this.projects = [];
		this.contact = {};
	}
	
}