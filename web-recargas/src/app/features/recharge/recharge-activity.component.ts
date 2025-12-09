import { Component } from '@angular/core';

@Component({
  selector: 'app-recharge-activity',
  standalone: true,
  template: `
    <div style="margin-top: 20px; padding: 15px; border: 1px dotted green; background-color: #f0fff0;">
      <h3>⚡ Actividad reciente (Lazy Child)</h3>
      <p>Cargado bajo demanda al entrar a /actividad.</p>
      <ul>
        <li>Recarga exitosa: $10.000 (Hace 2 min)</li>
        <li>Intento fallido: Tarjeta rechazada (Ayer)</li>
      </ul>
    </div>
  `
})
export class RechargeActivityComponent {}
