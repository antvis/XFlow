(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LOCALE_TEXTS = {\n  \'zh-CN\': {\n    name: \'\u5c5e\u6027\u540d\',\n    description: \'\u63cf\u8ff0\',\n    type: \'\u7c7b\u578b\',\n    default: \'\u9ed8\u8ba4\u503c\',\n    required: \'(\u5fc5\u9009)\'\n  },\n  \'en-US\': {\n    name: \'Name\',\n    description: \'Description\',\n    type: \'Type\',\n    default: \'Default\',\n    required: \'(required)\'\n  }\n};\n/* unused harmony default export */ var _unused_webpack_default_export = (_ref => {\n  var identifier = _ref.identifier,\n      expt = _ref.export;\n  var data = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["useApiData"])(identifier);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),\n      locale = _useContext.locale;\n\n  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS[\'zh-CN\'] : LOCALE_TEXTS[\'en-US\'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {\n    style: {\n      marginTop: 24\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.default))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, (data[expt] || []).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {\n    key: row.identifier\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.description || \'--\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.default || row.required && texts.required || \'--\')))))));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/API.tsx?')},"4fhk":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_API_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0H/f");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Alert_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N0lm");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Badge_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DgDr");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Example_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cGlH");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Bjia");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BlwA");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "nsgraph-namespace"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#nsgraph-namespace",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "NsGraph namespace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {\n    align: "right"\n  }, "\\u540D\\u79F0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {\n    align: "right"\n  }, "\\u8BF4\\u660E"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#nsgraph-namespace"\n  }, "NsGraph")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "XFlow \\u7684 \\u57FA\\u7840 namespace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#igraphmeta"\n  }, "NsGraph.IGraphMeta")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "Graph \\u5143\\u6570\\u636E ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \\u9664\\u4E86\\u56FE\\u7684 Id \\u4E4B\\u5916\\uFF0C\\u53EF\\u80FD\\u5305\\u62EC\\u8FD9\\u4E9B\\u4E1A\\u52A1\\u5C5E\\u6027\\uFF1A\\u753B\\u5E03\\u540D\\u79F0/\\u521B\\u5EFA\\u65F6\\u95F4/\\u66F4\\u65B0\\u65F6\\u95F4/\\u7528\\u6237\\u6743\\u9650")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#igraphmeta"\n  }, "NsGraph.IGraphData")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u56FE\\u6570\\u636E\\u5305\\u62EC\\u8282\\u70B9\\u548C\\u8FB9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#inodeconfig"\n  }, "NsGraph.INodeConfig")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u8282\\u70B9\\u914D\\u7F6E\\u7C7B\\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#iedgeconfig"\n  }, "NsGraph.IEdgeConfig")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u8FB9\\u7684\\u914D\\u7F6E\\u7C7B\\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#inoderender"\n  }, "NsGraph.INodeAnchor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u8282\\u70B9\\u7684\\u951A\\u70B9\\u914D\\u7F6E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#IGroupConfig"\n  }, "NsGraph.IGroupConfig")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u7FA4\\u7EC4\\u8282\\u70B9\\u914D\\u7F6E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#ievent"\n  }, "NsGraph.IEvent")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "Graph \\u4E8B\\u4EF6\\u914D\\u7F6E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#inoderender"\n  }, "NsGraph.INodeRender")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "ReactNode \\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface#iedgerender"\n  }, "NsGraph.IEdgeRender")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "ReactLabel \\u7EC4\\u4EF6")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "/** \u5982\u4f55\u5f15\u5165\uff1f */\\nimport { NsGraph } from \'@antv/xflow\'\\n\\n/** \u7c7b\u578b\u8bf4\u660e */\\nexport namespace NsGraph {\\n  /** Graph\u5143\u6570\u636e\uff1a\u9664\u4e86\u56fe\u7684Id\u4e4b\u5916\uff0c\u53ef\u80fd\u5305\u62ec\u8fd9\u4e9b\u4e1a\u52a1\u5c5e\u6027\uff1a\u753b\u5e03\u540d\u79f0/\u521b\u5efa\u65f6\u95f4/\u66f4\u65b0\u65f6\u95f4/\u7528\u6237\u6743\u9650 */\\n  export interface IGraphMeta {\\n    // ...\\n  }\\n\\n  /** \u56fe\u6570\u636e\u5305\u62ec\u8282\u70b9\u914d\u7f6e\u548c\u8fb9\u914d\u7f6e */\\n  export interface IGraphData {\\n    // ...\\n  }\\n\\n  /** \u8282\u70b9\u914d\u7f6e */\\n  export interface INodeConfig {\\n    // ...\\n  }\\n\\n  /** \u7fa4\u7ec4\u8282\u70b9\u914d\u7f6e */\\n  export interface IGroupConfig {\\n    // ...\\n  }\\n\\n  /** \u8fb9\u914d\u7f6e */\\n  export interface IEdgeConfig {\\n    // ...\\n  }\\n\\n  /** \u951a\u70b9\u914d\u7f6e */\\n  export interface INodeAnchor {\\n    // ...\\n  }\\n\\n  /** \u4e8b\u4ef6\u914d\u7f6e */\\n  export interface IEvent {\\n    // ...\\n  }\\n\\n  /** \u8282\u70b9React\u7ec4\u4ef6\u7c7b\u578b */\\n  export interface INodeRender {\\n    // ...\\n  }\\n\\n  /** \u8fb9Label\u7ec4\u4ef6\u7c7b\u578b */\\n  export interface IEdgeRender {\\n    // ...\\n  }\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "igraphmeta"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#igraphmeta",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IGraphMeta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u56FE\\u7684\\u57FA\\u7840\\u5143\\u6570\\u636E\\uFF0C\\u9664\\u4E86 flowId \\u4E4B\\u5916\\uFF0C\\u53EF\\u80FD\\u5305\\u62EC\\u8FD9\\u4E9B\\u4E1A\\u52A1\\u5C5E\\u6027\\uFF1A\\u753B\\u5E03\\u540D\\u79F0/\\u521B\\u5EFA\\u65F6\\u95F4/\\u66F4\\u65B0\\u65F6\\u95F4/\\u7528\\u6237\\u6743\\u9650/\\u753B\\u5E03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export interface IGraphMeta {\\n  /** \u753b\u5e03id */\\n  flowId: string\\n  [key: string]: any\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "igraphdata"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#igraphdata",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IGraphData"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u56FE\\u6570\\u636E\\u5305\\u62EC\\u8282\\u70B9\\u548C\\u8FB9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "/**  */\\nexport interface IGraphData {\\n  nodes: INodeConfig[]\\n  edges: IEdgeConfig[]\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "inodeconfig"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#inodeconfig",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "INodeConfig"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u8282\\u70B9\\u914D\\u7F6E\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "/** \u8fb9\u6570\u636e */\\nexport interface INodeConfig {\\n  /** \u8282\u70b9\u7684\u552f\u4e00\u6807\u8bc6 */\\n  id: string\\n  /** \u8282\u70b9\u5728\u753b\u5e03\u7684\u4f4d\u7f6e: x */\\n  x?: number\\n  /** \u8282\u70b9\u5728\u753b\u5e03\u7684\u4f4d\u7f6e: y */\\n  y?: number\\n  /** \u8282\u70b9\u7684\u6e32\u67d3\u5bbd\u5ea6 */\\n  width?: number\\n  /** \u8282\u70b9\u7684\u6e32\u67d3\u9ad8\u5ea6 */\\n  height?: number\\n  /** \u8282\u70b9\u540d */\\n  label?: string\\n  /** \u8282\u70b9React\u7ec4\u4ef6\u7684key */\\n  renderKey?: string\\n  /** \u7528\u6237\u81ea\u5b9a\u4e49\u5b57\u6bb5 */\\n  [key: string]: any\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "igroupconfig"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#igroupconfig",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IGroupConfig"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u7FA4\\u7EC4\\u8282\\u70B9\\u914D\\u7F6E\\u7C7B\\u578B\\uFF0C\\u7FA4\\u7EC4\\u4E5F\\u662F\\u8282\\u70B9\\uFF0C\\u6240\\u4EE5 extends \\u8282\\u70B9\\u7684\\u6240\\u6709\\u5C5E\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "/** \u7fa4\u7ec4\u8282\u70b9\u4fe1\u606f */\\nexport interface IGroupConfig extends INodeConfig {\\n  /** \u662f\u5426\u6298\u53e0 */\\n  isCollapsed?: boolean\\n  /** group \u6298\u53e0\u540e\u7684\u5927\u5c0f */\\n  groupCollapsedSize?: { width: number; height: number }\\n  /** group \u672a\u6298\u53e0\u7684\u5927\u5c0f */\\n  groupChildrenSize?: { width: number; height: number }\\n  /** \u5b50\u8282\u70b9\u5143\u7d20\u96c6\u5408 */\\n  groupChildren?: string[]\\n  /** group Header */\\n  groupHeaderHeight?: number\\n  /** group \u5185\u8fb9\u8ddd */\\n  groupPadding?: number\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "iedgeconfig"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#iedgeconfig",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IEdgeConfig"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u8FB9\\u7684\\u914D\\u7F6E\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "/** \u8fb9\u6570\u636e */\\nexport interface IEdgeConfig {\\n  /** \u8fb9\u7684\u552f\u4e00\u6807\u8bc6 */\\n  id: string\\n  /** \u8fb9\u7684\u4e0a\u6e38\u8282\u70b9id */\\n  source: string\\n  /** \u8fb9\u7684\u4e0b\u6e38\u8282\u70b9id */\\n  target: string\\n  /** \u8fb9\u7684\u4e0a\u6e38\u8282\u70b9\u7684\u951a\u70b9Id */\\n  sourcePortId?: string\\n  /** \u8fb9\u7684\u4e0a\u6e38\u8282\u70b9\u7684\u951a\u70b9Id */\\n  targetPortId?: string\\n  /** \u8fb9\u4e0alabel */\\n  label?: string\\n  /** \u8fb9\u4e0a\u6e32\u67d3React\u7ec4\u4ef6\u7684key */\\n  renderKey?: string\\n  /** \u8fb9\u4e0a\u6e32\u67d3\u5185\u5bb9\u7684\u5bbd\u5ea6 */\\n  edgeContentWidth?: number\\n  /** \u8fb9\u4e0a\u6e32\u67d3\u5185\u5bb9\u7684\u9ad8\u5ea6 */\\n  edgeContentHeigt?: number\\n  /** \u7528\u6237\u81ea\u5b9a\u4e49\u5b57\u6bb5 */\\n  [key: string]: any\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "inodeanchor"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#inodeanchor",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "INodeAnchor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u8282\\u70B9\\u7684\\u951A\\u70B9\\u914D\\u7F6E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export interface INodeAnchor extends PortManager {\\n  /** uuid */\\n  id: string\\n  /** position enum NsGraph.AnchorGroup */\\n  group: AnchorGroup\\n  /** position enum NsGraph.AnchorType */\\n  type: AnchorType\\n  /** tooltip */\\n  tooltip: string\\n  /** \u7528\u6237\u81ea\u5b9a\u4e49\u5b57\u6bb5 */\\n  [key: string]: any\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {\n    id: "anchorgroup"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#anchorgroup",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "AnchorGroup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5185\\u7F6E\\u7684 Anchor \\u4F4D\\u7F6E\\u5206\\u7EC4\\u914D\\u7F6E\\uFF1A \\u4E0A\\u4E0B\\u5DE6\\u53F3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "/** Anchor \u4f4d\u7f6e\u5206\u7ec4\uff1a \u4e0a\u4e0b\u5de6\u53f3 */\\nexport enum AnchorGroup {\\n  TOP = \'top\',\\n  BOTTOM = \'bottom\',\\n  RIGHT = \'right\',\\n  LEFT = \'left\',\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {\n    id: "anchortype"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#anchortype",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "AnchorType"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anchor \\u8F93\\u5165/\\u8F93\\u51FA\\u7C7B\\u578B\\uFF0C\\u7528\\u4E8E\\u6709\\u5411\\u65E0\\u73AF\\u56FE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "/** Anchor \u6570\u636e\u7c7b\u578b\uff1a\u8f93\u5165/\u8f93\u51fa */\\nexport enum AnchorType {\\n  INPUT = \'input\',\\n  OUTPUT = \'output\',\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "ievent"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#ievent",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IEvent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u753B\\u5E03\\u4E8B\\u4EF6\\u914D\\u7F6E\\u9879\\uFF1A\\u5305\\u542B\\u4E8B\\u4EF6\\u540D\\u548C\\u4E8B\\u4EF6\\u56DE\\u8C03"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export interface IEvent<Key extends keyof EventArgs = any> {\\n  eventName: Key\\n  callback: (\\n    x6Event: EventArgs[Key],\\n    commands: IGraphCommandService,\\n    contextService: IContextService,\\n  ) => void\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "inoderender"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#inoderender",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "INodeRender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Node \\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export type INodeRender<T extends NsGraph.INodeConfig = any> = React.FC<INodeProps<T>>",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "inodeprops"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#inodeprops",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "INodeProps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Node \\u7EC4\\u4EF6\\u7684 Props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export interface INodeProps<T extends NsGraph.INodeConfig> {\\n  cell: X6Node\\n  data: T\\n  size: { width: number; height: number }\\n  position: { x: number; y: number }\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "iedgerender"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#iedgerender",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IEdgeRender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React EdgeLabel \\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export type IEdgeRender<T extends IEdgeConfig = any> = React.FC<IEdgeProps<T>>",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "iedgeprops"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#iedgeprops",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "IEdgeProps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React EdgeLabel \\u7EC4\\u4EF6\\u7684 Props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export interface IEdgeProps<T extends NsGraph.IEdgeConfig> {\\n  cell: X6Edge\\n  data: T\\n}",\n    lang: "tsx"\n  })));\n});\n\n//# sourceURL=webpack:///./docs/api/interface/index.md?')},Bjia:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mkj/");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U/75");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("60ow");\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SourceCode_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (_ref => {\n  var code = _ref.code,\n      lang = _ref.lang,\n      _ref$showCopy = _ref.showCopy,\n      showCopy = _ref$showCopy === void 0 ? true : _ref$showCopy;\n\n  var _useCopy = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useCopy"])(),\n      _useCopy2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useCopy, 2),\n      copyCode = _useCopy2[0],\n      copyStatus = _useCopy2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: "__dumi-default-code-block"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* defaultProps */ "b"], {\n    code: code,\n    language: lang,\n    theme: undefined\n  }), _ref2 => {\n    var className = _ref2.className,\n        style = _ref2.style,\n        tokens = _ref2.tokens,\n        getLineProps = _ref2.getLineProps,\n        getTokenProps = _ref2.getTokenProps;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {\n      className: className,\n      style: style\n    }, showCopy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {\n      className: "__dumi-default-icon __dumi-default-code-block-copy-btn",\n      "data-status": copyStatus,\n      onClick: () => copyCode(code)\n    }), tokens.map((line, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", getLineProps({\n      line,\n      key: i\n    }), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", getTokenProps({\n      token,\n      key\n    }))))));\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/SourceCode.tsx?')},DgDr:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Pr/");\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Badge_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-badge"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Badge.tsx?')},N0lm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tCeM");\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Alert_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-alert"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Alert.tsx?')},cGlH:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zc05");\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Example_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => {\n  var elm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),\n      _useState2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {\n    setHeight(elm.current.contentWindow.document.documentElement.scrollHeight);\n  }, [elm]);\n  return props.route.meta.examplePath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper-toolbar"\n  }, props.route.meta.description || props.route.meta.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {\n    className: "__dumi-default-icon",\n    onClick: () => elm.current.contentWindow.location.reload()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    target: "_blank",\n    rel: "noopener noreferrer",\n    href: props.route.meta.examplePath,\n    className: "__dumi-default-icon"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {\n    src: props.route.meta.examplePath,\n    ref: elm,\n    style: {\n      height\n    },\n    title: "dumi"\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Example.tsx?')}}]);