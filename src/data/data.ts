import { ITask } from "../models/dataModel";

export const tasksArray: ITask[] = [
    {
        id: 239857230,
        name: 'example active task 1',
        status: 'run',
        condition: 'pause',
        timeIntervals: [
            {
                timeStart: 1706215135000,
                timeEnd: 1706215145000
            },
            {
                timeStart: 1706215146000,
                timeEnd: 1706215147000
            },
            {
                timeStart: 1706215147000,
                timeEnd: 1706215148000
            },
        ]
    },
    {
        id: 239857231,
        name: 'example active task 2',
        status: 'run',
        condition: 'pause',
        timeIntervals: [
            {
                timeStart: 1706215297000,
                timeEnd: 1706215298000
            },]
    },
    {
        id: 239857232,
        name: 'example archive task 1',
        status: 'archive',
        condition: 'pause',
        timeIntervals: [
            {
                timeStart: 1706215286000,
                timeEnd: 1706215290000
            },]
    },
]