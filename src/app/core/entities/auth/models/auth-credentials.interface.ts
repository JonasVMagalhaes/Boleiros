import { AbstractControl } from "@angular/forms";

export interface AuthCredentials {
    password: AbstractControl<any, any>;
    username: AbstractControl<any, any>;
}