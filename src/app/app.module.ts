import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import * as Sentry from "@sentry/angular";
import { AppComponent } from './app.component';
Sentry.init({
  dsn: "INSERT DSN HERE",
});
@NgModule({
  // ...
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
  ],
  bootstrap: [AppComponent],
  // ...
})
export class AppModule {}
