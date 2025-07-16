import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRequestQuotation } from './vendor-request-quotation';

describe('VendorRequestQuotation', () => {
  let component: VendorRequestQuotation;
  let fixture: ComponentFixture<VendorRequestQuotation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorRequestQuotation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRequestQuotation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
