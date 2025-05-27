import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAcctionsComponent } from './quick-acctions.component';

describe('QuickAcctionsComponent', () => {
  let component: QuickAcctionsComponent;
  let fixture: ComponentFixture<QuickAcctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickAcctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickAcctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
