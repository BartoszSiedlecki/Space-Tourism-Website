import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './components/crew/crew.component';
import { DestinationComponent } from './components/destination/destination.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'destination', component: DestinationComponent, data:{ animation: 'dest'}},
  {path: 'crew', component: CrewComponent, data:{ animation: 'crew'}},
  {path: 'technology', component: TechnologyComponent, data:{ animation: 'tech'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
