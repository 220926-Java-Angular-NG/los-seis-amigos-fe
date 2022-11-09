import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSetWrapperComponent } from './card-set-wrapper.component';

describe('CardSetWrapperComponent', () => {
  let component: CardSetWrapperComponent;
  let fixture: ComponentFixture<CardSetWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSetWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
