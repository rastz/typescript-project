"use strict";
var projectInput = (document.getElementById("project-input"));
var singleProject = (document.getElementById("single-project"));
var projectList = (document.getElementById("project-list"));
var formBtn = projectInput.content.querySelector("button");
var projectInputClone = projectInput === null || projectInput === void 0 ? void 0 : projectInput.content.cloneNode(true);
var singleProjectClone = singleProject === null || singleProject === void 0 ? void 0 : singleProject.content.cloneNode(true);
var projectListClone = projectList === null || projectList === void 0 ? void 0 : projectList.content.cloneNode(true);
function renderOnClick() {
    var templateNodeClones = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        templateNodeClones[_i] = arguments[_i];
    }
    var _a;
    (_a = document.querySelector(".start-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        console.log("form revealed!");
        templateNodeClones.forEach(function (element) { return document.body.appendChild(element); });
    });
}
renderOnClick(projectInputClone);
var projectInputForm = document.querySelector("#form");
function getFormInputs(event) {
    console.log("submit!");
    event.preventDefault();
    var formControl = (projectInput.content.querySelectorAll(".form-control"));
    formControl.forEach(function (el) {
        var _a;
        var input = (_a = el.querySelector("input")) === null || _a === void 0 ? void 0 : _a.value;
        console.log(input, "@@@@@@@@@@");
    });
}
if (projectInputForm) {
    projectInputForm.addEventListener("submit", function (e) {
        console.log("click");
        e.preventDefault();
    });
}
//# sourceMappingURL=app-faild.js.map