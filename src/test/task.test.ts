import { con } from "../db/dbconnect"
import { Task } from "../models/task"

const request = require("supertest")
const app = require("../app")


beforeEach(() => {
    let deleteTask = () => {
        con.query(`DELETE FROM task WHERE name = "test"`)
    }
    deleteTask = deleteTask.bind(Task)
    deleteTask()
})

test("should create task and return status code 201", async()=>{
    const res = await request(app)
    .post("/api/v1/task/new")
    .set({
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY3MzA4MDQwM30.sjciJg_R5-rXs5_Hubcd8J2t_8TS7EofwKO1tvyNBkQ"
    })
    .send({
        name: "test",
        description: "test",
        status:"todo"
    })
    .expect(200)
})

test("should return all tasks with status code 200", async()=>{
    const res = await request(app)
    .get("/api/v1/tasks")
    .set({
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY3MzA4MDQwM30.sjciJg_R5-rXs5_Hubcd8J2t_8TS7EofwKO1tvyNBkQ"
        })
    .expect(200)
    expect(res.body.data.length).toBe(1)
})
