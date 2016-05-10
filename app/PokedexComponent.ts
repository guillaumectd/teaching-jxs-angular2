import { Component } from '@angular/core';
import {SearchComponent} from "./SearchComponent";

@Component({
    selector: "pokedex-app",
    templateUrl: "app/components/pokedex.html",
    directives: [SearchComponent],
})

export class PokedexComponent {
    
}
