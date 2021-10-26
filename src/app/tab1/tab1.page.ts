import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  result = null;
  searchTerm: '';
  image: string;

  constructor(private restService: RestService) {}

  searchChanged() {
    this.restService.searchIngredient(this.searchTerm)?.subscribe(res => {
      this.result = res;
      this.image = `https://www.thecocktaildb.com/images/ingredients/${this.result?.strIngredient}-Small.png`;
    });
  }

}
