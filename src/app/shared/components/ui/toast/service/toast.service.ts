import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from '../model/toast.model';
import { ToastType } from '../toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastParams = new Subject<Toast>();
  toast$ = this.toastParams.asObservable();

  showToast(type: ToastType, message: string) {
    this.toastParams.next({ type, message });
  }
}
