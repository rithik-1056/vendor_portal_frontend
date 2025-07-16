import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', loadComponent: () => import('./vendor-login/vendor-login').then(m => m.VendorLogin) },

  { path: 'dashboard', loadComponent: () => import('./vendor-dashboard/vendor-dashboard').then(m => m.VendorDashboard) },

  // Children for dashboard layout
  { path: 'dashboard/profile', loadComponent: () => import('./vendor-profile-view/vendor-profile-view').then(m => m.VendorProfileView) },
  { path: 'dashboard/rfq', loadComponent: () => import('./vendor-request-quotation/vendor-request-quotation').then(m => m.VendorRequestQuotation) },
  { path: 'dashboard/po', loadComponent: () => import('./vendor-purchase-orders/vendor-purchase-orders').then(m => m.VendorPurchaseOrders) },
  { path: 'dashboard/gr', loadComponent: () => import('./vendor-goods-receipt/vendor-goods-receipt').then(m => m.VendorGoodsReceipt) },
  { path: 'dashboard/financial-sheet', loadComponent: () => import('./vendor-financial-sheet/vendor-financial-sheet').then(m => m.VendorFinancialSheet) },
  { path: 'dashboard/invoices', loadComponent: () => import('./vendor-invoice-list/vendor-invoice-list').then(m => m.VendorInvoiceList) },
  { path: 'dashboard/memos', loadComponent: () => import('./vendor-credit-debit-memo/vendor-credit-debit-memo').then(m => m.VendorCreditDebitMemo) },
];

