import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare let $: any
@Component({
    selector: 'pokemon-details',
    templateUrl: './pokemon-details.template.html',
    styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
    id: number;
    pokemonDetails: any = Object;
    abilities: Object[] = []
    moves: Object[] = []

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private pokemonService: PokemonService) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.id = params.id;
            this.detailPokemon(this.id);
        });
    }

    detailPokemon(url) {
        let context = this;
        this.pokemonService.getDetailPokemon(url).subscribe(
            data => {
                data.abilities.forEach(item => {
                    context.abilities.push(item.ability.name)
                });

                data.moves.forEach(item => {
                    context.moves.push(item.move.name)
                });

                this.pokemonDetails = data
                console.log(data)
            }
        )
    }
}