import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckImageComponent } from '../check-image/check-image.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-poke-list',
    standalone: true,
    imports: [CheckImageComponent, HttpClientModule, MatFormFieldModule, RouterLink], //importa o HttpClientModule, para o componente que vai usar
    providers: [PokeApiService], //importando services'
    templateUrl: './poke-list.component.html',
    styleUrl: './poke-list.component.css',
})
export class PokeListComponent implements OnInit {
    pokemonImg: boolean = false;

    public getAllPokemons: any;

    // evento output/emitter do button gif
    onChangeImg(): void { 
        this.pokemonImg = !this.pokemonImg;
    }

    constructor(private service: PokeApiService) {}

    ngOnInit(): void {
        // console.log(this.pokemonImg);
        this.service.apiListAllPokemons.subscribe(res => {
            this.getAllPokemons = res.results;
            console.log(this.getAllPokemons);
        });
    }
}
