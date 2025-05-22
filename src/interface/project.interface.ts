import { Goal, ProjectStatus } from '../common/types/project.types';
import { Language, LanguageCode } from '../common/types/language.types';

export interface CreateProject {
  founderId: number;
  title: string;
  description?: string;
  technicalLabels?: string[];
  domainLabels?: string[];
  goal: Goal;
  status: ProjectStatus;
  languageCode: LanguageCode;
  milestone?: Date;
}

export interface UpdateProject {
  founderId: number;
  id: number;
  title: string;
  description: string;
  technicalLabels: string[];
  domainLabels: string[];
  status: ProjectStatus;
  languageCode: LanguageCode;
  milestone: Date;
  goal?: Goal;
}

export interface ProjectResponse {
  id: number;
  title: string;
  description?: string;
  technicalLabels?: string[];
  domainLabels?: string[];
  goal: Goal;
  status: ProjectStatus;
  language: Language;
  milestone?: Date;
  createdAt: Date;
  lastUpdatedAt: Date;
}

export interface GetProject {
  id: number;
}

export interface SearchProject {
  title?: string;
  description?: string;
  technicalLabels?: string;
  domainLabels?: string;
  status?: ProjectStatus;
  languageCode?: LanguageCode;
  goal?: Goal;
  milestoneFrom?: Date;
  milestoneTo?: Date;
  createdAtFrom?: Date;
  createdAtTo?: Date;
  lastUpdatedAtFrom?: Date;
  lastUpdatedAtTo?: Date;
  page?: number;
  limit?: number;
  sort?: string;
}

export interface SearchProjectResponse {
  projects: ProjectResponse[];
  page: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}
