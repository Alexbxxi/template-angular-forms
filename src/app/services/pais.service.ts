import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http: HttpClient ) { }

  // Forma 1
  // getPaises(){
  //   let url = ('https://restcountries.eu/rest/v2/all');  
  //   return this.http.get(url)
  //   .pipe( 
  //     map( (resp:any[]) => {
  //       return resp.map( pais => {
  //         return {
  //           nombre: pais.name,
  //           codigo: pais.alpha3Code
  //         }
  //       })
  //     })
  //    )
  // }

  getPaises(){
    let url = ('https://restcountries.eu/rest/v2/all');  
    return this.http.get(url)
    .pipe( 
      map( (resp:any[]) => 
        resp.map( pais => ({ nombre: pais.name, codigo: pais.alpha3Code })
        )
      )
     );
  }
}
