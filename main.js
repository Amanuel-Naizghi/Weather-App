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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/new-font2.ttf */ "./src/fonts/new-font2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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
@font-face{
    font-family: 'myFont3';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format(truetype);
}
body{
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
    position:relative;
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
    width:650px;
    height:350px;
    margin-bottom:1.2rem;
    border-radius:10px;
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 2fr;
    padding:1rem 0;
}
.body>.today-info>.top-left{
    display:flex;
    flex-direction:column;
    grid-row:1/2;
    grid-column: 1/2;
    width:350px;
    padding-left:2.3rem;
}
.today-info>.top-left>.temp-container>.temp{
    font-size:4rem;
    font-weight:bold;
}
.body>.today-info>.top-left>.location-container{
    display:flex;
    flex-direction:column;
    height:80px;
}
.body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{
    font-size:1.5rem;
    color:#3C3D37;
}
.body>.today-info>.top-right{
    display:flex;
    flex-direction:column;
    height:150px;
    grid-row:1/2;
    grid-column:2/3;
}
.body>.today-info>.top-right>.time-img{
    display:flex;
}
.body>.today-info>.top-right>.time-img>.time{
    font-size:2rem;
    margin:2rem 0 0 1.5rem;
}
.body>.today-info>.top-right .img-container>img{
    width:120px;
    height:120px;
}
.body>.today-info>.top-right>.condition{
    font-size:1.5rem;
    padding-left:1.2rem;
    font-family:'myFont3';
    color:#3C3D37;
}
.content>.body>.today-info>.bottom{
    grid-row:2/3;
    grid-column:1/3;
    display:grid;
    grid-template-columns: repeat(5,1fr);
    gap:0.5rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
}
.content>.body>.today-info>.bottom>div{
    display:flex;
    flex-direction:column;
}
.content>.body>.today-info>.bottom>div>.temp{
    font-size:1.5rem;
    margin-bottom:0.5rem;
}
.content>.body>.today-info>.bottom>div>.time{
    font-size:1.2rem;
    padding-left:0.8rem;
}
.content>.body>.today-info>.bottom>div>.time-indicator{
    font-family:'myFont3';
    padding-left:1rem;
    color:#3C3D37;
}
.content>.body>.today-info>.bottom>div>.img-container>img{
    width:70px;
    height:70px;
    margin-bottom:0.5rem;
}
.content>.body>.weekly-info{
    background:whitesmoke;
    width:650px;
    height:350px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    padding:1.5rem 1.5rem;
    box-sizing: border-box;
    margin-bottom:2rem;
}
.content>.body>.weekly-info>div{
    display:flex;
    height:117px;
    justify-content: space-between;
    font-size:1.3rem;
}
.content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div .water-drop>img
,.body>.weekly-info>div>.temp{
    padding-top:0.5rem;
}
.content>.body>.weekly-info>div>.date,.weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container
,.content>.body>.weekly-info>div>.img-container{
    width:160px;
    text-align: center;
}
.body>.weekly-info>div>.rain-percent-container{
    display:flex;
    justify-content: center;
}
.content>.body>.weekly-info .rain-percent-container{
    display:flex;
}
.content>.body>.weekly-info>div>.img-container>img{
    width:50px;
    height:50px;
}
.content>.body>#error-dialog{
    padding:2rem;
    font-size:1.5rem;
    background:#D8D9DA;
    position:absolute;
    top:400px;
    left:300px;
}
.content>.body>#loading-dialog{
    padding:2rem 3rem;
    font-size:1.5rem;
    background:#D8D9DA;
    position:absolute;
    top:30%;
    left:40%;
    border:1px solid black;
}
footer{
    background-color:#3C3D37;
    color:#D8D9DA;
    font-family: 'myFont3';
    text-align: center;
}
footer>span{
    padding-left:1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,4DAAmE;AACvE;AACA;IACI,sBAAsB;IACtB,4DAA+D;AACnE;AACA;IACI,sBAAsB;IACtB,4DAA+C;AACnD;AACA;IACI,qBAAqB;;AAEzB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,cAAc;IACd,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,cAAc;AAClB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,oCAAoC;IACpC,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,UAAU;IACV,WAAW;IACX,oBAAoB;AACxB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;;IAEI,kBAAkB;AACtB;AACA;;IAEI,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;IACT,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;IACP,QAAQ;IACR,sBAAsB;AAC1B;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB","sourcesContent":["*{\n    margin:0;\n    padding:0;\n}\n@font-face{\n    font-family: 'myFont1';\n    src:url(./fonts/JosefinSans-VariableFont_wght.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont2';\n    src:url(./fonts/OpenSans_Condensed-Medium.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont3';\n    src:url(./fonts/new-font2.ttf) format(truetype);\n}\nbody{\n    font-family:'myFont2';\n    \n}\n.content>.header{\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    padding:1rem 0;\n    background:#3C3D37;\n}\n.content>.header>.img-container>img{\n    width:100px;\n    height:100px;\n}\n.content>.header>h2{\n    font-family: 'myFont1';\n    font-size:2rem;\n    margin-left:0.8rem;\n    color:whitesmoke;\n}\n.content>.body{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background:#D8D9DA;\n    padding-top:0.8rem;\n    position:relative;\n}\n.content>.body>.user-selection{\n    font-size:1.2rem;\n}\n.content>.body>.user-selection form{\n    display:flex;\n    align-items:center;\n    margin-bottom:0.1rem;\n}\n.content>.body>.user-selection form>label,.body>.user-selection>.set-temp>label{\n    margin-right:0.5rem;\n}\n.content>.body>.user-selection form>input{\n    border-radius: 10px;\n    font-family:\"myFont2\";\n    height:25px;\n    padding-left:0.3rem;\n    font-size:1rem;\n}\n.content>.body>.user-selection form>button,.body>.user-selection>.set-temp>button{\n    font-size:1rem;\n    font-family: 'myFont2';\n    width:50px;\n    background:#3C3D37;\n    margin:0.5rem;\n    border-radius: 5px;\n    color:whitesmoke;\n}\n.content>.body>.user-selection form>button:hover,.body>.user-selection>.set-temp>button:hover{\n    background: #686D76;\n}\n.content>.body>.user-selection>.set-temp{\n    text-align:center;\n}\n.content>.body>.today-info{\n    background: whitesmoke;\n    width:650px;\n    height:350px;\n    margin-bottom:1.2rem;\n    border-radius:10px;\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 2fr;\n    padding:1rem 0;\n}\n.body>.today-info>.top-left{\n    display:flex;\n    flex-direction:column;\n    grid-row:1/2;\n    grid-column: 1/2;\n    width:350px;\n    padding-left:2.3rem;\n}\n.today-info>.top-left>.temp-container>.temp{\n    font-size:4rem;\n    font-weight:bold;\n}\n.body>.today-info>.top-left>.location-container{\n    display:flex;\n    flex-direction:column;\n    height:80px;\n}\n.body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{\n    font-size:1.5rem;\n    color:#3C3D37;\n}\n.body>.today-info>.top-right{\n    display:flex;\n    flex-direction:column;\n    height:150px;\n    grid-row:1/2;\n    grid-column:2/3;\n}\n.body>.today-info>.top-right>.time-img{\n    display:flex;\n}\n.body>.today-info>.top-right>.time-img>.time{\n    font-size:2rem;\n    margin:2rem 0 0 1.5rem;\n}\n.body>.today-info>.top-right .img-container>img{\n    width:120px;\n    height:120px;\n}\n.body>.today-info>.top-right>.condition{\n    font-size:1.5rem;\n    padding-left:1.2rem;\n    font-family:'myFont3';\n    color:#3C3D37;\n}\n.content>.body>.today-info>.bottom{\n    grid-row:2/3;\n    grid-column:1/3;\n    display:grid;\n    grid-template-columns: repeat(5,1fr);\n    gap:0.5rem;\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n}\n.content>.body>.today-info>.bottom>div{\n    display:flex;\n    flex-direction:column;\n}\n.content>.body>.today-info>.bottom>div>.temp{\n    font-size:1.5rem;\n    margin-bottom:0.5rem;\n}\n.content>.body>.today-info>.bottom>div>.time{\n    font-size:1.2rem;\n    padding-left:0.8rem;\n}\n.content>.body>.today-info>.bottom>div>.time-indicator{\n    font-family:'myFont3';\n    padding-left:1rem;\n    color:#3C3D37;\n}\n.content>.body>.today-info>.bottom>div>.img-container>img{\n    width:70px;\n    height:70px;\n    margin-bottom:0.5rem;\n}\n.content>.body>.weekly-info{\n    background:whitesmoke;\n    width:650px;\n    height:350px;\n    border-radius:10px;\n    display:flex;\n    flex-direction:column;\n    padding:1.5rem 1.5rem;\n    box-sizing: border-box;\n    margin-bottom:2rem;\n}\n.content>.body>.weekly-info>div{\n    display:flex;\n    height:117px;\n    justify-content: space-between;\n    font-size:1.3rem;\n}\n.content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div .water-drop>img\n,.body>.weekly-info>div>.temp{\n    padding-top:0.5rem;\n}\n.content>.body>.weekly-info>div>.date,.weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container\n,.content>.body>.weekly-info>div>.img-container{\n    width:160px;\n    text-align: center;\n}\n.body>.weekly-info>div>.rain-percent-container{\n    display:flex;\n    justify-content: center;\n}\n.content>.body>.weekly-info .rain-percent-container{\n    display:flex;\n}\n.content>.body>.weekly-info>div>.img-container>img{\n    width:50px;\n    height:50px;\n}\n.content>.body>#error-dialog{\n    padding:2rem;\n    font-size:1.5rem;\n    background:#D8D9DA;\n    position:absolute;\n    top:400px;\n    left:300px;\n}\n.content>.body>#loading-dialog{\n    padding:2rem 3rem;\n    font-size:1.5rem;\n    background:#D8D9DA;\n    position:absolute;\n    top:30%;\n    left:40%;\n    border:1px solid black;\n}\nfooter{\n    background-color:#3C3D37;\n    color:#D8D9DA;\n    font-family: 'myFont3';\n    text-align: center;\n}\nfooter>span{\n    padding-left:1.5rem;\n}"],"sourceRoot":""}]);
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
    let topRightTime=document.querySelector('.top-right>.time-img>.time');
    let topRightCondition=document.querySelector('.top-right>.condition');
    let topRightImage=document.querySelector('.top-right>.time-img>.img-container');

    
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
    let topRightTime=document.querySelector('.top-right>.time-img>.time');
    let topRightCondition=document.querySelector('.top-right>.condition');
    let topRightImage=document.querySelector('.top-right>.time-img>.img-container');
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
        let loadingDialog=document.querySelector('#loading-dialog');
        loadingDialog.showModal();
        let response=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,{mode:'cors'});
        let data=await response.json();
        (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.importDataToDom)(data);
        loadingDialog.close();
    }
    catch(err){
        let errorDialog=document.querySelector('#error-dialog');
        let errorText=document.querySelector('#error-dialog>p');
        errorText.textContent=`${err}`;
        errorDialog.showModal();
        setTimeout(()=>{
            errorDialog.close();
        },3000);
        fetchData('Asmara');
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

/***/ "./src/fonts/new-font2.ttf":
/*!*********************************!*\
  !*** ./src/fonts/new-font2.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38b1e6579a4ae98f4318.ttf";

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
(0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)("Asmara");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlB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dHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSm9zZWZpblNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9PcGVuU2Fuc19Db25kZW5zZWQtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvbmV3LWZvbnQyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbn1cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Mic7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDMnO1xuICAgIHNyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDInO1xuICAgIFxufVxuLmNvbnRlbnQ+LmhlYWRlcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHBhZGRpbmc6MXJlbSAwO1xuICAgIGJhY2tncm91bmQ6IzNDM0QzNztcbn1cbi5jb250ZW50Pi5oZWFkZXI+LmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGhlaWdodDoxMDBweDtcbn1cbi5jb250ZW50Pi5oZWFkZXI+aDJ7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcbiAgICBmb250LXNpemU6MnJlbTtcbiAgICBtYXJnaW4tbGVmdDowLjhyZW07XG4gICAgY29sb3I6d2hpdGVzbW9rZTtcbn1cbi5jb250ZW50Pi5ib2R5e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcbiAgICBwYWRkaW5nLXRvcDowLjhyZW07XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb257XG4gICAgZm9udC1zaXplOjEuMnJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3Jte1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTowLjFyZW07XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5sYWJlbCwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmxhYmVse1xuICAgIG1hcmdpbi1yaWdodDowLjVyZW07XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5pbnB1dHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OlwibXlGb250MlwiO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHBhZGRpbmctbGVmdDowLjNyZW07XG4gICAgZm9udC1zaXplOjFyZW07XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5idXR0b24sLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5idXR0b257XG4gICAgZm9udC1zaXplOjFyZW07XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcbiAgICB3aWR0aDo1MHB4O1xuICAgIGJhY2tncm91bmQ6IzNDM0QzNztcbiAgICBtYXJnaW46MC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+YnV0dG9uOmhvdmVyLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+YnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICM2ODZENzY7XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1we1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm97XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICB3aWR0aDo2NTBweDtcbiAgICBoZWlnaHQ6MzUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICAgIHBhZGRpbmc6MXJlbSAwO1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgZ3JpZC1yb3c6MS8yO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgd2lkdGg6MzUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjIuM3JlbTtcbn1cbi50b2RheS1pbmZvPi50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXB7XG4gICAgZm9udC1zaXplOjRyZW07XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgaGVpZ2h0OjgwcHg7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24sLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGV7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBjb2xvcjojM0MzRDM3O1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGhlaWdodDoxNTBweDtcbiAgICBncmlkLXJvdzoxLzI7XG4gICAgZ3JpZC1jb2x1bW46Mi8zO1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWd7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWV7XG4gICAgZm9udC1zaXplOjJyZW07XG4gICAgbWFyZ2luOjJyZW0gMCAwIDEuNXJlbTtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQgLmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjEyMHB4O1xuICAgIGhlaWdodDoxMjBweDtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LmNvbmRpdGlvbntcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIHBhZGRpbmctbGVmdDoxLjJyZW07XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDMnO1xuICAgIGNvbG9yOiMzQzNEMzc7XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9te1xuICAgIGdyaWQtcm93OjIvMztcbiAgICBncmlkLWNvbHVtbjoxLzM7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKTtcbiAgICBnYXA6MC41cmVtO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGVtcHtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206MC41cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWV7XG4gICAgZm9udC1zaXplOjEuMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6MC44cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWUtaW5kaWNhdG9ye1xuICAgIGZvbnQtZmFtaWx5OidteUZvbnQzJztcbiAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICBjb2xvcjojM0MzRDM3O1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjcwcHg7XG4gICAgaGVpZ2h0OjcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTowLjVyZW07XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm97XG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOjY1MHB4O1xuICAgIGhlaWdodDozNTBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBwYWRkaW5nOjEuNXJlbSAxLjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW4tYm90dG9tOjJyZW07XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBoZWlnaHQ6MTE3cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZToxLjNyZW07XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLnJhaW4tcGVyY2VudCwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ1xuLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnRlbXB7XG4gICAgcGFkZGluZy10b3A6MC41cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwud2Vla2x5LWluZm8+ZGl2Pi50ZW1wLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJcbiwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVye1xuICAgIHdpZHRoOjE2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvIC5yYWluLXBlcmNlbnQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjUwcHg7XG4gICAgaGVpZ2h0OjUwcHg7XG59XG4uY29udGVudD4uYm9keT4jZXJyb3ItZGlhbG9ne1xuICAgIHBhZGRpbmc6MnJlbTtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6NDAwcHg7XG4gICAgbGVmdDozMDBweDtcbn1cbi5jb250ZW50Pi5ib2R5PiNsb2FkaW5nLWRpYWxvZ3tcbiAgICBwYWRkaW5nOjJyZW0gM3JlbTtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MzAlO1xuICAgIGxlZnQ6NDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG59XG5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0MzRDM3O1xuICAgIGNvbG9yOiNEOEQ5REE7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQzJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXI+c3BhbntcbiAgICBwYWRkaW5nLWxlZnQ6MS41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBw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QVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250MSc7XFxuICAgIHNyYzp1cmwoLi9mb250cy9Kb3NlZmluU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGYpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Mic7XFxuICAgIHNyYzp1cmwoLi9mb250cy9PcGVuU2Fuc19Db25kZW5zZWQtTWVkaXVtLnR0ZikgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQzJztcXG4gICAgc3JjOnVybCguL2ZvbnRzL25ldy1mb250Mi50dGYpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OidteUZvbnQyJztcXG4gICAgXFxufVxcbi5jb250ZW50Pi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgcGFkZGluZzoxcmVtIDA7XFxuICAgIGJhY2tncm91bmQ6IzNDM0QzNztcXG59XFxuLmNvbnRlbnQ+LmhlYWRlcj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBoZWlnaHQ6MTAwcHg7XFxufVxcbi5jb250ZW50Pi5oZWFkZXI+aDJ7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250MSc7XFxuICAgIGZvbnQtc2l6ZToycmVtO1xcbiAgICBtYXJnaW4tbGVmdDowLjhyZW07XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxufVxcbi5jb250ZW50Pi5ib2R5e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XFxuICAgIHBhZGRpbmctdG9wOjAuOHJlbTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbntcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm17XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOjAuMXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+bGFiZWwsLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5sYWJlbHtcXG4gICAgbWFyZ2luLXJpZ2h0OjAuNXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+aW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OlxcXCJteUZvbnQyXFxcIjtcXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIHBhZGRpbmctbGVmdDowLjNyZW07XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5idXR0b24sLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5idXR0b257XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDInO1xcbiAgICB3aWR0aDo1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiMzQzNEMzc7XFxuICAgIG1hcmdpbjowLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+YnV0dG9uOmhvdmVyLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+YnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjNjg2RDc2O1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1we1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm97XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICAgIHdpZHRoOjY1MHB4O1xcbiAgICBoZWlnaHQ6MzUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIHBhZGRpbmc6MXJlbSAwO1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBncmlkLXJvdzoxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHdpZHRoOjM1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6Mi4zcmVtO1xcbn1cXG4udG9kYXktaW5mbz4udG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1we1xcbiAgICBmb250LXNpemU6NHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBoZWlnaHQ6ODBweDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uLC50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRle1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBjb2xvcjojM0MzRDM3O1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgaGVpZ2h0OjE1MHB4O1xcbiAgICBncmlkLXJvdzoxLzI7XFxuICAgIGdyaWQtY29sdW1uOjIvMztcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWd7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWV7XFxuICAgIGZvbnQtc2l6ZToycmVtO1xcbiAgICBtYXJnaW46MnJlbSAwIDAgMS41cmVtO1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0IC5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGhlaWdodDoxMjBweDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4uY29uZGl0aW9ue1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6MS4ycmVtO1xcbiAgICBmb250LWZhbWlseTonbXlGb250Myc7XFxuICAgIGNvbG9yOiMzQzNEMzc7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b217XFxuICAgIGdyaWQtcm93OjIvMztcXG4gICAgZ3JpZC1jb2x1bW46MS8zO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKTtcXG4gICAgZ2FwOjAuNXJlbTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRlbXB7XFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206MC41cmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZXtcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OjAuOHJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWUtaW5kaWNhdG9ye1xcbiAgICBmb250LWZhbWlseTonbXlGb250Myc7XFxuICAgIHBhZGRpbmctbGVmdDoxcmVtO1xcbiAgICBjb2xvcjojM0MzRDM3O1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOjcwcHg7XFxuICAgIGhlaWdodDo3MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjAuNXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZve1xcbiAgICBiYWNrZ3JvdW5kOndoaXRlc21va2U7XFxuICAgIHdpZHRoOjY1MHB4O1xcbiAgICBoZWlnaHQ6MzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIHBhZGRpbmc6MS41cmVtIDEuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLWJvdHRvbToycmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDoxMTdweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6MS4zcmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLnJhaW4tcGVyY2VudCwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ1xcbiwuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xcbiAgICBwYWRkaW5nLXRvcDowLjVyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGUsLndlZWtseS1pbmZvPmRpdj4udGVtcCwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5yYWluLXBlcmNlbnQtY29udGFpbmVyXFxuLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXJ7XFxuICAgIHdpZHRoOjE2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbyAucmFpbi1wZXJjZW50LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6NTBweDtcXG4gICAgaGVpZ2h0OjUwcHg7XFxufVxcbi5jb250ZW50Pi5ib2R5PiNlcnJvci1kaWFsb2d7XFxuICAgIHBhZGRpbmc6MnJlbTtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjQwMHB4O1xcbiAgICBsZWZ0OjMwMHB4O1xcbn1cXG4uY29udGVudD4uYm9keT4jbG9hZGluZy1kaWFsb2d7XFxuICAgIHBhZGRpbmc6MnJlbSAzcmVtO1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6MzAlO1xcbiAgICBsZWZ0OjQwJTtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG59XFxuZm9vdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQzNEMzc7XFxuICAgIGNvbG9yOiNEOEQ5REE7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Myc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9vdGVyPnNwYW57XFxuICAgIHBhZGRpbmctbGVmdDoxLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7Z2V0Q3VycmVudERheUluZm8sdGltZUZvcm1hdHRlcixmZXRjaERhdGF9IGZyb20gJy4vZmV0Y2guanMnO1xuaW1wb3J0IHdlYXRoZXJJY29uIGZyb20gJy4vaW1hZ2VzL2Nsb3VkeS5wbmcnO1xuaW1wb3J0IG92ZXJjYXN0IGZyb20gJy4vaW1hZ2VzL292ZXJjYXN0LnBuZyc7XG5pbXBvcnQgcGFydGlhbENsb3VkIGZyb20gJy4vaW1hZ2VzL3BhcnRpYWwtY2xvdWQucG5nJztcbmltcG9ydCByYWlueSBmcm9tICcuL2ltYWdlcy9yYWlueS5wbmcnO1xuaW1wb3J0IHNub3cgZnJvbSAnLi9pbWFnZXMvc25vdy5wbmcnO1xuaW1wb3J0IHN1bm55IGZyb20gJy4vaW1hZ2VzL3N1bm55LnBuZyc7XG5pbXBvcnQgbmlnaHQgZnJvbSAnLi9pbWFnZXMvbmlnaHQucG5nJztcbmltcG9ydCBkcm9wIGZyb20gJy4vaW1hZ2VzL3dhdGVyLWRyb3AucG5nJztcblxuZnVuY3Rpb24gbG9hZEhlYWRlckltYWdlKCl7XG4gICAgY29uc3QgbXlXZWF0aGVySWNvbkNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyPi5pbWctY29udGFpbmVyJyk7XG4gICAgY29uc3QgbXlXZWF0aGVySWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBteVdlYXRoZXJJY29uLnNyYz13ZWF0aGVySWNvbjtcbiAgICBteVdlYXRoZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKG15V2VhdGhlckljb24pO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGVudEltYWdlcygpe1xuICAgIGxldCBvdmVyY2FzdEljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGV0IHBhcnRpYWxDbG91ZEljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGV0IHJhaW55SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgc25vd0ljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGV0IHN1bm55SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgbmlnaHRJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBkcm9wSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIG92ZXJjYXN0SWNvbi5zcmM9b3ZlcmNhc3Q7XG4gICAgcGFydGlhbENsb3VkSWNvbi5zcmM9cGFydGlhbENsb3VkO1xuICAgIHJhaW55SWNvbi5zcmM9cmFpbnk7XG4gICAgc25vd0ljb24uc3JjPXNub3c7XG4gICAgc3VubnlJY29uLnNyYz1zdW5ueTtcbiAgICBuaWdodEljb24uc3JjPW5pZ2h0O1xuICAgIGRyb3BJY29uLnNyYz1kcm9wO1xuXG4gICAgcmV0dXJuIHtvdmVyY2FzdEljb24scGFydGlhbENsb3VkSWNvbixyYWlueUljb24sc25vd0ljb24sc3VubnlJY29uLG5pZ2h0SWNvbixkcm9wSWNvbn07XG59XG5cbmZ1bmN0aW9uIGltcG9ydERhdGFUb0RvbShkYXRhKXtcbiAgICBsZXQgdG9wTGVmdFRlbXA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcCcpO1xuICAgIGxldCB0b3BMZWZ0QWRkcmVzcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24nKTtcbiAgICBsZXQgdG9wTGVmdERhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGUnKTtcbiAgICBsZXQgdG9wUmlnaHRUaW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1lJyk7XG4gICAgbGV0IHRvcFJpZ2h0Q29uZGl0aW9uPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LmNvbmRpdGlvbicpO1xuICAgIGxldCB0b3BSaWdodEltYWdlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LnRpbWUtaW1nPi5pbWctY29udGFpbmVyJyk7XG5cbiAgICBcbiAgICAvL1RoZSBjdXJyZW50RGF5IGFuZCBjdXJyZW50RGF5TW9udGhZZWFyIHZhcmlhYmxlcyBpcyBnZXR0aW5nIHRoZSBkYXRlLCBtb250aCBhbmQgeWVhciBpbiBhIGNvbnZlbmllbnQgZm9ybWF0XG4gICAgbGV0IGN1cnJlbnREYXk9Z2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzWzBdLmRhdGV0aW1lKS5nZXREYXlOYW1lKCk7XG4gICAgbGV0IGN1cnJlbnREYXlNb250aFllYXI9Z2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzWzBdLmRhdGV0aW1lKS5nZXRBY3R1YWxEYXlNb250aFllYXIoKTtcbiAgICAvL215VG9wUmlnaHRJY29uIHZhcmlhYmxlIGNvbnRhaW5zIHRoZSBhcHByb3ByaWF0ZSBpY29uIHdoaWNoIG1hdGNoZXMgd2l0aCB0aGUgY3VycmVudCBhaXIgY29uZGl0aW9uXG4gICAgbGV0IG15VG9wUmlnaHRJY29uPWxvYWRJY29uKGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyk7XG5cbiAgICB0b3BMZWZ0VGVtcC50ZXh0Q29udGVudD1gJHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXB9IMKwQ2A7XG4gICAgdG9wTGVmdEFkZHJlc3MudGV4dENvbnRlbnQ9ZGF0YS5yZXNvbHZlZEFkZHJlc3M7XG4gICAgdG9wTGVmdERhdGUudGV4dENvbnRlbnQ9YCR7Y3VycmVudERheX0sICR7Y3VycmVudERheU1vbnRoWWVhcn1gO1xuICAgIHRvcFJpZ2h0VGltZS50ZXh0Q29udGVudD1gJHt0aW1lRm9ybWF0dGVyKGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUpLm15TmV3VGltZX0gJHt0aW1lRm9ybWF0dGVyKGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUpLnRpbWVJbmRpY2F0b3J9YDtcbiAgICB0b3BSaWdodENvbmRpdGlvbi50ZXh0Q29udGVudD1kYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XG4gICAgdG9wUmlnaHRJbWFnZS5hcHBlbmRDaGlsZChteVRvcFJpZ2h0SWNvbik7XG5cbiAgICBsZXQgdG9kYXlUZW1wSW5mbz0oKT0+e1xuICAgICAgICBsZXQgdG9kYXlJbmZvSW5kZXg9MTtcbiAgICAgICAgbGV0IHNoaWZ0PWZhbHNlO1xuICAgICAgICBsZXQgYm90dG9tRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kYXktaW5mbz4uYm90dG9tPmRpdicpO1xuICAgICAgICBsZXQgY3VycmVudFRpbWU9ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZTtcbiAgICAgICAgbGV0IGluZGV4PShkYXRhLmRheXNbMF0uaG91cnMuZmluZEluZGV4KGl0ZW09Pml0ZW0uZGF0ZXRpbWU9PT1jdXJyZW50VGltZSkpO1xuICAgICAgICBpZihpbmRleD09PS0xKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWWVzXCIpO1xuICAgICAgICAgICAgaW5kZXg9KGRhdGEuZGF5c1swXS5ob3Vycy5maW5kSW5kZXgoaXRlbT0+aXRlbS5kYXRldGltZS5zbGljZSgwLDIpPT09Y3VycmVudFRpbWUuc2xpY2UoMCwyKSkpKzI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGluZGV4Kz0yO1xuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4PjIzKXtcbiAgICAgICAgICAgIGluZGV4PTA7XG4gICAgICAgICAgICBzaGlmdD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUaW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpOy8vSnVzdCBmb3IgY2hlY2tpbmcgdGhlIGluZGV4IG9mIHRoZSB0aW1lIHNlbGVjdGVkXG4gICAgICAgIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKT0+e1xuICAgICAgICAgICAgbGV0IHRlbXBlcmF0dXJlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGVtcGApO1xuICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgKTtcbiAgICAgICAgICAgIGxldCB0aW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZWApO1xuICAgICAgICAgICAgbGV0IHRpbWVJbmRpY2F0b3I9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50aW1lLWluZGljYXRvcmApO1xuICAgICAgICAgICAgaWYoIXNoaWZ0JiZpbmRleDw9MjMpe1xuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50PWAke2RhdGEuZGF5c1swXS5ob3Vyc1tpbmRleF0udGVtcH0gwrBDYDtcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uSWNvbj1kYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLmljb247XG4gICAgICAgICAgICAgICAgbGV0IG15SWNvbj1sb2FkSWNvbihjb25kaXRpb25JY29uKTtcbiAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiAgICAgICAgICAgICAgICB0aW1lLnRleHRDb250ZW50PXRpbWVGb3JtYXR0ZXIoZGF0YS5kYXlzWzBdLmhvdXJzW2luZGV4XS5kYXRldGltZSkubXlOZXdUaW1lO1xuICAgICAgICAgICAgICAgIHRpbWVJbmRpY2F0b3IudGV4dENvbnRlbnQ9dGltZUZvcm1hdHRlcihkYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLmRhdGV0aW1lKS50aW1lSW5kaWNhdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudD1gJHtkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLnRlbXB9IMKwQ2A7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkljb249ZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS5pY29uO1xuICAgICAgICAgICAgICAgIGxldCBteUljb249bG9hZEljb24oY29uZGl0aW9uSWNvbik7XG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgICAgICAgICAgICAgdGltZS50ZXh0Q29udGVudD1kYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmRhdGV0aW1lO1xuICAgICAgICAgICAgICAgIHRpbWUudGV4dENvbnRlbnQ9dGltZUZvcm1hdHRlcihkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmRhdGV0aW1lKS5teU5ld1RpbWU7XG4gICAgICAgICAgICAgICAgdGltZUluZGljYXRvci50ZXh0Q29udGVudD10aW1lRm9ybWF0dGVyKGRhdGEuZGF5c1sxXS5ob3Vyc1tpbmRleF0uZGF0ZXRpbWUpLnRpbWVJbmRpY2F0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRleCs9MjtcbiAgICAgICAgICAgIHRvZGF5SW5mb0luZGV4Kz0xO1xuICAgICAgICAgICAgaWYoaW5kZXg+MjMpe1xuICAgICAgICAgICAgICAgIGlmKGluZGV4LTI9PT0yMyl7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNoaWZ0PXRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCB3ZWVrbHlUZW1wSW5mbz0oKT0+e1xuICAgICAgICBsZXQgd2Vla2x5SW5mb0luZGV4PTE7XG4gICAgICAgIGxldCB3ZWVrbHlEaXZDb250YWluZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrbHktaW5mbz5kaXYnKTtcblxuICAgICAgICB3ZWVrbHlEaXZDb250YWluZXJzLmZvckVhY2goKCk9PntcbiAgICAgICAgICAgIGxldCBkYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4uZGF0ZWApO1xuICAgICAgICAgICAgbGV0IHJhaW5QZXJjZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAucmFpbi1wZXJjZW50YCk7XG4gICAgICAgICAgICBsZXQgd2F0ZXJEcm9wSWNvbkNvbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC53YXRlci1kcm9wYCk7XG4gICAgICAgICAgICBsZXQgY29uZGl0aW9uSWNvbkNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgKTtcbiAgICAgICAgICAgIGxldCB0ZW1wTWluPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4udGVtcD4ubWluYCk7XG4gICAgICAgICAgICBsZXQgdGVtcE1heD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1heGApO1xuXG4gICAgICAgICAgICBsZXQgZGF5c0luZm89Z2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uZGF0ZXRpbWUpLmdldERheU5hbWUoKS5zbGljZSgwLDMpO1xuICAgICAgICAgICAgbGV0IGRheXNBbmRNb250aEluZm89Z2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uZGF0ZXRpbWUpLmdldEFjdHVhbERheU1vbnRoKCk7XG4gICAgICAgICAgICBkYXRlLnRleHRDb250ZW50PWAke2RheXNJbmZvfSwgJHtkYXlzQW5kTW9udGhJbmZvLnNsaWNlKDAsLTYpfWA7XG4gICAgICAgICAgICByYWluUGVyY2VudC50ZXh0Q29udGVudD1gJHtkYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS5wcmVjaXBwcm9ifSAlYDtcbiAgICAgICAgICAgIHdhdGVyRHJvcEljb25Db250LmFwcGVuZENoaWxkKGxvYWRDb250ZW50SW1hZ2VzKCkuZHJvcEljb24pO1xuICAgICAgICAgICAgdGVtcE1pbi50ZXh0Q29udGVudD1kYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS50ZW1wbWluO1xuICAgICAgICAgICAgdGVtcE1heC50ZXh0Q29udGVudD1gLyR7ZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0udGVtcG1heH0gwrBDYDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkljb249bG9hZEljb24oZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uY29uZGl0aW9ucyk7XG4gICAgICAgICAgICBjb25kaXRpb25JY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb24pO1xuXG4gICAgICAgICAgICB3ZWVrbHlJbmZvSW5kZXgrPTE7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzBdKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRheXNbMV0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1syXSk7XG4gICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzNdKTtcbiAgICB0b2RheVRlbXBJbmZvKCk7XG4gICAgd2Vla2x5VGVtcEluZm8oKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gbG9hZEljb24oY29uZGl0aW9uSWNvbil7XG4gICAgbGV0IG15SWNvbjtcbiAgICBpZigvQ2xlYXIvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgY29uc29sZS5sb2coY29uZGl0aW9uSWNvbik7XG4gICAgICAgIGlmKC9uaWdodC9pLnRlc3QoY29uZGl0aW9uSWNvbikpe1xuICAgICAgICAgICAgbXlJY29uPWxvYWRDb250ZW50SW1hZ2VzKCkubmlnaHRJY29uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBteUljb249bG9hZENvbnRlbnRJbWFnZXMoKS5zdW5ueUljb247XG4gICAgICAgIH0gIFxuICAgIH1cbiAgICBlbHNlIGlmKC9SYWluL2kudGVzdChjb25kaXRpb25JY29uKSl7XG4gICAgICAgIG15SWNvbj1sb2FkQ29udGVudEltYWdlcygpLnJhaW55SWNvbjtcbiAgICB9XG4gICAgZWxzZSBpZigvcGFydGx5LWNsb3VkeS9pLnRlc3QoY29uZGl0aW9uSWNvbikpe1xuICAgICAgICBpZigvbmlnaHQvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgICAgIG15SWNvbj1sb2FkQ29udGVudEltYWdlcygpLm5pZ2h0SWNvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbXlJY29uPWxvYWRDb250ZW50SW1hZ2VzKCkucGFydGlhbENsb3VkSWNvbjtcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIGVsc2UgaWYoL092ZXJjYXN0L2kudGVzdChjb25kaXRpb25JY29uKXx8L0Nsb3VkeS9pLnRlc3QoY29uZGl0aW9uSWNvbikpe1xuICAgICAgICBteUljb249bG9hZENvbnRlbnRJbWFnZXMoKS5vdmVyY2FzdEljb247XG4gICAgfVxuICAgIGVsc2UgaWYoL1Nub3cvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgbXlJY29uPWxvYWRDb250ZW50SW1hZ2VzKCkuc25vd0ljb247XG4gICAgfVxuXG4gICAgcmV0dXJuIG15SWNvbjtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcmV2aW91c0NvbnRlbnRzKCl7XG4gICAgbGV0IHRvcExlZnRUZW1wPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKTtcbiAgICBsZXQgdG9wTGVmdEFkZHJlc3M9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uJyk7XG4gICAgbGV0IHRvcExlZnREYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRlJyk7XG4gICAgbGV0IHRvcFJpZ2h0VGltZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZScpO1xuICAgIGxldCB0b3BSaWdodENvbmRpdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi5jb25kaXRpb24nKTtcbiAgICBsZXQgdG9wUmlnaHRJbWFnZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi50aW1lLWltZz4uaW1nLWNvbnRhaW5lcicpO1xuICAgIGxldCBib3R0b21EaXZDb250YWluZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RheS1pbmZvPi5ib3R0b20+ZGl2Jyk7XG5cbiAgICB0b3BMZWZ0VGVtcC5pbm5lckhUTUw9Jyc7XG4gICAgdG9wTGVmdEFkZHJlc3MudGV4dENvbnRlbnQ9Jyc7XG4gICAgdG9wTGVmdERhdGUuaW5uZXJIVE1MPScnO1xuICAgIHRvcFJpZ2h0VGltZS5pbm5lckhUTUw9Jyc7XG4gICAgdG9wUmlnaHRDb25kaXRpb24uaW5uZXJIVE1MPScnO1xuICAgIHRvcFJpZ2h0SW1hZ2UuaW5uZXJIVE1MPScnO1xuXG4gICAgbGV0IHRvZGF5SW5mb0luZGV4PTE7XG4gICAgYm90dG9tRGl2Q29udGFpbmVycy5mb3JFYWNoKCgpPT57XG4gICAgICAgIGxldCB0ZW1wZXJhdHVyZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRlbXBgKTtcbiAgICAgICAgbGV0IGltZ0NvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgKTtcbiAgICAgICAgbGV0IHRpbWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50aW1lYCk7XG4gICAgICAgIGxldCB0aW1lSW5kaWNhdG9yPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZS1pbmRpY2F0b3JgKTtcblxuICAgICAgICB0ZW1wZXJhdHVyZS5pbm5lckhUTUw9Jyc7XG4gICAgICAgIGltZ0NvbnRhaW5lci5pbm5lckhUTUw9Jyc7XG4gICAgICAgIHRpbWUuaW5uZXJIdG1sPScnO1xuICAgICAgICB0aW1lSW5kaWNhdG9yLmlubmVySHRtbD0nJztcblxuICAgICAgICB0b2RheUluZm9JbmRleCs9MTtcbiAgICB9KTtcblxuICAgIGxldCB3ZWVrbHlJbmZvRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LWluZm8+ZGl2Jyk7XG4gICAgbGV0IHdlZWtseUluZm9JbmRleD0xO1xuXG4gICAgd2Vla2x5SW5mb0RpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKT0+e1xuICAgICAgICBsZXQgZGF0ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LmRhdGVgKTtcbiAgICAgICAgbGV0IHJhaW5QZXJjZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAucmFpbi1wZXJjZW50YCk7XG4gICAgICAgIGxldCB3YXRlckRyb3BJY29uQ29udD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLndhdGVyLWRyb3BgKTtcbiAgICAgICAgbGV0IGNvbmRpdGlvbkljb25Db250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCk7XG4gICAgICAgIGxldCB0ZW1wTWluPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4udGVtcD4ubWluYCk7XG4gICAgICAgIGxldCB0ZW1wTWF4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4udGVtcD4ubWF4YCk7XG5cbiAgICAgICAgZGF0ZS5pbm5lckhUTUw9Jyc7XG4gICAgICAgIHJhaW5QZXJjZW50LmlubmVySHRtbD0nJztcbiAgICAgICAgd2F0ZXJEcm9wSWNvbkNvbnQuaW5uZXJIVE1MPScnO1xuICAgICAgICBjb25kaXRpb25JY29uQ29udGFpbmVyLmlubmVySFRNTD0nJztcbiAgICAgICAgdGVtcE1pbi5pbm5lckhUTUw9Jyc7XG4gICAgICAgIHRlbXBNYXguaW5uZXJIVE1MPScnO1xuXG4gICAgICAgIHdlZWtseUluZm9JbmRleCs9MTtcbiAgICB9KTtcblxufVxuXG5mdW5jdGlvbiBjaGVja0N1cnJlbnRTY2FsZSgpe1xuICAgIGxldCBzdGF0dXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcCcpLnRleHRDb250ZW50LnNsaWNlKC0xKTtcbiAgICBpZihzdGF0dXM9PT0nQycpe1xuICAgICAgICBjb252ZXJ0VG9GYWhyZW5oZWl0KCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpLnZhbHVlO1xuICAgICAgICBjbGVhclByZXZpb3VzQ29udGVudHMoKTtcbiAgICAgICAgZmV0Y2hEYXRhKHVzZXJJbnB1dCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KCl7XG4gICAgbGV0IHRvcExlZnRUZW1wPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKTtcbiAgICBsZXQgdG9wTGVmdFRlbXBWYWx1ZT10b3BMZWZ0VGVtcC50ZXh0Q29udGVudDtcbiAgICBsZXQgdG9wTGVmdFRlbXBJbk51bWJlcj1OdW1iZXIodG9wTGVmdFRlbXBWYWx1ZS5zdWJzdHJpbmcoMCx0b3BMZWZ0VGVtcFZhbHVlLmxlbmd0aC0zKSk7ICBcbiAgICB0b3BMZWZ0VGVtcC50ZXh0Q29udGVudD1gJHsoKHRvcExlZnRUZW1wSW5OdW1iZXIqOS81KSszMikudG9GaXhlZCgyKX0gwrBGYDtcblxuICAgIGxldCBib3R0b21EaXZDb250YWluZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RheS1pbmZvPi5ib3R0b20+ZGl2Jyk7XG4gICAgbGV0IHRvZGF5SW5mb0luZGV4PTE7XG4gICAgYm90dG9tRGl2Q29udGFpbmVycy5mb3JFYWNoKCgpPT57XG4gICAgICAgIGxldCBib3R0b21UZW1wPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGVtcGApO1xuICAgICAgICBsZXQgYm90dG9tVGVtcFZhbHVlPWJvdHRvbVRlbXAudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBib3R0b21UZW1wSW5OdW1iZXI9TnVtYmVyKGJvdHRvbVRlbXBWYWx1ZS5zdWJzdHJpbmcoMCxib3R0b21UZW1wVmFsdWUubGVuZ3RoLTMpKTtcbiAgICAgICAgYm90dG9tVGVtcC50ZXh0Q29udGVudD1gJHsoKGJvdHRvbVRlbXBJbk51bWJlcio5LzUpKzMyKS50b0ZpeGVkKDIpfSDCsEZgO1xuXG4gICAgICAgIHRvZGF5SW5mb0luZGV4Kz0xO1xuICAgIH0pO1xuXG4gICAgbGV0IHdlZWtseUluZm9EaXZDb250YWluZXJzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrbHktaW5mbz5kaXYnKTtcbiAgICBsZXQgd2Vla2x5SW5mb0luZGV4PTE7XG4gICAgd2Vla2x5SW5mb0RpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKT0+e1xuICAgICAgICBsZXQgbWluVGVtcENvbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC5taW5gKTtcbiAgICAgICAgbGV0IG1heFRlbXBDb250PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAubWF4YCk7XG4gICAgICAgIGxldCBtaW5UZW1wVmFsdWU9bWluVGVtcENvbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBtYXhUZW1wVmFsdWU9bWF4VGVtcENvbnQudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgbGV0IG1pblRlbXBJbk51bWJlcj1OdW1iZXIobWluVGVtcFZhbHVlKTtcbiAgICAgICAgbGV0IG1heFRlbXBJbk51bWJlcj1OdW1iZXIobWF4VGVtcFZhbHVlLnN1YnN0cmluZygxLG1heFRlbXBWYWx1ZS5sZW5ndGgtMykpO1xuXG4gICAgICAgIG1pblRlbXBDb250LnRleHRDb250ZW50PWAkeygobWluVGVtcEluTnVtYmVyKjkvNSkrMzIpLnRvRml4ZWQoMil9YDtcbiAgICAgICAgbWF4VGVtcENvbnQudGV4dENvbnRlbnQ9YC8keygobWF4VGVtcEluTnVtYmVyKjkvNSkrMzIpLnRvRml4ZWQoMil9IMKwRmA7XG5cbiAgICAgICAgd2Vla2x5SW5mb0luZGV4Kz0xO1xuICAgIH0pO1xufVxuXG5cbmV4cG9ydCB7aW1wb3J0RGF0YVRvRG9tLGxvYWRIZWFkZXJJbWFnZSxjaGVja0N1cnJlbnRTY2FsZSxjb252ZXJ0VG9GYWhyZW5oZWl0LGNsZWFyUHJldmlvdXNDb250ZW50c307IiwiaW1wb3J0IHtpbXBvcnREYXRhVG9Eb219IGZyb20gJy4vRE9NLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGNpdHkpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IGxvYWRpbmdEaWFsb2c9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRpbmctZGlhbG9nJyk7XG4gICAgICAgIGxvYWRpbmdEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZT1hd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtlbmNvZGVVUklDb21wb25lbnQoY2l0eSl9P3VuaXRHcm91cD1tZXRyaWMma2V5PVZGUzJXV0xGV0FUWldEUDQzOTM3NFpUWlkmY29udGVudFR5cGU9anNvbmAse21vZGU6J2NvcnMnfSk7XG4gICAgICAgIGxldCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgaW1wb3J0RGF0YVRvRG9tKGRhdGEpO1xuICAgICAgICBsb2FkaW5nRGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGxldCBlcnJvckRpYWxvZz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3ItZGlhbG9nJyk7XG4gICAgICAgIGxldCBlcnJvclRleHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLWRpYWxvZz5wJyk7XG4gICAgICAgIGVycm9yVGV4dC50ZXh0Q29udGVudD1gJHtlcnJ9YDtcbiAgICAgICAgZXJyb3JEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGVycm9yRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIH0sMzAwMCk7XG4gICAgICAgIGZldGNoRGF0YSgnQXNtYXJhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF5SW5mbyhkYXRlSW5mbyl7XG4gICAgbGV0IGRheURhdGE9bmV3IERhdGUoZGF0ZUluZm8pO1xuICAgIGxldCBkYXk9ZGF5RGF0YS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoPWRheURhdGEuZ2V0TW9udGgoKSsxO1xuICAgIGxldCB5ZWFyPWRheURhdGEuZ2V0RnVsbFllYXIoKTtcblxuICAgIGxldCBnZXRBY3R1YWxEYXlNb250aFllYXI9KCk9PntcbiAgICAgICAgY29uc3QgZGF0ZT1uZXcgRGF0ZSh5ZWFyLG1vbnRoLTEsZGF5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucz17eWVhcjonbnVtZXJpYycsbW9udGg6J2xvbmcnLGRheTonbnVtZXJpYyd9XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGxldCBnZXRBY3R1YWxEYXlNb250aD0oKT0+e1xuICAgICAgICBjb25zdCBkYXRlPW5ldyBEYXRlKHllYXIsbW9udGgtMSxkYXkpO1xuICAgICAgICBjb25zdCBvcHRpb25zPXt5ZWFyOidudW1lcmljJyxtb250aDonbG9uZycsZGF5OidudW1lcmljJ31cbiAgICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyxvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgbGV0IGdldERheU5hbWU9KCk9PntcbiAgICAgICAgY29uc3QgZGF0ZT1uZXcgRGF0ZShkYXRlSW5mbyk7XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycse3dlZWtkYXk6J2xvbmcnfSk7XG4gICAgfTtcblxuICAgIHJldHVybntnZXREYXlOYW1lLGdldEFjdHVhbERheU1vbnRoWWVhcixnZXRBY3R1YWxEYXlNb250aH07XG59XG5cbmZ1bmN0aW9uIHRpbWVGb3JtYXR0ZXIodGltZSl7XG4gICAgbGV0IG15VGltZT10aW1lLnNsaWNlKDAsNSk7XG4gICAgbGV0IG15SG91cj1teVRpbWUuc2xpY2UoMCwyKTtcbiAgICBsZXQgbXlNaW51dGU9bXlUaW1lLnNsaWNlKDMsNSk7XG4gICAgbGV0IHRpbWVJbmRpY2F0b3I7XG5cbiAgICBpZihteUhvdXI+MTIpe1xuICAgICAgICBteUhvdXItPTEyO1xuICAgICAgICB0aW1lSW5kaWNhdG9yPVwiUG1cIjtcbiAgICB9XG4gICAgZWxzZSBpZihteUhvdXI9PT0nMTInKXtcbiAgICAgICAgdGltZUluZGljYXRvcj0nUG0nO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB0aW1lSW5kaWNhdG9yPSdBbSc7XG4gICAgfVxuXG4gICAgbGV0IG15TmV3VGltZT1gJHtteUhvdXJ9OiR7bXlNaW51dGV9YDtcbiAgICByZXR1cm4ge215TmV3VGltZSx0aW1lSW5kaWNhdG9yfTtcbn1cblxuXG5leHBvcnQge2ZldGNoRGF0YSxnZXRDdXJyZW50RGF5SW5mbyx0aW1lRm9ybWF0dGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtmZXRjaERhdGEsdGltZUZvcm1hdHRlcn0gZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQge2xvYWRIZWFkZXJJbWFnZSxjaGVja0N1cnJlbnRTY2FsZSxjbGVhclByZXZpb3VzQ29udGVudHN9IGZyb20gJy4vRE9NLmpzJztcblxubG9hZEhlYWRlckltYWdlKCk7XG5mZXRjaERhdGEoXCJBc21hcmFcIik7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteS1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoKT0+e1xuICAgIGNvbnN0IHVzZXJJbnB1dD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpLnZhbHVlO1xuICAgIGNsZWFyUHJldmlvdXNDb250ZW50cygpO1xuICAgIGZldGNoRGF0YSh1c2VySW5wdXQpO1xufSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXQtdGVtcD5idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBjaGVja0N1cnJlbnRTY2FsZSgpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=