import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';


@NgModule({
  declarations: [
    ContactanosComponent,
    ClientesComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
