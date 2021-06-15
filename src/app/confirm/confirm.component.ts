import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RsvpService } from '../rsvp.service';

@Component({
  selector: 'rsvp-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {
  invitationId: string | undefined;
  invitation: any | undefined;
  hasAnswered: boolean = false;
  classYes: string = 'from-green-600 to-green-700';
  classNo: string = 'from-red-600 to-red-700';
  loading: IconDefinition = faSpinner;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private svc: RsvpService, private title: Title) {
    this.route.params.subscribe((params) => (this.invitationId = params['invitationId']));
  }

  ngOnInit(): void {
    this.svc.getInvitation(this.invitationId ?? '').then((invitation) => {
      this.invitation = invitation;
      this.hasAnswered = 'hasConfirmed' in this.invitation;
      this.title.setTitle(invitation.event);
      this.setButtonClass();
      this.isLoading = false;
    });
  }

  setButtonClass() {
    if (this.hasAnswered && this.invitation.hasConfirmed) {
      this.classYes = 'from-green-700 to-green-600';
      this.classNo = 'from-red-600 to-red-700';
    } else if (this.hasAnswered && !this.invitation.hasConfirmed) {
      this.classYes = 'from-green-600 to-green-700';
      this.classNo = 'from-red-700 to-red-600';
    } else {
      this.classYes = 'from-green-600 to-green-700';
      this.classNo = 'from-red-600 to-red-700';
    }
  }

  confirm(yesNo: boolean) {
    this.isLoading = true;
    this.hasAnswered = false;
    if (this.invitationId) {
      this.svc.setConfirmation(this.invitationId, yesNo).then((confirmation) => {
        this.invitation = confirmation;
        this.hasAnswered = true;
        this.setButtonClass();
        this.isLoading = false;
      });
    }
  }
}
