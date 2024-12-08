import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-time',
  imports: [],
  /*   templateUrl: './country-time.component.html', */
  template: `<h1>Hora en otro país</h1>
    <p>País: {{ countryCode }}</p>
    <p>Hora: {{ countryTime }}</p>`,

  styleUrl: './country-time.component.css',
})
export class CountryTimeComponent implements OnInit {
  countryCode: string = '';
  countryTime: string = '';

  constructor(private route: '') {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countryCode = params['countryCode'];
      this.getCountryTime(this.countryCode);
    });
  }

  getCountryTime(countryCode: string): void {
    this.countryTime = new Date().toLocaleTimeString();
  }
}
