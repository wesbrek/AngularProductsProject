import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.info';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPagina = {};
  cargada = false;

  artistas: any[] = [];

  constructor( private http: HttpClient) { 

    this.cargarInfo();
    this.cargarArtistas();

  }

  private cargarInfo(){

    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }


  private cargarArtistas(){
    
    this.http.get('https://angular-html-69d07.firebaseio.com/artistas.json')
      .subscribe( (resp: any[]) => {
      
        this.artistas = resp;
   
      });
  }
}
