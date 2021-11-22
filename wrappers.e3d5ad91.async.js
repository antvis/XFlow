(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"9kvl":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ core_history["b" /* history */]; });

// UNUSED EXPORTS: plugin, isBrowser

// EXTERNAL MODULE: ./src/.umi-production/core/history.ts
var core_history = __webpack_require__("FfOG");

// EXTERNAL MODULE: ./src/.umi-production/core/plugin.ts
var core_plugin = __webpack_require__("bCY9");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/utils/lib/ssr.js
var ssr = __webpack_require__("2nRa");

// CONCATENATED MODULE: ./src/.umi-production/core/ssr/clientExports.ts
// @ts-nocheck
// only export isBrowser for user

// CONCATENATED MODULE: ./src/.umi-production/core/umiExports.ts
// @ts-nocheck




//# sourceURL=webpack:///./src/.umi-production/core/umiExports.ts_+_1_modules?`)},TFQZ:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("jem/");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/theme/index.js
var lib_theme = __webpack_require__("2tE6");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/react-use/esm/useMedia.js + 1 modules
var useMedia = __webpack_require__("GRoC");

// EXTERNAL MODULE: ./src/.umi-production/core/umiExports.ts + 1 modules
var umiExports = __webpack_require__("9kvl");

// EXTERNAL MODULE: ./.dumi/theme/components/LocaleSelect.less
var LocaleSelect = __webpack_require__("z80P");

// CONCATENATED MODULE: ./.dumi/theme/components/LocaleSelect.tsx
 // @ts-ignore





var LocaleSelect_LocaleSelect = _ref => {
  var location = _ref.location;

  var _useContext = Object(react["useContext"])(lib_theme["context"]),
      base = _useContext.base,
      locale = _useContext.locale,
      locales = _useContext.config.locales;

  var firstDiffLocale = locales.find(_ref2 => {
    var name = _ref2.name;
    return name !== locale;
  });

  function getLocaleTogglePath(target) {
    var baseWithoutLocale = base.replace("/".concat(locale), '');
    var pathnameWithoutLocale = location.pathname.replace(base, baseWithoutLocale) || '/'; // append locale prefix to path if it is not the default locale

    if (target !== locales[0].name) {
      // compatiable with integrate route prefix /~docs
      var routePrefix = "".concat(baseWithoutLocale, "/").concat(target).replace(/\\/\\//, '/');
      var pathnameWithoutBase = location.pathname.replace( // to avoid stripped the first /
      base.replace(/^\\/$/, '//'), '');
      return "".concat(routePrefix).concat(pathnameWithoutBase).replace(/\\/$/, '');
    }

    return pathnameWithoutLocale;
  }

  return firstDiffLocale ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-locale-select",
    "data-locale-count": locales.length
  }, locales.length > 2 ? /*#__PURE__*/react_default.a.createElement("select", {
    value: locale,
    onChange: ev => umiExports["a" /* history */].push(getLocaleTogglePath(ev.target.value))
  }, locales.map(localeItem => /*#__PURE__*/react_default.a.createElement("option", {
    value: localeItem.name,
    key: localeItem.name
  }, localeItem.label))) : /*#__PURE__*/react_default.a.createElement(lib_theme["Link"], {
    to: getLocaleTogglePath(firstDiffLocale.name)
  }, firstDiffLocale.label)) : null;
};

/* harmony default export */ var components_LocaleSelect = (LocaleSelect_LocaleSelect);
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/classnames/index.js
var classnames = __webpack_require__("O94r");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 2 modules
var useTranslation = __webpack_require__("9Koi");

// EXTERNAL MODULE: ./.dumi/theme/components/Products/Product.module.less?modules
var Product_modulemodules = __webpack_require__("ulkT");
var Product_modulemodules_default = /*#__PURE__*/__webpack_require__.n(Product_modulemodules);

// CONCATENATED MODULE: ./.dumi/theme/components/Products/Product.tsx
 // @ts-ignore



var getTarget = url => url.startsWith('http') && !url.includes('gitee.io') && !url.includes('antv.vision') ? '_blank' : '_self';

var Product = _ref => {
  var name = _ref.name,
      icon = _ref.icon,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      slogan = _ref.slogan,
      description = _ref.description,
      _ref$links = _ref.links,
      links = _ref$links === void 0 ? [] : _ref$links,
      style = _ref.style,
      language = _ref.language;
  return /*#__PURE__*/react_default.a.createElement("li", {
    className: Product_modulemodules_default.a.product,
    style: style
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: url,
    target: getTarget(url)
  }, /*#__PURE__*/react_default.a.createElement("img", {
    alt: name,
    src: icon
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: Product_modulemodules_default.a.productContent
  }, /*#__PURE__*/react_default.a.createElement("a", {
    href: url,
    target: getTarget(url)
  }, /*#__PURE__*/react_default.a.createElement("h4", null, name, /*#__PURE__*/react_default.a.createElement("span", {
    className: Product_modulemodules_default.a.productSlogan,
    style: {
      opacity: language === 'en' ? 0.7 : ''
    }
  }, slogan))), /*#__PURE__*/react_default.a.createElement("div", {
    className: Product_modulemodules_default.a.productDescription
  }, description), /*#__PURE__*/react_default.a.createElement("div", {
    className: Product_modulemodules_default.a.productLinks
  }, links.slice(0, 2).map(item => /*#__PURE__*/react_default.a.createElement("a", {
    href: item.url,
    target: getTarget(item.url || ''),
    key: item.url
  }, item.title)))));
};

/* harmony default export */ var Products_Product = (Product);
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/HomeOutlined.js + 1 modules
var HomeOutlined = __webpack_require__("gCGT");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/PieChartOutlined.js + 1 modules
var PieChartOutlined = __webpack_require__("7fK3");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/ReadOutlined.js + 1 modules
var ReadOutlined = __webpack_require__("+3Qe");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/HistoryOutlined.js + 1 modules
var HistoryOutlined = __webpack_require__("UULS");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/GithubOutlined.js + 1 modules
var GithubOutlined = __webpack_require__("gOlP");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/AreaChartOutlined.js + 1 modules
var AreaChartOutlined = __webpack_require__("Qdcf");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/YuqueOutlined.js + 1 modules
var YuqueOutlined = __webpack_require__("oJSA");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/DingdingOutlined.js + 1 modules
var DingdingOutlined = __webpack_require__("E+Eb");

// CONCATENATED MODULE: ./.dumi/theme/components/Products/getProducts.tsx



var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

var Categories = tuple('basic', 'extension', 'ecology');
var ANTV_DOMAIN = 'antv.vision'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

