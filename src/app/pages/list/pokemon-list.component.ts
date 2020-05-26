import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

declare let $: any
@Component({
  selector: 'list-pokemon',
  templateUrl: './pokemon-list.template.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class ListPokemonComponent implements OnInit {

  dtOptions: any = {};
  pokemon: [] = [];

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getAllPokemons()
  }

  getAllPokemons() {
    this.pokemonService.getListPokemon().subscribe(
      data => {
        this.pokemon = data.results
        console.log(this.pokemon)
      }
    )
  }

  getPokemon(pokemon) {
    // this.pokemonService.getDetailPokemon(pokemon.url).subscribe(
    //   data => {
    this.router.navigate(['/pokemon-details'])
    //   }
    // )

  }


}
