import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTableModule} from "angular-6-datatable";
import { ListPokemonComponent } from './pages/list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import * as $ from "jquery";
import { PokemonDetailsComponent } from './pages/details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
