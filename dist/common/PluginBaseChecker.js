"use strict";
/*
 * PluginBaseChecker.ts
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Type check all the pluginbase exports against the desired interface.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var AndroidPlugin = require("../android/PluginBase");
var iOSPlugin = require("../ios/PluginBase");
var WebPlugin = require("../web/PluginBase");
var _typeCheckerAndroid = AndroidPlugin;
var _typeCheckeriOS = iOSPlugin;
var _typeCheckerWeb = WebPlugin;
