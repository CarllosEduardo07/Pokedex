import { Component, Output, EventEmitter } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';


@Component({
    selector: 'app-check-image',
    standalone: true,
    imports: [MatChipsModule],
    templateUrl: './check-image.component.html',
    styleUrl: './check-image.component.css',
})
export class CheckImageComponent {
    // @output: faz a saida do evento do componente filho 
    @Output() changeImg: EventEmitter<boolean> = new EventEmitter();

    verificar_imagem() {
        this.changeImg.emit();
    }
}
