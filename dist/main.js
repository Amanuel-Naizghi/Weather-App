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
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVB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QUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2lDO0FBS3BDOztBQUVsQix3REFBZTtBQUNmLG9EQUFTOztBQUVUO0FBQ0E7QUFDQSxFQUFFLDhEQUFxQjtBQUN2QixFQUFFLG9EQUFTO0FBQ1gsQ0FBQztBQUNEO0FBQ0EsRUFBRSwwREFBaUI7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Kb3NlZmluU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9uZXctZm9udDIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDEnO1xuICAgIHNyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Myc7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuYm9keXtcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XG59XG4uY29udGVudD4uaGVhZGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgcGFkZGluZzoxcmVtIDA7XG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xufVxuLmNvbnRlbnQ+LmhlYWRlcj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xufVxuLmNvbnRlbnQ+LmhlYWRlcj5oMntcbiAgICBmb250LWZhbWlseTogJ215Rm9udDEnO1xuICAgIGZvbnQtc2l6ZToycmVtO1xuICAgIG1hcmdpbi1sZWZ0OjAuOHJlbTtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xufVxuLmNvbnRlbnQ+LmJvZHl7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xuICAgIHBhZGRpbmctdG9wOjAuOHJlbTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbntcbiAgICBmb250LXNpemU6MS4ycmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm17XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOjAuMXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmxhYmVsLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+bGFiZWx7XG4gICAgbWFyZ2luLXJpZ2h0OjAuNXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6XCJteUZvbnQyXCI7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OjAuM3JlbTtcbiAgICBmb250LXNpemU6MXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmJ1dHRvbiwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmJ1dHRvbntcbiAgICBmb250LXNpemU6MXJlbTtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDInO1xuICAgIHdpZHRoOjUwcHg7XG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xuICAgIG1hcmdpbjowLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOndoaXRlc21va2U7XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5idXR0b246aG92ZXIsLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzY4NkQ3Njtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mb3tcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOjY1MHB4O1xuICAgIGhlaWdodDozNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gICAgcGFkZGluZzoxcmVtIDA7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnR7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBncmlkLXJvdzoxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICB3aWR0aDozNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6Mi4zcmVtO1xufVxuLnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcHtcbiAgICBmb250LXNpemU6NHJlbTtcbiAgICBmb250LXdlaWdodDpib2xkO1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBoZWlnaHQ6ODBweDtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbiwudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZXtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIGNvbG9yOiMzQzNEMzc7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgaGVpZ2h0OjE1MHB4O1xuICAgIGdyaWQtcm93OjEvMjtcbiAgICBncmlkLWNvbHVtbjoyLzM7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi50aW1lLWltZ3tcbiAgICBkaXNwbGF5OmZsZXg7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZXtcbiAgICBmb250LXNpemU6MnJlbTtcbiAgICBtYXJnaW46MnJlbSAwIDAgMS41cmVtO1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodCAuaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6MTIwcHg7XG4gICAgaGVpZ2h0OjEyMHB4O1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4uY29uZGl0aW9ue1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OjEuMnJlbTtcbiAgICBmb250LWZhbWlseTonbXlGb250Myc7XG4gICAgY29sb3I6IzNDM0QzNztcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b217XG4gICAgZ3JpZC1yb3c6Mi8zO1xuICAgIGdyaWQtY29sdW1uOjEvMztcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwxZnIpO1xuICAgIGdhcDowLjVyZW07XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXZ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50ZW1we1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTowLjVyZW07XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZXtcbiAgICBmb250LXNpemU6MS4ycmVtO1xuICAgIHBhZGRpbmctbGVmdDowLjhyZW07XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZS1pbmRpY2F0b3J7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDMnO1xuICAgIHBhZGRpbmctbGVmdDoxcmVtO1xuICAgIGNvbG9yOiMzQzNEMzc7XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6NzBweDtcbiAgICBoZWlnaHQ6NzBweDtcbiAgICBtYXJnaW4tYm90dG9tOjAuNXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mb3tcbiAgICBiYWNrZ3JvdW5kOndoaXRlc21va2U7XG4gICAgd2lkdGg6NjUwcHg7XG4gICAgaGVpZ2h0OjM1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIHBhZGRpbmc6MS41cmVtIDEuNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXZ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGhlaWdodDoxMTdweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOjEuM3JlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGUsLmJvZHk+LndlZWtseS1pbmZvPmRpdiAucmFpbi1wZXJjZW50LC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1nXG4sLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcbiAgICBwYWRkaW5nLXRvcDowLjVyZW07XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC53ZWVrbHktaW5mbz5kaXY+LnRlbXAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lclxuLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXJ7XG4gICAgd2lkdGg6MTYwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5yYWluLXBlcmNlbnQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbyAucmFpbi1wZXJjZW50LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmZsZXg7XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcbiAgICB3aWR0aDo1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xufVxuLmNvbnRlbnQ+LmJvZHk+I2Vycm9yLWRpYWxvZ3tcbiAgICBwYWRkaW5nOjJyZW07XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjQwMHB4O1xuICAgIGxlZnQ6MzAwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbn1cbi5jb250ZW50Pi5ib2R5PiNsb2FkaW5nLWRpYWxvZ3tcbiAgICBwYWRkaW5nOjJyZW0gM3JlbTtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MzAlO1xuICAgIGxlZnQ6NDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG59XG5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0MzRDM3O1xuICAgIGNvbG9yOiNEOEQ5REE7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQzJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXI+c3BhbntcbiAgICBwYWRkaW5nLWxlZnQ6MS41cmVtO1xufVxuQG1lZGlhKG1heC13aWR0aDo3MDBweCl7XG4gICAgLmNvbnRlbnR7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuICAgIC5jb250ZW50Pi5oZWFkZXI+LmltZy1jb250YWluZXI+aW1ne1xuICAgICAgICB3aWR0aDo4MHB4O1xuICAgICAgICBoZWlnaHQ6ODBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmhlYWRlcj5oMntcbiAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9ue1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm97XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICBoZWlnaHQ6MjAwcHg7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDkwcHg7XG4gICAgICAgIGdhcDoxLjJyZW07XG4gICAgfVxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdHtcbiAgICAgICAgd2lkdGg6MTIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDoxcmVtO1xuICAgIH1cbiAgICAudG9kYXktaW5mbz4udG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1we1xuICAgICAgICBmb250LXNpemU6MS44cmVtO1xuICAgIH1cbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24sLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGV7XG4gICAgICAgIGZvbnQtc2l6ZTowLjZyZW07XG4gICAgfVxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1le1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MC41cmVtO1xuICAgIH1cbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0IC5pbWctY29udGFpbmVyPmltZ3tcbiAgICAgICAgd2lkdGg6NjBweDtcbiAgICAgICAgaGVpZ2h0OjYwcHg7XG4gICAgfVxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LmNvbmRpdGlvbntcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDowLjhyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50ZW1we1xuICAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOjAuMnJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWV7XG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDowLjRyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1lLWluZGljYXRvcntcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LmltZy1jb250YWluZXI+aW1ne1xuICAgICAgICB3aWR0aDo0MHB4O1xuICAgICAgICBoZWlnaHQ6NDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowLjJyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mb3tcbiAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgIGhlaWdodDoyNTBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICBwYWRkaW5nOjFyZW0gMC4zcmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2e1xuICAgICAgICBoZWlnaHQ6NDBweDtcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZXtcbiAgICAgICAgd2lkdGg6MTAwcHg7XG4gICAgfVxuICAgIC53ZWVrbHktaW5mbz5kaXY+LnRlbXAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lclxuICAgICwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVye1xuICAgICAgICB3aWR0aDo0OHB4O1xuICAgIH1cbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xuICAgICAgICB3aWR0aDo2MHB4O1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLnJhaW4tcGVyY2VudCwuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xuICAgICAgICBwYWRkaW5nLXRvcDowLjVyZW07XG4gICAgfVxuICAgIC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1ne1xuICAgICAgICBwYWRkaW5nLXRvcDowLjZyZW07XG4gICAgfVxuICAgIC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1ne1xuICAgICAgICB3aWR0aDoxNXB4O1xuICAgICAgICBoZWlnaHQ6MTVweDtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgICAgIHdpZHRoOjQwcHg7XG4gICAgICAgIGhlaWdodDo0MHB4O1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4jZXJyb3ItZGlhbG9ne1xuICAgICAgICBwYWRkaW5nOjFyZW0gMC4ycmVtO1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDozMCU7XG4gICAgICAgIGxlZnQ6MTAlO1xuICAgICAgICB3aWR0aDoyODBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+I2xvYWRpbmctZGlhbG9ne1xuICAgICAgICBwYWRkaW5nOjFyZW0gMnJlbTtcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MzAlO1xuICAgICAgICBsZWZ0OjM1JTtcbiAgICB9XG4gICAgZm9vdGVye1xuICAgICAgICBmb250LXNpemU6MC43cmVtXG4gICAgfVxuICAgIGZvb3Rlcj5zcGFue1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNERBQW1FO0FBQ3ZFO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNERBQStEO0FBQ25FO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNERBQStDO0FBQ25EO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7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VztRQUNYLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLE9BQU87UUFDUCxRQUFRO1FBQ1IsV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixPQUFPO1FBQ1AsUUFBUTtJQUNaO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcXG4gICAgc3JjOnVybCguL2ZvbnRzL0pvc2VmaW5TYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZikgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcXG4gICAgc3JjOnVybCguL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1NZWRpdW0udHRmKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDMnO1xcbiAgICBzcmM6dXJsKC4vZm9udHMvbmV3LWZvbnQyLnR0ZikgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udDInO1xcbn1cXG4uY29udGVudD4uaGVhZGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIHBhZGRpbmc6MXJlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiMzQzNEMzc7XFxufVxcbi5jb250ZW50Pi5oZWFkZXI+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbn1cXG4uY29udGVudD4uaGVhZGVyPmgye1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDEnO1xcbiAgICBmb250LXNpemU6MnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6MC44cmVtO1xcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcbn1cXG4uY29udGVudD4uYm9keXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xcbiAgICBwYWRkaW5nLXRvcDowLjhyZW07XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb257XFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3Jte1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTowLjFyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmxhYmVsLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+bGFiZWx7XFxuICAgIG1hcmdpbi1yaWdodDowLjVyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTpcXFwibXlGb250MlxcXCI7XFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6MC4zcmVtO1xcbiAgICBmb250LXNpemU6MXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+YnV0dG9uLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+YnV0dG9ue1xcbiAgICBmb250LXNpemU6MXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcXG4gICAgd2lkdGg6NTBweDtcXG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xcbiAgICBtYXJnaW46MC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmJ1dHRvbjpob3ZlciwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogIzY4NkQ3NjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcHtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZve1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDo2NTBweDtcXG4gICAgaGVpZ2h0OjM1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICBwYWRkaW5nOjFyZW0gMDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6MS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB3aWR0aDozNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OjIuM3JlbTtcXG59XFxuLnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcHtcXG4gICAgZm9udC1zaXplOjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgaGVpZ2h0OjgwcHg7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbiwudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZXtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgY29sb3I6IzNDM0QzNztcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGhlaWdodDoxNTBweDtcXG4gICAgZ3JpZC1yb3c6MS8yO1xcbiAgICBncmlkLWNvbHVtbjoyLzM7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1ne1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1le1xcbiAgICBmb250LXNpemU6MnJlbTtcXG4gICAgbWFyZ2luOjJyZW0gMCAwIDEuNXJlbTtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodCAuaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOjEyMHB4O1xcbiAgICBoZWlnaHQ6MTIwcHg7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LmNvbmRpdGlvbntcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OjEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udDMnO1xcbiAgICBjb2xvcjojM0MzRDM3O1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9te1xcbiAgICBncmlkLXJvdzoyLzM7XFxuICAgIGdyaWQtY29sdW1uOjEvMztcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LDFmcik7XFxuICAgIGdhcDowLjVyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50ZW1we1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOjAuNXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWV7XFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxuICAgIHBhZGRpbmctbGVmdDowLjhyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1lLWluZGljYXRvcntcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udDMnO1xcbiAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcXG4gICAgY29sb3I6IzNDM0QzNztcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDo3MHB4O1xcbiAgICBoZWlnaHQ6NzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTowLjVyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mb3tcXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDo2NTBweDtcXG4gICAgaGVpZ2h0OjM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBwYWRkaW5nOjEuNXJlbSAxLjVyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6MTE3cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOjEuM3JlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC5yYWluLXBlcmNlbnQsLmJvZHk+LndlZWtseS1pbmZvPmRpdiAud2F0ZXItZHJvcD5pbWdcXG4sLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcXG4gICAgcGFkZGluZy10b3A6MC41cmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC53ZWVrbHktaW5mbz5kaXY+LnRlbXAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lclxcbiwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVye1xcbiAgICB3aWR0aDoxNjBweDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbyAucmFpbi1wZXJjZW50LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6NTBweDtcXG4gICAgaGVpZ2h0OjUwcHg7XFxufVxcbi5jb250ZW50Pi5ib2R5PiNlcnJvci1kaWFsb2d7XFxuICAgIHBhZGRpbmc6MnJlbTtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjQwMHB4O1xcbiAgICBsZWZ0OjMwMHB4O1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uY29udGVudD4uYm9keT4jbG9hZGluZy1kaWFsb2d7XFxuICAgIHBhZGRpbmc6MnJlbSAzcmVtO1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6MzAlO1xcbiAgICBsZWZ0OjQwJTtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG59XFxuZm9vdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQzNEMzc7XFxuICAgIGNvbG9yOiNEOEQ5REE7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Myc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9vdGVyPnNwYW57XFxuICAgIHBhZGRpbmctbGVmdDoxLjVyZW07XFxufVxcbkBtZWRpYShtYXgtd2lkdGg6NzAwcHgpe1xcbiAgICAuY29udGVudHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmhlYWRlcj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgaGVpZ2h0OjgwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmhlYWRlcj5oMntcXG4gICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9ue1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm97XFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgd2lkdGg6MzAwcHg7XFxuICAgICAgICBoZWlnaHQ6MjAwcHg7XFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggOTBweDtcXG4gICAgICAgIGdhcDoxLjJyZW07XFxuICAgIH1cXG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0e1xcbiAgICAgICAgd2lkdGg6MTIwcHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcXG4gICAgfVxcbiAgICAudG9kYXktaW5mbz4udG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1we1xcbiAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24sLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGV7XFxuICAgICAgICBmb250LXNpemU6MC42cmVtO1xcbiAgICB9XFxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1le1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDowLjVyZW07XFxuICAgIH1cXG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodCAuaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgICAgICB3aWR0aDo2MHB4O1xcbiAgICAgICAgaGVpZ2h0OjYwcHg7XFxuICAgIH1cXG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4uY29uZGl0aW9ue1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MC44cmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50ZW1we1xcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MC4ycmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1le1xcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDowLjRyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWUtaW5kaWNhdG9ye1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICAgICAgd2lkdGg6NDBweDtcXG4gICAgICAgIGhlaWdodDo0MHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowLjJyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZve1xcbiAgICAgICAgd2lkdGg6MzAwcHg7XFxuICAgICAgICBoZWlnaHQ6MjUwcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOjFyZW0gMC4zcmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXZ7XFxuICAgICAgICBoZWlnaHQ6NDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZXtcXG4gICAgICAgIHdpZHRoOjEwMHB4O1xcbiAgICB9XFxuICAgIC53ZWVrbHktaW5mbz5kaXY+LnRlbXAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lclxcbiAgICAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOjQ4cHg7XFxuICAgIH1cXG4gICAgLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcXG4gICAgICAgIHdpZHRoOjYwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC5yYWluLXBlcmNlbnQsLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcXG4gICAgICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ3tcXG4gICAgICAgIHBhZGRpbmctdG9wOjAuNnJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ3tcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgICAgIHdpZHRoOjQwcHg7XFxuICAgICAgICBoZWlnaHQ6NDBweDtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4jZXJyb3ItZGlhbG9ne1xcbiAgICAgICAgcGFkZGluZzoxcmVtIDAuMnJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICB0b3A6MzAlO1xcbiAgICAgICAgbGVmdDoxMCU7XFxuICAgICAgICB3aWR0aDoyODBweDtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4jbG9hZGluZy1kaWFsb2d7XFxuICAgICAgICBwYWRkaW5nOjFyZW0gMnJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICB0b3A6MzAlO1xcbiAgICAgICAgbGVmdDozNSU7XFxuICAgIH1cXG4gICAgZm9vdGVye1xcbiAgICAgICAgZm9udC1zaXplOjAuN3JlbVxcbiAgICB9XFxuICAgIGZvb3Rlcj5zcGFue1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRDdXJyZW50RGF5SW5mbywgdGltZUZvcm1hdHRlciwgZmV0Y2hEYXRhIH0gZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi9pbWFnZXMvY2xvdWR5LnBuZyc7XG5pbXBvcnQgb3ZlcmNhc3QgZnJvbSAnLi9pbWFnZXMvb3ZlcmNhc3QucG5nJztcbmltcG9ydCBwYXJ0aWFsQ2xvdWQgZnJvbSAnLi9pbWFnZXMvcGFydGlhbC1jbG91ZC5wbmcnO1xuaW1wb3J0IHJhaW55IGZyb20gJy4vaW1hZ2VzL3JhaW55LnBuZyc7XG5pbXBvcnQgc25vdyBmcm9tICcuL2ltYWdlcy9zbm93LnBuZyc7XG5pbXBvcnQgc3VubnkgZnJvbSAnLi9pbWFnZXMvc3VubnkucG5nJztcbmltcG9ydCBuaWdodCBmcm9tICcuL2ltYWdlcy9uaWdodC5wbmcnO1xuaW1wb3J0IGRyb3AgZnJvbSAnLi9pbWFnZXMvd2F0ZXItZHJvcC5wbmcnO1xuLy9Gb3IgbG9hZGluZyB0aGUgaGVhZGVyIGltYWdlXG5mdW5jdGlvbiBsb2FkSGVhZGVySW1hZ2UoKSB7XG4gIGNvbnN0IG15V2VhdGhlckljb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuaGVhZGVyPi5pbWctY29udGFpbmVyJyxcbiAgKTtcbiAgY29uc3QgbXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBteVdlYXRoZXJJY29uLnNyYyA9IHdlYXRoZXJJY29uO1xuICBteVdlYXRoZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKG15V2VhdGhlckljb24pO1xufVxuLy9UaGlzIGZ1bmN0aW9uIGlzIHVzZWQgZm9yIGxvYWRpbmcgd2VhdGhlciBjb25kaXRpb24gaWNvbnMgYmFzZWQgb2YgdGhlIHVzZXNcbmZ1bmN0aW9uIGxvYWRDb250ZW50SW1hZ2VzKCkge1xuICBjb25zdCBvdmVyY2FzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgcGFydGlhbENsb3VkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCByYWlueUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3Qgc25vd0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3Qgc3VubnlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IG5pZ2h0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBkcm9wSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIG92ZXJjYXN0SWNvbi5zcmMgPSBvdmVyY2FzdDtcbiAgcGFydGlhbENsb3VkSWNvbi5zcmMgPSBwYXJ0aWFsQ2xvdWQ7XG4gIHJhaW55SWNvbi5zcmMgPSByYWlueTtcbiAgc25vd0ljb24uc3JjID0gc25vdztcbiAgc3VubnlJY29uLnNyYyA9IHN1bm55O1xuICBuaWdodEljb24uc3JjID0gbmlnaHQ7XG4gIGRyb3BJY29uLnNyYyA9IGRyb3A7XG5cbiAgcmV0dXJuIHtcbiAgICBvdmVyY2FzdEljb24sXG4gICAgcGFydGlhbENsb3VkSWNvbixcbiAgICByYWlueUljb24sXG4gICAgc25vd0ljb24sXG4gICAgc3VubnlJY29uLFxuICAgIG5pZ2h0SWNvbixcbiAgICBkcm9wSWNvbixcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW1wb3J0RGF0YVRvRG9tKGRhdGEpIHtcbiAgY29uc3QgdG9wTGVmdFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1wJyk7XG4gIGNvbnN0IHRvcExlZnRBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uJyxcbiAgKTtcbiAgY29uc3QgdG9wTGVmdERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZScsXG4gICk7XG4gIGNvbnN0IHRvcFJpZ2h0VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1lJyk7XG4gIGNvbnN0IHRvcFJpZ2h0Q29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1yaWdodD4uY29uZGl0aW9uJyk7XG4gIGNvbnN0IHRvcFJpZ2h0SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcudG9wLXJpZ2h0Pi50aW1lLWltZz4uaW1nLWNvbnRhaW5lcicsXG4gICk7XG5cbiAgLy8gVGhlIGN1cnJlbnREYXkgYW5kIGN1cnJlbnREYXlNb250aFllYXIgdmFyaWFibGVzIGlzIGdldHRpbmcgdGhlIGRhdGUsIG1vbnRoIGFuZCB5ZWFyIGluIGEgY29udmVuaWVudCBmb3JtYXRcbiAgY29uc3QgY3VycmVudERheSA9IGdldEN1cnJlbnREYXlJbmZvKGRhdGEuZGF5c1swXS5kYXRldGltZSkuZ2V0RGF5TmFtZSgpO1xuICBjb25zdCBjdXJyZW50RGF5TW9udGhZZWFyID0gZ2V0Q3VycmVudERheUluZm8oXG4gICAgZGF0YS5kYXlzWzBdLmRhdGV0aW1lLFxuICApLmdldEFjdHVhbERheU1vbnRoWWVhcigpO1xuICAvLyBteVRvcFJpZ2h0SWNvbiB2YXJpYWJsZSBjb250YWlucyB0aGUgYXBwcm9wcmlhdGUgaWNvbiB3aGljaCBtYXRjaGVzIHdpdGggdGhlIGN1cnJlbnQgYWlyIGNvbmRpdGlvblxuICBjb25zdCBteVRvcFJpZ2h0SWNvbiA9IGxvYWRJY29uKGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyk7XG5cbiAgdG9wTGVmdFRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnRlbXB9IMKwQ2A7XG4gIHRvcExlZnRBZGRyZXNzLnRleHRDb250ZW50ID0gZGF0YS5yZXNvbHZlZEFkZHJlc3M7XG4gIHRvcExlZnREYXRlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudERheX0sICR7Y3VycmVudERheU1vbnRoWWVhcn1gO1xuICB0b3BSaWdodFRpbWUudGV4dENvbnRlbnQgPSBgJHt0aW1lRm9ybWF0dGVyKGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUpLm15TmV3VGltZX0gJHt0aW1lRm9ybWF0dGVyKGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUpLnRpbWVJbmRpY2F0b3J9YDtcbiAgdG9wUmlnaHRDb25kaXRpb24udGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XG4gIHRvcFJpZ2h0SW1hZ2UuYXBwZW5kQ2hpbGQobXlUb3BSaWdodEljb24pO1xuLy9sb2FkcyB0aGUgY3VycmVudCBkYXkncyB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlIHRoZSBkYXRhIGZldGNoZWQgZnJvbSB0aGUgdmlzdWFsIGNyb3NzaW5nIEFQSVxuICBjb25zdCB0b2RheVRlbXBJbmZvID0gKCkgPT4ge1xuICAgIGxldCB0b2RheUluZm9JbmRleCA9IDE7XG4gICAgbGV0IHNoaWZ0ID0gZmFsc2U7XG4gICAgY29uc3QgYm90dG9tRGl2Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLnRvZGF5LWluZm8+LmJvdHRvbT5kaXYnLFxuICAgICk7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lO1xuICAgIGxldCBpbmRleCA9IGRhdGEuZGF5c1swXS5ob3Vycy5maW5kSW5kZXgoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5kYXRldGltZSA9PT0gY3VycmVudFRpbWUsXG4gICAgKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9XG4gICAgICAgIGRhdGEuZGF5c1swXS5ob3Vycy5maW5kSW5kZXgoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uZGF0ZXRpbWUuc2xpY2UoMCwgMikgPT09IGN1cnJlbnRUaW1lLnNsaWNlKDAsIDIpLFxuICAgICAgICApICsgMjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggKz0gMjtcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gMjMpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICAgIHNoaWZ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFRpbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTsgXG4gICAgYm90dG9tRGl2Q29udGFpbmVycy5mb3JFYWNoKCgpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGVtcGAsXG4gICAgICApO1xuICAgICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4uaW1nLWNvbnRhaW5lcmAsXG4gICAgICApO1xuICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRpbWVgLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpbWVJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50aW1lLWluZGljYXRvcmAsXG4gICAgICApO1xuICAgICAgaWYgKCFzaGlmdCAmJiBpbmRleCA8PSAyMykge1xuICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2RhdGEuZGF5c1swXS5ob3Vyc1tpbmRleF0udGVtcH0gwrBDYDtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRhdGEuZGF5c1swXS5ob3Vyc1tpbmRleF0uaWNvbjtcbiAgICAgICAgY29uc3QgbXlJY29uID0gbG9hZEljb24oY29uZGl0aW9uSWNvbik7XG4gICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChteUljb24pO1xuICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gdGltZUZvcm1hdHRlcihcbiAgICAgICAgICBkYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLmRhdGV0aW1lLFxuICAgICAgICApLm15TmV3VGltZTtcbiAgICAgICAgdGltZUluZGljYXRvci50ZXh0Q29udGVudCA9IHRpbWVGb3JtYXR0ZXIoXG4gICAgICAgICAgZGF0YS5kYXlzWzBdLmhvdXJzW2luZGV4XS5kYXRldGltZSxcbiAgICAgICAgKS50aW1lSW5kaWNhdG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLnRlbXB9IMKwQ2A7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmljb247XG4gICAgICAgIGNvbnN0IG15SWNvbiA9IGxvYWRJY29uKGNvbmRpdGlvbkljb24pO1xuICAgICAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQobXlJY29uKTtcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGRhdGEuZGF5c1sxXS5ob3Vyc1tpbmRleF0uZGF0ZXRpbWU7XG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSB0aW1lRm9ybWF0dGVyKFxuICAgICAgICAgIGRhdGEuZGF5c1sxXS5ob3Vyc1tpbmRleF0uZGF0ZXRpbWUsXG4gICAgICAgICkubXlOZXdUaW1lO1xuICAgICAgICB0aW1lSW5kaWNhdG9yLnRleHRDb250ZW50ID0gdGltZUZvcm1hdHRlcihcbiAgICAgICAgICBkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmRhdGV0aW1lLFxuICAgICAgICApLnRpbWVJbmRpY2F0b3I7XG4gICAgICB9XG4gICAgICBpbmRleCArPSAyO1xuICAgICAgdG9kYXlJbmZvSW5kZXggKz0gMTtcbiAgICAgIGlmIChpbmRleCA+IDIzKSB7XG4gICAgICAgIGlmIChpbmRleCAtIDIgPT09IDIzKSB7XG4gICAgICAgICAgaW5kZXggPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzaGlmdCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4vL2xvYWRzIHRoZSBjdXJyZW50IHdlZWsncyB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlIHRoZSBkYXRhIGZldGNoZWQgZnJvbSB0aGUgdmlzdWFsIGNyb3NzaW5nIEFQSVxuICBjb25zdCB3ZWVrbHlUZW1wSW5mbyA9ICgpID0+IHtcbiAgICBsZXQgd2Vla2x5SW5mb0luZGV4ID0gMTtcbiAgICBjb25zdCB3ZWVrbHlEaXZDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS1pbmZvPmRpdicpO1xuXG4gICAgd2Vla2x5RGl2Q29udGFpbmVycy5mb3JFYWNoKCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi5kYXRlYCxcbiAgICAgICk7XG4gICAgICBjb25zdCByYWluUGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLnJhaW4tcGVyY2VudGAsXG4gICAgICApO1xuICAgICAgY29uc3Qgd2F0ZXJEcm9wSWNvbkNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC53YXRlci1kcm9wYCxcbiAgICAgICk7XG4gICAgICBjb25zdCBjb25kaXRpb25JY29uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4uaW1nLWNvbnRhaW5lcmAsXG4gICAgICApO1xuICAgICAgY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1pbmAsXG4gICAgICApO1xuICAgICAgY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1heGAsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBkYXlzSW5mbyA9IGdldEN1cnJlbnREYXlJbmZvKGRhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLmRhdGV0aW1lKVxuICAgICAgICAuZ2V0RGF5TmFtZSgpXG4gICAgICAgIC5zbGljZSgwLCAzKTtcbiAgICAgIGNvbnN0IGRheXNBbmRNb250aEluZm8gPSBnZXRDdXJyZW50RGF5SW5mbyhcbiAgICAgICAgZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0uZGF0ZXRpbWUsXG4gICAgICApLmdldEFjdHVhbERheU1vbnRoKCk7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7ZGF5c0luZm99LCAke2RheXNBbmRNb250aEluZm8uc2xpY2UoMCwgLTYpfWA7XG4gICAgICByYWluUGVyY2VudC50ZXh0Q29udGVudCA9IGAke2RhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLnByZWNpcHByb2J9ICVgO1xuICAgICAgd2F0ZXJEcm9wSWNvbkNvbnQuYXBwZW5kQ2hpbGQobG9hZENvbnRlbnRJbWFnZXMoKS5kcm9wSWNvbik7XG4gICAgICB0ZW1wTWluLnRleHRDb250ZW50ID0gZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0udGVtcG1pbjtcbiAgICAgIHRlbXBNYXgudGV4dENvbnRlbnQgPSBgLyR7ZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0udGVtcG1heH0gwrBDYDtcblxuICAgICAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGxvYWRJY29uKGRhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLmNvbmRpdGlvbnMpO1xuICAgICAgY29uZGl0aW9uSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25JY29uKTtcblxuICAgICAgd2Vla2x5SW5mb0luZGV4ICs9IDE7XG4gICAgfSk7XG4gIH07XG5cbi8vICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzBdKTtcbi8vICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzFdKTtcbi8vICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzJdKTtcbi8vICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzNdKTtcbiAgdG9kYXlUZW1wSW5mbygpO1xuICB3ZWVrbHlUZW1wSW5mbygpO1xufVxuLy9Bc3NpZ25zIHRoZSByaWdodCB3ZWF0aGVyIGNvbmRpdGlvbiBpY29uIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbmRpdGlvbiBmZXRjaGVkIGZyb20gdGhlIEFQSVxuZnVuY3Rpb24gbG9hZEljb24oY29uZGl0aW9uSWNvbikge1xuICBsZXQgbXlJY29uO1xuICBpZiAoL0NsZWFyL2kudGVzdChjb25kaXRpb25JY29uKSkge1xuICAgIGNvbnNvbGUubG9nKGNvbmRpdGlvbkljb24pO1xuICAgIGlmICgvbmlnaHQvaS50ZXN0KGNvbmRpdGlvbkljb24pKSB7XG4gICAgICBteUljb24gPSBsb2FkQ29udGVudEltYWdlcygpLm5pZ2h0SWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbXlJY29uID0gbG9hZENvbnRlbnRJbWFnZXMoKS5zdW5ueUljb247XG4gICAgfVxuICB9IGVsc2UgaWYgKC9SYWluL2kudGVzdChjb25kaXRpb25JY29uKSkge1xuICAgIG15SWNvbiA9IGxvYWRDb250ZW50SW1hZ2VzKCkucmFpbnlJY29uO1xuICB9IGVsc2UgaWYgKC9wYXJ0bHktY2xvdWR5L2kudGVzdChjb25kaXRpb25JY29uKSkge1xuICAgIGlmICgvbmlnaHQvaS50ZXN0KGNvbmRpdGlvbkljb24pKSB7XG4gICAgICBteUljb24gPSBsb2FkQ29udGVudEltYWdlcygpLm5pZ2h0SWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbXlJY29uID0gbG9hZENvbnRlbnRJbWFnZXMoKS5wYXJ0aWFsQ2xvdWRJY29uO1xuICAgIH1cbiAgfSBlbHNlIGlmICgvT3ZlcmNhc3QvaS50ZXN0KGNvbmRpdGlvbkljb24pIHx8IC9DbG91ZHkvaS50ZXN0KGNvbmRpdGlvbkljb24pKSB7XG4gICAgbXlJY29uID0gbG9hZENvbnRlbnRJbWFnZXMoKS5vdmVyY2FzdEljb247XG4gIH0gZWxzZSBpZiAoL1Nub3cvaS50ZXN0KGNvbmRpdGlvbkljb24pKSB7XG4gICAgbXlJY29uID0gbG9hZENvbnRlbnRJbWFnZXMoKS5zbm93SWNvbjtcbiAgfVxuXG4gIHJldHVybiBteUljb247XG59XG4vL0NsZWFycyBhbGwgdGhlIHByZXZpb3VzIGRhdGEgZnJvbSB0aGUgRE9NXG5mdW5jdGlvbiBjbGVhclByZXZpb3VzQ29udGVudHMoKSB7XG4gIGNvbnN0IHRvcExlZnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcCcpO1xuICBjb25zdCB0b3BMZWZ0QWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbicsXG4gICk7XG4gIGNvbnN0IHRvcExlZnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGUnLFxuICApO1xuICBjb25zdCB0b3BSaWdodFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZScpO1xuICBjb25zdCB0b3BSaWdodENvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcmlnaHQ+LmNvbmRpdGlvbicpO1xuICBjb25zdCB0b3BSaWdodEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnRvcC1yaWdodD4udGltZS1pbWc+LmltZy1jb250YWluZXInLFxuICApO1xuICBjb25zdCBib3R0b21EaXZDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLnRvZGF5LWluZm8+LmJvdHRvbT5kaXYnLFxuICApO1xuXG4gIHRvcExlZnRUZW1wLmlubmVySFRNTCA9ICcnO1xuICB0b3BMZWZ0QWRkcmVzcy50ZXh0Q29udGVudCA9ICcnO1xuICB0b3BMZWZ0RGF0ZS5pbm5lckhUTUwgPSAnJztcbiAgdG9wUmlnaHRUaW1lLmlubmVySFRNTCA9ICcnO1xuICB0b3BSaWdodENvbmRpdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgdG9wUmlnaHRJbWFnZS5pbm5lckhUTUwgPSAnJztcblxuICBsZXQgdG9kYXlJbmZvSW5kZXggPSAxO1xuICBib3R0b21EaXZDb250YWluZXJzLmZvckVhY2goKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRlbXBgLFxuICAgICk7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgLFxuICAgICk7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50aW1lYCxcbiAgICApO1xuICAgIGNvbnN0IHRpbWVJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZS1pbmRpY2F0b3JgLFxuICAgICk7XG5cbiAgICB0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSAnJztcbiAgICBpbWdDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgdGltZS5pbm5lckh0bWwgPSAnJztcbiAgICB0aW1lSW5kaWNhdG9yLmlubmVySHRtbCA9ICcnO1xuXG4gICAgdG9kYXlJbmZvSW5kZXggKz0gMTtcbiAgfSk7XG5cbiAgY29uc3Qgd2Vla2x5SW5mb0RpdkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LWluZm8+ZGl2Jyk7XG4gIGxldCB3ZWVrbHlJbmZvSW5kZXggPSAxO1xuXG4gIHdlZWtseUluZm9EaXZDb250YWluZXJzLmZvckVhY2goKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4uZGF0ZWAsXG4gICAgKTtcbiAgICBjb25zdCByYWluUGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC5yYWluLXBlcmNlbnRgLFxuICAgICk7XG4gICAgY29uc3Qgd2F0ZXJEcm9wSWNvbkNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAud2F0ZXItZHJvcGAsXG4gICAgKTtcbiAgICBjb25zdCBjb25kaXRpb25JY29uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LmltZy1jb250YWluZXJgLFxuICAgICk7XG4gICAgY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi50ZW1wPi5taW5gLFxuICAgICk7XG4gICAgY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi50ZW1wPi5tYXhgLFxuICAgICk7XG5cbiAgICBkYXRlLmlubmVySFRNTCA9ICcnO1xuICAgIHJhaW5QZXJjZW50LmlubmVySHRtbCA9ICcnO1xuICAgIHdhdGVyRHJvcEljb25Db250LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbmRpdGlvbkljb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgdGVtcE1pbi5pbm5lckhUTUwgPSAnJztcbiAgICB0ZW1wTWF4LmlubmVySFRNTCA9ICcnO1xuXG4gICAgd2Vla2x5SW5mb0luZGV4ICs9IDE7XG4gIH0pO1xufVxuLy9DaGVja3MgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgc2NhbGUgYWZ0ZXIgdGhlIHNjYWxlIGJ1dHRvbiBjbGlja2VkXG5mdW5jdGlvbiBjaGVja0N1cnJlbnRTY2FsZSgpIHtcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcCcpXG4gICAgLnRleHRDb250ZW50LnNsaWNlKC0xKTtcbiAgaWYgKHN0YXR1cyA9PT0gJ0MnKSB7XG4gICAgY29udmVydFRvRmFocmVuaGVpdCgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5JykudmFsdWU7XG4gICAgY2xlYXJQcmV2aW91c0NvbnRlbnRzKCk7XG4gICAgZmV0Y2hEYXRhKHVzZXJJbnB1dCk7XG4gIH1cbn1cbi8vQ29udmVydHMgZnJvbSDCsEMgdG8gwrBGXG5mdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KCkge1xuICBjb25zdCB0b3BMZWZ0VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKTtcbiAgY29uc3QgdG9wTGVmdFRlbXBWYWx1ZSA9IHRvcExlZnRUZW1wLnRleHRDb250ZW50O1xuICBjb25zdCB0b3BMZWZ0VGVtcEluTnVtYmVyID0gTnVtYmVyKFxuICAgIHRvcExlZnRUZW1wVmFsdWUuc3Vic3RyaW5nKDAsIHRvcExlZnRUZW1wVmFsdWUubGVuZ3RoIC0gMyksXG4gICk7XG4gIHRvcExlZnRUZW1wLnRleHRDb250ZW50ID0gYCR7KCh0b3BMZWZ0VGVtcEluTnVtYmVyICogOSkgLyA1ICsgMzIpLnRvRml4ZWQoMil9IMKwRmA7XG5cbiAgY29uc3QgYm90dG9tRGl2Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJy50b2RheS1pbmZvPi5ib3R0b20+ZGl2JyxcbiAgKTtcbiAgbGV0IHRvZGF5SW5mb0luZGV4ID0gMTtcbiAgYm90dG9tRGl2Q29udGFpbmVycy5mb3JFYWNoKCgpID0+IHtcbiAgICBjb25zdCBib3R0b21UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRlbXBgLFxuICAgICk7XG4gICAgY29uc3QgYm90dG9tVGVtcFZhbHVlID0gYm90dG9tVGVtcC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBib3R0b21UZW1wSW5OdW1iZXIgPSBOdW1iZXIoXG4gICAgICBib3R0b21UZW1wVmFsdWUuc3Vic3RyaW5nKDAsIGJvdHRvbVRlbXBWYWx1ZS5sZW5ndGggLSAzKSxcbiAgICApO1xuICAgIGJvdHRvbVRlbXAudGV4dENvbnRlbnQgPSBgJHsoKGJvdHRvbVRlbXBJbk51bWJlciAqIDkpIC8gNSArIDMyKS50b0ZpeGVkKDIpfSDCsEZgO1xuXG4gICAgdG9kYXlJbmZvSW5kZXggKz0gMTtcbiAgfSk7XG5cbiAgY29uc3Qgd2Vla2x5SW5mb0RpdkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LWluZm8+ZGl2Jyk7XG4gIGxldCB3ZWVrbHlJbmZvSW5kZXggPSAxO1xuICB3ZWVrbHlJbmZvRGl2Q29udGFpbmVycy5mb3JFYWNoKCgpID0+IHtcbiAgICBjb25zdCBtaW5UZW1wQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC5taW5gLFxuICAgICk7XG4gICAgY29uc3QgbWF4VGVtcENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAubWF4YCxcbiAgICApO1xuICAgIGNvbnN0IG1pblRlbXBWYWx1ZSA9IG1pblRlbXBDb250LnRleHRDb250ZW50O1xuICAgIGNvbnN0IG1heFRlbXBWYWx1ZSA9IG1heFRlbXBDb250LnRleHRDb250ZW50O1xuXG4gICAgY29uc3QgbWluVGVtcEluTnVtYmVyID0gTnVtYmVyKG1pblRlbXBWYWx1ZSk7XG4gICAgY29uc3QgbWF4VGVtcEluTnVtYmVyID0gTnVtYmVyKFxuICAgICAgbWF4VGVtcFZhbHVlLnN1YnN0cmluZygxLCBtYXhUZW1wVmFsdWUubGVuZ3RoIC0gMyksXG4gICAgKTtcblxuICAgIG1pblRlbXBDb250LnRleHRDb250ZW50ID0gYCR7KChtaW5UZW1wSW5OdW1iZXIgKiA5KSAvIDUgKyAzMikudG9GaXhlZCgyKX1gO1xuICAgIG1heFRlbXBDb250LnRleHRDb250ZW50ID0gYC8keygobWF4VGVtcEluTnVtYmVyICogOSkgLyA1ICsgMzIpLnRvRml4ZWQoMil9IMKwRmA7XG5cbiAgICB3ZWVrbHlJbmZvSW5kZXggKz0gMTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIGltcG9ydERhdGFUb0RvbSxcbiAgbG9hZEhlYWRlckltYWdlLFxuICBjaGVja0N1cnJlbnRTY2FsZSxcbiAgY29udmVydFRvRmFocmVuaGVpdCxcbiAgY2xlYXJQcmV2aW91c0NvbnRlbnRzLFxufTtcbiIsImltcG9ydCB7IGltcG9ydERhdGFUb0RvbSB9IGZyb20gJy4vRE9NLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2FkaW5nRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRpbmctZGlhbG9nJyk7XG4gICAgbG9hZGluZ0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7Y2l0eX0/dW5pdEdyb3VwPW1ldHJpYyZrZXk9VkZTMldXTEZXQVRaV0RQNDM5Mzc0WlRaWSZjb250ZW50VHlwZT1qc29uYCxcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH0sXG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGltcG9ydERhdGFUb0RvbShkYXRhKTtcbiAgICBsb2FkaW5nRGlhbG9nLmNsb3NlKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnN0IGVycm9yRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLWRpYWxvZycpO1xuICAgIGNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvci1kaWFsb2c+cCcpO1xuICAgIGVycm9yVGV4dC50ZXh0Q29udGVudCA9IGAke2Vycn1gO1xuICAgIGVycm9yRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZXJyb3JEaWFsb2cuY2xvc2UoKTtcbiAgICB9LCA1MDAwKTtcbiAgICBmZXRjaERhdGEoJ0FzbWFyYScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXlJbmZvKGRhdGVJbmZvKSB7XG4gIGNvbnN0IGRheURhdGEgPSBuZXcgRGF0ZShkYXRlSW5mbyk7XG4gIGNvbnN0IGRheSA9IGRheURhdGEuZ2V0RGF0ZSgpO1xuICBjb25zdCBtb250aCA9IGRheURhdGEuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IHllYXIgPSBkYXlEYXRhLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZ2V0QWN0dWFsRGF5TW9udGhZZWFyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IGdldEFjdHVhbERheU1vbnRoID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IGdldERheU5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbmZvKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgfTtcblxuICByZXR1cm4geyBnZXREYXlOYW1lLCBnZXRBY3R1YWxEYXlNb250aFllYXIsIGdldEFjdHVhbERheU1vbnRoIH07XG59XG5cbmZ1bmN0aW9uIHRpbWVGb3JtYXR0ZXIodGltZSkge1xuICBjb25zdCBteVRpbWUgPSB0aW1lLnNsaWNlKDAsIDUpO1xuICBsZXQgbXlIb3VyID0gbXlUaW1lLnNsaWNlKDAsIDIpO1xuICBjb25zdCBteU1pbnV0ZSA9IG15VGltZS5zbGljZSgzLCA1KTtcbiAgbGV0IHRpbWVJbmRpY2F0b3I7XG5cbiAgaWYgKG15SG91ciA+IDEyKSB7XG4gICAgbXlIb3VyIC09IDEyO1xuICAgIHRpbWVJbmRpY2F0b3IgPSAnUG0nO1xuICB9IGVsc2UgaWYgKG15SG91ciA9PT0gJzEyJykge1xuICAgIHRpbWVJbmRpY2F0b3IgPSAnUG0nO1xuICB9IGVsc2Uge1xuICAgIHRpbWVJbmRpY2F0b3IgPSAnQW0nO1xuICB9XG5cbiAgY29uc3QgbXlOZXdUaW1lID0gYCR7bXlIb3VyfToke215TWludXRlfWA7XG4gIHJldHVybiB7IG15TmV3VGltZSwgdGltZUluZGljYXRvciB9O1xufVxuXG5leHBvcnQgeyBmZXRjaERhdGEsIGdldEN1cnJlbnREYXlJbmZvLCB0aW1lRm9ybWF0dGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhLCB0aW1lRm9ybWF0dGVyIH0gZnJvbSAnLi9mZXRjaC5qcyc7XG5pbXBvcnQge1xuICBsb2FkSGVhZGVySW1hZ2UsXG4gIGNoZWNrQ3VycmVudFNjYWxlLFxuICBjbGVhclByZXZpb3VzQ29udGVudHMsXG59IGZyb20gJy4vRE9NLmpzJztcblxubG9hZEhlYWRlckltYWdlKCk7XG5mZXRjaERhdGEoJ0FzbWFyYScpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcbiAgY2xlYXJQcmV2aW91c0NvbnRlbnRzKCk7XG4gIGZldGNoRGF0YSh1c2VySW5wdXQpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRlbXA+YnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNoZWNrQ3VycmVudFNjYWxlKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==