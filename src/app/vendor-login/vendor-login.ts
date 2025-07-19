import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { CommonModule } from '@angular/common'; // Optional for structural directives like *ngIf
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-login',
  standalone: true, // Mark as standalone
  imports: [CommonModule, FormsModule], // Import required modules here
  templateUrl: './vendor-login.html',
  styleUrls: ['./vendor-login.css']
})
export class VendorLogin {
  vendorId = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router, private vendorService: VendorService) {}

  onLogin() {
    const params = new HttpParams()
      .set('VendorId', this.vendorId)
      .set('Password', this.password);

    this.http.get<any>('http://localhost:3000/login', { params }).subscribe({
      next: (res) => {
        if (res.success) {
          this.vendorService.setVendorId(this.vendorId);
          this.router.navigate(['/dashboard/profile']);
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