var getProducts = _ref => {
  var t = _ref.t,
      language = _ref.language;
  var hosts = {};
  ['g2', 'g2plot', 'g6', 'l7', 'f2', 'graphin', 'g', 'x6', 'ava'].forEach(name => {
    hosts[name] = "".concat(name, ".").concat(ANTV_DOMAIN);
  });
  var products = [{
    title: 'G2',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/trEfLRh5pc/G2%252520keshihuatuxingyufa.svg',
    slogan: t('\u53EF\u89C6\u5316\u5F15\u64CE'),
    description: t('\u6570\u636E\u9A71\u52A8\uFF0C\u9AD8\u5EA6\u6613\u7528\uFF0C\u53EF\u6269\u5C55\u7684\u53EF\u89C6\u5316\u56FE\u5F62\u8BED\u6CD5\u3002'),
    category: Categories[0],
    links: [{
      icon: /*#__PURE__*/react_default.a.createElement(HomeOutlined["a" /* default */], null),
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: "https://".concat(hosts.g2, "/").concat(language)
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(PieChartOutlined["a" /* default */], null),
      title: t('\u56FE\u8868\u793A\u4F8B'),
      url: "https://".concat(hosts.g2, "/").concat(language, "/examples")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('\u4F7F\u7528\u6587\u6863'),
      url: "https://".concat(hosts.g2, "/").concat(language, "/docs/manual")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('API \u6587\u6863'),
      url: "https://".concat(hosts.g2, "/").concat(language, "/docs/api")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(HistoryOutlined["a" /* default */], null),
      title: t('\u66F4\u65B0\u65E5\u5FD7'),
      url: "https://github.com/antvis/g2/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(GithubOutlined["a" /* default */], null),
      title: t('GitHub \u4ED3\u5E93'),
      url: "https://github.com/antvis/g2",
      openExternal: true
    }, {
      icon: '\u{1F1E8}\u{1F1F3}',
      title: t('\u56FD\u5185\u955C\u50CF'),
      url: "https://antv-g2.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'G6',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/zS1wZZJVcJ/G6%252520tukeshihuayinqing.svg',
    slogan: t('\u56FE\u53EF\u89C6\u5316\u5F15\u64CE'),
    description: t('\u4FBF\u6377\u7684\u5173\u7CFB\u6570\u636E\u53EF\u89C6\u5316\u5F15\u64CE\u4E0E\u56FE\u5206\u6790\u5DE5\u5177\u3002'),
    category: Categories[0],
    links: [{
      icon: /*#__PURE__*/react_default.a.createElement(HomeOutlined["a" /* default */], null),
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: "https://".concat(hosts.g6, "/").concat(language)
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(PieChartOutlined["a" /* default */], null),
      title: t('\u56FE\u8868\u793A\u4F8B'),
      url: "https://".concat(hosts.g6, "/").concat(language, "/examples")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('\u4F7F\u7528\u6587\u6863'),
      url: "https://".concat(hosts.g6, "/").concat(language, "/docs/manual")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('API \u6587\u6863'),
      url: "https://".concat(hosts.g6, "/").concat(language, "/docs/api")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(HistoryOutlined["a" /* default */], null),
      title: t('\u66F4\u65B0\u65E5\u5FD7'),
      url: "https://github.com/antvis/g6/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(GithubOutlined["a" /* default */], null),
      title: t('GitHub \u4ED3\u5E93'),
      url: "https://github.com/antvis/g6",
      openExternal: true
    }, {
      icon: '\u{1F1E8}\u{1F1F3}',
      title: t('\u56FD\u5185\u955C\u50CF'),
      url: "https://antv-g6.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'F2',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/D%26fDbWqVkv/F2%252520yidongduankeshihuafangan.svg',
    slogan: t('\u79FB\u52A8\u53EF\u89C6\u5316\u65B9\u6848'),
    description: t('\u4E13\u6CE8\u4E8E\u79FB\u52A8\u7AEF\u7684\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u517C\u5BB9 H5/\u5C0F\u7A0B\u5E8F/Weex \u7B49\u591A\u7AEF\u73AF\u5883'),
    category: Categories[0],
    links: [{
      icon: /*#__PURE__*/react_default.a.createElement(HomeOutlined["a" /* default */], null),
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: "https://".concat(hosts.f2, "/").concat(language)
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(PieChartOutlined["a" /* default */], null),
      title: t('\u56FE\u8868\u793A\u4F8B'),
      url: "https://".concat(hosts.f2, "/").concat(language, "/examples")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('\u4F7F\u7528\u6587\u6863'),
      url: "https://".concat(hosts.f2, "/").concat(language, "/docs/tutorial/getting-started")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('API \u6587\u6863'),
      url: "https://".concat(hosts.f2, "/").concat(language, "/docs/api")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(HistoryOutlined["a" /* default */], null),
      title: t('\u66F4\u65B0\u65E5\u5FD7'),
      url: "https://github.com/antvis/f2/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(GithubOutlined["a" /* default */], null),
      title: t('GitHub \u4ED3\u5E93'),
      url: "https://github.com/antvis/f2",
      openExternal: true
    }, {
      icon: '\u{1F1E8}\u{1F1F3}',
      title: t('\u56FD\u5185\u955C\u50CF'),
      url: "https://antv-f2.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'L7',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/OI%26h7HXH33/L7%252520dilikongjianshujukeshihua.svg',
    slogan: t('\u5730\u7406\u7A7A\u95F4\u6570\u636E\u53EF\u89C6\u5316'),
    description: t('\u9AD8\u6027\u80FD/\u9AD8\u6E32\u67D3\u8D28\u91CF\u7684\u5730\u7406\u7A7A\u95F4\u6570\u636E\u53EF\u89C6\u5316\u6846\u67B6\u3002'),
    category: Categories[0],
    links: [{
      icon: /*#__PURE__*/react_default.a.createElement(HomeOutlined["a" /* default */], null),
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: "https://".concat(hosts.l7, "/").concat(language)
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(PieChartOutlined["a" /* default */], null),
      title: t('\u56FE\u8868\u793A\u4F8B'),
      url: "https://".concat(hosts.l7, "/").concat(language, "/examples")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('\u4F7F\u7528\u6587\u6863'),
      url: "https://".concat(hosts.l7, "/").concat(language, "/docs/tutorial")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('API \u6587\u6863'),
      url: "https://".concat(hosts.l7, "/").concat(language, "/docs/api/l7")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(HistoryOutlined["a" /* default */], null),
      title: t('\u66F4\u65B0\u65E5\u5FD7'),
      url: "https://github.com/antvis/L7/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(GithubOutlined["a" /* default */], null),
      title: t('GitHub \u4ED3\u5E93'),
      url: "https://github.com/antvis/L7",
      openExternal: true
    }, {
      icon: '\u{1F1E8}\u{1F1F3}',
      title: t('\u56FD\u5185\u955C\u50CF'),
      url: "https://antv-l7.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'G2Plot',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/SlbIagEvT7/G2plot.svg',
    slogan: t('\u5F00\u7BB1\u5373\u7528\u7684\u56FE\u8868\u5E93'),
    description: t('\u5F00\u7BB1\u5373\u7528\u3001\u6613\u4E8E\u914D\u7F6E\u3001\u6781\u81F4\u4F53\u9A8C\u7684\u901A\u7528\u56FE\u8868\u5E93\u3002'),
    category: Categories[1],
    links: [{
      icon: /*#__PURE__*/react_default.a.createElement(HomeOutlined["a" /* default */], null),
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: "https://".concat(hosts.g2plot, "/").concat(language)
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(PieChartOutlined["a" /* default */], null),
      title: t('\u56FE\u8868\u793A\u4F8B'),
      url: "https://".concat(hosts.g2plot, "/").concat(language, "/examples")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('\u4F7F\u7528\u6587\u6863'),
      url: "https://".concat(hosts.g2plot, "/").concat(language, "/docs/manual")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(HistoryOutlined["a" /* default */], null),
      title: t('\u66F4\u65B0\u65E5\u5FD7'),
      url: "https://github.com/antvis/g2plot/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(GithubOutlined["a" /* default */], null),
      title: t('GitHub \u4ED3\u5E93'),
      url: "https://github.com/antvis/g2plot",
      openExternal: true
    }, {
      icon: '\u{1F1E8}\u{1F1F3}',
      title: t('\u56FD\u5185\u955C\u50CF'),
      url: "https://antv-g2plot.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'Graphin',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/0b4HzOcEJY/Graphin.svg',
    slogan: t(''),
    description: t('\u57FA\u4E8E G6 \u5C01\u88C5\u7684\u56FE\u5206\u6790\u5E94\u7528\u7EC4\u4EF6\u3002'),
    category: Categories[1],
    links: [{
      icon: /*#__PURE__*/react_default.a.createElement(HomeOutlined["a" /* default */], null),
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: "https://".concat(hosts.graphin, "/").concat(language)
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('\u4F7F\u7528\u6587\u6863'),
      url: "https://".concat(hosts.graphin, "/").concat(language, "/docs/manual/introduction")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(ReadOutlined["a" /* default */], null),
      title: t('API \u6587\u6863'),
      url: "https://".concat(hosts.graphin, "/").concat(language, "/docs/api/graphin")
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(HistoryOutlined["a" /* default */], null),
      title: t('\u66F4\u65B0\u65E5\u5FD7'),
      url: "https://github.com/antvis/graphin/blob/master/CHANGELOG.md",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(GithubOutlined["a" /* default */], null),
      title: t('GitHub \u4ED3\u5E93'),
      url: "https://github.com/antvis/graphin",
      openExternal: true
    }, {
      icon: '\u{1F1E8}\u{1F1F3}',
      title: t('\u56FD\u5185\u955C\u50CF'),
      url: "https://antv-graphin.gitee.io",
      openExternal: true
    }]
  }, {
    title: 'ChartCube',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/Zr74jx8YNX/chartcube.svg',
    slogan: t('\u56FE\u8868\u9B54\u65B9'),
    description: t('AntV \u5728\u7EBF\u56FE\u8868\u5236\u4F5C\u5229\u5668\u3002'),
    category: Categories[1],
    links: [{
      icon: /*#__PURE__*/react_default.a.createElement(HomeOutlined["a" /* default */], null),
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: "https://chartcube.alipay.com",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(AreaChartOutlined["a" /* default */], null),
      title: t('\u751F\u6210\u56FE\u8868'),
      url: "https://chartcube.alipay.com/guide",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(YuqueOutlined["a" /* default */], null),
      title: t('\u8BED\u96C0\u793E\u533A'),
      url: "https://www.yuque.com/chartcube",
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement(DingdingOutlined["a" /* default */], null),
      title: t('\u9489\u9489\u670D\u52A1\u7FA4'),
      url: "dingtalk://dingtalkclient/action/joingroup?cid=8305538734",
      openExternal: true
    }]
  }, {
    title: t('\u58A8\u8005\u5B66\u9662'),
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/12j36RPVldO/mozhexueyuan.svg',
    description: t('\u6570\u636E\u53EF\u89C6\u5316\u793E\u56E2'),
    category: Categories[2],
    links: [{
      title: t('\u5B66\u9662\u9996\u9875'),
      url: "https://www.yuque.com/mo-college",
      openExternal: true
    }]
  }, {
    title: 'BizCharts',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/Q1pbg%26O2TM/BizCharts.svg',
    description: t('\u57FA\u4E8E\u5546\u4E1A\u573A\u666F\u4E0B\u7684\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848'),
    category: Categories[2],
    links: [{
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: 'https://bizcharts.net',
      openExternal: true
    }]
  }, {
    title: 'Viser',
    icon: 'https://gw.alipayobjects.com/zos/antfincdn/QAyW5h99HVa/Viser.svg',
    description: t('\u57FA\u4E8E G2 \u5B9E\u73B0\u7684\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848'),
    category: Categories[2],
    links: [{
      title: t('\u4EA7\u54C1\u9996\u9875'),
      url: "https://viserjs.github.io/",
      openExternal: true
    }]
  }];
  return products;
};
// CONCATENATED MODULE: ./.dumi/theme/components/Products/index.tsx




 // @ts-ignore



var Products = _ref => {
  var show = _ref.show,
      _ref$rootDomain = _ref.rootDomain,
      rootDomain = _ref$rootDomain === void 0 ? '' : _ref$rootDomain,
      language = _ref.language,
      className = _ref.className;

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var data = getProducts({
    t,
    language: language || i18n.language,
    rootDomain
  });
  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Product_modulemodules_default.a.products, className, {
      [Product_modulemodules_default.a.show]: !!show
    })
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Product_modulemodules_default.a.container
  }, /*#__PURE__*/react_default.a.createElement("h3", null, t('\u57FA\u7840\u4EA7\u54C1')), /*#__PURE__*/react_default.a.createElement("ul", null, data.filter(item => item.category === 'basic').map(product => /*#__PURE__*/react_default.a.createElement(Products_Product, {
    key: product.title,
    name: product.title,
    slogan: product.slogan || '',
    description: product.description,
    url: (product.links || [])[0].url,
    icon: product.icon,
    links: product.links,
    language: language || i18n.language
  }))), /*#__PURE__*/react_default.a.createElement("h3", null, t('\u62D3\u5C55\u4EA7\u54C1')), /*#__PURE__*/react_default.a.createElement("ul", null, data.filter(item => item.category === 'extension').map(product => /*#__PURE__*/react_default.a.createElement(Products_Product, {
    key: product.title,
    name: product.title,
    slogan: product.slogan || '',
    description: product.description,
    url: (product.links || [])[0].url,
    icon: product.icon,
    links: product.links,
    language: language || i18n.language
  }))), /*#__PURE__*/react_default.a.createElement("h3", null, t('\u5468\u8FB9\u751F\u6001')), /*#__PURE__*/react_default.a.createElement("ul", null, data.filter(item => item.category === 'ecology').map(product => /*#__PURE__*/react_default.a.createElement(Products_Product, {
    key: product.title,
    name: product.title,
    slogan: product.slogan || '',
    description: product.description,
    url: (product.links || [])[0].url,
    icon: product.icon,
    language: language || i18n.language
  }))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: Product_modulemodules_default.a.mask
  }));
};

/* harmony default export */ var components_Products = (Products);
// CONCATENATED MODULE: ./.dumi/theme/components/Header/Logo.tsx

/* harmony default export */ var Logo = (_ref => {
  var style = _ref.style;
  return /*#__PURE__*/react_default.a.createElement("svg", {
    width: "94",
    height: "28",
    version: "1.1",
    viewBox: "0 0 94 28",
    style: style
  }, /*#__PURE__*/react_default.a.createElement("title", null, "logo"), /*#__PURE__*/react_default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react_default.a.createElement("defs", null, /*#__PURE__*/react_default.a.createElement("linearGradient", {
    id: "linearGradient-1",
    x1: ".004%",
    x2: "100.131%",
    y1: "49.993%",
    y2: "49.993%"
  }, /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#6500FF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "16%",
    stopColor: "#6A09FF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "43%",
    stopColor: "#7623FF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "77%",
    stopColor: "#8A4CFF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "99%",
    stopColor: "#996BFF"
  })), /*#__PURE__*/react_default.a.createElement("linearGradient", {
    id: "linearGradient-2",
    x1: "50.004%",
    x2: "50.004%",
    y1: "100.012%",
    y2: "0%"
  }, /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#6500FF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "16%",
    stopColor: "#6909FF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "43%",
    stopColor: "#7523FF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "77%",
    stopColor: "#894CFF"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "99%",
    stopColor: "#976BFF"
  })), /*#__PURE__*/react_default.a.createElement("linearGradient", {
    id: "linearGradient-3",
    x1: "49.854%",
    x2: "49.854%",
    y1: "100.255%",
    y2: "0%"
  }, /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#FF6E06"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "28%",
    stopColor: "#FF770C"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "75%",
    stopColor: "#FF911C"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "#FFA126"
  })), /*#__PURE__*/react_default.a.createElement("linearGradient", {
    id: "linearGradient-4",
    x1: "57351%",
    x2: "57351%",
    y1: "59860%",
    y2: "35023%"
  }, /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "0%",
    stopColor: "#FF6E06"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "28%",
    stopColor: "#FF770C"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "75%",
    stopColor: "#FF911C"
  }), /*#__PURE__*/react_default.a.createElement("stop", {
    offset: "100%",
    stopColor: "#FFA126"
  }))), /*#__PURE__*/react_default.a.createElement("g", {
    id: "\\u9996\\u9875",
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1",
    transform: "translate(-40.000000, -21.000000)"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    id: "logo",
    fillRule: "nonzero",
    transform: "translate(40.000000, 21.000000)"
  }, /*#__PURE__*/react_default.a.createElement("g", {
    id: "text",
    fill: "#000",
    transform: "translate(40.000000, 4.000000)"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    d: "M8.7405,1.2915 C8.51971803,0.727507979 7.97591631,0.356402076 7.37025,0.356402076 C6.76458369,0.356402076 6.22078197,0.727507979 6,1.2915 L0.0915,16.224 C0.303214856,16.7668034 0.833635444,17.1176139 1.416,17.1 C1.99787286,17.1149847 2.52631953,16.7624868 2.736,16.2195 L4.236,12.1845 L10.464,12.1845 L11.964,16.2195 C12.1824954,16.7696588 12.7145414,17.1308265 13.3065,17.1308265 C13.8984586,17.1308265 14.4305046,16.7696588 14.649,16.2195 L8.7405,1.2915 Z M4.875,10.3245 L7.3125,3.7755 L7.38,3.7755 L9.8175,10.3245 L4.875,10.3245 Z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    d: "M23.616,4.8675 C21.711,4.8675 20.3625,5.5605 19.6155,6.885 L19.5705,6.885 L19.5705,4.992 C19.3939707,4.49572722 18.9242345,4.16424813 18.3975,4.16424813 C17.8707655,4.16424813 17.4010293,4.49572722 17.2245,4.992 L17.2245,16.23 C17.3727212,16.7871906 17.8771818,17.1750009 18.45375,17.1750009 C19.0303182,17.1750009 19.5347788,16.7871906 19.683,16.23 L19.683,9.741 C19.683,7.971 20.907,6.792 22.7655,6.792 C24.5655,6.792 25.542,7.7445 25.542,9.4515 L25.542,16.23 C25.6902212,16.7871906 26.1946818,17.1750009 26.77125,17.1750009 C27.3478182,17.1750009 27.8522788,16.7871906 28.0005,16.23 L28.0005,9.03 C28.002,6.4395 26.3355,4.8675 23.616,4.8675 Z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    d: "M37.164,15.2175 C37.005,15.2385 36.5865,15.27 36.3255,15.27 C35.2935,15.27 34.818,14.82 34.818,13.842 L34.818,7.5555 L37.176,7.5555 C37.4674337,7.35650372 37.6417542,7.0263925 37.6417542,6.6735 C37.6417542,6.3206075 37.4674337,5.99049628 37.176,5.7915 L37.176,5.7795 L34.818,5.7795 L34.818,3.2625 L34.809,3.2625 C34.5697886,2.81087163 34.1005678,2.5284255 33.5895,2.5284255 C33.0784322,2.5284255 32.6092114,2.81087163 32.37,3.2625 L32.37,5.787 L30.669,5.787 L30.669,5.8035 C30.3813594,6.00305662 30.2097838,6.33091436 30.2097838,6.681 C30.2097838,7.03108564 30.3813594,7.35894338 30.669,7.5585 L32.37,7.5585 L32.37,14.0655 C32.37,16.239 33.3225,17.097 35.7825,17.097 C36.246017,17.1013951 36.708959,17.063235 37.1655,16.983 C37.4531479,16.7817619 37.6244786,16.4528028 37.6244786,16.10175 C37.6244786,15.7506972 37.4531479,15.4217381 37.1655,15.2205 L37.164,15.2175 Z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    id: "Shape",
    d: "M53.9085,1.041 C53.6915775,0.484686746 53.1556096,0.118403837 52.5585,0.118403837 C51.9613904,0.118403837 51.4254225,0.484686746 51.2085,1.041 L46.7325,13.365 L46.665,13.365 L42.21,1.041 L42.219,1.041 C41.991677,0.479831031 41.4467137,0.112610372 40.84125,0.112610372 C40.2357863,0.112610372 39.690823,0.479831031 39.4635,1.041 L45.3,15.9735 C45.402,16.5915 45.9855,17.067 46.692,17.067 C47.3985,17.067 47.9805,16.593 48.084,15.9735 L53.9085,1.041 Z"
  })), /*#__PURE__*/react_default.a.createElement("g", {
    id: "Shape"
  }, /*#__PURE__*/react_default.a.createElement("path", {
    fill: "url(#linearGradient-1)",
    d: "M1.96144278,0.00379393843 C1.93278766,0.00379393843 1.90413254,0.00379393843 1.87375812,0.00597764254 C1.82628614,0.00725146994 1.80317101,0.00888924802 1.78005588,0.0108909768 C1.73258391,0.015258385 1.70450189,0.0186249288 1.67661091,0.0226283864 C1.63448789,0.0291794987 1.61271,0.0329099932 1.59093211,0.0370954261 C1.53906635,0.0471950576 1.51213054,0.0529272809 1.48548128,0.0594783932 C1.453101,0.0676672836 1.4290307,0.0742183959 1.40524695,0.0810424713 C1.36006738,0.0949635849 1.34096397,0.101150747 1.32186056,0.107519884 C1.2750572,0.123715689 1.25079587,0.132814456 1.22672557,0.142459149 C1.184316,0.16001977 1.16769603,0.167116808 1.15107606,0.174395822 L1.12242094,0.187225084 C1.10331753,0.196323851 1.08421412,0.205422618 1.06511071,0.214521385 L1.03387663,0.230899166 C1.01811632,0.239361019 1.002356,0.247822873 0.986882238,0.256557689 L0.955934712,0.274573248 L0.917250303,0.29832103 L0.888595186,0.316882515 C0.869491775,0.329438814 0.850388363,0.342268075 0.831284952,0.3553703 L0.797758465,0.38075586 L0.76738404,0.40341179 L0.734717207,0.42879735 L0.706062089,0.452545133 C0.686958678,0.468013037 0.66871492,0.483844892 0.651330815,0.500040697 L0.627833619,0.521331812 C0.616562606,0.531704407 0.605482628,0.542258976 0.594593683,0.552995522 L0.57424855,0.573194785 C0.550942388,0.596669604 0.528304845,0.620690349 0.506335922,0.64525702 C0.4888563,0.66518332 0.477967356,0.677739619 0.467364963,0.69056888 L0.451891199,0.709403328 C0.441288806,0.722505553 0.430686412,0.73669963 0.420657121,0.748710002 C0.392766141,0.78592396 0.373089627,0.813220261 0.354177249,0.840698538 L0.343288305,0.856803356 C0.333736599,0.871179408 0.324184893,0.885737435 0.314633188,0.900477438 L0.304317345,0.917401145 L0.296293912,0.931049295 L4.0804887,3.1453528 L4.88168578,4 C4.79792689,3.87330151 4.79075687,3.71385419 4.86283506,3.58079687 C4.93491326,3.44773955 5.07548957,3.36091705 5.23242441,3.35253173 L18.126081,3.35253173 C18.1716426,3.35580729 18.2172042,3.35799099 18.2636255,3.35799099 C19.2247383,3.34437937 19.997179,2.59972948 19.9999923,1.68409514 C20.0028056,0.768460793 19.234954,0.0195165058 18.2739414,0.000545926027 L1.96144278,0.00379393843 Z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: "url(#linearGradient-2)",
    d: "M22.7438388,11.3151867 L16.3508566,22.3257033 C16.274965,22.4547197 16.1378066,22.5359862 15.9875806,22.5409448 C15.8373546,22.5459034 15.6950786,22.4738603 15.6107503,22.3501325 L11.5484958,15.3552589 C11.5151833,15.2756059 11.4759174,15.1985462 11.4310276,15.1247266 L4.67293385,3.45883542 C4.28425,2.75990644 4.28254958,1.91173703 4.66842791,1.21127254 C5.05430624,0.510808047 5.77401391,0.0556169131 6.57558023,0.00506221373 L1.98726011,0.000850295183 C1.70028191,-0.00773775303 1.4151096,0.0488237358 1.15340515,0.166238297 C1.11086057,0.18570672 1.07725788,0.202180002 1.04412582,0.219589265 C0.955459897,0.268541118 0.934752357,0.281176874 0.914233068,0.29428062 L0.814836879,0.361671317 C0.763726906,0.399952977 0.748102127,0.412307938 0.732665597,0.424850095 C0.693227147,0.457796658 0.67910837,0.470151619 0.665177844,0.482693776 C0.629598526,0.514985152 0.611526491,0.532394415 0.594019208,0.550084473 C0.559381142,0.585183794 0.543756362,0.601844272 0.528508083,0.618879143 C0.501964783,0.648362572 0.484739875,0.668860576 0.467797343,0.689639374 C0.436736033,0.727546641 0.420923003,0.748325439 0.405392349,0.769385032 C0.385908437,0.795779721 0.370095407,0.819085671 0.354564752,0.842672415 C0.3274567,0.884230011 0.312490797,0.908378344 0.298089644,0.933369061 C-0.0900333359,1.52939569 -0.081932791,2.25296668 0.269004964,2.83322512 L0.435324156,3.12188194 L14.3089991,27.0174998 C14.4452697,27.2688135 14.6373487,27.4859373 14.870644,27.6523763 C14.9087647,27.679239 14.9399202,27.6999242 14.9717345,27.719767 C15.0597415,27.7702164 15.0811079,27.781729 15.1027567,27.7927736 L15.2100594,27.8435974 C15.2692642,27.8684945 15.2880892,27.8757952 15.3069142,27.8829087 C15.3553887,27.9000371 15.3731784,27.9060274 15.3910621,27.9118305 C15.4370894,27.926151 15.4610913,27.9328901 15.4853756,27.9393484 C15.5335677,27.9512353 15.5558753,27.9563832 15.5782771,27.9612503 C15.6169626,27.9693934 15.6435059,27.9738861 15.6700492,27.978098 C15.7186178,27.9851179 15.7445963,27.9887682 15.7708572,27.9912954 C15.8041776,27.9941033 15.8324151,27.9960689 15.8606527,27.9977536 C15.9100684,27.9977536 15.9383059,28 15.9665435,28 C16.0055113,28 16.0292309,28 16.052668,27.9983152 C16.1029309,27.9969113 16.1286271,27.9949457 16.1551704,27.9921378 C16.1882083,27.9893298 16.2164458,27.9856795 16.2424244,27.9817484 C16.2892987,27.9744477 16.3133007,27.9702358 16.3370202,27.9654623 C16.3740114,27.9581616 16.3997076,27.9519841 16.4254037,27.9458066 C16.4708662,27.9339197 16.4916679,27.928023 16.5123754,27.9216583 C16.5536022,27.9090226 16.5773218,27.9008795 16.6010413,27.8924557 C16.6464097,27.8759824 16.6634463,27.8692433 16.6803889,27.8621299 C16.7264161,27.842755 16.7478766,27.833208 16.7690548,27.8239418 L16.8402134,27.7882809 C16.8972533,27.7573935 16.9127839,27.7486889 16.9277498,27.7397034 C17.014345,27.6850421 17.0367468,27.6697856 17.0587721,27.6540611 C17.0796679,27.6390854 17.1047052,27.6202721 17.133884,27.5976214 C17.1766168,27.563926 17.2177495,27.5284523 17.2572821,27.4912002 C17.3084862,27.4427164 17.3481129,27.401346 17.3857629,27.3581036 C17.4284017,27.3092454 17.4652987,27.2624463 17.500125,27.2137752 C17.5353279,27.1645426 17.5680834,27.1136251 17.5983917,27.061023 L17.9739512,26.4216537 L18.0558401,26.2812564 L25.73589,13.0558322 C26.070421,12.5242035 26.0883782,11.8538976 25.7827856,11.3053117 C25.4771931,10.7567258 24.8962203,10.4163314 24.2655606,10.4163633 C23.6317102,10.4178657 23.048049,10.7619023 22.7438388,11.3151867 Z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: "url(#linearGradient-3)",
    d: "M30.1437101,0 L23.6847716,0 C22.749424,0.0183223345 22,0.84716472 22,1.86331122 C22,2.87945772 22.749424,3.7083001 23.6847716,3.72662244 C23.7299585,3.72662244 23.7743086,3.72419862 23.8186587,3.72056289 L26.7432558,3.72056289 C26.957527,3.75250166 27.1172208,3.95131508 27.117303,4.1862392 C27.1173323,4.23951108 27.1089352,4.29239242 27.0924781,4.34257556 L25.5505446,7.24358449 C25.0967914,8.1471655 25.403314,9.27921269 26.235182,9.77208267 C27.0670501,10.2649526 28.1092519,9.93200556 28.5630051,9.02842455 L31.7528661,3.02795647 C31.782061,2.97321855 31.8089314,2.91686475 31.8334773,2.85889507 L31.8365456,2.85132063 C31.8516079,2.81516532 31.8657404,2.77850505 31.8789432,2.74133982 L31.8811746,2.73558325 C31.8870322,2.71861651 31.8928898,2.7013468 31.8984684,2.68407709 L31.9068363,2.65741507 C31.9142745,2.63337886 31.9212478,2.60903968 31.9277562,2.58439751 C31.9316612,2.57046055 31.9352873,2.55622061 31.9389135,2.54228365 C31.9425396,2.52834669 31.9453289,2.51531866 31.9483971,2.50198765 C31.9514654,2.48865664 31.9559283,2.46714524 31.9595544,2.44957255 C31.9620648,2.43715048 31.9645752,2.4247284 31.9668066,2.41230633 C31.9710836,2.38867409 31.9749886,2.36483986 31.9785217,2.34080365 C31.9800094,2.33090639 31.981404,2.32080714 31.9827057,2.31050591 C31.9860529,2.28505581 31.9891211,2.25930272 31.9916315,2.23354964 C31.9916315,2.22991391 31.9916315,2.22658116 31.9916315,2.22294543 C31.9944208,2.19264769 31.9963734,2.16234995 31.997768,2.13387007 C31.997768,2.12619464 31.997768,2.11841822 31.997768,2.1105408 C31.997768,2.08024306 31.9999995,2.04994532 31.9999995,2.01964757 C32.00077,0.905181759 31.1697259,0.00100355849 30.1437101,0 Z"
  }), /*#__PURE__*/react_default.a.createElement("path", {
    fill: "url(#linearGradient-4)",
    d: "M19.8878401,7.40978464 C19.7383064,7.15620152 19.4618641,6.99998235 19.1626937,7.00000003 L12.8373895,7.00000003 C12.5382281,6.9999242 12.261761,7.15608029 12.1121725,7.40962229 C11.962584,7.66316428 11.9626109,7.97555472 12.112243,8.22907204 L15.2751831,13.5903738 C15.4247323,13.8438523 15.7011,14 16.0001856,14 C16.2992712,14 16.5756388,13.8438523 16.725188,13.5903738 L19.8878401,8.22935388 C20.0373866,7.97586547 20.0373866,7.66355488 19.8878401,7.41006648 L19.8878401,7.40978464 Z"
  })))));
});
// EXTERNAL MODULE: ./.dumi/theme/components/Navbar.less
var Navbar = __webpack_require__("hFYA");

