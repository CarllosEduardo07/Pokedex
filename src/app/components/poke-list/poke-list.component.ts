import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckImageComponent } from '../check-image/check-image.component';
import { RouterLink } from '@angular/router';
import { PokeSearchComponent } from '../poke-search/poke-search.component';
import { PageLoadingComponent } from '../page-loading/page-loading.component';

@Component({
    selector: 'app-poke-list',
    standalone: true,
    imports: [CheckImageComponent, PokeSearchComponent, PageLoadingComponent, HttpClientModule, MatFormFieldModule, RouterLink], //importa o HttpClientModule, para o componente que vai usar
    providers: [PokeApiService], //importando services'
    templateUrl: './poke-list.component.html',
    styleUrl: './poke-list.component.css',
})
export class PokeListComponent implements OnInit {
    pokemonImg: boolean = false;

    private setAllPokemons: any;
    public getAllPokemons: any;

    public apiError: boolean = false;

    // evento output/emitter do button gif
    onChangeImg(): void {
        this.pokemonImg = !this.pokemonImg;
    }

    constructor(private service: PokeApiService) {}

    // comunicação com a api do services
    ngOnInit(): void {
        // console.log(this.pokemonImg);
        this.service.apiListAllPokemons.subscribe(res => {
            this.setAllPokemons = res.results;
            this.getAllPokemons = this.setAllPokemons;
            // console.log(this.getAllPokemons);
        },error =>{
            this.apiError = true
        }
        );
    }

    // o evento do search, pegando tudo que o usuario digita
    public onEmmitSearch(value: string) {
        const filter = this.setAllPokemons.filter((res: any) => {
            return !res.name.indexOf(value.toLowerCase());
        });
        this.getAllPokemons = filter;
    }
}
