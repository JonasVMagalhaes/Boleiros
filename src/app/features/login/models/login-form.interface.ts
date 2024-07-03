import { AbstractControl } from "@angular/forms";

export interface LoginForm {
    password: AbstractControl<any, any>;
    username: AbstractControl<any, any>;
}
