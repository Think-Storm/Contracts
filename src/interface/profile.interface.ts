import { LanguageName } from "../common/types/language.types";
import { UserRole } from "../common/types/user.types";

export interface CreateProfile {
  avatar?: string;
  bio?: string;
  preferredRole?: UserRole[];
  location?: string;
  timezone?: string;
  websiteType?: string[];
  website?: string[];
  domainLabels?: string[];
  languages?: LanguageName[];
  technicalLabels?: string[];
  fullName?: string;
  birthdate?: Date;
}

export interface UpdateProfile {
  avatar?: string;
  bio?: string;
  preferredRole?: UserRole[];
  location?: string;
  timezone?: string;
  websiteType?: string[];
  website?: string[];
  domainLabels?: string[];
  languages?: LanguageName[];
  technicalLabels?: string[];
  fullName?: string;
  birthdate?: Date;
}

export interface ProfileResponse {
  id: number;
  userId: number;
  avatar?: string;
  bio?: string;
  preferredRole?: UserRole[];
  location?: string;
  timezone?: string;
  websiteType?: string[];
  website?: string[];
  domainLabels?: string[];
  languages?: LanguageName[];
  technicalLabels?: string[];
  createdAt: Date;
  lastUpdatedAt: Date;
  fullName?: string;
  birthdate?: Date;
}
