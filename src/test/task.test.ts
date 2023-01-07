const request = require("supertest")
const app = require("../app")

test("should create task and return status code 201", async()=>{
    await request(app)
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