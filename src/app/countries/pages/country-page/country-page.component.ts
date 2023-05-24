import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountriesService } from 'src/app/countries/services/countries.service';
import { Country } from 'src/app/countries/interfaces/country-interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountriesService
  ) { }

  ngOnInit(): void {
    this.getParamsRouteAndDataCountry();
  }

  getParamsRouteAndDataCountry(){
    this.activatedRoute.params.pipe(
      switchMap(({country}) => this.countryService.searchCountries(country, 'name'))
    ).subscribe(
      response => this.country = response[0]
    )
  }
}
