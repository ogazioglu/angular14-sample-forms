import { FormControl, FormGroup } from '@angular/forms';
import { IStringKeyDictionary } from './istring-key-dictionary';
import { String } from 'typescript-string-operations';

export class ValidatableFormGroup {
  private formSubmitAttempt: boolean;
  form: FormGroup;
  constructor(form: FormGroup) {
    this.form = form;
  }

  public onSubmit(): void {
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public displayFieldCss(field: string) {
    return {
      'is-invalid': this.isFieldValid(field),
      'is-valid': this.isFieldValid(field),
    };
  }

  public isFieldValid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  public reset() {
    this.form.reset();
    this.formSubmitAttempt = false;
  }

  public getInvalidMessage(
    field: string,
    messages?: IStringKeyDictionary<string>
  ) {
    var errors = this.form.get(field).errors;
    if (!errors) return null;
    var keys = Object.keys(errors);
    if (!keys || keys.length == 0) return null;
    var key = keys[0];
    var value = errors[key];
    if (!messages || !messages[key]) return `${key} (${value.value})`;
    return String.format(messages[key], value);
  }
}
