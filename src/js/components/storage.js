

function localStore(){
	console.log(localStorage)
	if(!localStorage.getItem('bgcolor')) {
		populateStorage();
	}else {
		console.log(localStorage['bgcolor'])
	} 
	

}

function addDataObject(objname, obj){
	localStorage.setItem(objname, JSON.stringify(obj));
}

function getObject(objname){
	return JSON.parse(localStorage.getItem(objname));
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

