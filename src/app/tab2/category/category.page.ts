import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  results: Observable<any>;
  category = null;

  constructor(private activatedRoute: ActivatedRoute, private restService: RestService) { }

  ngOnInit() {
    this.getDrinksByCategory();
  }

  getDrinksByCategory() {
    // Get the Category that was passed with the URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // Get the information from the API
    this.results = this.restService.getCocktailsByCategory(id);
    this.category = id;
    console.log(this.results);
  }



}
