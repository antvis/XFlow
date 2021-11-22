(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
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

//# sourceURL=webpack:///./.dumi/theme/builtins/Badge.tsx?`)},N0lm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");
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

//# sourceURL=webpack:///./.dumi/theme/builtins/Example.tsx?`)},gwew:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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












/* harmony default export */ __webpack_exports__["default"] = (props => {
  // scroll to anchor after page component loaded
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    var _props$location;

    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {
      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "xflowcommands"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#xflowcommands",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "XFlowCommands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u901A\\u8FC7\\u6267\\u884C\\u547D\\u4EE4\\u6765\\u6539\\u53D8\\u5E94\\u7528\\u72B6\\u6001\\uFF0C\\u5185\\u7F6E\\u7684\\u547D\\u4EE4\\u5305\\u62EC\\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "XFlowNodeCommands \\u8282\\u70B9\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "XFlowEdgeCommands \\u8FB9\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "XFlowGraphCommands \\u753B\\u5E03\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "XFlowGroupCommands \\u7FA4\\u7EC4\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "XFlowModelCommands \\u7CFB\\u7EDF\\u72B6\\u6001\\u547D\\u4EE4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** \u5982\u4F55\u5F15\u7528\uFF1F */\\nimport {\\n  XFlowNodeCommands,\\n  XFlowEdgeCommands,\\n  XFlowGraphCommands,\\n  XFlowGroupCommands,\\n  XFlowModelCommands,\\n} from '@antv/xflow'",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "xflownodecommands"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#xflownodecommands",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "XFlowNodeCommands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** \u5982\u4F55\u5F15\u7528\uFF1F */\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\n/** \u8282\u70B9\u547D\u4EE4 */\\nexport namespace XFlowNodeCommands {\\n  const category = '\u8282\u70B9\u64CD\u4F5C'\\n  /** \u65B0\u589E\u8282\u70B9 */\\n  export const ADD_NODE: IGraphCommand = {\\n    id: 'xflow:add-node',\\n    label: '\u6DFB\u52A0\u8282\u70B9',\\n    category,\\n  }\\n  /** \u5220\u9664\u8282\u70B9 */\\n  export const DEL_NODE: IGraphCommand = {\\n    id: 'xflow:del-node',\\n    label: '\u5220\u9664\u8282\u70B9',\\n    category,\\n  }\\n  /** \u66F4\u65B0\u8282\u70B9 */\\n  export const UPDATE_NODE: IGraphCommand = {\\n    id: 'xflow:update-node',\\n    label: '\u66F4\u65B0\u8282\u70B9',\\n    category,\\n  }\\n  /** \u79FB\u52A8\u8282\u70B9 */\\n  export const MOVE_NODE: IGraphCommand = {\\n    id: 'xflow:move-node',\\n    label: 'Move Node',\\n    category,\\n  }\\n  /** \u8282\u70B9\u4EA4\u4E92\uFF1A\u9AD8\u4EAE\u8282\u70B9 */\\n  export const HIGHLIGHT_NODE: IGraphCommand = {\\n    id: 'xflow:highlight-node',\\n    label: '\u9AD8\u4EAE\u8282\u70B9',\\n    category,\\n  }\\n  /** \u8282\u70B9\u4EA4\u4E92\uFF1A\u9009\u4E2D\u8282\u70B9 */\\n  export const SELECT_NODE: IGraphCommand = {\\n    id: 'xflow:select-node',\\n    label: '\u9009\u4E2D\u8282\u70B9',\\n    category,\\n  }\\n  /** \u8282\u70B9\u5C45\u4E2D */\\n  export const CENTER_NODE: IGraphCommand = {\\n    id: 'xflow:center-node',\\n    label: '\u5C45\u4E2D\u8282\u70B9',\\n    category,\\n  }\\n  /** \u8282\u70B9\u524D\u7F6E\uFF1A\u8C03\u6574zindex */\\n  export const FRONT_NODE: IGraphCommand = {\\n    id: 'xflow:front-node',\\n    label: '\u524D\u7F6E\u8282\u70B9',\\n    category,\\n  }\\n  /** \u8282\u70B9\u540E\u7F6E\uFF1A\u8C03\u6574zindex */\\n  export const BACK_NODE: IGraphCommand = {\\n    id: 'xflow:back-node',\\n    label: '\u540E\u7F6E\u8282\u70B9',\\n    category,\\n  }\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "xflowedgecommands"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#xflowedgecommands",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "XFlowEdgeCommands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** \u5982\u4F55\u5F15\u7528\uFF1F */\\nimport { XFlowEdgeCommands } from '@antv/xflow'\\n\\n/** \u8FB9\u547D\u4EE4 */\\nexport namespace XFlowEdgeCommands {\\n  const category = '\u8FB9\u64CD\u4F5C'\\n  /** \u65B0\u589E\u8FB9 */\\n  export const ADD_EDGE: IGraphCommand = {\\n    id: 'xflow:add-edge',\\n    label: '\u6DFB\u52A0\u8FB9',\\n    category,\\n  }\\n  /** \u5220\u9664\u8FB9 */\\n  export const DEL_EDGE: IGraphCommand = {\\n    id: 'xflow:del-edge',\\n    label: '\u5220\u9664\u8FB9',\\n    category,\\n  }\\n  /** \u66F4\u65B0\u8FB9 */\\n  export const UPDATE_EDGE: IGraphCommand = {\\n    id: 'xflow:update-edge',\\n    label: '\u66F4\u65B0\u8FB9',\\n    category,\\n  }\\n  /** \u9AD8\u4EAE\u8FB9 */\\n  export const HIGHLIGHT_EDGE: IGraphCommand = {\\n    id: 'xflow:highlight-edge',\\n    label: '\u9AD8\u4EAE\u8FB9',\\n    category,\\n  }\\n  /** \u8FB9\u524D\u7F6E */\\n  export const FRONT_EDGE: IGraphCommand = {\\n    id: 'xflow:front-edge',\\n    label: '\u524D\u7F6E\u53D8',\\n    category,\\n  }\\n  /** \u8FB9\u540E\u7F6E */\\n  export const BACK_EDGE: IGraphCommand = {\\n    id: 'xflow:back-edge',\\n    label: '\u540E\u7F6E\u8FB9',\\n    category,\\n  }\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "xflowgraphcommands"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#xflowgraphcommands",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "XFlowGraphCommands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** \u5982\u4F55\u5F15\u7528\uFF1F */\\nimport { XFlowGraphCommands } from '@antv/xflow'\\n\\n/** \u753B\u5E03\u547D\u4EE4 */\\nexport namespace XFlowGraphCommands {\\n  const category = '\u753B\u5E03\u64CD\u4F5C'\\n  /** LOAD \u5143\u6570\u636E\u64CD\u4F5C */\\n  export const LOAD_META: IGraphCommand = {\\n    id: 'xflow:load-meta',\\n    label: '\u83B7\u53D6\u5143\u6570\u636E',\\n    category,\\n  }\\n  /** LOAD DATA\u64CD\u4F5C */\\n  export const LOAD_DATA: IGraphCommand = {\\n    id: 'xflow:load-data',\\n    label: '\u83B7\u53D6\u56FE\u6570\u636E',\\n    category,\\n  }\\n  /** SAVE GRAPH DATA\u64CD\u4F5C */\\n  export const SAVE_GRAPH_DATA: IGraphCommand = {\\n    id: 'xflow:save-graph-data',\\n    label: '\u4FDD\u5B58',\\n    category,\\n  }\\n  /** LAYOUT */\\n  export const GRAPH_LAYOUT: IGraphCommand = {\\n    id: 'xflow:layout',\\n    label: '\u8BA1\u7B97\u5E03\u5C40',\\n    category,\\n  }\\n  /** Graph Render */\\n  export const GRAPH_RENDER: IGraphCommand = {\\n    id: 'xflow:graph-render',\\n    label: '\u6E32\u67D3\u753B\u5E03',\\n    category,\\n  }\\n  /** UNDO \u64CD\u4F5C */\\n  export const UNDO_CMD: IGraphCommand = {\\n    id: 'xflow:undo-cmd',\\n    label: '\u64A4\u9500',\\n    category,\\n  }\\n  /** REDO \u64CD\u4F5C */\\n  export const REDO_CMD: IGraphCommand = {\\n    id: 'xflow:redo-cmd',\\n    label: '\u91CD\u505A',\\n    category,\\n  }\\n  /** Graph General Operations: XFlow\u5185\u7F6E\u7684\u547D\u4EE4\u4E0D\u6EE1\u8DB3\u7684\u53EF\u4EE5\u7528\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u76F4\u63A5\u4F7F\u7528Graph\u7684api */\\n  export const GRAPH_INSTANCE_COMMAND: IGraphCommand = {\\n    id: 'xflow:graph-instacne-cmd',\\n    label: 'Graph\u901A\u7528Command',\\n    category,\\n  }\\n  /** Graph Zoom */\\n  export const GRAPH_ZOOM: IGraphCommand = {\\n    id: 'xflow:graph-zoom',\\n    label: '\u7F29\u653E\u753B\u5E03',\\n    category,\\n  }\\n  /** Graph Resize */\\n  export const GRAPH_RESIZE: IGraphCommand = {\\n    id: 'xflow:graph-resize',\\n    label: '\u8C03\u6574\u7A97\u53E3\u5927\u5C0F',\\n    category,\\n  }\\n  /** Graph Copy */\\n  export const GRAPH_COPY: IGraphCommand = {\\n    id: 'xflow:graph-copy-selection',\\n    label: '\u590D\u5236',\\n    category,\\n  }\\n  /** Graph Paste */\\n  export const GRAPH_PASTE: IGraphCommand = {\\n    id: 'xflow:graph-paste-selection',\\n    label: '\u7C98\u8D34',\\n    category,\\n  }\\n  /** Graph \u5F00\u542F\u6846\u9009 */\\n  export const GRAPH_TOGGLE_MULTI_SELECT: IGraphCommand = {\\n    id: 'xflow:graph-toggle-multi-select',\\n    label: '\u542F\u7528\u6846\u9009',\\n    category,\\n  }\\n  /** \u65B0\u589E Tool: https://x6.antv.vision/zh/docs/api/registry/edge-tool */\\n  export const GRAPH_ADD_TOOL: IGraphCommand = {\\n    id: 'xflow:add-tool',\\n    label: '\u6DFB\u52A0\u5DE5\u5177',\\n    category,\\n  }\\n  /** \u5220\u9664 Tool: https://x6.antv.vision/zh/docs/api/registry/edge-tool */\\n  export const GRAPH_DEL_TOOL: IGraphCommand = {\\n    id: 'xflow:del-tool',\\n    label: '\u5220\u9664\u5DE5\u5177',\\n    category,\\n  }\\n  /** history: https://x6.antv.vision/zh/docs/api/graph/history#%E6%96%B9%E6%B3%95 */\\n  export const GRAPH_HISTORY_UNDO: IGraphCommand = {\\n    id: 'xflow:history-undo',\\n    label: 'history undo',\\n    category,\\n  }\\n  /** history: https://x6.antv.vision/zh/docs/api/graph/history#%E6%96%B9%E6%B3%95  */\\n  export const GRAPH_HISTORY_REDO: IGraphCommand = {\\n    id: 'xflow:history-redo',\\n    label: 'history redo',\\n    category,\\n  }\\n  /** history: https://x6.antv.vision/zh/docs/api/graph/history#%E6%96%B9%E6%B3%95  */\\n  export const GRAPH_HISTORY_RESET: IGraphCommand = {\\n    id: 'xflow:history-reset',\\n    label: 'history reset',\\n    category,\\n  }\\n  /** history: https://x6.antv.vision/zh/docs/api/graph/history#%E6%96%B9%E6%B3%95  */\\n  export const GRAPH_HISTORY_TOGGLE: IGraphCommand = {\\n    id: 'xflow:history-toggle',\\n    label: 'history toggle',\\n    category,\\n  }\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "xflowgroupcommands"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#xflowgroupcommands",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "XFlowGroupCommands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** \u5982\u4F55\u5F15\u7528\uFF1F */\\nimport { XFlowGroupCommands } from '@antv/xflow'\\n\\n/** \u7FA4\u7EC4\u64CD\u4F5C */\\nexport namespace XFlowGroupCommands {\\n  const category = '\u7FA4\u7EC4\u64CD\u4F5C'\\n  /** \u521D\u59CB\u5316\u7FA4\u7EC4\u64CD\u4F5C */\\n  export const INIT_GROUP: IGraphCommand = {\\n    id: 'xflow:init-group',\\n    label: '\u521D\u59CB\u5316\u7FA4\u7EC4',\\n    category,\\n  }\\n  /** ADD GROUP \u64CD\u4F5C */\\n  export const ADD_GROUP: IGraphCommand = {\\n    id: 'xflow:add-group',\\n    label: '\u65B0\u5EFA\u7FA4\u7EC4',\\n    category,\\n  }\\n  /** DELETE GROUP \u64CD\u4F5C */\\n  export const DEL_GROUP: IGraphCommand = {\\n    id: 'xflow:del-group',\\n    label: '\u89E3\u6563\u7FA4\u7EC4',\\n    category,\\n  }\\n  /** \u6298\u53E0\u64CD\u4F5C */\\n  export const COLLAPSE_GROUP: IGraphCommand = {\\n    id: 'xflow:collapse-group',\\n    label: '\u6298\u53E0\u7FA4\u7EC4',\\n    category,\\n  }\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "xflowmodelcommands"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#xflowmodelcommands",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "XFlowModelCommands"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** \u5982\u4F55\u5F15\u7528\uFF1F */\\nimport { XFlowModelCommands } from '@antv/xflow'\\n\\n/** \u5168\u5C40\u72B6\u6001 */\\nexport namespace XFlowModelCommands {\\n  const category = '\u72B6\u6001\u64CD\u4F5C'\\n  /** Update model \u64CD\u4F5C */\\n  export const UPDATE_MODEL: IGraphCommand = {\\n    id: 'xflow:update-model',\\n    label: '\u8BBE\u7F6E\u72B6\u6001\u503C',\\n    category,\\n  }\\n}",
    lang: "tsx"
  })));
});

//# sourceURL=webpack:///./docs/api/commands/index.md?`)}}]);
