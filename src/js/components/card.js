function createCard(container, attribute=[], data){
	const card = document.createElement('div');

	console.log(data);
	card.classList.add("card");
	
	card.textContent = data.name;
	attribute.forEach((attr) => {
		switch(attr){
			case "list":
				createList(card, data);
				break;
			case "action":
				createActionZone(card);
				break;
		}
	})
	container.appendChild(card);
}

function createList(container, data){
	const card_list = document.createElement('ul');
	const card_title = document.createElement('div');

	card_list.classList.add("card_list");
	card_title.classList.add("list_title");

	card_list.appendChild(card_title);
	data.steps.forEach((sub) => {
		const list_el = document.createElement("li");
		list_el.classList.add("list_el");
		list_el.textContent = sub.name;
		card_list.appendChild(list_el);
	})

	container.appendChild(card_list);
}


function createActionZone(container){
	const actcontainer = document.createElement('div');
	const action_1 = document.createElement('span');
	const action_2 = document.createElement('span');
	const action_3 = document.createElement('span');

	actcontainer.classList.add("action_zone");
	action_1.classList.add("action");
	action_2.classList.add("action");
	action_3.classList.add("action");

	action_1.textContent = "action";
	action_2.textContent = "action";
	action_3.textContent = "action";

	container.appendChild(actcontainer);
	actcontainer.appendChild(action_1);
	actcontainer.appendChild(action_2);
	actcontainer.appendChild(action_3);
}

export {createCard, populateElement};
