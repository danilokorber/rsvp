import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { AppComponent } from './root/app.component';
import { SaraComponent } from './sara/sara.component';

const routes: Routes = [
  { path: 'Sara', component: SaraComponent, children: [{ path: 'Confirm/:invitationId', component: ConfirmComponent }] },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
