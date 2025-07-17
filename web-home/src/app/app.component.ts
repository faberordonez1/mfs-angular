import { Component } from '@angular/core';

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
}
