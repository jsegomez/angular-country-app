import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/countries/interfaces/country-interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {
  constructor(
    private router: Router
  ){}

  @Input() countries!: Country[];

  detailsCountry(countryName: string){
    this.router.navigate([`/countries/details-country/${countryName}`]);
  }
}
