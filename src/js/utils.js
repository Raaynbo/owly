import {User} from "./user.js";

function introduction(user){
	user.createNewProject();
	const base_project_id = 0;
	user.setProjectFocused(0);
	user.createNewTask(base_project_id);
}


function startATask(user, pid){
	const target = user.projects[pid].steps[0];
	target.startTask();
	target.createSubtask();
	console.log(target);
	setTimeout(() => {
		target.endTask()
		console.log(target);
	},60000);
	
}


export {introduction, startATask};
