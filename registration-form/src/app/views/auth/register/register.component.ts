import { atLeastOne } from "./../../../shared/helpers/atLeastOne.validator";
import { LocalAuthService } from "./../../../shared/services/local-auth.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { MustMatch } from "../../../shared/helpers/must-match.validator";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private localAuthService: LocalAuthService
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        email: [
          "",
          [
            Validators.pattern(
              "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            )
          ]
        ],
        phone: [
          "",
          [
            Validators.minLength(11),
            Validators.maxLength(15),
            Validators.pattern("^[0-9]*$")
          ]
        ],
        name: [
          "",
          [
            Validators.required,
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", [Validators.required]],
        building_no: ["", [Validators.required]],
        street: ["", [Validators.required]],
        town: ["", [Validators.required]]
      },
      {
        validators: [
          MustMatch("password", "confirmPassword"),
          atLeastOne(Validators.required, ["email", "phone"])
        ]
      }
    );
  }

  regf() {
    return this.registrationForm.controls;
  }
  register() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.localAuthService.register(this.registrationForm.value);
    } else {
      return;
    }
  }
}
