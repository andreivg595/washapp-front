import { ToastType } from '../toast.component';

export interface Toast {
  type: ToastType;
  message: string;
}
