import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regalos-boda';

  langList: string[] = ['en', 'fr', 'es'];

  constructor(private translate: TranslateService, private titleService: Title) {
    this.titleService.setTitle(`Boda - Oscar & Natalia`);
    this.loadTranslations();
  }

  loadTranslations() {
    let lang = this.translate.getBrowserLang();
    // this.translate.setDefaultLang('es');
    lang && this.langList.includes(lang) ? this.translate.setDefaultLang(lang) : this.translate.setDefaultLang('en');
    this.translate.addLangs(this.langList);    
    this.translate.use(this.translate.defaultLang)
  }
}
