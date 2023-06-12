import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Concert } from "../concert";
import { CONCERT } from "../concert-list";

@Component({
  selector: "app-concert-information",
  templateUrl: "./concert-information.component.html",
  styleUrls: ["concert-information.component.css"],
})
export class ConcertInformationComponent implements OnInit {
  concert_information: Concert[];
  concert: Concert | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.concert_information = CONCERT;
    const concertId: string | null = this.route.snapshot.paramMap.get("id");
    if (concertId) {
      this.concert = this.concert_information.find(
        (concert) => concert.id == +concertId
      );
    } else {
    }
  }
}
