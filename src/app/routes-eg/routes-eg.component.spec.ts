import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesEgComponent } from './routes-eg.component';

describe('RoutesEgComponent', () => {
  let component: RoutesEgComponent;
  let fixture: ComponentFixture<RoutesEgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesEgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
