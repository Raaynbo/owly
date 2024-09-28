import {task} from "./task.js";
import {project} from "./projects.js";

const User = function (input_name){
	//user has
	const userName = input_name;
	const projects = [];
	let selectedProject = 0;

	const createNewProject = (pname="Learn Owly", desc="Base project to introduce Owly",finished=false, fav=true) => {
		const newPjt = project(pname, desc, finished, fav);
		projects.push(newPjt);
	};

	const createNewTask = (id, name="my first task", desc = "learn more about task management with Owly", duration = 0, creationDate = new Date(), hasSubtask = false) => {
		const newTask = task(name, desc, duration, creationDate, hasSubtask);
		projects[id].tasks.push(newTask);
	};
	
	return {userName, projects, selectedProject, createNewTask, createNewProject}
}


export {User};

