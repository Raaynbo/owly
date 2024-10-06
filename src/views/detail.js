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
	}
	createWorktable(my_task, object.task)
	my_task.classList.add("worktable")

	
	home_btn.addEventListener("click",(e)=> {
		renderApp("home");
	})	

	my_task.addEventListener("click", (e)=>{
		if(e.target.classList.contains("card")){
			renderApp("detail", e.target.itemInfo);
		}
	});
	const svg = document.querySelector("path")
	const list_el = document.querySelectorAll("li");

	info_project.addEventListener("click", (e) => {
		if (e.target != svg){
			object = {
				project: object.project,
				task: object.project
			}
		}else{
			object.project.toggleFav();
		}
		renderApp("detail", object)
		
	})
	list_el.forEach((el) => { 
	el.addEventListener("click",(e) => {
			el.itemInfo = {
				project: object.project,
				type: "task",
				task: el.itemInfo.task
			}
			renderApp("detail", el.itemInfo)
		});
	});
}


function createInfo(container, object){
	const titleinfo = document.createElement('div');
	titleinfo.classList.add("info_project")
	container.appendChild(titleinfo);
	for (const key in object){
		const infodiv = document.createElement('div');

		if (hidden_info.find((el) => {
		return el == key;
		})){
			continue ;		
		}
		switch(key){
			case "favorite":
				infodiv.classList.add("favorite_off")// SVG ICON CREATION
				const svg= document.createElementNS("http://www.w3.org/2000/svg", "svg");
				const path= document.createElementNS("http://www.w3.org/2000/svg", 'path');

				svg.setAttribute("aria-hidden","true");
				svg.setAttribute('viewbox', '0 0 24 24');
				svg.setAttribute('width', '24px');
				svg.setAttribute('height', '24px');


				path.setAttribute('d', 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z');
				path.setAttribute('fill', '#ca4569');
				if (object[key] != true){
					path.setAttribute('fill', '#2962ff');
				}
			
				svg.appendChild(path);
				infodiv.appendChild(svg);
				titleinfo.appendChild(infodiv)
				break;
			case "name":
				infodiv.textContent = object[key];
				infodiv.classList.add("project_title")
				titleinfo.appendChild(infodiv);
				break;
			default:
				infodiv.textContent = key + " : " + object[key];
				container.appendChild(infodiv);
				break;
		}
		infodiv.id = key;
	}
}

function createWorktable(container, task){
	const buttonzone = document.createElement('div');
	const editzone = document.createElement('div');
	const textarea = document.createElement('textarea');
	
	editzone.classList.add("editzone");

	container.appendChild(editzone);
	
	editzone.textContent = task.note;
	editzone.addEventListener("click", (e)=>{
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
	})
	
}

export {detailView};
