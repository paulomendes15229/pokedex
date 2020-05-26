import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonComponent } from './pages/list/pokemon-list.component';
import { PokemonDetailsComponent } from './pages/details/pokemon-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: ListPokemonComponent },
  { path: 'pokemon-detail', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
