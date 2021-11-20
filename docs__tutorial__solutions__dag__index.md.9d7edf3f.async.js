(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LOCALE_TEXTS = {\n  \'zh-CN\': {\n    name: \'\u5c5e\u6027\u540d\',\n    description: \'\u63cf\u8ff0\',\n    type: \'\u7c7b\u578b\',\n    default: \'\u9ed8\u8ba4\u503c\',\n    required: \'(\u5fc5\u9009)\'\n  },\n  \'en-US\': {\n    name: \'Name\',\n    description: \'Description\',\n    type: \'Type\',\n    default: \'Default\',\n    required: \'(required)\'\n  }\n};\n/* unused harmony default export */ var _unused_webpack_default_export = (_ref => {\n  var identifier = _ref.identifier,\n      expt = _ref.export;\n  var data = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["useApiData"])(identifier);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),\n      locale = _useContext.locale;\n\n  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS[\'zh-CN\'] : LOCALE_TEXTS[\'en-US\'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {\n    style: {\n      marginTop: 24\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.default))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, (data[expt] || []).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {\n    key: row.identifier\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.description || \'--\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.default || row.required && texts.required || \'--\')))))));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/API.tsx?')},AIfb:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_API_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0H/f");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Alert_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N0lm");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Badge_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DgDr");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Example_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cGlH");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Bjia");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BlwA");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\nvar DumiDemo1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'dag-basic\'].component);\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "dag-\\u56FE\\u7F16\\u8F91\\u89E3\\u51B3\\u65B9\\u6848"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#dag-\\u56FE\\u7F16\\u8F91\\u89E3\\u51B3\\u65B9\\u6848",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "DAG \\u56FE\\u7F16\\u8F91\\u89E3\\u51B3\\u65B9\\u6848")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], _dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'dag-basic\'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "dag"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#dag",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "DAG"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "what-is-dag"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#what-is-dag",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "what is DAG\\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "DAG: \\u5728\\u56FE\\u8BBA\\u4E2D\\uFF0C\\u5982\\u679C\\u4E00\\u4E2A\\u6709\\u5411\\u56FE\\u4ECE\\u4EFB\\u610F\\u9876\\u70B9\\u51FA\\u53D1\\u65E0\\u6CD5\\u7ECF\\u8FC7\\u82E5\\u5E72\\u6761\\u8FB9\\u56DE\\u5230\\u8BE5\\u70B9\\uFF0C\\u5219\\u8FD9\\u4E2A\\u56FE\\u662F\\u4E00\\u4E2A\\u6709\\u5411\\u65E0\\u73AF\\u56FE\\uFF08DAG, Directed Acyclic Graph\\uFF09\\u3002\\u5229\\u7528 DAG \\u56FE\\u7684\\u6570\\u636E\\u7ED3\\u6784\\u53EF\\u4EE5\\u4F7F\\u7528\\u7B97\\u6CD5\\u89E3\\u51B3\\u62D3\\u6251\\u6392\\u5E8F/\\u6784\\u5EFA\\u5B50\\u56FE/\\u8DEF\\u5F84\\u67E5\\u627E\\u7B49\\u95EE\\u9898\\uFF0C\\u56E0\\u88AB\\u5E94\\u7528\\u5728\\u4EFB\\u52A1\\u8C03\\u5EA6/\\u56E0\\u679C\\u7ED3\\u6784/\\u65CF\\u8C31\\u8840\\u7F18\\u7B49\\u573A\\u666F\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u529F\\u80FD\\u4ECB\\u7ECD"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u529F\\u80FD\\u4ECB\\u7ECD",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u529F\\u80FD\\u4ECB\\u7ECD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "\\u8282\\u70B9\\u4EA4\\u4E92node"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u8282\\u70B9\\u4EA4\\u4E92node",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u8282\\u70B9\\u4EA4\\u4E92\\uFF08Node\\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u56FE\\u7531\\u8282\\u70B9\\u548C\\u8FDE\\u63A5\\u8FD9\\u4E9B\\u8282\\u70B9\\u7684\\u8FB9\\u6240\\u6784\\u6210, \\u56FE\\u7F16\\u8F91\\u7684\\u7B2C\\u4E00\\u6B65\\u9700\\u8981\\u5B9E\\u73B0\\u8282\\u70B9\\u7684\\u7684\\u65B0\\u5EFA\\u548C\\u5220\\u9664\\uFF0CXFlow \\u6D41\\u7A0B\\u56FE\\u89E3\\u51B3\\u65B9\\u6848\\u5185\\u7F6E\\u8282\\u70B9\\u9762\\u677F\\u7EC4\\u4EF6\\u548C\\u4E8B\\u4EF6\\u5C01\\u88C5\\u6765\\u5B9E\\u73B0\\u8282\\u70B9\\u7684\\u589E\\u5220\\u6539\\u67E5\\u4EA4\\u4E92\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: "https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*_-PERKth6egAAAAAAAAAAAAAARQnAQ",\n    style: {\n      display: "block",\n      padding: "12px 0",\n      width: "61.88%"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "\\u8FDE\\u7EBF\\u4EA4\\u4E92edge"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u8FDE\\u7EBF\\u4EA4\\u4E92edge",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u8FDE\\u7EBF\\u4EA4\\u4E92\\uFF08Edge\\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u56FE\\u7F16\\u8F91\\u7684\\u7B2C\\u4E8C\\u6B65\\u9700\\u8981\\u5B9E\\u73B0\\u8282\\u70B9\\u95F4\\u8FDE\\u7EBF\\u7684\\u589E\\uFF0C\\u5220\\uFF0C\\u6539\\uFF0C\\u67E5\\u7684\\u4EA4\\u4E92", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: "https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*xKGASoivL-wAAAAAAAAAAAAAARQnAQ",\n    style: {\n      display: "block",\n      padding: "12px 0",\n      width: "61.88%"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "\\u7FA4\\u7EC4\\u4EA4\\u4E92group"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u7FA4\\u7EC4\\u4EA4\\u4E92group",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u7FA4\\u7EC4\\u4EA4\\u4E92\\uFF08Group\\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5728\\u8282\\u70B9\\u548C\\u8FB9\\u7684\\u57FA\\u7840\\u4E0A\\u6211\\u4EEC\\u8FD8\\u53EF\\u4EE5\\u628A\\u6709\\u903B\\u8F91\\u5173\\u7CFB\\u7684\\u8282\\u70B9\\u7EC4\\u88C5\\u6210\\u7EC4", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: "https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*lgNQRYOtEI8AAAAAAAAAAAAAARQnAQ",\n    style: {\n      display: "block",\n      padding: "12px 0",\n      width: "61.88%"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "\\u753B\\u5E03\\u4EA4\\u4E92graph"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u753B\\u5E03\\u4EA4\\u4E92graph",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u753B\\u5E03\\u4EA4\\u4E92\\uFF08Graph\\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u5185\\u7F6E\\u7D2F\\u5E38\\u7528\\u7684\\u753B\\u5E03\\u7F29\\u653E\\uFF0C\\u590D\\u5236\\u7C98\\u8D34\\uFF0C\\u64A4\\u9500\\u91CD\\u505A\\uFF0CMiniMap \\u7B49\\u80FD\\u529B\\u3002", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: "https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*cRchRaLf_6gAAAAAAAAAAAAAARQnAQ",\n    style: {\n      display: "block",\n      padding: "12px 0",\n      width: "61.88%"\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "dag-\\u4EA4\\u4E92graph"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#dag-\\u4EA4\\u4E92graph",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "DAG \\u4EA4\\u4E92\\uFF08Graph\\uFF09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5185\\u7F6E DAG \\u7279\\u9700\\u7684\\u6267\\u884C/\\u505C\\u6B62\\u6267\\u884C/\\u8F6E\\u8BE2\\u66F4\\u65B0\\u753B\\u5E03\\u8282\\u70B9\\u72B6\\u6001\\u7684\\u4EA4\\u4E92", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n    src: "https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*4SkDRpv79goAAAAAAAAAAAAAARQnAQ",\n    style: {\n      display: "block",\n      padding: "12px 0",\n      width: "61.88%"\n    }\n  })))));\n});\n\n//# sourceURL=webpack:///./docs/tutorial/solutions/dag/index.md?')},Bjia:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mkj/");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U/75");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("60ow");\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SourceCode_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (_ref => {\n  var code = _ref.code,\n      lang = _ref.lang,\n      _ref$showCopy = _ref.showCopy,\n      showCopy = _ref$showCopy === void 0 ? true : _ref$showCopy;\n\n  var _useCopy = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useCopy"])(),\n      _useCopy2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useCopy, 2),\n      copyCode = _useCopy2[0],\n      copyStatus = _useCopy2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: "__dumi-default-code-block"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* defaultProps */ "b"], {\n    code: code,\n    language: lang,\n    theme: undefined\n  }), _ref2 => {\n    var className = _ref2.className,\n        style = _ref2.style,\n        tokens = _ref2.tokens,\n        getLineProps = _ref2.getLineProps,\n        getTokenProps = _ref2.getTokenProps;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {\n      className: className,\n      style: style\n    }, showCopy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {\n      className: "__dumi-default-icon __dumi-default-code-block-copy-btn",\n      "data-status": copyStatus,\n      onClick: () => copyCode(code)\n    }), tokens.map((line, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", getLineProps({\n      line,\n      key: i\n    }), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", getTokenProps({\n      token,\n      key\n    }))))));\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/SourceCode.tsx?')},DgDr:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Pr/");\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Badge_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-badge"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Badge.tsx?')},N0lm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tCeM");\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Alert_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-alert"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Alert.tsx?')},cGlH:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zc05");\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Example_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => {\n  var elm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),\n      _useState2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {\n    setHeight(elm.current.contentWindow.document.documentElement.scrollHeight);\n  }, [elm]);\n  return props.route.meta.examplePath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper-toolbar"\n  }, props.route.meta.description || props.route.meta.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {\n    className: "__dumi-default-icon",\n    onClick: () => elm.current.contentWindow.location.reload()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    target: "_blank",\n    rel: "noopener noreferrer",\n    href: props.route.meta.examplePath,\n    className: "__dumi-default-icon"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {\n    src: props.route.meta.examplePath,\n    ref: elm,\n    style: {\n      height\n    },\n    title: "dumi"\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Example.tsx?')}}]);