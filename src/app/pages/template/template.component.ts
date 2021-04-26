import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Alejandro',
    apellido: 'Bautista',
    correo: 'alex@gmail.com',
    pais: 'MEX',
    genero: 'M'
  }

  paises: any[] =[];

  constructor( private PaisService: PaisService ) { }

  ngOnInit(): void {

    this.PaisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre: 'Selecciona una opción',
        codigo: ''
      })
      console.log(paises);
    });
  }

  guardar( forma: NgForm ){
    console.log( forma );
    console.log( forma.value );
    if ( forma.invalid ) {

      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
  }

}
