"use strict";
/*
 * ImageSvg.tsx
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of the cross-platform abstraction for
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
var reactxp_1 = require("reactxp");
var assert_1 = require("../common/assert");
var ImageSvg = /** @class */ (function (_super) {
    __extends(ImageSvg, _super);
    function ImageSvg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageSvg.prototype.render = function () {
        (0, assert_1.default)(this.props.width && this.props.height, 'The width and height on imagesvg are mandatory.');
        if (this.props.width > 0 && this.props.height > 0) {
            var combinedStyles = reactxp_1.Styles.combine([{
                    display: 'flex',
                    position: 'relative',
                }, this.props.style]);
            if (this.props.fillColor !== undefined) {
                combinedStyles.fill = this.props.fillColor;
            }
            if (this.props.fillOpacity !== undefined) {
                combinedStyles.fillOpacity = this.props.fillOpacity.toString();
            }
            if (this.props.strokeColor !== undefined) {
                combinedStyles.stroke = this.props.strokeColor;
            }
            if (this.props.strokeOpacity !== undefined) {
                combinedStyles.strokeOpacity = this.props.strokeOpacity.toString();
            }
            if (this.props.strokeWidth !== undefined) {
                combinedStyles.strokeWidth = this.props.strokeWidth.toString();
            }
            if (combinedStyles.flex === undefined) {
                combinedStyles.flex = '0 0 auto';
            }
            if (combinedStyles.overflow === undefined) {
                combinedStyles.overflow = 'hidden';
            }
            if (this.props.webShadow) {
                var aliases = reactxp_1.Styles.getCssPropertyAliasesCssStyle();
                if (this._isFilterDropShadowSupported()) {
                    var filterAlias = aliases.filter || 'filter';
                    combinedStyles[filterAlias] = 'drop-shadow(' + this.props.webShadow + ')';
                }
            }
            return (React.createElement("svg", { viewBox: this.props.viewBox, style: combinedStyles, height: this.props.height, width: this.props.width }, this.props.children));
        }
        else {
            return null;
        }
    };
    ImageSvg.prototype._isFilterDropShadowSupported = function () {
        // Edge (actually, Windows 10) contains a bug where it renders this incorrectly.
        // We'll disable it specifically on Edge browsers for now.
        // Safari also has a bug where it renders this incorrectly (transparent background),
        // so we'll disable it there also.
        // For now, enable it in Chrome only.
        var isChrome = window.hasOwnProperty('chrome');
        // The latest versions of Edge implement the "chrome" global variable (presumably
        // for compatibility with Chrome browser), so we need to do one more check
        // to make sure it's really chrome.
        if (isChrome && navigator.appName === 'Netscape' && navigator.appVersion.indexOf('Edge') >= 0) {
            isChrome = false;
        }
        return isChrome;
    };
    return ImageSvg;
}(React.Component));
exports.ImageSvg = ImageSvg;
exports.default = ImageSvg;
