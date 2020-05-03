import { Component, OnInit} from '@angular/core';
import { DialogService } from '../../../Services/dialog.service';
import { AuthService } from '../../../../Auth/Services/auth.service';
import { ErrorMessagesService } from '../../../../Shared/Services/error-messages.service';

@Component({
  selector: 'cc-exit-menu',
  templateUrl: './exit-menu.component.html',
  styleUrls: ['./exit-menu.component.scss']
})
export class ExitMenuComponent implements OnInit {

  public menuVisible = false;
  public listIsLoading: boolean;

  constructor(
    private authService: AuthService,
    private dialogService: DialogService,
    private errorMessagesService: ErrorMessagesService
  ) {}

  ngOnInit() {}

  openMenu() { this.menuVisible = true; }

  closeMenu() { this.menuVisible = false; }

  logout() { this.authService.doLogout(); }

  changePassword() {
    this.dialogService
      .confirm({
        message:
          'После подтверждения произойдет автоматический выход из системы,'
          + '<br> на вашу почту будет отправлено письмо с дальнейшими инструкциями. <br> <br>'
          + ' &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Вы уверены что хотите сбросить пароль?',
        confirmButton: 'ДА',
        cancelButton: 'НЕТ'
      })
      .afterClosed()
      .subscribe(data => {
        if (data) {
          this.listIsLoading = true;
          this.authService.getResetOwnPassword()
            .subscribe(email => {
              this.dialogService.alert({
                message: 'На почту ' + email + ' отправлена инструкция по смене пароля'
              }).afterClosed();
              this.logout();
              this.listIsLoading = false;
            },
            err => { this._handleError(err); },
            () => this.listIsLoading = false
            );
        }
      });
  }

  private _handleError(err) {
    if (err.status !== 404) {
      this.errorMessagesService.processHttpError(err);
      this.listIsLoading = false;
    }
  }
}
