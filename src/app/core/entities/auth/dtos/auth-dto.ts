import { PrimitiveSignInResponse } from "@models/primitives/sign-in/sign-in-response.interface";
import { AuthCredentials } from "../models/auth-credentials.interface";
import { Auth } from "../models/auth-interface";
import { PrimitiveSignInRequest } from "@models/primitives/sign-in/sign-in-request.interface";

export class AuthDto {
    static toDto(authCredentials: AuthCredentials): PrimitiveSignInRequest {
        return {
            username: authCredentials.username,
            password: authCredentials.password
        }
    }

    static fromDto(signInResponse: PrimitiveSignInResponse): Auth {
        return {
            token: signInResponse.token,
            expireTime: signInResponse.expireTime
        }
    }
}