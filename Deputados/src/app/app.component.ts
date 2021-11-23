import { Component } from '@angular/core';
import { DeputadosService } from './servico/deputados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fiscaliza Aí';

  constructor(private deputadoService: DeputadosService) {}

}
