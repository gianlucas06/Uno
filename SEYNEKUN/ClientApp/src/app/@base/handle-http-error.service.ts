import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor(private  modalService: NgbModal) { }
  
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message= error;
      
      
      return of(result as T);
    };
  }
  public log(message: string) {
    const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = message;
  }
}