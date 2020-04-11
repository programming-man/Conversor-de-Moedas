import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorMoedasComponent } from './conversor-moedas.component';

describe('ConversorMoedasComponent', () => {
  let component: ConversorMoedasComponent;
  let fixture: ComponentFixture<ConversorMoedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorMoedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
