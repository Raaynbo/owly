function createCard(container, attribute=[], data, type, project){
	const card = document.createElement('div');

	card.classList.add("card");
	
	card.textContent = data.name;
	card.itemInfo = {
			project: project,
			task: data
	};

	attribute.forEach((attr) => {
		switch(attr){
			case "list":
				createList(card, data.steps);
				break;
			case "action":
				createActionZone(card, data);
				break;
		}
	})
	if (data.state == 2){
		container.appendChild(card);
		card.classList.add("finished");
	}else{
		container.appendChild(card)
	}
}

function createList(container, data){
	const card_list = document.createElement('ul');
	const card_title = document.createElement('div');

	let id = 0;
	card_list.classList.add("card_list");
	card_title.classList.add("list_title");

	card_list.appendChild(card_title);
	data.forEach((sub) => {
		const list_el = document.createElement("li");
		list_el.classList.add("list_el");
		list_el.textContent = sub.name;
		list_el.itemInfo = {
			task: sub,
			id:id	
		}
		id++;
		card_list.appendChild(list_el);
	})

	container.appendChild(card_list);
}


function createActionZone(container, data){

	const actcontainer = document.createElement('div');
	const action_1 = document.createElement('span');
	const play = document.createElement('div');
	play.classList.add("icon");
	play.textContent = "Play";
	actcontainer.classList.add("action_zone");
	action_1.classList.add("action");

	action_1.textContent = "finish this task";
	if (data.state == 2){
		action_1.textContent = "Finished";
	}

	action_1.addEventListener("click", (e) => {
		data.closeTask();
	});
	container.appendChild(actcontainer);
	actcontainer.appendChild(action_1);
	actcontainer.appendChild(play);
}

function createPlaylistAction(container){
}

export {createCard};
