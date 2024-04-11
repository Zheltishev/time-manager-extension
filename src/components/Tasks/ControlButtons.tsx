import { ITask } from "../../models/dataModel";
import ActiveButtons from "./ActiveButtons";
import ArchiveButtons from "./ArchiveButtons";

export default function ControlButtons(props: {data: ITask}) {
    const { data } = props;

    return (
        <div className="mr-2">
            {data.status === 'archive' 
                ? <ArchiveButtons data={data} /> 
                : <ActiveButtons data={data} />}
        </div>
    )
}