import { Component, OnInit } from "@angular/core";
import { Conference } from "../conference";
import { ActivatedRoute, Router } from "@angular/router";
import { CONFERENCE } from "../Conference-list";

@Component({
  selector: "app-conference-information",
  templateUrl: "./conference-information.component.html",
  styleUrls: ["conference-information.component.css"],
})
export class ConferenceInformationComponent implements OnInit {
  conference_information: Conference[];
  conference: Conference | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.conference_information = CONFERENCE;
    const conferenceId: string | null = this.route.snapshot.paramMap.get("id");
    if (conferenceId) {
      this.conference = this.conference_information.find(
        (conference) => conference.id == +conferenceId
      );
    } else {
    }
  }
}
