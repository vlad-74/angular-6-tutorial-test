import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Auth/Services/auth.service';
import { AuthStateService } from '../../../Auth/Services/auth-state.service';
import { NAV_LINKS } from '../../Models/Const/NavLinks.const';

@Component({
  selector: 'cc-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public navLinks = [];
  public menuVisible = true;

  constructor(
    private authStateService: AuthStateService
  ) {}

  ngOnInit() {
    this.navLinks = NAV_LINKS.filter(link =>
      this.authStateService.hasAccessAny(...link.permissions)
    );
  }

  openMenu(menu: { closing?; visible? }) {
    if (menu.closing) {
      clearTimeout(menu.closing);
      menu.closing = undefined;
    }
    menu.visible = true;
    this.menuVisible = false;
  }

  closeMenu(menu: { closing?; visible? }) {
    menu.closing = setTimeout(() => {
      menu.visible = false;
      this.menuVisible = true;
    });
  }
}
