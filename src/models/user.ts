import { con } from "../db/dbconnect";
import { createUserRequest } from "../db/queries";
import { IUser } from "../types/user";


export class User implements IUser {
    constructor(public firstName: string, public lastName: string, public email: string, public password: string) { }
    createUser() {
        return new Promise((resolve, reject) => {
            createUserRequest(this.firstName, this.lastName, this.email, this.password)
                .then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
        })
    }
}