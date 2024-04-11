import { AiOutlineFieldTime } from "react-icons/ai";
import timeView from "../Middleware/timeView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../toolkit/store";
import { useEffect } from "react";
import { changeActiveTime } from "../toolkit/allTasksSlice";

export default function Header() {
    const dispatch = useDispatch()
    const allTasks = useSelector((state: RootState) => state.rootReducer.allTasksSlice.allTasks)
    const timePeriods = allTasks.map(e => e.timeIntervals)
        .flat()
        .map(e => Math.floor(e.timeEnd / 1000) - Math.floor(e.timeStart/ 1000))
        .reduce((a, b) => a + b, 0)
    const activeTime = useSelector((state: RootState) => state.rootReducer.allTasksSlice.activeTime)

    useEffect(() => {
        let counterTimer: NodeJS.Timeout
        const checkActiveTask = allTasks.some(obj => obj.condition === 'play')

        if (checkActiveTask) {
            counterTimer = setInterval(() => {
                const currentTime = Math.floor(Number(new Date()) / 1000)
                const taskConditionPlay = allTasks.find(task => task.condition === 'play')
                const endTimeActiveTask = Math.floor(Number(taskConditionPlay!.timeIntervals.at(-1)!.timeEnd / 1000))
                
                dispatch(changeActiveTime(currentTime - endTimeActiveTask))
            }, 1000)
        } else {
            dispatch(changeActiveTime(0))
            clearInterval(counterTimer!)
        }

        return () => clearInterval(counterTimer)
    }, [allTasks, dispatch])
    
    return <header className="flex justify-between items-center text-white">
        <div className="flex items-center text-2xl font-bold">
            <AiOutlineFieldTime className="text-rose-500 mr-3 text-3xl" />
            Time manager
        </div>
        <div className="text-3xl">
            {timeView(timePeriods + activeTime)}
        </div>
    </header>
}