export interface UpdateUser {
    id: number;
    username: string;
    email: string;
    fullName: string;
    birthdate: Date;
}

export interface CreateUser {
    username: string;
    email: string;
    password: string;
    fullName: string;
    birthdate: Date;
}

export interface UserResponse {
    id: number;
    email: string;
    username: string;
    password: string;
    passwordChangedAt?: Date;
    fullName?: string;
    birthdate?: Date;
    createdAt: Date;
    lastUpdatedAt: Date;
}
