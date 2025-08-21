import { Component, OnInit } from '@angular/core';
import { Hero } from './componentes/hero/hero';
import { LogoMarquee } from './componentes/logo-marquee/logo-marquee';
import { Information } from './componentes/information/information';
import { Steps } from './componentes/steps/steps';
import { Faq } from './componentes/faq/faq';
import { Footer } from '../core/components/footer/footer';
import { scrollToTop } from '../shared/utlis/scroll-to-top.util';
import { BTCValues } from "./componentes/btc-values/btc-values";

@Component({
  selector: 'app-home',
  imports: [Hero, LogoMarquee, Information, Steps, Faq, Footer, BTCValues],
  templateUrl: './home.html'
})
export class HomePage implements OnInit {

  ngOnInit(): void {
    scrollToTop();
  }
}
