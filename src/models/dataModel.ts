export interface ITimeInterval {
    timeStart: number,
    timeEnd: number,
}

export interface ITask {
    id: number,
    name: string,
    status: string,
    condition: string,
    timeIntervals: ITimeInterval[]
}