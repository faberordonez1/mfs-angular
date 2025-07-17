import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-recargas';

  goToHome() {
    window.location.href = environment.homeUrl;
  }

  goToApuestas() {
    window.location.href = environment.apuestasUrl;
  }
}
