import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ejercicios } from './ejercicios';


@Injectable({
  providedIn: 'root'
})
export class ejerciciossService {

  private apiURL ="http://localhost:8080";
   /*------------------------------------------

  --------------------------------------------

  Http Header Options

  --------------------------------------------

  --------------------------------------------*/

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',
      'Accept':'*/*'

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

  getAll(): Observable<any> {

  

    return this.httpClient.get(this.apiURL + '/exercises')

  

    .pipe(

      catchError(this.errorHandler)

    )

  }






  create(ejercicios:Ejercicios): Observable<any> {

  
    return this.httpClient.post(this.apiURL + '/exercises/', JSON.stringify(ejercicios), this.httpOptions)
    .pipe(
      
      catchError(this.errorHandler)

    )

  }  

    

  /**

   * Write code on Method

   *

   * @return response()

   */

  find(id:number): Observable<any> {

  

    return this.httpClient.get(this.apiURL + '/exercises/' + id)

  

    .pipe(

      catchError(this.errorHandler)

    )

  }

    

  /**

   * Write code on Method

   *

   * @return response()

   */

  update(id:number, ejercicios:Ejercicios): Observable<any> {
    return this.httpClient.put(this.apiURL + '/exercises/edit/' + id, JSON.stringify(ejercicios), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )

  }

  /**

   * Write code on Method

   *

   * @return response()

   */

  delete(id:number){

    return this.httpClient.delete(this.apiURL + '/exercises/' + id, this.httpOptions)

  

    .pipe(

      catchError(this.errorHandler)

    )

  }

    
  /** 

   * Write code on Method

   *

   * @return response()

   */

   errorHandler(error:any) {

    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {

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

  update2(ejercicios: Ejercicios): Observable<any>{
  
    return this.httpClient.put(this.apiURL + '/exercises/edit2/' , ejercicios, this.httpOptions)
  
  
    .pipe( 
  
      catchError(this.errorHandler)
  
    )
   }

}
