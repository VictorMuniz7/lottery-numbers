import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDeSorteComponent } from './dia-de-sorte.component';

describe('DiaDeSorteComponent', () => {
  let component: DiaDeSorteComponent;
  let fixture: ComponentFixture<DiaDeSorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaDeSorteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaDeSorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
