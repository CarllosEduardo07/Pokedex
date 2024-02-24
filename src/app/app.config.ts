import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withHashLocation()), provideAnimationsAsync(), provideAnimationsAsync()], // withHashLocation() :  colocando # na URL e quando voce coloca uma url nao configurada, ele redireciona pra a home.
    //se voce tirar a hash, quando voce colocar alguma url diferente das configuradas, 
    //vai sumir a pagina (home ou qualquer outra da tela).
};
