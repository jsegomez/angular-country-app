import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private url: string = 'https://restcountries.com/v3.1';

  searchCapital(query: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}/capital/${query}`);
  }
}
