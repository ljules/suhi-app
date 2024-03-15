import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCardSushiBoxesComponent } from './component/container-card-sushi-boxes/container-card-sushi-boxes.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';

const routes: Routes = [
  { path:"", component: ContainerCardSushiBoxesComponent },
  { path:"rgpd", component: RgpdComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
