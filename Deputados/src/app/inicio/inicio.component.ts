import { Component, OnInit } from '@angular/core';
import { DeputadosService } from '../servico/deputados.service';
import { Deputados } from '../model/deputados';
import { ActivatedRoute, Router } from '@angular/router';
import { Despesas } from '../model/despesas';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  deputados: Deputados = new Deputados();
  despesas: Despesas = new Despesas();
  listaDeputados: Deputados[];
  num: number = 1;
  nome: string;

  constructor(

    private deputadoServico: DeputadosService,
    private router: Router,
    private routerAtivo: ActivatedRoute

  ) { }

  ngOnInit() {
    this.pegarDeput()
  }

  pegarDeput() {
    this.deputadoServico.getTodosDeputados().subscribe((resp: Deputados) => {
      this.listaDeputados = resp.dados;
      console.log("Dado recebido", resp);
      console.log("Variável preenchida", this.listaDeputados)
    });
  }


  verPerfil(id: number) {
    console.log(this.deputados.id)
    this.deputadoServico.getDeputados(id).subscribe((resp: Deputados) => {
      this.deputados = resp

      this.router.navigate(["/perfil", id])
    })
  }

  verDespesas(id: number) {
    this.deputadoServico.getDespesas(id).subscribe((resp: Despesas)=> {
      this.despesas = resp

      this.router.navigate(["/despesas", id])
    })
  }

  primPag() {
    this.deputadoServico.getPagPriDeputado().subscribe((resp: Deputados)=> {
      this.listaDeputados = resp.dados;
    })
  }

  ultPag() {
    this.deputadoServico.getPagUltDeputado().subscribe((resp: Deputados)=> {
      this.listaDeputados = resp.dados;
    })
  }

  proxPag() {
    this.num = this.num + 1
    if (this.num > 52) {
      this.num = 52;
    }
    this.deputadoServico.getPagDeputado(this.num).subscribe((resp: Deputados)=> {
      this.listaDeputados = resp.dados;
    })
  }

  anterPag() {
    this.num = this.num - 1;
    if(this.num < 1) {
      this.num = 1;
    }
    this.deputadoServico.getPagDeputado(this.num).subscribe((resp: Deputados)=> {
      this.listaDeputados = resp.dados;
    })
  }

  buscaNomeDeputado() {
    this.deputadoServico.getNomeDeputado(this.nome).subscribe((resp: Deputados)=> {
      this.listaDeputados = resp.dados;
    })
  }

}
