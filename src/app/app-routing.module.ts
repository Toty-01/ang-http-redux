import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'users', component: UserComponent },
  { path : 'produits', component: ProduitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
