import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main.component';
import { DetalleCreditoComponent } from './../components/detalle-credito/detalle-credito.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { titlePage: 'Pagina Principal' }
  },
  {
    path: "detalle",
    component: DetalleCreditoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
