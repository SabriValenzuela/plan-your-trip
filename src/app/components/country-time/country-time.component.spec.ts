import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTimeComponent } from './country-time.component';

describe('CountryTimeComponent', () => {
  let component: CountryTimeComponent;
  let fixture: ComponentFixture<CountryTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
