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
    text-align: start;
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
    border:1px solid black;
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
}
@media(max-width:700px){
    .content{
        width:100%;
    }
    .content>.header>.img-container>img{
        width:80px;
        height:80px;
    }
    .content>.header>h2{
        font-size:1.8rem;
    }
    .content>.body>.user-selection{
        font-size:1rem;
    }
    .content>.body>.today-info{
        background: whitesmoke;
        width:300px;
        height:200px;
        display:grid;
        grid-template-rows: 90px 90px;
        gap:1.2rem;
    }
    .body>.today-info>.top-left{
        width:120px;
        padding-left:1rem;
    }
    .today-info>.top-left>.temp-container>.temp{
        font-size:1.8rem;
    }
    .body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{
        font-size:0.6rem;
    }
    .body>.today-info>.top-right>.time-img>.time{
        font-size:1rem;
        margin-left:0.5rem;
    }
    .body>.today-info>.top-right .img-container>img{
        width:60px;
        height:60px;
    }
    .body>.today-info>.top-right>.condition{
        font-size:1rem;
        padding-left:0.8rem;
    }
    .content>.body>.today-info>.bottom>div>.temp{
        font-size:0.8rem;
        margin-bottom:0.2rem;
    }
    .content>.body>.today-info>.bottom>div>.time{
        font-size:0.8rem;
        padding-left:0.4rem;
    }
    .content>.body>.today-info>.bottom>div>.time-indicator{
        padding-left:0.5rem;
        font-size:0.8rem;
    }
    .content>.body>.today-info>.bottom>div>.img-container>img{
        width:40px;
        height:40px;
        margin-bottom:0.2rem;
    }
    .content>.body>.weekly-info{
        width:300px;
        height:250px;
        flex-direction:column;
        padding:1rem 0.3rem;
    }
    .content>.body>.weekly-info>div{
        height:40px;
        font-size:0.8rem;
    }
    .content>.body>.weekly-info>div>.date{
        width:100px;
    }
    .weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container
    ,.content>.body>.weekly-info>div>.img-container{
        width:48px;
    }
    .body>.weekly-info>div>.temp{
        width:60px;
    }
    .content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div>.temp{
        padding-top:0.5rem;
    }
    .body>.weekly-info>div .water-drop>img{
        padding-top:0.6rem;
    }
    .body>.weekly-info>div .water-drop>img{
        width:15px;
        height:15px;
    }
    .content>.body>.weekly-info>div>.img-container>img{
        width:40px;
        height:40px;
    }
    .content>.body>#error-dialog{
        padding:1rem 0.2rem;
        font-size:1rem;
        position:absolute;
        top:30%;
        left:10%;
        width:280px;
    }
    .content>.body>#loading-dialog{
        padding:1rem 2rem;
        font-size:1rem;
        position:absolute;
        top:30%;
        left:35%;
    }
    footer{
        font-size:0.7rem
    }
    footer>span{
        display:block;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,4DAAmE;AACvE;AACA;IACI,sBAAsB;IACtB,4DAA+D;AACnE;AACA;IACI,sBAAsB;IACtB,4DAA+C;AACnD;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,cAAc;IACd,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,cAAc;AAClB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,oCAAoC;IACpC,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,UAAU;IACV,WAAW;IACX,oBAAoB;AACxB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;;IAEI,kBAAkB;AACtB;AACA;;IAEI,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;IACP,QAAQ;IACR,sBAAsB;AAC1B;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;IAClB;IACA;QACI,sBAAsB;QACtB,WAAW;QACX,YAAY;QACZ,YAAY;QACZ,6BAA6B;QAC7B,UAAU;IACd;IACA;QACI,WAAW;QACX,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;QACd,kBAAkB;IACtB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,cAAc;QACd,mBAAmB;IACvB;IACA;QACI,gBAAgB;QAChB,oBAAoB;IACxB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,mBAAmB;QACnB,gBAAgB;IACpB;IACA;QACI,UAAU;QACV,WAAW;QACX,oBAAoB;IACxB;IACA;QACI,WAAW;QACX,YAAY;QACZ,qBAAqB;QACrB,mBAAmB;IACvB;IACA;QACI,WAAW;QACX,gBAAgB;IACpB;IACA;QACI,WAAW;IACf;IACA;;QAEI,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,mBAAmB;QACnB,cAAc;QACd,iBAAiB;QACjB,OAAO;QACP,QAAQ;QACR,WAAW;IACf;IACA;QACI,iBAAiB;QACjB,cAAc;QACd,iBAAiB;QACjB,OAAO;QACP,QAAQ;IACZ;IACA;QACI;IACJ;IACA;QACI,aAAa;IACjB;AACJ","sourcesContent":["*{\n    margin:0;\n    padding:0;\n}\n@font-face{\n    font-family: 'myFont1';\n    src:url(./fonts/JosefinSans-VariableFont_wght.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont2';\n    src:url(./fonts/OpenSans_Condensed-Medium.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont3';\n    src:url(./fonts/new-font2.ttf) format(truetype);\n}\nbody{\n    font-family:'myFont2';\n}\n.content>.header{\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    padding:1rem 0;\n    background:#3C3D37;\n}\n.content>.header>.img-container>img{\n    width:100px;\n    height:100px;\n}\n.content>.header>h2{\n    font-family: 'myFont1';\n    font-size:2rem;\n    margin-left:0.8rem;\n    color:whitesmoke;\n}\n.content>.body{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background:#D8D9DA;\n    padding-top:0.8rem;\n    position:relative;\n}\n.content>.body>.user-selection{\n    font-size:1.2rem;\n}\n.content>.body>.user-selection form{\n    display:flex;\n    align-items:center;\n    margin-bottom:0.1rem;\n}\n.content>.body>.user-selection form>label,.body>.user-selection>.set-temp>label{\n    margin-right:0.5rem;\n}\n.content>.body>.user-selection form>input{\n    border-radius: 10px;\n    font-family:\"myFont2\";\n    height:25px;\n    padding-left:0.3rem;\n    font-size:1rem;\n}\n.content>.body>.user-selection form>button,.body>.user-selection>.set-temp>button{\n    font-size:1rem;\n    font-family: 'myFont2';\n    width:50px;\n    background:#3C3D37;\n    margin:0.5rem;\n    border-radius: 5px;\n    color:whitesmoke;\n}\n.content>.body>.user-selection form>button:hover,.body>.user-selection>.set-temp>button:hover{\n    background: #686D76;\n}\n.content>.body>.user-selection>.set-temp{\n    text-align:center;\n}\n.content>.body>.today-info{\n    background: whitesmoke;\n    width:650px;\n    height:350px;\n    margin-bottom:1.2rem;\n    border-radius:10px;\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 2fr;\n    padding:1rem 0;\n}\n.body>.today-info>.top-left{\n    display:flex;\n    flex-direction:column;\n    grid-row:1/2;\n    grid-column: 1/2;\n    width:350px;\n    padding-left:2.3rem;\n}\n.today-info>.top-left>.temp-container>.temp{\n    font-size:4rem;\n    font-weight:bold;\n}\n.body>.today-info>.top-left>.location-container{\n    display:flex;\n    flex-direction:column;\n    height:80px;\n}\n.body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{\n    font-size:1.5rem;\n    color:#3C3D37;\n}\n.body>.today-info>.top-right{\n    display:flex;\n    flex-direction:column;\n    height:150px;\n    grid-row:1/2;\n    grid-column:2/3;\n}\n.body>.today-info>.top-right>.time-img{\n    display:flex;\n}\n.body>.today-info>.top-right>.time-img>.time{\n    font-size:2rem;\n    margin:2rem 0 0 1.5rem;\n}\n.body>.today-info>.top-right .img-container>img{\n    width:120px;\n    height:120px;\n}\n.body>.today-info>.top-right>.condition{\n    font-size:1.5rem;\n    padding-left:1.2rem;\n    font-family:'myFont3';\n    color:#3C3D37;\n}\n.content>.body>.today-info>.bottom{\n    grid-row:2/3;\n    grid-column:1/3;\n    display:grid;\n    grid-template-columns: repeat(5,1fr);\n    gap:0.5rem;\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n}\n.content>.body>.today-info>.bottom>div{\n    display:flex;\n    flex-direction:column;\n}\n.content>.body>.today-info>.bottom>div>.temp{\n    font-size:1.5rem;\n    margin-bottom:0.5rem;\n}\n.content>.body>.today-info>.bottom>div>.time{\n    font-size:1.2rem;\n    padding-left:0.8rem;\n}\n.content>.body>.today-info>.bottom>div>.time-indicator{\n    font-family:'myFont3';\n    padding-left:1rem;\n    color:#3C3D37;\n}\n.content>.body>.today-info>.bottom>div>.img-container>img{\n    width:70px;\n    height:70px;\n    margin-bottom:0.5rem;\n}\n.content>.body>.weekly-info{\n    background:whitesmoke;\n    width:650px;\n    height:350px;\n    border-radius:10px;\n    display:flex;\n    flex-direction:column;\n    padding:1.5rem 1.5rem;\n    box-sizing: border-box;\n    margin-bottom:2rem;\n}\n.content>.body>.weekly-info>div{\n    display:flex;\n    height:117px;\n    justify-content: space-between;\n    font-size:1.3rem;\n}\n.content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div .water-drop>img\n,.body>.weekly-info>div>.temp{\n    padding-top:0.5rem;\n}\n.content>.body>.weekly-info>div>.date,.weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container\n,.content>.body>.weekly-info>div>.img-container{\n    width:160px;\n    text-align: start;\n}\n.body>.weekly-info>div>.rain-percent-container{\n    display:flex;\n    justify-content: center;\n}\n.content>.body>.weekly-info .rain-percent-container{\n    display:flex;\n}\n.content>.body>.weekly-info>div>.img-container>img{\n    width:50px;\n    height:50px;\n}\n.content>.body>#error-dialog{\n    padding:2rem;\n    font-size:1.5rem;\n    background:#D8D9DA;\n    position:absolute;\n    top:400px;\n    left:300px;\n    border:1px solid black;\n}\n.content>.body>#loading-dialog{\n    padding:2rem 3rem;\n    font-size:1.5rem;\n    background:#D8D9DA;\n    position:absolute;\n    top:30%;\n    left:40%;\n    border:1px solid black;\n}\nfooter{\n    background-color:#3C3D37;\n    color:#D8D9DA;\n    font-family: 'myFont3';\n    text-align: center;\n}\nfooter>span{\n    padding-left:1.5rem;\n}\n@media(max-width:700px){\n    .content{\n        width:100%;\n    }\n    .content>.header>.img-container>img{\n        width:80px;\n        height:80px;\n    }\n    .content>.header>h2{\n        font-size:1.8rem;\n    }\n    .content>.body>.user-selection{\n        font-size:1rem;\n    }\n    .content>.body>.today-info{\n        background: whitesmoke;\n        width:300px;\n        height:200px;\n        display:grid;\n        grid-template-rows: 90px 90px;\n        gap:1.2rem;\n    }\n    .body>.today-info>.top-left{\n        width:120px;\n        padding-left:1rem;\n    }\n    .today-info>.top-left>.temp-container>.temp{\n        font-size:1.8rem;\n    }\n    .body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{\n        font-size:0.6rem;\n    }\n    .body>.today-info>.top-right>.time-img>.time{\n        font-size:1rem;\n        margin-left:0.5rem;\n    }\n    .body>.today-info>.top-right .img-container>img{\n        width:60px;\n        height:60px;\n    }\n    .body>.today-info>.top-right>.condition{\n        font-size:1rem;\n        padding-left:0.8rem;\n    }\n    .content>.body>.today-info>.bottom>div>.temp{\n        font-size:0.8rem;\n        margin-bottom:0.2rem;\n    }\n    .content>.body>.today-info>.bottom>div>.time{\n        font-size:0.8rem;\n        padding-left:0.4rem;\n    }\n    .content>.body>.today-info>.bottom>div>.time-indicator{\n        padding-left:0.5rem;\n        font-size:0.8rem;\n    }\n    .content>.body>.today-info>.bottom>div>.img-container>img{\n        width:40px;\n        height:40px;\n        margin-bottom:0.2rem;\n    }\n    .content>.body>.weekly-info{\n        width:300px;\n        height:250px;\n        flex-direction:column;\n        padding:1rem 0.3rem;\n    }\n    .content>.body>.weekly-info>div{\n        height:40px;\n        font-size:0.8rem;\n    }\n    .content>.body>.weekly-info>div>.date{\n        width:100px;\n    }\n    .weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container\n    ,.content>.body>.weekly-info>div>.img-container{\n        width:48px;\n    }\n    .body>.weekly-info>div>.temp{\n        width:60px;\n    }\n    .content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div>.temp{\n        padding-top:0.5rem;\n    }\n    .body>.weekly-info>div .water-drop>img{\n        padding-top:0.6rem;\n    }\n    .body>.weekly-info>div .water-drop>img{\n        width:15px;\n        height:15px;\n    }\n    .content>.body>.weekly-info>div>.img-container>img{\n        width:40px;\n        height:40px;\n    }\n    .content>.body>#error-dialog{\n        padding:1rem 0.2rem;\n        font-size:1rem;\n        position:absolute;\n        top:30%;\n        left:10%;\n        width:280px;\n    }\n    .content>.body>#loading-dialog{\n        padding:1rem 2rem;\n        font-size:1rem;\n        position:absolute;\n        top:30%;\n        left:35%;\n    }\n    footer{\n        font-size:0.7rem\n    }\n    footer>span{\n        display:block;\n    }\n}"],"sourceRoot":""}]);
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









//For loading the header image
function loadHeaderImage() {
  const myWeatherIconContainer = document.querySelector(
    '.header>.img-container',
  );
  const myWeatherIcon = document.createElement('img');
  myWeatherIcon.src = _images_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;
  myWeatherIconContainer.appendChild(myWeatherIcon);
}
//This function is used for loading weather condition icons based of the uses
function loadContentImages() {
  const overcastIcon = document.createElement('img');
  const partialCloudIcon = document.createElement('img');
  const rainyIcon = document.createElement('img');
  const snowIcon = document.createElement('img');
  const sunnyIcon = document.createElement('img');
  const nightIcon = document.createElement('img');
  const dropIcon = document.createElement('img');

  overcastIcon.src = _images_overcast_png__WEBPACK_IMPORTED_MODULE_2__;
  partialCloudIcon.src = _images_partial_cloud_png__WEBPACK_IMPORTED_MODULE_3__;
  rainyIcon.src = _images_rainy_png__WEBPACK_IMPORTED_MODULE_4__;
  snowIcon.src = _images_snow_png__WEBPACK_IMPORTED_MODULE_5__;
  sunnyIcon.src = _images_sunny_png__WEBPACK_IMPORTED_MODULE_6__;
  nightIcon.src = _images_night_png__WEBPACK_IMPORTED_MODULE_7__;
  dropIcon.src = _images_water_drop_png__WEBPACK_IMPORTED_MODULE_8__;

  return {
    overcastIcon,
    partialCloudIcon,
    rainyIcon,
    snowIcon,
    sunnyIcon,
    nightIcon,
    dropIcon,
  };
}

function importDataToDom(data) {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftAddress = document.querySelector(
    '.top-left>.location-container>.location',
  );
  const topLeftDate = document.querySelector(
    '.top-left>.location-container>.date',
  );
  const topRightTime = document.querySelector('.top-right>.time-img>.time');
  const topRightCondition = document.querySelector('.top-right>.condition');
  const topRightImage = document.querySelector(
    '.top-right>.time-img>.img-container',
  );

  // The currentDay and currentDayMonthYear variables is getting the date, month and year in a convenient format
  const currentDay = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(data.days[0].datetime).getDayName();
  const currentDayMonthYear = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(
    data.days[0].datetime,
  ).getActualDayMonthYear();
  // myTopRightIcon variable contains the appropriate icon which matches with the current air condition
  const myTopRightIcon = loadIcon(data.currentConditions.conditions);

  topLeftTemp.textContent = `${data.currentConditions.temp} °C`;
  topLeftAddress.textContent = data.resolvedAddress;
  topLeftDate.textContent = `${currentDay}, ${currentDayMonthYear}`;
  topRightTime.textContent = `${(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.currentConditions.datetime).myNewTime} ${(0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.currentConditions.datetime).timeIndicator}`;
  topRightCondition.textContent = data.currentConditions.conditions;
  topRightImage.appendChild(myTopRightIcon);
//loads the current day's weather information from the the data fetched from the visual crossing API
  const todayTempInfo = () => {
    let todayInfoIndex = 1;
    let shift = false;
    const bottomDivContainers = document.querySelectorAll(
      '.today-info>.bottom>div',
    );
    const currentTime = data.currentConditions.datetime;
    let index = data.days[0].hours.findIndex(
      (item) => item.datetime === currentTime,
    );
    if (index === -1) {
      index =
        data.days[0].hours.findIndex(
          (item) => item.datetime.slice(0, 2) === currentTime.slice(0, 2),
        ) + 2;
    } else {
      index += 2;
    }
    if (index > 23) {
      index = 0;
      shift = true;
    }
    // console.log(currentTime);
    // console.log(index); 
    bottomDivContainers.forEach(() => {
      const temperature = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
      );
      const imgContainer = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`,
      );
      const time = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`,
      );
      const timeIndicator = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`,
      );
      if (!shift && index <= 23) {
        temperature.textContent = `${data.days[0].hours[index].temp} °C`;
        const conditionIcon = data.days[0].hours[index].icon;
        const myIcon = loadIcon(conditionIcon);
        imgContainer.appendChild(myIcon);
        time.textContent = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
          data.days[0].hours[index].datetime,
        ).myNewTime;
        timeIndicator.textContent = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
          data.days[0].hours[index].datetime,
        ).timeIndicator;
      } else {
        temperature.textContent = `${data.days[1].hours[index].temp} °C`;
        const conditionIcon = data.days[1].hours[index].icon;
        const myIcon = loadIcon(conditionIcon);
        imgContainer.appendChild(myIcon);
        time.textContent = data.days[1].hours[index].datetime;
        time.textContent = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
          data.days[1].hours[index].datetime,
        ).myNewTime;
        timeIndicator.textContent = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
          data.days[1].hours[index].datetime,
        ).timeIndicator;
      }
      index += 2;
      todayInfoIndex += 1;
      if (index > 23) {
        if (index - 2 === 23) {
          index = 1;
        } else {
          index = 0;
        }
        shift = true;
      }
    });
  };
//loads the current week's weather information from the the data fetched from the visual crossing API
  const weeklyTempInfo = () => {
    let weeklyInfoIndex = 1;
    const weeklyDivContainers = document.querySelectorAll('.weekly-info>div');

    weeklyDivContainers.forEach(() => {
      const date = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`,
      );
      const rainPercent = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`,
      );
      const waterDropIconCont = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`,
      );
      const conditionIconContainer = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`,
      );
      const tempMin = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`,
      );
      const tempMax = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`,
      );

      const daysInfo = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(data.days[weeklyInfoIndex].datetime)
        .getDayName()
        .slice(0, 3);
      const daysAndMonthInfo = (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(
        data.days[weeklyInfoIndex].datetime,
      ).getActualDayMonth();
      date.textContent = `${daysInfo}, ${daysAndMonthInfo.slice(0, -6)}`;
      rainPercent.textContent = `${data.days[weeklyInfoIndex].precipprob} %`;
      waterDropIconCont.appendChild(loadContentImages().dropIcon);
      tempMin.textContent = data.days[weeklyInfoIndex].tempmin;
      tempMax.textContent = `/${data.days[weeklyInfoIndex].tempmax} °C`;

      const conditionIcon = loadIcon(data.days[weeklyInfoIndex].conditions);
      conditionIconContainer.appendChild(conditionIcon);

      weeklyInfoIndex += 1;
    });
  };

//   console.log(data.days[0]);
//   console.log(data.days[1]);
//   console.log(data.days[2]);
//   console.log(data.days[3]);
  todayTempInfo();
  weeklyTempInfo();
}
//Assigns the right weather condition icon based on the current condition fetched from the API
function loadIcon(conditionIcon) {
  let myIcon;
  if (/Clear/i.test(conditionIcon)) {
    console.log(conditionIcon);
    if (/night/i.test(conditionIcon)) {
      myIcon = loadContentImages().nightIcon;
    } else {
      myIcon = loadContentImages().sunnyIcon;
    }
  } else if (/Rain/i.test(conditionIcon)) {
    myIcon = loadContentImages().rainyIcon;
  } else if (/partly-cloudy/i.test(conditionIcon)) {
    if (/night/i.test(conditionIcon)) {
      myIcon = loadContentImages().nightIcon;
    } else {
      myIcon = loadContentImages().partialCloudIcon;
    }
  } else if (/Overcast/i.test(conditionIcon) || /Cloudy/i.test(conditionIcon)) {
    myIcon = loadContentImages().overcastIcon;
  } else if (/Snow/i.test(conditionIcon)) {
    myIcon = loadContentImages().snowIcon;
  }

  return myIcon;
}
//Clears all the previous data from the DOM
function clearPreviousContents() {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftAddress = document.querySelector(
    '.top-left>.location-container>.location',
  );
  const topLeftDate = document.querySelector(
    '.top-left>.location-container>.date',
  );
  const topRightTime = document.querySelector('.top-right>.time-img>.time');
  const topRightCondition = document.querySelector('.top-right>.condition');
  const topRightImage = document.querySelector(
    '.top-right>.time-img>.img-container',
  );
  const bottomDivContainers = document.querySelectorAll(
    '.today-info>.bottom>div',
  );

  topLeftTemp.innerHTML = '';
  topLeftAddress.textContent = '';
  topLeftDate.innerHTML = '';
  topRightTime.innerHTML = '';
  topRightCondition.innerHTML = '';
  topRightImage.innerHTML = '';

  let todayInfoIndex = 1;
  bottomDivContainers.forEach(() => {
    const temperature = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
    );
    const imgContainer = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`,
    );
    const time = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`,
    );
    const timeIndicator = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`,
    );

    temperature.innerHTML = '';
    imgContainer.innerHTML = '';
    time.innerHtml = '';
    timeIndicator.innerHtml = '';

    todayInfoIndex += 1;
  });

  const weeklyInfoDivContainers = document.querySelectorAll('.weekly-info>div');
  let weeklyInfoIndex = 1;

  weeklyInfoDivContainers.forEach(() => {
    const date = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`,
    );
    const rainPercent = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`,
    );
    const waterDropIconCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`,
    );
    const conditionIconContainer = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`,
    );
    const tempMin = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`,
    );
    const tempMax = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`,
    );

    date.innerHTML = '';
    rainPercent.innerHtml = '';
    waterDropIconCont.innerHTML = '';
    conditionIconContainer.innerHTML = '';
    tempMin.innerHTML = '';
    tempMax.innerHTML = '';

    weeklyInfoIndex += 1;
  });
}
//Checks the current temperature scale after the scale button clicked
function checkCurrentScale() {
  const status = document
    .querySelector('.top-left>.temp-container>.temp')
    .textContent.slice(-1);
  if (status === 'C') {
    convertToFahrenheit();
  } else {
    const userInput = document.querySelector('#city').value;
    clearPreviousContents();
    (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(userInput);
  }
}
//Converts from °C to °F
function convertToFahrenheit() {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftTempValue = topLeftTemp.textContent;
  const topLeftTempInNumber = Number(
    topLeftTempValue.substring(0, topLeftTempValue.length - 3),
  );
  topLeftTemp.textContent = `${((topLeftTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

  const bottomDivContainers = document.querySelectorAll(
    '.today-info>.bottom>div',
  );
  let todayInfoIndex = 1;
  bottomDivContainers.forEach(() => {
    const bottomTemp = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
    );
    const bottomTempValue = bottomTemp.textContent;
    const bottomTempInNumber = Number(
      bottomTempValue.substring(0, bottomTempValue.length - 3),
    );
    bottomTemp.textContent = `${((bottomTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

    todayInfoIndex += 1;
  });

  const weeklyInfoDivContainers = document.querySelectorAll('.weekly-info>div');
  let weeklyInfoIndex = 1;
  weeklyInfoDivContainers.forEach(() => {
    const minTempCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .min`,
    );
    const maxTempCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .max`,
    );
    const minTempValue = minTempCont.textContent;
    const maxTempValue = maxTempCont.textContent;

    const minTempInNumber = Number(minTempValue);
    const maxTempInNumber = Number(
      maxTempValue.substring(1, maxTempValue.length - 3),
    );

    minTempCont.textContent = `${((minTempInNumber * 9) / 5 + 32).toFixed(2)}`;
    maxTempCont.textContent = `/${((maxTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

    weeklyInfoIndex += 1;
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


async function fetchData(city) {
  try {
    const loadingDialog = document.querySelector('#loading-dialog');
    loadingDialog.showModal();
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,
      { mode: 'cors' },
    );
    const data = await response.json();
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.importDataToDom)(data);
    loadingDialog.close();
  } catch (err) {
    const errorDialog = document.querySelector('#error-dialog');
    const errorText = document.querySelector('#error-dialog>p');
    errorText.textContent = `${err}`;
    errorDialog.showModal();
    setTimeout(() => {
      errorDialog.close();
    }, 5000);
    fetchData('Asmara');
  }
}

function getCurrentDayInfo(dateInfo) {
  const dayData = new Date(dateInfo);
  const day = dayData.getDate();
  const month = dayData.getMonth() + 1;
  const year = dayData.getFullYear();

  const getActualDayMonthYear = () => {
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  };

  const getActualDayMonth = () => {
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  };

  const getDayName = () => {
    const date = new Date(dateInfo);
    return date.toLocaleString('en-US', { weekday: 'long' });
  };

  return { getDayName, getActualDayMonthYear, getActualDayMonth };
}

function timeFormatter(time) {
  const myTime = time.slice(0, 5);
  let myHour = myTime.slice(0, 2);
  const myMinute = myTime.slice(3, 5);
  let timeIndicator;

  if (myHour > 12) {
    myHour -= 12;
    timeIndicator = 'Pm';
  } else if (myHour === '12') {
    timeIndicator = 'Pm';
  } else {
    timeIndicator = 'Am';
  }

  const myNewTime = `${myHour}:${myMinute}`;
  return { myNewTime, timeIndicator };
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
(0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)('Asmara');

document.querySelector('#my-form').addEventListener('submit', () => {
  const userInput = document.querySelector('#city').value;
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.clearPreviousContents)();
  (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(userInput);
});
document.querySelector('.set-temp>button').addEventListener('click', () => {
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.checkCurrentScale)();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVB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O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUM7QUFLcEM7O0FBRWxCLHdEQUFlO0FBQ2Ysb0RBQVM7O0FBRVQ7QUFDQTtBQUNBLEVBQUUsOERBQXFCO0FBQ3ZCLEVBQUUsb0RBQVM7QUFDWCxDQUFDO0FBQ0Q7QUFDQSxFQUFFLDBEQUFpQjtBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0pvc2VmaW5TYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3BlblNhbnNfQ29uZGVuc2VkLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL25ldy1mb250Mi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG59XG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250MSc7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDInO1xuICAgIHNyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQzJztcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OidteUZvbnQyJztcbn1cbi5jb250ZW50Pi5oZWFkZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBwYWRkaW5nOjFyZW0gMDtcbiAgICBiYWNrZ3JvdW5kOiMzQzNEMzc7XG59XG4uY29udGVudD4uaGVhZGVyPi5pbWctY29udGFpbmVyPmltZ3tcbiAgICB3aWR0aDoxMDBweDtcbiAgICBoZWlnaHQ6MTAwcHg7XG59XG4uY29udGVudD4uaGVhZGVyPmgye1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250MSc7XG4gICAgZm9udC1zaXplOjJyZW07XG4gICAgbWFyZ2luLWxlZnQ6MC44cmVtO1xuICAgIGNvbG9yOndoaXRlc21va2U7XG59XG4uY29udGVudD4uYm9keXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XG4gICAgcGFkZGluZy10b3A6MC44cmVtO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9ue1xuICAgIGZvbnQtc2l6ZToxLjJyZW07XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206MC4xcmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+bGFiZWwsLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5sYWJlbHtcbiAgICBtYXJnaW4tcmlnaHQ6MC41cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+aW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTpcIm15Rm9udDJcIjtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6MC4zcmVtO1xuICAgIGZvbnQtc2l6ZToxcmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+YnV0dG9uLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+YnV0dG9ue1xuICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Mic7XG4gICAgd2lkdGg6NTBweDtcbiAgICBiYWNrZ3JvdW5kOiMzQzNEMzc7XG4gICAgbWFyZ2luOjAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6d2hpdGVzbW9rZTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmJ1dHRvbjpob3ZlciwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjNjg2RDc2O1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZve1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgd2lkdGg6NjUwcHg7XG4gICAgaGVpZ2h0OjM1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206MS4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgICBwYWRkaW5nOjFyZW0gMDtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGdyaWQtcm93OjEvMjtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIHdpZHRoOjM1MHB4O1xuICAgIHBhZGRpbmctbGVmdDoyLjNyZW07XG59XG4udG9kYXktaW5mbz4udG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1we1xuICAgIGZvbnQtc2l6ZTo0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGhlaWdodDo4MHB4O1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uLC50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRle1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgY29sb3I6IzNDM0QzNztcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHR7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBoZWlnaHQ6MTUwcHg7XG4gICAgZ3JpZC1yb3c6MS8yO1xuICAgIGdyaWQtY29sdW1uOjIvMztcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1ne1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1le1xuICAgIGZvbnQtc2l6ZToycmVtO1xuICAgIG1hcmdpbjoycmVtIDAgMCAxLjVyZW07XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0IC5pbWctY29udGFpbmVyPmltZ3tcbiAgICB3aWR0aDoxMjBweDtcbiAgICBoZWlnaHQ6MTIwcHg7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi5jb25kaXRpb257XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6MS4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OidteUZvbnQzJztcbiAgICBjb2xvcjojM0MzRDM3O1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbXtcbiAgICBncmlkLXJvdzoyLzM7XG4gICAgZ3JpZC1jb2x1bW46MS8zO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LDFmcik7XG4gICAgZ2FwOjAuNXJlbTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRlbXB7XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOjAuNXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1le1xuICAgIGZvbnQtc2l6ZToxLjJyZW07XG4gICAgcGFkZGluZy1sZWZ0OjAuOHJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1lLWluZGljYXRvcntcbiAgICBmb250LWZhbWlseTonbXlGb250Myc7XG4gICAgcGFkZGluZy1sZWZ0OjFyZW07XG4gICAgY29sb3I6IzNDM0QzNztcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcbiAgICB3aWR0aDo3MHB4O1xuICAgIGhlaWdodDo3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206MC41cmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZve1xuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcbiAgICB3aWR0aDo2NTBweDtcbiAgICBoZWlnaHQ6MzUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgcGFkZGluZzoxLjVyZW0gMS41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLWJvdHRvbToycmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgaGVpZ2h0OjExN3B4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6MS4zcmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC5yYWluLXBlcmNlbnQsLmJvZHk+LndlZWtseS1pbmZvPmRpdiAud2F0ZXItZHJvcD5pbWdcbiwuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xuICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGUsLndlZWtseS1pbmZvPmRpdj4udGVtcCwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5yYWluLXBlcmNlbnQtY29udGFpbmVyXG4sLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcntcbiAgICB3aWR0aDoxNjBweDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvIC5yYWluLXBlcmNlbnQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOjUwcHg7XG4gICAgaGVpZ2h0OjUwcHg7XG59XG4uY29udGVudD4uYm9keT4jZXJyb3ItZGlhbG9ne1xuICAgIHBhZGRpbmc6MnJlbTtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6NDAwcHg7XG4gICAgbGVmdDozMDBweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xufVxuLmNvbnRlbnQ+LmJvZHk+I2xvYWRpbmctZGlhbG9ne1xuICAgIHBhZGRpbmc6MnJlbSAzcmVtO1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDozMCU7XG4gICAgbGVmdDo0MCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbn1cbmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQzNEMzc7XG4gICAgY29sb3I6I0Q4RDlEQTtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDMnO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvb3Rlcj5zcGFue1xuICAgIHBhZGRpbmctbGVmdDoxLjVyZW07XG59XG5AbWVkaWEobWF4LXdpZHRoOjcwMHB4KXtcbiAgICAuY29udGVudHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmhlYWRlcj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgICAgIHdpZHRoOjgwcHg7XG4gICAgICAgIGhlaWdodDo4MHB4O1xuICAgIH1cbiAgICAuY29udGVudD4uaGVhZGVyPmgye1xuICAgICAgICBmb250LXNpemU6MS44cmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb257XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mb3tcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgIGhlaWdodDoyMDBweDtcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggOTBweDtcbiAgICAgICAgZ2FwOjEuMnJlbTtcbiAgICB9XG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0e1xuICAgICAgICB3aWR0aDoxMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjFyZW07XG4gICAgfVxuICAgIC50b2RheS1pbmZvPi50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXB7XG4gICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgfVxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbiwudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZXtcbiAgICAgICAgZm9udC1zaXplOjAuNnJlbTtcbiAgICB9XG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWV7XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDowLjVyZW07XG4gICAgfVxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQgLmltZy1jb250YWluZXI+aW1ne1xuICAgICAgICB3aWR0aDo2MHB4O1xuICAgICAgICBoZWlnaHQ6NjBweDtcbiAgICB9XG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4uY29uZGl0aW9ue1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRlbXB7XG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206MC4ycmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZXtcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWUtaW5kaWNhdG9ye1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MC41cmVtO1xuICAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgICAgIHdpZHRoOjQwcHg7XG4gICAgICAgIGhlaWdodDo0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOjAuMnJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZve1xuICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgaGVpZ2h0OjI1MHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6MXJlbSAwLjNyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXZ7XG4gICAgICAgIGhlaWdodDo0MHB4O1xuICAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRle1xuICAgICAgICB3aWR0aDoxMDBweDtcbiAgICB9XG4gICAgLndlZWtseS1pbmZvPmRpdj4udGVtcCwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5yYWluLXBlcmNlbnQtY29udGFpbmVyXG4gICAgLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOjQ4cHg7XG4gICAgfVxuICAgIC5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnRlbXB7XG4gICAgICAgIHdpZHRoOjYwcHg7XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGUsLmJvZHk+LndlZWtseS1pbmZvPmRpdiAucmFpbi1wZXJjZW50LC5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnRlbXB7XG4gICAgICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcbiAgICB9XG4gICAgLmJvZHk+LndlZWtseS1pbmZvPmRpdiAud2F0ZXItZHJvcD5pbWd7XG4gICAgICAgIHBhZGRpbmctdG9wOjAuNnJlbTtcbiAgICB9XG4gICAgLmJvZHk+LndlZWtseS1pbmZvPmRpdiAud2F0ZXItZHJvcD5pbWd7XG4gICAgICAgIHdpZHRoOjE1cHg7XG4gICAgICAgIGhlaWdodDoxNXB4O1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcbiAgICAgICAgd2lkdGg6NDBweDtcbiAgICAgICAgaGVpZ2h0OjQwcHg7XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5PiNlcnJvci1kaWFsb2d7XG4gICAgICAgIHBhZGRpbmc6MXJlbSAwLjJyZW07XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjMwJTtcbiAgICAgICAgbGVmdDoxMCU7XG4gICAgICAgIHdpZHRoOjI4MHB4O1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4jbG9hZGluZy1kaWFsb2d7XG4gICAgICAgIHBhZGRpbmc6MXJlbSAycmVtO1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDozMCU7XG4gICAgICAgIGxlZnQ6MzUlO1xuICAgIH1cbiAgICBmb290ZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTowLjdyZW1cbiAgICB9XG4gICAgZm9vdGVyPnNwYW57XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw0REFBbUU7QUFDdkU7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw0REFBK0Q7QUFDbkU7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw0REFBK0M7QUFDbkQ7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFB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QUFXO1FBQ1gsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBOztRQUVJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsT0FBTztRQUNQLFFBQVE7UUFDUixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLE9BQU87UUFDUCxRQUFRO0lBQ1o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbn1cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDEnO1xcbiAgICBzcmM6dXJsKC4vZm9udHMvSm9zZWZpblNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDInO1xcbiAgICBzcmM6dXJsKC4vZm9udHMvT3BlblNhbnNfQ29uZGVuc2VkLU1lZGl1bS50dGYpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Myc7XFxuICAgIHNyYzp1cmwoLi9mb250cy9uZXctZm9udDIudHRmKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XFxufVxcbi5jb250ZW50Pi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgcGFkZGluZzoxcmVtIDA7XFxuICAgIGJhY2tncm91bmQ6IzNDM0QzNztcXG59XFxuLmNvbnRlbnQ+LmhlYWRlcj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBoZWlnaHQ6MTAwcHg7XFxufVxcbi5jb250ZW50Pi5oZWFkZXI+aDJ7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250MSc7XFxuICAgIGZvbnQtc2l6ZToycmVtO1xcbiAgICBtYXJnaW4tbGVmdDowLjhyZW07XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxufVxcbi5jb250ZW50Pi5ib2R5e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XFxuICAgIHBhZGRpbmctdG9wOjAuOHJlbTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbntcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm17XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOjAuMXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+bGFiZWwsLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5sYWJlbHtcXG4gICAgbWFyZ2luLXJpZ2h0OjAuNXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+aW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OlxcXCJteUZvbnQyXFxcIjtcXG4gICAgaGVpZ2h0OjI1cHg7XFxuICAgIHBhZGRpbmctbGVmdDowLjNyZW07XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5idXR0b24sLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5idXR0b257XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDInO1xcbiAgICB3aWR0aDo1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiMzQzNEMzc7XFxuICAgIG1hcmdpbjowLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+YnV0dG9uOmhvdmVyLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+YnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjNjg2RDc2O1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1we1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm97XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICAgIHdpZHRoOjY1MHB4O1xcbiAgICBoZWlnaHQ6MzUwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206MS4ycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIHBhZGRpbmc6MXJlbSAwO1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBncmlkLXJvdzoxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHdpZHRoOjM1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6Mi4zcmVtO1xcbn1cXG4udG9kYXktaW5mbz4udG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1we1xcbiAgICBmb250LXNpemU6NHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBoZWlnaHQ6ODBweDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uLC50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRle1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBjb2xvcjojM0MzRDM3O1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgaGVpZ2h0OjE1MHB4O1xcbiAgICBncmlkLXJvdzoxLzI7XFxuICAgIGdyaWQtY29sdW1uOjIvMztcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWd7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWV7XFxuICAgIGZvbnQtc2l6ZToycmVtO1xcbiAgICBtYXJnaW46MnJlbSAwIDAgMS41cmVtO1xcbn1cXG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0IC5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGhlaWdodDoxMjBweDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4uY29uZGl0aW9ue1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6MS4ycmVtO1xcbiAgICBmb250LWZhbWlseTonbXlGb250Myc7XFxuICAgIGNvbG9yOiMzQzNEMzc7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b217XFxuICAgIGdyaWQtcm93OjIvMztcXG4gICAgZ3JpZC1jb2x1bW46MS8zO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsMWZyKTtcXG4gICAgZ2FwOjAuNXJlbTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRlbXB7XFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206MC41cmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZXtcXG4gICAgZm9udC1zaXplOjEuMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OjAuOHJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWUtaW5kaWNhdG9ye1xcbiAgICBmb250LWZhbWlseTonbXlGb250Myc7XFxuICAgIHBhZGRpbmctbGVmdDoxcmVtO1xcbiAgICBjb2xvcjojM0MzRDM3O1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOjcwcHg7XFxuICAgIGhlaWdodDo3MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjAuNXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZve1xcbiAgICBiYWNrZ3JvdW5kOndoaXRlc21va2U7XFxuICAgIHdpZHRoOjY1MHB4O1xcbiAgICBoZWlnaHQ6MzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIHBhZGRpbmc6MS41cmVtIDEuNXJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLWJvdHRvbToycmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDoxMTdweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6MS4zcmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLnJhaW4tcGVyY2VudCwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ1xcbiwuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xcbiAgICBwYWRkaW5nLXRvcDowLjVyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGUsLndlZWtseS1pbmZvPmRpdj4udGVtcCwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5yYWluLXBlcmNlbnQtY29udGFpbmVyXFxuLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXJ7XFxuICAgIHdpZHRoOjE2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvIC5yYWluLXBlcmNlbnQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDo1MHB4O1xcbiAgICBoZWlnaHQ6NTBweDtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+I2Vycm9yLWRpYWxvZ3tcXG4gICAgcGFkZGluZzoycmVtO1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6NDAwcHg7XFxuICAgIGxlZnQ6MzAwcHg7XFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxufVxcbi5jb250ZW50Pi5ib2R5PiNsb2FkaW5nLWRpYWxvZ3tcXG4gICAgcGFkZGluZzoycmVtIDNyZW07XFxuICAgIGZvbnQtc2l6ZToxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDozMCU7XFxuICAgIGxlZnQ6NDAlO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzNDM0QzNztcXG4gICAgY29sb3I6I0Q4RDlEQTtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQzJztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb290ZXI+c3BhbntcXG4gICAgcGFkZGluZy1sZWZ0OjEuNXJlbTtcXG59XFxuQG1lZGlhKG1heC13aWR0aDo3MDBweCl7XFxuICAgIC5jb250ZW50e1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uaGVhZGVyPi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgICAgICBoZWlnaHQ6ODBweDtcXG4gICAgfVxcbiAgICAuY29udGVudD4uaGVhZGVyPmgye1xcbiAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb257XFxuICAgICAgICBmb250LXNpemU6MXJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mb3tcXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICAgICAgICB3aWR0aDozMDBweDtcXG4gICAgICAgIGhlaWdodDoyMDBweDtcXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogOTBweCA5MHB4O1xcbiAgICAgICAgZ2FwOjEuMnJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnR7XFxuICAgICAgICB3aWR0aDoxMjBweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDoxcmVtO1xcbiAgICB9XFxuICAgIC50b2RheS1pbmZvPi50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXB7XFxuICAgICAgICBmb250LXNpemU6MS44cmVtO1xcbiAgICB9XFxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbiwudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZXtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjZyZW07XFxuICAgIH1cXG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWV7XFxuICAgICAgICBmb250LXNpemU6MXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0IC5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgICAgIHdpZHRoOjYwcHg7XFxuICAgICAgICBoZWlnaHQ6NjBweDtcXG4gICAgfVxcbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi5jb25kaXRpb257XFxuICAgICAgICBmb250LXNpemU6MXJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDowLjhyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRlbXB7XFxuICAgICAgICBmb250LXNpemU6MC44cmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowLjJyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWV7XFxuICAgICAgICBmb250LXNpemU6MC44cmVtO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNHJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZS1pbmRpY2F0b3J7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MC41cmVtO1xcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgICAgICB3aWR0aDo0MHB4O1xcbiAgICAgICAgaGVpZ2h0OjQwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOjAuMnJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm97XFxuICAgICAgICB3aWR0aDozMDBweDtcXG4gICAgICAgIGhlaWdodDoyNTBweDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgICAgIHBhZGRpbmc6MXJlbSAwLjNyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdntcXG4gICAgICAgIGhlaWdodDo0MHB4O1xcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRle1xcbiAgICAgICAgd2lkdGg6MTAwcHg7XFxuICAgIH1cXG4gICAgLndlZWtseS1pbmZvPmRpdj4udGVtcCwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5yYWluLXBlcmNlbnQtY29udGFpbmVyXFxuICAgICwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6NDhweDtcXG4gICAgfVxcbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xcbiAgICAgICAgd2lkdGg6NjBweDtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLnJhaW4tcGVyY2VudCwuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xcbiAgICAgICAgcGFkZGluZy10b3A6MC41cmVtO1xcbiAgICB9XFxuICAgIC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1ne1xcbiAgICAgICAgcGFkZGluZy10b3A6MC42cmVtO1xcbiAgICB9XFxuICAgIC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1ne1xcbiAgICAgICAgd2lkdGg6MTVweDtcXG4gICAgICAgIGhlaWdodDoxNXB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICAgICAgd2lkdGg6NDBweDtcXG4gICAgICAgIGhlaWdodDo0MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5PiNlcnJvci1kaWFsb2d7XFxuICAgICAgICBwYWRkaW5nOjFyZW0gMC4ycmVtO1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgIHRvcDozMCU7XFxuICAgICAgICBsZWZ0OjEwJTtcXG4gICAgICAgIHdpZHRoOjI4MHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5PiNsb2FkaW5nLWRpYWxvZ3tcXG4gICAgICAgIHBhZGRpbmc6MXJlbSAycmVtO1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgIHRvcDozMCU7XFxuICAgICAgICBsZWZ0OjM1JTtcXG4gICAgfVxcbiAgICBmb290ZXJ7XFxuICAgICAgICBmb250LXNpemU6MC43cmVtXFxuICAgIH1cXG4gICAgZm9vdGVyPnNwYW57XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldEN1cnJlbnREYXlJbmZvLCB0aW1lRm9ybWF0dGVyLCBmZXRjaERhdGEgfSBmcm9tICcuL2ZldGNoLmpzJztcbmltcG9ydCB3ZWF0aGVySWNvbiBmcm9tICcuL2ltYWdlcy9jbG91ZHkucG5nJztcbmltcG9ydCBvdmVyY2FzdCBmcm9tICcuL2ltYWdlcy9vdmVyY2FzdC5wbmcnO1xuaW1wb3J0IHBhcnRpYWxDbG91ZCBmcm9tICcuL2ltYWdlcy9wYXJ0aWFsLWNsb3VkLnBuZyc7XG5pbXBvcnQgcmFpbnkgZnJvbSAnLi9pbWFnZXMvcmFpbnkucG5nJztcbmltcG9ydCBzbm93IGZyb20gJy4vaW1hZ2VzL3Nub3cucG5nJztcbmltcG9ydCBzdW5ueSBmcm9tICcuL2ltYWdlcy9zdW5ueS5wbmcnO1xuaW1wb3J0IG5pZ2h0IGZyb20gJy4vaW1hZ2VzL25pZ2h0LnBuZyc7XG5pbXBvcnQgZHJvcCBmcm9tICcuL2ltYWdlcy93YXRlci1kcm9wLnBuZyc7XG4vL0ZvciBsb2FkaW5nIHRoZSBoZWFkZXIgaW1hZ2VcbmZ1bmN0aW9uIGxvYWRIZWFkZXJJbWFnZSgpIHtcbiAgY29uc3QgbXlXZWF0aGVySWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5oZWFkZXI+LmltZy1jb250YWluZXInLFxuICApO1xuICBjb25zdCBteVdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG15V2VhdGhlckljb24uc3JjID0gd2VhdGhlckljb247XG4gIG15V2VhdGhlckljb25Db250YWluZXIuYXBwZW5kQ2hpbGQobXlXZWF0aGVySWNvbik7XG59XG4vL1RoaXMgZnVuY3Rpb24gaXMgdXNlZCBmb3IgbG9hZGluZyB3ZWF0aGVyIGNvbmRpdGlvbiBpY29ucyBiYXNlZCBvZiB0aGUgdXNlc1xuZnVuY3Rpb24gbG9hZENvbnRlbnRJbWFnZXMoKSB7XG4gIGNvbnN0IG92ZXJjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBwYXJ0aWFsQ2xvdWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHJhaW55SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBzbm93SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBzdW5ueUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgbmlnaHRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGRyb3BJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgb3ZlcmNhc3RJY29uLnNyYyA9IG92ZXJjYXN0O1xuICBwYXJ0aWFsQ2xvdWRJY29uLnNyYyA9IHBhcnRpYWxDbG91ZDtcbiAgcmFpbnlJY29uLnNyYyA9IHJhaW55O1xuICBzbm93SWNvbi5zcmMgPSBzbm93O1xuICBzdW5ueUljb24uc3JjID0gc3Vubnk7XG4gIG5pZ2h0SWNvbi5zcmMgPSBuaWdodDtcbiAgZHJvcEljb24uc3JjID0gZHJvcDtcblxuICByZXR1cm4ge1xuICAgIG92ZXJjYXN0SWNvbixcbiAgICBwYXJ0aWFsQ2xvdWRJY29uLFxuICAgIHJhaW55SWNvbixcbiAgICBzbm93SWNvbixcbiAgICBzdW5ueUljb24sXG4gICAgbmlnaHRJY29uLFxuICAgIGRyb3BJY29uLFxuICB9O1xufVxuXG5mdW5jdGlvbiBpbXBvcnREYXRhVG9Eb20oZGF0YSkge1xuICBjb25zdCB0b3BMZWZ0VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKTtcbiAgY29uc3QgdG9wTGVmdEFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24nLFxuICApO1xuICBjb25zdCB0b3BMZWZ0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRlJyxcbiAgKTtcbiAgY29uc3QgdG9wUmlnaHRUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWUnKTtcbiAgY29uc3QgdG9wUmlnaHRDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi5jb25kaXRpb24nKTtcbiAgY29uc3QgdG9wUmlnaHRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy50b3AtcmlnaHQ+LnRpbWUtaW1nPi5pbWctY29udGFpbmVyJyxcbiAgKTtcblxuICAvLyBUaGUgY3VycmVudERheSBhbmQgY3VycmVudERheU1vbnRoWWVhciB2YXJpYWJsZXMgaXMgZ2V0dGluZyB0aGUgZGF0ZSwgbW9udGggYW5kIHllYXIgaW4gYSBjb252ZW5pZW50IGZvcm1hdFxuICBjb25zdCBjdXJyZW50RGF5ID0gZ2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzWzBdLmRhdGV0aW1lKS5nZXREYXlOYW1lKCk7XG4gIGNvbnN0IGN1cnJlbnREYXlNb250aFllYXIgPSBnZXRDdXJyZW50RGF5SW5mbyhcbiAgICBkYXRhLmRheXNbMF0uZGF0ZXRpbWUsXG4gICkuZ2V0QWN0dWFsRGF5TW9udGhZZWFyKCk7XG4gIC8vIG15VG9wUmlnaHRJY29uIHZhcmlhYmxlIGNvbnRhaW5zIHRoZSBhcHByb3ByaWF0ZSBpY29uIHdoaWNoIG1hdGNoZXMgd2l0aCB0aGUgY3VycmVudCBhaXIgY29uZGl0aW9uXG4gIGNvbnN0IG15VG9wUmlnaHRJY29uID0gbG9hZEljb24oZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zKTtcblxuICB0b3BMZWZ0VGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcH0gwrBDYDtcbiAgdG9wTGVmdEFkZHJlc3MudGV4dENvbnRlbnQgPSBkYXRhLnJlc29sdmVkQWRkcmVzcztcbiAgdG9wTGVmdERhdGUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RGF5fSwgJHtjdXJyZW50RGF5TW9udGhZZWFyfWA7XG4gIHRvcFJpZ2h0VGltZS50ZXh0Q29udGVudCA9IGAke3RpbWVGb3JtYXR0ZXIoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZSkubXlOZXdUaW1lfSAke3RpbWVGb3JtYXR0ZXIoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZSkudGltZUluZGljYXRvcn1gO1xuICB0b3BSaWdodENvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucztcbiAgdG9wUmlnaHRJbWFnZS5hcHBlbmRDaGlsZChteVRvcFJpZ2h0SWNvbik7XG4vL2xvYWRzIHRoZSBjdXJyZW50IGRheSdzIHdlYXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGUgdGhlIGRhdGEgZmV0Y2hlZCBmcm9tIHRoZSB2aXN1YWwgY3Jvc3NpbmcgQVBJXG4gIGNvbnN0IHRvZGF5VGVtcEluZm8gPSAoKSA9PiB7XG4gICAgbGV0IHRvZGF5SW5mb0luZGV4ID0gMTtcbiAgICBsZXQgc2hpZnQgPSBmYWxzZTtcbiAgICBjb25zdCBib3R0b21EaXZDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICcudG9kYXktaW5mbz4uYm90dG9tPmRpdicsXG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWU7XG4gICAgbGV0IGluZGV4ID0gZGF0YS5kYXlzWzBdLmhvdXJzLmZpbmRJbmRleChcbiAgICAgIChpdGVtKSA9PiBpdGVtLmRhdGV0aW1lID09PSBjdXJyZW50VGltZSxcbiAgICApO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID1cbiAgICAgICAgZGF0YS5kYXlzWzBdLmhvdXJzLmZpbmRJbmRleChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5kYXRldGltZS5zbGljZSgwLCAyKSA9PT0gY3VycmVudFRpbWUuc2xpY2UoMCwgMiksXG4gICAgICAgICkgKyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCArPSAyO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiAyMykge1xuICAgICAgaW5kZXggPSAwO1xuICAgICAgc2hpZnQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VGltZSk7XG4gICAgLy8gY29uc29sZS5sb2coaW5kZXgpOyBcbiAgICBib3R0b21EaXZDb250YWluZXJzLmZvckVhY2goKCkgPT4ge1xuICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50ZW1wYCxcbiAgICAgICk7XG4gICAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCxcbiAgICAgICk7XG4gICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZWAsXG4gICAgICApO1xuICAgICAgY29uc3QgdGltZUluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRpbWUtaW5kaWNhdG9yYCxcbiAgICAgICk7XG4gICAgICBpZiAoIXNoaWZ0ICYmIGluZGV4IDw9IDIzKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kYXlzWzBdLmhvdXJzW2luZGV4XS50ZW1wfSDCsENgO1xuICAgICAgICBjb25zdCBjb25kaXRpb25JY29uID0gZGF0YS5kYXlzWzBdLmhvdXJzW2luZGV4XS5pY29uO1xuICAgICAgICBjb25zdCBteUljb24gPSBsb2FkSWNvbihjb25kaXRpb25JY29uKTtcbiAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSB0aW1lRm9ybWF0dGVyKFxuICAgICAgICAgIGRhdGEuZGF5c1swXS5ob3Vyc1tpbmRleF0uZGF0ZXRpbWUsXG4gICAgICAgICkubXlOZXdUaW1lO1xuICAgICAgICB0aW1lSW5kaWNhdG9yLnRleHRDb250ZW50ID0gdGltZUZvcm1hdHRlcihcbiAgICAgICAgICBkYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLmRhdGV0aW1lLFxuICAgICAgICApLnRpbWVJbmRpY2F0b3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2RhdGEuZGF5c1sxXS5ob3Vyc1tpbmRleF0udGVtcH0gwrBDYDtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRhdGEuZGF5c1sxXS5ob3Vyc1tpbmRleF0uaWNvbjtcbiAgICAgICAgY29uc3QgbXlJY29uID0gbG9hZEljb24oY29uZGl0aW9uSWNvbik7XG4gICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChteUljb24pO1xuICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS5kYXRldGltZTtcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IHRpbWVGb3JtYXR0ZXIoXG4gICAgICAgICAgZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS5kYXRldGltZSxcbiAgICAgICAgKS5teU5ld1RpbWU7XG4gICAgICAgIHRpbWVJbmRpY2F0b3IudGV4dENvbnRlbnQgPSB0aW1lRm9ybWF0dGVyKFxuICAgICAgICAgIGRhdGEuZGF5c1sxXS5ob3Vyc1tpbmRleF0uZGF0ZXRpbWUsXG4gICAgICAgICkudGltZUluZGljYXRvcjtcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IDI7XG4gICAgICB0b2RheUluZm9JbmRleCArPSAxO1xuICAgICAgaWYgKGluZGV4ID4gMjMpIHtcbiAgICAgICAgaWYgKGluZGV4IC0gMiA9PT0gMjMpIHtcbiAgICAgICAgICBpbmRleCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHNoaWZ0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbi8vbG9hZHMgdGhlIGN1cnJlbnQgd2VlaydzIHdlYXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGUgdGhlIGRhdGEgZmV0Y2hlZCBmcm9tIHRoZSB2aXN1YWwgY3Jvc3NpbmcgQVBJXG4gIGNvbnN0IHdlZWtseVRlbXBJbmZvID0gKCkgPT4ge1xuICAgIGxldCB3ZWVrbHlJbmZvSW5kZXggPSAxO1xuICAgIGNvbnN0IHdlZWtseURpdkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LWluZm8+ZGl2Jyk7XG5cbiAgICB3ZWVrbHlEaXZDb250YWluZXJzLmZvckVhY2goKCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LmRhdGVgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJhaW5QZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAucmFpbi1wZXJjZW50YCxcbiAgICAgICk7XG4gICAgICBjb25zdCB3YXRlckRyb3BJY29uQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLndhdGVyLWRyb3BgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbkljb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCxcbiAgICAgICk7XG4gICAgICBjb25zdCB0ZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4udGVtcD4ubWluYCxcbiAgICAgICk7XG4gICAgICBjb25zdCB0ZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4udGVtcD4ubWF4YCxcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGRheXNJbmZvID0gZ2V0Q3VycmVudERheUluZm8oZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uZGF0ZXRpbWUpXG4gICAgICAgIC5nZXREYXlOYW1lKClcbiAgICAgICAgLnNsaWNlKDAsIDMpO1xuICAgICAgY29uc3QgZGF5c0FuZE1vbnRoSW5mbyA9IGdldEN1cnJlbnREYXlJbmZvKFxuICAgICAgICBkYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS5kYXRldGltZSxcbiAgICAgICkuZ2V0QWN0dWFsRGF5TW9udGgoKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHtkYXlzSW5mb30sICR7ZGF5c0FuZE1vbnRoSW5mby5zbGljZSgwLCAtNil9YDtcbiAgICAgIHJhaW5QZXJjZW50LnRleHRDb250ZW50ID0gYCR7ZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0ucHJlY2lwcHJvYn0gJWA7XG4gICAgICB3YXRlckRyb3BJY29uQ29udC5hcHBlbmRDaGlsZChsb2FkQ29udGVudEltYWdlcygpLmRyb3BJY29uKTtcbiAgICAgIHRlbXBNaW4udGV4dENvbnRlbnQgPSBkYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS50ZW1wbWluO1xuICAgICAgdGVtcE1heC50ZXh0Q29udGVudCA9IGAvJHtkYXRhLmRheXNbd2Vla2x5SW5mb0luZGV4XS50ZW1wbWF4fSDCsENgO1xuXG4gICAgICBjb25zdCBjb25kaXRpb25JY29uID0gbG9hZEljb24oZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uY29uZGl0aW9ucyk7XG4gICAgICBjb25kaXRpb25JY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb24pO1xuXG4gICAgICB3ZWVrbHlJbmZvSW5kZXggKz0gMTtcbiAgICB9KTtcbiAgfTtcblxuLy8gICBjb25zb2xlLmxvZyhkYXRhLmRheXNbMF0pO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhLmRheXNbMV0pO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhLmRheXNbMl0pO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhLmRheXNbM10pO1xuICB0b2RheVRlbXBJbmZvKCk7XG4gIHdlZWtseVRlbXBJbmZvKCk7XG59XG4vL0Fzc2lnbnMgdGhlIHJpZ2h0IHdlYXRoZXIgY29uZGl0aW9uIGljb24gYmFzZWQgb24gdGhlIGN1cnJlbnQgY29uZGl0aW9uIGZldGNoZWQgZnJvbSB0aGUgQVBJXG5mdW5jdGlvbiBsb2FkSWNvbihjb25kaXRpb25JY29uKSB7XG4gIGxldCBteUljb247XG4gIGlmICgvQ2xlYXIvaS50ZXN0KGNvbmRpdGlvbkljb24pKSB7XG4gICAgY29uc29sZS5sb2coY29uZGl0aW9uSWNvbik7XG4gICAgaWYgKC9uaWdodC9pLnRlc3QoY29uZGl0aW9uSWNvbikpIHtcbiAgICAgIG15SWNvbiA9IGxvYWRDb250ZW50SW1hZ2VzKCkubmlnaHRJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICBteUljb24gPSBsb2FkQ29udGVudEltYWdlcygpLnN1bm55SWNvbjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoL1JhaW4vaS50ZXN0KGNvbmRpdGlvbkljb24pKSB7XG4gICAgbXlJY29uID0gbG9hZENvbnRlbnRJbWFnZXMoKS5yYWlueUljb247XG4gIH0gZWxzZSBpZiAoL3BhcnRseS1jbG91ZHkvaS50ZXN0KGNvbmRpdGlvbkljb24pKSB7XG4gICAgaWYgKC9uaWdodC9pLnRlc3QoY29uZGl0aW9uSWNvbikpIHtcbiAgICAgIG15SWNvbiA9IGxvYWRDb250ZW50SW1hZ2VzKCkubmlnaHRJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICBteUljb24gPSBsb2FkQ29udGVudEltYWdlcygpLnBhcnRpYWxDbG91ZEljb247XG4gICAgfVxuICB9IGVsc2UgaWYgKC9PdmVyY2FzdC9pLnRlc3QoY29uZGl0aW9uSWNvbikgfHwgL0Nsb3VkeS9pLnRlc3QoY29uZGl0aW9uSWNvbikpIHtcbiAgICBteUljb24gPSBsb2FkQ29udGVudEltYWdlcygpLm92ZXJjYXN0SWNvbjtcbiAgfSBlbHNlIGlmICgvU25vdy9pLnRlc3QoY29uZGl0aW9uSWNvbikpIHtcbiAgICBteUljb24gPSBsb2FkQ29udGVudEltYWdlcygpLnNub3dJY29uO1xuICB9XG5cbiAgcmV0dXJuIG15SWNvbjtcbn1cbi8vQ2xlYXJzIGFsbCB0aGUgcHJldmlvdXMgZGF0YSBmcm9tIHRoZSBET01cbmZ1bmN0aW9uIGNsZWFyUHJldmlvdXNDb250ZW50cygpIHtcbiAgY29uc3QgdG9wTGVmdFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1wJyk7XG4gIGNvbnN0IHRvcExlZnRBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uJyxcbiAgKTtcbiAgY29uc3QgdG9wTGVmdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZScsXG4gICk7XG4gIGNvbnN0IHRvcFJpZ2h0VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1lJyk7XG4gIGNvbnN0IHRvcFJpZ2h0Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1yaWdodD4uY29uZGl0aW9uJyk7XG4gIGNvbnN0IHRvcFJpZ2h0SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcudG9wLXJpZ2h0Pi50aW1lLWltZz4uaW1nLWNvbnRhaW5lcicsXG4gICk7XG4gIGNvbnN0IGJvdHRvbURpdkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcudG9kYXktaW5mbz4uYm90dG9tPmRpdicsXG4gICk7XG5cbiAgdG9wTGVmdFRlbXAuaW5uZXJIVE1MID0gJyc7XG4gIHRvcExlZnRBZGRyZXNzLnRleHRDb250ZW50ID0gJyc7XG4gIHRvcExlZnREYXRlLmlubmVySFRNTCA9ICcnO1xuICB0b3BSaWdodFRpbWUuaW5uZXJIVE1MID0gJyc7XG4gIHRvcFJpZ2h0Q29uZGl0aW9uLmlubmVySFRNTCA9ICcnO1xuICB0b3BSaWdodEltYWdlLmlubmVySFRNTCA9ICcnO1xuXG4gIGxldCB0b2RheUluZm9JbmRleCA9IDE7XG4gIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKSA9PiB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGVtcGAsXG4gICAgKTtcbiAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4uaW1nLWNvbnRhaW5lcmAsXG4gICAgKTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRpbWVgLFxuICAgICk7XG4gICAgY29uc3QgdGltZUluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50aW1lLWluZGljYXRvcmAsXG4gICAgKTtcblxuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9ICcnO1xuICAgIGltZ0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0aW1lLmlubmVySHRtbCA9ICcnO1xuICAgIHRpbWVJbmRpY2F0b3IuaW5uZXJIdG1sID0gJyc7XG5cbiAgICB0b2RheUluZm9JbmRleCArPSAxO1xuICB9KTtcblxuICBjb25zdCB3ZWVrbHlJbmZvRGl2Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrbHktaW5mbz5kaXYnKTtcbiAgbGV0IHdlZWtseUluZm9JbmRleCA9IDE7XG5cbiAgd2Vla2x5SW5mb0RpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi5kYXRlYCxcbiAgICApO1xuICAgIGNvbnN0IHJhaW5QZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLnJhaW4tcGVyY2VudGAsXG4gICAgKTtcbiAgICBjb25zdCB3YXRlckRyb3BJY29uQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC53YXRlci1kcm9wYCxcbiAgICApO1xuICAgIGNvbnN0IGNvbmRpdGlvbkljb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4uaW1nLWNvbnRhaW5lcmAsXG4gICAgKTtcbiAgICBjb25zdCB0ZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1pbmAsXG4gICAgKTtcbiAgICBjb25zdCB0ZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1heGAsXG4gICAgKTtcblxuICAgIGRhdGUuaW5uZXJIVE1MID0gJyc7XG4gICAgcmFpblBlcmNlbnQuaW5uZXJIdG1sID0gJyc7XG4gICAgd2F0ZXJEcm9wSWNvbkNvbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uZGl0aW9uSWNvbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB0ZW1wTWluLmlubmVySFRNTCA9ICcnO1xuICAgIHRlbXBNYXguaW5uZXJIVE1MID0gJyc7XG5cbiAgICB3ZWVrbHlJbmZvSW5kZXggKz0gMTtcbiAgfSk7XG59XG4vL0NoZWNrcyB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSBzY2FsZSBhZnRlciB0aGUgc2NhbGUgYnV0dG9uIGNsaWNrZWRcbmZ1bmN0aW9uIGNoZWNrQ3VycmVudFNjYWxlKCkge1xuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1wJylcbiAgICAudGV4dENvbnRlbnQuc2xpY2UoLTEpO1xuICBpZiAoc3RhdHVzID09PSAnQycpIHtcbiAgICBjb252ZXJ0VG9GYWhyZW5oZWl0KCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcbiAgICBjbGVhclByZXZpb3VzQ29udGVudHMoKTtcbiAgICBmZXRjaERhdGEodXNlcklucHV0KTtcbiAgfVxufVxuLy9Db252ZXJ0cyBmcm9tIMKwQyB0byDCsEZcbmZ1bmN0aW9uIGNvbnZlcnRUb0ZhaHJlbmhlaXQoKSB7XG4gIGNvbnN0IHRvcExlZnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcCcpO1xuICBjb25zdCB0b3BMZWZ0VGVtcFZhbHVlID0gdG9wTGVmdFRlbXAudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHRvcExlZnRUZW1wSW5OdW1iZXIgPSBOdW1iZXIoXG4gICAgdG9wTGVmdFRlbXBWYWx1ZS5zdWJzdHJpbmcoMCwgdG9wTGVmdFRlbXBWYWx1ZS5sZW5ndGggLSAzKSxcbiAgKTtcbiAgdG9wTGVmdFRlbXAudGV4dENvbnRlbnQgPSBgJHsoKHRvcExlZnRUZW1wSW5OdW1iZXIgKiA5KSAvIDUgKyAzMikudG9GaXhlZCgyKX0gwrBGYDtcblxuICBjb25zdCBib3R0b21EaXZDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnRvZGF5LWluZm8+LmJvdHRvbT5kaXYnLFxuICApO1xuICBsZXQgdG9kYXlJbmZvSW5kZXggPSAxO1xuICBib3R0b21EaXZDb250YWluZXJzLmZvckVhY2goKCkgPT4ge1xuICAgIGNvbnN0IGJvdHRvbVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGVtcGAsXG4gICAgKTtcbiAgICBjb25zdCBib3R0b21UZW1wVmFsdWUgPSBib3R0b21UZW1wLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGJvdHRvbVRlbXBJbk51bWJlciA9IE51bWJlcihcbiAgICAgIGJvdHRvbVRlbXBWYWx1ZS5zdWJzdHJpbmcoMCwgYm90dG9tVGVtcFZhbHVlLmxlbmd0aCAtIDMpLFxuICAgICk7XG4gICAgYm90dG9tVGVtcC50ZXh0Q29udGVudCA9IGAkeygoYm90dG9tVGVtcEluTnVtYmVyICogOSkgLyA1ICsgMzIpLnRvRml4ZWQoMil9IMKwRmA7XG5cbiAgICB0b2RheUluZm9JbmRleCArPSAxO1xuICB9KTtcblxuICBjb25zdCB3ZWVrbHlJbmZvRGl2Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrbHktaW5mbz5kaXYnKTtcbiAgbGV0IHdlZWtseUluZm9JbmRleCA9IDE7XG4gIHdlZWtseUluZm9EaXZDb250YWluZXJzLmZvckVhY2goKCkgPT4ge1xuICAgIGNvbnN0IG1pblRlbXBDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLm1pbmAsXG4gICAgKTtcbiAgICBjb25zdCBtYXhUZW1wQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC5tYXhgLFxuICAgICk7XG4gICAgY29uc3QgbWluVGVtcFZhbHVlID0gbWluVGVtcENvbnQudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgbWF4VGVtcFZhbHVlID0gbWF4VGVtcENvbnQudGV4dENvbnRlbnQ7XG5cbiAgICBjb25zdCBtaW5UZW1wSW5OdW1iZXIgPSBOdW1iZXIobWluVGVtcFZhbHVlKTtcbiAgICBjb25zdCBtYXhUZW1wSW5OdW1iZXIgPSBOdW1iZXIoXG4gICAgICBtYXhUZW1wVmFsdWUuc3Vic3RyaW5nKDEsIG1heFRlbXBWYWx1ZS5sZW5ndGggLSAzKSxcbiAgICApO1xuXG4gICAgbWluVGVtcENvbnQudGV4dENvbnRlbnQgPSBgJHsoKG1pblRlbXBJbk51bWJlciAqIDkpIC8gNSArIDMyKS50b0ZpeGVkKDIpfWA7XG4gICAgbWF4VGVtcENvbnQudGV4dENvbnRlbnQgPSBgLyR7KChtYXhUZW1wSW5OdW1iZXIgKiA5KSAvIDUgKyAzMikudG9GaXhlZCgyKX0gwrBGYDtcblxuICAgIHdlZWtseUluZm9JbmRleCArPSAxO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgaW1wb3J0RGF0YVRvRG9tLFxuICBsb2FkSGVhZGVySW1hZ2UsXG4gIGNoZWNrQ3VycmVudFNjYWxlLFxuICBjb252ZXJ0VG9GYWhyZW5oZWl0LFxuICBjbGVhclByZXZpb3VzQ29udGVudHMsXG59O1xuIiwiaW1wb3J0IHsgaW1wb3J0RGF0YVRvRG9tIH0gZnJvbSAnLi9ET00uanMnO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvYWRpbmdEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGluZy1kaWFsb2cnKTtcbiAgICBsb2FkaW5nRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtlbmNvZGVVUklDb21wb25lbnQoY2l0eSl9P3VuaXRHcm91cD1tZXRyaWMma2V5PVZGUzJXV0xGV0FUWldEUDQzOTM3NFpUWlkmY29udGVudFR5cGU9anNvbmAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpbXBvcnREYXRhVG9Eb20oZGF0YSk7XG4gICAgbG9hZGluZ0RpYWxvZy5jbG9zZSgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zdCBlcnJvckRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvci1kaWFsb2cnKTtcbiAgICBjb25zdCBlcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3ItZGlhbG9nPnAnKTtcbiAgICBlcnJvclRleHQudGV4dENvbnRlbnQgPSBgJHtlcnJ9YDtcbiAgICBlcnJvckRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVycm9yRGlhbG9nLmNsb3NlKCk7XG4gICAgfSwgNTAwMCk7XG4gICAgZmV0Y2hEYXRhKCdBc21hcmEnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF5SW5mbyhkYXRlSW5mbykge1xuICBjb25zdCBkYXlEYXRhID0gbmV3IERhdGUoZGF0ZUluZm8pO1xuICBjb25zdCBkYXkgPSBkYXlEYXRhLmdldERhdGUoKTtcbiAgY29uc3QgbW9udGggPSBkYXlEYXRhLmdldE1vbnRoKCkgKyAxO1xuICBjb25zdCB5ZWFyID0gZGF5RGF0YS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGdldEFjdHVhbERheU1vbnRoWWVhciA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBnZXRBY3R1YWxEYXlNb250aCA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCBnZXREYXlOYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlSW5mbyk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0RGF5TmFtZSwgZ2V0QWN0dWFsRGF5TW9udGhZZWFyLCBnZXRBY3R1YWxEYXlNb250aCB9O1xufVxuXG5mdW5jdGlvbiB0aW1lRm9ybWF0dGVyKHRpbWUpIHtcbiAgY29uc3QgbXlUaW1lID0gdGltZS5zbGljZSgwLCA1KTtcbiAgbGV0IG15SG91ciA9IG15VGltZS5zbGljZSgwLCAyKTtcbiAgY29uc3QgbXlNaW51dGUgPSBteVRpbWUuc2xpY2UoMywgNSk7XG4gIGxldCB0aW1lSW5kaWNhdG9yO1xuXG4gIGlmIChteUhvdXIgPiAxMikge1xuICAgIG15SG91ciAtPSAxMjtcbiAgICB0aW1lSW5kaWNhdG9yID0gJ1BtJztcbiAgfSBlbHNlIGlmIChteUhvdXIgPT09ICcxMicpIHtcbiAgICB0aW1lSW5kaWNhdG9yID0gJ1BtJztcbiAgfSBlbHNlIHtcbiAgICB0aW1lSW5kaWNhdG9yID0gJ0FtJztcbiAgfVxuXG4gIGNvbnN0IG15TmV3VGltZSA9IGAke215SG91cn06JHtteU1pbnV0ZX1gO1xuICByZXR1cm4geyBteU5ld1RpbWUsIHRpbWVJbmRpY2F0b3IgfTtcbn1cblxuZXhwb3J0IHsgZmV0Y2hEYXRhLCBnZXRDdXJyZW50RGF5SW5mbywgdGltZUZvcm1hdHRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGZldGNoRGF0YSwgdGltZUZvcm1hdHRlciB9IGZyb20gJy4vZmV0Y2guanMnO1xuaW1wb3J0IHtcbiAgbG9hZEhlYWRlckltYWdlLFxuICBjaGVja0N1cnJlbnRTY2FsZSxcbiAgY2xlYXJQcmV2aW91c0NvbnRlbnRzLFxufSBmcm9tICcuL0RPTS5qcyc7XG5cbmxvYWRIZWFkZXJJbWFnZSgpO1xuZmV0Y2hEYXRhKCdBc21hcmEnKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykudmFsdWU7XG4gIGNsZWFyUHJldmlvdXNDb250ZW50cygpO1xuICBmZXRjaERhdGEodXNlcklucHV0KTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldC10ZW1wPmJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjaGVja0N1cnJlbnRTY2FsZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=