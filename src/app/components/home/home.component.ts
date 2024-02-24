import { Component, Input } from '@angular/core';
import { PokeHeaderComponent } from '../poke-header/poke-header.component';
import { PokeSearchComponent } from '../poke-search/poke-search.component';
import { PokeListComponent } from '../poke-list/poke-list.component';
import { CheckImageComponent } from '../check-image/check-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokeHeaderComponent, PokeSearchComponent, CheckImageComponent, PokeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
