import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupName,
  AbstractControl,
} from "@angular/forms";

function passwordMatcher(
  c: AbstractControl
): { [key: string]: boolean } | null {
  const passwordControl = c.get("password");
  const password_repeatControl = c.get("password_repeat");
  if (passwordControl?.pristine || password_repeatControl?.pristine) {
    return null;
  }

  if (passwordControl?.value === password_repeatControl?.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: "app-register-participant",
  templateUrl: "./register-participant.component.html",
  styleUrls: ["register-participant.component.css"],
})
export class RegisterParticipantComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      passwordGroup: this.fb.group(
        {
          password: ["", [Validators.required, Validators.minLength(7)]],
          password_repeat: ["", [Validators.required]],
        },
        { Validators: passwordMatcher }
      ),
      agreeterms: true,
    });
  }

  public saveData() {
    console.log(this.registerForm);
  }
}
