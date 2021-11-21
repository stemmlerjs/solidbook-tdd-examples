import { Email, INotificationService } from './makeOffer';

export class NotificationsSpy implements INotificationService {
  private emailsSent: Email[];

  constructor() {
    this.emailsSent = [];
  }

  public async sendEmail(email: Email): Promise<void> {
    this.emailsSent.push(email);
  }

  getEmailsSent() {
    return this.emailsSent;
  }

  emailWasSentFor () {
    if (this.getEmailsSent().length === 0) throw new Error('No emails sent');
    if (this.getEmailsSent().length > 1) throw new Error("More than one email sent");
    return this.getEmailsSent()[0].originatingId;
  }

  async hello() {}
}
