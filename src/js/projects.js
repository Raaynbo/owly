import {task} from "./task.js";

class Project  {
	constructor (pname, desc,finished, fav){
		this.name= pname;
		this.description= desc;
		this.state= finished;
		this.favorite= fav;
		this.tasks = [];
	}
	
}


export {Project};
