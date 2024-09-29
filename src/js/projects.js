import {Task} from "./task.js";
import {Step} from "./step.js";

class Project  {
	constructor (pname, desc,finished, fav){
		this.name= pname;
		this.description= desc;
		this.state= finished;
		this.favorite= fav;
		this.steps = [];
	}

	
}


export {Project};

