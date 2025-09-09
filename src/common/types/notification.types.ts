export enum NotificationType {
  JoinRequest = "JoinRequest",
  AcceptJoinRequest = "AcceptJoinRequest",
  InviteToProject = "InviteToProject",
  Welcome = "Welcome",
}

export type Notification = {
  id: number;
  userId: number;
  type: string;
  description: string;
  link?: string | null;
  isRead: boolean;
  createdAt: Date;
  lastUpdatedAt: Date;
};
