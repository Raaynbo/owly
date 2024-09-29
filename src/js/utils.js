import {User} from "./user.js";

function introduction(user){
	user.createNewProject();
	const base_project_id = 0;
	user.setProjectFocused(0);
	user.createNewTask(base_project_id);
}


function startATask(user, pid){
	const target = user.projects[pid].tasks[0];
	target.startTask();
	setTimeout(() => {
		target.endTask()
		console.log(target);
	},60000);
	
}


export {introduction, startATask};
