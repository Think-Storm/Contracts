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
  password: string;
  passwordResetToken: string;
}

export interface UpdatePassword {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPassword {
  email: string;
}
