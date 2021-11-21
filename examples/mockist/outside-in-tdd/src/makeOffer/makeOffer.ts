type Nothing = '';
type Trader = { name: string; id: string };

export type Email = { originatingId: string };

export interface IVinylRepo {
  getVinylOwner(vinylId: string): Promise<Trader | Nothing>;
  isVinylAvailableForTrade(vinylId: string): Promise<boolean>;
}

export interface ITradesRepo {
  saveOffer(offer: any): Promise<void>;
}

export interface INotificationService {
  sendEmail(email: Email): Promise<void>;
}

export class MakeOffer {
  constructor(
    private vinylRepo: IVinylRepo,
    private tradesRepo: ITradesRepo,
    private notificationService: INotificationService,
  ) {}
  async execute(request: any) {
    const owner = await this.vinylRepo.getVinylOwner('');
    const available = await this.vinylRepo.isVinylAvailableForTrade('');

    this.tradesRepo.saveOffer({
      vinylId: '123',
      tradeType: 'money',
      amountInCents: 100 * 35,
    });

    this.notificationService.sendEmail({});
  }
}
