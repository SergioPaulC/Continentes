import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsComponent } from './views/continents/continents.component';
import { CitiesComponent } from './views/cities/cities.component';

const routes: Routes = [
  // { path: 'continentes', component: ContinentsComponent },
  { path: 'cities/:continente/:pais', component: CitiesComponent },
  // { path: '', redirectTo: 'continentes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
