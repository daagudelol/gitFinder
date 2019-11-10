import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { NombreUsuarioService } from 'src/app/services/nombre-usuario.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private route:Router, private _ns:NombreUsuarioService) { }

  guardarNombre(nombre:string){
    if(nombre.length == 0){
      return;
    }
    this.route.navigate(['search']);
    this._ns.agregarNombre(nombre);

    console.log(nombre);
  }

  ngOnInit() {
  }


}
