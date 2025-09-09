import { LanguageName } from "./language.types";

export enum ProjectStatus {
  Complete = "Complete",
  InProgress = "InProgress",
  OnHold = "OnHold",
  Canceled = "Canceled",
}

export enum Goal {
  Education = "Education",
  Profitable = "Profitable",
  Fun = "Fun",
  OpenSource = "OpenSource",
}

export enum JoinRequestStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}

export type Project = {
  id: number;
  founderId: number;
  title: string;
  description?: string;
  goal: Goal;
  status: ProjectStatus;
  languageName: LanguageName;
  milestone?: Date;
  createdAt: Date;
  lastUpdatedAt: Date;
};

export type Involvement = {
  userId: number;
  projectId: number;
  roleName: string;
};

export type JoinRequest = {
  userId: number;
  projectId: number;
  roleName: string;
  status: ProjectStatus;
  message?: string | null;
};

export type Like = {
  userId: number;
  projectId: number;
};

export type ProjectDomainLabel = {
  projectId: number;
  labelName: string;
};

export type ProjectTechnicalLabel = {
  projectId: number;
  labelName: string;
};
