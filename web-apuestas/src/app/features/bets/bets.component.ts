import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bets',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div style="padding: 20px; border: 1px solid #ccc; background-color: #f0f8ff;">
      <h2>🎰 Panel de Apuestas (Lazy Loaded)</h2>
      <p>Este componente ha sido cargado de forma perezosa (Lazy Load) dentro del microfrontend de Apuestas.</p>
      <ul>
        <li>Apuesta 1: Real Madrid vs Barcelona (Gana Local)</li>
        <li>Apuesta 2: Lakers vs Bulls (Más de 200 puntos)</li>
      </ul>
      <a routerLink="historial" style="display: inline-block; margin-top: 10px; color: blue;">Ver Historial (Cargar Lazy Child)</a>
      <router-outlet></router-outlet>
    </div>
  `
})
export class BetsComponent {}
