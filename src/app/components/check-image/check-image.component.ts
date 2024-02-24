import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-check-image',
    standalone: true,
    imports: [MatChipsModule],
    templateUrl: './check-image.component.html',
    styleUrl: './check-image.component.css',
})
export class CheckImageComponent {
   gifSelecionado: boolean = false;

    verificar_imagem() {
        // this.gifSelecionado = !this.gifSelecionado;
        console.log(this.gifSelecionado);
    }

    constructor() {}
}
