import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ValidatorFn } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-newregister",
  templateUrl: "./newregister.component.html",
  styles: [],
})
export class NewregisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder, router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: [
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
        phone: ["", [Validators.required, Validators.pattern("^6/d{8}$")]],
        password: [
          "",
          [
            Validators.required,
            Validators.pattern("^[a-zA-Z]{8,}$"),
            // Validators.minLength(7),
            // Validators.maxLength(40),
          ],
        ],
        confirmPassword: ["", Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match("password", "confirmPassword")],
      }
    );
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

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl?.errors && !checkControl.errors["matching"]) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
