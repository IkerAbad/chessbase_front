import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ejercicios } from '../ejercicios';
import { ejerciciossService } from '../ejercicios.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  ejercicioses: Ejercicios[] = [];
  form!: FormGroup;

  //Paginacion
  page: number = 0
  totalElements: number = 0
  totalPages: number = 0
  numResults: number = 10

  constructor(private ejerciciossService: ejerciciossService, private router: Router) { }

  /**
     * Write code on Method
     *
     * @return response()
     */
  ngOnInit(): void {

    this.ejerciciossService.getAll().subscribe((res: Ejercicios[]) => {
      this.ejercicioses = res;
      console.log('La variable ' + JSON.stringify(this.ejercicioses));
    });
  }

  /**
     * Write code on Method
     *
     * @return response()
     */
  deleteejercicios(id: number) {
    this.ejerciciossService.delete(id).subscribe(res => {
      this.ejerciciossService.getAll().subscribe((datos: Ejercicios[]) => {
        this.ejercicioses = datos;
      });
      alert('Has eliminado ' + res + ' ejercicio.');
    })
  }

  get f() {
    return this.form.controls;
  }

  irUpdateElemento(e: Ejercicios){
    console.log(e);
    this.router.navigate(['/ejercicios/', e.id, 'edit']);
  }
}

