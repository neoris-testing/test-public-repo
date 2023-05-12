import { Component, HttpClient } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular15-shoppingCartAdd';
  const userInput = '2 + 2';
  const result = eval(userInput);
  console.log(result); // resultado 


  constructor(private http: HttpClient) {}

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

  while (true) {
    // Hacer algo aquí
  }

  let nombre;
  console.log(nombre.length); // Error de referencia nula: nombre es undefined

}