// CONCATENATED MODULE: ./.dumi/theme/components/Navbar.tsx


/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable jsx-a11y/control-has-associated-label */








var Navbar_Navbar = _ref => {
  var onMobileMenuClick = _ref.onMobileMenuClick,
      navPrefix = _ref.navPrefix,
      location = _ref.location;

  var _useContext = Object(react["useContext"])(lib_theme["context"]),
      base = _useContext.base,
      _useContext$config = _useContext.config,
      mode = _useContext$config.mode,
      title = _useContext$config.title,
      logo = _useContext$config.logo,
      navItems = _useContext.nav;

  var isWide = Object(useMedia["a" /* default */])('(min-width: 767.99px)', true);

  var _React$useState = react_default.a.useState(false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      productMenuVisible = _React$useState2[0],
      setProductMenuVisible = _React$useState2[1];

  var productMenuHovering = false;

  var onProductMouseEnter = e => {
    productMenuHovering = true;
    e.persist();
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      if (e.target instanceof Element && e.target.matches(':hover')) {
        setProductMenuVisible(true);
      }
    }, 200);
  };

  var onProductMouseLeave = e => {
    e.persist();
    productMenuHovering = false;
    setTimeout(() => {
      if (productMenuHovering) {
        return;
      }

      setProductMenuVisible(false);
    }, 200);
  };

  var onToggleProductMenuVisible = () => {
    setProductMenuVisible(!productMenuVisible);
  };

  var productItemProps = isWide ? {
    onMouseEnter: onProductMouseEnter,
    onMouseLeave: onProductMouseLeave
  } : {
    onClick: onToggleProductMenuVisible
  };
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-navbar",
    "data-mode": mode
  }, /*#__PURE__*/react_default.a.createElement("button", {
    className: "__dumi-default-navbar-toggle",
    onClick: onMobileMenuClick
  }), /*#__PURE__*/react_default.a.createElement(lib_theme["Link"], {
    className: "__dumi-default-navbar-logo",
    style: {
      background: 'none',
      height: '28px',
      lineHeight: '28px',
      paddingLeft: '0px'
    },
    to: base,
    "data-plaintext": logo === false || undefined
  }, /*#__PURE__*/react_default.a.createElement(Logo, {
    style: {
      height: '28px',
      lineHeight: '28px'
    }
  }), /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      fontSize: '16px',
      width: '1px',
      height: '24px',
      backgroundColor: '#ccc',
      display: ' inline-block',
      margin: '0 20px'
    }
  }), /*#__PURE__*/react_default.a.createElement("span", {
    style: {
      fontSize: '16px',
      color: '#0d1a26',
      display: 'inline-block',
      verticalAlign: 'top'
    }
  }, title)), /*#__PURE__*/react_default.a.createElement("nav", null, navPrefix, navItems.map(nav => {
    var _nav$children;

    var child = Boolean((_nav$children = nav.children) === null || _nav$children === void 0 ? void 0 : _nav$children.length) && /*#__PURE__*/react_default.a.createElement("ul", null, nav.children.map(item => /*#__PURE__*/react_default.a.createElement("li", {
      key: item.path
    }, /*#__PURE__*/react_default.a.createElement(lib_theme["NavLink"], {
      to: item.path
    }, item.title))));
    return /*#__PURE__*/react_default.a.createElement("span", {
      key: nav.title || nav.path
    }, nav.path ? /*#__PURE__*/react_default.a.createElement(lib_theme["NavLink"], {
      to: nav.path,
      key: nav.path
    }, nav.title) : nav.title, child);
  }), /*#__PURE__*/react_default.a.createElement("span", productItemProps, "\\u6240\\u6709\\u4EA7\\u54C1", /*#__PURE__*/react_default.a.createElement("img", {
    src: "https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",
    alt: "antv logo arrow",
    className: "arrow ".concat(productMenuVisible && 'open')
  }), /*#__PURE__*/react_default.a.createElement("div", {
    style: {
      position: 'fixed',
      top: ' 0px',
      left: '0px',
      width: ' 100%',
      right: '0px'
    }
  }, /*#__PURE__*/react_default.a.createElement(components_Products, {
    show: productMenuVisible,
    rootDomain: "ant.vison",
    language: "zh"
  }))), /*#__PURE__*/react_default.a.createElement(components_LocaleSelect, {
    location: location
  })));
};

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("BoRD");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("Uwx9");

// EXTERNAL MODULE: ./.dumi/theme/components/SlugList.less
var SlugList = __webpack_require__("dKzs");

// CONCATENATED MODULE: ./.dumi/theme/components/SlugList.tsx






var SlugsList = _ref => {
  var slugs = _ref.slugs,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["slugs"]);

  return /*#__PURE__*/react_default.a.createElement("ul", Object(esm_extends["a" /* default */])({
    role: "slug-list"
  }, props), slugs.filter(_ref2 => {
    var depth = _ref2.depth;
    return depth > 1 && depth < 4;
  }).map(slug => /*#__PURE__*/react_default.a.createElement("li", {
    key: slug.heading,
    title: slug.value,
    "data-depth": slug.depth
  }, /*#__PURE__*/react_default.a.createElement(lib_theme["AnchorLink"], {
    to: "#".concat(slug.heading)
  }, /*#__PURE__*/react_default.a.createElement("span", null, slug.value)))));
};

