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
        notificationMode: ["", [Validators.required]],
        email: "",
        phone: "",
        name: [
          "",
          [
            Validators.required,
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(8)]],
        building_no: [
          "",
          [
            Validators.required,
            Validators.maxLength(5),
            Validators.pattern("^[0-9]*$")
          ]
        ],
        street: ["", [Validators.required, Validators.maxLength(40)]],
        town: [
          "",
          [
            Validators.required,
            Validators.maxLength(58),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ]
      },
      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
    this.handleFormChanges();
  }
  handleFormChanges() {
    this.registrationForm.controls["notificationMode"].valueChanges.subscribe(
      mode => {
        if (mode === "email") {
          this.registrationForm.controls["email"].setValidators([
            Validators.required,
            Validators.email,
            Validators.pattern(
              "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            )
          ]);
          this.registrationForm.controls["phone"].clearValidators();
        } else if (mode === "mobile") {
          this.registrationForm.controls["phone"].setValidators([
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(15),
            Validators.pattern("^[0-9]*$")
          ]);
          this.registrationForm.controls["email"].clearValidators();
        } else if (mode === "both") {
          this.registrationForm.controls["email"].setValidators([
            Validators.required,
            Validators.email,
            Validators.pattern(
              "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            )
          ]);
          this.registrationForm.controls["phone"].setValidators([
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(15),
            Validators.pattern("^[0-9]*$")
          ]);
        }
        this.registrationForm.controls["email"].updateValueAndValidity();
        this.registrationForm.controls["phone"].updateValueAndValidity();
      }
    );
  }
  regf() {
    return this.registrationForm.controls;
  }
  register() {
    if (this.registrationForm.valid) {
      this.localAuthService.register(this.registrationForm.value);
    }
  }
}
