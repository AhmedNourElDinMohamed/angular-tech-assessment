import {
  Component,
  inject,
  output,
  signal,
  TemplateRef,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarLink } from '../../../core/models/navbar-link.model';
import { OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private offcanvasService = inject(NgbOffcanvas);
  private authService = inject(AuthService);
  closeResult: WritableSignal<string> = signal('');

  navbarLinks = signal<NavbarLink[]>([
    { label: 'Products', routerLink: '/products', isLoggedIn: true },
    { label: 'Users', routerLink: '/users', isLoggedIn: true },
  ]);

  open(content: TemplateRef<any>) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult.set(`Closed with: ${result}`);
        },
        (reason) => {
          this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
        }
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  logout() {
    this.authService.logout();
  }
}
