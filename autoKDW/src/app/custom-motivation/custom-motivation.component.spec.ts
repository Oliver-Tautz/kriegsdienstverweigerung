import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMotivationComponent } from './custom-motivation.component';

describe('CustomMotivationComponent', () => {
  let component: CustomMotivationComponent;
  let fixture: ComponentFixture<CustomMotivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMotivationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomMotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
