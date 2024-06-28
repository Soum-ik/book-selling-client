export interface SignUp {
    email: string;
    username: string;
    password: string;
    number: string;
    semester: string;
    image?: string
}
export interface SignIn {
    email: string;
    password: string;
}
export interface UserResponse {

    createdAt?: string; // ISO date string
    email?: string;
    image?: string;
    isVerified?: boolean;
    number?: string;
    password?: string; // Hashed password
    role?: string;
    suspend?: boolean;
    updatedAt?: string; // ISO date string
    username?: string;
    verifyCode?: string;
    verifyCodeExpire?: string; // ISO date string
    _id?: string;

}