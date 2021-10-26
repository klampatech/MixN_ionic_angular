import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  sub: Subscription;
  result = null;
  ingredients = null;

  constructor(private restService: RestService) {}

  collectIngredients = item => {
    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      let ingredient = null;
      let measure = null;
      const ing = `strIngredient${i.toString()}`;
      const m = `strMeasure${i.toString()}`;
      if (item[ing] !== null) {
        ingredient = item[ing];
      }
      if (item[m] !== null) {
        measure = item[m];
      }
      if (ingredient !== null && measure !== null) {
        ingredients.push({
          ingredient,
          measure,
        });
      }

      console.log(ingredients);
    }
    return ingredients;
  };

  ngOnInit() {
    this.sub = this.restService.getRandomCocktail().subscribe(res => {
      this.result = res;
    });  }

  ionViewDidLeave() {
    this.sub.unsubscribe();
    console.log('clean up');
  }

  ionViewDidEnter() {
    console.log('subscribing random');
   this.sub = this.restService.getRandomCocktail().subscribe(res => {
    this.result = res;
    this.ingredients = this.collectIngredients(res);
    });
  }

}
