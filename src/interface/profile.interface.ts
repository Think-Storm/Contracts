import { LanguageCode } from '../common/types/language.types';
import { UserRole } from '../common/types/user.types';

export interface CreateProfile {
  avatar?: string;
  bio?: string;
  preferred_role?: string;
  location?: string;
  website?: string;
  domain_labels?: string[];
  languages?: LanguageCode[];
  technical_labels?: string[];
}

export interface ProfileResponse {
  id: number;
  userId: number;
  avatar?: string;
  bio?: string;
  preferred_role?: UserRole;
  location?: string;
  website?: string;
  domain_labels?: string[];
  languages?: LanguageCode[];
  technical_labels?: string[];
  createdAt: Date;
  lastUpdatedAt: Date;
}
