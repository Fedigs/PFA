import { Component, OnInit } from "@angular/core";
import { User } from "src/app/class/user";
import { UserService } from "src/app/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AgmCoreModule } from "@agm/core";

@Component({
  selector: "app-details-page",
  templateUrl: "./details-page.component.html",
  styleUrls: ["./details-page.component.css"],
})
export class DetailsPageComponent implements OnInit {
  id: number;
  user: User;

  tabVille = {
    rades: { lat: 36.77, lng: 10.28 },
    Tunis: { lat: 36.84, lng: 10.22 },
    binzart: { lat: 37.29, lng: 9.87 },
    kef: { lat: 36.19, lng: 8.71 },
    zaghouan: { lat: 36.4, lng: 10.14 },
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params["id"];

    this.service.getMedecin(this.id).subscribe(
      (data) => {
        console.log(data);
        this.user = data;
      },
      (error) => console.log(error)
    );
  }
}
