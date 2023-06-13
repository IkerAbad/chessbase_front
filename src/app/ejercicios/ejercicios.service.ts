import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ejercicios } from './ejercicios';


@Injectable({
  providedIn: 'root'
})
export class ejerciciossService {

  private ejercicios: Ejercicios[] = JSON.parse(localStorage.getItem('e') || '[]') || [
    {
      id: 1,
      title: "Ejercicio 1",
      creator: "Creador 1",
      nPlayers: "2"
    },
    {
      id: 2,
      title: "Ejercicio 2",
      creator: "Creador 2",
      nPlayers: "3"
    },
    {
      id: 3,
      title: "Ejercicio 3",
      creator: "Creador 3",
      nPlayers: "1"
    },
    {
      id: 4,
      title: "Ejercicio 4",
      creator: "Creador 4",
      nPlayers: "4"
    },
    {
      id: 5,
      title: "Ejercicio 5",
      creator: "Creador 5",
      nPlayers: "2"
    }
  ];


  private apiURL = "http://localhost:8080";
  /*------------------------------------------

 --------------------------------------------

 Http Header Options

 --------------------------------------------

 --------------------------------------------*/

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',
      'Accept': '*/*'

    })

  }


  /*------------------------------------------

  --------------------------------------------

  Created constructor

  --------------------------------------------

  --------------------------------------------*/

  constructor(private httpClient: HttpClient) { }

  /**

   * Write code on Method

   *

   * @return response()

   */

  getAll(): Observable<Ejercicios[]> {
    return of(this.ejercicios);
  }

  create(ejercicio: Ejercicios): Observable<Ejercicios> {
    const maxId = this.ejercicios.reduce((max, ejercicio) => Math.max(max, ejercicio.id), 0);
    ejercicio.id = maxId + 1;
    this.ejercicios.push(ejercicio);
    localStorage.setItem('e', JSON.stringify(this.ejercicios));
    return of(ejercicio);
  }

  /**

   * Write code on Method

   *

   * @return response()

   */

  find(id: number): Observable<Ejercicios> {
    let elemento = this.ejercicios.find(e => e.id == id);
    if (elemento == undefined) {
      elemento = { id: 0, title: '', creator: '', nPlayers: '' };
    }
    return of(elemento);

  }

  /**

   * Write code on Method

   *

   * @return response()

   */

  update(id: number, ejercicio: Ejercicios): Observable<Ejercicios> {
    const index = this.ejercicios.findIndex(e => e.id == id);
    this.ejercicios[index].title = ejercicio.title;
    this.ejercicios[index].creator = ejercicio.creator;
    this.ejercicios[index].nPlayers = ejercicio.nPlayers;
    this.ejercicios[index].id = id;
    localStorage.setItem('e', JSON.stringify(this.ejercicios));
    return of(this.ejercicios[index]);

  }

  /**

   * Write code on Method

   *

   * @return response()

   */

  delete(id: number): Observable<number> {
    const nElementos = this.ejercicios.length;
    this.ejercicios = this.ejercicios.filter(e => e.id != id);
    const elementosActuales = this.ejercicios.length;
    localStorage.setItem('e', JSON.stringify(this.ejercicios));
    return of(nElementos - elementosActuales);

  }


  /** 

   * Write code on Method

   *

   * @return response()

   */

  errorHandler(error: any) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    return throwError(errorMessage);

  }
  getDataPedidoPaginado(page: Number, numberOfElements: Number) {
    const url = `${this.apiURL}/exercises?page=${page}&size=${numberOfElements}`;
    return this.httpClient.get<any>(url).pipe(

      catchError(this.errorHandler)

    )

  }

  update2(ejercicios: Ejercicios): Observable<any> {

    return this.httpClient.put(this.apiURL + '/exercises/edit2/', ejercicios, this.httpOptions)


      .pipe(

        catchError(this.errorHandler)

      )
  }

}
