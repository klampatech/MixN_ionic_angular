import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  information = null;
  ingredients = null;

  constructor(private activatedRoute: ActivatedRoute, private restService: RestService) { }

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

    // Get the ID that was passed with the URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // Get the information from the API
    this.restService.getCocktailById(id).subscribe(result => {
      this.information = result;
      this.ingredients = this.collectIngredients(result);
    });

  }

}
