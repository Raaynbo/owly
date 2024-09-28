import {task} from "./task.js";

const project = function (pname, desc,finished, fav){
	const name= pname;
	const description= desc;
	const state= finished;
	const favorite= fav;
	const tasks = [];
	
	const createNewTask = () => {

		const name = "my first task";
		const desc = "learn more about task management with Owly";
		const duration = 0;
		const creationDate = new Date();
		const hasSubtask = false; 
		const newTask = task(name, desc, duration, creationDate, hasSubtask);
		tasks.push(newTask);
	};

	return {name, description, state, favorite, tasks};
}


export {project};

