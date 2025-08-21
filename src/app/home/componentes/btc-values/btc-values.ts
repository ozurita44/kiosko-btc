import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from '../../../shared/services/currency.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-btc-values',
  imports: [],
  templateUrl: './btc-values.html',
  styleUrl: './btc-values.scss'
})
export class BTCValues implements OnInit {

  public displayText = 'Cargando datos...';

  constructor(private _currenciesService: CurrenciesService) { }

  ngOnInit(): void {
    this._getValues();
  }

  private _getValues(): void {
    forkJoin([
      this._currenciesService.getBitcoinUSDValue(),
      this._currenciesService.getDolarBobValue()
    ]).subscribe(([btcData, dolarData]) => {
      const btcValueInUSD = btcData.bitcoin.usd;
      const dolarValueInBOB = dolarData[0].lower_whisker_buy;

      const btcValueInBOB = btcValueInUSD * dolarValueInBOB;

      const formattedBtcUSD = new Intl.NumberFormat('en-US').format(btcValueInUSD);
      const formattedBtcBOB = new Intl.NumberFormat('es-ES').format(btcValueInBOB);

      this.displayText = `1BTC = ${formattedBtcUSD} USD = ${formattedBtcBOB} BOB`;
    }, (error) => {
      console.error('Error al obtener los valores de las monedas:', error);
      this.displayText = 'No se pudieron cargar los datos de la moneda.';
    });
  }
}
