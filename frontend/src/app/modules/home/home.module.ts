import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { InicioComponent } from './inicio/inicio.component';
 



@NgModule({
  declarations: [CrearComponent, ListaComponent, EditarComponent, InicioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
