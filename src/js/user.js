import {Task} from "./task.js";
import {Project} from "./projects.js";

class User{
	constructor(input_name){
		this.userName = input_name;
		this.projects = [];
		this.projectFocused = 0;
	}

	createNewProject(pname="Learn Owly", desc="Base project to introduce Owly",note="",finished=0, fav=false)  {
		const newPjt = new Project(pname, desc,note, finished, fav);
		this.projects.push(newPjt);
	};

	createNewTask( name="my first task", desc = "learn more about task management with Owly", duration = 0, creationDate = new Date()){
		const newTask = new Task(name, desc, duration, creationDate);
		this.projects[this.projectFocused].addSteps(newTask);
	};

	setProjectFocused(pid){
		this.projectFocused = pid;
	};
	
}


export {User};

