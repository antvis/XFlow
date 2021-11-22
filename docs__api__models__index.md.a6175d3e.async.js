(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
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

//# sourceURL=webpack:///./.dumi/theme/builtins/Alert.tsx?`)},"ai/Q":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
    id: "models"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#models",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "MODELS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u901A\\u8FC7\\u4E8B\\u4EF6\\u76D1\\u542C\\u7CFB\\u7EDF\\u72B6\\u6001\\uFF0C\\u5982\\u679C MODEL \\u66F4\\u65B0\\u5219\\u89E6\\u53D1 UI \\u7EC4\\u4EF6\\u7684\\u66F4\\u65B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "// \u5982\u4F55\u4F7F\u7528\uFF1F\\nimport { MODELS } from '@antv/xflow'\\n// \u4F7F\u7528models\\nconst getModel = async () => {\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale, graphScaleModel)\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "model-hooks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#model-hooks",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "MODEL HOOKS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "// \u5982\u4F55\u4F7F\u7528\uFF1F\\nimport { MODELS } from '@antv/xflow'\\n// \u4F7F\u7528models\\nconst getModel = async () => {\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale, graphScaleModel)\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "usemodelasync"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#usemodelasync",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "useModelAsync"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "// \u5982\u4F55\u4F7F\u7528\uFF1F\\nimport { MODELS } from '@antv/xflow'\\n// \u4F7F\u7528models\\nconst getModel = async () => {\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale, graphScaleModel)\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "usemodel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#usemodel",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "useModel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "// \u5982\u4F55\u4F7F\u7528\uFF1F\\nimport { MODELS } from '@antv/xflow'\\n// \u4F7F\u7528models\\nconst getModel = async () => {\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale, graphScaleModel)\\n}",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "xflow-models"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#xflow-models",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "XFlow MODELS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\b \\u5185\\u7F6E\\u5F00\\u7BB1\\u5373\\u7528\\u7684 Models"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "// \u5982\u4F55\u4F7F\u7528\uFF1F\\nimport { MODELS } from '@antv/xflow'\\n// \u4F7F\u7528models\\nconst getModel= async()=>{\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale,graphScaleModel)\\n}\\n\\n/** \u753B\u5E03\u662F\u5426\u5DF2\u5F00\u542F\u591A\u9009 */\\nexport namespace GRAPH_ENABLE_MULTI_SELECT {\\n  export const id = 'GRAPH_ENABLE_MULTI_SELECT'\\n  export type IState = {\\n    isEnable: boolean\\n  }\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u5DF2\u9009\u4E2D\u8282\u70B9 */\\nexport namespace IS_NODE_SELECTED {\\n  export const id = 'IS_NODE_SELECTED'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u9009\u4E2D\u8282\u70B9\u662FGroup */\\nexport namespace IS_GROUP_SELECTED {\\n  export const id = 'IS_GROUP_SELECTED'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u9009\u4E2D\u8282\u70B9\u662FGroup */\\nexport namespace IS_NORMAL_NODES_SELECTED {\\n  export const id = 'IS_NORMAL_NODES_SELECTED'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u9009\u4E2DCell\u72B6\u6001\uFF0C\u4FDD\u5B58\u6700\u540E\u4E00\u4E2A\u9009\u4E2D\u7684\u8282\u70B9 */\\nexport namespace SELECTED_CELL {\\n  export const id = 'LAST_SELECTED_CELL'\\n  export type IState = Cell | null\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u9009\u4E2DCellS\u72B6\u6001 */\\nexport namespace SELECTED_CELLS {\\n  export const id = 'SELECTED_CELLS'\\n  export type IState = Cell[]\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n\\n/** \u753B\u5E03\u9009\u4E2D\u8282\u70B9\u72B6\u6001\uFF0C \u5982\u6709\u591A\u4E2A\u8282\u70B9\u5219\u4FDD\u5B58\u6700\u540E\u4E00\u4E2A\u9009\u4E2D\u7684\u8282\u70B9 */\\nexport namespace SELECTED_NODE {\\n  export const id = 'LAST_SELECTED_NODE'\\n  export type IState = Node<Node.Properties> | null\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u9009\u4E2D\u8282\u70B9\u72B6\u6001 */\\nexport namespace SELECTED_NODES {\\n  export const id = 'SELECTED_NODES'\\n  export type IState = Node<Node.Properties>[]\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u9009\u4E2D\u8FB9\u72B6\u6001 */\\nexport namespace SELECTED_EDGES {\\n  export const id = 'SELECTED_EDGES'\\n  export type IState = Edge<Edge.Properties>[]\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u9009\u4E2DGROUP List */\\nexport namespace SELECTED_GROUPS {\\n  export const id = 'SELECTED_GROUPS'\\n  export type IState = Node<Node.Properties>[]\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u8282\u70B9\u53F3\u952E\u83DC\u5355\u72B6\u6001 */\\nexport namespace CONTEXTMENU_NODE {\\n  export const id = 'CONTEXTMENU_NODE'\\n  export type IState = Node<Node.Properties> | null\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u8FB9\u53F3\u952E\u83DC\u5355\u72B6\u6001 */\\nexport namespace CONTEXTMENU_EDGE {\\n  export const id = 'CONTEXTMENU_EDGE'\\n  export type IState = Edge<Edge.Properties> | null\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u53F3\u952E\u83DC\u5355\u72B6\u6001 */\\nexport namespace CONTEXTMENU_TARGET {\\n  export const id = 'CONTEXTMENU_TARGET'\\n  export type IState = ContextMenuInfo | null\\n  export interface ContextMenuInfo {\\n    type: TargetType\\n    data: CellView.EventArgs['cell:contextmenu']\\n    anchor: { x: number; y: number }\\n    cell: Cell\\n  }\\n  export type TargetType = 'node' | 'edge' | 'blank' | 'null'\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u5143\u6570\u636E\u72B6\u6001 */\\nexport namespace GRAPH_META {\\n  export const id = 'GRAPH_META'\\n  export type IState = { flowId: string; [key: string]: any }\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753B\u5E03\u7F29\u653E\u72B6\u6001 */\\nexport namespace GRAPH_SCALE {\\n  export const id = 'GRAPH_SCALE'\\n  export type IState = {\\n    zoomFactor: number\\n    sx?: number\\n    sy?: number\\n    ox?: number\\n    oy?: number\\n  }\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** COMMAND REDO STACK\u7684\u72B6\u6001*/\\nexport namespace COMMAND_REDOABLE {\\n  export const id = 'COMMAND_REDOABLE'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** COMMAND UNDO STACK\u7684\u72B6\u6001*/\\nexport namespace COMMAND_UNDOABLE {\\n  export const id = 'COMMAND_UNDOABLE'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n\\n/** History Undo Redo */\\nexport namespace HISTORY_UNDOABLE {\\n  export const id = 'HISTORY_UNDOABLE'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\nexport namespace HISTORY_REDOABLE {\\n  export const id = 'HISTORY_REDOABLE'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n\\n\`\`\`",
    lang: "tsx"
  })));
});

//# sourceURL=webpack:///./docs/api/models/index.md?`)},cGlH:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");
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
