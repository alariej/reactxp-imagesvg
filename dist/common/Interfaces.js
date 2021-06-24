"use strict";
/*
 * Interfaces.ts
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Interface exposed by ImageSvg component.
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
exports.SvgRect = exports.SvgPath = exports.ImageSvg = void 0;
var React = require("react");
var ImageSvg = /** @class */ (function (_super) {
    __extends(ImageSvg, _super);
    function ImageSvg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImageSvg;
}(React.Component));
exports.ImageSvg = ImageSvg;
var SvgPath = /** @class */ (function (_super) {
    __extends(SvgPath, _super);
    function SvgPath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SvgPath;
}(React.Component));
exports.SvgPath = SvgPath;
var SvgRect = /** @class */ (function (_super) {
    __extends(SvgRect, _super);
    function SvgRect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SvgRect;
}(React.Component));
exports.SvgRect = SvgRect;
