import { HttpClient } from '@angular/common/http';

getCountryTime(countryCode: string): void {
  this.http.get(`http://worldtimeapi.org/api/timezone/${countryCode}`)
    .subscribe((response: any) => {
      this.countryTime = response.datetime;
    });
}