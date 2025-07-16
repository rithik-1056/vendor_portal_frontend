import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPurchaseOrders } from './vendor-purchase-orders';

describe('VendorPurchaseOrders', () => {
  let component: VendorPurchaseOrders;
  let fixture: ComponentFixture<VendorPurchaseOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorPurchaseOrders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorPurchaseOrders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
