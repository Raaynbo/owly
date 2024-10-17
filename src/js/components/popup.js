import {renderApp} from "../../index.js"

console.log("popup js");

let currTreeSelector;
const tree = [];

// reuse card arguments system where a list is passed with all the elements needed inside the popup
//
// list of parameter
// -FORM
// -ACTION (create multiple choice with accorded action)


//args = attributes, title,object 
function createModal(title="OWLY GOT INFOS FOR YOU", attribute=[], user){
	const modal = document.createElement("div");
	modal.classList.add("modal");

	// close btn
	const close_btn = document.createElement('button');
	close_btn.classList.add("modal_close");
	close_btn.addEventListener("click", closeModal);

	const modal_title = document.createElement('div');
	modal_title.classList.add("modal_title");
	modal_title.textContent = title;

	const modal_content = document.createElement('div');
	modal_content.classList.add("modal_content");


	const overlay = document.createElement("div");
	overlay.classList.add("overlay");
	overlay.addEventListener("click", closeModal);
	attribute.forEach((attr) => {
		switch(attr){
			case "form":
				console.log("form")
				createForm(modal_content, user)
				break;
			case "action":
				console.log("action")
				break;
		}
	})

	modal.appendChild(close_btn);
	modal.appendChild(modal_title);
	modal.appendChild(modal_content);
	document.body.appendChild(modal);
	document.body.appendChild(overlay);
}


function createForm(container, user){
	const type_zone = document.createElement('div');
	const pjt_btn = document.createElement('div');
	const task_btn = document.createElement('div');
	const form = document.createElement("form");
	const labelname = document.createElement('label');
	const labeldate = document.createElement('label');
	const labeldesc = document.createElement('label');
	const labelpriority = document.createElement('label');
	const labelnote = document.createElement('label');
	const inputnote = document.createElement('input');
	const inputpriority = document.createElement('input');
	const inputname = document.createElement('input');
	const inputdesc = document.createElement('input');
	const inputdate = document.createElement('input');
	const inputsubmit = document.createElement('input');
	const inputList = [];

	const treeSelector = document.createElement('div');
	createTreeSelector(treeSelector, user);

	labelname.textContent = "Name \t";
	labeldesc.textContent = "Description \t";
	labeldate.textContent = "Due Date \t";
	labelpriority.textContent = "Priority \t";
	labelnote.textContent = "Note \t";
	inputnote.type = "text";
	inputname.type = "text";
	inputdesc.type = "textarea";
	inputdate.type = "date";
	inputpriority.type = "range";
	inputsubmit.type = "button";
	inputsubmit.value = "button";
	inputpriority.min = 0;
	inputpriority.max = 3;

	pjt_btn.textContent = "project";
	pjt_btn.classList.add("btn_form");
	task_btn.classList.add("btn_form");
	form.classList.add("form");
	type_zone.classList.add("bar");
	
	task_btn.textContent = "task";

	type_zone.appendChild(pjt_btn);
	type_zone.appendChild(task_btn);
	
	inputList.push(inputname);
	inputList.push(inputdesc);
	inputList.push(inputdate);
	inputList.push(inputpriority);
	
	task_btn.addEventListener("click", (e)=>{
		form.appendChild(treeSelector);
		task_btn.classList.add("selected");
		pjt_btn.classList.remove("selected");
	});
	pjt_btn.addEventListener("click", (e)=>{
		if (Array.from(form.childNodes).find(node => node.isEqualNode(treeSelector))){
			form.removeChild(treeSelector);
		}
		pjt_btn.classList.add("selected");
		task_btn.classList.remove("selected");
	});

	inputsubmit.addEventListener("click", (e)=>{
		let obj = {
			project: "project",
			task:"task"
		}
		if(!verifyInput(inputList)){
			return false;	
		}
		if (pjt_btn.classList.contains("selected")){
			user.createNewProject(inputname.value, inputdesc.value, inputnote.value)
			obj = {
				project: user.projects[user.projects.length-1],
				task:user.projects[user.projects.length-1]
			}
		}else{
			if (currTreeSelector == undefined){
				console.log("please select a project or a task first in the tree Viz")
				return false;
			}
			console.log(currTreeSelector);
			if (tree.length == 1){
				user.setProjectFocused(user.projects.findIndex((pjt)=> {return pjt==currTreeSelector}));
				user.createNewTask(inputname.value, inputdesc.value);
			}else{
				currTreeSelector.createSubtask(inputname.value, inputdesc.value);
			}
			obj = {
				project:user.projects[tree[0]],
				task:currTreeSelector
			}
		}
		renderApp("home")
		closeModal();

	})
	
	labelname.appendChild(inputname);
	labeldesc.appendChild(inputdesc);
	labeldate.appendChild(inputdate);
	labelnote.appendChild(inputnote);
	labelpriority.appendChild(inputpriority);
	form.appendChild(type_zone);
	form.appendChild(labelname);
	form.appendChild(labeldesc);
	form.appendChild(labeldate);
	form.appendChild(labelpriority);
	form.appendChild(labelnote);
	form.appendChild(inputsubmit);
	container.appendChild(form);
}


