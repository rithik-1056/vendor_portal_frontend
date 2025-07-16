import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFinancialSheet } from './vendor-financial-sheet';

describe('VendorFinancialSheet', () => {
  let component: VendorFinancialSheet;
  let fixture: ComponentFixture<VendorFinancialSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorFinancialSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorFinancialSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