/* harmony default export */ var components_SlugList = (SlugsList);
// EXTERNAL MODULE: ./.dumi/theme/components/SideMenu.less
var SideMenu = __webpack_require__("lQE1");

// CONCATENATED MODULE: ./.dumi/theme/components/SideMenu.tsx
/* eslint-disable jsx-a11y/alt-text */






var SideMenu_SideMenu = _ref => {
  var mobileMenuCollapsed = _ref.mobileMenuCollapsed,
      location = _ref.location;

  var _useContext = Object(react["useContext"])(lib_theme["context"]),
      _useContext$config = _useContext.config,
      logo = _useContext$config.logo,
      title = _useContext$config.title,
      description = _useContext$config.description,
      mode = _useContext$config.mode,
      repoUrl = _useContext$config.repository.url,
      menu = _useContext.menu,
      navItems = _useContext.nav,
      base = _useContext.base,
      meta = _useContext.meta;

  var isHiddenMenus = Boolean((meta.hero || meta.features || meta.gapless) && mode === 'site') || meta.sidemenu === false || undefined;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-menu",
    "data-mode": mode,
    "data-hidden": isHiddenMenus,
    "data-mobile-show": !mobileMenuCollapsed || undefined
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-menu-inner"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-menu-header"
  }, /*#__PURE__*/react_default.a.createElement(lib_theme["Link"], {
    to: base,
    className: "__dumi-default-menu-logo",
    style: {
      backgroundImage: logo && "url('".concat(logo, "')")
    }
  }), /*#__PURE__*/react_default.a.createElement("h1", null, title), /*#__PURE__*/react_default.a.createElement("p", null, description), /github\\.com/.test(repoUrl) && mode === 'doc' && /*#__PURE__*/react_default.a.createElement("p", null, /*#__PURE__*/react_default.a.createElement("object", {
    type: "image/svg+xml" // eslint-disable-next-line no-useless-escape
    ,
    data: "https://img.shields.io/github/stars".concat(repoUrl.match(/((\\/[^\\/]+){2})$/)[1], "?style=social")
  }))), navItems.length ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-menu-mobile-area"
  }, /*#__PURE__*/react_default.a.createElement("ul", {
    className: "__dumi-default-menu-nav-list"
  }, navItems.map(nav => {
    var _nav$children;

    var child = Boolean((_nav$children = nav.children) === null || _nav$children === void 0 ? void 0 : _nav$children.length) && /*#__PURE__*/react_default.a.createElement("ul", null, nav.children.map(item => /*#__PURE__*/react_default.a.createElement("li", {
      key: item.path || item.title
    }, /*#__PURE__*/react_default.a.createElement(lib_theme["NavLink"], {
      to: item.path
    }, item.title))));
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: nav.path || nav.title
    }, nav.path ? /*#__PURE__*/react_default.a.createElement(lib_theme["NavLink"], {
      to: nav.path
    }, nav.title) : nav.title, child);
  })), /*#__PURE__*/react_default.a.createElement(components_LocaleSelect, {
    location: location
  })) : /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-menu-doc-locale"
  }, /*#__PURE__*/react_default.a.createElement(components_LocaleSelect, {
    location: location
  })), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "__dumi-default-menu-list"
  }, !isHiddenMenus && menu.map(item => {
    var _meta$slugs;

    // always use meta from routes to reduce menu data size
    var hasSlugs = Boolean((_meta$slugs = meta.slugs) === null || _meta$slugs === void 0 ? void 0 : _meta$slugs.length);
    var hasChildren = item.children && Boolean(item.children.length);
    var show1LevelSlugs = meta.toc === 'menu' && !hasChildren && hasSlugs && item.path === location.pathname;
    return /*#__PURE__*/react_default.a.createElement("li", {
      key: item.path || item.title
    }, /*#__PURE__*/react_default.a.createElement(lib_theme["NavLink"], {
      to: item.path,
      exact: !(item.children && item.children.length)
    }, item.title), Boolean(item.children && item.children.length) && /*#__PURE__*/react_default.a.createElement("ul", null, item.children.map(child => /*#__PURE__*/react_default.a.createElement("li", {
      key: child.path
    }, /*#__PURE__*/react_default.a.createElement(lib_theme["NavLink"], {
      to: child.path,
      exact: true
    }, /*#__PURE__*/react_default.a.createElement("span", null, child.title)), Boolean(meta.toc === 'menu' && typeof window !== 'undefined' && child.path === location.pathname && hasSlugs) && /*#__PURE__*/react_default.a.createElement(components_SlugList, {
      slugs: meta.slugs
    })))), show1LevelSlugs && /*#__PURE__*/react_default.a.createElement(components_SlugList, {
      slugs: meta.slugs
    }));
  }))));
};

/* harmony default export */ var components_SideMenu = (SideMenu_SideMenu);
// EXTERNAL MODULE: ./.dumi/theme/components/SearchBar.less
var SearchBar = __webpack_require__("f0q9");

// CONCATENATED MODULE: ./.dumi/theme/components/SearchBar.tsx





/* harmony default export */ var components_SearchBar = (() => {
  var _useState = Object(react["useState"])(''),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      keywords = _useState2[0],
      setKeywords = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var input = Object(react["useRef"])();
  var result = Object(lib_theme["useSearch"])(keywords);
  Object(react["useEffect"])(() => {
    if (Array.isArray(result)) {
      setItems(result);
    } else if (typeof result === 'function') {
      result(".".concat(input.current.className));
    }
  }, [result]);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-search"
  }, /*#__PURE__*/react_default.a.createElement("input", Object(esm_extends["a" /* default */])({
    className: "__dumi-default-search-input",
    type: "search",
    ref: input
  }, Array.isArray(result) ? {
    value: keywords,
    onChange: ev => setKeywords(ev.target.value)
  } : {})), /*#__PURE__*/react_default.a.createElement("ul", null, items.map(meta => {
    var _meta$parent;

    return /*#__PURE__*/react_default.a.createElement("li", {
      key: meta.path,
      onClick: () => setKeywords('')
    }, /*#__PURE__*/react_default.a.createElement(lib_theme["AnchorLink"], {
      to: meta.path
    }, ((_meta$parent = meta.parent) === null || _meta$parent === void 0 ? void 0 : _meta$parent.title) && /*#__PURE__*/react_default.a.createElement("span", null, meta.parent.title), meta.title));
  })));
});
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/ArrowLeftOutlined.js + 1 modules
var ArrowLeftOutlined = __webpack_require__("P8Qv");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/ArrowRightOutlined.js + 1 modules
var ArrowRightOutlined = __webpack_require__("ZTcJ");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__("daAW");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/react-slick/lib/index.js
var lib = __webpack_require__("qnec");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("bcPb");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__("lnV4");

// EXTERNAL MODULE: ./.dumi/theme/components/Cases/Cases.module.less?modules
var Cases_modulemodules = __webpack_require__("EXNy");
var Cases_modulemodules_default = /*#__PURE__*/__webpack_require__.n(Cases_modulemodules);

// CONCATENATED MODULE: ./.dumi/theme/components/Cases/Cases.tsx


/* eslint-disable @typescript-eslint/no-explicit-any */






 // @ts-ignore



var Cases = _ref => {
  var _ref$cases = _ref.cases,
      cases = _ref$cases === void 0 ? [] : _ref$cases,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      className = _ref.className;
  var slider;

  var clickPrevious = () => {
    slider.slickPrev();
  };

  var clickNext = () => {
    slider.slickNext();
  };

  var getCases = () => {
    var buttons;

    if (cases.length > 1) {
      buttons = /*#__PURE__*/react_default.a.createElement("div", {
        className: Cases_modulemodules_default.a.buttons
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: Cases_modulemodules_default.a.controlButton,
        onClick: clickPrevious
      }, /*#__PURE__*/react_default.a.createElement(ArrowLeftOutlined["a" /* default */], {
        className: Cases_modulemodules_default.a.controlButtonIcon,
        style: {
          fontSize: '16px'
        }
      })), /*#__PURE__*/react_default.a.createElement("div", {
        className: Cases_modulemodules_default.a.controlButton,
        onClick: clickNext,
        style: {
          marginLeft: '-1px'
        }
      }, /*#__PURE__*/react_default.a.createElement(ArrowRightOutlined["a" /* default */], {
        className: Cases_modulemodules_default.a.controlButtonIcon,
        style: {
          fontSize: '16px'
        }
      })));
    }

    var children = cases.map(app => {
      var linkDiv = /*#__PURE__*/react_default.a.createElement("div", {
        className: Cases_modulemodules_default.a.detailWrapper,
        style: {
          display: app.link ? 'block' : 'none'
        }
      }, app.link && app.link.startsWith('http') ? /*#__PURE__*/react_default.a.createElement("a", {
        className: Cases_modulemodules_default.a.detail,
        href: app.link,
        target: "_blank",
        rel: "noopener noreferrer"
      }, "\\u67E5\\u770B\\u8BE6\\u60C5") : /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
        className: Cases_modulemodules_default.a.detail,
        to: app.link ? app.link : ''
      }, "\\u67E5\\u770B\\u8BE6\\u60C5"));
      return /*#__PURE__*/react_default.a.createElement("div", {
        className: Cases_modulemodules_default.a.appWrapper,
        key: app.title
      }, /*#__PURE__*/react_default.a.createElement("img", {
        className: Cases_modulemodules_default.a.appTeaser,
        src: app.image,
        alt: app.title
      }), /*#__PURE__*/react_default.a.createElement("div", {
        className: Cases_modulemodules_default.a.appLeft
      }, /*#__PURE__*/react_default.a.createElement("div", {
        className: Cases_modulemodules_default.a.appContent
      }, /*#__PURE__*/react_default.a.createElement("p", {
        className: Cases_modulemodules_default.a.appTitle
      }, app.title), /*#__PURE__*/react_default.a.createElement("p", {
        className: Cases_modulemodules_default.a.appDescription
      }, app.description), linkDiv), buttons));
    });
    return children;
  };

  var sliderSettings = {
    dots: cases.length > 1,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Cases_modulemodules_default.a.wrapper, className),
    style: style
  }, /*#__PURE__*/react_default.a.createElement(lib_default.a, Object(esm_extends["a" /* default */])({}, sliderSettings, {
    className: Cases_modulemodules_default.a.slider,
    ref: c => {
      slider = c;
    }
  }), getCases()));
};

/* harmony default export */ var Cases_Cases = (Cases);
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("BcGY");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/react-github-button/lib/index.js
var react_github_button_lib = __webpack_require__("w+y6");
var react_github_button_lib_default = /*#__PURE__*/__webpack_require__.n(react_github_button_lib);

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/parse-github-url/index.js
var parse_github_url = __webpack_require__("UKdO");
var parse_github_url_default = /*#__PURE__*/__webpack_require__.n(parse_github_url);

// EXTERNAL MODULE: ./.dumi/theme/components/Banner/Banner.module.less?modules
var Banner_modulemodules = __webpack_require__("qgLe");
var Banner_modulemodules_default = /*#__PURE__*/__webpack_require__.n(Banner_modulemodules);

// EXTERNAL MODULE: ./.dumi/theme/components/Banner/Notification.module.less?modules
var Notification_modulemodules = __webpack_require__("RCD9");
var Notification_modulemodules_default = /*#__PURE__*/__webpack_require__.n(Notification_modulemodules);

// CONCATENATED MODULE: ./.dumi/theme/components/Banner/Notification.tsx

 // @ts-ignore


var numberImages = ['https://gw.alipayobjects.com/zos/antfincdn/IqREAm36K7/1.png', 'https://gw.alipayobjects.com/zos/antfincdn/3fG1Iqjfnz/2.png'];

var Notification = _ref => {
  var _ref$index = _ref.index,
      index = _ref$index === void 0 ? 0 : _ref$index,
      type = _ref.type,
      title = _ref.title,
      date = _ref.date,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? '' : _ref$link;
  var children = /*#__PURE__*/react_default.a.createElement("div", {
    className: Notification_modulemodules_default.a.container
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: Notification_modulemodules_default.a.number,
    src: numberImages[index],
    alt: index.toString()
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: Notification_modulemodules_default.a.content
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: Notification_modulemodules_default.a.description
  }, type, " \\u2027 ", title), /*#__PURE__*/react_default.a.createElement("p", {
    className: Notification_modulemodules_default.a.date
  }, date)));

  if (link.startsWith('http')) {
    return /*#__PURE__*/react_default.a.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: Notification_modulemodules_default.a.notification
    }, children);
  }

  return /*#__PURE__*/react_default.a.createElement(react_router_dom["a" /* Link */], {
    to: link,
    className: Notification_modulemodules_default.a.notification
  }, children);
};

/* harmony default export */ var Banner_Notification = (Notification);
// CONCATENATED MODULE: ./.dumi/theme/components/Banner/index.tsx



/* eslint-disable react/no-array-index-key */

/* eslint-disable @typescript-eslint/no-explicit-any */




 // @ts-ignore



var backLeftBottom = 'https://gw.alipayobjects.com/zos/basement_prod/441d5eaf-e623-47cd-b9b9-2a581d9ce1e3.svg';

