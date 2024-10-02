import {Project} from "../js/projects.js"; 
import {createCard} from "../js/components/card.js";
import {renderApp} from "../index.js";

const hidden_info = ["steps", "active", "startWipDate", "endWipDate", "session"]

function detailView(app, object){
	const main = document.createElement('div');
	const navbar = document.createElement('nav');
	const home_btn = document.createElement("span");
	const project_container = document.createElement('div');
	const tree_container = document.createElement('div');
	const my_task = document.createElement('div');
	const info_container = document.createElement('div');
	const info_project = document.createElement('div');
	const info_task = document.createElement('div');
	console.log(object)
	


	main.classList.add("detail_main");
	info_container.classList.add("info_container");
	navbar.classList.add("navbar");
	my_task.classList.add("task_list");
	home_btn.textContent = "home"; 
	project_container.classList.add("main_container");
	project_container.classList.add("detail");
	project_container.classList.add("detail");
	info_project.classList.add("card");
	info_task.classList.add("card");
	
	tree_container.classList.add("side_container");
	tree_container.classList.add("small");
	
	navbar.appendChild(home_btn);

	app.appendChild(main);
	app.appendChild(navbar);

	
	main.appendChild(project_container);
	main.appendChild(tree_container);
	project_container.appendChild(info_container);
	project_container.appendChild(my_task);
	
	createInfo(info_project, object.project);
	info_container.appendChild(info_project);
	if ( object.project != object.task){
		createInfo(info_task, object.task);
		info_container.appendChild(info_task);
	}

	object.task.steps.forEach((task) => {
		createCard(my_task,["list"],task, "task", object.project);
	});
	
	home_btn.addEventListener("click",(e)=> {
		renderApp("home");
	})	

	//const cards = document.querySelectorAll(".card");
	//cards.forEach((card) =>{ card.addEventListener("click", (e)=>{
	//		renderApp("detail", e.target.itemInfo);
	//	});
	//});
	my_task.addEventListener("click", (e)=>{
		if(e.target.classList.contains("card")){
			renderApp("detail", e.target.itemInfo);
		}
	});
	info_project.addEventListener("click", (e) => {
		object = {
			project: object.project,
			task: object.project
		}
		console.log(object)
		renderApp("detail", object)})
}
//	addEventListener("click", (e) => {
function createInfo(container, object){
	for (const key in object){
		const infodiv = document.createElement('div');

		if (hidden_info.find((el) => {
		return el == key;
		})){
			continue ;		
		}
		infodiv.textContent = key + " : " + object[key];
		infodiv.id = key;
		container.appendChild(infodiv);
	}
}

export {detailView};
