export enum Status{
    todo,
    doing,
    done
}

export type taskStatus = typeof Status[keyof typeof Status]