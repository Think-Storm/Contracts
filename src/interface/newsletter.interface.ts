export interface CreateNewsletterSubscription {
  email: string;
}

export interface NewsletterSubscriptionResponse {
  id: number;
  email: string;
  createdAt: Date;
  lastUpdatedAt: Date;
}
