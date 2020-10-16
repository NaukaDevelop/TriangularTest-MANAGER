import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: "", redirectTo: 'layout', pathMatch: "full" },


  {
    path: 'nav',
    loadChildren: () =>
      import('./layout/navigation/navigation.module').then((m) => m.NavigationModule),
  },


  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },

  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },



  {
    path: 'sample',
    loadChildren: () =>
      import('./samples/sample/sample.module').then((m) => m.SampleModule),
  },

  {
    path: 'book',
    loadChildren: () =>
      import('./samples/book/book.module').then((m) => m.BookModule),
  },

  { path: "access-denied", component: AccessDeniedComponent },
  { path: "error", component: ErrorComponent },
  { path: '**', redirectTo: 'notfound' },
  { path: "notfound", component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
