import { Project } from "../common/types/project.types";

export interface UpdateUser {
    id: number;
    username: string;
    email: string;
}

export interface CreateUser {
    username: string;
    email: string;
    password: string;
}

export interface UserResponse {
    id: number;
    email: string;
    username: string;
    password: string;
    passwordChangedAt?: Date;
    createdAt: Date;
    lastUpdatedAt: Date;
    savedProjects?: Project[];
}
