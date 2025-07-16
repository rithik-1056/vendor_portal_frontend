import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  { path: 'profile', loadComponent: () => import('../vendor-profile-view/vendor-profile-view').then(m => m.VendorProfileView) },
  { path: 'rfq', loadComponent: () => import('../vendor-request-quotation/vendor-request-quotation').then(m => m.VendorRequestQuotation) },
  { path: 'po', loadComponent: () => import('../vendor-purchase-orders/vendor-purchase-orders').then(m => m.VendorPurchaseOrders) },
  { path: 'gr', loadComponent: () => import('../vendor-goods-receipt/vendor-goods-receipt').then(m => m.VendorGoodsReceipt) },
  { path: 'financial-sheet', loadComponent: () => import('../vendor-financial-sheet/vendor-financial-sheet').then(m => m.VendorFinancialSheet) },
  { path: 'invoices', loadComponent: () => import('../vendor-invoice-list/vendor-invoice-list').then(m => m.VendorInvoiceList) },
  { path: 'memos', loadComponent: () => import('../vendor-credit-debit-memo/vendor-credit-debit-memo').then(m => m.VendorCreditDebitMemo) }
];
