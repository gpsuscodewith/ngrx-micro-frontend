import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTradeComponent } from './community-trade.component';

describe('CommunityTradeComponent', () => {
  let component: CommunityTradeComponent;
  let fixture: ComponentFixture<CommunityTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
