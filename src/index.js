import {introduction} from "./js/utils.js";
import {User} from "./js/user.js";

console.log("index.js")


const content = document.querySelector(".app");


const app = function (){
	const user = User("Raaynbo");

	introduction(user);

	console.table(user.projects);

	user.projects[0].tasks[0].completionState = true;

	console.table(user.projects[0].tasks);
	
	content.textContent = user.projects[0].tasks;
}




app();
