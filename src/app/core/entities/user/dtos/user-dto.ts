import { Injectable } from "@angular/core";

import { UserResponse } from "@entities/user/models/user-response.interface";
import { User } from "@entities/user/models/user.interface";

@Injectable()
export class UserDtoService {
    from(user: UserResponse): User  {
        return {
            id: user.id
        }
    }
}