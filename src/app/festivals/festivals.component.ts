import { Component, OnInit } from "@angular/core";
import { Festival } from "../festival";
import { FESTIVAL } from "../festival-list";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-festivals",
  templateUrl: "./festivals.component.html",
  styleUrls: ["festivals.component.css"],
})
export class FestivalsComponent implements OnInit {
  festivalliste: Festival[] = FESTIVAL;
  p: number = 1;
  filterinputsearch: Festival[] = [];
  formrecherche = new FormGroup({
    search: new FormControl(""),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterinputsearch = this.festivalliste;
  }
  onKeyUp(event: KeyboardEvent) {
    this.filterInput();
  }
  filterInput() {
    console.log(this.formrecherche.get("search")?.value);
    this.filterinputsearch = this.festivalliste.filter((item) =>
      item.titre
        .toLocaleLowerCase()
        .includes(this.formrecherche.get("search")?.value.toLocaleLowerCase())
    );
  }
  goToInformationFestival(festival: Festival) {
    this.router.navigate(["/festival-information", festival.id]);
  }
  goToReservationFestival(festival: Festival) {
    this.router.navigate(["/festival-reservation", festival.id]);
  }
}
