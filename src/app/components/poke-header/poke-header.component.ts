import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-poke-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './poke-header.component.html',
  styleUrl: './poke-header.component.css'
})
export class PokeHeaderComponent {

}
