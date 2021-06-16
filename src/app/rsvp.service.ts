import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  url: string = environment.url;

  constructor(private http: HttpClient) {}

  getInvitation(invitationId: string): Promise<any> {
    return this.http.get(this.url + '/invitation/' + invitationId).toPromise();
  }

  setConfirmation(invitationId: string, confirm: boolean): Promise<any> {
    return this.http.post(this.url + '/invitation/' + invitationId + '?confirm=' + confirm, null).toPromise();
  }

  getInvitationsFrom(eventId: string): Promise<any> {
    return this.http.get(this.url + '/event/' + eventId).toPromise();
  }
}
