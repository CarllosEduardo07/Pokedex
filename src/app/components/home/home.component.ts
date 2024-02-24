import { Component, Input } from '@angular/core';
import { PokeHeaderComponent } from '../poke-header/poke-header.component';
import { PokeListComponent } from '../poke-list/poke-list.component';
import { CheckImageComponent } from '../check-image/check-image.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeHeaderComponent, CheckImageComponent, PokeListComponent, PokeListComponent, CheckImageComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
