/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css"
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#content {\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    min-height: 300px;\n}\n\n.dashboard {\n    background-color: rgb(231, 84, 128);\n    border: 1px solid black;\n}\n\n.outer-task-display-div {\n    background-color: pink;\n}\n\n.task-display {\n    display: flex;\n    justify-content: space-between;\n}\n\n.title-dashboard {\n    padding-left: 30px;\n    font-size: 25px;\n}\n\n.new-project-button {\n    margin-left: 20px;\n    border:none;\n    border-radius: 10px;\n    padding: 15px 20px 15px 20px;\n    margin-bottom: 10px;\n    background-color: rgb(195, 195, 195);\n    margin-top: 50px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n\n}\n.task-title {\n    padding-left: 25px;\n    font-size: 25px;\n}\n\n.add-a-task {\n   margin-right: 30px;\n   height:60px;\n   margin-top: 10px;\n   padding:10px 20px 10px 20px;\n   border-radius: 10px;\n   border: none;\n   background-color: rgb(226, 218, 218);\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n}\n\n.new-project-name{\n    margin: 10px 10px 0px 30px;\n    border: 1px solid white;\n    padding: 1px 0px 10px 20px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);}\n\n.item {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.task-info {\n    font-weight: bold;\n    font-size: 20px;\n}\n\n.task-info-block {\n    border: 1px solid white;\n    padding-left: 20px;\n    margin: 10px 0px 0px 10px;\n    display: flex;\n    justify-content: space-between;\n    width:500px\n}\n\n.detailsButton,.delete-task-button,.closing-button-details-dialog {\n    padding: 0px 30px;\n    background-color:  rgb(231, 84, 128);\n    border: 1px solid black;\n    height:30px;\n    margin-right: 10px;\n}\n\n.div-task-buttons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n}\n\n.delete-the-project-button {\n    border:none;\n    background-color: rgb(195, 195, 195);\n    padding:10px 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles/style.css"
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _scripts_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/dom.js */ \"./src/scripts/dom.js\");\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/scripts/dom.js"
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/scripts/logic.js\");\n\n\nfunction whenClickTheNewProjectButton() {\n    const projectButton = document.querySelector(\".new-project-button\");\n    const dialogPopup = document.querySelector(\"#project-name-dialog\")\n    const inputBox = document.querySelector(\"#user-project-name-input\");\n    projectButton.addEventListener('click',() => {\n        dialogPopup.showModal();\n    });\n\n    const cancelButton = document.querySelector(\"#cancel-button\");\n        cancelButton.addEventListener('click', () => {\n            dialogPopup.close();\n            inputBox.value = \"\";\n\n        });\n\n    const dialogPopup2 = document.querySelector('#project-name-dialog');\n    const taskForm = dialogPopup.querySelector('form');\n        taskForm.addEventListener('submit', () => {\n            dialogPopup.close();\n            displayTheNewProject(inputBox.value,projectButton);\n            (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(inputBox.value);\n            inputBox.value = \"\";\n            whenClickOnProjects();\n        });\n}\n\nfunction displayTheNewProject(projectName,projectButton) {\n    const newProjectNameDisplay = document.createElement(\"div\");\n    newProjectNameDisplay.classList.add(\"new-project-name\");\n    const projectNameInputValue = document.createElement('p');\n    projectNameInputValue.classList.add(\"project-name-para\");\n    projectNameInputValue.textContent = projectName;\n    if(projectName != \"My default Project\") {\n        const deleteProjectButton = document.createElement('button');\n        deleteProjectButton.classList.add(\"delete-the-project-button\");\n        deleteProjectButton.textContent = \"Delete\"\n        newProjectNameDisplay.appendChild(projectNameInputValue)\n        newProjectNameDisplay.appendChild(deleteProjectButton)\n        const projectDisplayDiv = document.querySelector(\".dashboard\");\n        projectDisplayDiv.insertBefore(newProjectNameDisplay,projectButton);\n        whenClickingDeleteProjectButton();\n    }\n    \n}\n\nfunction whenClickOnProjects() {\n    const allProjects = document.querySelectorAll(\".project-name-para\");\n    const taskTitle = document.querySelector(\".task-title\");\n    allProjects.forEach((project) => {\n        project.addEventListener('click', () => {\n            taskTitle.textContent = project.textContent;\n            const divOuter = document.querySelector('.outer-task-display-div');\n            let projectObj = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getProjectObject)()\n            clearTheTask();\n            renderTasks(projectObj,divOuter,taskTitle.textContent);\n            \n        });\n    });\n}\n\nfunction clearTheTask() {\n    const containingAllOfTheseDivs = document.querySelector('.all-task-container');\n    if (containingAllOfTheseDivs) {\n        containingAllOfTheseDivs.innerHTML = \"\";\n    }\n}\n\n\nfunction addNewTasks() {\n    const taskInputDialog = document.querySelector('#task-display-dialog')\n    const newTaskButton = document.querySelector('.add-a-task');\n\n    newTaskButton.addEventListener('click', () => {\n        taskInputDialog.showModal();\n    })\n\n    const cancelButton = document.querySelector(\"#cancel-button-2\");\n        cancelButton.addEventListener('click', () => {\n            taskInputDialog.close();\n            emptyAllInputBoxValues();\n\n\n        });\n\n    const taskForm = taskInputDialog.querySelector('form');\n        taskForm.addEventListener('submit', () => {\n        clearTheTask();\n        displayTasks();\n        emptyAllInputBoxValues();\n        });\n        }\n\nfunction emptyAllInputBoxValues() {\n     const allInputBoxes = document.querySelectorAll(\".dialog-2-input\");\n            allInputBoxes.forEach((box) => {\n                box.value = \"\";\n            });\n                \n}\n\nconst containingAllOfTheseDivs = document.createElement('div');\ncontainingAllOfTheseDivs.classList.add('all-task-container');\n\nfunction displayTasks() {\n    const titleInput = document.querySelector(\"#task-name\");\n    const descriptionInput = document.querySelector(\"#description-task\");\n    const dueDateInput = document.querySelector(\"#due-date\");\n    const priorityInput = document.querySelector(\"#priority-select\")\n    const notesInput = document.querySelector(\"#any-notes\");\n\n    const newTodo = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.toDos)(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value,notesInput.value);\n    const taskTitle = document.querySelector(\".task-title\").textContent;\n\n    let todoObject = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.createTheTodoObjectsArray)(newTodo,taskTitle);\n\n\n    const divOuter = document.querySelector('.outer-task-display-div');\n    renderTasks(todoObject,divOuter,taskTitle);\n}\n\nfunction renderTasks(todoObject,divOuter,taskTitle) {\n    if (!todoObject[taskTitle]) {\n        return; // or handle \"no tasks yet\" case, e.g. clear the container and stop\n    }\n    todoObject[taskTitle].forEach((todo) => {\n        const div = document.createElement('div');\n\n        div.classList.add(\"task-info-block\")\n        const title = document.createElement('p');\n        const description = document.createElement('p');\n        const priority = document.createElement('p');\n        const notes = document.createElement('p');\n        const dueDate = document.createElement('p');\n\n        const detailsButton = document.createElement('button');\n        detailsButton.textContent = \"Details\";\n        detailsButton.classList.add('detailsButton');\n        showDetails(detailsButton, description, priority, notes, dueDate);\n\n        const deleteButton = document.createElement('button');\n        deleteButton.textContent = \"Delete\";\n        deleteButton.classList.add('delete-task-button');\n        deleteTheTask(deleteButton, todo.id, taskTitle);\n\n        const taskButtonsDiv = document.createElement('div');\n        taskButtonsDiv.classList.add(\"div-task-buttons\")\n        taskButtonsDiv.appendChild(deleteButton);\n        taskButtonsDiv.appendChild(detailsButton);\n\n       title.textContent = todo.title;\n       description.textContent = todo.description;\n       priority.textContent = todo.priority;\n       notes.textContent = todo.notes;\n       dueDate .textContent= todo.dueDate;\n\n        div.appendChild(title);\n        div.appendChild(taskButtonsDiv);\n\n        containingAllOfTheseDivs.appendChild(div);\n\n    });\n    divOuter.appendChild(containingAllOfTheseDivs);\n}\n\nfunction deleteTheTask(deleteButton, idToDelete, projectName) {\n    deleteButton.addEventListener('click', () => {\n        ;(0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(idToDelete, projectName);\n        deleteButton.closest('.task-info-block').remove();\n    });\n}\n\nfunction showDetails(detailsButton,description,priority,notes,dueDate) {\n    const dialog = document.querySelector('#details-dialog');\n    dialog.innerHTML = \"\";\n    dialog.appendChild(description);\n    dialog.appendChild(priority);\n    dialog.appendChild(dueDate);\n    dialog.appendChild(notes);\n    const buttonClose = document.createElement(\"button\");\n    buttonClose.classList.add(\"closing-button-details-dialog\")\n    buttonClose.textContent = \"close\";\n\n    dialog.appendChild(buttonClose);\n    detailsButton.addEventListener('click', () => {\n        dialog.showModal();\n    });\n\n    buttonClose.addEventListener('click', () => {\n        dialog.close();\n    })\n}\n\n\nfunction whenClickingDeleteProjectButton() {\n    const deleteButtons = document.querySelectorAll(\".delete-the-project-button\");\n    deleteButtons.forEach((deleteButton) => {\n        deleteButton.addEventListener('click', () => {\n        const container = deleteButton.closest(\".new-project-name\");\n        const nameProject = deleteButton.previousElementSibling;\n        container.remove();\n        (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.removeProject)(nameProject.textContent);\n        clearTheTask();\n        let projectObj = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getProjectObject)();\n        const divOuter = document.querySelector('.outer-task-display-div');\n        document.querySelector(\".task-title\").textContent = \"My default Project\";\n        renderTasks(projectObj,divOuter,document.querySelector(\".task-title\").textContent);\n        })\n    })\n}\n\n\nfunction loadEverything() {\n    const projectButton = document.querySelector(\".new-project-button\");\n    const projectObj = (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getProjectObject)();\n    const divOuter = document.querySelector('.outer-task-display-div');\n    const projectNames = Object.keys(projectObj);\n    const taskTitle = document.querySelector(\".task-title\").textContent;\n    projectNames.forEach((projectName) => {\n        displayTheNewProject(projectName, projectButton);\n        \n    });\n    whenClickOnProjects();\n    renderTasks(projectObj,divOuter,taskTitle)\n}\n\n\nwhenClickTheNewProjectButton();\naddNewTasks();\nloadEverything();\n\n//# sourceURL=webpack://todo-list/./src/scripts/dom.js?\n}");

