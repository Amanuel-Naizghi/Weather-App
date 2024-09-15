/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/JosefinSans-VariableFont_wght.ttf */ "./src/fonts/JosefinSans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/OpenSans_Condensed-Medium.ttf */ "./src/fonts/OpenSans_Condensed-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin:0;
    padding:0;
}
@font-face{
    font-family: 'myFont1';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(truetype);
}
@font-face{
    font-family: 'myFont2';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(truetype);
}
body{
    font-size:1rem;
    font-family:'myFont2';
    
}
.content>.header{
    display:flex;
    justify-content: center;
    align-items:center;
    padding:1rem 0;
    background:#3C3D37;
}
.content>.header>.img-container>img{
    width:100px;
    height:100px;
}
.content>.header>h2{
    font-family: 'myFont1';
    font-size:2rem;
    margin-left:0.8rem;
    color:whitesmoke;
}
.content>.body{
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#D8D9DA;
    padding-top:0.8rem;
}
.content>.body>.user-selection{
    font-size:1.2rem;
}
.content>.body>.user-selection form{
    display:flex;
    align-items:center;
    margin-bottom:0.1rem;
}
.content>.body>.user-selection form>label,.body>.user-selection>.set-temp>label{
    margin-right:0.5rem;
}
.content>.body>.user-selection form>input{
    border-radius: 10px;
    font-family:"myFont2";
    height:25px;
    padding-left:0.3rem;
    font-size:1rem;
}
.content>.body>.user-selection form>button,.body>.user-selection>.set-temp>button{
    font-size:1rem;
    font-family: 'myFont2';
    width:50px;
    background:#3C3D37;
    margin:0.5rem;
    border-radius: 5px;
    color:whitesmoke;
}
.content>.body>.user-selection form>button:hover,.body>.user-selection>.set-temp>button:hover{
    background: #686D76;
}
.content>.body>.user-selection>.set-temp{
    text-align:center;
}
.content>.body>.today-info{
    background: whitesmoke;
    width:700px;
    height:400px;
    margin-bottom:1.2rem;
    border-radius:10px;
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 2fr;
}
.body>.today-info>.top-left{
    display:flex;
    flex-direction:column;
    grid-row:1/2;
    grid-column: 1/2;
}
.body>.today-info>.top-left>.temp-container{
    background:orange;
    height:70px;
}
.body>.today-info>.top-left>.location-container{
    background:brown;
    display:flex;
    flex-direction:column;
    height:80px;
}
.body>.today-info>.top-right{
    display:flex;
    flex-direction:column;
    height:150px;
    background:purple;
    grid-row:1/2;
    grid-column:2/3;
}
.body>.today-info>.top-right>.img-container>img{
    width:80px;
    height:80px;
}
.content>.body>.today-info>.bottom{
    grid-row:2/3;
    grid-column:1/3;
    background:green;
    display:grid;
    grid-template-columns: repeat(5,1fr);
    gap:0.5rem;
}
.content>.body>.today-info>.bottom>div{
    display:flex;
    flex-direction:column;
}
.content>.body>.today-info>.bottom>div>.img-container>img{
    width:50px;
    height:50px;
}
.content>.body>.weekly-info{
    background:whitesmoke;
    width:700px;
    height:400px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
}
.content>.body>.weekly-info>div{
    display:flex;
    height:117px;
    justify-content: space-between;
}
.content>.body>.weekly-info .rain-percent-container{
    display:flex;
}
.content>.body>.weekly-info>div>.img-container>img{
    width:50px;
    height:50px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,4DAAmE;AACvE;AACA;IACI,sBAAsB;IACtB,4DAA+D;AACnE;AACA;IACI,cAAc;IACd,qBAAqB;;AAEzB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,cAAc;IACd,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,oCAAoC;IACpC,UAAU;AACd;AACA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;AACf","sourcesContent":["*{\n    margin:0;\n    padding:0;\n}\n@font-face{\n    font-family: 'myFont1';\n    src:url(./fonts/JosefinSans-VariableFont_wght.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont2';\n    src:url(./fonts/OpenSans_Condensed-Medium.ttf) format(truetype);\n}\nbody{\n    font-size:1rem;\n    font-family:'myFont2';\n    \n}\n.content>.header{\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    padding:1rem 0;\n    background:#3C3D37;\n}\n.content>.header>.img-container>img{\n    width:100px;\n    height:100px;\n}\n.content>.header>h2{\n    font-family: 'myFont1';\n    font-size:2rem;\n    margin-left:0.8rem;\n    color:whitesmoke;\n}\n.content>.body{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background:#D8D9DA;\n    padding-top:0.8rem;\n}\n.content>.body>.user-selection{\n    font-size:1.2rem;\n}\n.content>.body>.user-selection form{\n    display:flex;\n    align-items:center;\n    margin-bottom:0.1rem;\n}\n.content>.body>.user-selection form>label,.body>.user-selection>.set-temp>label{\n    margin-right:0.5rem;\n}\n.content>.body>.user-selection form>input{\n    border-radius: 10px;\n    font-family:\"myFont2\";\n    height:25px;\n    padding-left:0.3rem;\n    font-size:1rem;\n}\n.content>.body>.user-selection form>button,.body>.user-selection>.set-temp>button{\n    font-size:1rem;\n    font-family: 'myFont2';\n    width:50px;\n    background:#3C3D37;\n    margin:0.5rem;\n    border-radius: 5px;\n    color:whitesmoke;\n}\n.content>.body>.user-selection form>button:hover,.body>.user-selection>.set-temp>button:hover{\n    background: #686D76;\n}\n.content>.body>.user-selection>.set-temp{\n    text-align:center;\n}\n.content>.body>.today-info{\n    background: whitesmoke;\n    width:700px;\n    height:400px;\n    margin-bottom:1.2rem;\n    border-radius:10px;\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 2fr;\n}\n.body>.today-info>.top-left{\n    display:flex;\n    flex-direction:column;\n    grid-row:1/2;\n    grid-column: 1/2;\n}\n.body>.today-info>.top-left>.temp-container{\n    background:orange;\n    height:70px;\n}\n.body>.today-info>.top-left>.location-container{\n    background:brown;\n    display:flex;\n    flex-direction:column;\n    height:80px;\n}\n.body>.today-info>.top-right{\n    display:flex;\n    flex-direction:column;\n    height:150px;\n    background:purple;\n    grid-row:1/2;\n    grid-column:2/3;\n}\n.body>.today-info>.top-right>.img-container>img{\n    width:80px;\n    height:80px;\n}\n.content>.body>.today-info>.bottom{\n    grid-row:2/3;\n    grid-column:1/3;\n    background:green;\n    display:grid;\n    grid-template-columns: repeat(5,1fr);\n    gap:0.5rem;\n}\n.content>.body>.today-info>.bottom>div{\n    display:flex;\n    flex-direction:column;\n}\n.content>.body>.today-info>.bottom>div>.img-container>img{\n    width:50px;\n    height:50px;\n}\n.content>.body>.weekly-info{\n    background:whitesmoke;\n    width:700px;\n    height:400px;\n    border-radius:10px;\n    display:flex;\n    flex-direction:column;\n}\n.content>.body>.weekly-info>div{\n    display:flex;\n    height:117px;\n    justify-content: space-between;\n}\n.content>.body>.weekly-info .rain-percent-container{\n    display:flex;\n}\n.content>.body>.weekly-info>div>.img-container>img{\n    width:50px;\n    height:50px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCurrentScale: () => (/* binding */ checkCurrentScale),
/* harmony export */   clearPreviousContents: () => (/* binding */ clearPreviousContents),
/* harmony export */   convertToFahrenheit: () => (/* binding */ convertToFahrenheit),
/* harmony export */   importDataToDom: () => (/* binding */ importDataToDom),
/* harmony export */   loadHeaderImage: () => (/* binding */ loadHeaderImage)
/* harmony export */ });
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ "./src/fetch.js");
/* harmony import */ var _images_cloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cloudy.png */ "./src/images/cloudy.png");
/* harmony import */ var _images_overcast_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/overcast.png */ "./src/images/overcast.png");
/* harmony import */ var _images_partial_cloud_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/partial-cloud.png */ "./src/images/partial-cloud.png");
/* harmony import */ var _images_rainy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/rainy.png */ "./src/images/rainy.png");
/* harmony import */ var _images_snow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/snow.png */ "./src/images/snow.png");
/* harmony import */ var _images_sunny_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/sunny.png */ "./src/images/sunny.png");
/* harmony import */ var _images_night_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/night.png */ "./src/images/night.png");
/* harmony import */ var _images_water_drop_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/water-drop.png */ "./src/images/water-drop.png");










