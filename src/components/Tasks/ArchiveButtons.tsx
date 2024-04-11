import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteTask, taskToRun } from "../../toolkit/allTasksSlice";
import { ITask } from "../../models/dataModel";

export default function ArchiveButtons(props: {data: ITask}) {
    const {data} = props
    const dispatch = useDispatch()

    return <div className="flex text-2xl">
        <BsFillFileEarmarkArrowUpFill 
            onClick={() => dispatch(taskToRun(data.id))}
            className="text-lime-500 cursor-pointer mr-2 hover:scale-110"
        />
        <BsFillFileEarmarkExcelFill 
            onClick={() => dispatch(deleteTask(data.id))}
            className="text-red-600 cursor-pointer hover:scale-110"
        />
    </div>
}