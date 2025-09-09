export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface ForgotUpdatePassword {
  email: string;
  password: string;
  passwordResetToken: string;
}

export interface UpdatePassword {
  password: string;
}

export interface ForgotPassword {
  email: string;
}
