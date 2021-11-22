(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);


var LOCALE_TEXTS = {
  'zh-CN': {
    name: '\u5C5E\u6027\u540D',
    description: '\u63CF\u8FF0',
    type: '\u7C7B\u578B',
    default: '\u9ED8\u8BA4\u503C',
    required: '(\u5FC5\u9009)'
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)'
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = (_ref => {
  var identifier = _ref.identifier,
      expt = _ref.export;
  var data = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["useApiData"])(identifier);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),
      locale = _useContext.locale;

  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS['zh-CN'] : LOCALE_TEXTS['en-US'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.default))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, (data[expt] || []).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: row.identifier
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.description || '--'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.default || row.required && texts.required || '--')))))));
});

//# sourceURL=webpack:///./.dumi/theme/builtins/API.tsx?`)},Bjia:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");
/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jem/");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mkj/");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2tE6");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U/75");
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("60ow");
/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SourceCode_less__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["a"] = (_ref => {
  var code = _ref.code,
      lang = _ref.lang,
      _ref$showCopy = _ref.showCopy,
      showCopy = _ref$showCopy === void 0 ? true : _ref$showCopy;

  var _useCopy = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useCopy"])(),
      _useCopy2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useCopy, 2),
      copyCode = _useCopy2[0],
      copyStatus = _useCopy2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "__dumi-default-code-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* defaultProps */ "b"], {
    code: code,
    language: lang,
    theme: undefined
  }), _ref2 => {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
      className: className,
      style: style
    }, showCopy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "__dumi-default-icon __dumi-default-code-block-copy-btn",
      "data-status": copyStatus,
      onClick: () => copyCode(code)
    }), tokens.map((line, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", getLineProps({
      line,
      key: i
    }), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", getTokenProps({
      token,
      key
    }))))));
  }));
});

//# sourceURL=webpack:///./.dumi/theme/builtins/SourceCode.tsx?`)},DgDr:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Pr/");
/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Badge_less__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "__dumi-default-badge"
}, props)));

//# sourceURL=webpack:///./.dumi/theme/builtins/Badge.tsx?`)},IedT:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_API_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0H/f");
/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Alert_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N0lm");
/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Badge_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DgDr");
/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Example_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cGlH");
/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ekZX");
/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Bjia");
/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BlwA");
/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Rsk4");












