import timeView from "../../Middleware/timeView";
import { FaRegFileCode } from "react-icons/fa";
import { ITask } from "../../models/dataModel";
import ControlButtons from "./ControlButtons";
import { useSelector } from "react-redux";
import { RootState } from "../../toolkit/store";

export default function Task(props: {data: ITask}) {
    const { data } = props
    const taskTime = [...data.timeIntervals]
        .map(e => Math.floor(e.timeEnd / 1000) - Math.floor(e.timeStart/ 1000))
        .reduce((a, b) => a + b)
    const activeTime = useSelector((state: RootState) => state.rootReducer.allTasksSlice.activeTime)

    return (
        <div className={(data.status === 'archive' ? 'opacity-40' : '') + " flex justify-between w-full text-white text-xl mt-1 p-2 rounded hover:bg-zinc-700"}>
            <div className="flex items-center">
                <FaRegFileCode className="mr-2 text-rose-600"/>
                {data.name}
            </div>
            <div className="flex items-center">
                <ControlButtons data={data} />
                <div className="text-2xl">
                    {timeView(data.condition === 'play' ? taskTime + activeTime : taskTime)}
                </div>
            </div>
        </div>
    )
}