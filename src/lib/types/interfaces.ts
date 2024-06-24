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