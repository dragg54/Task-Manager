export interface ITask{
    userId: number
    name:string
    description: string
    status: taskStatus
}

export type Task= Omit<ITask, "description" | "status" | "name">