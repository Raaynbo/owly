import {Project} from "../js/projects.js"; 
import {createCard} from "../js/components/card.js";

function detailView(app, object){
	const main = document.createElement('div');
	const navbar = document.createElement('nav');
	const project_container = document.createElement('div');
	const tree_container = document.createElement('div');
	const stat_section = document.createElement('div');
	const my_task = document.createElement('div');
	//project_container.textContent = object.project.name;
	switch(object.type){
		case "project":
			object.project.steps.forEach((task) => {
				createCard(my_task,["list"],task, "task");
			});
			break;
	}	

	main.classList.add("detail_main");
	navbar.classList.add("navbar");
	my_task.classList.add("task_list");
	stat_section.classList.add("stats");
	stat_section.textContent = "stats section"; 
	app.appendChild(main);
	app.appendChild(navbar);

	project_container.classList.add("main_container");
	project_container.classList.add("detail");
	
	tree_container.classList.add("side_container");
	tree_container.classList.add("small");
	
	main.appendChild(project_container);
	main.appendChild(tree_container);
	project_container.appendChild(stat_section);
	project_container.appendChild(my_task);
	
}

export {detailView};