var DumiDemo1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"]['getting-started-demo'].component);
/* harmony default export */ __webpack_exports__["default"] = (props => {
  // scroll to anchor after page component loaded
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "\\u5FEB\\u901F\\u4E0A\\u624B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5FEB\\u901F\\u4E0A\\u624B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5FEB\\u901F\\u4E0A\\u624B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5B89\\u88C5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5B89\\u88C5",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5B89\\u88C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u901A\\u8FC7 npm \\u6216 yarn \\u547D\\u4EE4\\u5B89\\u88C5\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "#npm\\n$ npm install @antv/xflow --save\\n\\n#yarn\\n$ yarn add @antv/xflow",
    lang: "shell"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5982\\u679C\\u662F\\u76F4\\u63A5\\u901A\\u8FC7 script \\u6807\\u7B7E\\u5F15\\u5165, \\u53EF\\u4EE5\\u4F7F\\u7528\\u4E0B\\u9762\\u4E24\\u4E2A CDN \\u4E2D\\u7684\\u4EFB\\u4F55\\u4E00\\u4E2A, \\u9ED8\\u8BA4\\u8FD4\\u56DE XFlow \\u7684\\u6700\\u65B0\\u7248:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://unpkg.com/@antv/xflow/dist/index.umd.js"
  }, "https://unpkg.com/@antv/xflow/dist/index.umd.js"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://cdn.jsdelivr.net/npm/@antv/xflow/dist/index.umd.js"
  }, "https://cdn.jsdelivr.net/npm/@antv/xflow/dist/index.umd.js")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "<script src=\\"https://unpkg.com/@antv/xflow/dist/index.umd.js\\"></script>",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5BF9\\u4E8E\\u751F\\u4EA7\\u73AF\\u5883, \\u6211\\u4EEC\\u63A8\\u8350\\u4F7F\\u7528\\u4E00\\u4E2A\\u660E\\u786E\\u7684\\u7248\\u672C\\u53F7, \\u4EE5\\u907F\\u514D\\u65B0\\u7248\\u672C\\u5347\\u7EA7\\u9020\\u6210\\u4E0D\\u53EF\\u9884\\u671F\\u7684\\u7834\\u574F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://unpkg.com/@antv/xflow@1.0.0/dist/index.umd.js"
  }, "https://unpkg.com/@antv/xflow@1.0.0/dist/index.umd.js"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://cdn.jsdelivr.net/npm/@antv/xflow@1.0.0/dist/index.umd.js"
  }, "https://cdn.jsdelivr.net/npm/@antv/xflow@1.0.0/dist/index.umd.js")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u9700\\u8981\\u6CE8\\u610F\\u7684\\u662F:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u662F\\u57FA\\u4E8E X6 \\u56FE\\u7F16\\u8F91\\u5F15\\u64CE\\u3001\\u9762\\u5411 React \\u6280\\u672F\\u6808\\u7528\\u6237\\u7684\\u5E94\\u7528\\u7EA7\\u89E3\\u51B3\\u65B9\\u6848, \\u4F1A\\u9ED8\\u8BA4\\u5B89\\u88C5 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "@antv/x6"), "\\u3001", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "@antv/x6-react-shape"), "\\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u652F\\u6301 AntV \\u65D7\\u4E0B\\u7684\\u5E38\\u89C1\\u5E03\\u5C40\\u7B97\\u6CD5, \\u4E0E\\u5144\\u5F1F\\u56E2\\u961F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://g6.antv.vision/zh/docs/api/graphLayout/guide"
  }, "G6 \\u56FE\\u5E03\\u5C40"), "\\u4FDD\\u6301\\u4E00\\u81F4, \\u4F1A\\u9ED8\\u8BA4\\u5B89\\u88C5 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "@antv/layout"), "\\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u7B2C\\u4E00\\u4E2A\\u793A\\u4F8B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7B2C\\u4E00\\u4E2A\\u793A\\u4F8B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7B2C\\u4E00\\u4E2A\\u793A\\u4F8B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], _dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"]['getting-started-demo'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u5F00\\u59CB\\u4F7F\\u7528"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u5F00\\u59CB\\u4F7F\\u7528",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u5F00\\u59CB\\u4F7F\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u63A5\\u4E0B\\u6765\\u6211\\u4EEC\\u5C31\\u4E00\\u8D77\\u4F7F\\u7528 XFlow \\u6765\\u6784\\u5EFA\\u4E00\\u4E2A\\u7B80\\u5355\\u7684\\u56FE\\u5F62\\u5E94\\u7528\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "step1-\\u521B\\u5EFA\\u5DE5\\u4F5C\\u7A7A\\u95F4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#step1-\\u521B\\u5EFA\\u5DE5\\u4F5C\\u7A7A\\u95F4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Step1 \\u521B\\u5EFA\\u5DE5\\u4F5C\\u7A7A\\u95F4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u9996\\u5148, \\u6211\\u4EEC\\u9700\\u8981\\u6784\\u5EFA\\u4E00\\u4E2A XFlow \\u5DE5\\u4F5C\\u7A7A\\u95F4\\uFF0C\\u5176\\u4E2D XFlowCanvas \\u753B\\u5E03\\u7EC4\\u4EF6\\uFF0CCanvasScaleToolbar \\u5DE5\\u5177\\u680F\\u3001CanvasMiniMap \\u5C0F\\u5730\\u56FE\\u3001CanvasSnapline \\u5BF9\\u9F50\\u7EBF\\u7B49\\u4EA4\\u4E92\\u7EC4\\u4EF6\\uFF0C\\u90FD\\u662F XFlow \\u5DE5\\u4F5C\\u7A7A\\u95F4\\u4E2D\\u7684\\u5185\\u5BB9\\u3002", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "\\u9700\\u8981\\u5F3A\\u8C03\\u7684\\u662F\\uFF0C\\u5728XFlow \\u4E2D\\uFF0C\\u4E00\\u5207\\u90FD\\u662FReact \\u7EC4\\u4EF6"), "\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "import { XFlow, XFlowCanvas } from '@antv/xflow'\\nimport { CanvasScaleToolbar, CanvasMiniMap, CanvasSnapline } from '@antv/xflow'\\nimport { useGraphConfig } from './config-graph'\\n\\nreturn (\\n  <XFlow\\n    className=\\"xflow-uer-container\\"\\n    graphData={graphData}\\n    graphLayuot={{\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        rankdir: 'TB',\\n        nodesep: 60,\\n        ranksep: 40,\\n      }\\n    }}\\n    onLoad={onLoad}\\n    isAutoCenter={true}\\n  >\\n    <XFlowCanvas config={useGrapConfig()}>\\n      {/** \u5DE5\u5177\u680F */}\\n      <CanvasScaleToolbar />\\n      {/** \u5C0F\u5730\u56FE  */}\\n      <CanvasMiniMap minimapOptions={{ width: 200, height: 120 }} />\\n      {/** \u5BF9\u9F50\u7EBF */}\\n      <CanvasSnapline color=\\"#1890ff\\" />\\n    </XFlowCanvas>\\n  </Xflow>\\n)",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "step2-\\u8BBE\\u7F6E\\u76F8\\u5173\\u914D\\u7F6E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#step2-\\u8BBE\\u7F6E\\u76F8\\u5173\\u914D\\u7F6E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Step2 \\u8BBE\\u7F6E\\u76F8\\u5173\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u7136\\u540E, \\u6211\\u4EEC\\u9700\\u8981\\u8BBE\\u7F6E\\u753B\\u5E03\\u5168\\u5C40\\u914D\\u7F6E\\u9879 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "graphConfig"), ", \\u8BE5\\u914D\\u7F6E\\u9879\\u51B3\\u5B9A\\u4E86\\u753B\\u5E03\\u4E0A\\u7684\\u5185\\u5BB9\\u5982\\u4F55\\u5448\\u73B0\\u3002\\u6BD4\\u5982\\u753B\\u5E03\\u662F\\u5426\\u9700\\u8981\\u7F51\\u683C\\u3001\\u753B\\u5E03\\u7684\\u7F29\\u653E\\u7B49\\u7EA7\\u3001\\u753B\\u5E03\\u662F\\u5426\\u652F\\u6301\\u6EDA\\u8F6E\\u7F29\\u653E\\u7B49, \\u518D\\u6BD4\\u5982\\u753B\\u5E03\\u4E0A\\u9700\\u8981\\u6E32\\u67D3\\u54EA\\u79CD\\u7C7B\\u578B\\u7684 React \\u8282\\u70B9/\\u8FDE\\u7EBF\\u7B49\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "import { createGraphConfig } from '@antv/xflow'\\nimport Node1 from './react-node/node1'\\nimport Edge1 from './react-edge/edge1'\\n\\nexport const useGraphConfig = createGraphConfig(config => {\\n  /** \u8BBE\u7F6E\u753B\u5E03\u914D\u7F6E\u9879\uFF0C\u4F1A\u8986\u76D6XFlow\u9ED8\u8BA4\u753B\u5E03\u914D\u7F6E\u9879 */\\n  config.setX6Config({\\n    grid: true,\\n    scaling: { min: 0.2, max: 3 },\\n    mousewheel: { enabled: true, zoomAtMousePosition: true },\\n  })\\n\\n  /** \u8BBE\u7F6E\u753B\u5E03\u9700\u8981\u6E32\u67D3\u7684React\u8282\u70B9\u3001\u8FDE\u7EBF\u4E0A\u7684React\u5185\u5BB9 */\\n  config.setNodeRender('NODE1', props => <Node1 {...props} />)\\n  config.setEdgeRender('EDGE1', props => <Edge1 {...props} />)\\n})",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "step3-\\u753B\\u5E03\\u6E32\\u67D3\\u7B49\\u903B\\u8F91\\u64CD\\u4F5C"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#step3-\\u753B\\u5E03\\u6E32\\u67D3\\u7B49\\u903B\\u8F91\\u64CD\\u4F5C",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "Step3 \\u753B\\u5E03\\u6E32\\u67D3\\u7B49\\u903B\\u8F91\\u64CD\\u4F5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u8BBE\\u7F6E\\u76F8\\u5173\\u914D\\u7F6E\\u540E, \\u6211\\u4EEC\\u5C31\\u53EF\\u4EE5\\u5728 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "onLoad"), " \\u65B9\\u6CD5\\u91CC\\u8FDB\\u884C\\u4E00\\u4E9B\\u5FC5\\u8981\\u7684\\u4E1A\\u52A1\\u903B\\u8F91\\u64CD\\u4F5C\\uFF0C\\u6BD4\\u5982\\u4ECE\\u670D\\u52A1\\u7AEF\\u83B7\\u53D6\\u6570\\u636E\\u3001\\u6267\\u884C\\u5E03\\u5C40\\u7B97\\u6CD5\\u3001\\u6E32\\u67D3\\u753B\\u5E03\\u5185\\u5BB9\\u3001\\u76D1\\u542C\\u753B\\u5E03\\u76F8\\u5173\\u4E8B\\u4EF6\\u7B49\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** XFlow\u521D\u59CB\u5316\u5B8C\u6210\u540E\u7684\u56DE\u8C03 */\\nconst onLoad: IAppLoad = async app => {\\n  /** \u8FD9\u91CC\u6211\u4EEC\u5047\u8BBE\u6570\u636E\u5DF2\u7ECF\u4ECE\u670D\u52A1\u7AEF\u53D6\u5230 */\\n  const nodes: NsGraph.INodeConfig[] = [\\n    { id: 'root1', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'root1' } },\\n    { id: 'down1', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down1' } },\\n    { id: 'down2', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down2' } },\\n    { id: 'down3', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down3' } },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: 'root1-down1',\\n      source: 'root1',\\n      target: 'down1',\\n      renderKey: 'EDGE1',\\n      info: { line: 'root1-down1' },\\n    },\\n    {\\n      id: 'root1-down2',\\n      source: 'root1',\\n      target: 'down2',\\n      renderKey: 'EDGE2',\\n      info: { line: 'root1-down2' },\\n    },\\n    {\\n      id: 'root1-down3',\\n      source: 'root1',\\n      target: 'down3',\\n      label: '1:N(\u7EAF\u6587\u672C)',\\n      info: { line: 'root1-down3' },\\n    },\\n  ]\\n  const graphData = { nodes, edges }\\n  setGraphData(graphData)\\n\\n  /** \u76D1\u542C\u753B\u5E03\u4E8B\u4EF6 */\\n  const graph = await app.getGraphInstance()\\n  graph.on('node:click', ({ e, x, y, node, view }) => {\\n    const nodeData: NsGraph.INodeConfig = node.getData()\\n    message.success(\`\${nodeData.id}\u8282\u70B9\u88AB\u70B9\u51FB\u4E86\`)\\n  })\\n  graph.on('edge:click', ({ e, x, y, edge, view }) => {\\n    edge.toFront()\\n    const edgeData: NsGraph.IEdgeConfig = edge.getData()\\n    message.success(\`\${edgeData.id}\u8FDE\u7EBF\u88AB\u70B9\u51FB\u4E86\`)\\n  })\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5230\\u6B64\\uFF0C\\u4E00\\u4E2A\\u7B80\\u5355\\u7684\\u56FE\\u5F62\\u5E94\\u7528\\u5DF2\\u7ECF\\u5177\\u5907\\u96CF\\u5F62\\u4E86\\u3002\\u4F46 XFlow \\u7684\\u9B45\\u529B\\u8FDC\\u4E0D\\u6B62\\u4E8E\\u6B64\\uFF01\\u5982\\u679C\\u60A8\\u7684\\u5E94\\u7528\\u8FD8\\u9700\\u8981\\u5404\\u79CD\\u4EA4\\u4E92\\u7EC4\\u4EF6\\uFF0CXFlow \\u4E3A\\u60A8\\u5185\\u7F6E\\u4E86\\u82E5\\u5E72\\u4EA4\\u4E92\\u7EC4\\u4EF6\\uFF0C\\u62FF\\u6765\\u5373\\u7528\\uFF0C\\u6BD4\\u5982\\u4E0A\\u9762\\u4F7F\\u7528\\u7684 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "CanvasScaleToolbar\\u5DE5\\u5177\\u680F"), "\\uFF0C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "CanvasMinimap\\u5C0F\\u5730\\u56FE"), "\\uFF0C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "CanvasSnapline\\u5BF9\\u9F50\\u7EBF"), "\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u53E6\\u5916 XFlow \\u771F\\u6B63\\u5F3A\\u5927\\u4E4B\\u5904\\u5728\\u4E8E:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u753B\\u5E03\\u7EC4\\u4EF6\\u4E0E\\u4EA4\\u4E92\\u7EC4\\u4EF6\\u7684\\u8054\\u52A8\\u673A\\u5236\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "XFlow \\u63D0\\u4F9B\\u7684\\u6269\\u5C55\\u673A\\u5236\\u5141\\u8BB8\\u5B9A\\u5236\\u4EFB\\u610F\\u4E1A\\u52A1\\u9700\\u8981\\u7684\\u4EA4\\u4E92\\u7EC4\\u4EF6\\u3002\\u60A8\\u53EF\\u4EE5\\u5728\\u540E\\u9762\\u7684\\u6559\\u7A0B\\u4E2D\\u8BE6\\u7EC6\\u4E86\\u89E3\\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u66F4\\u591A"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u66F4\\u591A",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u66F4\\u591A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u672C\\u7AE0\\u4EC5\\u4EC5\\u4ECB\\u7ECD\\u4E86\\u5982\\u4F55\\u5B89\\u88C5 XFlow \\u4EE5\\u53CA\\u7B80\\u5355\\u7684\\u4F7F\\u7528\\u573A\\u666F, \\u5728\\u540E\\u7EED\\u7684\\u6559\\u7A0B\\u4E2D\\u60A8\\u53EF\\u4EE5\\u4E86\\u89E3\\u66F4\\u591A XFlow \\u7684\\u6838\\u5FC3\\u80FD\\u529B\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u89E3\\u51B3\\u65B9\\u6848\\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial/solutions/dag"
  }, "DAG \\u89E3\\u51B3\\u65B9\\u6848")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial/solutions/er"
  }, "ER \\u5EFA\\u6A21\\u89E3\\u51B3\\u65B9\\u6848")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial/solutions/flow"
  }, "\\u6D41\\u7A0B\\u56FE\\u89E3\\u51B3\\u65B9\\u6848"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u6838\\u5FC3\\u7EC4\\u4EF6\\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-core-components/xflow-component"
  }, "XFlow \\u5DE5\\u4F5C\\u53F0\\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-core-components/xflow-canvas-component"
  }, "XFlowCanvas \\u753B\\u5E03\\u7EC4\\u4EF6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "UI \\u4EA4\\u4E92\\u7EC4\\u4EF6\\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/canvas-toolbar"
  }, "Toolbar \\u5DE5\\u5177\\u680F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/canvas-scale-toolbar"
  }, "ScaleToolbar \\u7F29\\u653E\\u5DE5\\u5177\\u680F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/context-menu"
  }, "ContextMenu \\u53F3\\u952E\\u83DC\\u5355")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/canvas-snapline"
  }, "Snapline \\u5BF9\\u9F50\\u7EBF")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/canvas-mini-map"
  }, "Minimap \\u5C0F\\u5730\\u56FE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/canvas-keybinding"
  }, "KeyBindings \\u5FEB\\u6377\\u952E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/canvas-node-panel"
  }, "NodeDndPanel \\u8282\\u70B9\\u62D6\\u62FD\\u9762\\u677F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/canvas-config-form"
  }, "JsonForm \\u914D\\u7F6E\\u5F0F\\u8868\\u5355")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-ext-components/workspace-panel"
  }, "WorkspacePanel \\u901A\\u7528\\u9762\\u677F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/docs/tutorial-advanced/advanced"
  }, "\\u81EA\\u5B9A\\u4E49\\u6269\\u5C55\\u7EC4\\u4EF6"))))));
});

//# sourceURL=webpack:///./docs/tutorial/getting-started/index.en-US.md?`)},N0lm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tCeM");
/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Alert_less__WEBPACK_IMPORTED_MODULE_2__);



/* unused harmony default export */ var _unused_webpack_default_export = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "__dumi-default-alert"
}, props)));

//# sourceURL=webpack:///./.dumi/theme/builtins/Alert.tsx?`)},cGlH:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zc05");
/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Example_less__WEBPACK_IMPORTED_MODULE_2__);



/* unused harmony default export */ var _unused_webpack_default_export = (props => {
  var elm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setHeight(elm.current.contentWindow.document.documentElement.scrollHeight);
  }, [elm]);
  return props.route.meta.examplePath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "__dumi-default-example-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "__dumi-default-example-wrapper-toolbar"
  }, props.route.meta.description || props.route.meta.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "__dumi-default-icon",
    onClick: () => elm.current.contentWindow.location.reload()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: props.route.meta.examplePath,
    className: "__dumi-default-icon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    src: props.route.meta.examplePath,
    ref: elm,
    style: {
      height
    },
    title: "dumi"
  }));
});

//# sourceURL=webpack:///./.dumi/theme/builtins/Example.tsx?`)}}]);
