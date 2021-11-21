import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DespesasComponent } from './despesas/despesas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [

{path: '', redirectTo: 'inicio', pathMatch: 'full'},

{path: 'inicio', component: InicioComponent},
{path: 'perfil/:id', component: PerfilComponent},
{path: 'despesas/:id', component: DespesasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
