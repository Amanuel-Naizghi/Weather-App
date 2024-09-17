/** *** */ (() => {
  // webpackBootstrap
  /** *** */

  /** *** */ const __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js!./src/style.css':
      /*! *************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \************************************************************ */
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js',
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js',
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ './node_modules/css-loader/dist/runtime/getUrl.js',
          );
        /* harmony import */ const _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        // Imports

        const ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/JosefinSans-VariableFont_wght.ttf */ './src/fonts/JosefinSans-VariableFont_wght.ttf',
          ),
          __webpack_require__.b,
        );
        const ___CSS_LOADER_URL_IMPORT_1___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/OpenSans_Condensed-Medium.ttf */ './src/fonts/OpenSans_Condensed-Medium.ttf',
          ),
          __webpack_require__.b,
        );
        const ___CSS_LOADER_URL_IMPORT_2___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/new-font2.ttf */ './src/fonts/new-font2.ttf',
          ),
          __webpack_require__.b,
        );
        const ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        const ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___,
          );
        const ___CSS_LOADER_URL_REPLACEMENT_1___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_1___,
          );
        const ___CSS_LOADER_URL_REPLACEMENT_2___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_2___,
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `*{
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
}`,
          '',
          {
            version: 3,
            sources: ['webpack://./src/style.css'],
            names: [],
            mappings:
              'AAAA;IACI,QAAQ;IACR,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,4DAAmE;AACvE;AACA;IACI,sBAAsB;IACtB,4DAA+D;AACnE;AACA;IACI,sBAAsB;IACtB,4DAA+C;AACnD;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,cAAc;AAClB;AACA;IACI,cAAc;IACd,sBAAsB;IACtB,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,2BAA2B;IAC3B,cAAc;AAClB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,sBAAsB;AAC1B;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,oCAAoC;IACpC,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;AACjB;AACA;IACI,UAAU;IACV,WAAW;IACX,oBAAoB;AACxB;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;;IAEI,kBAAkB;AACtB;AACA;;IAEI,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,OAAO;IACP,QAAQ;IACR,sBAAsB;AAC1B;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;IAClB;IACA;QACI,sBAAsB;QACtB,WAAW;QACX,YAAY;QACZ,YAAY;QACZ,6BAA6B;QAC7B,UAAU;IACd;IACA;QACI,WAAW;QACX,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,cAAc;QACd,kBAAkB;IACtB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,cAAc;QACd,mBAAmB;IACvB;IACA;QACI,gBAAgB;QAChB,oBAAoB;IACxB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,mBAAmB;QACnB,gBAAgB;IACpB;IACA;QACI,UAAU;QACV,WAAW;QACX,oBAAoB;IACxB;IACA;QACI,WAAW;QACX,YAAY;QACZ,qBAAqB;QACrB,mBAAmB;IACvB;IACA;QACI,WAAW;QACX,gBAAgB;IACpB;IACA;QACI,WAAW;IACf;IACA;;QAEI,UAAU;IACd;IACA;QACI,UAAU;IACd;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,UAAU;QACV,WAAW;IACf;IACA;QACI,mBAAmB;QACnB,cAAc;QACd,iBAAiB;QACjB,OAAO;QACP,QAAQ;QACR,WAAW;IACf;IACA;QACI,iBAAiB;QACjB,cAAc;QACd,iBAAiB;QACjB,OAAO;QACP,QAAQ;IACZ;IACA;QACI;IACJ;IACA;QACI,aAAa;IACjB;AACJ',
            sourcesContent: [
              "*{\n    margin:0;\n    padding:0;\n}\n@font-face{\n    font-family: 'myFont1';\n    src:url(./fonts/JosefinSans-VariableFont_wght.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont2';\n    src:url(./fonts/OpenSans_Condensed-Medium.ttf) format(truetype);\n}\n@font-face{\n    font-family: 'myFont3';\n    src:url(./fonts/new-font2.ttf) format(truetype);\n}\nbody{\n    font-family:'myFont2';\n}\n.content>.header{\n    display:flex;\n    justify-content: center;\n    align-items:center;\n    padding:1rem 0;\n    background:#3C3D37;\n}\n.content>.header>.img-container>img{\n    width:100px;\n    height:100px;\n}\n.content>.header>h2{\n    font-family: 'myFont1';\n    font-size:2rem;\n    margin-left:0.8rem;\n    color:whitesmoke;\n}\n.content>.body{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    background:#D8D9DA;\n    padding-top:0.8rem;\n    position:relative;\n}\n.content>.body>.user-selection{\n    font-size:1.2rem;\n}\n.content>.body>.user-selection form{\n    display:flex;\n    align-items:center;\n    margin-bottom:0.1rem;\n}\n.content>.body>.user-selection form>label,.body>.user-selection>.set-temp>label{\n    margin-right:0.5rem;\n}\n.content>.body>.user-selection form>input{\n    border-radius: 10px;\n    font-family:\"myFont2\";\n    height:25px;\n    padding-left:0.3rem;\n    font-size:1rem;\n}\n.content>.body>.user-selection form>button,.body>.user-selection>.set-temp>button{\n    font-size:1rem;\n    font-family: 'myFont2';\n    width:50px;\n    background:#3C3D37;\n    margin:0.5rem;\n    border-radius: 5px;\n    color:whitesmoke;\n}\n.content>.body>.user-selection form>button:hover,.body>.user-selection>.set-temp>button:hover{\n    background: #686D76;\n}\n.content>.body>.user-selection>.set-temp{\n    text-align:center;\n}\n.content>.body>.today-info{\n    background: whitesmoke;\n    width:650px;\n    height:350px;\n    margin-bottom:1.2rem;\n    border-radius:10px;\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 1fr 2fr;\n    padding:1rem 0;\n}\n.body>.today-info>.top-left{\n    display:flex;\n    flex-direction:column;\n    grid-row:1/2;\n    grid-column: 1/2;\n    width:350px;\n    padding-left:2.3rem;\n}\n.today-info>.top-left>.temp-container>.temp{\n    font-size:4rem;\n    font-weight:bold;\n}\n.body>.today-info>.top-left>.location-container{\n    display:flex;\n    flex-direction:column;\n    height:80px;\n}\n.body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{\n    font-size:1.5rem;\n    color:#3C3D37;\n}\n.body>.today-info>.top-right{\n    display:flex;\n    flex-direction:column;\n    height:150px;\n    grid-row:1/2;\n    grid-column:2/3;\n}\n.body>.today-info>.top-right>.time-img{\n    display:flex;\n}\n.body>.today-info>.top-right>.time-img>.time{\n    font-size:2rem;\n    margin:2rem 0 0 1.5rem;\n}\n.body>.today-info>.top-right .img-container>img{\n    width:120px;\n    height:120px;\n}\n.body>.today-info>.top-right>.condition{\n    font-size:1.5rem;\n    padding-left:1.2rem;\n    font-family:'myFont3';\n    color:#3C3D37;\n}\n.content>.body>.today-info>.bottom{\n    grid-row:2/3;\n    grid-column:1/3;\n    display:grid;\n    grid-template-columns: repeat(5,1fr);\n    gap:0.5rem;\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n}\n.content>.body>.today-info>.bottom>div{\n    display:flex;\n    flex-direction:column;\n}\n.content>.body>.today-info>.bottom>div>.temp{\n    font-size:1.5rem;\n    margin-bottom:0.5rem;\n}\n.content>.body>.today-info>.bottom>div>.time{\n    font-size:1.2rem;\n    padding-left:0.8rem;\n}\n.content>.body>.today-info>.bottom>div>.time-indicator{\n    font-family:'myFont3';\n    padding-left:1rem;\n    color:#3C3D37;\n}\n.content>.body>.today-info>.bottom>div>.img-container>img{\n    width:70px;\n    height:70px;\n    margin-bottom:0.5rem;\n}\n.content>.body>.weekly-info{\n    background:whitesmoke;\n    width:650px;\n    height:350px;\n    border-radius:10px;\n    display:flex;\n    flex-direction:column;\n    padding:1.5rem 1.5rem;\n    box-sizing: border-box;\n    margin-bottom:2rem;\n}\n.content>.body>.weekly-info>div{\n    display:flex;\n    height:117px;\n    justify-content: space-between;\n    font-size:1.3rem;\n}\n.content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div .water-drop>img\n,.body>.weekly-info>div>.temp{\n    padding-top:0.5rem;\n}\n.content>.body>.weekly-info>div>.date,.weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container\n,.content>.body>.weekly-info>div>.img-container{\n    width:160px;\n    text-align: start;\n}\n.body>.weekly-info>div>.rain-percent-container{\n    display:flex;\n    justify-content: center;\n}\n.content>.body>.weekly-info .rain-percent-container{\n    display:flex;\n}\n.content>.body>.weekly-info>div>.img-container>img{\n    width:50px;\n    height:50px;\n}\n.content>.body>#error-dialog{\n    padding:2rem;\n    font-size:1.5rem;\n    background:#D8D9DA;\n    position:absolute;\n    top:400px;\n    left:300px;\n    border:1px solid black;\n}\n.content>.body>#loading-dialog{\n    padding:2rem 3rem;\n    font-size:1.5rem;\n    background:#D8D9DA;\n    position:absolute;\n    top:30%;\n    left:40%;\n    border:1px solid black;\n}\nfooter{\n    background-color:#3C3D37;\n    color:#D8D9DA;\n    font-family: 'myFont3';\n    text-align: center;\n}\nfooter>span{\n    padding-left:1.5rem;\n}\n@media(max-width:700px){\n    .content{\n        width:100%;\n    }\n    .content>.header>.img-container>img{\n        width:80px;\n        height:80px;\n    }\n    .content>.header>h2{\n        font-size:1.8rem;\n    }\n    .content>.body>.user-selection{\n        font-size:1rem;\n    }\n    .content>.body>.today-info{\n        background: whitesmoke;\n        width:300px;\n        height:200px;\n        display:grid;\n        grid-template-rows: 90px 90px;\n        gap:1.2rem;\n    }\n    .body>.today-info>.top-left{\n        width:120px;\n        padding-left:1rem;\n    }\n    .today-info>.top-left>.temp-container>.temp{\n        font-size:1.8rem;\n    }\n    .body>.today-info>.top-left>.location-container>.location,.top-left>.location-container>.date{\n        font-size:0.6rem;\n    }\n    .body>.today-info>.top-right>.time-img>.time{\n        font-size:1rem;\n        margin-left:0.5rem;\n    }\n    .body>.today-info>.top-right .img-container>img{\n        width:60px;\n        height:60px;\n    }\n    .body>.today-info>.top-right>.condition{\n        font-size:1rem;\n        padding-left:0.8rem;\n    }\n    .content>.body>.today-info>.bottom>div>.temp{\n        font-size:0.8rem;\n        margin-bottom:0.2rem;\n    }\n    .content>.body>.today-info>.bottom>div>.time{\n        font-size:0.8rem;\n        padding-left:0.4rem;\n    }\n    .content>.body>.today-info>.bottom>div>.time-indicator{\n        padding-left:0.5rem;\n        font-size:0.8rem;\n    }\n    .content>.body>.today-info>.bottom>div>.img-container>img{\n        width:40px;\n        height:40px;\n        margin-bottom:0.2rem;\n    }\n    .content>.body>.weekly-info{\n        width:300px;\n        height:250px;\n        flex-direction:column;\n        padding:1rem 0.3rem;\n    }\n    .content>.body>.weekly-info>div{\n        height:40px;\n        font-size:0.8rem;\n    }\n    .content>.body>.weekly-info>div>.date{\n        width:100px;\n    }\n    .weekly-info>div>.temp,.content>.body>.weekly-info>div>.rain-percent-container\n    ,.content>.body>.weekly-info>div>.img-container{\n        width:48px;\n    }\n    .body>.weekly-info>div>.temp{\n        width:60px;\n    }\n    .content>.body>.weekly-info>div>.date,.body>.weekly-info>div .rain-percent,.body>.weekly-info>div>.temp{\n        padding-top:0.5rem;\n    }\n    .body>.weekly-info>div .water-drop>img{\n        padding-top:0.6rem;\n    }\n    .body>.weekly-info>div .water-drop>img{\n        width:15px;\n        height:15px;\n    }\n    .content>.body>.weekly-info>div>.img-container>img{\n        width:40px;\n        height:40px;\n    }\n    .content>.body>#error-dialog{\n        padding:1rem 0.2rem;\n        font-size:1rem;\n        position:absolute;\n        top:30%;\n        left:10%;\n        width:280px;\n    }\n    .content>.body>#loading-dialog{\n        padding:1rem 2rem;\n        font-size:1rem;\n        position:absolute;\n        top:30%;\n        left:35%;\n    }\n    footer{\n        font-size:0.7rem\n    }\n    footer>span{\n        display:block;\n    }\n}",
            ],
            sourceRoot: '',
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          const list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map((item) => {
              let content = '';
              const needLayer = typeof item[5] !== 'undefined';
              if (item[4]) {
                content += '@supports ('.concat(item[4], ') {');
              }
              if (item[2]) {
                content += '@media '.concat(item[2], ' {');
              }
              if (needLayer) {
                content += '@layer'.concat(
                  item[5].length > 0 ? ' '.concat(item[5]) : '',
                  ' {',
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += '}';
              }
              if (item[2]) {
                content += '}';
              }
              if (item[4]) {
                content += '}';
              }
              return content;
            }).join('');
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === 'string') {
              modules = [[null, modules, undefined]];
            }
            const alreadyImportedModules = {};
            if (dedupe) {
              for (let k = 0; k < this.length; k++) {
                const id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (let _k = 0; _k < modules.length; _k++) {
              const item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== 'undefined') {
                if (typeof item[5] === 'undefined') {
                  item[5] = layer;
                } else {
                  item[1] = '@layer'
                    .concat(item[5].length > 0 ? ' '.concat(item[5]) : '', ' {')
                    .concat(item[1], '}');
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = '@media '
                    .concat(item[2], ' {')
                    .concat(item[1], '}');
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = ''.concat(supports);
                } else {
                  item[1] = '@supports ('
                    .concat(item[4], ') {')
                    .concat(item[1], '}');
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
      /*! ********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \******************************************************* */
      /***/ (module) => {
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
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
              '"',
            );
          }
          return url;
        };

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
      /*! ************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************** */
      /***/ (module) => {
        module.exports = function (item) {
          const content = item[1];
          const cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === 'function') {
            const base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            );
            const data =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                base64,
              );
            const sourceMapping = '/*# '.concat(data, ' */');
            return [content].concat([sourceMapping]).join('\n');
          }
          return [content].join('\n');
        };

        /***/
      },

    /***/ './src/style.css':
      /*! ***********************!*\
  !*** ./src/style.css ***!
  \********************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js',
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ './node_modules/style-loader/dist/runtime/styleDomAPI.js',
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ './node_modules/style-loader/dist/runtime/insertBySelector.js',
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js',
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ './node_modules/style-loader/dist/runtime/insertStyleElement.js',
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ './node_modules/style-loader/dist/runtime/styleTagTransform.js',
          );
        /* harmony import */ const _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /* #__PURE__ */ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ const _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ './node_modules/css-loader/dist/cjs.js!./src/style.css',
          );

        const options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            'head',
          );
        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        const update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default,
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__
            .default.locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__
                .default.locals
            : undefined;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
      /***/ (module) => {
        const stylesInDOM = [];
        function getIndexByIdentifier(identifier) {
          let result = -1;
          for (let i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }
          return result;
        }
        function modulesToDom(list, options) {
          const idCountMap = {};
          const identifiers = [];
          for (let i = 0; i < list.length; i++) {
            const item = list[i];
            const id = options.base ? item[0] + options.base : item[0];
            const count = idCountMap[id] || 0;
            const identifier = ''.concat(id, ' ').concat(count);
            idCountMap[id] = count + 1;
            const indexByIdentifier = getIndexByIdentifier(identifier);
            const obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };
            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              const updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier,
                updater,
                references: 1,
              });
            }
            identifiers.push(identifier);
          }
          return identifiers;
        }
        function addElementStyle(obj, options) {
          const api = options.domAPI(options);
          api.update(obj);
          const updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };
          return updater;
        }
        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          let lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];
            for (let i = 0; i < lastIdentifiers.length; i++) {
              const identifier = lastIdentifiers[i];
              const index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }
            const newLastIdentifiers = modulesToDom(newList, options);
            for (let _i = 0; _i < lastIdentifiers.length; _i++) {
              const _identifier = lastIdentifiers[_i];
              const _index = getIndexByIdentifier(_identifier);
              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();
                stylesInDOM.splice(_index, 1);
              }
            }
            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
      /***/ (module) => {
        const memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
          const target = getTarget(insert);
          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          const element = document.createElement('style');
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          const nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute('nonce', nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          let css = '';
          if (obj.supports) {
            css += '@supports ('.concat(obj.supports, ') {');
          }
          if (obj.media) {
            css += '@media '.concat(obj.media, ' {');
          }
          const needLayer = typeof obj.layer !== 'undefined';
          if (needLayer) {
            css += '@layer'.concat(
              obj.layer.length > 0 ? ' '.concat(obj.layer) : '',
              ' {',
            );
          }
          css += obj.css;
          if (needLayer) {
            css += '}';
          }
          if (obj.media) {
            css += '}';
          }
          if (obj.supports) {
            css += '}';
          }
          const { sourceMap } = obj;
          if (sourceMap && typeof btoa !== 'undefined') {
            css +=
              '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                ' */',
              );
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
          if (typeof document === 'undefined') {
            return {
              update: function update() {},
              remove: function remove() {},
            };
          }
          const styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
      /***/ (module) => {
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

        /***/
      },

    /***/ './src/DOM.js':
      /*! ********************!*\
  !*** ./src/DOM.js ***!
  \******************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ checkCurrentScale: () =>
            /* binding */ checkCurrentScale,
          /* harmony export */ clearPreviousContents: () =>
            /* binding */ clearPreviousContents,
          /* harmony export */ convertToFahrenheit: () =>
            /* binding */ convertToFahrenheit,
          /* harmony export */ importDataToDom: () =>
            /* binding */ importDataToDom,
          /* harmony export */ loadHeaderImage: () =>
            /* binding */ loadHeaderImage,
          /* harmony export */
        });
        /* harmony import */ const _fetch_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./fetch.js */ './src/fetch.js');
        /* harmony import */ const _images_cloudy_png__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./images/cloudy.png */ './src/images/cloudy.png',
          );
        /* harmony import */ const _images_overcast_png__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./images/overcast.png */ './src/images/overcast.png',
          );
        /* harmony import */ const _images_partial_cloud_png__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./images/partial-cloud.png */ './src/images/partial-cloud.png',
          );
        /* harmony import */ const _images_rainy_png__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./images/rainy.png */ './src/images/rainy.png',
          );
        /* harmony import */ const _images_snow_png__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./images/snow.png */ './src/images/snow.png');
        /* harmony import */ const _images_sunny_png__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./images/sunny.png */ './src/images/sunny.png',
          );
        /* harmony import */ const _images_night_png__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./images/night.png */ './src/images/night.png',
          );
        /* harmony import */ const _images_water_drop_png__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./images/water-drop.png */ './src/images/water-drop.png',
          );

        function loadHeaderImage() {
          const myWeatherIconContainer = document.querySelector(
            '.header>.img-container',
          );
          const myWeatherIcon = document.createElement('img');
          myWeatherIcon.src = _images_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;
          myWeatherIconContainer.appendChild(myWeatherIcon);
        }

        function loadContentImages() {
          const overcastIcon = document.createElement('img');
          const partialCloudIcon = document.createElement('img');
          const rainyIcon = document.createElement('img');
          const snowIcon = document.createElement('img');
          const sunnyIcon = document.createElement('img');
          const nightIcon = document.createElement('img');
          const dropIcon = document.createElement('img');

          overcastIcon.src = _images_overcast_png__WEBPACK_IMPORTED_MODULE_2__;
          partialCloudIcon.src =
            _images_partial_cloud_png__WEBPACK_IMPORTED_MODULE_3__;
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
          const topLeftTemp = document.querySelector(
            '.top-left>.temp-container>.temp',
          );
          const topLeftAddress = document.querySelector(
            '.top-left>.location-container>.location',
          );
          const topLeftDate = document.querySelector(
            '.top-left>.location-container>.date',
          );
          const topRightTime = document.querySelector(
            '.top-right>.time-img>.time',
          );
          const topRightCondition = document.querySelector(
            '.top-right>.condition',
          );
          const topRightImage = document.querySelector(
            '.top-right>.time-img>.img-container',
          );

          // The currentDay and currentDayMonthYear variables is getting the date, month and year in a convenient format
          const currentDay = (0,
          _fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(
            data.days[0].datetime,
          ).getDayName();
          const currentDayMonthYear = (0,
          _fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(
            data.days[0].datetime,
          ).getActualDayMonthYear();
          // myTopRightIcon variable contains the appropriate icon which matches with the current air condition
          const myTopRightIcon = loadIcon(data.currentConditions.conditions);

          topLeftTemp.textContent = `${data.currentConditions.temp} °C`;
          topLeftAddress.textContent = data.resolvedAddress;
          topLeftDate.textContent = `${currentDay}, ${currentDayMonthYear}`;
          topRightTime.textContent = `${(0, _fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.currentConditions.datetime).myNewTime} ${(0, _fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(data.currentConditions.datetime).timeIndicator}`;
          topRightCondition.textContent = data.currentConditions.conditions;
          topRightImage.appendChild(myTopRightIcon);

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
              console.log('Yes');
              index =
                data.days[0].hours.findIndex(
                  (item) =>
                    item.datetime.slice(0, 2) === currentTime.slice(0, 2),
                ) + 2;
            } else {
              index += 2;
            }
            if (index > 23) {
              index = 0;
              shift = true;
            }
            console.log(currentTime);
            console.log(index); // Just for checking the index of the time selected
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
                time.textContent = (0,
                _fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
                  data.days[0].hours[index].datetime,
                ).myNewTime;
                timeIndicator.textContent = (0,
                _fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
                  data.days[0].hours[index].datetime,
                ).timeIndicator;
              } else {
                temperature.textContent = `${data.days[1].hours[index].temp} °C`;
                const conditionIcon = data.days[1].hours[index].icon;
                const myIcon = loadIcon(conditionIcon);
                imgContainer.appendChild(myIcon);
                time.textContent = data.days[1].hours[index].datetime;
                time.textContent = (0,
                _fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
                  data.days[1].hours[index].datetime,
                ).myNewTime;
                timeIndicator.textContent = (0,
                _fetch_js__WEBPACK_IMPORTED_MODULE_0__.timeFormatter)(
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

          const weeklyTempInfo = () => {
            let weeklyInfoIndex = 1;
            const weeklyDivContainers =
              document.querySelectorAll('.weekly-info>div');

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

              const daysInfo = (0,
              _fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(
                data.days[weeklyInfoIndex].datetime,
              )
                .getDayName()
                .slice(0, 3);
              const daysAndMonthInfo = (0,
              _fetch_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentDayInfo)(
                data.days[weeklyInfoIndex].datetime,
              ).getActualDayMonth();
              date.textContent = `${daysInfo}, ${daysAndMonthInfo.slice(0, -6)}`;
              rainPercent.textContent = `${data.days[weeklyInfoIndex].precipprob} %`;
              waterDropIconCont.appendChild(loadContentImages().dropIcon);
              tempMin.textContent = data.days[weeklyInfoIndex].tempmin;
              tempMax.textContent = `/${data.days[weeklyInfoIndex].tempmax} °C`;

              const conditionIcon = loadIcon(
                data.days[weeklyInfoIndex].conditions,
              );
              conditionIconContainer.appendChild(conditionIcon);

              weeklyInfoIndex += 1;
            });
          };

          console.log(data.days[0]);
          console.log(data.days[1]);
          console.log(data.days[2]);
          console.log(data.days[3]);
          todayTempInfo();
          weeklyTempInfo();
        }

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
          } else if (
            /Overcast/i.test(conditionIcon) ||
            /Cloudy/i.test(conditionIcon)
          ) {
            myIcon = loadContentImages().overcastIcon;
          } else if (/Snow/i.test(conditionIcon)) {
            myIcon = loadContentImages().snowIcon;
          }

          return myIcon;
        }

        function clearPreviousContents() {
          const topLeftTemp = document.querySelector(
            '.top-left>.temp-container>.temp',
          );
          const topLeftAddress = document.querySelector(
            '.top-left>.location-container>.location',
          );
          const topLeftDate = document.querySelector(
            '.top-left>.location-container>.date',
          );
          const topRightTime = document.querySelector(
            '.top-right>.time-img>.time',
          );
          const topRightCondition = document.querySelector(
            '.top-right>.condition',
          );
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

          const weeklyInfoDivContainers =
            document.querySelectorAll('.weekly-info>div');
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

        function checkCurrentScale() {
          const status = document
            .querySelector('.top-left>.temp-container>.temp')
            .textContent.slice(-1);
          if (status === 'C') {
            convertToFahrenheit();
          } else {
            const userInput = document.querySelector('#city').value;
            clearPreviousContents();
            (0, _fetch_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(userInput);
          }
        }

        function convertToFahrenheit() {
          const topLeftTemp = document.querySelector(
            '.top-left>.temp-container>.temp',
          );
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

          const weeklyInfoDivContainers =
            document.querySelectorAll('.weekly-info>div');
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

        /***/
      },

    /***/ './src/fetch.js':
      /*! **********************!*\
  !*** ./src/fetch.js ***!
  \********************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ fetchData: () => /* binding */ fetchData,
          /* harmony export */ getCurrentDayInfo: () =>
            /* binding */ getCurrentDayInfo,
          /* harmony export */ timeFormatter: () => /* binding */ timeFormatter,
          /* harmony export */
        });
        /* harmony import */ const _DOM_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./DOM.js */ './src/DOM.js');

        async function fetchData(city) {
          try {
            const loadingDialog = document.querySelector('#loading-dialog');
            loadingDialog.showModal();
            const response = await fetch(
              `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,
              { mode: 'cors' },
            );
            const data = await response.json();
            (0, _DOM_js__WEBPACK_IMPORTED_MODULE_0__.importDataToDom)(data);
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

        /***/
      },

    /***/ './src/fonts/JosefinSans-VariableFont_wght.ttf':
      /*! *****************************************************!*\
  !*** ./src/fonts/JosefinSans-VariableFont_wght.ttf ***!
  \**************************************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}613585db06f849ca7717.ttf`;

        /***/
      },

    /***/ './src/fonts/OpenSans_Condensed-Medium.ttf':
      /*! *************************************************!*\
  !*** ./src/fonts/OpenSans_Condensed-Medium.ttf ***!
  \************************************************ */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}5bbd4a90d400c77a2e76.ttf`;

        /***/
      },

    /***/ './src/fonts/new-font2.ttf':
      /*! *********************************!*\
  !*** ./src/fonts/new-font2.ttf ***!
  \******************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}38b1e6579a4ae98f4318.ttf`;

        /***/
      },

    /***/ './src/images/cloudy.png':
      /*! *******************************!*\
  !*** ./src/images/cloudy.png ***!
  \****************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}f009e441a604361a2783.png`;

        /***/
      },

    /***/ './src/images/night.png':
      /*! ******************************!*\
  !*** ./src/images/night.png ***!
  \***************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}73464bf22b99cd9e9f77.png`;

        /***/
      },

    /***/ './src/images/overcast.png':
      /*! *********************************!*\
  !*** ./src/images/overcast.png ***!
  \******************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}0fc2d7e24f9b16140170.png`;

        /***/
      },

    /***/ './src/images/partial-cloud.png':
      /*! **************************************!*\
  !*** ./src/images/partial-cloud.png ***!
  \************************************* */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}20f0cc1d2fa7fabb49bb.png`;

        /***/
      },

    /***/ './src/images/rainy.png':
      /*! ******************************!*\
  !*** ./src/images/rainy.png ***!
  \***************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}7610299be6da6fba0d64.png`;

        /***/
      },

    /***/ './src/images/snow.png':
      /*! *****************************!*\
  !*** ./src/images/snow.png ***!
  \**************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}9957456da0445490c376.png`;

        /***/
      },

    /***/ './src/images/sunny.png':
      /*! ******************************!*\
  !*** ./src/images/sunny.png ***!
  \***************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}b972dcf61eb381f03551.png`;

        /***/
      },

    /***/ './src/images/water-drop.png':
      /*! ***********************************!*\
  !*** ./src/images/water-drop.png ***!
  \********************************** */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = `${__webpack_require__.p}03bc0409d105596860a6.png`;

        /***/
      },

    /** *** */
  };
  /** ********************************************************************* */
  /** *** */ // The module cache
  /** *** */ const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ // The require function
  /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ if (cachedModule !== undefined) {
      /** *** */ return cachedModule.exports;
      /** *** */
    }
    /** *** */ // Create a new module (and put it into the cache)
    /** *** */ const module = (__webpack_module_cache__[moduleId] = {
      /** *** */ id: moduleId,
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */
    });
    /** *** */
    /** *** */ // Execute the module function
    /** *** */ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /** *** */
    /** *** */ // Return the exports of the module
    /** *** */ return module.exports;
    /** *** */
  }
  /** *** */
  /** *** */ // expose the modules object (__webpack_modules__)
  /** *** */ __webpack_require__.m = __webpack_modules__;
  /** *** */
  /** ********************************************************************* */
  /** *** */ /* webpack/runtime/compat get default export */
  /** *** */ (() => {
    /** *** */ // getDefaultExport function for compatibility with non-harmony modules
    /** *** */ __webpack_require__.n = (module) => {
      /** *** */ const getter =
        module && module.__esModule
          ? /** *** */ () => module.default
          : /** *** */ () => module;
      /** *** */ __webpack_require__.d(getter, { a: getter });
      /** *** */ return getter;
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/define property getters */
  /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (const key in definition) {
        /** *** */ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /** *** */ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /** *** */
        }
        /** *** */
      }
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/global */
  /** *** */ (() => {
    /** *** */ __webpack_require__.g = (function () {
      /** *** */ if (typeof globalThis === 'object') return globalThis;
      /** *** */ try {
        /** *** */ return this || new Function('return this')();
        /** *** */
      } catch (e) {
        /** *** */ if (typeof window === 'object') return window;
        /** *** */
      }
      /** *** */
    })();
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/make namespace object */
  /** *** */ (() => {
    /** *** */ // define __esModule on exports
    /** *** */ __webpack_require__.r = (exports) => {
      /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/publicPath */
  /** *** */ (() => {
    /** *** */ let scriptUrl;
    /** *** */ if (__webpack_require__.g.importScripts)
      scriptUrl = `${__webpack_require__.g.location}`;
    /** *** */ const { document } = __webpack_require__.g;
    /** *** */ if (!scriptUrl && document) {
      /** *** */ if (
        document.currentScript &&
        document.currentScript.tagName.toUpperCase() === 'SCRIPT'
      )
        /** *** */ scriptUrl = document.currentScript.src;
      /** *** */ if (!scriptUrl) {
        /** *** */ const scripts = document.getElementsByTagName('script');
        /** *** */ if (scripts.length) {
          /** *** */ let i = scripts.length - 1;
          /** *** */ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /** *** */
        }
        /** *** */
      }
      /** *** */
    }
    /** *** */ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /** *** */ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /** *** */ if (!scriptUrl)
      throw new Error('Automatic publicPath is not supported in this browser');
    /** *** */ scriptUrl = scriptUrl
      .replace(/#.*$/, '')
      .replace(/\?.*$/, '')
      .replace(/\/[^\/]+$/, '/');
    /** *** */ __webpack_require__.p = scriptUrl;
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/jsonp chunk loading */
  /** *** */ (() => {
    /** *** */ __webpack_require__.b = document.baseURI || self.location.href;
    /** *** */
    /** *** */ // object to store loaded and loading chunks
    /** *** */ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /** *** */ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /** *** */ const installedChunks = {
      /** *** */ main: 0,
      /** *** */
    };
    /** *** */
    /** *** */ // no chunk on demand loading
    /** *** */
    /** *** */ // no prefetching
    /** *** */
    /** *** */ // no preloaded
    /** *** */
    /** *** */ // no HMR
    /** *** */
    /** *** */ // no HMR manifest
    /** *** */
    /** *** */ // no on chunks loaded
    /** *** */
    /** *** */ // no jsonp function
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/nonce */
  /** *** */ (() => {
    /** *** */ __webpack_require__.nc = undefined;
    /** *** */
  })();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ const _style_css__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(/*! ./style.css */ './src/style.css');
  /* harmony import */ const _fetch_js__WEBPACK_IMPORTED_MODULE_1__ =
    __webpack_require__(/*! ./fetch.js */ './src/fetch.js');
  /* harmony import */ const _DOM_js__WEBPACK_IMPORTED_MODULE_2__ =
    __webpack_require__(/*! ./DOM.js */ './src/DOM.js');

  (0, _DOM_js__WEBPACK_IMPORTED_MODULE_2__.loadHeaderImage)();
  (0, _fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)('Asmara');

  document.querySelector('#my-form').addEventListener('submit', () => {
    const userInput = document.querySelector('#city').value;
    (0, _DOM_js__WEBPACK_IMPORTED_MODULE_2__.clearPreviousContents)();
    (0, _fetch_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(userInput);
  });
  document.querySelector('.set-temp>button').addEventListener('click', () => {
    (0, _DOM_js__WEBPACK_IMPORTED_MODULE_2__.checkCurrentScale)();
  });
  /** *** */
})();
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUpBQXdEO0FBQ3BHLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUNBQW1DO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVB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O0FBQ0EsSUFBSSw4REFBcUI7QUFDekIsSUFBSSxvREFBUztBQUNiLENBQUM7QUFDRDtBQUNBLElBQUksMkRBQWlCO0FBQ3JCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Kb3NlZmluU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9uZXctZm9udDIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDEnO1xuICAgIHNyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KHRydWV0eXBlKTtcbn1cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCh0cnVldHlwZSk7XG59XG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Myc7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQodHJ1ZXR5cGUpO1xufVxuYm9keXtcbiAgICBmb250LWZhbWlseTonbXlGb250Mic7XG59XG4uY29udGVudD4uaGVhZGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgcGFkZGluZzoxcmVtIDA7XG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xufVxuLmNvbnRlbnQ+LmhlYWRlcj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xufVxuLmNvbnRlbnQ+LmhlYWRlcj5oMntcbiAgICBmb250LWZhbWlseTogJ215Rm9udDEnO1xuICAgIGZvbnQtc2l6ZToycmVtO1xuICAgIG1hcmdpbi1sZWZ0OjAuOHJlbTtcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xufVxuLmNvbnRlbnQ+LmJvZHl7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xuICAgIHBhZGRpbmctdG9wOjAuOHJlbTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbntcbiAgICBmb250LXNpemU6MS4ycmVtO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm17XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOjAuMXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmxhYmVsLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+bGFiZWx7XG4gICAgbWFyZ2luLXJpZ2h0OjAuNXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6XCJteUZvbnQyXCI7XG4gICAgaGVpZ2h0OjI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OjAuM3JlbTtcbiAgICBmb250LXNpemU6MXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmJ1dHRvbiwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmJ1dHRvbntcbiAgICBmb250LXNpemU6MXJlbTtcbiAgICBmb250LWZhbWlseTogJ215Rm9udDInO1xuICAgIHdpZHRoOjUwcHg7XG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xuICAgIG1hcmdpbjowLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOndoaXRlc21va2U7XG59XG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb24gZm9ybT5idXR0b246aG92ZXIsLmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcD5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzY4NkQ3Njtcbn1cbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mb3tcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIHdpZHRoOjY1MHB4O1xuICAgIGhlaWdodDozNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gICAgcGFkZGluZzoxcmVtIDA7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnR7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBncmlkLXJvdzoxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICB3aWR0aDozNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6Mi4zcmVtO1xufVxuLnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcHtcbiAgICBmb250LXNpemU6NHJlbTtcbiAgICBmb250LXdlaWdodDpib2xkO1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBoZWlnaHQ6ODBweDtcbn1cbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbiwudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZXtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIGNvbG9yOiMzQzNEMzc7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgaGVpZ2h0OjE1MHB4O1xuICAgIGdyaWQtcm93OjEvMjtcbiAgICBncmlkLWNvbHVtbjoyLzM7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi50aW1lLWltZ3tcbiAgICBkaXNwbGF5OmZsZXg7XG59XG4uYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZXtcbiAgICBmb250LXNpemU6MnJlbTtcbiAgICBtYXJnaW46MnJlbSAwIDAgMS41cmVtO1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodCAuaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6MTIwcHg7XG4gICAgaGVpZ2h0OjEyMHB4O1xufVxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4uY29uZGl0aW9ue1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OjEuMnJlbTtcbiAgICBmb250LWZhbWlseTonbXlGb250Myc7XG4gICAgY29sb3I6IzNDM0QzNztcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b217XG4gICAgZ3JpZC1yb3c6Mi8zO1xuICAgIGdyaWQtY29sdW1uOjEvMztcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwxZnIpO1xuICAgIGdhcDowLjVyZW07XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xufVxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXZ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbn1cbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50ZW1we1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTowLjVyZW07XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZXtcbiAgICBmb250LXNpemU6MS4ycmVtO1xuICAgIHBhZGRpbmctbGVmdDowLjhyZW07XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4udGltZS1pbmRpY2F0b3J7XG4gICAgZm9udC1mYW1pbHk6J215Rm9udDMnO1xuICAgIHBhZGRpbmctbGVmdDoxcmVtO1xuICAgIGNvbG9yOiMzQzNEMzc7XG59XG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6NzBweDtcbiAgICBoZWlnaHQ6NzBweDtcbiAgICBtYXJnaW4tYm90dG9tOjAuNXJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mb3tcbiAgICBiYWNrZ3JvdW5kOndoaXRlc21va2U7XG4gICAgd2lkdGg6NjUwcHg7XG4gICAgaGVpZ2h0OjM1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIHBhZGRpbmc6MS41cmVtIDEuNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXZ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGhlaWdodDoxMTdweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOjEuM3JlbTtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmRhdGUsLmJvZHk+LndlZWtseS1pbmZvPmRpdiAucmFpbi1wZXJjZW50LC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1nXG4sLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcbiAgICBwYWRkaW5nLXRvcDowLjVyZW07XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC53ZWVrbHktaW5mbz5kaXY+LnRlbXAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lclxuLC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LmltZy1jb250YWluZXJ7XG4gICAgd2lkdGg6MTYwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5yYWluLXBlcmNlbnQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbyAucmFpbi1wZXJjZW50LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OmZsZXg7XG59XG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcbiAgICB3aWR0aDo1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xufVxuLmNvbnRlbnQ+LmJvZHk+I2Vycm9yLWRpYWxvZ3tcbiAgICBwYWRkaW5nOjJyZW07XG4gICAgZm9udC1zaXplOjEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjQwMHB4O1xuICAgIGxlZnQ6MzAwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbn1cbi5jb250ZW50Pi5ib2R5PiNsb2FkaW5nLWRpYWxvZ3tcbiAgICBwYWRkaW5nOjJyZW0gM3JlbTtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIGJhY2tncm91bmQ6I0Q4RDlEQTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MzAlO1xuICAgIGxlZnQ6NDAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG59XG5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0MzRDM3O1xuICAgIGNvbG9yOiNEOEQ5REE7XG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQzJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXI+c3BhbntcbiAgICBwYWRkaW5nLWxlZnQ6MS41cmVtO1xufVxuQG1lZGlhKG1heC13aWR0aDo3MDBweCl7XG4gICAgLmNvbnRlbnR7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuICAgIC5jb250ZW50Pi5oZWFkZXI+LmltZy1jb250YWluZXI+aW1ne1xuICAgICAgICB3aWR0aDo4MHB4O1xuICAgICAgICBoZWlnaHQ6ODBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmhlYWRlcj5oMntcbiAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9ue1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm97XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICBoZWlnaHQ6MjAwcHg7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA5MHB4IDkwcHg7XG4gICAgICAgIGdhcDoxLjJyZW07XG4gICAgfVxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdHtcbiAgICAgICAgd2lkdGg6MTIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDoxcmVtO1xuICAgIH1cbiAgICAudG9kYXktaW5mbz4udG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1we1xuICAgICAgICBmb250LXNpemU6MS44cmVtO1xuICAgIH1cbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24sLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGV7XG4gICAgICAgIGZvbnQtc2l6ZTowLjZyZW07XG4gICAgfVxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1le1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MC41cmVtO1xuICAgIH1cbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLXJpZ2h0IC5pbWctY29udGFpbmVyPmltZ3tcbiAgICAgICAgd2lkdGg6NjBweDtcbiAgICAgICAgaGVpZ2h0OjYwcHg7XG4gICAgfVxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LmNvbmRpdGlvbntcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDowLjhyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50ZW1we1xuICAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOjAuMnJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWV7XG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDowLjRyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1lLWluZGljYXRvcntcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LmltZy1jb250YWluZXI+aW1ne1xuICAgICAgICB3aWR0aDo0MHB4O1xuICAgICAgICBoZWlnaHQ6NDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowLjJyZW07XG4gICAgfVxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mb3tcbiAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgIGhlaWdodDoyNTBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICBwYWRkaW5nOjFyZW0gMC4zcmVtO1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2e1xuICAgICAgICBoZWlnaHQ6NDBweDtcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZXtcbiAgICAgICAgd2lkdGg6MTAwcHg7XG4gICAgfVxuICAgIC53ZWVrbHktaW5mbz5kaXY+LnRlbXAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lclxuICAgICwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVye1xuICAgICAgICB3aWR0aDo0OHB4O1xuICAgIH1cbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xuICAgICAgICB3aWR0aDo2MHB4O1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLnJhaW4tcGVyY2VudCwuYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi50ZW1we1xuICAgICAgICBwYWRkaW5nLXRvcDowLjVyZW07XG4gICAgfVxuICAgIC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1ne1xuICAgICAgICBwYWRkaW5nLXRvcDowLjZyZW07XG4gICAgfVxuICAgIC5ib2R5Pi53ZWVrbHktaW5mbz5kaXYgLndhdGVyLWRyb3A+aW1ne1xuICAgICAgICB3aWR0aDoxNXB4O1xuICAgICAgICBoZWlnaHQ6MTVweDtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcj5pbWd7XG4gICAgICAgIHdpZHRoOjQwcHg7XG4gICAgICAgIGhlaWdodDo0MHB4O1xuICAgIH1cbiAgICAuY29udGVudD4uYm9keT4jZXJyb3ItZGlhbG9ne1xuICAgICAgICBwYWRkaW5nOjFyZW0gMC4ycmVtO1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDozMCU7XG4gICAgICAgIGxlZnQ6MTAlO1xuICAgICAgICB3aWR0aDoyODBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQ+LmJvZHk+I2xvYWRpbmctZGlhbG9ne1xuICAgICAgICBwYWRkaW5nOjFyZW0gMnJlbTtcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MzAlO1xuICAgICAgICBsZWZ0OjM1JTtcbiAgICB9XG4gICAgZm9vdGVye1xuICAgICAgICBmb250LXNpemU6MC43cmVtXG4gICAgfVxuICAgIGZvb3Rlcj5zcGFue1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztBQUNiO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNERBQW1FO0FBQ3ZFO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNERBQStEO0FBQ25FO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsNERBQStDO0FBQ25EO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JC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QGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQxJztcXG4gICAgc3JjOnVybCguL2ZvbnRzL0pvc2VmaW5TYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZikgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcXG4gICAgc3JjOnVybCguL2ZvbnRzL09wZW5TYW5zX0NvbmRlbnNlZC1NZWRpdW0udHRmKSBmb3JtYXQodHJ1ZXR5cGUpO1xcbn1cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDMnO1xcbiAgICBzcmM6dXJsKC4vZm9udHMvbmV3LWZvbnQyLnR0ZikgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udDInO1xcbn1cXG4uY29udGVudD4uaGVhZGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIHBhZGRpbmc6MXJlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiMzQzNEMzc7XFxufVxcbi5jb250ZW50Pi5oZWFkZXI+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbn1cXG4uY29udGVudD4uaGVhZGVyPmgye1xcbiAgICBmb250LWZhbWlseTogJ215Rm9udDEnO1xcbiAgICBmb250LXNpemU6MnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6MC44cmVtO1xcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcbn1cXG4uY29udGVudD4uYm9keXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xcbiAgICBwYWRkaW5nLXRvcDowLjhyZW07XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG4uY29udGVudD4uYm9keT4udXNlci1zZWxlY3Rpb257XFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3Jte1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTowLjFyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmxhYmVsLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+bGFiZWx7XFxuICAgIG1hcmdpbi1yaWdodDowLjVyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTpcXFwibXlGb250MlxcXCI7XFxuICAgIGhlaWdodDoyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6MC4zcmVtO1xcbiAgICBmb250LXNpemU6MXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uIGZvcm0+YnV0dG9uLC5ib2R5Pi51c2VyLXNlbGVjdGlvbj4uc2V0LXRlbXA+YnV0dG9ue1xcbiAgICBmb250LXNpemU6MXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdteUZvbnQyJztcXG4gICAgd2lkdGg6NTBweDtcXG4gICAgYmFja2dyb3VuZDojM0MzRDM3O1xcbiAgICBtYXJnaW46MC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi51c2VyLXNlbGVjdGlvbiBmb3JtPmJ1dHRvbjpob3ZlciwuYm9keT4udXNlci1zZWxlY3Rpb24+LnNldC10ZW1wPmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogIzY4NkQ3NjtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9uPi5zZXQtdGVtcHtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZve1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDo2NTBweDtcXG4gICAgaGVpZ2h0OjM1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOjEuMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICBwYWRkaW5nOjFyZW0gMDtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6MS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICB3aWR0aDozNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OjIuM3JlbTtcXG59XFxuLnRvZGF5LWluZm8+LnRvcC1sZWZ0Pi50ZW1wLWNvbnRhaW5lcj4udGVtcHtcXG4gICAgZm9udC1zaXplOjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgaGVpZ2h0OjgwcHg7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbiwudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZXtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgY29sb3I6IzNDM0QzNztcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGhlaWdodDoxNTBweDtcXG4gICAgZ3JpZC1yb3c6MS8yO1xcbiAgICBncmlkLWNvbHVtbjoyLzM7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1ne1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1le1xcbiAgICBmb250LXNpemU6MnJlbTtcXG4gICAgbWFyZ2luOjJyZW0gMCAwIDEuNXJlbTtcXG59XFxuLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodCAuaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOjEyMHB4O1xcbiAgICBoZWlnaHQ6MTIwcHg7XFxufVxcbi5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LmNvbmRpdGlvbntcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OjEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udDMnO1xcbiAgICBjb2xvcjojM0MzRDM3O1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9te1xcbiAgICBncmlkLXJvdzoyLzM7XFxuICAgIGdyaWQtY29sdW1uOjEvMztcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LDFmcik7XFxuICAgIGdhcDowLjVyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbn1cXG4uY29udGVudD4uYm9keT4udG9kYXktaW5mbz4uYm90dG9tPmRpdntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50ZW1we1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOjAuNXJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWV7XFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxuICAgIHBhZGRpbmctbGVmdDowLjhyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1lLWluZGljYXRvcntcXG4gICAgZm9udC1mYW1pbHk6J215Rm9udDMnO1xcbiAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcXG4gICAgY29sb3I6IzNDM0QzNztcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDo3MHB4O1xcbiAgICBoZWlnaHQ6NzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTowLjVyZW07XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mb3tcXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xcbiAgICB3aWR0aDo2NTBweDtcXG4gICAgaGVpZ2h0OjM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBwYWRkaW5nOjEuNXJlbSAxLjVyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi1ib3R0b206MnJlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6MTE3cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOjEuM3JlbTtcXG59XFxuLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC5yYWluLXBlcmNlbnQsLmJvZHk+LndlZWtseS1pbmZvPmRpdiAud2F0ZXItZHJvcD5pbWdcXG4sLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcXG4gICAgcGFkZGluZy10b3A6MC41cmVtO1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5kYXRlLC53ZWVrbHktaW5mbz5kaXY+LnRlbXAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lclxcbiwuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVye1xcbiAgICB3aWR0aDoxNjBweDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5ib2R5Pi53ZWVrbHktaW5mbz5kaXY+LnJhaW4tcGVyY2VudC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbyAucmFpbi1wZXJjZW50LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG4uY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgd2lkdGg6NTBweDtcXG4gICAgaGVpZ2h0OjUwcHg7XFxufVxcbi5jb250ZW50Pi5ib2R5PiNlcnJvci1kaWFsb2d7XFxuICAgIHBhZGRpbmc6MnJlbTtcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDojRDhEOURBO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjQwMHB4O1xcbiAgICBsZWZ0OjMwMHB4O1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uY29udGVudD4uYm9keT4jbG9hZGluZy1kaWFsb2d7XFxuICAgIHBhZGRpbmc6MnJlbSAzcmVtO1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiNEOEQ5REE7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6MzAlO1xcbiAgICBsZWZ0OjQwJTtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG59XFxuZm9vdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzQzNEMzc7XFxuICAgIGNvbG9yOiNEOEQ5REE7XFxuICAgIGZvbnQtZmFtaWx5OiAnbXlGb250Myc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZm9vdGVyPnNwYW57XFxuICAgIHBhZGRpbmctbGVmdDoxLjVyZW07XFxufVxcbkBtZWRpYShtYXgtd2lkdGg6NzAwcHgpe1xcbiAgICAuY29udGVudHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmhlYWRlcj4uaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICAgICAgaGVpZ2h0OjgwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmhlYWRlcj5oMntcXG4gICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnVzZXItc2VsZWN0aW9ue1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm97XFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgd2lkdGg6MzAwcHg7XFxuICAgICAgICBoZWlnaHQ6MjAwcHg7XFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkwcHggOTBweDtcXG4gICAgICAgIGdhcDoxLjJyZW07XFxuICAgIH1cXG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1sZWZ0e1xcbiAgICAgICAgd2lkdGg6MTIwcHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcXG4gICAgfVxcbiAgICAudG9kYXktaW5mbz4udG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1we1xcbiAgICAgICAgZm9udC1zaXplOjEuOHJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4udG9kYXktaW5mbz4udG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4ubG9jYXRpb24sLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmRhdGV7XFxuICAgICAgICBmb250LXNpemU6MC42cmVtO1xcbiAgICB9XFxuICAgIC5ib2R5Pi50b2RheS1pbmZvPi50b3AtcmlnaHQ+LnRpbWUtaW1nPi50aW1le1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDowLjVyZW07XFxuICAgIH1cXG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodCAuaW1nLWNvbnRhaW5lcj5pbWd7XFxuICAgICAgICB3aWR0aDo2MHB4O1xcbiAgICAgICAgaGVpZ2h0OjYwcHg7XFxuICAgIH1cXG4gICAgLmJvZHk+LnRvZGF5LWluZm8+LnRvcC1yaWdodD4uY29uZGl0aW9ue1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6MC44cmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50ZW1we1xcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206MC4ycmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi50b2RheS1pbmZvPi5ib3R0b20+ZGl2Pi50aW1le1xcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDowLjRyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LnRpbWUtaW5kaWNhdG9ye1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LnRvZGF5LWluZm8+LmJvdHRvbT5kaXY+LmltZy1jb250YWluZXI+aW1ne1xcbiAgICAgICAgd2lkdGg6NDBweDtcXG4gICAgICAgIGhlaWdodDo0MHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowLjJyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZve1xcbiAgICAgICAgd2lkdGg6MzAwcHg7XFxuICAgICAgICBoZWlnaHQ6MjUwcHg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgICAgICBwYWRkaW5nOjFyZW0gMC4zcmVtO1xcbiAgICB9XFxuICAgIC5jb250ZW50Pi5ib2R5Pi53ZWVrbHktaW5mbz5kaXZ7XFxuICAgICAgICBoZWlnaHQ6NDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZXtcXG4gICAgICAgIHdpZHRoOjEwMHB4O1xcbiAgICB9XFxuICAgIC53ZWVrbHktaW5mbz5kaXY+LnRlbXAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4ucmFpbi1wZXJjZW50LWNvbnRhaW5lclxcbiAgICAsLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uaW1nLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOjQ4cHg7XFxuICAgIH1cXG4gICAgLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcXG4gICAgICAgIHdpZHRoOjYwcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnQ+LmJvZHk+LndlZWtseS1pbmZvPmRpdj4uZGF0ZSwuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC5yYWluLXBlcmNlbnQsLmJvZHk+LndlZWtseS1pbmZvPmRpdj4udGVtcHtcXG4gICAgICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ3tcXG4gICAgICAgIHBhZGRpbmctdG9wOjAuNnJlbTtcXG4gICAgfVxcbiAgICAuYm9keT4ud2Vla2x5LWluZm8+ZGl2IC53YXRlci1kcm9wPmltZ3tcXG4gICAgICAgIHdpZHRoOjE1cHg7XFxuICAgICAgICBoZWlnaHQ6MTVweDtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4ud2Vla2x5LWluZm8+ZGl2Pi5pbWctY29udGFpbmVyPmltZ3tcXG4gICAgICAgIHdpZHRoOjQwcHg7XFxuICAgICAgICBoZWlnaHQ6NDBweDtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4jZXJyb3ItZGlhbG9ne1xcbiAgICAgICAgcGFkZGluZzoxcmVtIDAuMnJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICB0b3A6MzAlO1xcbiAgICAgICAgbGVmdDoxMCU7XFxuICAgICAgICB3aWR0aDoyODBweDtcXG4gICAgfVxcbiAgICAuY29udGVudD4uYm9keT4jbG9hZGluZy1kaWFsb2d7XFxuICAgICAgICBwYWRkaW5nOjFyZW0gMnJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgICB0b3A6MzAlO1xcbiAgICAgICAgbGVmdDozNSU7XFxuICAgIH1cXG4gICAgZm9vdGVye1xcbiAgICAgICAgZm9udC1zaXplOjAuN3JlbVxcbiAgICB9XFxuICAgIGZvb3Rlcj5zcGFue1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2dldEN1cnJlbnREYXlJbmZvLHRpbWVGb3JtYXR0ZXIsZmV0Y2hEYXRhfSBmcm9tICcuL2ZldGNoLmpzJztcbmltcG9ydCB3ZWF0aGVySWNvbiBmcm9tICcuL2ltYWdlcy9jbG91ZHkucG5nJztcbmltcG9ydCBvdmVyY2FzdCBmcm9tICcuL2ltYWdlcy9vdmVyY2FzdC5wbmcnO1xuaW1wb3J0IHBhcnRpYWxDbG91ZCBmcm9tICcuL2ltYWdlcy9wYXJ0aWFsLWNsb3VkLnBuZyc7XG5pbXBvcnQgcmFpbnkgZnJvbSAnLi9pbWFnZXMvcmFpbnkucG5nJztcbmltcG9ydCBzbm93IGZyb20gJy4vaW1hZ2VzL3Nub3cucG5nJztcbmltcG9ydCBzdW5ueSBmcm9tICcuL2ltYWdlcy9zdW5ueS5wbmcnO1xuaW1wb3J0IG5pZ2h0IGZyb20gJy4vaW1hZ2VzL25pZ2h0LnBuZyc7XG5pbXBvcnQgZHJvcCBmcm9tICcuL2ltYWdlcy93YXRlci1kcm9wLnBuZyc7XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXJJbWFnZSgpe1xuICAgIGNvbnN0IG15V2VhdGhlckljb25Db250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcj4uaW1nLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG15V2VhdGhlckljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbXlXZWF0aGVySWNvbi5zcmM9d2VhdGhlckljb247XG4gICAgbXlXZWF0aGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChteVdlYXRoZXJJY29uKTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRlbnRJbWFnZXMoKXtcbiAgICBsZXQgb3ZlcmNhc3RJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBwYXJ0aWFsQ2xvdWRJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCByYWlueUljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGV0IHNub3dJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBzdW5ueUljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGV0IG5pZ2h0SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgZHJvcEljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBvdmVyY2FzdEljb24uc3JjPW92ZXJjYXN0O1xuICAgIHBhcnRpYWxDbG91ZEljb24uc3JjPXBhcnRpYWxDbG91ZDtcbiAgICByYWlueUljb24uc3JjPXJhaW55O1xuICAgIHNub3dJY29uLnNyYz1zbm93O1xuICAgIHN1bm55SWNvbi5zcmM9c3Vubnk7XG4gICAgbmlnaHRJY29uLnNyYz1uaWdodDtcbiAgICBkcm9wSWNvbi5zcmM9ZHJvcDtcblxuICAgIHJldHVybiB7b3ZlcmNhc3RJY29uLHBhcnRpYWxDbG91ZEljb24scmFpbnlJY29uLHNub3dJY29uLHN1bm55SWNvbixuaWdodEljb24sZHJvcEljb259O1xufVxuXG5mdW5jdGlvbiBpbXBvcnREYXRhVG9Eb20oZGF0YSl7XG4gICAgbGV0IHRvcExlZnRUZW1wPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKTtcbiAgICBsZXQgdG9wTGVmdEFkZHJlc3M9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1sZWZ0Pi5sb2NhdGlvbi1jb250YWluZXI+LmxvY2F0aW9uJyk7XG4gICAgbGV0IHRvcExlZnREYXRlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5kYXRlJyk7XG4gICAgbGV0IHRvcFJpZ2h0VGltZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi50aW1lLWltZz4udGltZScpO1xuICAgIGxldCB0b3BSaWdodENvbmRpdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi5jb25kaXRpb24nKTtcbiAgICBsZXQgdG9wUmlnaHRJbWFnZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLXJpZ2h0Pi50aW1lLWltZz4uaW1nLWNvbnRhaW5lcicpO1xuXG4gICAgXG4gICAgLy9UaGUgY3VycmVudERheSBhbmQgY3VycmVudERheU1vbnRoWWVhciB2YXJpYWJsZXMgaXMgZ2V0dGluZyB0aGUgZGF0ZSwgbW9udGggYW5kIHllYXIgaW4gYSBjb252ZW5pZW50IGZvcm1hdFxuICAgIGxldCBjdXJyZW50RGF5PWdldEN1cnJlbnREYXlJbmZvKGRhdGEuZGF5c1swXS5kYXRldGltZSkuZ2V0RGF5TmFtZSgpO1xuICAgIGxldCBjdXJyZW50RGF5TW9udGhZZWFyPWdldEN1cnJlbnREYXlJbmZvKGRhdGEuZGF5c1swXS5kYXRldGltZSkuZ2V0QWN0dWFsRGF5TW9udGhZZWFyKCk7XG4gICAgLy9teVRvcFJpZ2h0SWNvbiB2YXJpYWJsZSBjb250YWlucyB0aGUgYXBwcm9wcmlhdGUgaWNvbiB3aGljaCBtYXRjaGVzIHdpdGggdGhlIGN1cnJlbnQgYWlyIGNvbmRpdGlvblxuICAgIGxldCBteVRvcFJpZ2h0SWNvbj1sb2FkSWNvbihkYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnMpO1xuXG4gICAgdG9wTGVmdFRlbXAudGV4dENvbnRlbnQ9YCR7ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wfSDCsENgO1xuICAgIHRvcExlZnRBZGRyZXNzLnRleHRDb250ZW50PWRhdGEucmVzb2x2ZWRBZGRyZXNzO1xuICAgIHRvcExlZnREYXRlLnRleHRDb250ZW50PWAke2N1cnJlbnREYXl9LCAke2N1cnJlbnREYXlNb250aFllYXJ9YDtcbiAgICB0b3BSaWdodFRpbWUudGV4dENvbnRlbnQ9YCR7dGltZUZvcm1hdHRlcihkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lKS5teU5ld1RpbWV9ICR7dGltZUZvcm1hdHRlcihkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lKS50aW1lSW5kaWNhdG9yfWA7XG4gICAgdG9wUmlnaHRDb25kaXRpb24udGV4dENvbnRlbnQ9ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zO1xuICAgIHRvcFJpZ2h0SW1hZ2UuYXBwZW5kQ2hpbGQobXlUb3BSaWdodEljb24pO1xuXG4gICAgbGV0IHRvZGF5VGVtcEluZm89KCk9PntcbiAgICAgICAgbGV0IHRvZGF5SW5mb0luZGV4PTE7XG4gICAgICAgIGxldCBzaGlmdD1mYWxzZTtcbiAgICAgICAgbGV0IGJvdHRvbURpdkNvbnRhaW5lcnM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZGF5LWluZm8+LmJvdHRvbT5kaXYnKTtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lPWRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWU7XG4gICAgICAgIGxldCBpbmRleD0oZGF0YS5kYXlzWzBdLmhvdXJzLmZpbmRJbmRleChpdGVtPT5pdGVtLmRhdGV0aW1lPT09Y3VycmVudFRpbWUpKTtcbiAgICAgICAgaWYoaW5kZXg9PT0tMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlllc1wiKTtcbiAgICAgICAgICAgIGluZGV4PShkYXRhLmRheXNbMF0uaG91cnMuZmluZEluZGV4KGl0ZW09Pml0ZW0uZGF0ZXRpbWUuc2xpY2UoMCwyKT09PWN1cnJlbnRUaW1lLnNsaWNlKDAsMikpKSsyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBpbmRleCs9MjtcbiAgICAgICAgfVxuICAgICAgICBpZihpbmRleD4yMyl7XG4gICAgICAgICAgICBpbmRleD0wO1xuICAgICAgICAgICAgc2hpZnQ9dHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGltZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTsvL0p1c3QgZm9yIGNoZWNraW5nIHRoZSBpbmRleCBvZiB0aGUgdGltZSBzZWxlY3RlZFxuICAgICAgICBib3R0b21EaXZDb250YWluZXJzLmZvckVhY2goKCk9PntcbiAgICAgICAgICAgIGxldCB0ZW1wZXJhdHVyZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRlbXBgKTtcbiAgICAgICAgICAgIGxldCBpbWdDb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCk7XG4gICAgICAgICAgICBsZXQgdGltZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRpbWVgKTtcbiAgICAgICAgICAgIGxldCB0aW1lSW5kaWNhdG9yPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZS1pbmRpY2F0b3JgKTtcbiAgICAgICAgICAgIGlmKCFzaGlmdCYmaW5kZXg8PTIzKXtcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudD1gJHtkYXRhLmRheXNbMF0uaG91cnNbaW5kZXhdLnRlbXB9IMKwQ2A7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkljb249ZGF0YS5kYXlzWzBdLmhvdXJzW2luZGV4XS5pY29uO1xuICAgICAgICAgICAgICAgIGxldCBteUljb249bG9hZEljb24oY29uZGl0aW9uSWNvbik7XG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgICAgICAgICAgICAgdGltZS50ZXh0Q29udGVudD10aW1lRm9ybWF0dGVyKGRhdGEuZGF5c1swXS5ob3Vyc1tpbmRleF0uZGF0ZXRpbWUpLm15TmV3VGltZTtcbiAgICAgICAgICAgICAgICB0aW1lSW5kaWNhdG9yLnRleHRDb250ZW50PXRpbWVGb3JtYXR0ZXIoZGF0YS5kYXlzWzBdLmhvdXJzW2luZGV4XS5kYXRldGltZSkudGltZUluZGljYXRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQ9YCR7ZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS50ZW1wfSDCsENgO1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb25JY29uPWRhdGEuZGF5c1sxXS5ob3Vyc1tpbmRleF0uaWNvbjtcbiAgICAgICAgICAgICAgICBsZXQgbXlJY29uPWxvYWRJY29uKGNvbmRpdGlvbkljb24pO1xuICAgICAgICAgICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChteUljb24pO1xuICAgICAgICAgICAgICAgIHRpbWUudGV4dENvbnRlbnQ9ZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS5kYXRldGltZTtcbiAgICAgICAgICAgICAgICB0aW1lLnRleHRDb250ZW50PXRpbWVGb3JtYXR0ZXIoZGF0YS5kYXlzWzFdLmhvdXJzW2luZGV4XS5kYXRldGltZSkubXlOZXdUaW1lO1xuICAgICAgICAgICAgICAgIHRpbWVJbmRpY2F0b3IudGV4dENvbnRlbnQ9dGltZUZvcm1hdHRlcihkYXRhLmRheXNbMV0uaG91cnNbaW5kZXhdLmRhdGV0aW1lKS50aW1lSW5kaWNhdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrPTI7XG4gICAgICAgICAgICB0b2RheUluZm9JbmRleCs9MTtcbiAgICAgICAgICAgIGlmKGluZGV4PjIzKXtcbiAgICAgICAgICAgICAgICBpZihpbmRleC0yPT09MjMpe1xuICAgICAgICAgICAgICAgICAgICBpbmRleD0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBpbmRleD0wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaGlmdD10cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgd2Vla2x5VGVtcEluZm89KCk9PntcbiAgICAgICAgbGV0IHdlZWtseUluZm9JbmRleD0xO1xuICAgICAgICBsZXQgd2Vla2x5RGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LWluZm8+ZGl2Jyk7XG5cbiAgICAgICAgd2Vla2x5RGl2Q29udGFpbmVycy5mb3JFYWNoKCgpPT57XG4gICAgICAgICAgICBsZXQgZGF0ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LmRhdGVgKTtcbiAgICAgICAgICAgIGxldCByYWluUGVyY2VudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLnJhaW4tcGVyY2VudGApO1xuICAgICAgICAgICAgbGV0IHdhdGVyRHJvcEljb25Db250PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAud2F0ZXItZHJvcGApO1xuICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkljb25Db250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCk7XG4gICAgICAgICAgICBsZXQgdGVtcE1pbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1pbmApO1xuICAgICAgICAgICAgbGV0IHRlbXBNYXg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi50ZW1wPi5tYXhgKTtcblxuICAgICAgICAgICAgbGV0IGRheXNJbmZvPWdldEN1cnJlbnREYXlJbmZvKGRhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLmRhdGV0aW1lKS5nZXREYXlOYW1lKCkuc2xpY2UoMCwzKTtcbiAgICAgICAgICAgIGxldCBkYXlzQW5kTW9udGhJbmZvPWdldEN1cnJlbnREYXlJbmZvKGRhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLmRhdGV0aW1lKS5nZXRBY3R1YWxEYXlNb250aCgpO1xuICAgICAgICAgICAgZGF0ZS50ZXh0Q29udGVudD1gJHtkYXlzSW5mb30sICR7ZGF5c0FuZE1vbnRoSW5mby5zbGljZSgwLC02KX1gO1xuICAgICAgICAgICAgcmFpblBlcmNlbnQudGV4dENvbnRlbnQ9YCR7ZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0ucHJlY2lwcHJvYn0gJWA7XG4gICAgICAgICAgICB3YXRlckRyb3BJY29uQ29udC5hcHBlbmRDaGlsZChsb2FkQ29udGVudEltYWdlcygpLmRyb3BJY29uKTtcbiAgICAgICAgICAgIHRlbXBNaW4udGV4dENvbnRlbnQ9ZGF0YS5kYXlzW3dlZWtseUluZm9JbmRleF0udGVtcG1pbjtcbiAgICAgICAgICAgIHRlbXBNYXgudGV4dENvbnRlbnQ9YC8ke2RhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLnRlbXBtYXh9IMKwQ2A7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBjb25kaXRpb25JY29uPWxvYWRJY29uKGRhdGEuZGF5c1t3ZWVrbHlJbmZvSW5kZXhdLmNvbmRpdGlvbnMpO1xuICAgICAgICAgICAgY29uZGl0aW9uSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25JY29uKTtcblxuICAgICAgICAgICAgd2Vla2x5SW5mb0luZGV4Kz0xO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1swXSk7XG4gICAgY29uc29sZS5sb2coZGF0YS5kYXlzWzFdKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRheXNbMl0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1szXSk7XG4gICAgdG9kYXlUZW1wSW5mbygpO1xuICAgIHdlZWtseVRlbXBJbmZvKCk7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGxvYWRJY29uKGNvbmRpdGlvbkljb24pe1xuICAgIGxldCBteUljb247XG4gICAgaWYoL0NsZWFyL2kudGVzdChjb25kaXRpb25JY29uKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmRpdGlvbkljb24pO1xuICAgICAgICBpZigvbmlnaHQvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgICAgIG15SWNvbj1sb2FkQ29udGVudEltYWdlcygpLm5pZ2h0SWNvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbXlJY29uPWxvYWRDb250ZW50SW1hZ2VzKCkuc3VubnlJY29uO1xuICAgICAgICB9ICBcbiAgICB9XG4gICAgZWxzZSBpZigvUmFpbi9pLnRlc3QoY29uZGl0aW9uSWNvbikpe1xuICAgICAgICBteUljb249bG9hZENvbnRlbnRJbWFnZXMoKS5yYWlueUljb247XG4gICAgfVxuICAgIGVsc2UgaWYoL3BhcnRseS1jbG91ZHkvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgaWYoL25pZ2h0L2kudGVzdChjb25kaXRpb25JY29uKSl7XG4gICAgICAgICAgICBteUljb249bG9hZENvbnRlbnRJbWFnZXMoKS5uaWdodEljb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIG15SWNvbj1sb2FkQ29udGVudEltYWdlcygpLnBhcnRpYWxDbG91ZEljb247XG4gICAgICAgIH0gIFxuICAgIH1cbiAgICBlbHNlIGlmKC9PdmVyY2FzdC9pLnRlc3QoY29uZGl0aW9uSWNvbil8fC9DbG91ZHkvaS50ZXN0KGNvbmRpdGlvbkljb24pKXtcbiAgICAgICAgbXlJY29uPWxvYWRDb250ZW50SW1hZ2VzKCkub3ZlcmNhc3RJY29uO1xuICAgIH1cbiAgICBlbHNlIGlmKC9Tbm93L2kudGVzdChjb25kaXRpb25JY29uKSl7XG4gICAgICAgIG15SWNvbj1sb2FkQ29udGVudEltYWdlcygpLnNub3dJY29uO1xuICAgIH1cblxuICAgIHJldHVybiBteUljb247XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJldmlvdXNDb250ZW50cygpe1xuICAgIGxldCB0b3BMZWZ0VGVtcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1wJyk7XG4gICAgbGV0IHRvcExlZnRBZGRyZXNzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4ubG9jYXRpb24tY29udGFpbmVyPi5sb2NhdGlvbicpO1xuICAgIGxldCB0b3BMZWZ0RGF0ZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LmxvY2F0aW9uLWNvbnRhaW5lcj4uZGF0ZScpO1xuICAgIGxldCB0b3BSaWdodFRpbWU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1yaWdodD4udGltZS1pbWc+LnRpbWUnKTtcbiAgICBsZXQgdG9wUmlnaHRDb25kaXRpb249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1yaWdodD4uY29uZGl0aW9uJyk7XG4gICAgbGV0IHRvcFJpZ2h0SW1hZ2U9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1yaWdodD4udGltZS1pbWc+LmltZy1jb250YWluZXInKTtcbiAgICBsZXQgYm90dG9tRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kYXktaW5mbz4uYm90dG9tPmRpdicpO1xuXG4gICAgdG9wTGVmdFRlbXAuaW5uZXJIVE1MPScnO1xuICAgIHRvcExlZnRBZGRyZXNzLnRleHRDb250ZW50PScnO1xuICAgIHRvcExlZnREYXRlLmlubmVySFRNTD0nJztcbiAgICB0b3BSaWdodFRpbWUuaW5uZXJIVE1MPScnO1xuICAgIHRvcFJpZ2h0Q29uZGl0aW9uLmlubmVySFRNTD0nJztcbiAgICB0b3BSaWdodEltYWdlLmlubmVySFRNTD0nJztcblxuICAgIGxldCB0b2RheUluZm9JbmRleD0xO1xuICAgIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKT0+e1xuICAgICAgICBsZXQgdGVtcGVyYXR1cmU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi50ZW1wYCk7XG4gICAgICAgIGxldCBpbWdDb250YWluZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRvZGF5LWluZm8+LmJvdHRvbT5bZGF0YS1pbmRleD1cIiR7dG9kYXlJbmZvSW5kZXh9XCJdPi5pbWctY29udGFpbmVyYCk7XG4gICAgICAgIGxldCB0aW1lPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50b2RheS1pbmZvPi5ib3R0b20+W2RhdGEtaW5kZXg9XCIke3RvZGF5SW5mb0luZGV4fVwiXT4udGltZWApO1xuICAgICAgICBsZXQgdGltZUluZGljYXRvcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRpbWUtaW5kaWNhdG9yYCk7XG5cbiAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MPScnO1xuICAgICAgICBpbWdDb250YWluZXIuaW5uZXJIVE1MPScnO1xuICAgICAgICB0aW1lLmlubmVySHRtbD0nJztcbiAgICAgICAgdGltZUluZGljYXRvci5pbm5lckh0bWw9Jyc7XG5cbiAgICAgICAgdG9kYXlJbmZvSW5kZXgrPTE7XG4gICAgfSk7XG5cbiAgICBsZXQgd2Vla2x5SW5mb0RpdkNvbnRhaW5lcnM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlZWtseS1pbmZvPmRpdicpO1xuICAgIGxldCB3ZWVrbHlJbmZvSW5kZXg9MTtcblxuICAgIHdlZWtseUluZm9EaXZDb250YWluZXJzLmZvckVhY2goKCk9PntcbiAgICAgICAgbGV0IGRhdGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdPi5kYXRlYCk7XG4gICAgICAgIGxldCByYWluUGVyY2VudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLnJhaW4tcGVyY2VudGApO1xuICAgICAgICBsZXQgd2F0ZXJEcm9wSWNvbkNvbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLndlZWtseS1pbmZvPltkYXRhLWluZGV4PVwiJHt3ZWVrbHlJbmZvSW5kZXh9XCJdIC53YXRlci1kcm9wYCk7XG4gICAgICAgIGxldCBjb25kaXRpb25JY29uQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXT4uaW1nLWNvbnRhaW5lcmApO1xuICAgICAgICBsZXQgdGVtcE1pbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1pbmApO1xuICAgICAgICBsZXQgdGVtcE1heD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0+LnRlbXA+Lm1heGApO1xuXG4gICAgICAgIGRhdGUuaW5uZXJIVE1MPScnO1xuICAgICAgICByYWluUGVyY2VudC5pbm5lckh0bWw9Jyc7XG4gICAgICAgIHdhdGVyRHJvcEljb25Db250LmlubmVySFRNTD0nJztcbiAgICAgICAgY29uZGl0aW9uSWNvbkNvbnRhaW5lci5pbm5lckhUTUw9Jyc7XG4gICAgICAgIHRlbXBNaW4uaW5uZXJIVE1MPScnO1xuICAgICAgICB0ZW1wTWF4LmlubmVySFRNTD0nJztcblxuICAgICAgICB3ZWVrbHlJbmZvSW5kZXgrPTE7XG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gY2hlY2tDdXJyZW50U2NhbGUoKXtcbiAgICBsZXQgc3RhdHVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbGVmdD4udGVtcC1jb250YWluZXI+LnRlbXAnKS50ZXh0Q29udGVudC5zbGljZSgtMSk7XG4gICAgaWYoc3RhdHVzPT09J0MnKXtcbiAgICAgICAgY29udmVydFRvRmFocmVuaGVpdCgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjb25zdCB1c2VySW5wdXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcbiAgICAgICAgY2xlYXJQcmV2aW91c0NvbnRlbnRzKCk7XG4gICAgICAgIGZldGNoRGF0YSh1c2VySW5wdXQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29udmVydFRvRmFocmVuaGVpdCgpe1xuICAgIGxldCB0b3BMZWZ0VGVtcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWxlZnQ+LnRlbXAtY29udGFpbmVyPi50ZW1wJyk7XG4gICAgbGV0IHRvcExlZnRUZW1wVmFsdWU9dG9wTGVmdFRlbXAudGV4dENvbnRlbnQ7XG4gICAgbGV0IHRvcExlZnRUZW1wSW5OdW1iZXI9TnVtYmVyKHRvcExlZnRUZW1wVmFsdWUuc3Vic3RyaW5nKDAsdG9wTGVmdFRlbXBWYWx1ZS5sZW5ndGgtMykpOyAgXG4gICAgdG9wTGVmdFRlbXAudGV4dENvbnRlbnQ9YCR7KCh0b3BMZWZ0VGVtcEluTnVtYmVyKjkvNSkrMzIpLnRvRml4ZWQoMil9IMKwRmA7XG5cbiAgICBsZXQgYm90dG9tRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kYXktaW5mbz4uYm90dG9tPmRpdicpO1xuICAgIGxldCB0b2RheUluZm9JbmRleD0xO1xuICAgIGJvdHRvbURpdkNvbnRhaW5lcnMuZm9yRWFjaCgoKT0+e1xuICAgICAgICBsZXQgYm90dG9tVGVtcD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudG9kYXktaW5mbz4uYm90dG9tPltkYXRhLWluZGV4PVwiJHt0b2RheUluZm9JbmRleH1cIl0+LnRlbXBgKTtcbiAgICAgICAgbGV0IGJvdHRvbVRlbXBWYWx1ZT1ib3R0b21UZW1wLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgYm90dG9tVGVtcEluTnVtYmVyPU51bWJlcihib3R0b21UZW1wVmFsdWUuc3Vic3RyaW5nKDAsYm90dG9tVGVtcFZhbHVlLmxlbmd0aC0zKSk7XG4gICAgICAgIGJvdHRvbVRlbXAudGV4dENvbnRlbnQ9YCR7KChib3R0b21UZW1wSW5OdW1iZXIqOS81KSszMikudG9GaXhlZCgyKX0gwrBGYDtcblxuICAgICAgICB0b2RheUluZm9JbmRleCs9MTtcbiAgICB9KTtcblxuICAgIGxldCB3ZWVrbHlJbmZvRGl2Q29udGFpbmVycz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vla2x5LWluZm8+ZGl2Jyk7XG4gICAgbGV0IHdlZWtseUluZm9JbmRleD0xO1xuICAgIHdlZWtseUluZm9EaXZDb250YWluZXJzLmZvckVhY2goKCk9PntcbiAgICAgICAgbGV0IG1pblRlbXBDb250PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWVrbHktaW5mbz5bZGF0YS1pbmRleD1cIiR7d2Vla2x5SW5mb0luZGV4fVwiXSAubWluYCk7XG4gICAgICAgIGxldCBtYXhUZW1wQ29udD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAud2Vla2x5LWluZm8+W2RhdGEtaW5kZXg9XCIke3dlZWtseUluZm9JbmRleH1cIl0gLm1heGApO1xuICAgICAgICBsZXQgbWluVGVtcFZhbHVlPW1pblRlbXBDb250LnRleHRDb250ZW50O1xuICAgICAgICBsZXQgbWF4VGVtcFZhbHVlPW1heFRlbXBDb250LnRleHRDb250ZW50O1xuXG4gICAgICAgIGxldCBtaW5UZW1wSW5OdW1iZXI9TnVtYmVyKG1pblRlbXBWYWx1ZSk7XG4gICAgICAgIGxldCBtYXhUZW1wSW5OdW1iZXI9TnVtYmVyKG1heFRlbXBWYWx1ZS5zdWJzdHJpbmcoMSxtYXhUZW1wVmFsdWUubGVuZ3RoLTMpKTtcblxuICAgICAgICBtaW5UZW1wQ29udC50ZXh0Q29udGVudD1gJHsoKG1pblRlbXBJbk51bWJlcio5LzUpKzMyKS50b0ZpeGVkKDIpfWA7XG4gICAgICAgIG1heFRlbXBDb250LnRleHRDb250ZW50PWAvJHsoKG1heFRlbXBJbk51bWJlcio5LzUpKzMyKS50b0ZpeGVkKDIpfSDCsEZgO1xuXG4gICAgICAgIHdlZWtseUluZm9JbmRleCs9MTtcbiAgICB9KTtcbn1cblxuXG5leHBvcnQge2ltcG9ydERhdGFUb0RvbSxsb2FkSGVhZGVySW1hZ2UsY2hlY2tDdXJyZW50U2NhbGUsY29udmVydFRvRmFocmVuaGVpdCxjbGVhclByZXZpb3VzQ29udGVudHN9OyIsImltcG9ydCB7aW1wb3J0RGF0YVRvRG9tfSBmcm9tICcuL0RPTS5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShjaXR5KXtcbiAgICB0cnl7XG4gICAgICAgIGxldCBsb2FkaW5nRGlhbG9nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nLWRpYWxvZycpO1xuICAgICAgICBsb2FkaW5nRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2U9YXdhaXQgZmV0Y2goYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNpdHkpfT91bml0R3JvdXA9bWV0cmljJmtleT1WRlMyV1dMRldBVFpXRFA0MzkzNzRaVFpZJmNvbnRlbnRUeXBlPWpzb25gLHttb2RlOidjb3JzJ30pO1xuICAgICAgICBsZXQgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGltcG9ydERhdGFUb0RvbShkYXRhKTtcbiAgICAgICAgbG9hZGluZ0RpYWxvZy5jbG9zZSgpO1xuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICBsZXQgZXJyb3JEaWFsb2c9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yLWRpYWxvZycpO1xuICAgICAgICBsZXQgZXJyb3JUZXh0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvci1kaWFsb2c+cCcpO1xuICAgICAgICBlcnJvclRleHQudGV4dENvbnRlbnQ9YCR7ZXJyfWA7XG4gICAgICAgIGVycm9yRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBlcnJvckRpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9LDUwMDApO1xuICAgICAgICBmZXRjaERhdGEoJ0FzbWFyYScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudERheUluZm8oZGF0ZUluZm8pe1xuICAgIGxldCBkYXlEYXRhPW5ldyBEYXRlKGRhdGVJbmZvKTtcbiAgICBsZXQgZGF5PWRheURhdGEuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aD1kYXlEYXRhLmdldE1vbnRoKCkrMTtcbiAgICBsZXQgeWVhcj1kYXlEYXRhLmdldEZ1bGxZZWFyKCk7XG5cbiAgICBsZXQgZ2V0QWN0dWFsRGF5TW9udGhZZWFyPSgpPT57XG4gICAgICAgIGNvbnN0IGRhdGU9bmV3IERhdGUoeWVhcixtb250aC0xLGRheSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM9e3llYXI6J251bWVyaWMnLG1vbnRoOidsb25nJyxkYXk6J251bWVyaWMnfVxuICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBsZXQgZ2V0QWN0dWFsRGF5TW9udGg9KCk9PntcbiAgICAgICAgY29uc3QgZGF0ZT1uZXcgRGF0ZSh5ZWFyLG1vbnRoLTEsZGF5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucz17eWVhcjonbnVtZXJpYycsbW9udGg6J2xvbmcnLGRheTonbnVtZXJpYyd9XG4gICAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIGxldCBnZXREYXlOYW1lPSgpPT57XG4gICAgICAgIGNvbnN0IGRhdGU9bmV3IERhdGUoZGF0ZUluZm8pO1xuICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLHt3ZWVrZGF5Oidsb25nJ30pO1xuICAgIH07XG5cbiAgICByZXR1cm57Z2V0RGF5TmFtZSxnZXRBY3R1YWxEYXlNb250aFllYXIsZ2V0QWN0dWFsRGF5TW9udGh9O1xufVxuXG5mdW5jdGlvbiB0aW1lRm9ybWF0dGVyKHRpbWUpe1xuICAgIGxldCBteVRpbWU9dGltZS5zbGljZSgwLDUpO1xuICAgIGxldCBteUhvdXI9bXlUaW1lLnNsaWNlKDAsMik7XG4gICAgbGV0IG15TWludXRlPW15VGltZS5zbGljZSgzLDUpO1xuICAgIGxldCB0aW1lSW5kaWNhdG9yO1xuXG4gICAgaWYobXlIb3VyPjEyKXtcbiAgICAgICAgbXlIb3VyLT0xMjtcbiAgICAgICAgdGltZUluZGljYXRvcj1cIlBtXCI7XG4gICAgfVxuICAgIGVsc2UgaWYobXlIb3VyPT09JzEyJyl7XG4gICAgICAgIHRpbWVJbmRpY2F0b3I9J1BtJztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgdGltZUluZGljYXRvcj0nQW0nO1xuICAgIH1cblxuICAgIGxldCBteU5ld1RpbWU9YCR7bXlIb3VyfToke215TWludXRlfWA7XG4gICAgcmV0dXJuIHtteU5ld1RpbWUsdGltZUluZGljYXRvcn07XG59XG5cblxuZXhwb3J0IHtmZXRjaERhdGEsZ2V0Q3VycmVudERheUluZm8sdGltZUZvcm1hdHRlcn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7ZmV0Y2hEYXRhLHRpbWVGb3JtYXR0ZXJ9IGZyb20gJy4vZmV0Y2guanMnO1xuaW1wb3J0IHtsb2FkSGVhZGVySW1hZ2UsY2hlY2tDdXJyZW50U2NhbGUsY2xlYXJQcmV2aW91c0NvbnRlbnRzfSBmcm9tICcuL0RPTS5qcyc7XG5cbmxvYWRIZWFkZXJJbWFnZSgpO1xuZmV0Y2hEYXRhKFwiQXNtYXJhXCIpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXktZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKCk9PntcbiAgICBjb25zdCB1c2VySW5wdXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKS52YWx1ZTtcbiAgICBjbGVhclByZXZpb3VzQ29udGVudHMoKTtcbiAgICBmZXRjaERhdGEodXNlcklucHV0KTtcbn0pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0LXRlbXA+YnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgY2hlY2tDdXJyZW50U2NhbGUoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
