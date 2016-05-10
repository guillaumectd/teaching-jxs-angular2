export class Pokemon{
    
    constructor(public id: number, public name: String, public base_experience?: number, public weight?: number, public abilities?: [{is_hidden: boolean, slot: number, ability: {name: String, url: String}}]){
    }
    
    set(base_experience?: number, weight?: number, abilities?: [{is_hidden: boolean, slot: number, ability: {name: String, url: String}}]): void{
        this.base_experience = base_experience;
        this.weight = weight;
        this.abilities = abilities;
    }
}