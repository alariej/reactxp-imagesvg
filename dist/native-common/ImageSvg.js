"use strict";
/**
 * ImageSvg.tsx
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * RN-specific implementation of the cross-platform abstraction for
 * SVG (scalable vector graphics) images.
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
exports.ImageSvg = void 0;
var React = require("react");
var RNSvg = require("react-native-svg");
var assert_1 = require("../common/assert");
var ImageSvg = /** @class */ (function (_super) {
    __extends(ImageSvg, _super);
    function ImageSvg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageSvg.prototype.render = function () {
        (0, assert_1.default)(this.props.width && this.props.height, 'The width and height on imagesvg are mandatory.');
        if (this.props.width > 0 && this.props.height > 0) {
            return (React.createElement(RNSvg.Svg, { width: this.props.width.toString(), height: this.props.height.toString(), style: this.props.style, opacity: this.props.strokeOpacity, preserveAspectRatio: this.props.preserveAspectRatio, viewBox: this.props.viewBox }, this.props.children));
        }
        return null;
    };
    return ImageSvg;
}(React.Component));
exports.ImageSvg = ImageSvg;
exports.default = ImageSvg;
