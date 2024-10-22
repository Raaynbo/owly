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
	
	user.tasks.forEach((task) => {
		console.log(user.tasks)
		createCard(project_container, ["list"], task, "project", task);
		
	})
	project_container.addEventListener("click", (e) => {
		if (e.target.classList.contains("card")){
			user.focus = true;
			user.page = "detail";
			user.focusId = e.target.itemInfo.task.id;
			console.log(e.target.itemInfo)
			renderApp(user);
		}
	})
}

export {homeView};
