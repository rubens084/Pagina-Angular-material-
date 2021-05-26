import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuertasComponent } from './pages/puertas/puertas.component';
import { VentanasComponent } from './pages/ventanas/ventanas.component';
import { OtrosComponent } from './pages/otros/otros.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { MatCarouselModule } from '@ngmodule/material-carousel';



@NgModule({
  declarations: [
    PuertasComponent,
    VentanasComponent,
    OtrosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatCarouselModule.forRoot()
  ]
})
export class ProductosModule { }
