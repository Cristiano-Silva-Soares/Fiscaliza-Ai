import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Despesas } from '../model/despesas';
import { DeputadosService } from '../servico/deputados.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  despesas: Despesas = new Despesas();
  listaDespesas: Despesas[];
  num: number = 1;
  numu: number = 1;
  id: number;

  constructor( 
    
   private routerAtivo: ActivatedRoute,
   private deputadosServico: DeputadosService

    ) { }

  ngOnInit() {

    window.scroll(0,0)
    this.id = this.routerAtivo.snapshot.params ['id']
    this.pegarIdDespesas(this.id)
  }

  pegarIdDespesas(id: number) {
    this.deputadosServico.getDespesas(id).subscribe((resp: Despesas) => {
      this.listaDespesas = resp.dados;
      console.log("Dados consumidos", resp)
      console.log("Dados recebidos", this.listaDespesas)
    })
  }

  proxPag() {
    this.numu = this.numu + 1;
    if(this.numu > 14) {
      this.numu = 14;
    }

   this.deputadosServico.getPagDespesas(this.id, this.numu).subscribe((resp: Despesas)=> {
     this.listaDespesas = resp.dados;
   })
  }

  anterPag() {
    this.numu = this.numu - 1;
    if(this.numu < 1) {
      this.numu = 1;
    }

    this.deputadosServico.getPagDespesas(this.id, this.numu).subscribe((resp: Despesas)=> {
      this.listaDespesas = resp.dados
    })
  }

  primPag() {
    this.deputadosServico.getPriPagDespesas(this.id).subscribe((resp: Despesas)=> {
      this.listaDespesas = resp.dados;
    })
  }

  ultPag() {
    this.deputadosServico.getUltPagDespesas(this.id).subscribe((resp: Despesas)=> {
      this.listaDespesas = resp.dados;
    })
  }

}
