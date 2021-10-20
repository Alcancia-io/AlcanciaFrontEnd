import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularDelegate, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {  AngularFireAuthModule } from "@angular/fire/compat/auth";

//env
import { environment } from 'src/environments/environment';

// services
import { AuthenticationService } from './services/authentication.service';

// guards
import { AuthGuard } from './guards/auth.guard';
import { TokenService } from './services/token.service';
import { AuthorizeGuard, NegateAuthorizeGuard } from './guards/authorize.guard';
import { UniversalAppInterceptor } from './UniversalAppInterceptor';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot({
      name: "AlcanciaLocalStorage"
    })
  ],
  providers: [
    AuthenticationService,
    TokenService,
    AuthGuard,
    AuthorizeGuard,
    NegateAuthorizeGuard,
    { provide: HTTP_INTERCEPTORS, useClass: UniversalAppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
