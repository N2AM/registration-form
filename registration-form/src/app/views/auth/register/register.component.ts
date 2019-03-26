import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { MustMatch } from 'src/app/helpers/must-match.validator';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"]
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        email: [
          "",
          [
            Validators.email,
            Validators.required,
            Validators.pattern(
              "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            )
          ]
        ],
        firstName: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        lastName: [
          "",
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
            Validators.pattern("[a-zA-Z ]*")
          ]
        ],
        mobile: [
          "",
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(15),
            Validators.pattern("^[0-9]*$")
          ]
        ],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(8)]]
        // addressTitle: [
        //   "",
        //   [
        //     Validators.required,
        //     Validators.maxLength(40),
        //     Validators.minLength(3)
        //   ]
        // ],
        // street: ["", [Validators.required, Validators.maxLength(40)]],
        // nearestLandmark: [
        //   "",
        //   [
        //     Validators.required,
        //     Validators.maxLength(40),
        //     Validators.minLength(3)
        //   ]
        // ],
        // districts: ["", [Validators.required]]
      },
      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
  }
  regf() {
    return this.registrationForm.controls;
  }
}
