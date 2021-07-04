import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { AppComponent } from './root/app.component';
import { SaraComponent } from './sara/sara.component';
import { ShowConfirmationsComponent } from './show-confirmations/show-confirmations.component';

const routes: Routes = [
  {
    path: ':event',
    component: SaraComponent,
    children: [{ path: 'Confirm/:invitationId', component: ConfirmComponent, pathMatch: 'full' }],
  },
  { path: 'ShowConfirmations', component: ShowConfirmationsComponent, pathMatch: 'full' },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
