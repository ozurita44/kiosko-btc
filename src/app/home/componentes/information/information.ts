import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-information',
  imports: [ButtonModule, RouterModule],
  templateUrl: './information.html',
  styleUrl: './information.scss'
})
export class Information {

}