function loadHeaderImage(){
    const myWeatherIconContainer=document.querySelector('.header>.img-container');
    const myWeatherIcon=document.createElement('img');
    myWeatherIcon.src=_images_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;
    myWeatherIconContainer.appendChild(myWeatherIcon);
}

function loadContentImages(){
    let overcastIcon=document.createElement('img');
    let partialCloudIcon=document.createElement('img');
    let rainyIcon=document.createElement('img');
    let snowIcon=document.createElement('img');
    let sunnyIcon=document.createElement('img');
    let nightIcon=document.createElement('img');
    let dropIcon=document.createElement('img');

    overcastIcon.src=_images_overcast_png__WEBPACK_IMPORTED_MODULE_2__;
    partialCloudIcon.src=_images_partial_cloud_png__WEBPACK_IMPORTED_MODULE_3__;
    rainyIcon.src=_images_rainy_png__WEBPACK_IMPORTED_MODULE_4__;
    snowIcon.src=_images_snow_png__WEBPACK_IMPORTED_MODULE_5__;
    sunnyIcon.src=_images_sunny_png__WEBPACK_IMPORTED_MODULE_6__;
    nightIcon.src=_images_night_png__WEBPACK_IMPORTED_MODULE_7__;
    dropIcon.src=_images_water_drop_png__WEBPACK_IMPORTED_MODULE_8__;

    return {overcastIcon,partialCloudIcon,rainyIcon,snowIcon,sunnyIcon,nightIcon,dropIcon};
}

function importDataToDom(data){
    let topLeftTemp=document.querySelector('.top-left>.temp-container>.temp');
    let topLeftAddress=document.querySelector('.top-left>.location-container>.location');
    let topLeftDate=document.querySelector('.top-left>.location-container>.date');
    let topRightTime=document.querySelector('.top-right>.time');
    let topRightCondition=document.querySelector('.top-right>.condition');
    let topRightImage=document.querySelector('.top-right>.img-container');

    
    //The currentDay and currentDayMonthYear variables is getting the date, month and year in a convenient format
    let currentDay=(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(data.days[0].datetime).getDayName();
    let currentDayMonthYear=(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(data.days[0].datetime).getActualDayMonthYear();
    //myTopRightIcon variable contains the appropriate icon which matches with the current air condition
    let myTopRightIcon=loadIcon(data.currentConditions.conditions);

    topLeftTemp.textContent=`${data.currentConditions.temp} °C`;
    topLeftAddress.textContent=data.resolvedAddress;
    topLeftDate.textContent=`${currentDay}, ${currentDayMonthYear}`;
    topRightTime.textContent=`${(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.currentConditions.datetime).myNewTime} ${(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.currentConditions.datetime).timeIndicator}`;
    topRightCondition.textContent=data.currentConditions.conditions;
    topRightImage.appendChild(myTopRightIcon);

    let todayTempInfo=()=>{
        let todayInfoIndex=1;
        let shift=false;
        let bottomDivContainers=document.querySelectorAll('.today-info>.bottom>div');
        let currentTime=data.currentConditions.datetime;
        let index=(data.days[0].hours.findIndex(item=>item.datetime===currentTime));
        if(index===-1){
            console.log("Yes");
            index=(data.days[0].hours.findIndex(item=>item.datetime.slice(0,2)===currentTime.slice(0,2)))+2;
        }
        else{
            index+=2;
        }
        if(index>23){
            index=0;
            shift=true;
        }
        console.log(currentTime);
        console.log(index);//Just for checking the index of the time selected
        bottomDivContainers.forEach(()=>{
            let temperature=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`);
            let imgContainer=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`);
            let time=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`);
            let timeIndicator=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`);
            if(!shift&&index<=23){
                temperature.textContent=`${data.days[0].hours[index].temp} °C`;
                let conditionIcon=data.days[0].hours[index].icon;
                let myIcon=loadIcon(conditionIcon);
                imgContainer.appendChild(myIcon);
                time.textContent=(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.days[0].hours[index].datetime).myNewTime;
                timeIndicator.textContent=(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.days[0].hours[index].datetime).timeIndicator;
            }
            else{
                temperature.textContent=`${data.days[1].hours[index].temp} °C`;
                let conditionIcon=data.days[1].hours[index].icon;
                let myIcon=loadIcon(conditionIcon);
                imgContainer.appendChild(myIcon);
                time.textContent=data.days[1].hours[index].datetime;
                time.textContent=(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.days[1].hours[index].datetime).myNewTime;
                timeIndicator.textContent=(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.days[1].hours[index].datetime).timeIndicator;
            }
            index+=2;
            todayInfoIndex+=1;
            if(index>23){
                if(index-2===23){
                    index=1;
                }
                else{
                    index=0;
                }
                shift=true;
            }
        });
    }

    let weeklyTempInfo=()=>{
        let weeklyInfoIndex=1;
        let weeklyDivContainers=document.querySelectorAll('.weekly-info>div');

        weeklyDivContainers.forEach(()=>{
            let date=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`);
            let rainPercent=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`);
            let waterDropIconCont=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`);
            let conditionIconContainer=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`);
            let tempMin=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`);
            let tempMax=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`);

            let daysInfo=(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(data.days[weeklyInfoIndex].datetime).getDayName().slice(0,3);
            let daysAndMonthInfo=(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(data.days[weeklyInfoIndex].datetime).getActualDayMonth();
            date.textContent=`${daysInfo}, ${daysAndMonthInfo.slice(0,-6)}`;
            rainPercent.textContent=`${data.days[weeklyInfoIndex].precipprob} %`;
            waterDropIconCont.appendChild(loadContentImages().dropIcon);
            tempMin.textContent=data.days[weeklyInfoIndex].tempmin;
            tempMax.textContent=`/${data.days[weeklyInfoIndex].tempmax} °C`;
            
            let conditionIcon=loadIcon(data.days[weeklyInfoIndex].conditions);
            conditionIconContainer.appendChild(conditionIcon);

            weeklyInfoIndex+=1;
        })
    }

    console.log(data.days[0]);
    console.log(data.days[1]);
    console.log(data.days[2]);
    console.log(data.days[3]);
    todayTempInfo();
    weeklyTempInfo();
    
}

