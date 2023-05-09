import { Component, OnInit } from '@angular/core';
import { ejerciciossService } from '../ejercicios/ejercicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ejercicios: ejerciciossService) {

  }

  ngOnInit(): void {

  }


   // window.location.reload()





}
