import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deputados } from '../model/deputados';
import { ultimoStatus } from '../model/ultimoStatus';
import { DeputadosService } from '../servico/deputados.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  ultimoStatus: ultimoStatus = new ultimoStatus()
  deputado: Deputados = new Deputados();
  perfilDeputado: Deputados[] = [];
  


  constructor(private router: Router,
    private routerAtivo: ActivatedRoute,
    private deputadoServico: DeputadosService
    ) { }

  ngOnInit() {

    window.scroll(0,0)

    let id = this.routerAtivo.snapshot.params['id']
    this.pegarIdDeputado(id)
  }

  pegarIdDeputado(id: number) {
    this.deputadoServico.getDeputados(id).subscribe((resp: Deputados)=> {
      this.deputado = resp
      console.log("Dados Recebidos", this.perfilDeputado)
      console.log("Visualização", this.ultimoStatus)
    })
    
  }

}
