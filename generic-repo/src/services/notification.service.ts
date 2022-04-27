import { Injectable } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastrService: NbToastrService,

    ) { }
  
    public successTitle = 'İşlem Başarılı!';
    public errorTitle = 'Hata! İşlem Başarısız!';
    public warningAuthTitle = 'HATA! Yetkiniz Yok!';
    public warningTitle = 'UYARI!';
    public NoImageSelectedText = 'Güncellemek için resim seçmelisiniz!';
  
  
  
  
    success( title?: string,message?: string) {
      this.toastrService.success(message, title);
  
    }
    warning( title?: string,message?: string) {
      this.toastrService.warning(message, title);
    }
    error(title?: string,message?: string) {
      this.toastrService.danger(message, title);
    }
    info(title?: string,message?: string) {
      this.toastrService.info(message, title);
    }
    public notifyInfo(title: string, message: string) {
      const settings = {
        position: NbGlobalLogicalPosition.BOTTOM_END,
        duration: 10000,
        preventDuplicates: false,
        icon: 'bell-outline',
        hasIcon: true,
        toastClass: '',
      };
  
      this.toastrService.info(message, title, settings);
    }
  
  
    public notifyError(title: string, message: string) {
      const settings = {
        position: NbGlobalLogicalPosition.TOP_END,
        duration: 12000,
        preventDuplicates: false,
        toastClass: '',
      };
  
      this.toastrService.danger(message, title, settings);
    }
  
    public notifySuccess(title: string, message: string) {
      const settings = {
        position: NbGlobalLogicalPosition.TOP_END,
        duration: 8000,
        preventDuplicates: false,
        toastClass: '',
      };
  
      this.toastrService.success(message, title, settings);
    }
  
    public notifyWarning(title: string, message: string) {
      const settings = {
        position: NbGlobalLogicalPosition.TOP_END,
        duration: 8000,
        preventDuplicates: false,
        toastClass: '',
      };
  
      this.toastrService.warning(message, title, settings);
    }
}
