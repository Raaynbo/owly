import {createModal} from "../js/components/popup.js";


function actionView(user){
	console.log("soon displaying things")
	createModal("Create a new project", ["form"], user);
	

}


export {actionView};
