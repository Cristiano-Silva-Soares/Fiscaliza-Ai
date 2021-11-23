import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deputados } from '../model/deputados';
import { Despesas } from '../model/despesas';





@Injectable({
  providedIn: 'root'
})
export class DeputadosService {

  constructor(

    private http: HttpClient


  ) { }

  // Métodos para consumo.

  public getDeputados(id: number): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`)
  }

  public getDespesas(id: number): Observable<Despesas> {
    return this.http.get<Despesas>(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?itens=10&ordem=ASC&ordenarPor=dataDocumento&pagina=1`)
  }

  public getPagDespesas(id: number, num: number): Observable<Despesas> {
    return this.http.get<Despesas>(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?ordem=ASC&ordenarPor=dataDocumento&pagina=${num}&itens=10`)
  }

  public getPriPagDespesas(id: number): Observable<Despesas> {
    return this.http.get<Despesas>(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?ordem=ASC&ordenarPor=ano&pagina=1&itens=10`)
  }

  public getUltPagDespesas(id: number): Observable<Despesas> {
    return this.http.get<Despesas>(`https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?ordem=ASC&ordenarPor=ano&pagina=14&itens=10`)
  }

  public getPagDeputado(num: number): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome&pagina=${num}&itens=10`)
  }

  public getPagUltDeputado(): Observable<Deputados> {
    return this.http.get<Deputados>("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome&pagina=52&itens=10")
  }

  public getPagPriDeputado(): Observable<Deputados> {
    return this.http.get<Deputados>("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome&pagina=1&itens=10")
  }

  public getNomeDeputado(nome: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${nome}&itens=10&ordem=ASC&ordenarPor=nome`)
  }

  public getTodosDeputados(): Observable<Deputados> {
    return this.http.get<Deputados>("https://dadosabertos.camara.leg.br/api/v2/deputados?itens=10&ordem=ASC&ordenarPor=nome")
  }

  public getEstadoDeputado(siglaUf: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${siglaUf}&itens=10&ordem=ASC&ordenarPor=nome`)
  }

  public getEstadoDeputadoSexoMasculino(siglaUf: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${siglaUf}&siglaSexo=M&itens=10&ordem=ASC&ordenarPor=nome`)
  }

  public getEstadoDeputadoSexoFeminino(siglaUf: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=${siglaUf}&siglaSexo=F&itens=10&ordem=ASC&ordenarPor=nome`)
  }

  public getPartidoDeputado(siglaPartido: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${siglaPartido}&itens=10&ordem=ASC&ordenarPor=nome`)
  }

  public getPartidoDeputadoSexoMasculino(siglaPartido: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${siglaPartido}&siglaSexo=M&itens=10&ordem=ASC&ordenarPor=nome`)
  }

  public getPartidoDeputadoSexoFeminino(siglaPartido: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${siglaPartido}&siglaSexo=F&itens=10&ordem=ASC&ordenarPor=nome`)
  }


  public getTesteSexoMasculino(nome: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${nome}&siglaSexo=M&itens=10&ordem=ASC&ordenarPor=nome`)
  }

  public getTesteSexoFeminino(nome: string): Observable<Deputados> {
    return this.http.get<Deputados>(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${nome}&siglaSexo=F&itens=10&ordem=ASC&ordenarPor=nome`)
  }

   // Fim dos métodos para consumo.
}
