import { Component, Output, EventEmitter } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { PokeListComponent } from '../poke-list/poke-list.component';

@Component({
    selector: 'app-check-image',
    standalone: true,
    imports: [MatChipsModule, PokeListComponent],
    templateUrl: './check-image.component.html',
    styleUrl: './check-image.component.css',
})
export class CheckImageComponent {
    @Output() changeImg: EventEmitter<any> = new EventEmitter();

    verificar_imagem() {
        this.changeImg.emit();
    }

    constructor() {}
}
