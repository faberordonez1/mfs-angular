import { Component } from '@angular/core';

@Component({
  selector: 'app-bets-history',
  standalone: true,
  template: `
    <div style="margin-top: 20px; padding: 15px; border: 1px dashed #666; background-color: #fafafa;">
      <h3>📜 Historial de Apuestas (Nested Lazy Child)</h3>
      <p>Este componente es un "hijo perezoso". Se cargó usando <code>loadComponent</code> solo cuando entraste a esta ruta.</p>
      <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
        <tr><th>Fecha</th><th>Evento</th><th>Monto</th></tr>
        <tr><td>2023-10-01</td><td>Real Madrid vs Napoli</td><td>$50.00</td></tr>
        <tr><td>2023-10-05</td><td>Lakers vs Warriors</td><td>$20.00</td></tr>
      </table>
    </div>
  `
})
export class BetsHistoryComponent {}