function loadIcon(conditionIcon){
    let myIcon;
    if(/Clear/i.test(conditionIcon)){
        console.log(conditionIcon);
        if(/night/i.test(conditionIcon)){
            myIcon=loadContentImages().nightIcon;
        }
        else{
            myIcon=loadContentImages().sunnyIcon;
        }  
    }
    else if(/Rain/i.test(conditionIcon)){
        myIcon=loadContentImages().rainyIcon;
    }
    else if(/partly-cloudy/i.test(conditionIcon)){
        if(/night/i.test(conditionIcon)){
            myIcon=loadContentImages().nightIcon;
        }
        else{
            myIcon=loadContentImages().partialCloudIcon;
        }  
    }
    else if(/Overcast/i.test(conditionIcon)||/Cloudy/i.test(conditionIcon)){
        myIcon=loadContentImages().overcastIcon;
    }
    else if(/Snow/i.test(conditionIcon)){
        myIcon=loadContentImages().snowIcon;
    }

    return myIcon;
}

function clearPreviousContents(){
    let topLeftTemp=document.querySelector('.top-left>.temp-container>.temp');
    let topLeftAddress=document.querySelector('.top-left>.location-container>.location');
    let topLeftDate=document.querySelector('.top-left>.location-container>.date');
    let topRightTime=document.querySelector('.top-right>.time');
    let topRightCondition=document.querySelector('.top-right>.condition');
    let topRightImage=document.querySelector('.top-right>.img-container');
    let bottomDivContainers=document.querySelectorAll('.today-info>.bottom>div');

    topLeftTemp.innerHTML='';
    topLeftAddress.textContent='';
    topLeftDate.innerHTML='';
    topRightTime.innerHTML='';
    topRightCondition.innerHTML='';
    topRightImage.innerHTML='';

    let todayInfoIndex=1;
    bottomDivContainers.forEach(()=>{
        let temperature=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`);
        let imgContainer=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`);
        let time=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`);
        let timeIndicator=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`);

        temperature.innerHTML='';
        imgContainer.innerHTML='';
        time.innerHtml='';
        timeIndicator.innerHtml='';

        todayInfoIndex+=1;
    });

    let weeklyInfoDivContainers=document.querySelectorAll('.weekly-info>div');
    let weeklyInfoIndex=1;

    weeklyInfoDivContainers.forEach(()=>{
        let date=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`);
        let rainPercent=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`);
        let waterDropIconCont=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`);
        let conditionIconContainer=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`);
        let tempMin=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`);
        let tempMax=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`);

        date.innerHTML='';
        rainPercent.innerHtml='';
        waterDropIconCont.innerHTML='';
        conditionIconContainer.innerHTML='';
        tempMin.innerHTML='';
        tempMax.innerHTML='';

        weeklyInfoIndex+=1;
    });

}

