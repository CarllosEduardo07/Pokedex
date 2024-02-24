import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-details',
    standalone: true,
    imports: [],
    providers: [RouterLink, RouterOutlet],
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
})
export class DetailsComponent {


}
