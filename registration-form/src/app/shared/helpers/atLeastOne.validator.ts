import {
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

export function atLeastOne(controlName: string, otherControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const otherControl = formGroup.controls[otherControlName];
    if (control.value === "" && otherControl.value === "") {
      otherControl.setErrors({ atLeastOne: true });
    } else {
      otherControl.setErrors(null);
    }
  };
}
