import mysql from "mysql"

const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
export const con = mysql.createConnection({
    host,
    user: "root",
    password: "Ajibolas7",
    database: "task_manager"
})



export const connectDb = async() => {
    con.connect((err)=>{
        if(!err) console.log("db connected")
    })
}