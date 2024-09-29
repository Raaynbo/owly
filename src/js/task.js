class Task{
	constructor (tname = "my first task", desc = "Learn about how we help you handle your task", drtn=0, cDate = "2024-09-27", hSub=true){
		this.name = tname;	
		this.description = desc;
		this.duration = drtn;
		this.creationDate = cDate;
		this.hasSubtasks = hSub;
		this.startWipDate;
		this.endWipDate;
		this.state = 0;	
		this.session = [];
		this.active = false;
	}

	startTask(){
		if (this.active){
			console.log("task already running");
			return ;
		}
		this.startWipDate = Date.now();
		console.log(this.startWipDate);
		console.log(`task ${this.name} is started, now focus on it and come back when you finish`);
		this.state = 1;
		this.active = true;
	}

	endTask() {	
		if (!this.active){
			console.log("task cant be terminated, without being launched");
			return;
		}
		console.log("terminating this task");
		this.duration += this.msToMinutes(Date.now()-this.startWipDate)
		this.endWipDate = Date.now(); 
		this.session.push([this.startWipDate, this.endWipDate]);
		this.state = 2;
		this.startWipDate, this.endWipDate = 0;
		
	}

	msToMinutes(ms) {
		return Math.floor((ms / 1000 / 60));
	}


}

export {Task};
