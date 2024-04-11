import { IoArchive } from "react-icons/io5";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";
import { ITask } from "../../models/dataModel";
import { useDispatch } from "react-redux";
import { changeActiveTime, startTask, stopAllTasks, taskToArchive } from "../../toolkit/allTasksSlice";

export default function ActiveButtons(props: {data: ITask}) {
    const { data } = props
    const dispatch = useDispatch()

    return <div className="flex text-2xl">
        {data.condition === 'pause' 
            ? <FaRegPlayCircle 
                    onClick={() => {
                        dispatch(stopAllTasks())
                        dispatch(startTask(data.id))
                        dispatch(changeActiveTime(0))
                    }}
                    className="mr-2 cursor-pointer text-lime-500 hover:scale-110"
                /> 
            : <FaRegPauseCircle 
                    onClick={() => {
                        dispatch(stopAllTasks())
                        dispatch(changeActiveTime(0))
                    }}
                    className="mr-2 cursor-pointer text-orange-600 hover:scale-110"
                />
            }
        <IoArchive 
            onClick={() => dispatch(taskToArchive(data.id))}
            className="cursor-pointer text-red-600 hover:scale-110"
        />
    </div>
}