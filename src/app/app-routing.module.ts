import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
    {path:'', component: IndexComponent},
    {path:'search', component: SearchComponent},
    {path:'**', component: IndexComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
