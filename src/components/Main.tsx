import Menu from "./Menu";
import Tasks from "./Tasks/Tasks";

export default function Main() {
    return <div className="mt-5 flex justify-between">
        <Tasks />
        <Menu />
    </div>
}