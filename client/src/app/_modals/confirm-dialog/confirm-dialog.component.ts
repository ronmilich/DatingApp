import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [
  ]
})
export class ConfirmDialogComponent implements OnInit {
  title: string
  message: string
  btnOkText: string
  cancelText: string
  result: boolean

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  confirm() {
    this.result = true
    this.bsModalRef.hide()
  }

  decline() {
    this.result = false
    this.bsModalRef.hide()
  }
}
