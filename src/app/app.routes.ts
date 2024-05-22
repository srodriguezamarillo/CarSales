import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarFormComponent } from './car-form/car-form.component';

export const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'add-car', component: CarFormComponent }
];
