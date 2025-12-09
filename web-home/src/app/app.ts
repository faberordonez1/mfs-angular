import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink], //Requiere el RouterLink para los redireccionamientos
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('web-home');

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
