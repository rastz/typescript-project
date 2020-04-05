"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateInput(_a) {
    var value = _a.value, _b = _a.isRequired, isRequired = _b === void 0 ? true : _b, min = _a.min, max = _a.max, minLength = _a.minLength, maxLength = _a.maxLength;
    var isValid = true;
    if (isRequired) {
        isValid = isValid && value.toString().trim().length !== 0;
    }
    if (minLength != null && typeof value === "string") {
        isValid = isValid && value.length > minLength;
    }
    if (maxLength != null && typeof value === "string") {
        isValid = isValid && value.length <= maxLength;
    }
    if (min != null && typeof value === "number") {
        isValid = isValid && value >= min;
    }
    if (max != null && typeof value === "number") {
        isValid = isValid && value <= max;
    }
    return isValid;
}
exports.default = validateInput;
//# sourceMappingURL=validateInput.js.map