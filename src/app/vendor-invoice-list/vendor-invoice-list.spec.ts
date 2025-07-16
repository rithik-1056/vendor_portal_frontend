import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorInvoiceList } from './vendor-invoice-list';

describe('VendorInvoiceList', () => {
  let component: VendorInvoiceList;
  let fixture: ComponentFixture<VendorInvoiceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorInvoiceList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorInvoiceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
