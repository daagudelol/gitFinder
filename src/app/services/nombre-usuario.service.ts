import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NombreUsuarioService {

  constructor() {
    if(localStorage.getItem("NOMBRE") == null){
      let array = [];
      localStorage.setItem("NOMBRE", array.join());
    }
  }

  agregarNombre(repo: any){
    localStorage.setItem('NOMBRE', repo);
    let storage = localStorage.getItem("NOMBRE");

  }

  obtenerNombre(){
    let storage = localStorage.getItem("NOMBRE");
    return storage === '' ? [] : storage;
  }
}
