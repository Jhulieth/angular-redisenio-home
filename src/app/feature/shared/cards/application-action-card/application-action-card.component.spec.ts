import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationActionCardComponent } from './application-action-card.component';

describe('ApplicationActionCardComponent', () => {
  let component: ApplicationActionCardComponent;
  let fixture: ComponentFixture<ApplicationActionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationActionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
