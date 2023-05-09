import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() public page: number = 0;
  @Input() public totalPages: number = 0;
  @Input() public totalElements: number = 10;
  @Output() public paginaEmitter = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {}
  siguiente() {
    this.page++;
    this.pasarPagina();
  }
  anterior() {
    this.page--;
    this.pasarPagina();
  }
  pasarPagina() {
    this.paginaEmitter.emit({ page: this.page, totalE: this.totalElements });
  }
}
