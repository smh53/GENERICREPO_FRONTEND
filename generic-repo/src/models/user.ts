export interface RegisterDto {
    firstName: string,
    lastName: string,
    username:string,
    email: string,
    password: string,
    confirmPassword: string,
    roleName: string
}
export interface ResetPasswordDto {
    email:string,
    token: string,
    newPassword: string,
    confirmNewPassword: string,
    
}

export interface LoginDto {
    userName:string,
    password:string,
    success:boolean,
    message:string,
    data: AuthDataDto
    
}
export interface AuthDataDto {
    errors: string[],
    token: string,
    validTo:string
}