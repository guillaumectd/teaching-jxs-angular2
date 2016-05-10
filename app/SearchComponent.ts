import { Component, Input } from '@angular/core';
import {PokedexComponent} from "./PokedexComponent";
import {Pokemon} from "./Pokemon";
import {PokemonNamePipe} from "./PokemonNamePipe";
import {PokemonIDPipe} from "./PokemonIDPipe";
import {PokeApiService} from "./PokeApiService";
import {PokemonInfoComponent} from "./PokemonInfoComponent";

@Component({
    selector: "poke-search",
    templateUrl: "app/components/search.html",
    pipes: [PokemonNamePipe, PokemonIDPipe],
    providers : [PokeApiService],
    directives: [PokemonInfoComponent]
 })
export class SearchComponent { 
    id: number;
    pokemons: Array<Pokemon>;
    selectedPokemon: Pokemon;
    
    
    constructor (private pokeApiService: PokeApiService){
        this.id = 0;
    }
    
    ngOnInit() {
        this.pokeApiService.getPokemons().then((data) => {
            this.pokemons = new Array<Pokemon>();
            for(let pokemon of data.pokemon_entries){
                this.pokemons.push(new Pokemon(pokemon.entry_number, pokemon.pokemon_species.name));
            }
        });
    }
    
    onChange(id: number): void {
        console.log(id);
        for(let pokemon of this.pokemons){
            if(pokemon.id == id){
                if(pokemon.base_experience == null){
                    this.pokeApiService.getPokemon(id).then((data) => {
                        pokemon.set(data.base_experience, data.weight, data.abilities)
                    });
                }
                this.selectedPokemon = pokemon;
                return;
            }
        }
    }
}
