import {Task} from "./task.js";

class Project  {
	constructor (pname, desc,finished, fav){
		this.name= pname;
		this.description= desc;
		this.state= finished;
		this.favorite= fav;
		this.steps = [];
		this.note = "";
		this.duration = 0;
	}

	addSteps(step){
		this.steps.push(step);	
	}

	setNote(value){
		this.note = value;
	}

	toggleFav(){
		this.favorite == true ? this.favorite = false : this.favorite = true;
	}
	
	setDuration(minutes){
		this.duration = minutes;
	}

	
}


export {Project};

