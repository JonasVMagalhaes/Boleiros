import { passwordValidator } from "./password-validator/password-validator";

export class CustomValidators {
    static passwordValidator = passwordValidator();
}