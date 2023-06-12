import { Component, OnInit } from "@angular/core";
import { Conference } from "../conference";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CONFERENCE } from "../Conference-list";

@Component({
  selector: "app-conference-reservation",
  templateUrl: "./conference-reservation.component.html",
  styles: [],
})
export class ConferenceReservationComponent implements OnInit {
  conference_reservation: Conference[];
  conference: Conference | undefined;

  form: FormGroup = new FormGroup({
    nom: new FormControl(""),
    prenom: new FormControl(""),
    email: new FormControl(""),
    telephone: new FormControl(""),
    naissance: new FormControl(""),
    residence: new FormControl(""),
    cni: new FormControl(""),
  });

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.conference_reservation = CONFERENCE;
    const conferenceId: string | null = this.route.snapshot.paramMap.get("id");
    if (conferenceId) {
      this.conference = this.conference_reservation.find(
        (conference) => conference.id == +conferenceId
      );
    } else {
    }

    this.form = this.formBuilder.group({
      nom: [
        "",
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
        ),
      ],
      prenom: [
        "",
        Validators.required,
        Validators.pattern(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
        ),
      ],
      // username: [
      //   "",
      //   [
      //     Validators.required,
      //     Validators.minLength(6),
      //     Validators.maxLength(20),
      //   ],
      // ],
      email: ["", [Validators.required, Validators.email]],
      telephone: ["", [Validators.required, Validators.pattern("/^6d{8}$/")]],
      naissance: ["", [Validators.required]],
      residence: ["", Validators.required],
      cni: ["", Validators.required],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
}
