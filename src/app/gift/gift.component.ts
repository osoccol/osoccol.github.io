import { Component, OnInit } from '@angular/core';

class Gift {
  title!: string;
  description!: string;
  imgUrl!: string;
  links!: string[];
  country!: string;
}

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  giftList: Gift[] = [];
  displayedGiftList: Gift[] = [];
  country: 'FR' | 'MX' | undefined = undefined;
  explaination: string = `Nous prévoyons de nous installer en France l'année prochaine`;

  get allGifts() {
    return this.country == undefined
  }

  ngOnInit(): void {
    this.loadGifts()
  }

  loadGifts() {
    this.giftList = [
      { title: 'Téléscope', description: `Pour admirer le ciel et les voisins d'en face`, imgUrl: '/assets/img/telescope.jpg', country: 'MX', links: [] },
      { title: 'Altères', description: `Pour pouvoir nous admirer`, imgUrl: '/assets/img/altere.jpg', country: 'MX', links: [] },
      { title: 'Miroir', description: `Pour nous admirer`, imgUrl: '/assets/img/miroir.jpg', country: 'MX', links: [] },
      { title: 'Maserati', description: `Faut bien rêver un peu`, imgUrl: '/assets/img/maserati.jpg', country: 'FR', links: [] },
    ];

    this.displayedGiftList = this.giftList;
  }

  changeCountry(countryCode?: 'MX'|'FR') {
    if (countryCode) {
      this.country = countryCode;
      this.displayedGiftList = this.giftList.filter(el => el.country == this.country)
    } else {
      this.country = undefined;
      this.displayedGiftList = this.giftList;
    }
  }
}
