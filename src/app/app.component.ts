import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular15-shoppingCartAdd';

  makeInsecureRequest() {
    this.http.get('https://unsecured-server.com/data').subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error al hacer la petición:', error);
      }
    );
  }

}
