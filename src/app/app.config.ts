import { ApplicationConfig, importProvidersFrom } from '@angular/core'; // Asegurate que esta línea esté así
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Importaciones necesarias
import { FormsModule } from '@angular/forms'; 
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(), 
    // importProvidersFrom debe empezar con minúscula la 'i'
    importProvidersFrom(FormsModule) 
  ]
};
