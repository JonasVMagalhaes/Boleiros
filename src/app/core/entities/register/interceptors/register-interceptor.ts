import { Injectable } from "@angular/core";
import { Register } from "../dtos/register";

@Injectable({
    providedIn: 'root'
})
export class RegisterInterceptorsService {
    constructor() {}

    executeSuccess(response: Register): void {
        
    }
}