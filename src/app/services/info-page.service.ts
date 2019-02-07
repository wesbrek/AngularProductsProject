import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.info';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) { 

    

    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }
}
