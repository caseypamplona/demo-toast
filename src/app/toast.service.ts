import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public displayMessage: string;
  public displayMessage$ = new BehaviorSubject<any>(this.displayMessage);
  public severity: string;
  public title: string;
  constructor() { }

  public showSuccess(msg: string, title?: string) {
    this.severity = 'success';
    this.title = title || 'Success';
    this.displayMessage$.next(msg);
  }

  public showError(msg: string, title?: string) {
    this.severity = 'error';
    this.title = title || 'Error';
    this.displayMessage$.next(msg);
  }

  public showWarning(msg: string, title?: string) {
    this.severity = 'warn';
    this.title = title || 'Warning';
    this.displayMessage$.next(msg);
  }
}
