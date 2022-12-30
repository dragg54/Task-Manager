import bcrypt from "bcrypt"
import { findUserByEmail } from "../db/queries"

export const hashPassword = (password: string) =>{
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(10, (err, salt)=>{
            if(err) throw err
            bcrypt.hash(password, salt, (err, hash)=>{
                password = hash
                if(!err){
                    resolve(password)
                }
                reject(err)
            })
        })
    })
}

export const unHashPassword = (existingPassword: string, loginPassword: string)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.compare(loginPassword, existingPassword, (err, isMatch)=>{
            if(!err){
                resolve(isMatch)
            }
           else{
            reject(err)
           }
        })
    })
}

export const checkUserExists = (email: string)=>{
    return new Promise((resolve, reject)=>{
        findUserByEmail(email)
        .then((result:any)=>{
            if(result.length < 1){
             resolve(result)   
            }
            else{
                reject("user already exists")
            }
        })
    })
} 