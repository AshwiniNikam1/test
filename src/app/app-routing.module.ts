import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs';
import { HomeComponent } from './home/home/home.component';
import { SubjectComponent } from './home/subject/subject.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'subject',component:SubjectComponent},
 // {path:'product',component:ProductComponent}
{path:'product',loadChildren:()=> import('./product/product/product.module').then(m=>m.ProductModule)}//lazy loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
