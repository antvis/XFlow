(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
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

//# sourceURL=webpack:///./.dumi/theme/builtins/Alert.tsx?`)},a06k:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "\\u7B80\\u4ECB"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\u7B80\\u4ECB",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u7B80\\u4ECB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u662F AntV \\u65D7\\u4E0B, \\u57FA\\u4E8E X6 \\u56FE\\u7F16\\u8F91\\u5F15\\u64CE\\u3001\\u9762\\u5411 React \\u6280\\u672F\\u6808\\u7528\\u6237\\u7684\\u56FE\\u7F16\\u8F91\\u5E94\\u7528\\u7EA7\\u89E3\\u51B3\\u65B9\\u6848, \\u65E8\\u5728\\u8BA9\\u590D\\u6742\\u7684\\u56FE\\u7F16\\u8F91\\u5E94\\u7528\\u5F00\\u53D1\\u7B80\\u5355\\u9AD8\\u6548\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u7C7B\\u6BD4", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "antd"), "\\u4F53\\u7CFB, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "X6"), " \\u662F\\u56FE\\u7F16\\u8F91\\u573A\\u666F\\u7684 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "antd"), ", \\u63D0\\u4F9B\\u56FE\\u7F16\\u8F91\\u7684\\u5404\\u79CD\\u539F\\u5B50\\u80FD\\u529B\\u3002\\u800C ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "XFlow"), " \\u662F\\u56FE\\u7F16\\u8F91\\u573A\\u666F\\u7684 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "ProComponent"), ", \\u901A\\u8FC7 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "App \\u6269\\u5C55\\u7CFB\\u7EDF"), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "\\u72B6\\u6001\\u7BA1\\u7406"), "/", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "\\u547D\\u4EE4\\u6A21\\u5F0F"), "\\u6765\\u5B9E\\u73B0\\u5BF9 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "X6"), " \\u7684\\u539F\\u5B50\\u80FD\\u529B\\u7684\\u7EC4\\u5408\\u5C01\\u88C5, \\u6700\\u7EC8\\u5B9E\\u73B0\\u5E94\\u7528\\u7EA7\\u573A\\u666F\\u7684\\u5F00\\u7BB1\\u5373\\u7528\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u6E90\\u81EA\\u8682\\u8681\\u4F53\\u9A8C\\u6280\\u672F\\u90E8\\u6570\\u636E\\u667A\\u80FD\\u56E2\\u961F, \\u5DF2\\u7ECF\\u5728\\u8682\\u8681\\u5927\\u6570\\u636E\\u90E8\\u3001\\u4EBA\\u5DE5\\u667A\\u80FD\\u4E2D\\u53F0\\u4E1A\\u52A1\\u573A\\u666F\\u6DF1\\u5EA6\\u6253\\u78E8\\u9A8C\\u8BC1, \\u503C\\u5F97\\u4FE1\\u8D56\\uFF01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5982\\u679C\\u60A8\\u8FD8\\u6CA1\\u6709\\u4F7F\\u7528\\u8FC7 XFlow, \\u5EFA\\u8BAE\\u901A\\u8FC7 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "quick-start"
  }, "\\u5FEB\\u901F\\u4E0A\\u624B"), " \\u62A2\\u5148\\u4F53\\u9A8C XFlow \\u7684\\u9B45\\u529B\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "-\\u547D\\u540D\\u7531\\u6765"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#-\\u547D\\u540D\\u7531\\u6765",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\uD83D\\uDCA1 \\u547D\\u540D\\u7531\\u6765"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "XFlow \\u7684 X \\u4EE3\\u8868\\u4ECE\\u5C5E\\u4E8E X6 \\u4F53\\u7CFB, Flow \\u53EF\\u4EE5\\u7406\\u89E3\\u4E3A\\u6D41\\u7A0B\\u56FE\\u4E5F\\u53EF\\u4EE5\\u7406\\u89E3\\u4F7F\\u7528\\u8D77\\u6765\\u50CF\\u6C34\\u4E00\\u6837\\u6D41\\u7545\\u3001\\u6613\\u7528\\u3001\\u53EF\\u6269\\u5C55\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "-\\u7279\\u6027"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#-\\u7279\\u6027",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u2728 \\u7279\\u6027"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\uD83C\\uDF31 \\u3000\\u6781\\u6613\\u5B9A\\u5236\\uFF1A\\u652F\\u6301\\u4F7F\\u7528 React \\u7EC4\\u4EF6 \\u5F00\\u53D1\\u8282\\u70B9/\\u8FDE\\u7EBF\\u6837\\u5F0F\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\uD83D\\uDE80 \\u3000\\u5F00\\u7BB1\\u5373\\u7528\\uFF1A\\u5185\\u7F6E 1 \\u4E2A\\u5FEB\\u901F\\u4E0A\\u624B + 3 \\u4E2A\\u89E3\\u51B3\\u65B9\\u6848, \\u5185\\u7F6E\\u82E5\\u5E72 React \\u4EA4\\u4E92\\u7EC4\\u4EF6, \\u5982\\u5C0F\\u5730\\u56FE\\u3001\\u5BF9\\u9F50\\u7EBF\\u3001\\u53F3\\u952E\\u83DC\\u5355\\u7B49\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\uD83D\\uDCAF \\u3000\\u751F\\u4EA7\\u53EF\\u7528\\uFF1A\\u6E90\\u81EA\\u8682\\u8681\\u4F53\\u9A8C\\u6280\\u672F\\u90E8\\u6570\\u636E\\u667A\\u80FD\\u56E2\\u961F, \\u5728\\u8682\\u8681\\u5927\\u6570\\u636E\\u90E8\\u3001\\u4EBA\\u5DE5\\u667A\\u80FD\\u4E2D\\u53F0\\u4E1A\\u52A1\\u573A\\u666F\\u6DF1\\u5EA6\\u6253\\u78E8\\u9A8C\\u8BC1\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\uD83E\\uDDF2 \\u3000 \\u4E00\\u5207\\u7686\\u53EF\\u6269\\u5C55\\uFF1A\\u5185\\u7F6E\\u7EDF\\u4E00\\u7684\\u6269\\u5C55\\u6A21\\u5F0F, \\u53EF\\u6309\\u7167\\u81EA\\u5DF1\\u7684\\u4E1A\\u52A1\\u9700\\u6C42\\u6269\\u5C55\\u56FE\\u4EA4\\u4E92, \\u6240\\u6709\\u7EC4\\u4EF6\\u7686\\u53EF\\u6269\\u5C55\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "-\\u4F7F\\u7528\\u6587\\u6863"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#-\\u4F7F\\u7528\\u6587\\u6863",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\uD83C\\uDF49 \\u4F7F\\u7528\\u6587\\u6863"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "quick-start"
  }, "\\u5FEB\\u901F\\u4E0A\\u624B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "extensions/form"
  }, "\\u89E3\\u51B3\\u65B9\\u6848")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/business-case/lineage/dag"
  }, "\\u753B\\u5E03\\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/business-case/lineage/dag"
  }, "\\u4EA4\\u4E92\\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/business-case/lineage/dag"
  }, "\\u81EA\\u5B9A\\u4E49\\u7EC4\\u4EF6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/business-case/lineage/dag"
  }, "\\u66F4\\u65B0\\u65E5\\u5FD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "\\uFE0F-\\u4EA4\\u6D41\\u7FA4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#\\uFE0F-\\u4EA4\\u6D41\\u7FA4",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\u2764\\uFE0F \\u4EA4\\u6D41\\u7FA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u6B22\\u8FCE\\u5404\\u754C XFlow/X6 \\u4F7F\\u7528\\u8005, \\u56FE\\u53EF\\u89C6\\u5316/\\u56FE\\u7F16\\u8F91\\u65B9\\u5411\\u7684\\u7231\\u597D\\u8005\\u52A0\\u5165 XFlow/X6 \\u4EA4\\u6D41\\u7FA4 (\\u9489\\u9489\\u7FA4, \\u4F7F\\u7528\\u9489\\u9489\\u626B\\u4E00\\u626B\\u52A0\\u5165) \\u8BA8\\u8BBA\\u4E0E\\u4EA4\\u6D41\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://qr.dingtalk.com/action/joingroup?code=v1,k1,rOHuvgq5s0EHDktyyQJffDE3ZAmHnbB2e6iwn/w4BKs=&_dt_no_comment=1&origin=11",
    target: "_blank",
    rel: ["noopener,noreferrer"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://gw.alipayobjects.com/mdn/rms_19b204/afts/img/A*KuL6R7t0Xw0AAAAAAAAAAAAAARQnAQ",
    alt: "XFlow \\u56FE\\u53EF\\u89C6\\u5316\\u4EA4\\u6D41\\u7FA4",
    width: 375
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "-\\u5982\\u4F55\\u8D21\\u732E"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#-\\u5982\\u4F55\\u8D21\\u732E",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\uD83E\\uDD1D \\u5982\\u4F55\\u8D21\\u732E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5982\\u679C\\u60A8\\u5728\\u4F7F\\u7528\\u7684\\u8FC7\\u7A0B\\u4E2D\\u78B0\\u5230\\u95EE\\u9898\\uFF0C\\u53EF\\u4EE5\\u5148\\u901A\\u8FC7 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/antvis/x6/issues"
  }, "issues"), " \\u770B\\u770B\\u6709\\u6CA1\\u6709\\u7C7B\\u4F3C\\u7684 bug \\u6216\\u8005\\u5EFA\\u8BAE\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u5982\\u9700\\u63D0\\u4EA4\\u4EE3\\u7801\\uFF0C\\u8BF7\\u9075\\u4ECE\\u6211\\u4EEC\\u7684", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/antvis/X6/blob/master/CONTRIBUTING.zh-CN.md"
  }, "\\u8D21\\u732E\\u6307\\u5357"), "\\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/antvis/xflow/graphs/contributors",
    target: "_blank",
    rel: ["noopener,noreferrer"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://opencollective.com/x6/contributors.svg?width=890&button=false"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "-license"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {
    to: "#-license",
    "aria-hidden": "true",
    tabIndex: -1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon icon-link"
  })), "\\uD83D\\uDD11 License"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "https://github.com/antvis/Xflow/blob/master/LICENSE"
  }, "MIT License"), "\\u3002")));
});

//# sourceURL=webpack:///./docs/tutorial/about/index.en-US.md?`)},cGlH:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");
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
