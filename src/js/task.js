import {chronoApp} from "../js/components/chrono.js";
import {addDataObject, getObject, addArray, getArray} from "./components/storage.js";

let taskList = getObject("taskList") ;
let lastId;
 if (taskList == ""){
	lastId = 0
	
	
 }else{
	taskList = getObject("taskList");
	taskList.length == 0? lastId = 0 : lastId = taskList.length-1;
 }
 


class Task{
	constructor (tname = "my first task", desc = "Learn about how we help you handle your task", drtn=0, cDate = "2024-09-27", isSub=false, pid=-1){
		this.name = tname;	
		this.description = desc;
		this.duration = drtn;
		this.creationDate = cDate;
		this.startWipDate;
		this.state = 0;	
		this.isSub=isSub;
		this.session = [];
		this.active = false;
		this.steps = [];
		this.note = "";
		this.id = lastId;
		this.parentId = pid;
		lastId++;
		taskList.push(this)
		addDataObject("taskList", taskList)
	}

	setDuration(minutes){
		this.duration += minutes;

	}

	closeTask(){
		if (this.steps.length != 0){
			this.steps.forEach((task) => {
				task.closeTask()
			})
		}
		this.state = 2;
	}

	createSubtask(name="my first sub task", desc = "learn more about task management with Owly", duration = 0, creationDate = new Date(), isSub= true){
		const nTask = new Task(name, desc, duration, creationDate, isSub, this.id);
		this.steps.push(nTask.id);
	}


	setNote(value){
		this.note = value;
	}


}

export {Task};
