import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-time',
  imports: [],
  /*  templateUrl: './local-time.component.html', */
  template: `<h1>Hora Local</h1>
    <p>La hora actual es: {{ localTime }}</p>`,

  styleUrl: './local-time.component.css',
})
export class LocalTimeComponent implements OnInit {
  localTime: string = '';

  ngOnInit(): void {
    this.localTime = new Date().toLocaleTimeString();
  }
}
