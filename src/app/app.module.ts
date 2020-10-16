// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Standard
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
// Local
import { MaterialModule } from 'src/app/core/material/material.module';
import { EnvServiceProvider } from 'src/shared/environment/env.service.provider';
import { environment } from 'src/environments/environment';
// Services
import { InterceptorService } from 'src/shared/services';
// Guards
import { AuthGuard } from 'src/shared/guard/';
// States
import { StoreState } from 'src/state';
import { BookState } from 'src/app/samples/book/state';
// Vendor
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
// import { NgxsModule } from '@ngxs/store';
// import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
// import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AccessDeniedComponent,
    ErrorComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NgSelectModule,
    // NgxsModule.forRoot([StoreState, BookState], {
    //   developmentMode: !environment.production,
    // }),
    // NgxsLoggerPluginModule.forRoot(),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    EnvServiceProvider,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
