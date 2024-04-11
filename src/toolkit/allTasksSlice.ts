import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../models/dataModel";

interface ITaskArray {
    allTasks: ITask[]
    displayedTasks: string
    activeTime: number
}

const initialState: ITaskArray = {
    allTasks: [],
    displayedTasks: 'run',
    activeTime: 0
}

const allTasksSlice = createSlice({
    name: 'allTasksSlice',
    initialState,
    reducers: {
        loadTasks: (state, action) => void(state.allTasks = action.payload),
        showTasks: (state, action) => void(state.displayedTasks = action.payload),
        changeActiveTime: (state, action) => void(state.activeTime = action.payload),
        taskToArchive: (state, action) => void(state.allTasks.map(e => {
            if (e.id === action.payload) {
                e.status = 'archive'
                e.condition = 'pause'
            }

            return e
        })),
        taskToRun: (state, action) => void(state.allTasks.map(e => {
            if (e.id === action.payload) {
                e.status = 'run'
            }

            return e
        })),
        deleteTask: (state, action) => void(state.allTasks = state.allTasks.filter(e => e.id !== action.payload)),
        addTask: (state, action) => {
            const newTask: ITask = {
                id: Number(new Date()),
                name: String(action.payload),
                status: 'run',
                condition: 'pause',
                timeIntervals: [
                    {
                        timeStart: Number(new Date()),
                        timeEnd: Number(new Date())
                    }]
            }

            state.allTasks.push(newTask)
        },
        stopAllTasks: (state) => void(state.allTasks.map(e => {
            if (e.condition === 'play') {
                e.timeIntervals.at(-1)!.timeEnd = Number(new Date())
            }
            
            e.condition = 'pause'

            return e
        })),
        startTask: (state, action) => void(state.allTasks = state.allTasks.filter(e => {
            if (e.id === action.payload) {
                e.condition = 'play'
                e.timeIntervals.push({
                    timeStart: Number(new Date()),
                    timeEnd: Number(new Date())
                })
            }
            
            return e
        })),
        changeTaskTimeEnd: (state, action) => void(state.allTasks = state.allTasks.filter(e => {
            if (e.id === action.payload) {
                e.timeIntervals.at(-1)!.timeEnd = Number(new Date())
            }

            return e
        })),
    }
})

export const {  loadTasks, 
                showTasks,
                taskToArchive, 
                taskToRun, 
                deleteTask,
                addTask,
                stopAllTasks,
                startTask,
                changeTaskTimeEnd,
                changeActiveTime,
            } = allTasksSlice.actions
export default allTasksSlice.reducer