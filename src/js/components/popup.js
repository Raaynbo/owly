console.log("popup js");


// reuse card arguments system where a list is passed with all the elements needed inside the popup
//
// list of parameter
// -FORM
// -ACTION (create multiple choice with accorded action)


//args = attributes, title,object 
function createModal(title="OWLY GOT INFOS FOR YOU", attribute=[]){
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
	modal_content.textContent = "content";


	const overlay = document.createElement("div");
	overlay.classList.add("overlay");
	overlay.addEventListener("click", closeModal);
	attribute.forEach((attr) => {
		switch(attr){
			case "form":
				console.log("form")
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


function closeModal(){
	const modal = document.querySelector(".modal");
	const overlay = document.querySelector(".overlay");

	if (modal === undefined || overlay === undefined) return;

	modal.remove();
	overlay.remove();
}

export {createModal};


