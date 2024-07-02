import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Primitive } from "@enums/primitives/primitive.enum";
import { SignCodeErrors } from "@enums/primitives/sign-code-errors-enum";
import { PrimitiveAuthResponse } from "@models/primitives/auth/auth-response.interface";
import { PrimitiveSignInResponse } from "@models/primitives/sign-in/sign-in-response.interface";
import { ErrorRequisition } from "@models/requisitions/error-requisition";
import { Observable, of, throwError } from "rxjs";

@Injectable()
export class HttpClientMock extends HttpClient {
    override post(url: string, body: any | null, options: any): Observable<any> {
        switch(url) {
            case Primitive.AUTH: return MockPrimitives.auth(options);
            case Primitive.SIGN: return MockPrimitives.sign(body);
            default: super.post(url, body, options);
        }

        return of();        
    }
}

class MockPrimitives {
    static auth(options: any): Observable<PrimitiveAuthResponse> {
        return of({ auth: true });
    }

    static sign(body: any | null): Observable<PrimitiveSignInResponse> {
        const validUsers = [
            { username: "jonas", password: "123" },
            { username: "moises", password: "124" }
        ]

        const errorUnauthorized: ErrorRequisition<{}> = {
            status: 401,
            code: SignCodeErrors.CREEDENTIALS_NOT_MATCH,
            message: "Error nas credenciais"
        }

        if(validUsers.some((validUser: any) => validUser.username === body.username && validUser.password === body.password)){
            return of({ access_token: '123456789', expires_in: new Date().getDate() });
        } else {            
            return throwError(() => errorUnauthorized);
        }
        
    }
}