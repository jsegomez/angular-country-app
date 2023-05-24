import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country-interface';
import { CountriesService } from 'src/app/countries/services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {
  countries: Country[] = [];
  regions: string[] = ['Africa', 'Asia', 'Caribbean', 'Central America', 'Europe', 'North America', 'Oceania', 'South America'];

  constructor(private countryService: CountriesService){}

  searchValue(value: string){
    this.countryService.searchCountries(value, 'region').subscribe(
      (result: Country[])=> this.countries = result
    );
  }
}