function createTreeSelector(container, user){
	while (container.firstChild){
		container.removeChild(container.lastChild)
	}
	const path = document.createElement('div');
	const btnzone = document.createElement('div');
	const rootbtn = document.createElement('div');
	const backbtn = document.createElement('div');

	const treeviz = document.createElement('div');

	rootbtn.textContent = "root";
	backbtn.textContent = "back";

	let dir = user.projects[tree[0]];
	for (let i=1 ; i<=tree.length-1;i++){
		
	}
	rootbtn.addEventListener("click", (e)=>{
		currTreeSelector = undefined;
		while(tree.length){
			tree.pop();
		}
		path.textContent = "/";
		createTreeSelector(container, user);
	})

	backbtn.addEventListener("click", (e) =>{
		if (currTreeSelector == undefined){
			return false;
		}
		tree.pop();
		let temp = user.projects;
		if (tree.length ==0 ){
			currTreeSelector = undefined;
			createTreeSelector(container, user)
		}else{
			console.log("a"+tree.length)
			temp = user.projects[tree[0]];
			for (let i = 1; i <= tree.length-1; i++){
				temp = temp.steps[tree[i]];	
			}
			console.log(tree);
			currTreeSelector = temp;
		}
		createTreeSelector(container, user);

	})

	if (currTreeSelector == undefined){
		user.projects.forEach((child)=>{
			const row = document.createElement('div');
			row.textContent = child.name;
			row.addEventListener("dblclick", (e)=>{
				currTreeSelector = child;
				tree.push(user.projects.findIndex((el) => {return el == currTreeSelector}));
				path.textContent = currTreeSelector.name;
				console.log(currTreeSelector.name)
				createTreeSelector(container, user);
			})
			treeviz.appendChild(row);
		})
	}else{
		let temp = user.projects[tree[0]];
		path.textContent = temp.name+"/";
		for(let i =1 ; i<= tree.length-1 ;i++){
			temp = temp.steps[tree[i]];
			path.textContent += temp.name + "/";
		}
		currTreeSelector.steps.forEach((child)=>{
			const row = document.createElement('div');
			row.textContent = child.name;
			row.addEventListener("dblclick", (e)=>{
				tree.push(currTreeSelector.steps.findIndex((el) => {return el == child}));
				currTreeSelector = child;
				path.textContent =  currTreeSelector.name;
				console.log(currTreeSelector.name)
				createTreeSelector(container, user);
			})
			treeviz.appendChild(row);
		})
	}
	console.log(tree);
	btnzone.appendChild(rootbtn);
	btnzone.appendChild(backbtn);
	container.appendChild(path);
	container.appendChild(btnzone);
	container.appendChild(treeviz);

	
}

function verifyInput(list){
	let isFilled = true;
	list.forEach((el)=>{
		if (el.value == "" || el.value == undefined){
			isFilled = false;
		}
	})
	return isFilled;
}

function closeModal(){
	const modal = document.querySelector(".modal");
	const overlay = document.querySelector(".overlay");

	if (modal === undefined || overlay === undefined) return;

	modal.remove();
	overlay.remove();
	renderApp("home")
}

export {createModal};


