import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast-msg',
  templateUrl: './toast-msg.component.html',
  styleUrls: ['./toast-msg.component.scss'],
  providers: [MessageService],
})
export class ToastMsgComponent implements OnInit, OnDestroy {
  public subscription = new Subscription();

  constructor(private toastService: ToastService, private messageService: MessageService) { }
  public ngOnInit() {
    this.subscription.add(this.toastService.displayMessage$.subscribe(msg => {
      if (msg) {
        this.showMessage(msg);
      }
    }));
  }

  public showMessage(message) {
    this.messageService.add({ severity: this.toastService.severity, summary: this.toastService.title, detail: message });
  }

  public ngOnDestroy() { if (this.subscription) { this.subscription.unsubscribe(); } }
}
