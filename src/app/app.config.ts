import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AuthService } from './core/auth/auth.service';
import { SeoService } from './core/services/seo.service';
import { LoggerService } from './core/services/logger.service';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideClientHydration(withEventReplay()),
     provideHttpClient(
      withInterceptors([AuthInterceptor, ErrorInterceptor]) // Register HTTP Interceptors
    ),
    AuthService,
    SeoService,
    LoggerService,
    AuthGuard,
    RoleGuard,
    ]
};
