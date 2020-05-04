import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelaRegistroComponent } from './Produccion/panela-registro/panela-registro.component';
import { PanelaConsultaComponent } from './Produccion/panela-consulta/panela-consulta.component';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';



const routes: Routes = [
  {
  path: 'panelaRegistro',
  component: PanelaRegistroComponent
  },

  {
    path: 'panelaConsulta',
    component: PanelaConsultaComponent
  },
  {
    path: 'loggin',
    component: LogginComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

