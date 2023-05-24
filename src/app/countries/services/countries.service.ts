import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country-interface';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private url: string = 'https://restcountries.com/v3.1';

  searchCountries(query: string, kind: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}/${kind}/${query}`).pipe(
      catchError((error: HttpErrorResponse)  => {
        return of([]);
      })
    );
  }
}


