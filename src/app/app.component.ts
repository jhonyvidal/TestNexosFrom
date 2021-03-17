import { Component, Input } from '@angular/core';
import { ApiService } from './servicios/api.service';
import { Libro } from "../app/modelos/libro";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testNexos';
  datos: Array <Libro> = []; 
  Busqueda : string = "";
  fecha_inicial : string = "";
  fecha_final : string = "";
  respuesta : string = "";

  constructor(
    private ApiService: ApiService
  ) {}

  getFrase() {
    this.ApiService.getFrase()
    .subscribe(task => {
      this.datos = Object.values(task);
    });
  }
  getLibroText(){
    if( this.Busqueda == ""){ this.respuesta = "INGRESAR TEXTO DEL TITULO";  return;
    }else{

      this.ApiService.getLibroText(this.Busqueda)
      .subscribe(task => {
        this.datos = Object.values(task);
        if(this.datos.length == 0){
          this.respuesta ="El título no está registrado."
        }
      });
    }
  }
  getLibroAutor(){
    if( this.Busqueda == ""){ this.respuesta = "INGRESAR TEXTO DEL AUTOR";  return;
    }else{

      this.respuesta = "";
      this.ApiService.getLibroAutor(this.Busqueda)
      .subscribe(task => {
        this.datos = Object.values(task);
        if(this.datos.length == 0){
          this.respuesta ="El autor no está registrado."
        }
      });

    }
  
  }
  getLibroFecha(){
    if( this.fecha_inicial == "" || this.fecha_final == ""){ this.respuesta = "INGRESAR FECHAS";  return;
    }else{

      this.respuesta = "";
      this.ApiService.getLibroFecha(this.fecha_inicial,this.fecha_final)
      .subscribe(task => {
        this.datos = Object.values(task);
      });
    }
  }

}

