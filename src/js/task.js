class Task{
	constructor (tname = "my first task", desc = "Learn about how we help you handle your task", drtn=0, cDate = "2024-09-27", hSub=true){
		this.name = tname;	
		this.description = desc;
		this.duration = drtn;
		this.creationDate = cDate;
		this.hasSubtasks = hSub;
		this.completionState = false;
	}

	endTask() {
		completionState = true;	
	}

}

export {Task};
