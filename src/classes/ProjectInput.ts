import BindThis from "../decorators/BindThis";
import validateInput from "../utils/validateInput";

class ProjectInput {
	templateElement: HTMLTemplateElement;
	hostElement: HTMLDivElement;
	element: HTMLFormElement;

	titleFormInput: HTMLInputElement;
	descriptionFormInput: HTMLInputElement;
	peopleFormInput: HTMLInputElement;

	constructor() {
		this.templateElement = document.getElementById("project-input") as HTMLTemplateElement;
		this.hostElement = document.getElementById("app") as HTMLDivElement;

		const importedNode = document.importNode(this.templateElement.content, true);

		this.element = importedNode.firstElementChild as HTMLFormElement;
		this.element.id = "user-input";

		this.titleFormInput = this.element.querySelector("#title") as HTMLInputElement;
		this.descriptionFormInput = this.element.querySelector("#description") as HTMLInputElement;
		this.peopleFormInput = this.element.querySelector("#people") as HTMLInputElement;

		this.configure();
		this.attach();
	}

	private attach() {
		this.hostElement.insertAdjacentElement("afterbegin", this.element);
	}

	private getUserInputs(): [string, string, number] | void {
		const title = this.titleFormInput.value;
		const description = this.descriptionFormInput.value;
		const people = this.peopleFormInput.value;

		const titleInput = {
			value: title,
			isRequired: true,
		};

		const descriptionInput = {
			value: description,
			isRequired: true,
			minLength: 5,
			maxLength: 20,
		};

		const peopleInput = {
			value: people,
			isRequired: true,
			min: 1,
		};

		if (
			!validateInput(titleInput) ||
			!validateInput(descriptionInput) ||
			!validateInput(peopleInput)
		) {
			throw new Error("invalid input data");
		} else {
			// console.log([title, description, people]);
			return [title, description, +people];
		}
	}

	@BindThis
	private submitHandler(event: Event) {
		event.preventDefault();

		const userInput = this.getUserInputs();

		if (Array.isArray(userInput)) {
			const [title, description, people] = userInput;

			console.log(title);
			console.log(description);
			console.log(people);
		}

		this.element.reset(); // clear form inputs
	}

	private configure(): void {
		this.element.addEventListener("submit", this.submitHandler);
	}
}

export default ProjectInput;
