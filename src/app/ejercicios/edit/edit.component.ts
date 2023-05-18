import { Component, OnInit } from '@angular/core';
import { ejerciciossService } from '../ejercicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercicios } from '../ejercicios';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: number;
  ejercicios!: Ejercicios;
  form!: FormGroup;
  ejerciciosId!: Ejercicios
  /*------------------------------------------
--------------------------------------------
Created constructor
--------------------------------------------
--------------------------------------------*/
  constructor(
    public ejerciciossService: ejerciciossService,
    private route: ActivatedRoute,
    private router: Router
    
  ) {
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['ejerciciosId'];
    this.ejerciciossService.find(this.id).subscribe((data: Ejercicios) => {
      this.ejercicios = data;
      console.log(data);
      console.log(this.ejercicios);
      
      
    });

    this.form = new FormGroup({
      id:new FormControl(this.id,),
      title: new FormControl('', [Validators.required]),
      creator: new FormControl('', Validators.required),
      nPlayers: new FormControl('', Validators.required)
    });
  }
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.form.controls;
  }
  /**
edit.component.html
* Write code on Method
*
* @return response()
*/
  submit() {
    console.log(this.form.value);
    this.ejerciciossService
      .update(this.id, this.form.value)
      .subscribe((ejercicios: any) => {
        console.log(ejercicios);
        this.router.navigateByUrl('ejercicios/index');
      });
  }
  /*public submint2(): void {
    this.ejerciciossService.update(this.id).subscribe(
      (response: any) => {
        console.log(response);
        this.categoriaService.findAll();
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }*/
}
