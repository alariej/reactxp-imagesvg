"use strict";
/*
 * SvgPath.tsx
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * RN-specific implementation of the cross-platform abstraction for
 * SVG Path elements.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgPath = void 0;
var React = require("react");
// TODO: #694092 Not implemented
var SvgPath = /** @class */ (function (_super) {
    __extends(SvgPath, _super);
    function SvgPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SvgPath.prototype.render = function () {
        return null;
    };
    return SvgPath;
}(React.Component));
exports.SvgPath = SvgPath;
exports.default = SvgPath;
