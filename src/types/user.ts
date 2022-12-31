export interface IUser{
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string,
    createUser(): void
}

export type User = Omit<IUser, 'firstName' | 'lastName' | 'email' | 'password' >
