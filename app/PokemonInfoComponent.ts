import { Component, Input } from '@angular/core';
import {Pokemon} from "./Pokemon";


@Component({
    selector: "poke-info",
    templateUrl: "app/components/info.html"
 })
export class PokemonInfoComponent { 
    @Input() pokemon: Pokemon;
    
    constructor(){
    }    
}