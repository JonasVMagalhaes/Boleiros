import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserStoreService } from './store/user-store.service';
import { UserDtoService } from './dtos/user-dto';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    UserStoreService,
    UserDtoService
  ],
  exports: [UserService]
})
export class UserModule { }
