import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGridComponent } from './community-grid.component';

describe('CommunityGridComponent', () => {
  let component: CommunityGridComponent;
  let fixture: ComponentFixture<CommunityGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
