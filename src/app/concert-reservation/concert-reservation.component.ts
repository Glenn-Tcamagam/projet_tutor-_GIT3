import { Component, OnInit } from "@angular/core";
import { Concert } from "../concert";
import { ActivatedRoute, Router } from "@angular/router";
import { CONCERT } from "../concert-list";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-concert-reservation",
  templateUrl: "./concert-reservation.component.html",
  styles: [],
})
export class ConcertReservationComponent implements OnInit {
  concert_reservation: Concert[];
  concert: Concert | undefined;

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

  ngOnInit() {
    this.concert_reservation = CONCERT;
    const concertId: string | null = this.route.snapshot.paramMap.get("id");
    if (concertId) {
      this.concert = this.concert_reservation.find(
        (concert) => concert.id == +concertId
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

// export default class Validation {
//   static match(controlName: string, checkControlName: string): ValidatorFn {
//     return (controls: AbstractControl) => {
//       const control = controls.get(controlName);
//       const checkControl = controls.get(checkControlName);

//       if (checkControl?.errors && !checkControl.errors["matching"]) {
//         return null;
//       }

//       if (control?.value !== checkControl?.value) {
//         controls.get(checkControlName)?.setErrors({ matching: true });
//         return { matching: true };
//       } else {
//         return null;
//       }
//     };
//   }
// }
