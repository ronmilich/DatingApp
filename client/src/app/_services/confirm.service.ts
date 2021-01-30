import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../_modals/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  bsModalRef: BsModalRef

  constructor(private modalService: BsModalService) { }

  confirm(title = 'Confirmation',
   message= 'Are you sure you want to do that?', btnOkText = 'Ok', cancelText = 'Cancel'): Observable<boolean> {
    const config = {
      initialState: {
        title,
        message,
        btnOkText,
        cancelText
      }
    }
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent, config)
    return new Observable<boolean>(this.getResult())
  }

  private getResult() {
    return (observer) => {
      const subsciption = this.bsModalRef.onHidden.subscribe(() => {
        observer.next(this.bsModalRef.content.result)
        observer.complete()
      })

      return {
        unsubscribe() {
          subsciption.unsubscribe()
        }
      }
    }
  }
}
