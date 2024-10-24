import {User} from "./user.js";
import {addDataObject, getObject, addArray, getArray} from "./components/storage.js";

function introduction(user){
	console.log("WIP")
	user.createTask("INTRO", "a new desc");
	user.createTask("INTwskO", "a new desc");
	user.createTask("INwRO", "a new desc");
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
