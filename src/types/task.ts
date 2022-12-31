import { taskStatus } from "./status"

export interface ITask{
    userId?: number
    name?:string 
    description?: string 
    status?: taskStatus 
}