/***/ },

/***/ "./src/scripts/logic.js"
/*!******************************!*\
  !*** ./src/scripts/logic.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTheTodoObjectsArray: () => (/* binding */ createTheTodoObjectsArray),\n/* harmony export */   getProjectObject: () => (/* binding */ getProjectObject),\n/* harmony export */   removeProject: () => (/* binding */ removeProject),\n/* harmony export */   removeTodo: () => (/* binding */ removeTodo),\n/* harmony export */   toDos: () => (/* binding */ toDos)\n/* harmony export */ });\nconst todosArray = [];\nfunction toDos(title,description,dueDate,notes,priority) {\n    const id = crypto.randomUUID();\n    return{\n        id,title,description,dueDate,priority,notes,priority\n    }\n}\n\n// so for all the objects we are thinking of having an array\n\nconst projectObj = JSON.parse(localStorage.getItem(\"projects\")) || {};\n\nfunction createTheTodoObjectsArray(newTodo, projectName) {\n    if (projectName in projectObj) {\n        projectObj[projectName].push(newTodo);\n    } else {\n        projectObj[projectName] = [];\n        projectObj[projectName].push(newTodo);\n    }\n    saveProjects();\n    return projectObj;\n}\n\n\nfunction removeTodo(idToDelete, projectName) {\n    const todosInProject = projectObj[projectName];\n    const index = todosInProject.findIndex((todo) => todo.id === idToDelete);\n    todosInProject.splice(index, 1);\n    saveProjects();\n}\n\nfunction getProjectObject() {\n    return projectObj;\n}\n\n\nfunction removeProject(projectName) {\n    delete projectObj[projectName];\n    saveProjects();\n}\n\nfunction createProject(projectName) {\n    if (!(projectName in projectObj)) {\n        projectObj[projectName] = [];\n        saveProjects();\n    }\n}\n\nfunction saveProjects() {\n    localStorage.setItem(\"projects\", JSON.stringify(projectObj));\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/scripts/logic.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;