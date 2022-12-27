 /*
* File: app.routing.ts
* Author: Orosz Levente János
* Copyright: 2022, Orosz Levente János
* Group: Szoft II N
* Date: 2022-12-28
* Github: https://github.com/Olevente
* Licenc: GNU GPL
*/ 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path : "data", component:DataComponent},
  {path : "about", component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
