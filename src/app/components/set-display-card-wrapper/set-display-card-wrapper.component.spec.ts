import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDisplayCardWrapperComponent } from './set-display-card-wrapper.component';

describe('SetDisplayCardWrapperComponent', () => {
  let component: SetDisplayCardWrapperComponent;
  let fixture: ComponentFixture<SetDisplayCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDisplayCardWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetDisplayCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
