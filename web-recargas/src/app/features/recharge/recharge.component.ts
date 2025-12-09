import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recharge',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div style="padding: 20px; border: 1px solid #ccc; background-color: #e0ffe0;">
      <h2>🔋 Panel de Recargas (Lazy Loaded)</h2>
      <p>Este componente ha sido cargado de forma perezosa (Lazy Load) dentro del microfrontend de Recargas.</p>
      <form style="max-width: 300px;">
        <div style="margin-bottom: 10px;">
          <label>Monto a recargar:</label>
          <input type="number" placeholder="Ej: 50000" style="width: 100%; padding: 5px;" />
        </div>
        <button type="button" style="padding: 10px; background: green; color: white; border: none;">Recargar</button>
      </form>
      <a routerLink="actividad" style="display: inline-block; margin-top: 15px; color: green;">Ver Actividad Reciente (Lazy Child)</a>
      <router-outlet></router-outlet>
    </div>
  `
})
export class RechargeComponent {}
