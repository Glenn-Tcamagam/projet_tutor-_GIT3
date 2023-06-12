import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";

import { RegisterParticipantComponent } from "./register-participant/register-participant.component";
import { LoginParticipantComponent } from "./login-participant/login-participant.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProfileComponent } from "./profile/profile.component";
import { BoardAdminComponent } from "./board-admin/board-admin.component";
import { NewregisterComponent } from "./newregister/newregister.component";
import { FestivalsComponent } from "./festivals/festivals.component";
import { ConferencesComponent } from "./conferences/conferences.component";
import { ConcertsComponent } from "./concerts/concerts.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ConcertInformationComponent } from "./concert-information/concert-information.component";
import { ConferenceInformationComponent } from "./conference-information/conference-information.component";
import { FestivalInformationComponent } from "./festival-information/festival-information.component";
import { FestivalReservationComponent } from "./festival-reservation/festival-reservation.component";
import { ConferenceReservationComponent } from "./conference-reservation/conference-reservation.component";
import { ConcertReservationComponent } from "./concert-reservation/concert-reservation.component";
import { FooterComponent } from "./footer/footer.component";

import { MesreservationsComponent } from "./mesreservations/mesreservations.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterParticipantComponent,
    LoginParticipantComponent,
    NavbarComponent,
    ProfileComponent,
    BoardAdminComponent,
    NewregisterComponent,
    FestivalsComponent,
    ConferencesComponent,
    ConcertsComponent,
    ConcertInformationComponent,
    ConferenceInformationComponent,
    FestivalInformationComponent,
    FestivalReservationComponent,
    ConferenceReservationComponent,
    ConcertReservationComponent,
    FooterComponent,

    MesreservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
