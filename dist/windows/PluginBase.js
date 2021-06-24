"use strict";
/*
 * PluginBase.ts
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Base export for the UWP implementation of the plugin.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = exports.SvgRect = exports.SvgPath = exports.default = void 0;
var Types = require("../common/Types");
exports.Types = Types;
var ImageSvg_1 = require("./ImageSvg");
exports.default = ImageSvg_1.default;
var SvgPath_1 = require("./SvgPath");
exports.SvgPath = SvgPath_1.default;
var SvgRect_1 = require("./SvgRect");
exports.SvgRect = SvgRect_1.default;
