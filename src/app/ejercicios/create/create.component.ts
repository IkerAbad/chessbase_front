import { Component, OnInit } from '@angular/core';
import { ejerciciossService } from '../ejercicios.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Categoria } from '../categoria';
      
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  categorias: Categoria[] =[]
  form!: FormGroup;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public ejerciciossService: ejerciciossService,
    private router: Router
  ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.ejerciciossService.getAllCategories().subscribe((data: Categoria[])=>{
      this.categorias = data;
      console.log(this.categorias);
    }) 

    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', Validators.required),
      colaboradores: new FormControl('', Validators.required),
      categoria_id: new FormControl('', Validators.required),
      user_id: new FormControl('',Validators.required)
    });
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.ejerciciossService.create(this.form.value).subscribe((res:any) => {
         console.log('Ejercicios created successfully!');
         this.router.navigateByUrl('ejercicios/index');
    })
  }
   
}