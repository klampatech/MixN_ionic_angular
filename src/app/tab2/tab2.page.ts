import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  results: Observable<any>;
  categories: Observable<any>;
  searchTerm: '';

  constructor(private restService: RestService) { }

  ngOnInit() { this.loadCategories();}

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.restService.searchCocktails(this.searchTerm);
    console.log(this.results);
  }

  loadCategories() {
    this.categories = this.restService.getCategories();
    console.log(this.categories);
  }

}
