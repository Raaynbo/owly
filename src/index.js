import "./css/style.css";
import "./css/components.css";
import {introduction, startATask} from "./js/utils.js";
import {User} from "./js/user.js";
import {homeView} from "./views/home.js";



const content = document.querySelector(".app");


const app = function (){
	const user = new User("Raaynbo");

	introduction(user);


	user.createNewTask(0, "My task")
	
	user.createNewProject("Owly 2")

	homeView(content, user);
	startATask(user, user.projectFocused);


	
}

function renderApp(){
	homeView(content);
}




app();