var Banner = _ref => {
  var coverImage = _ref.coverImage,
      title = _ref.title,
      description = _ref.description,
      notifications = _ref.notifications,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      className = _ref.className,
      _ref$showGithubStars = _ref.showGithubStars,
      showGithubStars = _ref$showGithubStars === void 0 ? true : _ref$showGithubStars,
      _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === void 0 ? [] : _ref$buttons;

  var _useContext = Object(react["useContext"])(lib_theme["context"]),
      repository = _useContext.config.repository;

  var githubUrl = repository.url;
  var notificationsNode = notifications.slice(0, 2).map((notification, i) => /*#__PURE__*/react_default.a.createElement(Banner_Notification, Object(esm_extends["a" /* default */])({
    index: i,
    key: i
  }, notification)));
  var renderButtons = buttons.map((button, i) => {
    var ButtonLink = 'a';
    var buttonProps = {};

    if (button.link.startsWith('http')) {
      buttonProps.target = '_blank';
      buttonProps.rel = 'noopener noreferrer';
    }

    if (ButtonLink === 'a') {
      buttonProps.href = button.link;
    } else {
      buttonProps.to = button.link;
    }

    var _button$shape = button.shape,
        shape = _button$shape === void 0 ? 'round' : _button$shape;
    return /*#__PURE__*/react_default.a.createElement(ButtonLink, Object(esm_extends["a" /* default */])({}, buttonProps, {
      className: classnames_default()(Banner_modulemodules_default.a.buttonLink, Banner_modulemodules_default.a[button.type || ''], button.type === 'primary' ? 'primary-button' : 'common-button'),
      key: i,
      style: Object(objectSpread2["a" /* default */])({
        borderRadius: shape === 'round' ? '1000px' : '4px'
      }, button.style)
    }), /*#__PURE__*/react_default.a.createElement("span", {
      className: Banner_modulemodules_default.a.button
    }, button.text));
  });

  if (showGithubStars) {
    var githubObj = parse_github_url_default()(githubUrl);

    if (githubObj && githubObj.owner && githubObj.name) {
      renderButtons.push( /*#__PURE__*/react_default.a.createElement("div", {
        key: "github",
        className: Banner_modulemodules_default.a.githubWrapper
      }, /*#__PURE__*/react_default.a.createElement(react_github_button_lib_default.a, {
        type: "stargazers",
        size: "large",
        namespace: githubObj.owner,
        repo: githubObj.name
      })));
    }
  }

  return /*#__PURE__*/react_default.a.createElement("section", {
    className: classnames_default()(Banner_modulemodules_default.a.wrapper, className),
    style: style
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Banner_modulemodules_default.a.content
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: Banner_modulemodules_default.a.text
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Banner_modulemodules_default.a.title, 'banner-title')
  }, title), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Banner_modulemodules_default.a.description, 'banner-description')
  }, description), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Banner_modulemodules_default.a.buttons, 'banner-buttons')
  }, renderButtons)), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Banner_modulemodules_default.a.notifications, 'notifications')
  }, notificationsNode), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Banner_modulemodules_default.a.teaser, 'teaser')
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Banner_modulemodules_default.a.teaserimg, 'teaser-img')
  }, coverImage)), /*#__PURE__*/react_default.a.createElement("img", {
    className: Banner_modulemodules_default.a.backLeftBottom,
    src: backLeftBottom,
    alt: "back"
  })));
};

/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/antd/es/col/index.js
var col = __webpack_require__("VKn7");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/antd/es/row/index.js
var row = __webpack_require__("S7b9");

// EXTERNAL MODULE: ./.dumi/theme/components/Features/FeatureCard.module.less?modules
var FeatureCard_modulemodules = __webpack_require__("UF0E");
var FeatureCard_modulemodules_default = /*#__PURE__*/__webpack_require__.n(FeatureCard_modulemodules);

// CONCATENATED MODULE: ./.dumi/theme/components/Features/FeatureCard.tsx

 // @ts-ignore



var FeatureCard = _ref => {
  var icon = _ref.icon,
      title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: FeatureCard_modulemodules_default.a.card
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: FeatureCard_modulemodules_default.a.content
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: classnames_default()(FeatureCard_modulemodules_default.a.icon, 'feature-logo'),
    src: icon,
    alt: "advantage"
  }), /*#__PURE__*/react_default.a.createElement("p", {
    className: FeatureCard_modulemodules_default.a.title
  }, title), /*#__PURE__*/react_default.a.createElement("p", {
    className: FeatureCard_modulemodules_default.a.description
  }, description)));
};

/* harmony default export */ var Features_FeatureCard = (FeatureCard);
// EXTERNAL MODULE: ./.dumi/theme/components/Features/Features.module.less?modules
var Features_modulemodules = __webpack_require__("6dDX");
var Features_modulemodules_default = /*#__PURE__*/__webpack_require__.n(Features_modulemodules);

// CONCATENATED MODULE: ./.dumi/theme/components/Features/index.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */



 // @ts-ignore



var Features = _ref => {
  var title = _ref.title,
      _ref$features = _ref.features,
      features = _ref$features === void 0 ? [] : _ref$features,
      className = _ref.className,
      style = _ref.style,
      id = _ref.id;

  var getCards = () => {
    var children = features.map(card => /*#__PURE__*/react_default.a.createElement(col["a" /* default */], {
      className: Features_modulemodules_default.a.cardWrapper,
      key: card.title,
      md: 8,
      xs: 24
    }, /*#__PURE__*/react_default.a.createElement(Features_FeatureCard, card)));
    return children;
  }; // for small screen


  var getDots = () => {
    var dots = [];
    var length = features.length;
    var startTop = 45;
    var cardHeight = 350;
    var startLeftPercent = 0.028;
    var rows = length + 1;

    for (var i = 0; i < rows; i += 1) {
      var yOffset = 1;
      var top = "".concat(startTop + cardHeight * i - yOffset, "px");
      var leftColLeft = "".concat(startLeftPercent * 100, "%");
      var rigthColLeft = "".concat((startLeftPercent + 0.892) * 100, "%");
      dots.push( /*#__PURE__*/react_default.a.createElement("div", {
        key: "".concat(i, "-0"),
        className: Features_modulemodules_default.a.dot,
        style: {
          marginLeft: leftColLeft,
          marginTop: top
        }
      }));
      dots.push( /*#__PURE__*/react_default.a.createElement("div", {
        key: "".concat(i, "-1"),
        className: Features_modulemodules_default.a.dot,
        style: {
          marginLeft: rigthColLeft,
          marginTop: top
        }
      }));
    }

    return dots;
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    id: id,
    className: classnames_default()(Features_modulemodules_default.a.wrapper, className),
    style: style
  }, title ? /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Features_modulemodules_default.a.lefttopWithTitle, Features_modulemodules_default.a.lefttop)
  }) : /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Features_modulemodules_default.a.lefttopWithoutTitle, Features_modulemodules_default.a.lefttop)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: title ? Features_modulemodules_default.a.rightbottom : classnames_default()(Features_modulemodules_default.a.rightbottomWithoutTitle, Features_modulemodules_default.a.rightbottom)
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Features_modulemodules_default.a.slicerbar, Features_modulemodules_default.a.slicerbarv, Features_modulemodules_default.a.slicerbarv1)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Features_modulemodules_default.a.slicerbar, Features_modulemodules_default.a.slicerbarv, Features_modulemodules_default.a.slicerbarv2)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Features_modulemodules_default.a.slicerbar, Features_modulemodules_default.a.slicerbarh, Features_modulemodules_default.a.slicerbarh1)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Features_modulemodules_default.a.slicerbar, Features_modulemodules_default.a.slicerbarh, Features_modulemodules_default.a.slicerbarh2)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Features_modulemodules_default.a.slicerbar, Features_modulemodules_default.a.slicerbarh, Features_modulemodules_default.a.slicerbarh3)
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()(Features_modulemodules_default.a.slicerbar, Features_modulemodules_default.a.slicerbarh, Features_modulemodules_default.a.slicerbarh4)
  }), getDots()), /*#__PURE__*/react_default.a.createElement("div", {
    className: Features_modulemodules_default.a.content
  }, /*#__PURE__*/react_default.a.createElement("div", {
    key: "content"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    key: "title",
    className: Features_modulemodules_default.a.title
  }, title), /*#__PURE__*/react_default.a.createElement("div", {
    key: "block",
    className: Features_modulemodules_default.a.cardsContainer
  }, /*#__PURE__*/react_default.a.createElement(row["a" /* default */], {
    key: "cards",
    className: Features_modulemodules_default.a.cards
  }, getCards())))));
};

/* harmony default export */ var components_Features = (Features);
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/antd/es/result/index.js + 5 modules
var es_result = __webpack_require__("Sqjh");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/antd/es/button/index.js
var es_button = __webpack_require__("SCaQ");

// CONCATENATED MODULE: ./.dumi/theme/components/404/index.tsx





var NotFoundPage = () => /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement(es_result["a" /* default */] // eslint-disable-next-line @typescript-eslint/no-explicit-any
, {
  status: '404',
  title: "404",
  subTitle: "Sorry, the page you visited does not exist.",
  extra: /*#__PURE__*/react_default.a.createElement(lib_theme["Link"], {
    to: "/"
  }, /*#__PURE__*/react_default.a.createElement(es_button["a" /* default */], {
    type: "primary"
  }, /*#__PURE__*/react_default.a.createElement(HomeOutlined["a" /* default */], null), "Back Home"))
}));

/* harmony default export */ var _404 = (NotFoundPage);
// EXTERNAL MODULE: ./.dumi/theme/style/layout.less
var layout = __webpack_require__("jlma");

// EXTERNAL MODULE: ./node_modules/rc-footer/es/index.js + 1 modules
var es = __webpack_require__("7HPk");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/WeiboOutlined.js + 1 modules
var WeiboOutlined = __webpack_require__("HrKC");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@ant-design/icons/es/icons/ZhihuOutlined.js + 1 modules
var ZhihuOutlined = __webpack_require__("i1MV");

// EXTERNAL MODULE: ./.dumi/theme/components/Footer/Footer.module.less?modules
var Footer_modulemodules = __webpack_require__("3/4Z");
var Footer_modulemodules_default = /*#__PURE__*/__webpack_require__.n(Footer_modulemodules);

// EXTERNAL MODULE: ./node_modules/rc-footer/assets/index.less
var assets = __webpack_require__("49qf");

// CONCATENATED MODULE: ./.dumi/theme/components/Footer/index.tsx

 // eslint-disable-next-line import/no-named-default




 // @ts-ignore



var OLD_SITE_DOMAIN = 'https://antv-2018.alipay.com';

var Footer = _ref => {
  var columns = _ref.columns,
      bottom = _ref.bottom,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'dark' : _ref$theme,
      language = _ref.language,
      _ref$rootDomain = _ref.rootDomain,
      rootDomain = _ref$rootDomain === void 0 ? '' : _ref$rootDomain,
      footerProps = _ref.footerProps;

  var _useTranslation = Object(useTranslation["a" /* useTranslation */])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var lang = language || i18n.language;
  var products = getProducts({
    t,
    language: lang,
    rootDomain
  });
  var more = {
    icon: /*#__PURE__*/react_default.a.createElement("img", {
      src: "https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",
      alt: "more products"
    }),
    title: t('\u66F4\u591A\u4EA7\u54C1'),
    items: [{
      icon: /*#__PURE__*/react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        alt: "Ant Design"
      }),
      title: 'Ant Design',
      url: 'https://ant.design',
      description: t('\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00'),
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",
        alt: "yuque"
      }),
      title: t('\u8BED\u96C0'),
      url: 'https://yuque.com',
      description: t('\u77E5\u8BC6\u521B\u4F5C\u4E0E\u5206\u4EAB\u5DE5\u5177'),
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/antfincdn/sAEs8aHCnd/yunfengdie.png",
        alt: "yunfengdie"
      }),
      title: t('\u4E91\u51E4\u8776'),
      url: 'https://yunfengdie.com',
      description: t('\u4E2D\u53F0\u5EFA\u7AD9\u5E73\u53F0'),
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png",
        alt: "Egg"
      }),
      title: 'Egg',
      url: 'https://eggjs.org',
      description: t('\u4F01\u4E1A\u7EA7 Node \u5F00\u53D1\u6846\u67B6'),
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",
        alt: "kitchen"
      }),
      title: 'Kitchen',
      description: t('Sketch \u5DE5\u5177\u96C6'),
      url: 'https://kitchen.alipay.com',
      openExternal: true
    }, {
      icon: /*#__PURE__*/react_default.a.createElement("img", {
        src: "https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",
        alt: "xtech"
      }),
      title: t('\u8682\u8681\u4F53\u9A8C\u79D1\u6280'),
      url: 'https://xtech.antfin.com/',
      openExternal: true
    }]
  };
  var defaultColumns = products.filter(product => product.category !== 'ecology').map(product => ({
    title: /*#__PURE__*/react_default.a.createElement("span", null, product.title, /*#__PURE__*/react_default.a.createElement("span", {
      className: Footer_modulemodules_default.a.description
    }, product.slogan)),
    items: product.links
  }));
  return /*#__PURE__*/react_default.a.createElement(es["a" /* default */], Object(esm_extends["a" /* default */])({
    maxColumnsPerRow: 4,
    theme: theme,
    columns: columns || [...defaultColumns, more],
    className: Footer_modulemodules_default.a.footer,
    bottom: bottom || /*#__PURE__*/react_default.a.createElement("div", {
      className: Footer_modulemodules_default.a.bottom
    }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("a", {
      href: "https://weibo.com/antv2017",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/react_default.a.createElement(WeiboOutlined["a" /* default */], null)), /*#__PURE__*/react_default.a.createElement("a", {
      href: "https://zhuanlan.zhihu.com/aiux-antv",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/react_default.a.createElement(ZhihuOutlined["a" /* default */], null)), /*#__PURE__*/react_default.a.createElement("a", {
      href: "https://github.com/antvis",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/react_default.a.createElement(GithubOutlined["a" /* default */], null)), /*#__PURE__*/react_default.a.createElement("a", {
      href: "".concat(rootDomain, "/").concat(lang, "/about")
    }, t('\u5173\u4E8E\u6211\u4EEC')), /*#__PURE__*/react_default.a.createElement("a", {
      href: OLD_SITE_DOMAIN,
      target: "_blank",
      rel: "noopener noreferrer"
    }, t('\u8FD4\u56DE\u65E7\u7248'))), /*#__PURE__*/react_default.a.createElement("div", null, "\\xA9 ", new Date().getFullYear(), " Made with \\u2764 by ", /*#__PURE__*/react_default.a.createElement("a", {
      href: "https://xtech.antfin.com/"
    }, "XTech")))
  }, footerProps));
};

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./.dumi/theme/layout.tsx


/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable react/no-danger */













var isEmpty = obj => {
  return Object.keys(obj).length === 0;
};

var processRedirect = (context, location) => {
  var pathname = location.pathname;
  var meta = context.meta,
      routes = context.routes;
  var isEmptyMeta = isEmpty(meta);
  var matchRoute = {
    meta: {}
  };
  var needRedirectPath = ['/zh', '/zh/', '/zh-CN', '/zh-CN/', '/en', '/en/', '/en-US', '/en-US/'];
  var isInclude = needRedirectPath.some(item => item === pathname);

  if (isEmptyMeta) {
    if (isInclude) {
      // \u5B58\u5728\u91CD\u5B9A\u5411\u9700\u6C42
      var isZh = pathname.slice(1, 3) === 'zh';
      var isEn = pathname.slice(1, 3) === 'en';

      if (isZh) {
        matchRoute = routes.find(item => {
          return item.path === '/';
        });
      }

      if (isEn) {
        matchRoute = routes.find(item => {
          return item.path === '/en-US';
        });
      }
    }
  }

  return {
    meta: isEmptyMeta ? matchRoute.meta : meta,
    isDirect: isInclude
  };
};

var Hero = hero => /*#__PURE__*/react_default.a.createElement("div", {
  className: "__dumi-default-layout-hero"
}, hero.image && /*#__PURE__*/react_default.a.createElement("img", {
  src: hero.image,
  alt: "banner"
}), /*#__PURE__*/react_default.a.createElement("h1", null, hero.title), /*#__PURE__*/react_default.a.createElement("div", {
  dangerouslySetInnerHTML: {
    __html: hero.desc
  }
}), hero.actions && hero.actions.map(action => /*#__PURE__*/react_default.a.createElement(lib_theme["Link"], {
  to: action.link,
  key: action.text
}, /*#__PURE__*/react_default.a.createElement("button", {
  type: "button"
}, action.text))));

var BannerPanel = banner => {
  var image = banner.image,
      title = banner.title,
      desc = banner.desc,
      actions = banner.actions,
      notifications = banner.notifications;
  var description = /*#__PURE__*/react_default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: desc
    }
  });
  var coverImage = /*#__PURE__*/react_default.a.createElement("img", {
    alt: "graphin",
    style: {
      width: '100%',
      marginTop: '20%'
    },
    src: image
  });
  return /*#__PURE__*/react_default.a.createElement(components_Banner, {
    coverImage: coverImage,
    title: title // @ts-ignore
    ,
    description: description,
    notifications: notifications,
    buttons: actions,
    className: "banner"
  });
};

