import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogListComponentComponent } from './catalog-list-component.component';
import { StoreModule } from '@ngrx/store';

describe('CatalogListComponentComponent', () => {
  let component: CatalogListComponentComponent;
  let fixture: ComponentFixture<CatalogListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      declarations: [ CatalogListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


