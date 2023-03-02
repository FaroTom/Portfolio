import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionSectionComponent } from './introduction-section.component';

describe('IntroductionSectionComponent', () => {
  let component: IntroductionSectionComponent;
  let fixture: ComponentFixture<IntroductionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
