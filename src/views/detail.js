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
	//project_container.textContent = object.project.name;
//
//
	console.log(object);
	
	createInfo(info_container, object);
	
	switch(object.type){
		case "hasSubTask":
			object.project.steps.forEach((task) => {
				createCard(my_task,["list"],task, "task");
			});
			break;
	}	

	main.classList.add("detail_main");
	info_container.classList.add("info_container");
	navbar.classList.add("navbar");
	my_task.classList.add("task_list");
	home_btn.textContent = "home"; 
	project_container.classList.add("main_container");
	project_container.classList.add("detail");
	
	tree_container.classList.add("side_container");
	tree_container.classList.add("small");
	
	navbar.appendChild(home_btn);

	app.appendChild(main);
	app.appendChild(navbar);

	
	main.appendChild(project_container);
	main.appendChild(tree_container);
	project_container.appendChild(info_container);
	project_container.appendChild(my_task);
	
	home_btn.addEventListener("click",(e)=> {
		renderApp("home");
	})	

	project_container.addEventListener("click", (e) => {
		if (e.target.classList.contains("card")){
			renderApp("detail", e.target.itemInfo);
		}
	})
}

function createInfo(container, object){
	const project  = object.project;
	if (object.task != undefined){
		const task = object.task;
		for (const key in task){
			const infodiv = document.createElement('div');

			if (hidden_info.find((el) => {
			return el == key;
			})){
				continue ;		
			}
			infodiv.textContent = key + " : " + task[key];
			infodiv.id = key;
			container.appendChild(infodiv);
		}
	}
	for (const key in project){
		const infodiv = document.createElement('div');

		if (hidden_info.find((el) => {
		return el == key;
		})){
			continue ;		
		}
		infodiv.textContent = key + " : " + project[key];
		infodiv.id = key;
		container.appendChild(infodiv);
	}
}

export {detailView};
