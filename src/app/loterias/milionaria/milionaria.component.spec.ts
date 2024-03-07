import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilionariaComponent } from './milionaria.component';

describe('MilionariaComponent', () => {
  let component: MilionariaComponent;
  let fixture: ComponentFixture<MilionariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilionariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MilionariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
