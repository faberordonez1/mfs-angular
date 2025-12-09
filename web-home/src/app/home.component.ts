import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h2>👋 Bienvenidos a la Plataforma de Juegos</h2>
      <p>Selecciona una opción del menú para comenzar:</p>
      <div class="cards">
        <div class="card">
          <h3>🎲 Apuestas</h3>
          <p>Gestiona tus apuestas en tiempo real.</p>
        </div>
        <div class="card">
          <h3>🔋 Recargas</h3>
          <p>Realiza recargas de saldo de forma segura.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      padding: 2rem;
    }
    .cards {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
    }
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      width: 200px;
      background: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    h3 { margin-top: 0; color: #333; }
  `]
})
export class HomeComponent {}
