import mysql from "mysql"

export const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ajibolas7",
    database: "task-manager"
})



export const connectDb = () => {
    con.connect((err)=>{
        if(!err) console.log("db connected")
    })
}