var layout_Features = features => /*#__PURE__*/react_default.a.createElement("div", {
  className: "__dumi-default-layout-features"
}, features.map(feat => /*#__PURE__*/react_default.a.createElement("dl", {
  key: feat.title,
  style: {
    backgroundImage: feat.icon ? "url(".concat(feat.icon, ")") : undefined
  }
}, feat.link ? /*#__PURE__*/react_default.a.createElement(lib_theme["Link"], {
  to: feat.link
}, /*#__PURE__*/react_default.a.createElement("dt", null, feat.title)) : /*#__PURE__*/react_default.a.createElement("dt", null, feat.title), /*#__PURE__*/react_default.a.createElement("dd", {
  dangerouslySetInnerHTML: {
    __html: feat.desc
  }
}))));

var Layout = _ref => {
  var _meta$slugs, _match;

  var children = _ref.children,
      location = _ref.location;
  var Context = Object(react["useContext"])(lib_theme["context"]);
  var _Context$config = Context.config,
      mode = _Context$config.mode,
      repository = _Context$config.repository,
      locale = Context.locale;

  var _processRedirect = processRedirect(Context, location),
      meta = _processRedirect.meta,
      isDirect = _processRedirect.isDirect;

  console.log('Context', Context, 'calculate meta', meta);
  var repoUrl = repository.url,
      branch = repository.branch,
      platform = repository.platform;

  var _useState = Object(react["useState"])(true),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      menuCollapsed = _useState2[0],
      setMenuCollapsed = _useState2[1];

  var isSiteMode = mode === 'site';
  var showHero = isSiteMode && meta.hero;
  var showBanner = isSiteMode && meta.banner;
  var showCases = isSiteMode && meta.cases;
  var showFeatures = isSiteMode && meta.features;
  var showIdeas = isSiteMode && meta.ideas;
  var showSideMenu = meta.sidemenu !== false && !showHero && !showBanner && !showFeatures && !meta.gapless;
  var showSlugs = !showHero && !showBanner && !showFeatures && Boolean((_meta$slugs = meta.slugs) === null || _meta$slugs === void 0 ? void 0 : _meta$slugs.length) && (meta.toc === 'content' || meta.toc === undefined) && !meta.gapless;
  var isCN = /^zh|cn$/i.test(locale); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var updatedTime = new Date(meta.updatedTime).toLocaleString([], {
    hour12: false
  });
  var repoPlatform = {
    github: 'GitHub',
    gitlab: 'GitLab'
  }[((_match = (repoUrl || '').match(/(github|gitlab)/)) === null || _match === void 0 ? void 0 : _match[1]) || 'nothing'] || platform; // \u7B49dumi\u6700\u65B0\u7248\u53D1\u5E03\u540E\u89E3\u51B3\u8DEF\u7531\u5339\u914D\u95EE\u9898

  if (isEmpty(meta) && !isDirect) {
    return /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("div", {
      style: {
        marginBottom: '60px'
      },
      className: "__dumi-default-layout home",
      "data-route": location.pathname,
      "data-show-sidemenu": false,
      "data-show-slugs": false,
      "data-site-mode": "site",
      "data-gapless": String(!!meta.gapless),
      onClick: () => {
        if (menuCollapsed) return;
        setMenuCollapsed(true);
      }
    }, /*#__PURE__*/react_default.a.createElement("div", {
      style: {
        height: '60px'
      }
    }), /*#__PURE__*/react_default.a.createElement(components_Navbar, {
      location: location,
      navPrefix: /*#__PURE__*/react_default.a.createElement(components_SearchBar, null),
      onMobileMenuClick: ev => {
        setMenuCollapsed(val => !val);
        ev.stopPropagation();
      }
    }), /*#__PURE__*/react_default.a.createElement(_404, null), /*#__PURE__*/react_default.a.createElement(components_Footer, {
      githubUrl: repoUrl,
      rootDomain: "https://antv.vision"
    })));
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-layout ".concat(showBanner ? 'home' : ''),
    "data-route": location.pathname,
    "data-show-sidemenu": String(showSideMenu),
    "data-show-slugs": String(showSlugs),
    "data-site-mode": isSiteMode,
    "data-gapless": String(!!meta.gapless),
    onClick: () => {
      if (menuCollapsed) return;
      setMenuCollapsed(true);
    }
  }, /*#__PURE__*/react_default.a.createElement(components_Navbar, {
    location: location,
    navPrefix: /*#__PURE__*/react_default.a.createElement(components_SearchBar, null),
    onMobileMenuClick: ev => {
      setMenuCollapsed(val => !val);
      ev.stopPropagation();
    }
  }), showSideMenu && /*#__PURE__*/react_default.a.createElement(components_SideMenu, {
    mobileMenuCollapsed: menuCollapsed,
    location: location
  }), showSlugs && /*#__PURE__*/react_default.a.createElement(components_SlugList, {
    slugs: meta.slugs,
    className: "__dumi-default-layout-toc"
  }), showBanner && BannerPanel(meta.banner), showHero && Hero(meta.hero), showFeatures && layout_Features(meta.features), showIdeas && /*#__PURE__*/react_default.a.createElement(components_Features, {
    features: meta.ideas,
    style: {
      width: '100%'
    }
  }), showCases && /*#__PURE__*/react_default.a.createElement(Cases_Cases, {
    cases: meta.cases,
    className: "graph-cases"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-layout-content"
  }, children, showSideMenu && /*#__PURE__*/react_default.a.createElement("div", {
    className: "__dumi-default-layout-footer-meta"
  }, repoPlatform && /*#__PURE__*/react_default.a.createElement(lib_theme["Link"], {
    to: "".concat(repoUrl, "/edit/").concat(branch, "/").concat(meta.filePath)
  }, isCN ? "\\u5728 ".concat(repoPlatform, " \\u4E0A\\u7F16\\u8F91\\u6B64\\u9875") : "Edit this doc on ".concat(repoPlatform)), /*#__PURE__*/react_default.a.createElement("span", {
    "data-updated-text": isCN ? '\u6700\u540E\u66F4\u65B0\u65F6\u95F4\uFF1A' : 'Last update: '
  }, updatedTime)), !showSideMenu && /*#__PURE__*/react_default.a.createElement(components_Footer, {
    githubUrl: repoUrl,
    rootDomain: "https://antv.vision"
  })));
};

/* harmony default export */ var theme_layout = __webpack_exports__["default"] = (Layout);

