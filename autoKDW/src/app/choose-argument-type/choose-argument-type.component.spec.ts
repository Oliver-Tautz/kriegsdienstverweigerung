import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseArgumentTypeComponent } from './choose-argument-type.component';

describe('ChooseArgumentTypeComponent', () => {
  let component: ChooseArgumentTypeComponent;
  let fixture: ComponentFixture<ChooseArgumentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseArgumentTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseArgumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
