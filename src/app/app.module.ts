import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SummaryComponent }   from './summary.component';
import { ContactComponent }   from './contact.component';
import { ProjectsComponent }   from './projects.component';
import { RouterModule, RouterOutlet, RouterLink }   from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, 
  RouterModule.forRoot([
  {
    path: '',
    component: SummaryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
])],
  declarations: [ AppComponent, ContactComponent, SummaryComponent, ProjectsComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
