import { ValidatorFn } from "@angular/forms";

import { ConfirmPasswordValidator } from "./confirm-password/confirm-password-validator";
import { PasswordValidator } from "./password/password-validator";

export class FormValidator {
    public static confirmPasswordValidator(password: string): ValidatorFn {
        return ConfirmPasswordValidator.get(password);
    }

    public static passwordStrongValidator: ValidatorFn = PasswordValidator.strong();
}