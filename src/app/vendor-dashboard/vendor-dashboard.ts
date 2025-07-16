import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { dashboardRoutes } from './vendor-dashboard.routes';

@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [
  CommonModule,
  RouterOutlet,
  RouterLink
],
  templateUrl: './vendor-dashboard.html',
  styleUrls: ['./vendor-dashboard.css']
})
export class VendorDashboard {}
