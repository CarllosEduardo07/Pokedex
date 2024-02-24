import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'app-poke-search',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './poke-search.component.html',
    styleUrl: './poke-search.component.css',
})
export class PokeSearchComponent implements OnInit {
    @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
    //keyup: quando voce digitar algum valor no input, ele vai pegar todos os valor

    // pegando tudo que voce digitar
    public search(value: string) {
        this.emmitSearch.emit(value);
    }
    ngOnInit(): void {}
}
