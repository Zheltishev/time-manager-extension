import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Task from "./Task";
import { RootState } from "../../toolkit/store";
import { useEffect } from "react";
import { loadTasks } from "../../toolkit/allTasksSlice";
import saveData from "../../Middleware/saveData";
import getData from "../../Middleware/getData";

export default function Tasks() {
    const dispatch = useDispatch()
    const allTasks = useSelector((state: RootState) => state.rootReducer.allTasksSlice.allTasks)
    const showedTasks = useSelector((state: RootState) => state.rootReducer.allTasksSlice.displayedTasks)

    useEffect(() => {
            const fetchData = async () => {
                const dataFromStorage = await getData()

                if (dataFromStorage) {
                    dispatch(loadTasks(dataFromStorage))
                }
            }
                
            fetchData()
    }, [dispatch])

    useEffect(() => {
        saveData(allTasks)
    }, [allTasks])

    return <section className="w-full mx-10">
        {allTasks.filter(e => e.status === showedTasks).map((e) => <Task data={e} key={e.id}/>)}
    </section>
}