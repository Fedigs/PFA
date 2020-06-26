import { Component, OnInit } from "@angular/core";
import { MedecinService } from "src/app/services/medecin.service";
import { Observable } from "rxjs";
import { Medecin } from "src/app/class/medecin";
import { Router } from "@angular/router";
import { MedecinDetailsComponent } from "../medecin-details/medecin-details.component";

@Component({
  selector: "app-medecin-list",
  templateUrl: "./medecin-list.component.html",
  styleUrls: ["./medecin-list.component.css"],
})
export class MedecinListComponent implements OnInit {
  medecins: any;

  // pagination
  totalRecords: number;
  page: number = 1;

  constructor(private medecinService: MedecinService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.medecins = this.medecinService.getMedecinsList();
  }

  deleteMedecin(id: number) {
    var res = confirm("Êtes-vous sûr de vouloir supprimer?");
    if (res) {
      this.medecinService.deleteMedecin(id).subscribe(
        (data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error)
      );
    }
  }
  medecinDetails(id: number) {
    this.router.navigate(["medecin-details", id]);
  }

  updateMedecin(id: number) {
    this.router.navigate(["medecin-update", id]);
  }
}
