import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { RegisterParticipantComponent } from "./register-participant/register-participant.component";
import { LoginParticipantComponent } from "./login-participant/login-participant.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NewregisterComponent } from "./newregister/newregister.component";
import { ConcertInformationComponent } from "./concert-information/concert-information.component";
import { ConferenceInformationComponent } from "./conference-information/conference-information.component";
import { FestivalInformationComponent } from "./festival-information/festival-information.component";
import { ConcertReservationComponent } from "./concert-reservation/concert-reservation.component";
import { ConferenceReservationComponent } from "./conference-reservation/conference-reservation.component";
import { FestivalReservationComponent } from "./festival-reservation/festival-reservation.component";
import { MesreservationsComponent } from "./mesreservations/mesreservations.component";

const routes: Routes = [
  { path: "", component: NavbarComponent },
  { path: "register-participant", component: NewregisterComponent },
  { path: "login-participant", component: LoginParticipantComponent },
  { path: "concert-information/:id", component: ConcertInformationComponent },
  {
    path: "conference-information/:id",
    component: ConferenceInformationComponent,
  },
  { path: "festival-information/:id", component: FestivalInformationComponent },
  { path: "concert-reservation/:id", component: ConcertReservationComponent },
  {
    path: "conference-reservation/:id",
    component: ConferenceReservationComponent,
  },
  { path: "festival-reservation/:id", component: FestivalReservationComponent },
  { path: "mesreservations", component: MesreservationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
