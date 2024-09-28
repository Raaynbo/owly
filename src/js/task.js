const task = function Task(tname = "my first task", desc = "Learn about how we help you handle your task", drtn=0, cDate = "2024-09-27", hSub=true){
	let name = tname;	
	let description = desc;
	let duration = drtn;
	const creationDate = cDate;
	const hasSubtasks = hSub;
	let completionState = false;

	const endTask = () => {
		completionState = true;	
		console.log(completionState);
}
	return {name, description, creationDate, hasSubtasks, completionState, endTask};

}

export {task};
