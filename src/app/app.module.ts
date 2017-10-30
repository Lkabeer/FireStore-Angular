import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

var fireStoreConfig = {
  apiKey: "AIzaSyC91RW-azPIJNWGMakocEg73hM6W8G7gak",
  authDomain: "firestore-a8cff.firebaseapp.com",
  databaseURL: "https://firestore-a8cff.firebaseio.com",
  projectId: "firestore-a8cff",
  storageBucket: "firestore-a8cff.appspot.com",
  messagingSenderId: "93002999158"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AngularFireModule.initializeApp(fireStoreConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
