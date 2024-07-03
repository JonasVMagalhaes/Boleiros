import { FormControl } from "@angular/forms";

export interface RegisterForm {
    username: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
}