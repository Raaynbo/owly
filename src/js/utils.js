import {User} from "./user.js";

function introduction(user){
	user.createNewProject();
	const base_project_id = 0;
	user.setProjectFocused(0);
	console.log(user.projectFocused)
	user.createNewTask(base_project_id);
}

export {introduction};
