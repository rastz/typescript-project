"use strict";
exports.__esModule = true;
function BindThis(_target, _propertyKey, descriptor) {
    var currentMethod = descriptor.value;
    var modifiedDescriptor = {
        configurable: true,
        get: function () {
            return currentMethod.bind(this);
        }
    };
    return modifiedDescriptor;
}
exports["default"] = BindThis;
