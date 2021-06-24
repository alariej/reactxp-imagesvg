"use strict";
/*
 * SvgRect.tsx
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform abstraction for
 * SVG Rect elements.
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
exports.SvgRect = void 0;
var React = require("react");
var SvgRect = /** @class */ (function (_super) {
    __extends(SvgRect, _super);
    function SvgRect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SvgRect.prototype.render = function () {
        return (React.createElement("rect", { fill: this.props.fillColor, fillOpacity: this.props.fillOpacity, stroke: this.props.strokeColor, strokeOpacity: this.props.strokeOpacity, strokeWidth: this.props.strokeWidth, width: this.props.width, height: this.props.height, x: this.props.x, y: this.props.y }));
    };
    return SvgRect;
}(React.Component));
exports.SvgRect = SvgRect;
exports.default = SvgRect;
