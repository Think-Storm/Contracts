import { Goal, ProjectStatus } from "../common/types/project.types";
import { LanguageName } from "../common/types/language.types";
import { User } from "../common/types/user.types";

export interface CreateProject {
    founderId: number;
    title: string;
    description?: string;
    technicalLabels?: string[];
    domainLabels?: string[];
    goal: Goal;
    status: ProjectStatus;
    languageName: LanguageName;
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
    languageName: LanguageName;
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
    languageName: LanguageName;
    milestone?: Date;
    createdAt: Date;
    lastUpdatedAt: Date;
    users: User[];
    founder: User;
    joinRequest?: User[];
    savedByUsers?: User[];
}

export interface GetProject {
    id: number;
}

export interface SearchProject {
    searchQuery?: string;
    title?: string;
    description?: string;
    technicalLabels?: string;
    domainLabels?: string;
    status?: ProjectStatus;
    LanguageName?: LanguageName;
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

export interface JoinRequestResponse {
    userId: number;
    projectId: number;
    roleName: string;
    status: string;
    message?: string;
}

export interface CreateJoinRequest {
    roleName: string;
    message?: string;
}

export interface Saveproject {
    saved_by_users?: number[];
}
