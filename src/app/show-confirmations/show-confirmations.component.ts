import { Component, OnInit } from '@angular/core';
import { RsvpService } from '../rsvp.service';

@Component({
  selector: 'rsvp-show-confirmations',
  templateUrl: './show-confirmations.component.html',
  styleUrls: ['./show-confirmations.component.scss'],
})
export class ShowConfirmationsComponent implements OnInit {
  invitations: any[] = [];
  constructor(private _svc: RsvpService) {}

  ngOnInit(): void {
    this._svc.getInvitationsFrom('Sara').then((invitations) => {
      this.invitations = invitations;
      console.log(this.invitations);
    });
  }
}
