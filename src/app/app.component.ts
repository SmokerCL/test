import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private router: Router, 
    private menu: MenuController,
    public authService: AuthService
  ) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        if (event.url === '/login') { // en esta ruta se desactiva el sidebar
          this.menu.enable(false); // Deshabilita el menú
        } else {
          this.menu.enable(true);
        }
      }
    });
  }

  openMenu() {
    this.menu.open('first');
  }

  closeMenu() {
    this.menu.close('first');
  }

  ngOnInit() {
    // Suscribirse a los cambios de autenticación
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  login() {
    this.authService.login();
    this.router.navigate(['/home']);
  }
}
