import { TestBed } from '@angular/core/testing';
import { VendorService } from './vendor.service';

describe('VendorService', () => {
  let service: VendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store and retrieve vendorId', () => {
    service.setVendorId('V123');
    expect(service.getVendorId()).toBe('V123');
  });

  it('should clear vendorId', () => {
    service.setVendorId('V123');
    service.clearVendorId();
    expect(service.getVendorId()).toBeNull();
  });
});
