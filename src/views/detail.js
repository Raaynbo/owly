import {Project} from "../js/projects.js"; 
import {createCard} from "../js/components/card.js";
import {renderApp} from "../index.js";

const hidden_info = ["steps", "active", "startWipDate", "endWipDate", "session", "note"]

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
	

	console.log(object.task)

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

	if (object.task.steps.length != 0){
		object.task.steps.forEach((task) => {
			createCard(my_task,["list"],task, "task", object.project);
		});
	}else{
		my_task.textContent = "we are here to work";
		createWorktable(my_task, object.task)
		my_task.classList.add("worktable")

	}
	
	home_btn.addEventListener("click",(e)=> {
		renderApp("home");
	})	

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

function createWorktable(container, task){
	const buttonzone = document.createElement('div');
	const editzone = document.createElement('div');
	const textarea = document.createElement('textarea');
	
	editzone.classList.add("editzone");

	console.log(task)
	container.appendChild(editzone);
	
	editzone.textContent = task.note;
	editzone.addEventListener("click", (e)=>{
		console.log("click edit")
		container.replaceChild(textarea, editzone);
		textarea.classList.toggle("editzone");
		editzone.classList.toggle("hidden");
		textarea.value = task.note;
	})
	
	textarea.addEventListener("mouseout", (e)=> {
		container.replaceChild(editzone, textarea);
		textarea.classList.toggle("editzone");
		editzone.textContent = textarea.value;
		task.setNote(textarea.value);
		console.log(task)
	})
	
}

export {detailView};
