import { PrimitiveAuthResponse } from "@models/primitives/auth/auth-response.interface";
import { Authenticated } from "../models/authenticated-interface";

export class AuthenticatedDto {
    static fromDto(authResponse: PrimitiveAuthResponse): Authenticated {
        return {
            auth: authResponse.auth
        }
    }
}