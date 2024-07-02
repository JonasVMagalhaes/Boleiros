import { PrimitiveSignInResponse } from "@models/primitives/sign-in/sign-in-response.interface";
import { PrimitiveSignInRequest } from "@models/primitives/sign-in/sign-in-request.interface";
import { AuthCredentials } from "../models/auth-credentials.interface";

export class Auth {
    acessToken: string;
    expireTime: number;
    
    constructor(auth: PrimitiveSignInResponse) {
        this.acessToken = auth.access_token;
        this.expireTime = auth.expires_in;
    }

    static toDto(authCredentials: AuthCredentials): PrimitiveSignInRequest {
        return {
            username: authCredentials.username,
            password: authCredentials.password
        }
    }

    static fromDto(signInResponse: PrimitiveSignInResponse): Auth {
        return new Auth(signInResponse);
    }
}