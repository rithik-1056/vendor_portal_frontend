// src/app/vendor.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  private vendorId: string | null = null;

  setVendorId(id: string) {
    this.vendorId = id;
    localStorage.setItem('vendorId', id); // Optional: persist across reloads
  }

  getVendorId(): string | null {
    if (!this.vendorId) {
      this.vendorId = localStorage.getItem('vendorId'); // fallback
    }
    return this.vendorId;
  }

  clearVendorId() {
    this.vendorId = null;
    localStorage.removeItem('vendorId');
  }
}
