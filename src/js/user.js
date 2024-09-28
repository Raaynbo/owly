import {Task} from "./task.js";
import {Project} from "./projects.js";

class User{
	constructor(input_name){
		this.userName = input_name;
		this.projects = [];
		this.projectFocused = 0;
	}

	createNewProject(pname="Learn Owly", desc="Base project to introduce Owly",finished=false, fav=true)  {
		const newPjt = new Project(pname, desc, finished, fav);
		this.projects.push(newPjt);
	};

	createNewTask(id, name="my first task", desc = "learn more about task management with Owly", duration = 0, creationDate = new Date(), hasSubtask = false){
		const newTask = new Task(name, desc, duration, creationDate, hasSubtask);
		this.projects[this.projectFocused].tasks.push(newTask);
	};

	setProjectFocused(pid){
		this.projectFocused = pid;
	};
	
}


export {User};

