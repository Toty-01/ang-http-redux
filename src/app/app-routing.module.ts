import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'users', component: UsersComponent },
  { path : 'produits', component: ProduitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
