import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { HttpClientModule } from '@angular/common/http';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckImageComponent } from '../check-image/check-image.component';

@Component({
    selector: 'app-poke-list',
    standalone: true,
    imports: [CheckImageComponent, NgOptimizedImage, HttpClientModule, MatChipsModule, MatFormFieldModule], //importa o HttpClientModule, para o componente que vai usar
    providers: [PokeApiService], //importando services'
    templateUrl: './poke-list.component.html',
    styleUrl: './poke-list.component.css',
})
export class PokeListComponent implements OnInit {
    pokemonImg: boolean = false;

    public getAllPokemons: any;

    onChangeImg(): void { //evento output/emitter do button gif
        this.pokemonImg = !this.pokemonImg;
        console.log(this.pokemonImg);
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
