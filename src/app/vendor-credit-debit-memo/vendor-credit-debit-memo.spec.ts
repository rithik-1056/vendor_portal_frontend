import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCreditDebitMemo } from './vendor-credit-debit-memo';

describe('VendorCreditDebitMemo', () => {
  let component: VendorCreditDebitMemo;
  let fixture: ComponentFixture<VendorCreditDebitMemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorCreditDebitMemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorCreditDebitMemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
