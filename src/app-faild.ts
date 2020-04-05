// 1. get render template on screen

const projectInput = <HTMLTemplateElement>(
	document.getElementById("project-input")
);
const singleProject = <HTMLTemplateElement>(
	document.getElementById("single-project")
);
const projectList = <HTMLTemplateElement>(
	document.getElementById("project-list")
);
const formBtn = <HTMLButtonElement>projectInput.content.querySelector("button");

const projectInputClone = projectInput?.content.cloneNode(true);
const singleProjectClone = singleProject?.content.cloneNode(true);
const projectListClone = projectList?.content.cloneNode(true);

function renderOnClick(...templateNodeClones: Node[]): void {
	document.querySelector(".start-button")?.addEventListener("click", () => {
		console.log("form revealed!");
		templateNodeClones.forEach(element => document.body.appendChild(element));
	});
}

renderOnClick(projectInputClone);

const projectInputForm = <HTMLFormElement>document.querySelector("#form");

// 2. fetch information from form inputs
function getFormInputs(event: Event) {
	console.log("submit!");
	event.preventDefault();
	const formControl = <NodeListOf<HTMLElement>>(
		projectInput.content.querySelectorAll(".form-control")
	);

	formControl.forEach(el => {
		const input = el.querySelector("input")?.value;

		console.log(input, "@@@@@@@@@@");
	});
}

if (projectInputForm) {
	projectInputForm.addEventListener("submit", (e: Event) => {
		console.log("click");
		e.preventDefault();
	});
}
// const buttonParent = document.querySelector(".parent");

// buttonParent?.addEventListener("click", (event: Event) => {
// 	// tell typescript what type of element you expect!
// 	console.log(`element ${(event.target as HTMLElement).id} was clicked!`);
// });

// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");

// console.log(formControl);
//3. validate form informations
//4. listen for submition of a button
//5. crates object wit informations
//6. put them on the screen in 'single-project'
//7. show 'project-list'
