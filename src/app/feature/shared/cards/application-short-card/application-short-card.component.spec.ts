import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationShortCardComponent } from './application-short-card.component';

describe('ApplicationShortCardComponent', () => {
  let component: ApplicationShortCardComponent;
  let fixture: ComponentFixture<ApplicationShortCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationShortCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationShortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
