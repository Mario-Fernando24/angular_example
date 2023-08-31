import { Component } from '@angular/core';

@Component({
  //cuando encuentre una etiqueta necesito que renderice rodo lo que se encuestre en esta clas
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre= 'Mario';
  apellido= 'Muñoz';
}
