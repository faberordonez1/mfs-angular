import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-home';

  crear() {
    // Lógica para crear un nuevo elemento
    console.log('Crear nuevo elemento');
    var nuevoElemento = {
      id: Date.now(),
      nombre: 'Nuevo Elemento'
    };
    console.log(nuevoElemento);
  }

  goToRecargas() {
    window.location.href = environment.recargasUrl;
  }

  goToApuestas() {
    window.location.href = environment.apuestasUrl;
  }
}
