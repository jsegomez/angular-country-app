import { Component } from '@angular/core';
import { CountriesService } from 'src/app/countries/services/countries.service';
import { Country } from '../../interfaces/country-interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {
  countries: Country[] = [];

  constructor(private countryService: CountriesService){}

  searchValue(value: string){
    this.countryService.searchCapital(value).subscribe(
      (result: Country[])=> {
        this.countries = result
        console.log(result)
      }
    );
  }
}
