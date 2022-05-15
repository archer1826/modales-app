import { Component, OnInit, EventEmitter } from '@angular/core';

//imports necesarios para usar la modal
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-prueba',
  templateUrl: './modal-prueba.component.html',
  styleUrls: ['./modal-prueba.component.css']
})
export class ModalPruebaComponent implements OnInit {

  public event = new EventEmitter();

  constructor(public bsModalRef: BsModalRef,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    console.log("ingreso a componente modal");
    //se mapea los parametros enviados en initialState
    let datos: any = this.modalService.config.initialState;
  }

 /**
  * @description Metodo que envia los datos de la modal y son capturdaos como obsrevable en el componete padre.
  */

  enviarDatos(){
    this.event.emit("data");
    this.bsModalRef.hide();
  }

}
