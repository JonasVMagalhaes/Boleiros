import { Injectable } from "@angular/core";

import { SignCodeErrors } from "@enums/primitives/sign-code-errors-enum";
import { ErrorRequisition } from "@models/requisitions/error-requisition";
import { AuthStoreService } from "../store/auth-store.service";
import { Auth } from "../models/auth-interface";
import { MessageService } from "@components/message/services/message.service";

@Injectable({
    providedIn: 'root'
})
export class SignInterceptorsService {
    constructor(private readonly authStoreService: AuthStoreService,
                private readonly messageService: MessageService
    ) {}

    executeSuccess(response: Auth): void {
        this.authStoreService.save(response);
        this.messageService.toast({
            summary: "Sucesso",
            message: "Authenticado com sucesso"
        });
    }

    executeError(error: ErrorRequisition<SignCodeErrors>): void {
        this.messageService.toast({
            summary: "Erro",
            message: error.message
        });
    }
}