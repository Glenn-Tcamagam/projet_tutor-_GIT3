import { Component, OnInit } from "@angular/core";
import { Festival } from "../festival";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FESTIVAL } from "../festival-list";

@Component({
  selector: "app-festival-reservation",
  templateUrl: "./festival-reservation.component.html",
  styles: [],
})
export class FestivalReservationComponent implements OnInit {
  festival_reservation: Festival[];
  festival: Festival | undefined;

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
    this.festival_reservation = FESTIVAL;
    const festivalId: string | null = this.route.snapshot.paramMap.get("id");
    if (festivalId) {
      this.festival = this.festival_reservation.find(
        (festival) => festival.id == +festivalId
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
      telephone: ["", [Validators.required, Validators.pattern("")]],
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
