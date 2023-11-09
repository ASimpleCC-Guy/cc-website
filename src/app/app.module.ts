import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import * as Views from './views';
import * as Modules from './modules';

@NgModule({
  declarations: [
    AppComponent,
    Views.HomeComponent,
    Views.EscritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    Modules.ViewsModule,
    Modules.SharedModule,
    Modules.HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
