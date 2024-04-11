import { AiOutlineFileAdd } from "react-icons/ai";
import { FaListCheck } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { createPortal } from "react-dom";
import AddTaskModal from "./Modal/AddTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "../toolkit/modalSlice";
import { RootState } from "../toolkit/store";
import { showTasks } from "../toolkit/allTasksSlice";

export default function Menu() {
    const dispatch = useDispatch();
    const addTaskModalState = useSelector((state: RootState) => state.rootReducer.modalSlice.modalState)
    const modalPlace = document.getElementById('modal') as HTMLElement
    
    return <nav className="flex flex-col text-4xl text-zinc-400 ">
        <AiOutlineFileAdd 
            onClick={() => dispatch(changeModalState(true))}
            className="mb-7 cursor-pointer hover:text-white hover:scale-110" 
        />
        <FaListCheck 
            onClick={() => dispatch(showTasks('run'))}
            className="mb-7 cursor-pointer hover:text-white hover:scale-110" 
        />
        <BsBoxSeam 
            onClick={() => dispatch(showTasks('archive'))}
            className="cursor-pointer hover:text-white hover:scale-110"
        />

        {addTaskModalState && createPortal(
            <AddTaskModal />,
            modalPlace
        )}
    </nav>
}