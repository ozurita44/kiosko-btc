import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-news-data-view',
  imports: [Button, Card, CarouselModule],
  templateUrl: './news-data-view.html',
  styleUrl: './news-data-view.scss'
})
export class NewsDataView {
  public newsList = [
    {
      title: 'Lanzan red de kioscos para transacciones en criptomonedas en Cochabamba',
      description: 'Se trata de un proyecto para alfabetizar a la sociedad en el concepto y uso de criptomonedas. Está apoyado por Andrée Canelas, experto en el tema',
      link: 'https://www.facebook.com/ValorAgregadoBo/posts/pfbid02VPCCUyRrbEqZPcNXu5mqGejy6m2n9roCjnBeYWiP951w8VvX3ZoQrZoNtPid7j9nl?rdid=D1zunZ6emBZbPsd2#',
      imgUrl: 'assets/images/news/new1.webp'
    },
    {
      title: 'En latinoamérica se va adoptando las criptomonedas como método de pago',
      description: 'La digitalización avanza con fuerza en América Latina. En Bolivia, las operaciones con criptomonedas crecieron de 6 millones en 2021 a casi 290 millones en 2024',
      link: 'https://www.facebook.com/watch/?v=698029186373986&rdid=ByuSckXrtqRrCJmM',
      imgUrl: 'assets/images/news/new2.webp'
    },
    {
      title: 'Cae la economía de EE. UU. por aumento de importaciones y consumo en baja',
      description: 'La digitalización avanza con fuerza en América Latina. En Bolivia, las operaciones con criptomonedas crecieron de 6 millones en 2021 a casi 290 millones en 2024',
      link: 'https://www.facebook.com/watch/?v=698029186373986&rdid=ByuSckXrtqRrCJmM',
      imgUrl: 'assets/images/news/new3.webp'
    },
    {
      title: 'Crypto gains foothold in Bolivia as small businesses seek currency alternatives',
      description: 'In the busy shopping district of the Bolivian city of Cochabamba, ATMs let shoppers swap coins for cryptocurrency, beauty salons offer cut-price deals if you pay in Bitcoin, and people use Binance accounts to buy fried chicken.',
      link: 'https://www.reuters.com/world/americas/crypto-gains-foothold-bolivia-small-businesses-seek-currency-alternatives-2025-06-26/?fbclid=IwY2xjawMRTU5leHRuA2FlbQIxMABicmlkETFiS0RmZWcybzE0ZHBkZ0EzAR4jBareJeXFmJqe7MFiaIspkFIqY0d28QMrzkTp5jUP4OrCGGqgnydYE5x1Eg_aem_8Y51YaSWJNoawjVt7AsJFw',
      imgUrl: 'assets/images/news/new4.webp'
    }
  ];

  public responsiveOptions = [
    {
      breakpoint: '1023px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
