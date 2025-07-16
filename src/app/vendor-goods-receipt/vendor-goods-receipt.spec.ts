import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGoodsReceipt } from './vendor-goods-receipt';

describe('VendorGoodsReceipt', () => {
  let component: VendorGoodsReceipt;
  let fixture: ComponentFixture<VendorGoodsReceipt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorGoodsReceipt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorGoodsReceipt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
