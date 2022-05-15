import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPruebaComponent } from './components/modules/modal-prueba/modal-prueba.component';

import { ModalModule } from 'ngx-bootstrap/modal';

/**
 * @author Duvan Rodriguez
 * @description modulo donde se importan los paquetes necesarios para el proyecto, en entryComponents se agregan los componenets que son usados como modales
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    ModalPruebaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
