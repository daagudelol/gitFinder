import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor() {
    if(localStorage.getItem("FAVORITOS") == null){
      let array = [];
      localStorage.setItem("FAVORITOS", array.join());
    }

  }

  agregarFavorito(repo: any){
    let storage = localStorage.getItem("FAVORITOS");
    let favoritos =  storage === '' ? [] : JSON.parse(storage);
    if(favoritos.filter((rs: any) => rs.id === repo.id).length == 0){
      favoritos.push(repo);
      localStorage.setItem("FAVORITOS", JSON.stringify(favoritos));
    }
  }

  quitarFavorito(repo: any){
    let storage = localStorage.getItem("FAVORITOS");
    let favoritos =  storage === '' ? [] : JSON.parse(storage);

    for( let i = 0; i < favoritos.length; i++){
      if ( favoritos[i].id === repo.id) {
        favoritos.splice(i, 1);
      }
   }
    localStorage.setItem("FAVORITOS", JSON.stringify(favoritos));
  }

  obtenerFavoritos(){
    let storage = localStorage.getItem("FAVORITOS");
    return storage === '' ? [] : JSON.parse(storage);
  }

  isFavorito(idrepo: any){
    let storage = localStorage.getItem("FAVORITOS");
    let favoritos =  storage === '' ? [] : JSON.parse(storage);
    return favoritos.filter((rs: any) => rs.id === idrepo).length > 0;
  }

}
