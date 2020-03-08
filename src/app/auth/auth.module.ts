import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
   declarations: [],
   imports: [
      AuthRoutingModule,
      SharedModule
   ],
   exports: [AuthRoutingModule],
   providers: []
})
export class AuthModule { }