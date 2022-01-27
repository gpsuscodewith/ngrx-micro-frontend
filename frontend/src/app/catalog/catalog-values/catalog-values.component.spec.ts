import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogValuesComponent } from './catalog-values.component';

describe('CatalogValuesComponent', () => {
  let component: CatalogValuesComponent;
  let fixture: ComponentFixture<CatalogValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
