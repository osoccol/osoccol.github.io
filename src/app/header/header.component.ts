import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

class HeaderItem {
  text!: string;
  icon!: string;
  route!: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lang = 'Header.Spanish';
  headers: HeaderItem[] = [
    {
      text: 'Header.Home',
      icon: 'home',
      route: ''
    },
    {
      text: 'Header.Gifts',
      icon: 'card_giftcard',
      route: 'gifts'
    },
    {
      text: 'Header.Transfer',
      icon: 'attach_money',
      route: 'transfer'
    }
  ];
  constructor(private translateService: TranslateService) {
    let lang = this.translateService.currentLang;
    this.lang = `Header.${lang == 'fr' ? 'French' : lang == 'es' ? 'Spanish' : 'English'}`
  }

  translate() {
    let lang = this.translateService.currentLang;
    let newLang = lang == 'fr' ? 'es' : lang == 'es' ? 'en' : 'fr'
    this.lang = `Header.${newLang == 'fr' ? 'French' : newLang == 'es' ? 'Spanish' : 'English'}`;
    this.translateService.use(newLang);
  }
}
