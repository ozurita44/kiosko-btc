import { Component, OnInit } from '@angular/core';
import { AboutHero } from './about-hero/about-hero';
import { Footer } from '../../core/components/footer/footer';
import { scrollToTop } from '../../shared/utlis/scroll-to-top.util';
import { NewsDataView } from './news-data-view/news-data-view';
import { CEOSection } from './ceo-section/ceo-section';
import { BTCValues } from '../../home/componentes/btc-values/btc-values';

@Component({
  selector: 'app-about-us',
  imports: [AboutHero, Footer, NewsDataView, CEOSection, BTCValues],
  templateUrl: './about-us.html'
})
export class AboutUsPage  implements OnInit {

  ngOnInit(): void {
    scrollToTop();
  }
}
