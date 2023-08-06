import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
TranslatePipe
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang = '';
  citation = {
    text: `"Le mariage n'est ni un poison ni un médicament. C'est une marmelade, une confiture, une friandise!"`,
    author: 'Carlo Goldoni'
  };

  message: string = `Home.Message`;
  constructor(private translateService: TranslateService) {
    this.lang = this.translateService.currentLang;
  }
  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: any) => {
      this.lang = event.lang;
      console.log(this.lang);
      
    })
  }
}