function checkCurrentScale(){
    let status=document.querySelector('.top-left>.temp-container>.temp').textContent.slice(-1);
    if(status==='C'){
        convertToFahrenheit();
    }
    else{
        const userInput=document.querySelector('#city').value;
        clearPreviousContents();
        (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(userInput);
    }
}

function convertToFahrenheit(){
    let topLeftTemp=document.querySelector('.top-left>.temp-container>.temp');
    let topLeftTempValue=topLeftTemp.textContent;
    let topLeftTempInNumber=Number(topLeftTempValue.substring(0,topLeftTempValue.length-3));  
    topLeftTemp.textContent=`${((topLeftTempInNumber*9/5)+32).toFixed(2)} °F`;

    let bottomDivContainers=document.querySelectorAll('.today-info>.bottom>div');
    let todayInfoIndex=1;
    bottomDivContainers.forEach(()=>{
        let bottomTemp=document.querySelector(`.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`);
        let bottomTempValue=bottomTemp.textContent;
        let bottomTempInNumber=Number(bottomTempValue.substring(0,bottomTempValue.length-3));
        bottomTemp.textContent=`${((bottomTempInNumber*9/5)+32).toFixed(2)} °F`;

        todayInfoIndex+=1;
    });

    let weeklyInfoDivContainers=document.querySelectorAll('.weekly-info>div');
    let weeklyInfoIndex=1;
    weeklyInfoDivContainers.forEach(()=>{
        let minTempCont=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .min`);
        let maxTempCont=document.querySelector(`.weekly-info>[data-index="${weeklyInfoIndex}"] .max`);
        let minTempValue=minTempCont.textContent;
        let maxTempValue=maxTempCont.textContent;

        let minTempInNumber=Number(minTempValue);
        let maxTempInNumber=Number(maxTempValue.substring(1,maxTempValue.length-3));

        minTempCont.textContent=`${((minTempInNumber*9/5)+32).toFixed(2)}`;
        maxTempCont.textContent=`/${((maxTempInNumber*9/5)+32).toFixed(2)} °F`;

        weeklyInfoIndex+=1;
    });
}




/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   getCurrentDayInfo: () => (/* binding */ getCurrentDayInfo),
/* harmony export */   timeFormatter: () => (/* binding */ timeFormatter)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


async function fetchData(city){
    try{
        let response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,{mode:'cors'});
        let data=await response.json();
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.importDataToDom)(data);
    }
    catch(err){

    }
}

function getCurrentDayInfo(dateInfo){
    let dayData=new Date(dateInfo);
    let day=dayData.getDate();
    let month=dayData.getMonth()+1;
    let year=dayData.getFullYear();

    let getActualDayMonthYear=()=>{
        const date=new Date(year,month-1,day);
        const options={year:'numeric',month:'long',day:'numeric'}
        return date.toLocaleString('en-US',options);
    };

    let getActualDayMonth=()=>{
        const date=new Date(year,month-1,day);
        const options={year:'numeric',month:'long',day:'numeric'}
        return date.toLocaleString('en-US',options);
    };

    let getDayName=()=>{
        const date=new Date(dateInfo);
        return date.toLocaleString('en-US',{weekday:'long'});
    };

    return{getDayName,getActualDayMonthYear,getActualDayMonth};
}

function timeFormatter(time){
    let myTime=time.slice(0,5);
    let myHour=myTime.slice(0,2);
    let myMinute=myTime.slice(3,5);
    let timeIndicator;

    if(myHour>12){
        myHour-=12;
        timeIndicator="Pm";
    }
    else if(myHour==='12'){
        timeIndicator='Pm';
    }
    else{
        timeIndicator='Am';
    }

    let myNewTime=`${myHour}:${myMinute}`;
    return {myNewTime,timeIndicator};
}




/***/ }),

/***/ "./src/fonts/JosefinSans-VariableFont_wght.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/JosefinSans-VariableFont_wght.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "613585db06f849ca7717.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans_Condensed-Medium.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/OpenSans_Condensed-Medium.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bbd4a90d400c77a2e76.ttf";

/***/ }),

/***/ "./src/images/cloudy.png":
/*!*******************************!*\
  !*** ./src/images/cloudy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f009e441a604361a2783.png";

/***/ }),

/***/ "./src/images/night.png":
/*!******************************!*\
  !*** ./src/images/night.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73464bf22b99cd9e9f77.png";

/***/ }),

/***/ "./src/images/overcast.png":
/*!*********************************!*\
  !*** ./src/images/overcast.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fc2d7e24f9b16140170.png";

/***/ }),

/***/ "./src/images/partial-cloud.png":
/*!**************************************!*\
  !*** ./src/images/partial-cloud.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20f0cc1d2fa7fabb49bb.png";

/***/ }),

/***/ "./src/images/rainy.png":
/*!******************************!*\
  !*** ./src/images/rainy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7610299be6da6fba0d64.png";

/***/ }),

/***/ "./src/images/snow.png":
/*!*****************************!*\
  !*** ./src/images/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9957456da0445490c376.png";

/***/ }),

/***/ "./src/images/sunny.png":
/*!******************************!*\
  !*** ./src/images/sunny.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b972dcf61eb381f03551.png";

/***/ }),

/***/ "./src/images/water-drop.png":
/*!***********************************!*\
  !*** ./src/images/water-drop.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03bc0409d105596860a6.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch.js */ "./src/fetch.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");




(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.loadHeaderImage)();
// console.log(timeFormatter('13:30:00'));

document.querySelector('#my-form').addEventListener('submit',()=>{
    const userInput=document.querySelector('#city').value;
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.clearPreviousContents)();
    (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(userInput);
})
document.querySelector('.set-temp>button').addEventListener('click',()=>{
    ;(0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.checkCurrentScale)();
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsMkJBQTJCLGVBQWUsZ0JBQWdCLEdBQUcsYUFBYSw2QkFBNkIsMEVBQTBFLEdBQUcsYUFBYSw2QkFBNkIsc0VBQXNFLEdBQUcsT0FBTyxxQkFBcUIsNEJBQTRC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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzhCO0FBQzhCOztBQUVqRix3REFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDhEQUFxQjtBQUN6QixJQUFJLG9EQUFTO0FBQ2IsQ0FBQztBQUNEO0FBQ0EsSUFBSSwyREFBaUI7QUFDckIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0pvc2VmaW5TYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3BlblNhbnNfQ29uZGVuc2VkLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Mic7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuYm9keXtcbiAgICBmb250LXNpemU6MXJlbTtcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XG4gICAgXG59XG4uY29udGVudD4uaGVhZGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgcGFkZGluZzoxcmVtIDA7XG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xufVxuLmNvbnRlbnQ+LmhlYWRlcj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xufVxuLmNvbnRlbnQ+LmhlYWRlcj5oMntcbiAgICBmb250LWZhbWlseTogJ215Rm9udDEnO1xuICAgIGZvbnQtc2l6ZToycmVtO1xuICAgIG1hcmdpbi1sZWZ0OjAuOHJlbTtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xufVxuLmNvbnRlbnQ+LmJvZHl7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xuICAgIHBhZGRpbmctdG9wOjAuOHJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbntcbiAgICBmb250LXNpemU6MS4ycmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm17XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOjAuMXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmxhYmVsLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+bGFiZWx7XG4gICAgbWFyZ2luLXJpZ2h0OjAuNXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6XCJteUZvbnQyXCI7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OjAuM3JlbTtcbiAgICBmb250LXNpemU6MXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmJ1dHRvbiwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmJ1dHRvbntcbiAgICBmb250LXNpemU6MXJlbTtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDInO1xuICAgIHdpZHRoOjUwcHg7XG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xuICAgIG1hcmdpbjowLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOndoaXRlc21va2U7XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5idXR0b246aG92ZXIsLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzY4NkQ3Njtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mb3tcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOjcwMHB4O1xuICAgIGhlaWdodDo0MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnR7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBncmlkLXJvdzoxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4udGVtcC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDpvcmFuZ2U7XG4gICAgaGVpZ2h0OjcwcHg7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOmJyb3duO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgaGVpZ2h0OjgwcHg7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgaGVpZ2h0OjE1MHB4O1xuICAgIGJhY2tncm91bmQ6cHVycGxlO1xuICAgIGdyaWQtcm93OjEvMjtcbiAgICBncmlkLWNvbHVtbjoyLzM7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi5pbWctY29udGFpbmVyPmltZ3tcbiAgICB3aWR0aDo4MHB4O1xuICAgIGhlaWdodDo4MHB4O1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbXtcbiAgICBncmlkLXJvdzoyLzM7XG4gICAgZ3JpZC1jb2x1bW46MS8zO1xuICAgIGJhY2tncm91bmQ6Z3JlZW47XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKTtcbiAgICBnYXA6MC41cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXZ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcbiAgICB3aWR0aDo1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZve1xuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcbiAgICB3aWR0aDo3MDBweDtcbiAgICBoZWlnaHQ6NDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBoZWlnaHQ6MTE3cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvIC5yYWluLXBlcmNlbnQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjUwcHg7XG4gICAgaGVpZ2h0OjUwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7QUFDYjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDREQUFtRTtBQUN2RTtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDREQUErRDtBQUNuRTtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcXG4gICAgc3JjOnVybCguL2ZvbnRzL0pvc2VmaW5TYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZikgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcXG4gICAgc3JjOnVybCguL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1NZWRpdW0udHRmKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5ib2R5e1xcbiAgICBmb250LXNpemU6MXJlbTtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udDInO1xcbiAgICBcXG59XFxuLmNvbnRlbnQ+LmhlYWRlcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBwYWRkaW5nOjFyZW0gMDtcXG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xcbn1cXG4uY29udGVudD4uaGVhZGVyPi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIGhlaWdodDoxMDBweDtcXG59XFxuLmNvbnRlbnQ+LmhlYWRlcj5oMntcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcXG4gICAgZm9udC1zaXplOjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OjAuOHJlbTtcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG59XFxuLmNvbnRlbnQ+LmJvZHl7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcXG4gICAgcGFkZGluZy10b3A6MC44cmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb257XFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3Jte1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTowLjFyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmxhYmVsLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+bGFiZWx7XFxuICAgIG1hcmdpbi1yaWdodDowLjVyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTpcXFwibXlGb250MlxcXCI7XFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6MC4zcmVtO1xcbiAgICBmb250LXNpemU6MXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+YnV0dG9uLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+YnV0dG9ue1xcbiAgICBmb250LXNpemU6MXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcXG4gICAgd2lkdGg6NTBweDtcXG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xcbiAgICBtYXJnaW46MC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmJ1dHRvbjpob3ZlciwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogIzY4NkQ3NjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcHtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZve1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDo3MDBweDtcXG4gICAgaGVpZ2h0OjQwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBncmlkLXJvdzoxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4udGVtcC1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQ6b3JhbmdlO1xcbiAgICBoZWlnaHQ6NzBweDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQ6YnJvd247XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBoZWlnaHQ6ODBweDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGhlaWdodDoxNTBweDtcXG4gICAgYmFja2dyb3VuZDpwdXJwbGU7XFxuICAgIGdyaWQtcm93OjEvMjtcXG4gICAgZ3JpZC1jb2x1bW46Mi8zO1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6ODBweDtcXG4gICAgaGVpZ2h0OjgwcHg7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b217XFxuICAgIGdyaWQtcm93OjIvMztcXG4gICAgZ3JpZC1jb2x1bW46MS8zO1xcbiAgICBiYWNrZ3JvdW5kOmdyZWVuO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKTtcXG4gICAgZ2FwOjAuNXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXZ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOjUwcHg7XFxuICAgIGhlaWdodDo1MHB4O1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm97XFxuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcXG4gICAgd2lkdGg6NzAwcHg7XFxuICAgIGhlaWdodDo0MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6MTE3cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvIC5yYWluLXBlcmNlbnQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDo1MHB4O1xcbiAgICBoZWlnaHQ6NTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtnZXRDdXJyZW50RGF5SW5mbyx0aW1lRm9ybWF0dGVyLGZldGNoRGF0YX0gZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi9pbWFnZXMvY2xvdWR5LnBuZyc7XG5pbXBvcnQgb3ZlcmNhc3QgZnJvbSAnLi9pbWFnZXMvb3ZlcmNhc3QucG5nJztcbmltcG9ydCBwYXJ0aWFsQ2xvdWQgZnJvbSAnLi9pbWFnZXMvcGFydGlhbC1jbG91ZC5wbmcnO1xuaW1wb3J0IHJhaW55IGZyb20gJy4vaW1hZ2VzL3JhaW55LnBuZyc7XG5pbXBvcnQgc25vdyBmcm9tICcuL2ltYWdlcy9zbm93LnBuZyc7XG5pbXBvcnQgc3VubnkgZnJvbSAnLi9pbWFnZXMvc3VubnkucG5nJztcbmltcG9ydCBuaWdodCBmcm9tICcuL2ltYWdlcy9uaWdodC5wbmcnO1xuaW1wb3J0IGRyb3AgZnJvbSAnLi9pbWFnZXMvd2F0ZXItZHJvcC5wbmcnO1xuXG5mdW5jdGlvbiBsb2FkSGVhZGVySW1hZ2UoKXtcbiAgICBjb25zdCBteVdlYXRoZXJJY29uQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXI+LmltZy1jb250YWluZXInKTtcbiAgICBjb25zdCBteVdlYXRoZXJJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG15V2VhdGhlckljb24uc3JjPXdlYXRoZXJJY29uO1xuICAgIG15V2VhdGhlckljb25Db250YWluZXIuYXBwZW5kQ2hpbGQobXlXZWF0aGVySWNvbik7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250ZW50SW1hZ2VzKCl7XG4gICAgbGV0IG92ZXJjYXN0SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgcGFydGlhbENsb3VkSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgcmFpbnlJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBzbm93SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgc3VubnlJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBuaWdodEljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGV0IGRyb3BJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgb3ZlcmNhc3RJY29uLnNyYz1vdmVyY2FzdDtcbiAgICBwYXJ0aWFsQ2xvdWRJY29uLnNyYz1wYXJ0aWFsQ2xvdWQ7XG4gICAgcmFpbnlJY29uLnNyYz1yYWlueTtcbiAgICBzbm93SWNvbi5zcmM9c25vdztcbiAgICBzdW5ueUljb24uc3JjPXN1bm55O1xuICAgIG5pZ2h0SWNvbi5zcmM9bmlnaHQ7XG4gICAgZHJvcEljb24uc3JjPWRyb3A7XG5cbiAgICByZXR1cm4ge292ZXJjYXN0SWNvbixwYXJ0aWFsQ2xvdWRJY29uLHJhaW55SWNvbixzbm93SWNvbixzdW5ueUljb24sbmlnaHRJY29uLGRyb3BJY29ufTtcbn1cblxuZnVuY3Rpb24gaW1wb3J0RGF0YVRvRG9tKGRhdGEpe1xuICAgIGxldCB0b3BMZWZ0VGVtcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1wJyk7XG4gICAgbGV0IHRvcExlZnRBZGRyZXNzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbicpO1xuICAgIGxldCB0b3BMZWZ0RGF0ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZScpO1xuICAgIGxldCB0b3BSaWdodFRpbWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1yaWdodD4udGltZScpO1xuICAgIGxldCB0b3BSaWdodENvbmRpdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi5jb25kaXRpb24nKTtcbiAgICBsZXQgdG9wUmlnaHRJbWFnZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi5pbWctY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICAvL1RoZSBjdXJyZW50RGF5IGFuZCBjdXJyZW50RGF5TW9udGhZZWFyIHZhcmlhYmxlcyBpcyBnZXR0aW5nIHRoZSBkYXRlLCBtb250aCBhbmQgeWVhciBpbiBhIGNvbnZlbmllbnQgZm9ybWF0XG4gICAgbGV0IGN1cnJlbnREYXk9Z2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzWzBdLmRhdGV0aW1lKS5nZXREYXlOYW1lKCk7XG4gICAgbGV0IGN1cnJlbnREYXlNb250aFllYXI9Z2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzWzBdLmRhdGV0aW1lKS5nZXRBY3R1YWxEYXlNb250aFllYXIoKTtcbiAgICAvL215VG9wUmlnaHRJY29uIHZhcmlhYmxlIGNvbnRhaW5zIHRoZSBhcHByb3ByaWF0ZSBpY29uIHdoaWNoIG1hdGNoZXMgd2l0aCB0aGUgY3VycmVudCBhaXIgY29uZGl0aW9uXG4gICAgbGV0IG15VG9wUmlnaHRJY29uPWxvYWRJY29uKGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyk7XG5cbiAgICB0b3BMZWZ0VGVtcC50ZXh0Q29udGVudD1gJHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXB9IMKwQ2A7XG4gICAgdG9wTGVmdEFkZHJlc3MudGV4dENvbnRlbnQ9ZGF0YS5yZXNvbHZlZEFkZHJlc3M7XG4gICAgdG9wTGVmdERhdGUudGV4dENvbnRlbnQ9YCR7Y3VycmVudERheX0sICR7Y3VycmVudERheU1vbnRoWWVhcn1gO1xuICAgIHRvcFJpZ2h0VGltZS50ZXh0Q29udGVudD1gJHt0aW1lRm9ybWF0dGVyKGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUpLm15TmV3VGltZX0gJHt0aW1lRm9ybWF0dGVyKGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUpLnRpbWVJbmRpY2F0b3J9YDtcbiAgICB0b3BSaWdodENvbmRpdGlvbi50ZXh0Q29udGVudD1kYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XG4gICAgdG9wUmlnaHRJbWFnZS5hcHBlbmRDaGlsZChteVRvcFJpZ2h0SWNvbik7XG5cbiAgICBsZXQgdG9kYXlUZW1wSW5mbz0oKT0+e1xuICAgICAgICBsZXQgdG9kYXlJbmZvSW5kZXg9MTtcbiAgICAgICAgbGV0IHNoaWZ0PWZhbHNlO1xuICAgICAgICBsZXQgYm90dG9tRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kYXktaW5mbz4uYm90dG9tPmRpdicpO1xuICAgICAgICBsZXQgY3VycmVudFRpbWU9ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZTtcbiAgICAgICAgbGV0IGluZGV4PShkYXRhLmRheXNbMF0uaG91cnMuZmluZEluZGV4KGl0ZW09Pml0ZW0uZGF0ZXRpbWU9PT1jdXJyZW50VGltZSkpO1xuICAgICAgICBpZihpbmRleD09PS0xKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWWVzXCIpO1xuICAgICAgICAgICAgaW5kZXg9KGRhdGEuZGF5c1swXS5ob3Vycy5maW5kSW5kZXgoaXRlbT0+aXRlbS5kYXRldGltZS5zbGljZSgwLDIpPT09Y3VycmVudFRpbWUuc2xpY2UoMCwyKSkpKzI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGluZGV4Kz0yO1xuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4PjIzKXtcbiAgICAgICAgICAgIGluZGV4PTA7XG4gICAgICAgICAgICBzaGlmdD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUaW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpOy8vSnVzdCBmb3IgY2hlY2tpbmcgdGhlIGluZGV4IG9mIHRoZSB0aW1lIHNlbGVjdGVkXG4gICAgICAgIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKT0+e1xuICAgICAgICAgICAgbGV0IHRlbXBlcmF0dXJlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGVtcGApO1xuICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgKTtcbiAgICAgICAgICAgIGxldCB0aW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZWApO1xuICAgICAgICAgICAgbGV0IHRpbWVJbmRpY2F0b3I9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50aW1lLWluZGljYXRvcmApO1xuICAgICAgICAgICAgaWYoIXNoaWZ0JiZpbmRleDw9MjMpe1xuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50PWAke2RhdGEuZGF5c1swXS5ob3Vyc1tpbmRleF0udGVtcH0gwrBDYDtcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uSWNvbj1kYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLmljb247XG4gICAgICAgICAgICAgICAgbGV0IG15SWNvbj1sb2FkSWNvbihjb25kaXRpb25JY29uKTtcbiAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiAgICAgICAgICAgICAgICB0aW1lLnRleHRDb250ZW50PXRpbWVGb3JtYXR0ZXIoZGF0YS5kYXlzWzBdLmhvdXJzW2luZGV4XS5kYXRldGltZSkubXlOZXdUaW1lO1xuICAgICAgICAgICAgICAgIHRpbWVJbmRpY2F0b3IudGV4dENvbnRlbnQ9dGltZUZvcm1hdHRlcihkYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLmRhdGV0aW1lKS50aW1lSW5kaWNhdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudD1gJHtkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLnRlbXB9IMKwQ2A7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkljb249ZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS5pY29uO1xuICAgICAgICAgICAgICAgIGxldCBteUljb249bG9hZEljb24oY29uZGl0aW9uSWNvbik7XG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgICAgICAgICAgICAgdGltZS50ZXh0Q29udGVudD1kYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmRhdGV0aW1lO1xuICAgICAgICAgICAgICAgIHRpbWUudGV4dENvbnRlbnQ9dGltZUZvcm1hdHRlcihkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmRhdGV0aW1lKS5teU5ld1RpbWU7XG4gICAgICAgICAgICAgICAgdGltZUluZGljYXRvci50ZXh0Q29udGVudD10aW1lRm9ybWF0dGVyKGRhdGEuZGF5c1sxXS5ob3Vyc1tpbmRleF0uZGF0ZXRpbWUpLnRpbWVJbmRpY2F0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleCs9MjtcbiAgICAgICAgICAgIHRvZGF5SW5mb0luZGV4Kz0xO1xuICAgICAgICAgICAgaWYoaW5kZXg+MjMpe1xuICAgICAgICAgICAgICAgIGlmKGluZGV4LTI9PT0yMyl7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaWZ0PXRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCB3ZWVrbHlUZW1wSW5mbz0oKT0+e1xuICAgICAgICBsZXQgd2Vla2x5SW5mb0luZGV4PTE7XG4gICAgICAgIGxldCB3ZWVrbHlEaXZDb250YWluZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrbHktaW5mbz5kaXYnKTtcblxuICAgICAgICB3ZWVrbHlEaXZDb250YWluZXJzLmZvckVhY2goKCk9PntcbiAgICAgICAgICAgIGxldCBkYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4uZGF0ZWApO1xuICAgICAgICAgICAgbGV0IHJhaW5QZXJjZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAucmFpbi1wZXJjZW50YCk7XG4gICAgICAgICAgICBsZXQgd2F0ZXJEcm9wSWNvbkNvbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC53YXRlci1kcm9wYCk7XG4gICAgICAgICAgICBsZXQgY29uZGl0aW9uSWNvbkNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgKTtcbiAgICAgICAgICAgIGxldCB0ZW1wTWluPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4udGVtcD4ubWluYCk7XG4gICAgICAgICAgICBsZXQgdGVtcE1heD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1heGApO1xuXG4gICAgICAgICAgICBsZXQgZGF5c0luZm89Z2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uZGF0ZXRpbWUpLmdldERheU5hbWUoKS5zbGljZSgwLDMpO1xuICAgICAgICAgICAgbGV0IGRheXNBbmRNb250aEluZm89Z2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uZGF0ZXRpbWUpLmdldEFjdHVhbERheU1vbnRoKCk7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50PWAke2RheXNJbmZvfSwgJHtkYXlzQW5kTW9udGhJbmZvLnNsaWNlKDAsLTYpfWA7XG4gICAgICAgICAgICByYWluUGVyY2VudC50ZXh0Q29udGVudD1gJHtkYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS5wcmVjaXBwcm9ifSAlYDtcbiAgICAgICAgICAgIHdhdGVyRHJvcEljb25Db250LmFwcGVuZENoaWxkKGxvYWRDb250ZW50SW1hZ2VzKCkuZHJvcEljb24pO1xuICAgICAgICAgICAgdGVtcE1pbi50ZXh0Q29udGVudD1kYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS50ZW1wbWluO1xuICAgICAgICAgICAgdGVtcE1heC50ZXh0Q29udGVudD1gLyR7ZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0udGVtcG1heH0gwrBDYDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkljb249bG9hZEljb24oZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uY29uZGl0aW9ucyk7XG4gICAgICAgICAgICBjb25kaXRpb25JY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb24pO1xuXG4gICAgICAgICAgICB3ZWVrbHlJbmZvSW5kZXgrPTE7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzBdKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRheXNbMV0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1syXSk7XG4gICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzNdKTtcbiAgICB0b2RheVRlbXBJbmZvKCk7XG4gICAgd2Vla2x5VGVtcEluZm8oKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gbG9hZEljb24oY29uZGl0aW9uSWNvbil7XG4gICAgbGV0IG15SWNvbjtcbiAgICBpZigvQ2xlYXIvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgY29uc29sZS5sb2coY29uZGl0aW9uSWNvbik7XG4gICAgICAgIGlmKC9uaWdodC9pLnRlc3QoY29uZGl0aW9uSWNvbikpe1xuICAgICAgICAgICAgbXlJY29uPWxvYWRDb250ZW50SW1hZ2VzKCkubmlnaHRJY29uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBteUljb249bG9hZENvbnRlbnRJbWFnZXMoKS5zdW5ueUljb247XG4gICAgICAgIH0gIFxuICAgIH1cbiAgICBlbHNlIGlmKC9SYWluL2kudGVzdChjb25kaXRpb25JY29uKSl7XG4gICAgICAgIG15SWNvbj1sb2FkQ29udGVudEltYWdlcygpLnJhaW55SWNvbjtcbiAgICB9XG4gICAgZWxzZSBpZigvcGFydGx5LWNsb3VkeS9pLnRlc3QoY29uZGl0aW9uSWNvbikpe1xuICAgICAgICBpZigvbmlnaHQvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgICAgIG15SWNvbj1sb2FkQ29udGVudEltYWdlcygpLm5pZ2h0SWNvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbXlJY29uPWxvYWRDb250ZW50SW1hZ2VzKCkucGFydGlhbENsb3VkSWNvbjtcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIGVsc2UgaWYoL092ZXJjYXN0L2kudGVzdChjb25kaXRpb25JY29uKXx8L0Nsb3VkeS9pLnRlc3QoY29uZGl0aW9uSWNvbikpe1xuICAgICAgICBteUljb249bG9hZENvbnRlbnRJbWFnZXMoKS5vdmVyY2FzdEljb247XG4gICAgfVxuICAgIGVsc2UgaWYoL1Nub3cvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgbXlJY29uPWxvYWRDb250ZW50SW1hZ2VzKCkuc25vd0ljb247XG4gICAgfVxuXG4gICAgcmV0dXJuIG15SWNvbjtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcmV2aW91c0NvbnRlbnRzKCl7XG4gICAgbGV0IHRvcExlZnRUZW1wPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKTtcbiAgICBsZXQgdG9wTGVmdEFkZHJlc3M9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uJyk7XG4gICAgbGV0IHRvcExlZnREYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRlJyk7XG4gICAgbGV0IHRvcFJpZ2h0VGltZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi50aW1lJyk7XG4gICAgbGV0IHRvcFJpZ2h0Q29uZGl0aW9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LmNvbmRpdGlvbicpO1xuICAgIGxldCB0b3BSaWdodEltYWdlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LmltZy1jb250YWluZXInKTtcbiAgICBsZXQgYm90dG9tRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kYXktaW5mbz4uYm90dG9tPmRpdicpO1xuXG4gICAgdG9wTGVmdFRlbXAuaW5uZXJIVE1MPScnO1xuICAgIHRvcExlZnRBZGRyZXNzLnRleHRDb250ZW50PScnO1xuICAgIHRvcExlZnREYXRlLmlubmVySFRNTD0nJztcbiAgICB0b3BSaWdodFRpbWUuaW5uZXJIVE1MPScnO1xuICAgIHRvcFJpZ2h0Q29uZGl0aW9uLmlubmVySFRNTD0nJztcbiAgICB0b3BSaWdodEltYWdlLmlubmVySFRNTD0nJztcblxuICAgIGxldCB0b2RheUluZm9JbmRleD0xO1xuICAgIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKT0+e1xuICAgICAgICBsZXQgdGVtcGVyYXR1cmU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50ZW1wYCk7XG4gICAgICAgIGxldCBpbWdDb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCk7XG4gICAgICAgIGxldCB0aW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZWApO1xuICAgICAgICBsZXQgdGltZUluZGljYXRvcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRpbWUtaW5kaWNhdG9yYCk7XG5cbiAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MPScnO1xuICAgICAgICBpbWdDb250YWluZXIuaW5uZXJIVE1MPScnO1xuICAgICAgICB0aW1lLmlubmVySHRtbD0nJztcbiAgICAgICAgdGltZUluZGljYXRvci5pbm5lckh0bWw9Jyc7XG5cbiAgICAgICAgdG9kYXlJbmZvSW5kZXgrPTE7XG4gICAgfSk7XG5cbiAgICBsZXQgd2Vla2x5SW5mb0RpdkNvbnRhaW5lcnM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS1pbmZvPmRpdicpO1xuICAgIGxldCB3ZWVrbHlJbmZvSW5kZXg9MTtcblxuICAgIHdlZWtseUluZm9EaXZDb250YWluZXJzLmZvckVhY2goKCk9PntcbiAgICAgICAgbGV0IGRhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi5kYXRlYCk7XG4gICAgICAgIGxldCByYWluUGVyY2VudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLnJhaW4tcGVyY2VudGApO1xuICAgICAgICBsZXQgd2F0ZXJEcm9wSWNvbkNvbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC53YXRlci1kcm9wYCk7XG4gICAgICAgIGxldCBjb25kaXRpb25JY29uQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4uaW1nLWNvbnRhaW5lcmApO1xuICAgICAgICBsZXQgdGVtcE1pbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1pbmApO1xuICAgICAgICBsZXQgdGVtcE1heD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1heGApO1xuXG4gICAgICAgIGRhdGUuaW5uZXJIVE1MPScnO1xuICAgICAgICByYWluUGVyY2VudC5pbm5lckh0bWw9Jyc7XG4gICAgICAgIHdhdGVyRHJvcEljb25Db250LmlubmVySFRNTD0nJztcbiAgICAgICAgY29uZGl0aW9uSWNvbkNvbnRhaW5lci5pbm5lckhUTUw9Jyc7XG4gICAgICAgIHRlbXBNaW4uaW5uZXJIVE1MPScnO1xuICAgICAgICB0ZW1wTWF4LmlubmVySFRNTD0nJztcblxuICAgICAgICB3ZWVrbHlJbmZvSW5kZXgrPTE7XG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gY2hlY2tDdXJyZW50U2NhbGUoKXtcbiAgICBsZXQgc3RhdHVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKS50ZXh0Q29udGVudC5zbGljZSgtMSk7XG4gICAgaWYoc3RhdHVzPT09J0MnKXtcbiAgICAgICAgY29udmVydFRvRmFocmVuaGVpdCgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjb25zdCB1c2VySW5wdXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcbiAgICAgICAgY2xlYXJQcmV2aW91c0NvbnRlbnRzKCk7XG4gICAgICAgIGZldGNoRGF0YSh1c2VySW5wdXQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29udmVydFRvRmFocmVuaGVpdCgpe1xuICAgIGxldCB0b3BMZWZ0VGVtcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1wJyk7XG4gICAgbGV0IHRvcExlZnRUZW1wVmFsdWU9dG9wTGVmdFRlbXAudGV4dENvbnRlbnQ7XG4gICAgbGV0IHRvcExlZnRUZW1wSW5OdW1iZXI9TnVtYmVyKHRvcExlZnRUZW1wVmFsdWUuc3Vic3RyaW5nKDAsdG9wTGVmdFRlbXBWYWx1ZS5sZW5ndGgtMykpOyAgXG4gICAgdG9wTGVmdFRlbXAudGV4dENvbnRlbnQ9YCR7KCh0b3BMZWZ0VGVtcEluTnVtYmVyKjkvNSkrMzIpLnRvRml4ZWQoMil9IMKwRmA7XG5cbiAgICBsZXQgYm90dG9tRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kYXktaW5mbz4uYm90dG9tPmRpdicpO1xuICAgIGxldCB0b2RheUluZm9JbmRleD0xO1xuICAgIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKT0+e1xuICAgICAgICBsZXQgYm90dG9tVGVtcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRlbXBgKTtcbiAgICAgICAgbGV0IGJvdHRvbVRlbXBWYWx1ZT1ib3R0b21UZW1wLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgYm90dG9tVGVtcEluTnVtYmVyPU51bWJlcihib3R0b21UZW1wVmFsdWUuc3Vic3RyaW5nKDAsYm90dG9tVGVtcFZhbHVlLmxlbmd0aC0zKSk7XG4gICAgICAgIGJvdHRvbVRlbXAudGV4dENvbnRlbnQ9YCR7KChib3R0b21UZW1wSW5OdW1iZXIqOS81KSszMikudG9GaXhlZCgyKX0gwrBGYDtcblxuICAgICAgICB0b2RheUluZm9JbmRleCs9MTtcbiAgICB9KTtcblxuICAgIGxldCB3ZWVrbHlJbmZvRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LWluZm8+ZGl2Jyk7XG4gICAgbGV0IHdlZWtseUluZm9JbmRleD0xO1xuICAgIHdlZWtseUluZm9EaXZDb250YWluZXJzLmZvckVhY2goKCk9PntcbiAgICAgICAgbGV0IG1pblRlbXBDb250PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAubWluYCk7XG4gICAgICAgIGxldCBtYXhUZW1wQ29udD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLm1heGApO1xuICAgICAgICBsZXQgbWluVGVtcFZhbHVlPW1pblRlbXBDb250LnRleHRDb250ZW50O1xuICAgICAgICBsZXQgbWF4VGVtcFZhbHVlPW1heFRlbXBDb250LnRleHRDb250ZW50O1xuXG4gICAgICAgIGxldCBtaW5UZW1wSW5OdW1iZXI9TnVtYmVyKG1pblRlbXBWYWx1ZSk7XG4gICAgICAgIGxldCBtYXhUZW1wSW5OdW1iZXI9TnVtYmVyKG1heFRlbXBWYWx1ZS5zdWJzdHJpbmcoMSxtYXhUZW1wVmFsdWUubGVuZ3RoLTMpKTtcblxuICAgICAgICBtaW5UZW1wQ29udC50ZXh0Q29udGVudD1gJHsoKG1pblRlbXBJbk51bWJlcio5LzUpKzMyKS50b0ZpeGVkKDIpfWA7XG4gICAgICAgIG1heFRlbXBDb250LnRleHRDb250ZW50PWAvJHsoKG1heFRlbXBJbk51bWJlcio5LzUpKzMyKS50b0ZpeGVkKDIpfSDCsEZgO1xuXG4gICAgICAgIHdlZWtseUluZm9JbmRleCs9MTtcbiAgICB9KTtcbn1cblxuXG5leHBvcnQge2ltcG9ydERhdGFUb0RvbSxsb2FkSGVhZGVySW1hZ2UsY2hlY2tDdXJyZW50U2NhbGUsY29udmVydFRvRmFocmVuaGVpdCxjbGVhclByZXZpb3VzQ29udGVudHN9OyIsImltcG9ydCB7aW1wb3J0RGF0YVRvRG9tfSBmcm9tICcuL0RPTS5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShjaXR5KXtcbiAgICB0cnl7XG4gICAgICAgIGxldCByZXNwb25zZT1hd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtlbmNvZGVVUklDb21wb25lbnQoY2l0eSl9P3VuaXRHcm91cD1tZXRyaWMma2V5PVZGUzJXV0xGV0FUWldEUDQzOTM3NFpUWlkmY29udGVudFR5cGU9anNvbmAse21vZGU6J2NvcnMnfSk7XG4gICAgICAgIGxldCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaW1wb3J0RGF0YVRvRG9tKGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF5SW5mbyhkYXRlSW5mbyl7XG4gICAgbGV0IGRheURhdGE9bmV3IERhdGUoZGF0ZUluZm8pO1xuICAgIGxldCBkYXk9ZGF5RGF0YS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoPWRheURhdGEuZ2V0TW9udGgoKSsxO1xuICAgIGxldCB5ZWFyPWRheURhdGEuZ2V0RnVsbFllYXIoKTtcblxuICAgIGxldCBnZXRBY3R1YWxEYXlNb250aFllYXI9KCk9PntcbiAgICAgICAgY29uc3QgZGF0ZT1uZXcgRGF0ZSh5ZWFyLG1vbnRoLTEsZGF5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucz17eWVhcjonbnVtZXJpYycsbW9udGg6J2xvbmcnLGRheTonbnVtZXJpYyd9XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGxldCBnZXRBY3R1YWxEYXlNb250aD0oKT0+e1xuICAgICAgICBjb25zdCBkYXRlPW5ldyBEYXRlKHllYXIsbW9udGgtMSxkYXkpO1xuICAgICAgICBjb25zdCBvcHRpb25zPXt5ZWFyOidudW1lcmljJyxtb250aDonbG9uZycsZGF5OidudW1lcmljJ31cbiAgICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyxvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgbGV0IGdldERheU5hbWU9KCk9PntcbiAgICAgICAgY29uc3QgZGF0ZT1uZXcgRGF0ZShkYXRlSW5mbyk7XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycse3dlZWtkYXk6J2xvbmcnfSk7XG4gICAgfTtcblxuICAgIHJldHVybntnZXREYXlOYW1lLGdldEFjdHVhbERheU1vbnRoWWVhcixnZXRBY3R1YWxEYXlNb250aH07XG59XG5cbmZ1bmN0aW9uIHRpbWVGb3JtYXR0ZXIodGltZSl7XG4gICAgbGV0IG15VGltZT10aW1lLnNsaWNlKDAsNSk7XG4gICAgbGV0IG15SG91cj1teVRpbWUuc2xpY2UoMCwyKTtcbiAgICBsZXQgbXlNaW51dGU9bXlUaW1lLnNsaWNlKDMsNSk7XG4gICAgbGV0IHRpbWVJbmRpY2F0b3I7XG5cbiAgICBpZihteUhvdXI+MTIpe1xuICAgICAgICBteUhvdXItPTEyO1xuICAgICAgICB0aW1lSW5kaWNhdG9yPVwiUG1cIjtcbiAgICB9XG4gICAgZWxzZSBpZihteUhvdXI9PT0nMTInKXtcbiAgICAgICAgdGltZUluZGljYXRvcj0nUG0nO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB0aW1lSW5kaWNhdG9yPSdBbSc7XG4gICAgfVxuXG4gICAgbGV0IG15TmV3VGltZT1gJHtteUhvdXJ9OiR7bXlNaW51dGV9YDtcbiAgICByZXR1cm4ge215TmV3VGltZSx0aW1lSW5kaWNhdG9yfTtcbn1cblxuXG5leHBvcnQge2ZldGNoRGF0YSxnZXRDdXJyZW50RGF5SW5mbyx0aW1lRm9ybWF0dGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtmZXRjaERhdGEsdGltZUZvcm1hdHRlcn0gZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQge2xvYWRIZWFkZXJJbWFnZSxjaGVja0N1cnJlbnRTY2FsZSxjbGVhclByZXZpb3VzQ29udGVudHN9IGZyb20gJy4vRE9NLmpzJztcblxubG9hZEhlYWRlckltYWdlKCk7XG4vLyBjb25zb2xlLmxvZyh0aW1lRm9ybWF0dGVyKCcxMzozMDowMCcpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCgpPT57XG4gICAgY29uc3QgdXNlcklucHV0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykudmFsdWU7XG4gICAgY2xlYXJQcmV2aW91c0NvbnRlbnRzKCk7XG4gICAgZmV0Y2hEYXRhKHVzZXJJbnB1dCk7XG59KVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC10ZW1wPmJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgIGNoZWNrQ3VycmVudFNjYWxlKCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==