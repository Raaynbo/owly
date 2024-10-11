console.log("popup js");


function createModal(title="TITLE GOES HERE", content="CONTENT GOES HERE"){
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
	modal_content.textContent = content;


	const overlay = document.createElement("div");
	overlay.classList.add("overlay");
	overlay.addEventListener("click", closeModal);

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


