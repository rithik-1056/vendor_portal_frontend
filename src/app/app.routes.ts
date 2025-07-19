import { Routes } from '@angular/router';
import { VendorLogin } from './vendor-login/vendor-login';
import { VendorDashboard } from './vendor-dashboard/vendor-dashboard';
import { VendorProfileView } from './vendor-profile-view/vendor-profile-view'; // 👈 Import the profile view
// import other child components like RFQ, PO, etc. similarly

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: VendorLogin },
  {
    path: 'dashboard',
    component: VendorDashboard,
    children: [
      { path: 'profile', component: VendorProfileView },
      // Add other children like:
      // { path: 'rfq', component: RfqComponent },
      // { path: 'po', component: PoComponent },
    ]
  }
];
