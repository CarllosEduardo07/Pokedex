import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PokeApiService {
    private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';

    constructor(private http: HttpClient) {}

    //puxando pokemons
    get apiListAllPokemons(): Observable<any> {
        //pipe: filtro
        return this.http.get<any>(this.url).pipe(
            //aqui eles vai nos dar um valor e vai passar para o proximo valor, que seja qualquer coisa que voce deseja fazer
            tap(res => res),
            tap(res => {
                //all nomes dos pokemons
                res.results.map((resPokemons: any) => {
                    this.apiGetPokemons(resPokemons.url).subscribe(res => (resPokemons.status = res));
                });
            }),
        );
    }

  
// conexao com a api
    public apiGetPokemons(url: string): Observable<any> {
        return this.http.get<any>(url).pipe(map(res => res));
    }

    public getPokemonPage(page: number = 1): Observable<any>{
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`)
    }
}
