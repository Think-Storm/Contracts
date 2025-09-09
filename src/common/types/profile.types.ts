export type UserProfile = {
  id: number;
  userId: number;
  avatar?: string | null;
  bio?: string | null;
  fullName?: string | null;
  birthdate?: Date | null;
  preferredRole?: string[];
  location?: string | null;
  timezone?: string | null;
  website?: string[];
  websiteType?: string[];
  interests?: string[];
  skills?: string[];
  createdAt: Date;
  lastUpdatedAt: Date;
};
