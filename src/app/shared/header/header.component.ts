import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  buscarPelicula(texto:string){
    if(texto.length == 0){
      return;
    }
    this.route.navigate(['search',texto])
  }

}
