import {createCard} from "../js/components/card.js";

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
	tree_container.classList.add("small");
	
	main.appendChild(project_container);
	main.appendChild(tree_container);
	
	user.projects.forEach((project) => {
		createCard(project_container, ["list"], project);
		const card = document.createElement('div');
		card.textContent = user.projects[0].name;
		card.classList.add("card");
	})
}

export {homeView};
