import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent }  from './crear/crear.component';
import { EditarComponent }  from './editar/editar.component';
import { ListaComponent }  from './lista/lista.component';
import { InicioComponent }  from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'crear', component: CrearComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'listar', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
