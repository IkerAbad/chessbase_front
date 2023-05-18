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
  newejercicios!: Ejercicios
  private router!: Router 
  form!: FormGroup;
  
  //Paginacion
  page : number = 0
  totalElements: number = 0
  totalPages: number = 0
  numResults: number = 10

  constructor(public ejerciciossService: ejerciciossService) { }

/**
   * Write code on Method
   *
   * @return response()
   */
 ngOnInit(): void {

  this.ejerciciossService.getDataPedidoPaginado(this.page,
    this.numResults).subscribe((data )  =>{ //: { content: Ejercicios[]; size: Number; totalPages: Number; }
    this.ejercicioses = data.content;
    this.totalElements = data.size;
    this.totalPages = data.totalPages;
    console.log(data);
    
    });

  this.getProductosByPage(this.page, this.numResults)
  /*this.ejerciciossService.getAll().subscribe((data: Ejercicios[])=>{
    this.ejercicios = data;
    console.log(this.ejercicios);
  }) */
  this.form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    creator: new FormControl('', Validators.required),
    nPlayers: new FormControl('', Validators.required)
  });
}
   
public onOpenModal(ejercicios: Ejercicios , mode: string): void {
  
  if(mode === 'edit'){
   // document.getElementById('id02').style.display='block';
      this.newejercicios=ejercicios;
   }

  
}
   
/**
   * Write code on Method
   *
   * @return response()
   */
 deleteejercicios(id:number){
  this.ejerciciossService.delete(id).subscribe(res => {
       this.ejercicioses = this.ejercicioses.filter(item => item.id !== id);
       console.log('Post deleted successfully!');
       this.router.navigateByUrl('ejercicios/index');

  })
}
public updateejercicios(ejercicios: Ejercicios): void {
  console.log('ejercicios', ejercicios);
   this.ejerciciossService.update2(ejercicios).subscribe(
     (response: Ejercicios)=>{
        this.ejerciciossService.getAll
       }
   )
 }
get f() {
  return this.form.controls;
}

//paginacion
goToPage(event:any){
  this.getProductosByPage(event.page,event.totalE );
  }
   
  getProductosByPage(page: Number, numberOfElements: Number) {
    this.ejerciciossService.getDataPedidoPaginado(page,
    numberOfElements).subscribe((data )  =>{ //: { content: Ejercicios[]; size: Number; totalPages: Number; }
    this.ejercicioses = data.content;
    this.totalElements = data.size;
    this.totalPages = data.totalPages;
    console.log(data);
    
    });
    }


}

