import bcrypt from "bcrypt"

export const hashPassword = (password: string) =>{
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(10, (err, salt)=>{
            if(err) throw err
            bcrypt.hash(password, salt, (err, hash)=>{
                password = hash
                if(!err){
                    resolve(password)
                }
            })
        })
    })
}