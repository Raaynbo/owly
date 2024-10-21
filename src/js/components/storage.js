

function localStore(){
	let taskList = getObject("taskList") ;
	let lastId;
	 if (taskList == ""){
		console.log("no task list")
		lastId = 0
		return true;	
		
	 }else{
		taskList = getObject("taskList");
		console.log(taskList) 
		taskList.length == 0? lastId = 0 : lastId = taskList.length-1;
		return false;
	 }
	

}

function addDataObject(objname, obj){
	localStorage.setItem(objname, JSON.stringify(obj));
}

function getObject(objname){
	return JSON.parse(localStorage.getItem(objname)||"[]");
}

function addArray(name="array", obj){
	localStorage.setItem(name, JSON.stringify(obj));
}

function getArray(name){
	return localStorage.getItem(name);
}

function populateStorage(){
	localStorage.setItem("bgcolor", "blue");
}

function storageAvailable(type){
	let storage;
	try{
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.remove(x);
	}
	catch(e){
		return (
		e instanceof DOMException && 
		e.name === "QuotaExceededError"&&
		storage && 
		storage.length !==0);
	}
}

export {localStore, addDataObject, getObject, addArray, getArray};

