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
var profile_service_1 = require('./services/profile.service');
var profile_1 = require('./model/profile');
var ProjectsComponent = (function () {
    //create a new profile object 
    function ProjectsComponent(profileService) {
        this.profileService = profileService;
        this.profile = new profile_1.Profile();
    }
    //initiate profile object with summary info
    ProjectsComponent.prototype.ngOnInit = function () {
        this.profile.projects = this.profileService.getProjects();
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'root-container',
            templateUrl: 'views/projects.html',
            providers: [profile_service_1.ProfileService]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map