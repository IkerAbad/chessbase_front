import { Component, OnInit } from '@angular/core';
import { ejerciciossService } from '../ejercicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercicios } from '../ejercicios';
     
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
      
  id!: number;
  ejercicios!: Ejercicios;
     
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public ejerciciossService: ejerciciossService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['ejerciciosId'];
         
    this.ejerciciossService.find(this.id).subscribe((data: Ejercicios)=>{
      this.ejercicios = data;
    });
  }
     
}