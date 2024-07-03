import { FormControl } from "@angular/forms";

export interface LoginForm {
    password: FormControl<string | null>;
    username: FormControl<string | null>;
}
