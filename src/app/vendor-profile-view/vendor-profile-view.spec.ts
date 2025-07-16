import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProfileView } from './vendor-profile-view';

describe('VendorProfileView', () => {
  let component: VendorProfileView;
  let fixture: ComponentFixture<VendorProfileView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorProfileView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorProfileView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
