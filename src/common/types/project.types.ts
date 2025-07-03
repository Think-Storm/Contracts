import { Language } from "./language.types";
import { User } from "./user.types";

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
    technicalLabels?: string[];
    domainLabels?: string[];
    goal: Goal;
    status: ProjectStatus;
    language: Language;
    milestone?: Date;
    createdAt: Date;
    lastUpdatedAt: Date;
    users: User[];
    founder: User;
    joinRequest?: User[];
    savedByUsers?: User[];
};
