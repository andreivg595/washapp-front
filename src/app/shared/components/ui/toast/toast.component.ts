import { TitleCasePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Toast } from './model/toast.model';
import { ToastService } from './service/toast.service';

export enum ToastType {
  SUCCESS = 'success',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  CUSTOM = 'custom',
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService, TitleCasePipe],
})
export class ToastComponent implements OnDestroy {
  private subscription: Subscription | undefined;

  constructor(
    private toastService: ToastService,
    private messageService: MessageService,
    private titlecasePipe: TitleCasePipe
  ) {
    this.subscription = this.toastService.toast$.subscribe((toast: Toast) => {
      this.showToast(toast.type, toast.message);
    });
  }

  private showToast(type: ToastType, message: string): void {
    this.messageService.add({
      severity: type,
      summary: this.titlecasePipe.transform(type),
      detail: message,
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
