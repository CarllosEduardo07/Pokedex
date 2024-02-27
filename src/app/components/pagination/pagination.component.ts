import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-pagination',
    standalone: true,
    imports: [MatIconModule],
templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  rows: number = 10;

  totalRecords: number = 120;

  options = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 20, value: 20 },
      { label: 120, value: 120 }
  ];







}
