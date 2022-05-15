import { Component } from '@angular/core';
//import necesario para usar las modales de bootstrap
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalPruebaComponent } from './components/modules/modal-prueba/modal-prueba.component';

/**
 * @author Duvan Rodriguez
 * @description Clase principal de donsera invocada la modal
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //objeto que necesario que manipula la modal
  public bsModalRef: BsModalRef = new BsModalRef;
  
  //inyeccion del servicio de modal
  constructor(private bsModalService: BsModalService){
  }

  /**
   * @description Metodo que invoca la modal y recibe su repsuesta
   */
  
  llamarModal(){
    //variable necesaria para enviar los datos a la modal, OBLIGATORIAMENTE SE DEBE LLAMAR initialState
    let initialState: any = {
      objeto: "hola mundo"
    };
    //muestra la modal y le da parametros incilaes de diseño como la class y el backsdrop: 'static' => no cerrar modal al darle click fuera, true => cerrar modal al darle click fuera, flase => quita el sombreado de la modal
    this.bsModalRef = this.bsModalService.show(ModalPruebaComponent, { initialState, class: 'modal-xl', backdrop: true });
    this.bsModalRef.content.closeBtnName = 'Close';

    //obtiene la respuesta de la modal por medio de un observable
    this.bsModalRef.content.event.subscribe((data: any) => {
      console.log("respuesta modal");
      console.log(data);
    });
  }

}
