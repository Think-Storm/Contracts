export interface LoginUser {
    email: string;
    password: string;
}

export interface RegisterUser {
    username: string;
    email: string;
    password: string;
}

export interface UpdatePassword {
    email: string;
    password: string;
    passwordResetToken: string;
}

export interface ForgotPassword {
    email: string;
}
