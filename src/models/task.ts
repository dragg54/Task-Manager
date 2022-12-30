class Task implements ITask{
    public user_id: number
    public  createAt: Date 
    constructor(public name: string, public description:string, public status:taskStatus){
        this.createAt = new Date()
    }
    createTask(){
        
    }
}