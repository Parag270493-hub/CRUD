import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),   // 👈 required for toastr animations
    provideToastr(),       // 👈 this registers ToastConfig + ToastrService
  ],
});
