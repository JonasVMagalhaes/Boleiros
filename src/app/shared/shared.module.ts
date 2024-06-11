import { NgModule } from '@angular/core';

import { MessageModule } from '@components/message/message.module';

@NgModule({
  exports: [MessageModule]
})
export class SharedModule { }
