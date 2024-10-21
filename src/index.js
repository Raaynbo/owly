import "./css/style.css";
import "./css/components.css";
import {introduction, startATask} from "./js/utils.js";
import {User} from "./js/user.js";
import {homeView} from "./views/home.js";
import {detailView} from "./views/detail.js";
import {actionView} from "./views/action_button.js";
import {localStore} from "./js/components/storage.js";



const content = document.querySelector(".app");
const action_btn = document.querySelector(".action_button");
const appInfo = {
	page:"home",
	project:"",
	task: ""
}

const user = new User("Raaynbo");


action_btn.addEventListener("click", (e) => {
		console.log("over")
		actionView(user);	
		appInfo.page = "form";
	})

const app = function (){
	localStore();

	introduction(user);


	user.createNewTask( "My task")
	
	user.createNewProject("Owly 2")

	renderApp("home");
	startATask(user, user.projectFocused);


	
}

function renderApp(page, object){
	clearApp();
	
	switch(page){
		case "home":
			homeView(content, user);
			appInfo.page = "home";
			break;
		case "detail":
			detailView(content, object);
			appInfo.page = "detail";
			appInfo.project = object.project;
			appInfo.task = object.task;
			break;
	}
	console.log(appInfo)
}


function clearApp(){
	while (content.firstChild){
		content.removeChild(content.lastChild);
	}
}

app();

export {renderApp};
