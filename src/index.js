import {introduction, startATask} from "./js/utils.js";
import {User} from "./js/user.js";

console.log("index.js")


const content = document.querySelector(".app");


const app = function (){
	const user = new User("Raaynbo");

	introduction(user);

	content.textContent = user.projects[0].steps[0].name;

	user.createNewTask(0, "My task")

	startATask(user, user.projectFocused);


	
}




app();
