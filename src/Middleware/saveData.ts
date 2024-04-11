import { ITask } from "../models/dataModel";

export default function saveData(data: ITask[]) {    
    chrome.storage.sync.set({'data' : data})
}