import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private readonly DOLAR_API = 'https://api.dolaresabolivianos.com/api/v1/data/last?timezone=America%2FLa_Paz';
  private readonly BTC_API = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

  constructor(private _http: HttpClient) { }

  public getDolarBobValue(): Observable<any> {
    return this._http.get(this.DOLAR_API);
  }

  public getBitcoinUSDValue(): Observable<any> {
    return this._http.get(this.BTC_API);
  }
}