import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAttentionsComponent } from './medical-attentions.component';

describe('MedicalAttentionsComponent', () => {
  let component: MedicalAttentionsComponent;
  let fixture: ComponentFixture<MedicalAttentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalAttentionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAttentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
