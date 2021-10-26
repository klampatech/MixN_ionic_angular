import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiKey = '9973533'; // <-- Enter your own key here!
  url = `https://www.thecocktaildb.com/api/json/v2/${this.apiKey}/`;


  constructor(private http: HttpClient) { }

  searchCocktails(search: string): Observable<any> {
      if (search !== '') {
        return this.http.get(`${this.url}search.php?s=${search}`).pipe(
          map(results => results['drinks'])
        );
    }
  }

  getCocktailById(id: string): Observable<any> {
      return this.http.get(`${this.url}lookup.php?i=${id}`).pipe(
        map(results => results['drinks'][0])
      );
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.url}list.php?c=list`).pipe(
      map(results => results['drinks'])
    );
  }

  getCocktailsByCategory(id: string): Observable<any> {
    return this.http.get(`${this.url}filter.php?c=${id}`).pipe(
      map(results => results['drinks'])
    );
  }

  getRandomCocktail(): Observable<any> {
    return this.http.get(`${this.url}random.php`).pipe(
      map(results => results['drinks'][0])
    );
  }

  searchIngredient(search: string): Observable<any> {
    if (search !== '' && search.length > 2) {
      return this.http.get(`${this.url}search.php?i=${search}`).pipe(
        map(results => results['ingredients'][0])
      );
    }
  }
}
