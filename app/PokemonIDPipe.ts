import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "pokemonID"
})
export class PokemonIDPipe implements PipeTransform {

    transform(value :{id: number}[], searchString: number) {
        if (typeof value !== "undefined") {
            return value.filter((e) => (e.id == searchString || searchString == 0));
        } else {
            return [];
        }

    }
}