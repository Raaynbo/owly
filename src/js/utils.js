import {User} from "./user.js";

function introduction(user){
	user.createNewProject();
	const base_project_id = 0;
	user.setProjectFocused(0);
	user.createNewTask("MY fantastic first task");
	const target = user.projects[base_project_id].steps[0];
	target.createSubtask();
	target.createSubtask("my second subtask");
	target.createSubtask("my third subtask");
	target.createSubtask("my fourth subtask");
	target.createSubtask("my fifth subtask");
}


function startATask(user, pid){
	const target = user.projects[pid].steps[0];
	target.startTask();
	setTimeout(() => {
		target.endTask()
		console.log(target);
	},60000);
	
}

function updateTimerUI(time){
	const timer = document.querySelector(".timer");
	timer.textContent = time;
}




export {introduction, startATask, updateTimerUI };
