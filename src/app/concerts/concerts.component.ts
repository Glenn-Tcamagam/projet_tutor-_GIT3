import { Component, OnInit } from "@angular/core";
import { Concert } from "../concert";
import { CONCERT } from "../concert-list";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Festival } from "../festival";

@Component({
  selector: "app-concerts",
  templateUrl: "./concerts.component.html",
  styleUrls: ["concerts.component.css"],
})
export class ConcertsComponent implements OnInit {
  concertliste: Concert[] = CONCERT;
  p: number = 1;
  filterinputsearch: Concert[] = [];
  formrecherche = new FormGroup({
    search: new FormControl(""),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterinputsearch = this.concertliste;
  }
  onKeyUp(event: KeyboardEvent) {
    this.filterInput();
  }
  filterInput() {
    console.log(this.formrecherche.get("search")?.value);
    this.filterinputsearch = this.concertliste.filter((item) =>
      item.titre
        .toLocaleLowerCase()
        .includes(this.formrecherche.get("search")?.value.toLocaleLowerCase())
    );
  }
  goToInformationConcert(concert: Concert) {
    this.router.navigate(["/concert-information", concert.id]);
  }
  goToReservationConcert(concert: Concert) {
    this.router.navigate(["/concert-reservation", concert.id]);
  }
}
