import { Component, OnInit } from "@angular/core";
import { Festival } from "../festival";
import { ActivatedRoute, Router } from "@angular/router";
import { FESTIVAL } from "../festival-list";

@Component({
  selector: "app-festival-information",
  templateUrl: "./festival-information.component.html",
  styleUrls: ["festival-information.component.css"],
})
export class FestivalInformationComponent implements OnInit {
  festival_information: Festival[];
  festival: Festival | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.festival_information = FESTIVAL;
    const festivalId: string | null = this.route.snapshot.paramMap.get("id");
    if (festivalId) {
      this.festival = this.festival_information.find(
        (festival) => festival.id == +festivalId
      );
    } else {
    }
  }
}
