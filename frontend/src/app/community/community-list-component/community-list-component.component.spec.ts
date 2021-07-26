import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { communityReducer } from '../store/community.reducer';

import { CommunityListComponentComponent } from './community-list-component.component';

describe('CommunityListComponentComponent', () => {
  let component: CommunityListComponentComponent;
  let fixture: ComponentFixture<CommunityListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      declarations: [ CommunityListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
