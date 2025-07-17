import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-apuestas';

  goTo(keyEnv: 'homeUrl' | 'recargasUrl' | 'apuestasUrl') {
    let urlDestino = environment[keyEnv];
    let urlActual = window.location.href;

    if (urlDestino === urlActual) return;

    window.location.href = urlDestino;
  }
}
