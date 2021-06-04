import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnetsComponent } from './platnets.component';

describe('PlatnetsComponent', () => {
  let component: PlatnetsComponent;
  let fixture: ComponentFixture<PlatnetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatnetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
