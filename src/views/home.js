import {createCard} from "../js/components/card.js";
import {renderApp} from "../index.js";

function homeView(app, user){
	const main = document.createElement('div');
	const navbar = document.createElement('nav');

	main.classList.add("home_main");
	navbar.classList.add("navbar");
	app.appendChild(main);
	app.appendChild(navbar);

	const project_container = document.createElement('div');
	const tree_container = document.createElement('div');

	project_container.classList.add("main_container");
	tree_container.classList.add("side_container");
	tree_container.classList.add("small_side");
	
	main.appendChild(project_container);
	main.appendChild(tree_container);
	
	console.log(user)
	user.tasks.forEach((task) => {
		createCard(project_container, ["list"], task, "project", task);
		
	})
	project_container.addEventListener("click", (e) => {
		if (e.target.classList.contains("card")){
			user.focus = true;
			user.page = "detail";
			user.focusId = e.target.itemInfo.task.id;
			console.log(e.target.itemInfo.task.id)
			renderApp(user);
		}
	})
	const list_el = document.querySelectorAll("li");
	list_el.forEach((el) => { 
	el.addEventListener("click",(e) => {
			let pjt = el;
			while (!pjt.classList.contains("card")){
				console.log(pjt.itemInfo);
				pjt = pjt.parentNode;
				console.log(pjt.itemInfo);
			}
			pjt.itemInfo = {
				project: pjt.itemInfo.project,
				type: "task",
				task: el.itemInfo.task
			}
			console.log(pjt.itemInfo);
			renderApp("detail", pjt.itemInfo)
		});
	});
}

export {homeView};
