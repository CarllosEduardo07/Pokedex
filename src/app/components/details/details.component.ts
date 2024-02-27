import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokeHeaderComponent } from '../poke-header/poke-header.component';
import { PokeApiService } from '../../services/poke-api.service';
import { forkJoin } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CheckImageComponent } from '../check-image/check-image.component';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [PokeHeaderComponent, CheckImageComponent, HttpClientModule, RouterLink],
    providers: [PokeApiService],
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
    private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
    private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

    //mostrando o pokemon na pagina details
    public pokemon: any;
    pokemonImg_Gif: boolean = false
    public isLoading: boolean = false;
    public apiError: boolean = false;

// mudar imagem para Gif
    onChangeImgPageDetails(){
        this.pokemonImg_Gif = !this.pokemonImg_Gif
    }

    //pegando o paramentro do ID passado pela URL
    constructor(private activatedRoute: ActivatedRoute, private service: PokeApiService) {}

    ngOnInit(): void {
        this.getPokemon();
    }

    public getPokemon() {
        //pegando o paramentro do ID passado pela URL
        const id = this.activatedRoute.snapshot.params['id'];
        //puxando as duas URL de detalhes do pokemon
        const pokemon = this.service.apiGetPokemons(`${this.urlPokemon}/${id}`);
        const name = this.service.apiGetPokemons(`${this.urlName}/${id}`);

        return forkJoin([pokemon, name]).subscribe(
            res => {
                this.pokemon = res;
                this.isLoading = true;
            },
            error => {
                this.apiError = true;
            },
        );

        // return console.log(id);
    }
}
