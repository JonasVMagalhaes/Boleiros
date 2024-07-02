import { PrimitiveAuthResponse } from "@models/primitives/auth/auth-response.interface";

export class Authenticated {
    auth: boolean;

    constructor(authenticated: PrimitiveAuthResponse) {
        this.auth = authenticated.auth;
    }

    static fromDto(authResponse: PrimitiveAuthResponse): Authenticated {
        return new Authenticated(authResponse);
    }
}