import {createCard} from "../js/components/card.js";
import {renderApp} from "../index.js";
import {chronoApp} from "../js/components/chrono.js";

const hidden_info = ["steps","id",  "active", "startWipDate", "endWipDate", "session", "note", "parentId", "isSub"]

function detailView(app, user){
	const main = document.createElement('div');
	const navbar = document.createElement('nav');
	const home_btn = document.createElement("span");
	const project_container = document.createElement('div');
	const tree_container = document.createElement('div');
	const my_task = document.createElement('div');
	const my_taskbox = document.createElement('div');
	const worktable = document.createElement('div');
	const info_container = document.createElement('div');
	const info_project = document.createElement('div');
	const info_task = document.createElement('div');
	const info_start = document.createElement('div');
	const info_stop = document.createElement('div');
	const info_playlist = document.createElement('div');
	const info_session = document.createElement('div');
	const info_playlist_row = document.createElement('div');
	
	


	main.classList.add("detail_main");
	info_container.classList.add("info_container");
	navbar.classList.add("navbar");
	my_taskbox.classList.add("task_list");
	my_task.classList.add("taskzone");
	home_btn.textContent = "home"; 
	project_container.classList.add("main_container");
	project_container.classList.add("detail");
	project_container.classList.add("detail");
	info_project.classList.add("card");
	info_task.classList.add("card");
	info_playlist.classList.add("playlist_card");
	info_session.classList.add("playlist_card");
	info_session.classList.add("timer")
	info_playlist_row.classList.add("row");
	
	tree_container.classList.add("side_container");
	tree_container.classList.add("small");
	
	navbar.appendChild(home_btn);

	app.appendChild(main);
	app.appendChild(navbar);

	
	main.appendChild(project_container);
	project_container.appendChild(info_container);
	project_container.appendChild(my_taskbox);
	my_taskbox.appendChild(my_task);
	my_taskbox.appendChild(worktable);
	
	createInfo(info_project, user);
	info_container.appendChild(info_project);


	info_start.textContent = "Start";
	info_stop.textContent = "Stop";
	info_session.textContent = "Delete";
	info_playlist.appendChild(info_start);
	info_playlist.appendChild(info_stop);
	info_playlist_row.appendChild(info_playlist);
	info_playlist_row.appendChild(info_session);
	info_container.appendChild(info_playlist_row);

	createWorktable(worktable, user)
	worktable.classList.add("worktable")

	
	home_btn.addEventListener("click",(e)=> {
		user.focus = false;
		user.page = "home";
		user.focusId= -1;
		renderApp(user);
	})	

	const svg = document.querySelector("path")
	const list_el = document.querySelectorAll("li");

	info_start.addEventListener("click", (e) => chronoApp.start());
	info_stop.addEventListener("click", (e) => {
		let  minutes = chronoApp.stop()
		console.log(minutes)
		let target = user.tasks.findIndex((task) => {return task.id==user.focusId});
		user.tasks[target].duration += minutes
		user.save()
		renderApp(user)
	});
	info_session.addEventListener("click", (e) => {
		let target = user.tasks.findIndex((task) => {return task.id==user.focusId});
		console.log(target)
		console.log(user.tasks)
		user.tasks.splice(target, 1);
		//if (user.tasks = null){
		//	console.log("warning")
		//	user.tasks = [];
		//}
		user.page="home";
		user.focus = false;
		user.focusId = -1;
		user.save();
		console.log(user.tasks)
		renderApp(user);
	});
}


function createInfo(container, user){
	const titleinfo = document.createElement('div');
	const actioninfo = document.createElement('div');
	titleinfo.classList.add("info_project");
	actioninfo.classList.add("info_action");
	container.appendChild(titleinfo);
	let target = user.tasks.findIndex((task) => {return task.id==user.focusId});
	const object = user.tasks[target];
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
			case "state":
				if (object['state'] == 1){
					actioninfo.textContent = "In progress";
				}else if(object['state'] == 0){ 
					actioninfo.textContent = "To do";
				} else {
					actioninfo.textContent = "Done";
					container.classList.add("finished")
				}
				break;
			default:
				infodiv.textContent = key + " : " + object[key];
				container.appendChild(infodiv);
				break;
		}
		infodiv.id = key;

	}
	container.appendChild(actioninfo);
}

function createWorktable(container, user){
	const buttonzone = document.createElement('div');
	const editzone = document.createElement('div');
	const textarea = document.createElement('textarea');
	let target = user.tasks.findIndex((task) => {return task.id==user.focusId});
	console.log(user.tasks[user.focusId])
	
	editzone.classList.add("editzone");
	editzone.textContent = user.tasks[target].note;
	if (user.tasks[target].note == ""){
		editzone.textContent = " You can take note here! double tap to write something !";
		textarea.placeholder = " You can take note here! double tap to write something !";
	}

	container.appendChild(editzone);
	
	editzone.addEventListener("click", (e)=>{
		container.replaceChild(textarea, editzone);
		textarea.classList.toggle("editzone");
		editzone.classList.toggle("hidden");
		textarea.value = user.tasks[target].note;
	})
	
	textarea.addEventListener("mouseout", (e)=> {
		container.replaceChild(editzone, textarea);
		textarea.classList.toggle("editzone");
		editzone.textContent = textarea.value;
		user.tasks[target].note = textarea.value;
		user.save();
	})
	
}

export {detailView};
