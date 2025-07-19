import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendor-login.html',
  styleUrls: ['./vendor-login.css']
})
export class VendorLogin {
  vendorId = '';
  password = '';
  rememberMe = false;
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router, private vendorService: VendorService) {}

  onLogin() {
    const paddedVendorId = this.vendorId.padStart(10, '0');

    const params = new HttpParams()
      .set('VendorId', paddedVendorId)
      .set('Password', this.password);

    this.http.get<any>('http://localhost:3000/api/vendor-login', { params }).subscribe({
      next: (res) => {
        if (res.success) {
          this.vendorService.setVendorId(paddedVendorId);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = res.message || 'Invalid credentials.';
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Login failed. Please try again.';
      }
    });
  }
}
