import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RsvpService } from '../rsvp.service';

@Component({
  selector: 'rsvp-show-confirmations',
  templateUrl: './show-confirmations.component.html',
  styleUrls: ['./show-confirmations.component.scss'],
})
export class ShowConfirmationsComponent implements OnInit {
  invitations: any[] = [];
  constructor(private _svc: RsvpService, private _router: Router) {}

  ngOnInit(): void {
    let eventId: string = this._router.url.split('/')[1];

    this._svc.getInvitationsFrom(eventId).then((invitations) => {
      this.invitations = invitations;
      console.log(this.invitations);
    });
  }
}
