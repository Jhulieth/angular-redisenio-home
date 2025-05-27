import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFullCardsComponent } from './application-full-cards.component';

describe('ApplicationFullCardsComponent', () => {
  let component: ApplicationFullCardsComponent;
  let fixture: ComponentFixture<ApplicationFullCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationFullCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationFullCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