//# sourceURL=webpack:///./.dumi/theme/layout.tsx_+_16_modules?`)},q3YX:function(module){eval(`module.exports = JSON.parse("{\\"menus\\":{\\"en-US\\":{\\"*\\":[{\\"path\\":\\"/en-US\\",\\"title\\":\\"XFlow - \u56FE\u7F16\u8F91\u5E94\u7528\\",\\"meta\\":{}}],\\"/en-US/docs\\":[{\\"title\\":\\"XFlow\\",\\"path\\":\\"/en-US/docs/tutorial/intro\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/en-US/docs/tutorial/intro/about\\",\\"title\\":\\"\u7B80\u4ECB\\",\\"meta\\":{\\"order\\":-1}},{\\"path\\":\\"/en-US/docs/tutorial/intro/getting-started\\",\\"title\\":\\"\u5FEB\u901F\u4E0A\u624B\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"\u89E3\u51B3\u65B9\u6848\\",\\"path\\":\\"/en-US/docs/tutorial/solutions\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/en-US/docs/tutorial/solutions/dag\\",\\"title\\":\\"DAG \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/en-US/docs/tutorial/solutions/er\\",\\"title\\":\\"ER\u5EFA\u6A21 \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/en-US/docs/tutorial/solutions/flow\\",\\"title\\":\\"\u6D41\u7A0B\u56FE \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":4}}]},{\\"title\\":\\"\u753B\u5E03\u7EC4\u4EF6\\",\\"path\\":\\"/en-US/docs/tutorial-core-components\\",\\"meta\\":{\\"order\\":4},\\"children\\":[{\\"path\\":\\"/en-US/docs/tutorial-core-components/xflow-component\\",\\"title\\":\\"XFlow \u5DE5\u4F5C\u53F0\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/en-US/docs/tutorial-core-components/xflow-canvas-component\\",\\"title\\":\\"XFlowCanvas \u753B\u5E03\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"\u4EA4\u4E92\u7EC4\u4EF6\\",\\"path\\":\\"/en-US/docs/tutorial-ext-components\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/en-US/docs/tutorial-ext-components/extension-components\\",\\"title\\":\\"\u7EC4\u4EF6\u603B\u89C8\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/canvas-toolbar\\",\\"title\\":\\"Toolbar \u5DE5\u5177\u680F\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/canvas-scale-toolbar\\",\\"title\\":\\"ScaleToolbar \u7F29\u653E\u5DE5\u5177\u680F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/context-menu\\",\\"title\\":\\"ContextMenu \u53F3\u952E\u83DC\u5355\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/canvas-snapline\\",\\"title\\":\\"Snapline \u5BF9\u9F50\u7EBF\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/canvas-mini-map\\",\\"title\\":\\"MiniMap \u5C0F\u5730\u56FE\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/canvas-keybinding\\",\\"title\\":\\"KeyBindings \u5FEB\u6377\u952E\\",\\"meta\\":{\\"order\\":7}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/canvas-node-panel\\",\\"title\\":\\"NodeDndPanel \u8282\u70B9\u62D6\u62FD\u9762\u677F\\",\\"meta\\":{\\"order\\":8}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/canvas-config-form\\",\\"title\\":\\"JsonForm \u914D\u7F6E\u5F0F\u8868\u5355\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/en-US/docs/tutorial-ext-components/workspace-panel\\",\\"title\\":\\"WorkspacePanel \u81EA\u5B9A\u4E49\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":10}}]},{\\"title\\":\\"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\\",\\"path\\":\\"/en-US/docs/tutorial-advanced\\",\\"meta\\":{\\"order\\":6},\\"children\\":[{\\"path\\":\\"/en-US/docs/tutorial-advanced/advanced\\",\\"title\\":\\"\u5982\u4F55\u6269\u5C55\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/en-US/docs/tutorial-advanced/command\\",\\"title\\":\\"Command\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/en-US/docs/tutorial-advanced/model\\",\\"title\\":\\"Model\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/en-US/docs/tutorial-advanced/hook\\",\\"title\\":\\"Hook\\",\\"meta\\":{\\"order\\":5}}]},{\\"title\\":\\"FAQ\\",\\"path\\":\\"/en-US/docs/faq\\",\\"meta\\":{\\"order\\":7},\\"children\\":[]},{\\"title\\":\\"\u66F4\u65B0\u65E5\u5FD7\\",\\"path\\":\\"/en-US/docs/changelog\\",\\"meta\\":{\\"order\\":8},\\"children\\":[]}],\\"/en-US/api\\":[{\\"title\\":\\"Interface \u63A5\u53E3\u5B9A\u4E49\\",\\"path\\":\\"/en-US/api/interface\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/en-US/api/interface\\",\\"title\\":\\"NsGraph \u56FE\u6570\u636E\u7ED3\u6784\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/en-US/api/interface/graph\\",\\"title\\":\\"X6Graph \u753B\u5E03\u914D\u7F6E\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/en-US/api/interface/application\\",\\"title\\":\\"Application \u5E94\u7528\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/en-US/api/interface/command\\",\\"title\\":\\"CommandService \u547D\u4EE4\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/en-US/api/interface/model\\",\\"title\\":\\"ModelService \u6570\u636E\u6A21\u578B\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/en-US/api/interface/hook\\",\\"title\\":\\"HookService \u94A9\u5B50\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/en-US/api/interface/config\\",\\"title\\":\\"Conifg \u7EC4\u4EF6\u914D\u7F6E\\",\\"meta\\":{\\"order\\":9}}]},{\\"title\\":\\"Command \u547D\u4EE4\\",\\"path\\":\\"/en-US/api/commands\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/en-US/api/commands\\",\\"title\\":\\"\u547D\u4EE4\u6982\u89C8\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/en-US/api/commands/node-add\\",\\"title\\":\\"AddNode \u6DFB\u52A0\u8282\u70B9\\",\\"meta\\":{\\"order\\":11}},{\\"path\\":\\"/en-US/api/commands/node-delete\\",\\"title\\":\\"DelNode \u5220\u9664\u8282\u70B9\\",\\"meta\\":{\\"order\\":12}},{\\"path\\":\\"/en-US/api/commands/node-update\\",\\"title\\":\\"UpdateNode \u66F4\u65B0\u8282\u70B9\\",\\"meta\\":{\\"order\\":13}},{\\"path\\":\\"/en-US/api/commands/node-move\\",\\"title\\":\\"MoveNode \u79FB\u52A8\u8282\u70B9\\",\\"meta\\":{\\"order\\":14}},{\\"path\\":\\"/en-US/api/commands/node-highlight\\",\\"title\\":\\"HighlightNode \u9AD8\u4EAE\u8282\u70B9\\",\\"meta\\":{\\"order\\":15}},{\\"path\\":\\"/en-US/api/commands/node-select\\",\\"title\\":\\"SelectNode \u9009\u4E2D\u8282\u70B9\\",\\"meta\\":{\\"order\\":16}},{\\"path\\":\\"/en-US/api/commands/node-center\\",\\"title\\":\\"CenterNode \u5C45\u4E2D\u8282\u70B9\\",\\"meta\\":{\\"order\\":17}},{\\"path\\":\\"/en-US/api/commands/node-front\\",\\"title\\":\\"FrontNode \u524D\u7F6E\u8282\u70B9\\",\\"meta\\":{\\"order\\":18}},{\\"path\\":\\"/en-US/api/commands/node-back\\",\\"title\\":\\"BackNode \u540E\u7F6E\u8282\u70B9\\",\\"meta\\":{\\"order\\":19}},{\\"path\\":\\"/en-US/api/commands/edge-add\\",\\"title\\":\\"AddEdge \u6DFB\u52A0\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":21}},{\\"path\\":\\"/en-US/api/commands/edge-delete\\",\\"title\\":\\"DelEdge \u5220\u9664\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":22}},{\\"path\\":\\"/en-US/api/commands/edge-update\\",\\"title\\":\\"UpdateEdge \u66F4\u65B0\u8FB9\\",\\"meta\\":{\\"order\\":23}},{\\"path\\":\\"/en-US/api/commands/edge-highlight\\",\\"title\\":\\"HighlightEdge \u9AD8\u4EAE\u8FB9\\",\\"meta\\":{\\"order\\":24}},{\\"path\\":\\"/en-US/api/commands/edge-front\\",\\"title\\":\\"FrontEdge \u524D\u7F6E\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":25}},{\\"path\\":\\"/en-US/api/commands/edge-back\\",\\"title\\":\\"BackEdge \u540E\u7F6E\u8FB9\\",\\"meta\\":{\\"order\\":26}},{\\"path\\":\\"/en-US/api/commands/graph-load-data\\",\\"title\\":\\"GraphLoadData \u753B\u5E03\u6570\u636E\u83B7\u53D6\\",\\"meta\\":{\\"order\\":32}},{\\"path\\":\\"/en-US/api/commands/graph-meta\\",\\"title\\":\\"GraphMeta \u5168\u5C40\u5143\u4FE1\u606F\\",\\"meta\\":{\\"order\\":33}},{\\"path\\":\\"/en-US/api/commands/graph-layout\\",\\"title\\":\\"GraphLayout \u753B\u5E03\u5E03\u5C40\\",\\"meta\\":{\\"order\\":34}},{\\"path\\":\\"/en-US/api/commands/graph-render\\",\\"title\\":\\"GraphRender \u753B\u5E03\u6E32\u67D3\\",\\"meta\\":{\\"order\\":35}},{\\"path\\":\\"/en-US/api/commands/graph-zoom\\",\\"title\\":\\"GraphZoom \u753B\u5E03\u7F29\u653E\\",\\"meta\\":{\\"order\\":39}},{\\"path\\":\\"/en-US/api/commands/group-add\\",\\"title\\":\\"AddGroup \u6DFB\u52A0\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":51}},{\\"path\\":\\"/en-US/api/commands/group-del\\",\\"title\\":\\"DelGroup \u89E3\u6563\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":52}},{\\"path\\":\\"/en-US/api/commands/group-collapse\\",\\"title\\":\\"CollapseGroup \u6298\u53E0\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":53}}]},{\\"title\\":\\"MODELS \u5168\u5C40\u72B6\u6001\\",\\"path\\":\\"/en-US/api/models\\",\\"meta\\":{\\"order\\":3},\\"children\\":[{\\"path\\":\\"/en-US/api/models\\",\\"title\\":\\"\u5168\u5C40\u72B6\u6001\\",\\"meta\\":{}}]},{\\"title\\":\\"Graph \u56FE\u63D0\u4F9B\u8005\\",\\"path\\":\\"/en-US/api/graph-provider\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/en-US/api/graph-provider/graph\\",\\"title\\":\\"GraphProvider\\",\\"meta\\":{}}]},{\\"title\\":\\"Hooks \u94A9\u5B50\\",\\"path\\":\\"/en-US/api/hooks\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/en-US/api/hooks\\",\\"title\\":\\"Hooks\\",\\"meta\\":{}}]}]},\\"zh-CN\\":{\\"*\\":[{\\"path\\":\\"/zh-CN\\",\\"title\\":\\"XFlow - \u56FE\u7F16\u8F91\u5E94\u7528\\",\\"meta\\":{}}],\\"/zh-CN/docs\\":[{\\"title\\":\\"XFlow\\",\\"path\\":\\"/zh-CN/docs/tutorial/intro\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/zh-CN/docs/tutorial/intro/about\\",\\"title\\":\\"\u7B80\u4ECB\\",\\"meta\\":{\\"order\\":-1}},{\\"path\\":\\"/zh-CN/docs/tutorial/intro/getting-started\\",\\"title\\":\\"\u5FEB\u901F\u4E0A\u624B\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"\u89E3\u51B3\u65B9\u6848\\",\\"path\\":\\"/zh-CN/docs/tutorial/solutions\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/zh-CN/docs/tutorial/solutions/dag\\",\\"title\\":\\"DAG \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/zh-CN/docs/tutorial/solutions/er\\",\\"title\\":\\"ER\u5EFA\u6A21 \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/docs/tutorial/solutions/flow\\",\\"title\\":\\"\u6D41\u7A0B\u56FE \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":4}}]},{\\"title\\":\\"\u753B\u5E03\u7EC4\u4EF6\\",\\"path\\":\\"/zh-CN/docs/tutorial-core-components\\",\\"meta\\":{\\"order\\":4},\\"children\\":[{\\"path\\":\\"/zh-CN/docs/tutorial-core-components/xflow-component\\",\\"title\\":\\"XFlow \u5DE5\u4F5C\u53F0\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/docs/tutorial-core-components/xflow-canvas-component\\",\\"title\\":\\"XFlowCanvas \u753B\u5E03\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"\u4EA4\u4E92\u7EC4\u4EF6\\",\\"path\\":\\"/zh-CN/docs/tutorial-ext-components\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/extension-components\\",\\"title\\":\\"\u7EC4\u4EF6\u603B\u89C8\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/canvas-toolbar\\",\\"title\\":\\"Toolbar \u5DE5\u5177\u680F\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/canvas-scale-toolbar\\",\\"title\\":\\"ScaleToolbar \u7F29\u653E\u5DE5\u5177\u680F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/context-menu\\",\\"title\\":\\"ContextMenu \u53F3\u952E\u83DC\u5355\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/canvas-snapline\\",\\"title\\":\\"Snapline \u5BF9\u9F50\u7EBF\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/canvas-mini-map\\",\\"title\\":\\"MiniMap \u5C0F\u5730\u56FE\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/canvas-keybinding\\",\\"title\\":\\"KeyBindings \u5FEB\u6377\u952E\\",\\"meta\\":{\\"order\\":7}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/canvas-node-panel\\",\\"title\\":\\"NodeDndPanel \u8282\u70B9\u62D6\u62FD\u9762\u677F\\",\\"meta\\":{\\"order\\":8}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/canvas-config-form\\",\\"title\\":\\"JsonForm \u914D\u7F6E\u5F0F\u8868\u5355\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/zh-CN/docs/tutorial-ext-components/workspace-panel\\",\\"title\\":\\"WorkspacePanel \u81EA\u5B9A\u4E49\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":10}}]},{\\"title\\":\\"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\\",\\"path\\":\\"/zh-CN/docs/tutorial-advanced\\",\\"meta\\":{\\"order\\":6},\\"children\\":[{\\"path\\":\\"/zh-CN/docs/tutorial-advanced/advanced\\",\\"title\\":\\"\u5982\u4F55\u6269\u5C55\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/zh-CN/docs/tutorial-advanced/command\\",\\"title\\":\\"Command\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/docs/tutorial-advanced/model\\",\\"title\\":\\"Model\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/docs/tutorial-advanced/hook\\",\\"title\\":\\"Hook\\",\\"meta\\":{\\"order\\":5}}]},{\\"title\\":\\"FAQ\\",\\"path\\":\\"/zh-CN/docs/faq\\",\\"meta\\":{\\"order\\":7},\\"children\\":[]},{\\"title\\":\\"\u66F4\u65B0\u65E5\u5FD7\\",\\"path\\":\\"/zh-CN/docs/changelog\\",\\"meta\\":{\\"order\\":8},\\"children\\":[]}],\\"/zh-CN/api\\":[{\\"title\\":\\"Interface \u63A5\u53E3\u5B9A\u4E49\\",\\"path\\":\\"/zh-CN/api/interface\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/zh-CN/api/interface\\",\\"title\\":\\"NsGraph \u56FE\u6570\u636E\u7ED3\u6784\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/zh-CN/api/interface/graph\\",\\"title\\":\\"X6Graph \u753B\u5E03\u914D\u7F6E\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/zh-CN/api/interface/application\\",\\"title\\":\\"Application \u5E94\u7528\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/zh-CN/api/interface/command\\",\\"title\\":\\"CommandService \u547D\u4EE4\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/zh-CN/api/interface/model\\",\\"title\\":\\"ModelService \u6570\u636E\u6A21\u578B\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/zh-CN/api/interface/hook\\",\\"title\\":\\"HookService \u94A9\u5B50\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/zh-CN/api/interface/config\\",\\"title\\":\\"Conifg \u7EC4\u4EF6\u914D\u7F6E\\",\\"meta\\":{\\"order\\":9}}]},{\\"title\\":\\"Command \u547D\u4EE4\\",\\"path\\":\\"/zh-CN/api/commands\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/zh-CN/api/commands\\",\\"title\\":\\"\u547D\u4EE4\u6982\u89C8\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/zh-CN/api/commands/node-add\\",\\"title\\":\\"AddNode \u6DFB\u52A0\u8282\u70B9\\",\\"meta\\":{\\"order\\":11}},{\\"path\\":\\"/zh-CN/api/commands/node-delete\\",\\"title\\":\\"DelNode \u5220\u9664\u8282\u70B9\\",\\"meta\\":{\\"order\\":12}},{\\"path\\":\\"/zh-CN/api/commands/node-update\\",\\"title\\":\\"UpdateNode \u66F4\u65B0\u8282\u70B9\\",\\"meta\\":{\\"order\\":13}},{\\"path\\":\\"/zh-CN/api/commands/node-move\\",\\"title\\":\\"MoveNode \u79FB\u52A8\u8282\u70B9\\",\\"meta\\":{\\"order\\":14}},{\\"path\\":\\"/zh-CN/api/commands/node-highlight\\",\\"title\\":\\"HighlightNode \u9AD8\u4EAE\u8282\u70B9\\",\\"meta\\":{\\"order\\":15}},{\\"path\\":\\"/zh-CN/api/commands/node-select\\",\\"title\\":\\"SelectNode \u9009\u4E2D\u8282\u70B9\\",\\"meta\\":{\\"order\\":16}},{\\"path\\":\\"/zh-CN/api/commands/node-center\\",\\"title\\":\\"CenterNode \u5C45\u4E2D\u8282\u70B9\\",\\"meta\\":{\\"order\\":17}},{\\"path\\":\\"/zh-CN/api/commands/node-front\\",\\"title\\":\\"FrontNode \u524D\u7F6E\u8282\u70B9\\",\\"meta\\":{\\"order\\":18}},{\\"path\\":\\"/zh-CN/api/commands/node-back\\",\\"title\\":\\"BackNode \u540E\u7F6E\u8282\u70B9\\",\\"meta\\":{\\"order\\":19}},{\\"path\\":\\"/zh-CN/api/commands/edge-add\\",\\"title\\":\\"AddEdge \u6DFB\u52A0\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":21}},{\\"path\\":\\"/zh-CN/api/commands/edge-delete\\",\\"title\\":\\"DelEdge \u5220\u9664\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":22}},{\\"path\\":\\"/zh-CN/api/commands/edge-update\\",\\"title\\":\\"UpdateEdge \u66F4\u65B0\u8FB9\\",\\"meta\\":{\\"order\\":23}},{\\"path\\":\\"/zh-CN/api/commands/edge-highlight\\",\\"title\\":\\"HighlightEdge \u9AD8\u4EAE\u8FB9\\",\\"meta\\":{\\"order\\":24}},{\\"path\\":\\"/zh-CN/api/commands/edge-front\\",\\"title\\":\\"FrontEdge \u524D\u7F6E\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":25}},{\\"path\\":\\"/zh-CN/api/commands/edge-back\\",\\"title\\":\\"BackEdge \u540E\u7F6E\u8FB9\\",\\"meta\\":{\\"order\\":26}},{\\"path\\":\\"/zh-CN/api/commands/graph-load-data\\",\\"title\\":\\"GraphLoadData \u753B\u5E03\u6570\u636E\u83B7\u53D6\\",\\"meta\\":{\\"order\\":32}},{\\"path\\":\\"/zh-CN/api/commands/graph-meta\\",\\"title\\":\\"GraphMeta \u5168\u5C40\u5143\u4FE1\u606F\\",\\"meta\\":{\\"order\\":33}},{\\"path\\":\\"/zh-CN/api/commands/graph-layout\\",\\"title\\":\\"GraphLayout \u753B\u5E03\u5E03\u5C40\\",\\"meta\\":{\\"order\\":34}},{\\"path\\":\\"/zh-CN/api/commands/graph-render\\",\\"title\\":\\"GraphRender \u753B\u5E03\u6E32\u67D3\\",\\"meta\\":{\\"order\\":35}},{\\"path\\":\\"/zh-CN/api/commands/graph-zoom\\",\\"title\\":\\"GraphZoom \u753B\u5E03\u7F29\u653E\\",\\"meta\\":{\\"order\\":39}},{\\"path\\":\\"/zh-CN/api/commands/group-add\\",\\"title\\":\\"AddGroup \u6DFB\u52A0\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":51}},{\\"path\\":\\"/zh-CN/api/commands/group-del\\",\\"title\\":\\"DelGroup \u89E3\u6563\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":52}},{\\"path\\":\\"/zh-CN/api/commands/group-collapse\\",\\"title\\":\\"CollapseGroup \u6298\u53E0\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":53}}]},{\\"title\\":\\"MODELS \u5168\u5C40\u72B6\u6001\\",\\"path\\":\\"/zh-CN/api/models\\",\\"meta\\":{\\"order\\":3},\\"children\\":[{\\"path\\":\\"/zh-CN/api/models\\",\\"title\\":\\"\u5168\u5C40\u72B6\u6001\\",\\"meta\\":{}}]},{\\"title\\":\\"Graph \u56FE\u63D0\u4F9B\u8005\\",\\"path\\":\\"/zh-CN/api/graph-provider\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/zh-CN/api/graph-provider/graph\\",\\"title\\":\\"GraphProvider\\",\\"meta\\":{}}]},{\\"title\\":\\"Hooks \u94A9\u5B50\\",\\"path\\":\\"/zh-CN/api/hooks\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/zh-CN/api/hooks\\",\\"title\\":\\"Hooks\\",\\"meta\\":{}}]}]},\\"zh\\":{\\"*\\":[{\\"path\\":\\"/\\",\\"title\\":\\"XFlow - \u56FE\u7F16\u8F91\u5E94\u7528\\",\\"meta\\":{}}],\\"/api\\":[{\\"title\\":\\"Interface \u63A5\u53E3\u5B9A\u4E49\\",\\"path\\":\\"/api/interface\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/api/interface\\",\\"title\\":\\"NsGraph \u56FE\u6570\u636E\u7ED3\u6784\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/api/interface/graph\\",\\"title\\":\\"X6Graph \u753B\u5E03\u914D\u7F6E\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/api/interface/application\\",\\"title\\":\\"Application \u5E94\u7528\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/api/interface/command\\",\\"title\\":\\"CommandService \u547D\u4EE4\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/api/interface/model\\",\\"title\\":\\"ModelService \u6570\u636E\u6A21\u578B\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/api/interface/hook\\",\\"title\\":\\"HookService \u94A9\u5B50\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/api/interface/config\\",\\"title\\":\\"Conifg \u7EC4\u4EF6\u914D\u7F6E\\",\\"meta\\":{\\"order\\":9}}]},{\\"title\\":\\"Command \u547D\u4EE4\\",\\"path\\":\\"/api/commands\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/api/commands\\",\\"title\\":\\"\u547D\u4EE4\u6982\u89C8\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/api/commands/node-add\\",\\"title\\":\\"AddNode \u6DFB\u52A0\u8282\u70B9\\",\\"meta\\":{\\"order\\":11}},{\\"path\\":\\"/api/commands/node-delete\\",\\"title\\":\\"DelNode \u5220\u9664\u8282\u70B9\\",\\"meta\\":{\\"order\\":12}},{\\"path\\":\\"/api/commands/node-update\\",\\"title\\":\\"UpdateNode \u66F4\u65B0\u8282\u70B9\\",\\"meta\\":{\\"order\\":13}},{\\"path\\":\\"/api/commands/node-move\\",\\"title\\":\\"MoveNode \u79FB\u52A8\u8282\u70B9\\",\\"meta\\":{\\"order\\":14}},{\\"path\\":\\"/api/commands/node-highlight\\",\\"title\\":\\"HighlightNode \u9AD8\u4EAE\u8282\u70B9\\",\\"meta\\":{\\"order\\":15}},{\\"path\\":\\"/api/commands/node-select\\",\\"title\\":\\"SelectNode \u9009\u4E2D\u8282\u70B9\\",\\"meta\\":{\\"order\\":16}},{\\"path\\":\\"/api/commands/node-center\\",\\"title\\":\\"CenterNode \u5C45\u4E2D\u8282\u70B9\\",\\"meta\\":{\\"order\\":17}},{\\"path\\":\\"/api/commands/node-front\\",\\"title\\":\\"FrontNode \u524D\u7F6E\u8282\u70B9\\",\\"meta\\":{\\"order\\":18}},{\\"path\\":\\"/api/commands/node-back\\",\\"title\\":\\"BackNode \u540E\u7F6E\u8282\u70B9\\",\\"meta\\":{\\"order\\":19}},{\\"path\\":\\"/api/commands/edge-add\\",\\"title\\":\\"AddEdge \u6DFB\u52A0\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":21}},{\\"path\\":\\"/api/commands/edge-delete\\",\\"title\\":\\"DelEdge \u5220\u9664\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":22}},{\\"path\\":\\"/api/commands/edge-update\\",\\"title\\":\\"UpdateEdge \u66F4\u65B0\u8FB9\\",\\"meta\\":{\\"order\\":23}},{\\"path\\":\\"/api/commands/edge-highlight\\",\\"title\\":\\"HighlightEdge \u9AD8\u4EAE\u8FB9\\",\\"meta\\":{\\"order\\":24}},{\\"path\\":\\"/api/commands/edge-front\\",\\"title\\":\\"FrontEdge \u524D\u7F6E\u8FDE\u7EBF\\",\\"meta\\":{\\"order\\":25}},{\\"path\\":\\"/api/commands/edge-back\\",\\"title\\":\\"BackEdge \u540E\u7F6E\u8FB9\\",\\"meta\\":{\\"order\\":26}},{\\"path\\":\\"/api/commands/graph-load-data\\",\\"title\\":\\"GraphLoadData \u753B\u5E03\u6570\u636E\u83B7\u53D6\\",\\"meta\\":{\\"order\\":32}},{\\"path\\":\\"/api/commands/graph-meta\\",\\"title\\":\\"GraphMeta \u5168\u5C40\u5143\u4FE1\u606F\\",\\"meta\\":{\\"order\\":33}},{\\"path\\":\\"/api/commands/graph-layout\\",\\"title\\":\\"GraphLayout \u753B\u5E03\u5E03\u5C40\\",\\"meta\\":{\\"order\\":34}},{\\"path\\":\\"/api/commands/graph-render\\",\\"title\\":\\"GraphRender \u753B\u5E03\u6E32\u67D3\\",\\"meta\\":{\\"order\\":35}},{\\"path\\":\\"/api/commands/graph-zoom\\",\\"title\\":\\"GraphZoom \u753B\u5E03\u7F29\u653E\\",\\"meta\\":{\\"order\\":39}},{\\"path\\":\\"/api/commands/group-add\\",\\"title\\":\\"AddGroup \u6DFB\u52A0\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":51}},{\\"path\\":\\"/api/commands/group-del\\",\\"title\\":\\"DelGroup \u89E3\u6563\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":52}},{\\"path\\":\\"/api/commands/group-collapse\\",\\"title\\":\\"CollapseGroup \u6298\u53E0\u7FA4\u7EC4\\",\\"meta\\":{\\"order\\":53}}]},{\\"title\\":\\"MODELS \u5168\u5C40\u72B6\u6001\\",\\"path\\":\\"/api/models\\",\\"meta\\":{\\"order\\":3},\\"children\\":[{\\"path\\":\\"/api/models\\",\\"title\\":\\"\u5168\u5C40\u72B6\u6001\\",\\"meta\\":{}}]},{\\"title\\":\\"Graph \u56FE\u63D0\u4F9B\u8005\\",\\"path\\":\\"/api/graph-provider\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/api/graph-provider/graph\\",\\"title\\":\\"GraphProvider\\",\\"meta\\":{}}]},{\\"title\\":\\"Hooks \u94A9\u5B50\\",\\"path\\":\\"/api/hooks\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/api/hooks\\",\\"title\\":\\"Hooks\\",\\"meta\\":{}}]}],\\"/docs\\":[{\\"title\\":\\"XFlow\\",\\"path\\":\\"/docs/tutorial/intro\\",\\"meta\\":{\\"order\\":1},\\"children\\":[{\\"path\\":\\"/docs/tutorial/intro/about\\",\\"title\\":\\"\u7B80\u4ECB\\",\\"meta\\":{\\"order\\":-1}},{\\"path\\":\\"/docs/tutorial/intro/getting-started\\",\\"title\\":\\"\u5FEB\u901F\u4E0A\u624B\\",\\"meta\\":{\\"order\\":1}}]},{\\"title\\":\\"\u89E3\u51B3\u65B9\u6848\\",\\"path\\":\\"/docs/tutorial/solutions\\",\\"meta\\":{\\"order\\":2},\\"children\\":[{\\"path\\":\\"/docs/tutorial/solutions/dag\\",\\"title\\":\\"DAG \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/docs/tutorial/solutions/er\\",\\"title\\":\\"ER\u5EFA\u6A21 \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/docs/tutorial/solutions/flow\\",\\"title\\":\\"\u6D41\u7A0B\u56FE \u89E3\u51B3\u65B9\u6848\\",\\"meta\\":{\\"order\\":4}}]},{\\"title\\":\\"\u753B\u5E03\u7EC4\u4EF6\\",\\"path\\":\\"/docs/tutorial-core-components\\",\\"meta\\":{\\"order\\":4},\\"children\\":[{\\"path\\":\\"/docs/tutorial-core-components/xflow-component\\",\\"title\\":\\"XFlow \u5DE5\u4F5C\u53F0\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/docs/tutorial-core-components/xflow-canvas-component\\",\\"title\\":\\"XFlowCanvas \u753B\u5E03\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":3}}]},{\\"title\\":\\"\u4EA4\u4E92\u7EC4\u4EF6\\",\\"path\\":\\"/docs/tutorial-ext-components\\",\\"meta\\":{\\"order\\":5},\\"children\\":[{\\"path\\":\\"/docs/tutorial-ext-components/extension-components\\",\\"title\\":\\"\u7EC4\u4EF6\u603B\u89C8\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/docs/tutorial-ext-components/canvas-toolbar\\",\\"title\\":\\"Toolbar \u5DE5\u5177\u680F\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/docs/tutorial-ext-components/canvas-scale-toolbar\\",\\"title\\":\\"ScaleToolbar \u7F29\u653E\u5DE5\u5177\u680F\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/docs/tutorial-ext-components/context-menu\\",\\"title\\":\\"ContextMenu \u53F3\u952E\u83DC\u5355\\",\\"meta\\":{\\"order\\":4}},{\\"path\\":\\"/docs/tutorial-ext-components/canvas-snapline\\",\\"title\\":\\"Snapline \u5BF9\u9F50\u7EBF\\",\\"meta\\":{\\"order\\":5}},{\\"path\\":\\"/docs/tutorial-ext-components/canvas-mini-map\\",\\"title\\":\\"MiniMap \u5C0F\u5730\u56FE\\",\\"meta\\":{\\"order\\":6}},{\\"path\\":\\"/docs/tutorial-ext-components/canvas-keybinding\\",\\"title\\":\\"KeyBindings \u5FEB\u6377\u952E\\",\\"meta\\":{\\"order\\":7}},{\\"path\\":\\"/docs/tutorial-ext-components/canvas-node-panel\\",\\"title\\":\\"NodeDndPanel \u8282\u70B9\u62D6\u62FD\u9762\u677F\\",\\"meta\\":{\\"order\\":8}},{\\"path\\":\\"/docs/tutorial-ext-components/canvas-config-form\\",\\"title\\":\\"JsonForm \u914D\u7F6E\u5F0F\u8868\u5355\\",\\"meta\\":{\\"order\\":9}},{\\"path\\":\\"/docs/tutorial-ext-components/workspace-panel\\",\\"title\\":\\"WorkspacePanel \u81EA\u5B9A\u4E49\u7EC4\u4EF6\\",\\"meta\\":{\\"order\\":10}}]},{\\"title\\":\\"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\\",\\"path\\":\\"/docs/tutorial-advanced\\",\\"meta\\":{\\"order\\":6},\\"children\\":[{\\"path\\":\\"/docs/tutorial-advanced/advanced\\",\\"title\\":\\"\u5982\u4F55\u6269\u5C55\\",\\"meta\\":{\\"order\\":1}},{\\"path\\":\\"/docs/tutorial-advanced/command\\",\\"title\\":\\"Command\\",\\"meta\\":{\\"order\\":2}},{\\"path\\":\\"/docs/tutorial-advanced/model\\",\\"title\\":\\"Model\\",\\"meta\\":{\\"order\\":3}},{\\"path\\":\\"/docs/tutorial-advanced/hook\\",\\"title\\":\\"Hook\\",\\"meta\\":{\\"order\\":5}}]},{\\"title\\":\\"FAQ\\",\\"path\\":\\"/docs/faq\\",\\"meta\\":{\\"order\\":7},\\"children\\":[]},{\\"title\\":\\"\u66F4\u65B0\u65E5\u5FD7\\",\\"path\\":\\"/docs/changelog\\",\\"meta\\":{\\"order\\":8},\\"children\\":[]}]}},\\"locales\\":[{\\"name\\":\\"zh\\",\\"label\\":\\"CN\\"},{\\"name\\":\\"zh-CN\\",\\"label\\":\\"\u4E2D\u6587\\"},{\\"name\\":\\"en-US\\",\\"label\\":\\"English\\"}],\\"navs\\":{\\"zh\\":[{\\"title\\":\\"\u6559\u7A0B\\",\\"path\\":\\"/docs\\",\\"order\\":1},{\\"title\\":\\"API\\",\\"path\\":\\"/api\\",\\"order\\":2},{\\"title\\":\\"GitHub\\",\\"path\\":\\"https://github.com/antvis/XFlow\\"}],\\"en-US\\":[{\\"title\\":\\"\u6559\u7A0B\\",\\"path\\":\\"/en-US/docs\\",\\"order\\":1},{\\"title\\":\\"API\\",\\"path\\":\\"/en-US/api\\",\\"order\\":2},{\\"title\\":\\"GitHub\\",\\"path\\":\\"https://github.com/antvis/XFlow\\"}],\\"zh-CN\\":[{\\"title\\":\\"\u6559\u7A0B\\",\\"path\\":\\"/zh-CN/docs\\",\\"order\\":1},{\\"title\\":\\"API\\",\\"path\\":\\"/zh-CN/api\\",\\"order\\":2},{\\"title\\":\\"GitHub\\",\\"path\\":\\"https://github.com/antvis/XFlow\\"}]},\\"title\\":\\"XFlow\\",\\"logo\\":\\"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png\\",\\"mode\\":\\"site\\",\\"repository\\":{\\"url\\":\\"\\",\\"branch\\":\\"master\\"},\\"theme\\":{},\\"exportStatic\\":{}}");

//# sourceURL=webpack:///./src/.umi-production/dumi/config.json?`)},x2v5:function(module){eval(`module.exports = JSON.parse("{}");

//# sourceURL=webpack:///./src/.umi-production/dumi/apis.json?`)}}]);
