import { NotificationType } from '../common/types/notification.types';

export interface CreateNotification {
  userId: number;
  type: NotificationType;
  description: string;
  link?: string;
  isRead?: boolean;
}

export interface SetNotificationRead {
  isRead: boolean;
}

export interface NotificationResponse {
  id: number;
  userId: number;
  type: NotificationType;
  description: string;
  link?: string;
  isRead: boolean;
  createdAt: Date;
  lastUpdatedAt: Date;
}
