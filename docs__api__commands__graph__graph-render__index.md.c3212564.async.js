(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
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

//# sourceURL=webpack:///./.dumi/theme/builtins/Badge.tsx?`)},FV6r:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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












var DumiDemo1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"]['graph-render-demos'].component);
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
    id: "\\u753B\\u5E03\\u5185\\u5BB9\\u6E32\\u67D3\\u547D\\u4EE4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u753B\\u5E03\\u5185\\u5BB9\\u6E32\\u67D3\\u547D\\u4EE4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u753B\\u5E03\\u5185\\u5BB9\\u6E32\\u67D3\\u547D\\u4EE4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u63D0\\u4F9B\\u753B\\u5E03\\u6E32\\u67D3\\u7684\\u547D\\u4EE4 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "XFlowGraphCommands.GRAPH_RENDER"), ", \\u901A\\u8FC7\\u8BE5\\u547D\\u4EE4\\u53EF\\u4EE5\\u5B9E\\u73B0\\u5728\\u753B\\u5E03\\u4E2D\\u6E32\\u67D3\\u8282\\u70B9/\\u8FDE\\u7EBF\\u7684\\u80FD\\u529B\\u3002\\u7528\\u6237\\u53EA\\u9700\\u4F20\\u5165\\u6307\\u5B9A\\u6570\\u636E\\u7ED3\\u6784\\u7684\\u6570\\u636E, \\u65E0\\u9700\\u5173\\u5FC3\\u753B\\u5E03\\u6E32\\u67D3\\u7684\\u5177\\u4F53\\u903B\\u8F91, XFlow \\u4F1A\\u81EA\\u52A8\\u6E32\\u67D3\\u753B\\u5E03\\u5185\\u5BB9\\u5E76\\u505A\\u597D Diff\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "graphrender-\\u793A\\u4F8B"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#graphrender-\\u793A\\u4F8B",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "GraphRender \\u793A\\u4F8B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], _dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"]['graph-render-demos'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u753B\\u5E03\\u5185\\u5BB9\\u5982\\u4F55\\u6E32\\u67D3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u753B\\u5E03\\u5185\\u5BB9\\u5982\\u4F55\\u6E32\\u67D3",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u753B\\u5E03\\u5185\\u5BB9\\u5982\\u4F55\\u6E32\\u67D3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u901A\\u8FC7\\u8C03\\u7528", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "XFlowGraphCommands.GRAPH_RENDER"), "\\u547D\\u4EE4, \\u4F20\\u5165 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/api/interface"
  }, "NSGraph.IGraphData"), " \\u7C7B\\u578B\\u7684\\u6570\\u636E\\u5373\\u53EF\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "const graphData: NsGraph.IGraphData = {\\n  nodes: [\\n    { id: 'root1', x: 200, y: 50, width: 120, height: 40, renderKey: 'NODE1', info: 'React\u8282\u70B91' },\\n    { id: 'down1', x: 550, y: 50, width: 120, height: 40, renderKey: 'NODE1', info: 'React\u8282\u70B92' },\\n  ],\\n  edges: [{ id: 'root1-down1', source: 'root1', target: 'down1', label: 'text' }],\\n}\\n\\n/** \u6267\u884C\u753B\u5E03\u6E32\u67D3\u547D\u4EE4 */\\napp.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {\\n  graphData,\\n} as NsGraphCmd.GraphRender.IArgs)",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "graphrender-\\u547D\\u4EE4\\u53C2\\u6570iargs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#graphrender-\\u547D\\u4EE4\\u53C2\\u6570iargs",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "GraphRender \\u547D\\u4EE4\\u53C2\\u6570(IArgs)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    align: "right"
  }, "\\u540D\\u79F0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    align: "right"
  }, "\\u7C7B\\u578B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    align: "right"
  }, "\\u5FC5\\u9009"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    align: "right"
  }, "\\u9ED8\\u8BA4\\u503C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\\u63CF\\u8FF0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "graphData"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "NsGraph.IGraphData"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "\\u2713"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "undefined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u753B\\u5E03\\u6E32\\u67D3\\u6570\\u636E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "beforeRender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "Function"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "undefined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u753B\\u5E03\\u6E32\\u67D3\\u4E4B\\u524D\\u7684\\u94A9\\u5B50")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "afterRender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "Function"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "undefined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u753B\\u5E03\\u6E32\\u67D3\\u4E4B\\u540E\\u7684\\u94A9\\u5B50")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "isNodeEqual"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "Function"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "undefined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u5224\\u65AD\\u8282\\u70B9\\u662F\\u5426\\u76F8\\u7B49\\u7684\\u65B9\\u6CD5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "isEdgeEqual"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "Function"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    align: "right"
  }, "undefined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "\\u5224\\u65AD\\u8FB9\\u662F\\u5426\\u76F8\\u7B49\\u7684\\u65B9\\u6CD5")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "graphdata-\\u5FC5\\u9009"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#graphdata-\\u5FC5\\u9009",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "graphData (\\u5FC5\\u9009)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u753B\\u5E03\\u6E32\\u67D3\\u6570\\u636E, \\u5177\\u4F53\\u8BF7\\u53C2\\u8003\\u6570\\u636E\\u683C\\u5F0F ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "/api/interface#inodeconfig"
  }, "NSGraph.IGraphData"), "\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "beforerender-\\u53EF\\u9009"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#beforerender-\\u53EF\\u9009",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "beforeRender (\\u53EF\\u9009)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u753B\\u5E03\\u6E32\\u67D3\\u5185\\u5BB9\\u4E4B\\u524D\\u7684\\u94A9\\u5B50, \\u5141\\u8BB8\\u7528\\u6237\\u505A\\u4E00\\u4E9B\\u989D\\u5916\\u7684\\u64CD\\u4F5C, \\u5982\\u679C\\u6709\\u9700\\u8981\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "beforeRender?: (graphMeta?: NsGraph.IGraphMeta) => Promise<NsGraph.IGraphData>",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "afterrender-\\u53EF\\u9009"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#afterrender-\\u53EF\\u9009",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "afterRender (\\u53EF\\u9009)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u753B\\u5E03\\u6E32\\u67D3\\u5185\\u5BB9\\u4E4B\\u540E\\u7684\\u94A9\\u5B50, \\u5141\\u8BB8\\u7528\\u6237\\u505A\\u4E00\\u4E9B\\u989D\\u5916\\u7684\\u64CD\\u4F5C, \\u5982\\u679C\\u6709\\u9700\\u8981\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "afterRender?: (graphData: NsGraph.IGraphData, graphMeta?: NsGraph.IGraphMeta) => Promise<any> | undefined",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "isnodeequal-\\u53EF\\u9009"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#isnodeequal-\\u53EF\\u9009",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "isNodeEqual (\\u53EF\\u9009)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "GraphRender \\u5185\\u7F6E\\u753B\\u5E03\\u5185\\u5BB9 Diff \\u64CD\\u4F5C, \\u9ED8\\u8BA4\\u4F7F\\u7528\\u8282\\u70B9\\u6570\\u636E\\u8FDB\\u884C\\u6BD4\\u8F83\\u3002\\u5982\\u679C\\u7528\\u6237\\u9700\\u8981\\u81EA\\u5B9A\\u4E49\\u5224\\u65AD\\u8282\\u70B9\\u662F\\u5426\\u76F8\\u7B49, \\u53EF\\u4EE5\\u4F20\\u5165 isNodeEqual \\u65B9\\u6CD5\\u3002\\u6BD4\\u5982\\u8282\\u70B9\\u6570\\u636E\\u4E2D\\u6709\\u4E2A isActive \\u5B57\\u6BB5, \\u53EF\\u4EE5\\u5224\\u65AD\\u8BE5\\u5B57\\u6BB5\\u7684\\u503C\\u662F\\u5426\\u76F8\\u7B49\\u6765\\u51B3\\u5B9A\\u8282\\u70B9\\u662F\\u5426\\u9700\\u8981\\u91CD\\u65B0\\u6E32\\u67D3\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** \u7528\u6237\u81EA\u5B9A\u4E49\u65B9\u6CD5\u5224\u65AD\u8282\u70B9\u5185\u5BB9\u662F\u5426\u76F8\u7B49 */\\nisNodeEqual?: (curNodeConfig: NsGraph.INodeConfig, nextNodeConfig: NsGraph.INodeConfig) => boolean",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    id: "isedgeequal-\\u53EF\\u9009"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#isedgeequal-\\u53EF\\u9009",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "isEdgeEqual (\\u53EF\\u9009)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "GraphRender \\u5185\\u7F6E\\u753B\\u5E03\\u5185\\u5BB9 Diff \\u64CD\\u4F5C, \\u9ED8\\u8BA4\\u4F7F\\u7528\\u8FB9\\u6570\\u636E\\u8FDB\\u884C\\u6BD4\\u8F83\\u3002\\u5982\\u679C\\u7528\\u6237\\u9700\\u8981\\u81EA\\u5B9A\\u4E49\\u5224\\u65AD\\u8FB9\\u662F\\u5426\\u76F8\\u7B49, \\u53EF\\u4EE5\\u4F20\\u5165 isEdgeEqual \\u65B9\\u6CD5\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    code: "/** \u7528\u6237\u81EA\u5B9A\u4E49\u65B9\u6CD5\u5224\u65AD\u8FB9\u5185\u5BB9\u662F\u5426\u76F8\u7B49 */\\nisEdgeEqual?: (curEdgeConfig: NsGraph.IEdgeConfig, nextEdgeConfig: NsGraph.IEdgeConfig) => boolean",
    lang: "tsx"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\u753B\\u5E03\\u5185\\u5BB9\\u5982\\u4F55-diff"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u753B\\u5E03\\u5185\\u5BB9\\u5982\\u4F55-diff",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u753B\\u5E03\\u5185\\u5BB9\\u5982\\u4F55 Diff"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u4F1A\\u81EA\\u52A8\\u8FDB\\u884C\\u753B\\u5E03\\u5185\\u5BB9\\u7684 Diff, \\u8FD9\\u5BF9\\u4E8E\\u753B\\u5E03\\u5185\\u5BB9\\u52A8\\u6001\\u66F4\\u65B0\\u3001\\u753B\\u5E03\\u5185\\u5BB9\\u6E05\\u7A7A\\u5E76\\u91CD\\u65B0\\u6E32\\u67D3\\u7B49\\u5E94\\u7528\\u573A\\u666F\\u975E\\u5E38\\u6709\\u7528\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u4E3E\\u4F8B:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u7528\\u6237\\u7B2C\\u4E00\\u6B21\\u4F20\\u5165\\u8282\\u70B9 1,2,3, \\u7B2C\\u4E8C\\u6B21\\u4F20\\u5165\\u8282\\u70B9 2,3,4, \\u90A3\\u4E48\\u7B2C\\u4E8C\\u6B21\\u6E32\\u67D3\\u65F6, \\u8282\\u70B9 1 \\u4F1A\\u88AB\\u5220\\u9664, \\u8282\\u70B9 2,3 \\u4FDD\\u7559\\u4E0D\\u52A8, \\u8282\\u70B9 4 \\u4F1A\\u65B0\\u589E\\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5982\\u679C\\u7B2C\\u4E8C\\u6B21\\u4F20\\u5165\\u7684\\u8282\\u70B9 2,3 \\u6570\\u636E\\u6709\\u66F4\\u65B0, \\u90A3\\u4E48\\u8282\\u70B9 2,3 \\u4F1A\\u91CD\\u65B0\\u6E32\\u67D3, \\u4EE5\\u5C55\\u793A\\u6700\\u65B0\\u6570\\u636E\\u3002"))))));
});

//# sourceURL=webpack:///./docs/api/commands/graph/graph-render/index.md?`)},N0lm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");
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
