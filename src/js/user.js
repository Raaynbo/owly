import {Task} from "./task.js";
import {Project} from "./projects.js";
import {getObject, addDataObject} from "./components/storage.js";

class User{
	constructor(input_name){
		this.userName = input_name;
		this.tasks = [];
		this.focus = false;
		this.focusId = 0;
		this.page = "home";
	}

	createTask(name, desc){
		const task = new Task(name, desc);
		this.tasks.push(task);
	}

	loadTask(){
		let tl = getObject('taskList');		
		for (let i = 0 ; i <= tl.length-1; i++){
			this.tasks.push(tl[i]);
		}
		console.log(this.tasks);
	}

	save(){
		addDataObject('taskList', this.tasks)
	}
	
}


export {User};

