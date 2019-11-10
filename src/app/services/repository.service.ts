import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient, HttpClientJsonpModule, HttpHeaders, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private urlGithubdb = 'https://api.github.com/search/repositories';
  repository:any[] = [];

  constructor(private jsonp: HttpClientJsonpModule,
    private http: HttpClient) { }

  searchRepo(texto: string){
    let url = `${this.urlGithubdb}?q=${texto}&sort=stars&order=desc`;

    return this.http.get(url).pipe(map((res: any) => {
      this.repository = res.items;
      console.log(this.repository);
      return res
    }));
  }
}
