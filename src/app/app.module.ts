import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularDelegate, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Drivers } from "@ionic/storage";
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {  AngularFireAuthModule, PERSISTENCE } from "@angular/fire/compat/auth";

//env
import { environment } from 'src/environments/environment';

// services
import { AuthenticationService } from './services/authentication.service';

// guards
import { TokenService } from './services/token.service';
import { AuthorizeGuard, NegateAuthorizeGuard } from './guards/authorize.guard';
import { SwapGuard } from './guards/swap.guard';
import { UniversalAppInterceptor } from './UniversalAppInterceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GraphQLModule } from './graphql.module';

/* COMPONENTS */
import { ComponentsModule } from "./components/components.module";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      name: "AlcanciaLocalStorage",
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    GraphQLModule
  ],
  providers: [
    AuthenticationService,
    TokenService,
    AuthorizeGuard,
    NegateAuthorizeGuard,
    SwapGuard,
    { provide: HTTP_INTERCEPTORS, useClass: UniversalAppInterceptor, multi: true,  }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
