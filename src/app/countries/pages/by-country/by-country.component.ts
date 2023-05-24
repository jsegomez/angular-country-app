import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country-interface';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  countries: Country[] = [];

  constructor(private countryService: CountriesService){}

  searchValue(value: string){
    this.countryService.searchCountries(value, 'name').subscribe(
      (result: Country[])=> this.countries = result
    );
  }
}
