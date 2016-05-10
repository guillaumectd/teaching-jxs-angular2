import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Pokemon} from "./Pokemon";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PokeApiService {
    pokemons: Array<Pokemon>;
    
    constructor(private http:Http) {
       
            // data: {"pokemon_entries" : {"entry_number", "pokemon_species" : {"name", "url"}}} => {
    }
    
    getPokemons(){
         return this.http.get('http://pokeapi.co/api/v2/pokedex/1/')
        .toPromise()
        .then((response) => response.json());
    }
    
    getPokemon(id: number){
         return this.http.get('http://pokeapi.co/api/v2/pokemon/'+id+'/')
        .toPromise()
        .then((response) => response.json());
    }
}