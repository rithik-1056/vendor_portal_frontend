// src/app/vendor-profile-view/vendor-profile-view.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-profile-view',
  templateUrl: './vendor-profile-view.html',
  styleUrls: ['./vendor-profile-view.css']
})
export class VendorProfileView implements OnInit {
  profile: any = null;
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private vendorService: VendorService
  ) {}

  ngOnInit(): void {
    const vendorId = this.vendorService.getVendorId();

    if (!vendorId) {
      this.errorMessage = 'Vendor ID not available. Please login again.';
      return;
    }

    const params = new HttpParams().set('VendorId', vendorId);

    this.http.get<any>('http://localhost:3000/profile', { params }).subscribe({
      next: (data) => {
        this.profile = data;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load profile data';
        console.error(error);
      }
    });
  }
}
