import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendor-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendor-login.html',
  styleUrls: ['./vendor-login.css']
})
export class VendorLogin {
  vendorId: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // login() {
  //   this.http.post('http://localhost:3000/api/login', {
  //     vendorId: this.vendorId,
  //     password: this.password
  //   }).subscribe((res: any) => {
  //     if (res.success) {
  //       this.router.navigate(['/dashboard']);
  //     } else {
  //       alert("Invalid credentials");
  //     }
  //   }, err => {
  //     alert("Server error");
  //   });
  // }
  login() {
  // Simulated login (remove this once backend is connected)
  if (this.vendorId === 'VENDOR001' && this.password === 'pass123') {
    this.router.navigate(['/dashboard']);
  } else {
    alert('Invalid credentials');
  }
}
}
