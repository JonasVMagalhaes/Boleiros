import { PrimitiveSignInResponse } from "@models/primitives/sign-in/sign-in-response.interface";
import { PrimitiveSignInRequest } from "@models/primitives/sign-in/sign-in-request.interface";
import { LoginForm } from "@features/login/models/login-form.interface";
import { FormGroup } from "@angular/forms";

export class Auth {
    acessToken: string;
    expireTime: number;
    
    constructor(auth: PrimitiveSignInResponse) {
        this.acessToken = auth.access_token;
        this.expireTime = auth.expires_in;
    }

    static toDto(authCredentials: FormGroup<LoginForm>): PrimitiveSignInRequest {
        return {
            username: authCredentials.get("username")?.value || '',
            password: authCredentials.get("password")?.value || '',
        }
    }

    static fromDto(signInResponse: PrimitiveSignInResponse): Auth {
        return new Auth(signInResponse);
    }
}