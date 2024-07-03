import { FormGroup } from "@angular/forms";
import { RegisterForm } from "@features/register/models/register-form.interface";
import { PrimitiveRegisterRequest } from "@models/primitives/register/register-request-interface";
import { PrimitiveRegisterResponse } from "@models/primitives/register/register-response.interface";

export class Register {
    static toDto(form: FormGroup<RegisterForm>): PrimitiveRegisterRequest {
        return {
            username: form.get("username")?.value || '',
            password: form.get("password")?.value || '',
            email: form.get("emsil")?.value || '',
        }
    }

    static fromDto(response: PrimitiveRegisterResponse): Register {
        return new Register();
    }
}
