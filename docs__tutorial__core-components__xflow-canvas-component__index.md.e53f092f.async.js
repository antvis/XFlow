(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LOCALE_TEXTS = {\n  \'zh-CN\': {\n    name: \'\u5c5e\u6027\u540d\',\n    description: \'\u63cf\u8ff0\',\n    type: \'\u7c7b\u578b\',\n    default: \'\u9ed8\u8ba4\u503c\',\n    required: \'(\u5fc5\u9009)\'\n  },\n  \'en-US\': {\n    name: \'Name\',\n    description: \'Description\',\n    type: \'Type\',\n    default: \'Default\',\n    required: \'(required)\'\n  }\n};\n/* unused harmony default export */ var _unused_webpack_default_export = (_ref => {\n  var identifier = _ref.identifier,\n      expt = _ref.export;\n  var data = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["useApiData"])(identifier);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),\n      locale = _useContext.locale;\n\n  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS[\'zh-CN\'] : LOCALE_TEXTS[\'en-US\'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {\n    style: {\n      marginTop: 24\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.default))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, (data[expt] || []).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {\n    key: row.identifier\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.description || \'--\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.default || row.required && texts.required || \'--\')))))));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/API.tsx?')},Bjia:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mkj/");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U/75");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("60ow");\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SourceCode_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (_ref => {\n  var code = _ref.code,\n      lang = _ref.lang,\n      _ref$showCopy = _ref.showCopy,\n      showCopy = _ref$showCopy === void 0 ? true : _ref$showCopy;\n\n  var _useCopy = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useCopy"])(),\n      _useCopy2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useCopy, 2),\n      copyCode = _useCopy2[0],\n      copyStatus = _useCopy2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: "__dumi-default-code-block"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* defaultProps */ "b"], {\n    code: code,\n    language: lang,\n    theme: undefined\n  }), _ref2 => {\n    var className = _ref2.className,\n        style = _ref2.style,\n        tokens = _ref2.tokens,\n        getLineProps = _ref2.getLineProps,\n        getTokenProps = _ref2.getTokenProps;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {\n      className: className,\n      style: style\n    }, showCopy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {\n      className: "__dumi-default-icon __dumi-default-code-block-copy-btn",\n      "data-status": copyStatus,\n      onClick: () => copyCode(code)\n    }), tokens.map((line, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", getLineProps({\n      line,\n      key: i\n    }), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", getTokenProps({\n      token,\n      key\n    }))))));\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/SourceCode.tsx?')},DgDr:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Pr/");\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Badge_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-badge"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Badge.tsx?')},N0lm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tCeM");\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Alert_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-alert"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Alert.tsx?')},cGlH:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zc05");\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Example_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => {\n  var elm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),\n      _useState2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {\n    setHeight(elm.current.contentWindow.document.documentElement.scrollHeight);\n  }, [elm]);\n  return props.route.meta.examplePath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper-toolbar"\n  }, props.route.meta.description || props.route.meta.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {\n    className: "__dumi-default-icon",\n    onClick: () => elm.current.contentWindow.location.reload()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    target: "_blank",\n    rel: "noopener noreferrer",\n    href: props.route.meta.examplePath,\n    className: "__dumi-default-icon"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {\n    src: props.route.meta.examplePath,\n    ref: elm,\n    style: {\n      height\n    },\n    title: "dumi"\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Example.tsx?')},f9Gn:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_API_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0H/f");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Alert_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N0lm");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Badge_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DgDr");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Example_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cGlH");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Bjia");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BlwA");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {\n    id: "xflowcanvas-\\u753B\\u5E03\\u7EC4\\u4EF6"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#xflowcanvas-\\u753B\\u5E03\\u7EC4\\u4EF6",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "XFlowCanvas \\u753B\\u5E03\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlowCanvas\\u662F XFlow \\u6700\\u6838\\u5FC3\\u7684\\u753B\\u5E03\\u7EC4\\u4EF6, \\u5B83\\u5C01\\u88C5\\u4E86 X6 \\u63D0\\u4F9B\\u7684\\u753B\\u5E03, \\u63D0\\u4F9B\\u9ED8\\u8BA4\\u753B\\u5E03\\u914D\\u7F6E\\u9879\\u3001\\u900F\\u4F20X6\\u652F\\u6301\\u7684\\u6240\\u6709\\u4E8B\\u4EF6\\u5E76\\u63D0\\u4F9B\\u7C7B\\u578B\\u63A8\\u5BFC, \\u540C\\u65F6\\u4E5F\\u5141\\u8BB8\\u7528\\u6237\\u81EA\\u5B9A\\u4E49\\u9700\\u8981\\u6E32\\u67D3\\u7684React\\u8282\\u70B9\\u548C\\u8FDE\\u7EBF\\u4E0A\\u9700\\u8981\\u6E32\\u67D3\\u7684React\\u5185\\u5BB9\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export interface IProps {\\n  /** \u6838\u5fc3\u6a21\u5757Graph\u7684\u914d\u7f6e\uff0c\u7528\u4e8e\u914d\u7f6eX6\u7684Grpah.Options\u548c\u7ed1\u5b9aGraph\u7684\u4e8b\u4ef6 */\\n  config?: GraphConfig\\n  /** \u901a\u8fc7top/bottom/left/right\u6765\u5b9a\u4f4d */\\n  position?: IPosition\\n  /** \u753b\u5e03\u7ec4\u4ef6\u5bb9\u5668\u7684className */\\n  className?: string\\n  /** \u753b\u5e03\u7ec4\u4ef6\u5bb9\u5668\u7684style */\\n  style?: React.CSSProperties\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u753B\\u5E03\\u914D\\u7F6E\\u4FE1\\u606F"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u753B\\u5E03\\u914D\\u7F6E\\u4FE1\\u606F",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u753B\\u5E03\\u914D\\u7F6E\\u4FE1\\u606F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "GraphConfig"), " \\u662F XFlowCanvas\\u753B\\u5E03\\u7EC4\\u4EF6\\u7684\\u914D\\u7F6E\\u7C7B, \\u5DF2\\u7ECF\\u9ED8\\u8BA4\\u751F\\u6210\\u5B9E\\u4F8B\\u5E76\\u8BBE\\u7F6E\\u4E86\\u521D\\u59CB\\u503C\\u3002\\u5982\\u679C\\u60F3\\u81EA\\u5B9A\\u4E49GrpahConfig, \\u53EF\\u4EE5\\u901A\\u8FC7createGraphConfig\\u65B9\\u6CD5\\u8986\\u5199, \\u76F8\\u5173API\\u5982\\u4E0B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {\n    align: "right"\n  }, "\\u540D\\u79F0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {\n    align: "right"\n  }, "\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {\n    align: "right"\n  }, "\\u5FC5\\u9009"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u63CF\\u8FF0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "setX6Config"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "(options: X6Graph.Options) => void;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u914D\\u7F6E GraphOptions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "setNodeRender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "(renderKey: string, component: NsGraphConfig.INodeRender) => void;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u8BBE\\u7F6E renderKey \\u548C\\u5BF9\\u5E94 React \\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "setEdgeRender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "(renderKey: string, component: NsGraphConfig.IEdgeRender) => void;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u8BBE\\u7F6E renderKey \\u548C\\u5BF9\\u5E94 React \\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "setNodeTypeParser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "(parser: (nodeData: NsGraph.INodeConfig) => string) => void;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u8BBE\\u7F6E\\u89E3\\u6790 node render key \\u7684 parser")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "setEdgeTypeParser"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "(parser: (edgeData: NsGraph.INodeConfig) => string) => void;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u8BBE\\u7F6E\\u89E3\\u6790 edge render key \\u7684 parser")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "setEvents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "(events: GraphEvent[]) => void;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u914D\\u7F6E GraphEvents")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "\\u8BBE\\u7F6E\\u753B\\u5E03\\u914D\\u7F6E\\u9879"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u8BBE\\u7F6E\\u753B\\u5E03\\u914D\\u7F6E\\u9879",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u8BBE\\u7F6E\\u753B\\u5E03\\u914D\\u7F6E\\u9879"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5728", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "/api/interface/graph"\n  }, "\\u9ED8\\u8BA4\\u914D\\u7F6E"), "\\u4E0D\\u6EE1\\u8DB3\\u9700\\u6C42\\u65F6\\uFF0C\\u53EF\\u4EE5\\u901A\\u8FC7 setX6Config \\u65B9\\u6CD5\\u6765\\u8986\\u76D6\\u9ED8\\u8BA4\\u7684\\u914D\\u7F6E\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export const useGraphConfig = createGraphConfig(config => {\\n  /** \u53ef\u7528\u914d\u7f6e\u9879\u53c2\u8003: https://x6.antv.vision/zh/docs/api/graph/graph */\\n  config.setX6Config({\\n    /** \u753b\u5e03\u7f51\u683c */\\n    grid: true,\\n    /** \u753b\u5e03\u7f29\u653e\u7b49\u7ea7 */\\n    scaling: {\\n      min: 0.2,\\n      max: 3,\\n    },\\n    /** \u753b\u5e03\u6eda\u8f6e\u7f29\u653e */\\n    mousewheel: {\\n      enabled: true,\\n      /** \u5c06\u9f20\u6807\u4f4d\u7f6e\u4f5c\u4e3a\u4e2d\u5fc3\u7f29\u653e */\\n      zoomAtMousePosition: true,\\n    },\\n  })\\n})",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "\\u8BBE\\u7F6E\\u9700\\u8981\\u6E32\\u67D3\\u7684react\\u8282\\u70B9"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u8BBE\\u7F6E\\u9700\\u8981\\u6E32\\u67D3\\u7684react\\u8282\\u70B9",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u8BBE\\u7F6E\\u9700\\u8981\\u6E32\\u67D3\\u7684React\\u8282\\u70B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u9ED8\\u8BA4\\u4F1A\\u4F7F\\u7528 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "NSGraph.INodeConfig"), " \\u8BBE\\u7F6E\\u7684renderKey\\u6765\\u786E\\u5B9A\\u9700\\u8981\\u6E32\\u67D3\\u54EA\\u4E2AReact\\u8282\\u70B9, \\u5982\\u4E0B\\u4EE3\\u7801\\u6240\\u793A, renderKey\\u662F NODE1, \\u5BF9\\u5E94\\u7684React\\u7EC4\\u4EF6\\u662F Node1\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export const useGraphConfig = createGraphConfig(config => {\\n  /**  renderKey\u662fNODE1, \u5bf9\u5e94\u7684React\u7ec4\u4ef6\u662f <Node1 /> */\\n  config.setNodeRender(\'NODE1\', props => <Node1 {...props} />)\\n})",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "\\u8BBE\\u7F6E\\u8FDE\\u7EBF\\u4E0A\\u9700\\u8981\\u6E32\\u67D3\\u7684react\\u5185\\u5BB9"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u8BBE\\u7F6E\\u8FDE\\u7EBF\\u4E0A\\u9700\\u8981\\u6E32\\u67D3\\u7684react\\u5185\\u5BB9",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u8BBE\\u7F6E\\u8FDE\\u7EBF\\u4E0A\\u9700\\u8981\\u6E32\\u67D3\\u7684React\\u5185\\u5BB9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u652F\\u6301\\u5728\\u8FDE\\u7EBF\\u4E0A\\u6E32\\u67D3\\u590D\\u6742\\u7684React\\u5185\\u5BB9, \\u9ED8\\u8BA4\\u4F1A\\u4F7F\\u7528 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "NSGraph.IEdgeConfig"), " \\u8BBE\\u7F6E\\u7684renderKey\\u6765\\u786E\\u5B9A\\u9700\\u8981\\u6E32\\u67D3\\u54EA\\u4E2AReact\\u8FDE\\u7EBF\\u5185\\u5BB9\\u3002\\u5982\\u4E0B\\u4EE3\\u7801\\u6240\\u793A, renderKey\\u662F EDGE1, \\u5BF9\\u5E94\\u7684React\\u7EC4\\u4EF6\\u662F Edge1\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u9700\\u8981\\u6CE8\\u610F\\u7684\\u662F, \\u5982\\u679C\\u8FDE\\u7EBF\\u4E0A\\u4E0D\\u9700\\u8981\\u6E32\\u67D3\\u4EFB\\u4F55\\u5185\\u5BB9, \\u6216\\u8005\\u53EA\\u662F\\u6E32\\u67D3\\u7B80\\u5355\\u7684\\u6587\\u672C, \\u5219\\u53EA\\u9700\\u8981\\u5728NSGraphConfig\\u4E2D\\u4F20\\u5165\\u6BD4\\u5982label=\\"1:N\\"\\u5373\\u53EF, \\u5E76\\u4E0D\\u9700\\u8981\\u505A\\u5982\\u4E0B\\u914D\\u7F6E\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export const useGraphConfig = createGraphConfig(config => {\\n  /**  renderKey\u662fEDGE1, \u5bf9\u5e94\u7684React\u7ec4\u4ef6\u662f <Edge1 /> */\\n  config.setEdgeRender(\'EDGE1\', props => <Edge1 {...props} />)\\n})",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "\\u76D1\\u542C\\u753B\\u5E03\\u76F8\\u5173\\u4E8B\\u4EF6"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u76D1\\u542C\\u753B\\u5E03\\u76F8\\u5173\\u4E8B\\u4EF6",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u76D1\\u542C\\u753B\\u5E03\\u76F8\\u5173\\u4E8B\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u652F\\u6301\\u76D1\\u542C X6 \\u753B\\u5E03(graph\\u3001node\\u3001edge\\u3001group)\\u7684\\u4E8B\\u4EF6\\uFF0C\\u6240\\u6709\\u4E8B\\u4EF6\\u7C7B\\u578B\\u53C2\\u8003\\u8FD9\\u91CC: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    to: "https://x6.antv.vision/zh/docs/tutorial/intermediate/events"\n  }, "GraphEvents\\uFF08X6 \\u4E8B\\u4EF6\\uFF09"), ", \\u6211\\u4EEC\\u63D0\\u4F9B\\u4E86 IEvent \\u7C7B\\u578B\\u5B9A\\u4E49\\u6765\\u63D0\\u4F9B\\u7C7B\\u578B\\u63D0\\u793A\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "export const useGraphConfig = createGraphConfig(config => {\\n  const event: IEvent<\'node:click\'> = {\\n    eventName: \'node:click\',\\n    callback: (eventArgs, command, modelService) => {\\n      console.log(\'node:click\', e)\\n    },\\n  }\\n  /**  \u8fd9\u91cc\u7ed1\u5b9a\u4e8b\u4ef6  */\\n  config.setEvents([event])\\n})",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u753B\\u5E03\\u4F4D\\u7F6Eiposition"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u753B\\u5E03\\u4F4D\\u7F6Eiposition",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u753B\\u5E03\\u4F4D\\u7F6EIPosition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "position"), "\\u5C5E\\u6027\\u662F\\u5229\\u7528 css \\u7684\\u7EDD\\u5BF9\\u5B9A\\u4F4D\\u628A\\u753B\\u5E03\\u5B9A\\u4F4D\\u5728 XFlow\\u5DE5\\u4F5C\\u7A7A\\u95F4\\u7684\\u4EFB\\u610F\\u4F4D\\u7F6E\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {\n    align: "right"\n  }, "\\u540D\\u79F0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {\n    align: "right"\n  }, "\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u5FC5\\u9009"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {\n    align: "right"\n  }, "\\u63CF\\u8FF0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "top"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u753B\\u5E03\\u8DDD\\u79BB\\u5DE5\\u4F5C\\u53F0\\u4E0A\\u8FB9\\u7F18\\u7684\\u8DDD\\u79BB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "bottom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u753B\\u5E03\\u8DDD\\u79BB\\u5DE5\\u4F5C\\u53F0\\u4E0B\\u8FB9\\u7F18\\u7684\\u8DDD\\u79BB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "right"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u753B\\u5E03\\u8DDD\\u79BB\\u5DE5\\u4F5C\\u53F0\\u53F3\\u8FB9\\u7F18\\u7684\\u8DDD\\u79BB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u753B\\u5E03\\u8DDD\\u79BB\\u5DE5\\u4F5C\\u53F0\\u5DE6\\u8FB9\\u7F18\\u7684\\u8DDD\\u79BB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "width"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u7EC4\\u4EF6\\u5BBD\\u5EA6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "height"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {\n    align: "right"\n  }, "\\u753B\\u5E03\\u9AD8\\u5EA6")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u753B\\u5E03\\u6837\\u5F0Fclassname"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u753B\\u5E03\\u6837\\u5F0Fclassname",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u753B\\u5E03\\u6837\\u5F0FclassName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5141\\u8BB8\\u4F20\\u5165\\u81EA\\u5B9A\\u4E49\\u7684classname\\u6765\\u5B9A\\u4E49\\u753B\\u5E03\\u7684\\u6837\\u5F0F\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u4F7F\\u7528\\u5C0Ftip"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u4F7F\\u7528\\u5C0Ftip",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u4F7F\\u7528\\u5C0FTip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5982\\u679C\\u60F3\\u5728\\u8282\\u70B9\\u5185\\u90E8\\u4F7F\\u7528", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface/command#igraphcommandservice"\n  }, "IGraphCommandService"), " \\u548C ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "/api/interface/model#imodelservice"\n  }, "IModelService"), ", \\u6765\\u6267\\u884C\\u547D\\u4EE4\\u6216\\u8005\\u4F7F\\u7528\\u5168\\u5C40\\u4FDD\\u5B58\\u7684\\u72B6\\u6001, \\u5219\\u4F7F\\u7528\\u65B9\\u5F0F\\u5982\\u4E0B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "import { NsGraph, useAppContext } from \'@antv/xflow\'\\n\\ninterface IAppContext {\\n  cell: X6Node | X6Edge\\n  commands: IGraphCommandService\\n  modelService: IModelService\\n}\\n\\nconst Node1: NsGraph.INodeRender = props => {\\n  const ctx: IAppContext = useAppContext()\\n  const { data } = props\\n  return <div className=\\"react-node\\">{data.label}</div>\\n}",\n    lang: "tsx"\n  })));\n});\n\n//# sourceURL=webpack:///./docs/tutorial/core-components/xflow-canvas-component/index.md?')}}]);