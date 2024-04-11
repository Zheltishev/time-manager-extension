import { useEffect, useRef, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "../../toolkit/modalSlice";
import { RootState } from "../../toolkit/store";
import { addTask } from "../../toolkit/allTasksSlice";

export default function AddTaskModal() {
    const dispatch = useDispatch()
    const addTaskModalState = useSelector((state: RootState) => state.rootReducer.modalSlice.modalState)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [newTaskName, setNewTaskName] = useState('')

    useEffect(() => {
        const escapeKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && dialogRef.current){
                dialogRef.current.close()
                dispatch(changeModalState(false))
                e.preventDefault()
            }
        }

        window.addEventListener('keydown', escapeKey)
        return () => window.removeEventListener('keydown', escapeKey)

    },[dispatch, newTaskName])

    useEffect(() => {
        const enterKey = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && dialogRef.current){
                dispatch(addTask(newTaskName))
                dispatch(changeModalState(false))
                dialogRef.current.close()
            }
        }

        window.addEventListener('keydown', enterKey)
        return () => window.removeEventListener('keydown', enterKey)
    },[dispatch, newTaskName])

    useEffect(() => {
        if (addTaskModalState && dialogRef.current) {
            dialogRef.current.showModal()
        } 
        if (!addTaskModalState && dialogRef.current) {
            dialogRef.current.close()
        }
    }, [addTaskModalState])

    return <dialog 
                onClick={() => dispatch(changeModalState(false))}
                ref={dialogRef} 
                className="mt-10 rounded"
            >
        <div 
            onClick={e => e.stopPropagation()}
            className="flex flex-col items-center py-3 px-6 text-sm"
        >
            <div className="flex w-full justify-end">
                <IoMdCloseCircleOutline 
                    onClick={() => dispatch(changeModalState(false))}
                    className="text-3xl text-rose-400 cursor-pointer hover:text-rose-500" 
                />
            </div>
            <h2 className="mb-3 font-bold">Add new task</h2>
            <input 
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="task name" 
                type="text" 
                className="px-3 py-1 rounded bg-zinc-300" 
            />
            <button 
                onClick={() => {
                    dispatch(addTask(newTaskName))
                    dispatch(changeModalState(false))
                }}
                className="py-2 px-4 font-bold bg-lime-500 rounded mt-5 hover:bg-lime-600"
            >
                add task
            </button>
        </div>
    </dialog>
}