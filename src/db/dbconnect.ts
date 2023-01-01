import mysql from "mysql"
import {env} from "process"

const host = env.HOST
const user = env.USER
const password = env.PASSWORD
const database = env.DATABASE
export const con = mysql.createConnection({
    host,
    user,
    password,
    database
})



export const connectDb = async() => {
    console.log(env.PASSWORD)
    con.connect((err)=>{
        if(!err) console.log("db connected")
    })
}