import { Component, OnInit } from '@angular/core';
import { ejerciciossService } from '../ejercicios.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Ejercicios } from '../ejercicios';
      
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
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
    this.form = new FormGroup({
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
    this.ejerciciossService.create(this.form.value).subscribe((res:Ejercicios) => {
         console.log('Ejercicios created successfully!');
         this.router.navigateByUrl('ejercicios/index');
    })
  }
   
}