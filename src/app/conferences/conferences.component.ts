import { Component, OnInit } from "@angular/core";
import { CONFERENCE } from "../Conference-list";
import { Conference } from "../conference";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-conferences",
  templateUrl: "./conferences.component.html",
  styleUrls: ["conferences.component.css"],
})
export class ConferencesComponent implements OnInit {
  conferenceliste: Conference[] = CONFERENCE;
  p: number = 1;
  filterinputsearch: Conference[] = [];
  formrecherche = new FormGroup({
    search: new FormControl(""),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterinputsearch = this.conferenceliste;
  }
  onKeyUp(event: KeyboardEvent) {
    this.filterInput();
  }
  filterInput() {
    console.log(this.formrecherche.get("search")?.value);
    this.filterinputsearch = this.conferenceliste.filter((item) =>
      item.titre
        .toLocaleLowerCase()
        .includes(this.formrecherche.get("search")?.value.toLocaleLowerCase())
    );
  }
  goToInformationConference(conference: Conference) {
    this.router.navigate(["/conference-information", conference.id]);
  }
  goToReservationConference(conference: Conference) {
    this.router.navigate(["/conference-reservation", conference.id]);
  }
}
