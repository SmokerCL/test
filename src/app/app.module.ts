import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

// Importar los componentes modales
import { AsignarTurnoModalComponent } from './modals/asignar-turno-modal/asignar-turno-modal.component';
import { EditShiftModalComponent } from './modals/edit-shift-modal/edit-shift-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignarTurnoModalComponent,
    EditShiftModalComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FullCalendarModule,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
