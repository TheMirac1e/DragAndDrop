import { IValidation } from "./types";

export function validate(validateInput: IValidation) {
  let isValid = true;

  if (validateInput.required) {
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }

  if (validateInput.minLength !== undefined && typeof validateInput.value === 'string') {
    isValid = isValid && validateInput.value.length >= validateInput.minLength;
  }

  if (validateInput.maxLength !== undefined && typeof validateInput.value === 'string') {
    isValid = isValid && validateInput.value.length <= validateInput.maxLength;
  }

  if (validateInput.min !== undefined && typeof validateInput.value === 'number') {
    isValid = isValid && validateInput.value >= validateInput.min;
  }

  if (validateInput.max !== undefined && typeof validateInput.value === 'number') {
    isValid = isValid && validateInput.value <= validateInput.max;
  }

  return isValid;
}
