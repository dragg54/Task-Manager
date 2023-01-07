import { con } from "../db/dbconnect"
import { User } from "../models/user"

beforeEach(() => {
    let deleteUser = () => {
        con.query(`DELETE FROM user WHERE first_name = "test"`)
    }
    deleteUser = deleteUser.bind(User)
    deleteUser()
})

test("should create user and return status code 200", async()=>{
    const request = require("supertest")
    const app = require("../app")
    const res = await request(app)
    .post("/api/v1/user/new")
    .send({
        firstName: 'test',
        lastName:'test',
        password: 'ajibola',
        email: 'test@yahoo.com'
    })
    .expect(200)
    expect(res.body.data.length).toBe(1)
})