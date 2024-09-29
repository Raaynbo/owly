import "./css/style.css";
import "./css/components.css";
import {introduction, startATask} from "./js/utils.js";
import {User} from "./js/user.js";
import {homeView} from "./views/home.js";
import {detailView} from "./views/detail.js";



const content = document.querySelector(".app");

const user = new User("Raaynbo");

const app = function (){

	introduction(user);


	user.createNewTask(0, "My task")
	
	user.createNewProject("Owly 2")

	renderApp("home");
	startATask(user, user.projectFocused);


	
}

function renderApp(page, object){
	clearApp();
	switch(page){
		case "home":
			homeView(content, user);
			break;
		case "detail":
			detailView(content, object);
			break;
	}
}


function clearApp(){
	while (content.firstChild){
		content.removeChild(content.lastChild);
	}
}

app();

export {renderApp};
