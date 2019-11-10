import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RepositoryService } from 'src/app/services/repository.service';
import { FavoritosService } from '../../services/favoritos.service';
import { NombreUsuarioService } from 'src/app/services/nombre-usuario.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  buscar:string = "";
  nombreRescatado:any;
  constructor(public _rs:RepositoryService, private favoritosService: FavoritosService,
    private _ns:NombreUsuarioService) {
    this.getNombre();
  }

  ngOnInit() {
  }

  buscarReposotorio(){
    if(this.buscar.length == 0){
      return
    }
    this._rs.searchRepo(this.buscar).subscribe();

  }

  clickFavorito(repo){
    if(this.isFavorito(repo)){
      this.favoritosService.quitarFavorito(repo);
    }else{
      this.favoritosService.agregarFavorito(repo);
    }


  }

  public isFavorito(repo: any){
    return this.favoritosService.isFavorito(repo.id);
  }

  public getFavoritos(){
    return this.favoritosService.obtenerFavoritos();
  }

  public getNombre(){
    let nombre = this._ns.obtenerNombre();
    console.log("nombre que retorna get nombre ",nombre);
    this.nombreRescatado = nombre;
    //return
  }

}
