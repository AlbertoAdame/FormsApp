import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';


const routes: Routes = [
  {
    path: 'basicos',
    component: BasicosComponent
  },
  {
    path: 'dinamicos',
    component: DinamicosComponent
  },
  {
    path: 'switches',
    component: SwitchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }