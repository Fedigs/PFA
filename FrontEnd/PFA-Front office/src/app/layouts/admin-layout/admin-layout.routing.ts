import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { SearchPageComponent } from "src/app/pages/search-page/search-page.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { ProfileComponent } from "src/app/pages/profile/profile.component";
import { BoardUserComponent } from "src/app/pages/board-user/board-user.component";
import { BoardModeratorComponent } from "src/app/pages/board-moderator/board-moderator.component";
import { BoardAdminComponent } from "src/app/pages/board-admin/board-admin.component";
import { DisponibilityComponent } from "src/app/pages/disponibility/disponibility.component";
import { ReservationComponent } from "src/app/pages/reservation/reservation.component";
import { DetailsPageComponent } from "src/app/pages/details-page/details-page.component";
import { AllReservationsComponent } from "src/app/pages/all-reservations/all-reservations.component";
import { AllReservationsMedecinComponent } from "src/app/pages/all-reservations-medecin/all-reservations-medecin.component";
import { MedecinGuardGuard } from "src/app/guards/medecin-guard.guard";
import { PatientGuardGuard } from "src/app/guards/patient-guard.guard";
import { MedecinAndPatientGuardGuard } from "src/app/guards/medecin-and-patient-guard.guard";

export const AdminLayoutRoutes: Routes = [
  //{ path: "dashboard", component: DashboardComponent },

  { path: "tables", component: TablesComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "user", component: BoardUserComponent },
  { path: "mod", component: BoardModeratorComponent },
  { path: "admin", component: BoardAdminComponent },
  {
    path: "",
    canActivate: [MedecinGuardGuard, PatientGuardGuard],
  },
  {
    path: "user-profile",
    component: UserProfileComponent,
    canActivate: [MedecinAndPatientGuardGuard],
  },
  {
    path: "disponibility",
    component: DisponibilityComponent,
    canActivate: [MedecinGuardGuard],
  },
  {
    path: "reservations/:id",
    component: ReservationComponent,
    canActivate: [PatientGuardGuard],
  },
  {
    path: "recherche",
    component: SearchPageComponent,
    canActivate: [PatientGuardGuard],
  },
  {
    path: "details-Medecin/:id",
    component: DetailsPageComponent,
    canActivate: [PatientGuardGuard],
  },
  {
    path: "mes-reservations",
    component: AllReservationsComponent,
    canActivate: [PatientGuardGuard],
  },
  {
    path: "rendez-vous",
    component: AllReservationsMedecinComponent,
    canActivate: [MedecinGuardGuard],
  },
];
