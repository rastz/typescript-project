"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BindThis_1 = __importDefault(require("../decorators/BindThis"));
var validateInput_1 = __importDefault(require("../utils/validateInput"));
var ProjectInput = (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleFormInput = this.element.querySelector("#title");
        this.descriptionFormInput = this.element.querySelector("#description");
        this.peopleFormInput = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    };
    ProjectInput.prototype.getUserInputs = function () {
        var title = this.titleFormInput.value;
        var description = this.descriptionFormInput.value;
        var people = this.peopleFormInput.value;
        var titleInput = {
            value: title,
            isRequired: true,
        };
        var descriptionInput = {
            value: description,
            isRequired: true,
            minLength: 5,
            maxLength: 20,
        };
        var peopleInput = {
            value: people,
            isRequired: true,
            min: 1,
        };
        if (!validateInput_1.default(titleInput) ||
            !validateInput_1.default(descriptionInput) ||
            !validateInput_1.default(peopleInput)) {
            throw new Error("invalid input data");
        }
        else {
            return [title, description, +people];
        }
    };
    ProjectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        var userInput = this.getUserInputs();
        if (Array.isArray(userInput)) {
            var title = userInput[0], description = userInput[1], people = userInput[2];
            console.log(title);
            console.log(description);
            console.log(people);
        }
        this.element.reset();
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener("submit", this.submitHandler);
    };
    __decorate([
        BindThis_1.default
    ], ProjectInput.prototype, "submitHandler", null);
    return ProjectInput;
}());
exports.default = ProjectInput;
//# sourceMappingURL=ProjectInput.js.map