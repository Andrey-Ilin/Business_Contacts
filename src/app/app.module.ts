import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';

import { FirebaseService } from './services/firebase.service'

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCXhYAbSPSC60G92ZOY7rXbNC5FpsAclYI",
  authDomain: "businesscontacts-44295.firebaseapp.com",
  databaseURL: "https://businesscontacts-44295.firebaseio.com",
  storageBucket: "businesscontacts-44295.appspot.com",
  messagingSenderId: "546112825510"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  providers: [FirebaseService],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


