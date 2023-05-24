import { Component } from '@angular/core';
import { CountriesService } from 'src/app/countries/services/countries.service';
import { Country } from '../../interfaces/country-interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {
  countries: Country[] = [];

  constructor(private countryService: CountriesService){}

  searchValue(value: string){
    this.countryService.searchCountries(value, 'capital').subscribe(
      (result: Country[])=> this.countries = result
    );
  }
}
