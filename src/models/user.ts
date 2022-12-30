import { IUser } from "types/user";
import { con } from "../db/dbconnect";


export class User implements IUser{
    constructor(public firstName:string, public lastName:string, public email: string, public password:string){}
    createUser<T>(): Promise<T> {
        return new Promise((resolve,reject)=>{
            con.query(`INSERT INTO user(first_name, last_name, email, password)
             VALUES('${this.firstName}', '${this.lastName}', '${this.email}', '${this.password}'`, (err, rows, fields)=>{
                if(!err){
                    resolve
                }
                reject(err)
             })
        })
    }
}