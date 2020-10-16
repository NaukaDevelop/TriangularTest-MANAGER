import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';


const routes: Routes = [

  { path: "", redirectTo: 'nav', pathMatch: "full" },

  {
    path: 'nav', component: NavigationComponent, children: [


      {
        path: 'main-dashboard',
        loadChildren: () =>
          import('../prepayroll/dashboard/main-dashboard/main-dashboard.module').then((m) => m.MainDashboardModule),
      },

      {
        path: 'commission-key',
        loadChildren: () =>
          import('../prepayroll/appconfig/commission-key/commission-key.module').then((m) => m.CommissionKeyModule),
      },

      {
        path: 'store-config',
        loadChildren: () =>
          import('../prepayroll/appconfig/store-config/store-config.module').then((m) => m.StoreConfigModule),
      },

      {
        path: 'holiday',
        loadChildren: () =>
          import('../prepayroll/appconfig/holiday/holiday.module').then((m) => m.HolidayModule),
      },

      {
        path: 'birthday',
        loadChildren: () =>
          import('../prepayroll/appconfig/birthday/birthday.module').then((m) => m.BirthdayModule),
      },

      {
        path: 'city',
        loadChildren: () =>
          import('../prepayroll/appconfig/city/city.module').then((m) => m.CityModule),
      },


      {
        path: 'phonelist',
        loadChildren: () =>
          import('../prepayroll/appconfig/phonelist/phonelist.module').then((m) => m.PhonelistModule),
      },


      {
        path: 'store-list',
        loadChildren: () =>
          import('../prepayroll/appconfig/store-list/store-list.module').then((m) => m.StoreListModule),
      },

      {
        path: 'accounting-period',
        loadChildren: () =>
          import('../prepayroll/appconfig/accounting-period/accounting-period.module').then((m) => m.AccountingPeriodModule),
      },

      {
        path: 'information-transfer',
        loadChildren: () =>
          import('../prepayroll/appconfig/information-transfer/information-transfer.module').then((m) => m.InformationTransferModule),
      },
      // End appconfig


      // Userconfig
      {
        path: 'user-list',
        loadChildren: () =>
          import('../prepayroll/userconfig/user-list/user-list.module').then((m) => m.UserListModule),
      },

      {
        path: 'role',
        loadChildren: () =>
          import('../prepayroll/userconfig/role/role.module').then((m) => m.RoleModule),
      },
      // End Userconfig

      // Tools
      {
        path: 'support-prize',
        loadChildren: () =>
          import('../prepayroll/tools/support-prize/support-prize.module').then((m) => m.SupportPrizeModule),
      },

      {
        path: 'employee-tool',
        loadChildren: () =>
          import('../prepayroll/tools/employee-tool/employee-tool.module').then((m) => m.EmployeeToolModule),
      },

      {
        path: 'payroll-check',
        loadChildren: () =>
          import('../prepayroll/tools/payroll-check/payroll-check.module').then((m) => m.PayrollCheckModule),
      },

      // End Tools

      // List

      {
        path: 'red-dot-article',
        loadChildren: () =>
          import('../prepayroll/lists/red-dot-article/red-dot-article.module').then((m) => m.RedDotArticleModule),
      },

      {
        path: 'support-commission',
        loadChildren: () =>
          import('../prepayroll/lists/support-commission/support-commission.module').then((m) => m.SupportCommissionModule),
      },

      {
        path: 'store-commission-list',
        loadChildren: () =>
          import('../prepayroll/lists/store-commission-list/store-commission-list.module').then((m) => m.StoreCommissionListModule),
      },

      {
        path: 'rank-commission',
        loadChildren: () =>
          import('../prepayroll/lists/rank-commission/rank-commission.module').then((m) => m.RankCommissionModule),
      },

      {
        path: 'salesman-goal',
        loadChildren: () =>
          import('../prepayroll/lists/salesman-goal/salesman-goal.module').then((m) => m.SalesmanGoalModule),
      },

      {
        path: 'store-goal',
        loadChildren: () =>
          import('../prepayroll/lists/store-goal/store-goal.module').then((m) => m.StoreGoalModule),
      },

      // End List

      // Prepayroll

      {
        path: 'pre-pay-roll-download',
        loadChildren: () =>
          import('../prepayroll/prepayroll/pre-pay-roll-download/pre-pay-roll-download.module').then((m) => m.PrePayRollDownloadModule),
      },

      // End Prepayroll

      // Report

      {
        path: 'store-period-commission',
        loadChildren: () =>
          import('../prepayroll/reports/store-period-commission/store-period-commission.module').then((m) => m.StorePeriodCommissionModule),
      },

      {
        path: 'commission-history',
        loadChildren: () =>
          import('../prepayroll/reports/commission-history/commission-history.module').then((m) => m.CommissionHistoryModule),
      },

      {
        path: 'asistancy-report',
        loadChildren: () =>
          import('../prepayroll/reports/asistancy-report/asistancy-report.module').then((m) => m.AsistancyReportModule),
      },

      {
        path: 'checked-report',
        loadChildren: () =>
          import('../prepayroll/reports/checked-report/checked-report.module').then((m) => m.CheckedReportModule),
      },

      {
        path: 'credit-report',
        loadChildren: () =>
          import('../prepayroll/reports/credit-report/credit-report.module').then((m) => m.CreditReportModule),
      },

      {
        path: 'sale-report',
        loadChildren: () =>
          import('../prepayroll/reports/sale-report/sale-report.module').then((m) => m.SaleReportModule),
      },

      // End Report

      // Monitor
      {
        path: 'inventory-check',
        loadChildren: () =>
          import('../prepayroll/monitor/inventory-check/inventory-check.module').then((m) => m.InventoryCheckModule),
      },

      {
        path: 'inventory',
        loadChildren: () =>
          import('../prepayroll/monitor/inventory/inventory.module').then((m) => m.InventoryModule),
      },

      {
        path: 'sale-info',
        loadChildren: () =>
          import('../prepayroll/monitor/sale-info/sale-info.module').then((m) => m.SaleInfoModule),
      },

      {
        path: 'kardex',
        loadChildren: () =>
          import('../prepayroll/monitor/kardex/kardex.module').then((m) => m.KardexModule),
      },

      {
        path: 'shipping-list',
        loadChildren: () =>
          import('../prepayroll/monitor/shipping-list/shipping-list.module').then((m) => m.ShippingListModule),
      },

      {
        path: 'frozen-monitor',
        loadChildren: () =>
          import('../prepayroll/monitor/frozen-monitor/frozen-monitor.module').then((m) => m.FrozenMonitorModule),
      },

      {
        path: 'transaction-monitor',
        loadChildren: () =>
          import('../prepayroll/monitor/transaction-monitor/transaction-monitor.module').then((m) => m.TransactionMonitorModule),
      },

      {
        path: 'invoice-total',
        loadChildren: () =>
          import('../prepayroll/monitor/invoice-total/invoice-total.module').then((m) => m.InvoiceTotalModule),
      },

    ]
  },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
