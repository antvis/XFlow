(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9kvl":function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`
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




//# sourceURL=webpack:///./src/.umi-production/core/umiExports.ts_+_1_modules?`)},BlwA:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCodeSandbox; });
/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");
/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KOBo");
/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RY7m");
/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+kuV");
/* harmony import */ var less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("O2W8");
/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_5__);






var CSB_API_ENDPOINT = 'https://codesandbox.io/api/v1/sandboxes/define'; // ref: https://github.com/codesandbox/codesandbox-importers/blob/master/packages/import-utils/src/api/define.ts

function serialize(data) {
  return lz_string__WEBPACK_IMPORTED_MODULE_5___default.a.compressToBase64(JSON.stringify(data)).replace(/\\+/g, '-') // Convert '+' to '-'
  .replace(/\\//g, '_') // Convert '/' to '_'
  .replace(/=+$/, ''); // Remove ending '='
}

function getTextContent(raw) {
  var elm = document.createElement('span');
  elm.innerHTML = raw;
  var text = elm.textContent;
  elm.remove();
  return text;
}

function cbsHook(_x, _x2) {
  return _cbsHook.apply(this, arguments);
}

function _cbsHook() {
  _cbsHook = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(data, props) {
    var _props$className, className, cssList, mainCss;

    return _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _props$className = props.className, className = _props$className === void 0 ? [] : _props$className;
            _context3.prev = 1;
            _context3.next = 4;
            return Promise.all(Object.entries(data).filter(_ref2 => {
              var _ref3 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref2, 2),
                  filename = _ref3[0],
                  value = _ref3[1];

              return filename.includes('.less');
            }).map( /*#__PURE__*/function () {
              var _ref5 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref4) {
                var _ref6, filename, content, options, _yield$less$render, css, cssFilename;

                return _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _ref6 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref4, 2), filename = _ref6[0], content = _ref6[1];
                        options = {
                          javascriptEnabled: true
                        };
                        _context2.next = 4;
                        return less__WEBPACK_IMPORTED_MODULE_4___default.a.render(content, options);

                      case 4:
                        _yield$less$render = _context2.sent;
                        css = _yield$less$render.css;
                        cssFilename = filename.replace('.less', '.css');
                        data[cssFilename] = css;
                        data[filename] = "//codesandbox does not support less very well, less is compiled to ".concat(cssFilename, " ");
                        return _context2.abrupt("return", css);

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }()));

          case 4:
            cssList = _context3.sent;
            mainCss = cssList.reduce((acc, output) => acc + '\\n' + output, '');
            data['index.html'] = "\\n    <style type=\\"text/css\\">\\n    #root .xflow-app-workspace{\\n      height:100% !important\\n    }\\n    \\n    ".concat(mainCss, "\\n    </style>\\n    <div style=\\"height:100vh\\" id=\\"root\\" class=\\"").concat(className.join(' '), "\\"></div>\\n    ");
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            data['index.html'] = "\\n    <style type=\\"text/css\\">\\n     less compile error\\n    </style>\\n    <div style=\\"height:100%\\" id=\\"root\\" class=\\"".concat(className.join(' '), "\\"></div>\\n    ");

          case 12:
            return _context3.abrupt("return", data);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _cbsHook.apply(this, arguments);
}

function addXFlowDeps(deps) {
  deps['@ant-design/icons-svg'] = '4.2.1';
}
/**
 * get serialized data that use to submit to codesandbox.io
 * @param opts  previewer props
 */


function getCSBData(_x3) {
  return _getCSBData.apply(this, arguments);
}
/**
 * use CodeSandbox.io
 * @param opts  previewer opts
 * @note  return a open function for open demo on codesandbox.io
 */


function _getCSBData() {
  _getCSBData = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(opts) {
    var isTSX, ext, files, deps, CSSDeps, appFileName, entryFileName, cbsRawData, cbsData;
    return _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            isTSX = Boolean(opts.sources._.tsx);
            ext = isTSX ? '.tsx' : '.jsx';
            files = {};
            deps = {};
            CSSDeps = Object.values(opts.dependencies).filter(dep => dep.css);
            appFileName = "App".concat(ext);
            entryFileName = "index".concat(ext); // generate dependencies

            Object.entries(opts.dependencies).forEach(_ref7 => {
              var _ref8 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref7, 2),
                  dep = _ref8[0],
                  version = _ref8[1].version;

              deps[dep] = version;
            }); // add extra codesandbox dependencies

            addXFlowDeps(deps); // add react-dom dependency

            if (!deps['react-dom']) {
              deps['react-dom'] = deps.react || 'latest';
            } // generate dependencies


            Object.entries(opts.dependencies).forEach(_ref9 => {
              var _ref10 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref9, 2),
                  dep = _ref10[0],
                  version = _ref10[1].version;

              deps[dep] = version;
            }); // add react-dom dependency

            if (!deps['react-dom']) {
              deps['react-dom'] = deps.react || 'latest';
            }

            cbsRawData = {
              'sandbox.config.json': {
                template: 'parcel' //isTSX ? 'create-react-app-typescript' : 'create-react-app',

              },
              'package.json': {
                name: opts.title,
                description: getTextContent(opts.description) || 'An auto-generated demo by dumi',
                main: entryFileName,
                dependencies: deps,
                // add TypeScript dependency if required, must in devDeps to avoid csb compile error
                devDependencies: isTSX ? {
                  typescript: '^4'
                } : {}
              },
              // app.tsx
              [entryFileName]: "\\n    /**\\n    * This is an auto-generated demo by dumi\\n    * if you think it is not working as expected,\\n    * please report the issue at\\n    * https://github.com/umijs/dumi/issues\\n    **/\\n    \\nimport React from 'react';\\nimport ReactDOM from 'react-dom';\\n".concat(CSSDeps.map(_ref11 => {
                var css = _ref11.css;
                return "import '".concat(css, "';");
              }).join('\\n'), "\\nimport App from './App';\\n    \\nReactDOM.render(\\n <App />,\\ndocument.getElementById('root'),\\n);"),
              // index.html
              'index.html': "\\n      <div style=\\"height:100%\\" id=\\"root\\"></div>\\n    "
            }; // append other imported local files

            Object.entries(opts.sources).forEach(_ref12 => {
              var _ref13 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref12, 2),
                  filename = _ref13[0],
                  _ref13$ = _ref13[1],
                  tsx = _ref13$.tsx,
                  jsx = _ref13$.jsx,
                  content = _ref13$.content;

              var key = filename === '_' ? appFileName : filename;
              cbsRawData[key] = tsx || jsx || content;
            });

            if (!cbsHook) {
              _context4.next = 20;
              break;
            }

            _context4.next = 17;
            return cbsHook(cbsRawData, opts);

          case 17:
            _context4.t0 = _context4.sent;
            _context4.next = 21;
            break;

          case 20:
            _context4.t0 = cbsRawData;

          case 21:
            cbsData = _context4.t0;
            // append other imported local files
            Object.entries(cbsData).forEach(_ref14 => {
              var _ref15 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref14, 2),
                  filename = _ref15[0],
                  value = _ref15[1];

              // handle primary content
              files[filename] = {
                content: typeof value === 'string' ? value : JSON.stringify(value, null, 2)
              };
            });
            return _context4.abrupt("return", serialize({
              files
            }));

          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getCSBData.apply(this, arguments);
}

var useCodeSandbox = function useCodeSandbox(opts) {
  var api = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CSB_API_ENDPOINT;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      handler = _useState2[0],
      setHandler = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    var form = document.createElement('form');
    var input = document.createElement('input');
    form.method = 'POST';
    form.target = '_blank';
    form.style.display = 'none';
    form.action = api;
    form.appendChild(input);
    form.setAttribute('data-demo', opts.title || '');

    var compile = /*#__PURE__*/function () {
      var _ref = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var data;
        return _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getCSBData(opts);

              case 2:
                data = _context.sent;
                input.name = 'parameters';
                input.value = data;
                document.body.appendChild(form);
                setHandler(() => () => form.submit());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function compile() {
        return _ref.apply(this, arguments);
      };
    }();

    if (opts) {
      compile();
    }

    return () => form.remove();
  }, [opts]);
  return handler;
};

//# sourceURL=webpack:///./.dumi/theme/builtins/useCodeSandbox.ts?`)},Rsk4:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("KOBo");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("RY7m");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/runtime/dist/index.esm.js
var index_esm = __webpack_require__("Fj4f");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/edges/edge-highlight/demos/index.tsx?dumi-raw-code
/* harmony default export */ var demosdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, IAppLoad, IApplication, NsGraph, createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands, XFlowEdgeCommands, NsGraphCmd, NsEdgeCmd } from '@antv/xflow'\\nimport { Graph as X6Graph } from '@antv/x6'\\nimport './index.less'\\n\\n\\nexport const useGraphConfig = createGraphConfig(config => {\\n  config.setX6Config({ grid: true })\\n  config.setNodeRender('NODE1', props => <div className=\\"react-node\\">{props.data?.info}</div>)\\n})\\n\\nlet appRef: IApplication;\\n\\nconst Demo: React.FC<{}> = () => {\\n  const onLoad: IAppLoad = async (app: IApplication) => {\\n    appRef = app\\n    const nodes: NsGraph.INodeConfig[] = [\\n      {\\n        id: 'root1',\\n        x: 200,\\n        y: 50,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B91',\\n      },\\n      {\\n        id: 'down1',\\n        x: 550,\\n        y: 50,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B92',\\n      },\\n      {\\n        id: 'down2',\\n        x: 550,\\n        y: 150,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B92',\\n      },\\n    ]\\n    const edges: NsGraph.IEdgeConfig[] = [\\n      { \\n        id: 'root1-down1', \\n        source: 'root1',\\n        target: 'down1',\\n        label: '1:N',\\n      },\\n      { \\n        id: 'root1-down2', \\n        source: 'root1',\\n        target: 'down2',\\n        label: 'N:N',\\n      },\\n    ]\\n    const graphData = { nodes, edges }\\n\\n    app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData,\\n    } as NsGraphCmd.GraphRender.IArgs)\\n\\n    const graphInstance: X6Graph = await app.getGraphInstance()\\n    graphInstance.on('edge:click', ({ edge }) => {\\n      const edgeData = edge?.getData();\\n      app.executeCommand(XFlowEdgeCommands.HIGHLIGHT_EDGE.id, {\\n        edgeId: edgeData.id,\\n        strokeColor: '#873bf4',\\n        strokeWidth: 4,\\n      } as NsEdgeCmd.HighlightEdge.IArgs)\\n    })\\n  }\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-edge-highlight-demo\\">\\n      <div className=\\"btn\\">\\n        {'\u8BF7\u7528\u9F20\u6807\u70B9\u51FB\u8FDE\u7EBF, \u4F1A\u89E6\u53D1\u8FDE\u7EBF\u9AD8\u4EAE'}\\n      </div>\\n      <XFlowCanvas config={useGraphConfig()} />\\n    </XFlow>\\n  )\\n}\\nexport default Demo");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/edges/edge-highlight/demos/index.less?dumi-raw-code
var edge_highlight_demosdumi_raw_code = __webpack_require__("5oT3");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/edges/edge-update/demos/index.tsx?dumi-raw-code
/* harmony default export */ var edge_update_demosdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, IAppLoad, IApplication, NsGraph, createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands, XFlowEdgeCommands, NsGraphCmd, NsEdgeCmd } from '@antv/xflow'\\nimport './index.less'\\n\\n\\nexport const useGraphConfig = createGraphConfig(config => {\\n  config.setX6Config({ grid: true })\\n  config.setNodeRender('NODE1', props => <div className=\\"react-node\\">{props.data?.info}</div>)\\n  config.setEdgeRender('EDGE1', props => <div className=\\"react-edge\\">{props.data.info}</div>)\\n})\\n\\nlet appRef: IApplication;\\n\\nconst Demo: React.FC<{}> = () => {\\n  const onLoad: IAppLoad = async app => {\\n    appRef = app\\n\\n    const nodes: NsGraph.INodeConfig[] = [\\n      {\\n        id: 'root11',\\n        x: 200,\\n        y: 50,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B91',\\n      },\\n      {\\n        id: 'down11',\\n        x: 550,\\n        y: 50,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B92',\\n      },\\n      {\\n        id: 'root12',\\n        x: 200,\\n        y: 120,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B91',\\n      },\\n      {\\n        id: 'down12',\\n        x: 550,\\n        y: 120,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B92',\\n      },\\n    ]\\n    const edges: NsGraph.IEdgeConfig[] = [\\n      { \\n        id: 'root11-down11', \\n        source: 'root11',\\n        target: 'down11',\\n        label: 'text'\\n      },\\n      { \\n        id: 'root12-down12',\\n        source: 'root12',\\n        target: 'down12',\\n        edgeContentWidth: 60,\\n        edgeContentHeigt: 30, \\n        info: 'text',\\n        renderKey: 'EDGE1',\\n      },\\n    ]\\n    const graphData = { nodes, edges }\\n\\n    /** \u6267\u884C\u753B\u5E03\u6E32\u67D3\u547D\u4EE4 */\\n    app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData,\\n    } as NsGraphCmd.GraphRender.IArgs)\\n  }\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-edge-update-demo\\">\\n      <div className=\\"btn\\">\\n        <div\\n          className=\\"div\\"\\n          onClick={() => {\\n            appRef.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {\\n              edgeConfig: { id: 'root11-down11', label: 'new-text' },\\n            } as NsEdgeCmd.UpdateEdge.IArgs)\\n          }}\\n        >\\n          {'\u66F4\u65B0\u8FDE\u7EBF\u4E0Alabel\u7684\u5185\u5BB9'}\\n        </div>\\n        <div \\n          className=\\"div\\"\\n          onClick={() => {\\n            appRef.executeCommand(XFlowEdgeCommands.UPDATE_EDGE.id, {\\n              edgeConfig: { \\n                id: 'root12-down12',\\n                source: 'root12',\\n                target: 'down12',\\n                edgeContentWidth: 60,\\n                edgeContentHeigt: 30, \\n                info: 'new-text',\\n                renderKey: 'EDGE1',\\n              },\\n            } as NsEdgeCmd.UpdateEdge.IArgs)\\n          }}\\n        >\\n          {'\u66F4\u65B0\u8FDE\u7EBF\u4E0Areact\u8282\u70B9\u7684\u5185\u5BB9'}\\n        </div>\\n      </div>\\n      <XFlowCanvas config={useGraphConfig()} />\\n    </XFlow>\\n  )\\n}\\nexport default Demo");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/edges/edge-update/demos/index.less?dumi-raw-code
var edges_edge_update_demosdumi_raw_code = __webpack_require__("fU7R");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/graph/graph-layout/demos/index.tsx?dumi-raw-code
/* harmony default export */ var graph_layout_demosdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, IAppLoad, NsGraph, createGraphConfig, NsGraphCmd, XFlowGraphCommands } from '@antv/xflow'\\nimport './index.less'\\n\\nexport const useGraphConfig = createGraphConfig(config => {\\n  config.setX6Config({ grid: true })\\n  config.setNodeRender('NODE1', props => <div className=\\"react-node\\">{props.data?.text}</div>)\\n  config.setNodeTypeParser(node => node?.renderKey)\\n})\\n\\nconst Demo: React.FC<{}> = () => {\\n  const onLoad: IAppLoad = async app => {\\n    const nodes: NsGraph.INodeConfig[] = [\\n      { id: 'root1', width: 150, height: 40, renderKey: 'NODE1', text: '\u8282\u70B91' },\\n      { id: 'down1', width: 150, height: 40, renderKey: 'NODE1', text: '\u8282\u70B92' },\\n      { id: 'down2', width: 150, height: 40, renderKey: 'NODE1', text: '\u8282\u70B93' },\\n      { id: 'down3', width: 150, height: 40, renderKey: 'NODE1', text: '\u8282\u70B94' },\\n    ]\\n    const edges: NsGraph.IEdgeConfig[] = [\\n      { id: 'root1-down1', source: 'root1', target: 'down1', label: '1:1' },\\n      { id: 'root1-down2', source: 'root1', target: 'down2', label: '1:N' },\\n      { id: 'root1-down3', source: 'root1', target: 'down3', label: 'N:N' },\\n    ]\\n    const graphData = { nodes, edges };\\n\\n    await app.executeCommand(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      graphData,\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        rankdir: 'LR',\\n        nodesep: 10,\\n        ranksep: 80,\\n      },\\n    } as NsGraphCmd.GraphLayout.IArgs)\\n\\n    await app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData,\\n    } as NsGraphCmd.GraphRender.IArgs)\\n\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-graph-layout-demo\\">\\n      <XFlowCanvas config={useGraphConfig()} />\\n    </XFlow>\\n  )\\n}\\nexport default Demo");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/graph/graph-layout/demos/index.less?dumi-raw-code
var graph_graph_layout_demosdumi_raw_code = __webpack_require__("LUaq");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/graph/graph-render/demos/index.tsx?dumi-raw-code
/* harmony default export */ var graph_render_demosdumi_raw_code = ("import React from 'react'\\nimport type { NsGraph, NsGraphCmd, IAppLoad } from '@antv/xflow'\\nimport { XFlow, XFlowCanvas, createGraphConfig, XFlowGraphCommands } from '@antv/xflow'\\nimport './index.less'\\n\\n/** graphConfig hook */\\nexport const useGraphConfig = createGraphConfig(config => {\\n  config.setX6Config({ grid: true })\\n  config.setNodeRender('NODE1', props => <div className=\\"react-node\\">{props.data?.info}</div>)\\n  config.setNodeTypeParser(node => node?.renderKey)\\n})\\n\\nconst Demo: React.FC<{}> = () => {\\n  const onLoad: IAppLoad = async app => {\\n    const nodes: NsGraph.INodeConfig[] = [\\n      {\\n        id: 'root1',\\n        x: 200,\\n        y: 50,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B91',\\n      },\\n      {\\n        id: 'down1',\\n        x: 550,\\n        y: 50,\\n        width: 120,\\n        height: 40,\\n        renderKey: 'NODE1',\\n        info: 'React\u8282\u70B92',\\n      },\\n    ]\\n    const edges: NsGraph.IEdgeConfig[] = [\\n      { id: 'root1-down1', source: 'root1', target: 'down1', label: 'text' },\\n    ]\\n    const graphData = { nodes, edges }\\n\\n    /** \u6267\u884C\u753B\u5E03\u6E32\u67D3\u547D\u4EE4 */\\n    app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData,\\n    } as NsGraphCmd.GraphRender.IArgs)\\n  }\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-render-graph-demo\\">\\n      <XFlowCanvas config={useGraphConfig()} />\\n    </XFlow>\\n  )\\n}\\nexport default Demo");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/graph/graph-render/demos/index.less?dumi-raw-code
var graph_graph_render_demosdumi_raw_code = __webpack_require__("/4fb");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/graph/graph-zoom/demos/index.tsx?dumi-raw-code
/* harmony default export */ var graph_zoom_demosdumi_raw_code = ("import React, { useState } from 'react'\\n/** \u56FE\u6838\u5FC3\u7EC4\u4EF6 & \u7C7B\u578B\u5B9A\u4E49 */\\nimport type { IAppLoad, NsGraph, IApplication } from '@antv/xflow'\\nimport { XFlow, XFlowCanvas, createGraphConfig, XFlowGraphCommands, NsGraphCmd } from '@antv/xflow'\\nimport './index.less'\\n\\nexport const useGraphConfig = createGraphConfig(config => {\\n  config.setX6Config({ grid: true })\\n  config.setNodeRender('NODE1', props => <div className=\\"react-node\\">{props.data?.info?.text}</div>)\\n  config.setNodeTypeParser(node => node?.renderKey)\\n})\\n\\nlet appRef: IApplication = undefined\\nconst Demo: React.FC<{}> = () => {\\n  const [graphData, setGraphData] = useState<NsGraph.IGraphData>(undefined)\\n\\n  const onLoad: IAppLoad = async app => {\\n    appRef = app\\n\\n    const nodes: NsGraph.INodeConfig[] = [\\n      { id: 'root1', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'root1' } },\\n      { id: 'down1', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'down1' } },\\n      { id: 'down2', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'down2' } },\\n      { id: 'down3', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'down3' } },\\n    ]\\n    const edges: NsGraph.IEdgeConfig[] = [\\n      { id: 'root1-down1', source: 'root1', target: 'down1', label: '1:1' },\\n      { id: 'root1-down2', source: 'root1', target: 'down2', label: '1:N' },\\n      { id: 'root1-down3', source: 'root1', target: 'down3', label: 'N:N' },\\n    ]\\n    const graphData = { nodes, edges }\\n    setGraphData(graphData)\\n  }\\n\\n  const zoomGraph = (key: string) => {\\n    if (key === '\u653E\u5927') {\\n      appRef.executeCommand(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n        factor: 0.1,\\n        zoomOptions: {\\n          absolute: false,\\n          minScale: 0.1,\\n          maxScale: 3.0,\\n        }\\n      } as NsGraphCmd.GraphZoom.IArgs)\\n    }\\n    if (key === '\u7F29\u5C0F') {\\n      appRef.executeCommand(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n        factor: -0.1,\\n        zoomOptions: {\\n          absolute: false,\\n          minScale: 0.1,\\n          maxScale: 3.0,\\n        }\\n      } as NsGraphCmd.GraphZoom.IArgs)\\n    }\\n    if (key === '\u753B\u5E031:1(real)') {\\n      appRef.executeCommand(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n        factor: 'real',\\n      } as NsGraphCmd.GraphZoom.IArgs)\\n    }\\n    if (key === '\u9002\u5E94\u753B\u5E03(fit)') {\\n      appRef.executeCommand(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n        factor: 'fit',\\n      } as NsGraphCmd.GraphZoom.IArgs)\\n    }\\n  }\\n\\n  return (\\n    <XFlow\\n      className=\\"xflow-graph-zoom-demo\\"\\n      graphData={graphData}\\n      graphLayout={{\\n        layoutType: 'dagre',\\n        layoutOptions: {\\n          type: 'dagre',\\n          rankdir: 'TB',\\n          nodesep: 60,\\n          ranksep: 40,\\n        },\\n      }}\\n      onLoad={onLoad}\\n    >\\n      <div className=\\"toolbar\\">\\n        {['\u653E\u5927', '\u7F29\u5C0F', '\u753B\u5E031:1(real)', '\u9002\u5E94\u753B\u5E03(fit)'].map(item => (\\n          <div key={item} className=\\"div\\" onClick={() => zoomGraph(item)}>\\n            {item}\\n          </div>\\n        ))}\\n      </div>\\n      <XFlowCanvas config={useGraphConfig()} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default Demo");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/graph/graph-zoom/demos/index.less?dumi-raw-code
var graph_graph_zoom_demosdumi_raw_code = __webpack_require__("VBZ+");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/index.tsx?dumi-raw-code
/* harmony default export */ var basicdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas } from '@antv/xflow'\\nimport { FormPanel } from './form'\\nimport { useGraphConfig, onLoad } from './config-graph'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, left: 230, right: 0, bottom: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/form.tsx?dumi-raw-code
/* harmony default export */ var formdumi_raw_code = ("import type { IFormSchema } from '@antv/xflow'\\nimport type { NsGraph, NsGroupCmd } from '@antv/xflow'\\nimport React from 'react'\\nimport { Card, Form, Input, message, Button } from 'antd'\\nimport { usePanelContext, WorkspacePanel, FormBuilder, uuidv4 } from '@antv/xflow'\\nimport { XFlowGroupCommands } from '@antv/xflow'\\nimport { GROUP_NODE_RENDER_ID, GROUP_COLLAPSED_SIZE } from './constant'\\nexport const width = 100\\nexport const height = 40\\n\\ninterface IFormValues extends NsGraph.IGroupConfig {\\n  id: string\\n  label: string\\n  renderKey: string\\n}\\n\\n/**\\n  // \u5B50\u8282\u70B9\u5143\u7D20\u96C6\u5408  \\n  groupChildren?: string[]\\n  // group Header \\n  groupHeaderHeight?: number\\n  // group \u5185\u8FB9\u8DDD  \\n  groupPadding?: number\\n */\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'id',\\n    label: 'id',\\n    rules: [{ required: true }],\\n    renderProps: { disabled: true },\\n    render: Input,\\n  },\\n  {\\n    name: 'groupChildren',\\n    label: 'groupChildren',\\n    rules: [{ required: true }],\\n    renderProps: { disabled: true },\\n    render: Input,\\n  },\\n  {\\n    name: 'renderKey',\\n    label: 'renderKey',\\n    rules: [{ required: true }],\\n    renderProps: { disabled: true },\\n    render: Input,\\n  },\\n  {\\n    name: 'groupHeaderHeight',\\n    label: 'groupHeaderHeight',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'groupPadding',\\n    label: 'groupPadding',\\n    render: Input,\\n  },\\n  {\\n    name: 'label',\\n    label: 'label',\\n    render: Input,\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const { commandService } = usePanelContext()\\n  const [form] = Form.useForm<IFormValues>()\\n  const [hasGroup, setGroup] = React.useState(false)\\n  const onFinish = async (values: IFormValues) => {\\n    const nodeConfig = {\\n      ...values,\\n      groupHeaderHeight: parseInt(values.groupHeaderHeight as any, 10),\\n      groupPadding: parseInt(values.groupPadding as any, 10),\\n      groupCollapsedSize: GROUP_COLLAPSED_SIZE,\\n    }\\n    setGroup(true)\\n    console.log(nodeConfig)\\n    await commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(\\n      XFlowGroupCommands.ADD_GROUP.id,\\n      {\\n        nodeConfig: nodeConfig,\\n      },\\n    )\\n\\n    message.success(\`\${XFlowGroupCommands.ADD_GROUP.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        id: uuidv4(),\\n        groupChildren: ['node1', 'node2', 'node3', 'node4'],\\n        label: 'Group_1',\\n        groupHeaderHeight: 40,\\n        groupPadding: 12,\\n        renderKey: GROUP_NODE_RENDER_ID,\\n      }}\\n      submitButton={\\n        <Button type=\\"primary\\" htmlType=\\"submit\\" style={{ width: '100%' }} disabled={hasGroup}>\\n          \u6267\u884C\u547D\u4EE4\\n        </Button>\\n      }\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"Group Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/constant.ts?dumi-raw-code
/* harmony default export */ var constantdumi_raw_code = ("export const DND_NODE_RENDER_ID = 'DND_NDOE'\\nexport const GROUP_NODE_RENDER_ID = 'GROUP_NODE_RENDER_ID'\\nexport const GROUP_COLLAPSED_SIZE = { width: 160, height: 40 }");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/config-graph.tsx?dumi-raw-code
/* harmony default export */ var config_graphdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { DND_NODE_RENDER_ID, GROUP_NODE_RENDER_ID } from './constant'\\nimport { DndNode } from './react-node'\\nimport { GroupNode } from './react-group-node'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  /**  graphConfig\uFF1A\u914D\u7F6ENode\u8282\u70B9\u7EC4\u4EF6  */\\n  graphConfig.setNodeRender(DND_NODE_RENDER_ID, DndNode)\\n  /**  graphConfig\uFF1A\u914D\u7F6EGroup\u8282\u70B9\u7EC4\u4EF6 h  */\\n  graphConfig.setNodeRender(GROUP_NODE_RENDER_ID, GroupNode)\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/react-node/index.tsx?dumi-raw-code
/* harmony default export */ var react_nodedumi_raw_code = ("import React from 'react'\\nimport type { NsGraph } from '@antv/xflow'\\nimport './index.less'\\n\\nexport const DndNode: NsGraph.INodeRender = props => {\\n  return <div className=\\"xflow-dnd-node\\">{props.data.label}</div>\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/react-node/index.less?dumi-raw-code
var basic_react_nodedumi_raw_code = __webpack_require__("WXBs");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/react-group-node/index.tsx?dumi-raw-code
/* harmony default export */ var react_group_nodedumi_raw_code = ("import React from 'react'\\nimport { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { useXFlowApp, XFlowGroupCommands } from '@antv/xflow'\\n\\nimport './index.less'\\n\\nexport const GroupNode: NsGraph.INodeRender = props => {\\n  const { cell } = props\\n  const app = useXFlowApp()\\n  const isCollapsed = props.data.isCollapsed || false\\n  const onExpand = e => {\\n    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {\\n      nodeId: cell.id,\\n      isCollapsed: false,\\n    })\\n  }\\n  const onCollapse = e => {\\n    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {\\n      nodeId: cell.id,\\n      isCollapsed: true,\\n\\n      gap: 3,\\n    })\\n  }\\n\\n  return (\\n    <div className=\\"xflow-group-node\\">\\n      <div className=\\"xflow-group-header\\">\\n        <div className=\\"header-left\\">{props.data.label}</div>\\n        <div className=\\"header-right\\">\\n          {isCollapsed && <PlusSquareOutlined onClick={onExpand} />}\\n          {!isCollapsed && <MinusSquareOutlined onClick={onCollapse} />}\\n        </div>\\n      </div>\\n    </div>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/react-group-node/index.less?dumi-raw-code
var basic_react_group_nodedumi_raw_code = __webpack_require__("Lkx7");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/mock.ts?dumi-raw-code
/* harmony default export */ var mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\nimport { DND_NODE_RENDER_ID } from './constant'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 40,\\n  renderKey: DND_NODE_RENDER_ID,\\n} as const\\n\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-add/basic/index.less?dumi-raw-code
var group_add_basicdumi_raw_code = __webpack_require__("BMFC");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/index.tsx?dumi-raw-code
/* harmony default export */ var group_collapse_basicdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas } from '@antv/xflow'\\nimport { FormPanel } from './form'\\nimport { useGraphConfig, onLoad } from './config-graph'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, left: 230, right: 0, bottom: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/form.tsx?dumi-raw-code
/* harmony default export */ var basic_formdumi_raw_code = ("import React from 'react'\\nimport { Card, Form, Input, message, Button } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { useXFlowApp, WorkspacePanel, FormBuilder, uuidv4, delay } from '@antv/xflow'\\nimport type { NsGroupCmd } from '@antv/xflow'\\nimport { XFlowGroupCommands } from '@antv/xflow'\\n\\ninterface IFormValues {\\n  nodeId: string\\n  isCollapsed: boolean\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'nodeId',\\n    label: 'nodeId',\\n    rules: [{ required: true }],\\n    renderProps: { disabled: true },\\n    render: Input,\\n  },\\n  {\\n    name: 'isCollapsed',\\n    label: 'isCollapsed',\\n    rules: [{ required: true }],\\n    renderProps: { disabled: true },\\n    render: Input,\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const app = useXFlowApp()\\n  const [form] = Form.useForm<IFormValues>()\\n  const [isCollpase, setCollapsed] = React.useState(false)\\n  React.useEffect(() => {\\n    const setFormValue = async () => {\\n      await delay(1000)\\n      const graph = await app.getGraphInstance()\\n      const nodes = graph.getCells().filter(c => c.getProp('isGroup'))\\n      if (nodes[0]) {\\n        form.setFieldsValue({ nodeId: nodes[0].id })\\n      }\\n    }\\n    setFormValue()\\n  }, [app, form])\\n  const onFinish = async (values: IFormValues) => {\\n    console.log(values)\\n    setCollapsed(values.isCollapsed === true)\\n    await app.commandService.executeCommand<NsGroupCmd.CollapseGroup.IArgs>(\\n      XFlowGroupCommands.COLLAPSE_GROUP.id,\\n      {\\n        nodeId: values.nodeId,\\n        isCollapsed: values.isCollapsed,\\n      },\\n    )\\n    form.setFieldsValue({ isCollapsed: !values.isCollapsed })\\n    message.success(\`\${XFlowGroupCommands.COLLAPSE_GROUP.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        nodeId: null,\\n        isCollapsed: true,\\n      }}\\n      submitButton={\\n        <Button type=\\"primary\\" htmlType=\\"submit\\" style={{ width: '100%' }}>\\n          \u6267\u884C{isCollpase ? '\u5C55\u5F00' : '\u6298\u53E0'}\u547D\u4EE4\\n        </Button>\\n      }\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"Group Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/config-graph.tsx?dumi-raw-code
/* harmony default export */ var basic_config_graphdumi_raw_code = ("import type { IAppLoad, NsGraphCmd, NsGroupCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands, XFlowGroupCommands } from '@antv/xflow'\\nimport { DND_NODE_RENDER_ID, GROUP_COLLAPSED_SIZE, GROUP_NODE_RENDER_ID } from './constant'\\nimport { DndNode } from './react-node'\\nimport { GroupNode } from './react-group-node'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // addGroup\\n  await app.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.ADD_GROUP.id, {\\n    nodeConfig: {\\n      id: 'group1',\\n      label: 'Group1',\\n      groupChildren: ['node1', 'node2', 'node3', 'node4'],\\n      isCollapsed: false,\\n      renderKey: GROUP_NODE_RENDER_ID,\\n      groupCollapsedSize: GROUP_COLLAPSED_SIZE,\\n    },\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  /**  graphConfig\uFF1A\u914D\u7F6ENode\u8282\u70B9\u7EC4\u4EF6  */\\n  graphConfig.setNodeRender(DND_NODE_RENDER_ID, DndNode)\\n  /**  graphConfig\uFF1A\u914D\u7F6EGroup\u8282\u70B9\u7EC4\u4EF6 h  */\\n  graphConfig.setNodeRender(GROUP_NODE_RENDER_ID, GroupNode)\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/constant.ts?dumi-raw-code
/* harmony default export */ var basic_constantdumi_raw_code = ("export const DND_NODE_RENDER_ID = 'DND_NDOE'\\nexport const GROUP_NODE_RENDER_ID = 'GROUP_NODE_RENDER_ID'\\nexport const GROUP_COLLAPSED_SIZE = { width: 160, height: 40 }");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/react-node/index.tsx?dumi-raw-code
/* harmony default export */ var group_collapse_basic_react_nodedumi_raw_code = ("import React from 'react'\\nimport type { NsGraph } from '@antv/xflow'\\nimport './index.less'\\n\\nexport const DndNode: NsGraph.INodeRender = props => {\\n  return <div className=\\"xflow-dnd-node\\">{props.data.label}</div>\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/react-node/index.less?dumi-raw-code
var group_group_collapse_basic_react_nodedumi_raw_code = __webpack_require__("rWSy");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/react-group-node/index.tsx?dumi-raw-code
/* harmony default export */ var group_collapse_basic_react_group_nodedumi_raw_code = ("import React from 'react'\\nimport { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { useXFlowApp, XFlowGroupCommands } from '@antv/xflow'\\n\\nimport './index.less'\\n\\nexport const GroupNode: NsGraph.INodeRender = props => {\\n  const { cell } = props\\n  const app = useXFlowApp()\\n  const isCollapse = cell.getProp('isCollapsed') || false\\n  const onExpand = e => {\\n    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {\\n      nodeId: cell.id,\\n      isCollapsed: false,\\n    })\\n  }\\n  const onCollapse = e => {\\n    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {\\n      nodeId: cell.id,\\n      isCollapsed: true,\\n\\n      gap: 3,\\n    })\\n  }\\n\\n  return (\\n    <div className=\\"xflow-group-node\\">\\n      <div className=\\"xflow-group-header\\">\\n        <div className=\\"header-left\\">{props.data.label}</div>\\n        <div className=\\"header-right\\">\\n          {isCollapse && <PlusSquareOutlined onClick={onExpand} />}\\n          {!isCollapse && <MinusSquareOutlined onClick={onCollapse} />}\\n        </div>\\n      </div>\\n    </div>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/react-group-node/index.less?dumi-raw-code
var group_group_collapse_basic_react_group_nodedumi_raw_code = __webpack_require__("Ha/V");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/mock.ts?dumi-raw-code
/* harmony default export */ var basic_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\nimport { DND_NODE_RENDER_ID, GROUP_NODE_RENDER_ID, GROUP_COLLAPSED_SIZE } from './constant'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 40,\\n  renderKey: DND_NODE_RENDER_ID,\\n} as const\\n\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: [...nodes],\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-collapse/basic/index.less?dumi-raw-code
var group_group_collapse_basicdumi_raw_code = __webpack_require__("Pk9R");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/index.tsx?dumi-raw-code
/* harmony default export */ var group_del_demosdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas } from '@antv/xflow'\\nimport { FormPanel } from './form'\\nimport { useGraphConfig, onLoad } from './config-graph'\\nimport '@antv/xflow/dist/index.css'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, left: 230, right: 0, bottom: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/form.tsx?dumi-raw-code
/* harmony default export */ var demos_formdumi_raw_code = ("import React from 'react'\\nimport { Card, Form, Input, message, Button } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { useXFlowApp, WorkspacePanel, FormBuilder, uuidv4, delay } from '@antv/xflow'\\nimport type { NsGroupCmd } from '@antv/xflow'\\nimport { XFlowGroupCommands } from '@antv/xflow'\\n\\ninterface IFormValues {\\n  id: string\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'id',\\n    label: 'id',\\n    rules: [{ required: true }],\\n    renderProps: { disabled: true },\\n    render: Input,\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const app = useXFlowApp()\\n  const [form] = Form.useForm<IFormValues>()\\n  const [hasGroup, setGroup] = React.useState(false)\\n  React.useEffect(() => {\\n    const setFormValue = async () => {\\n      await delay(1000)\\n      const graph = await app.getGraphInstance()\\n      const nodes = graph.getCells().filter(c => c.getProp('isGroup'))\\n      console.log(nodes, graph.getCells())\\n      if (nodes[0]) {\\n        form.setFieldsValue({ id: nodes[0].id })\\n      }\\n    }\\n    setFormValue()\\n  }, [app, form])\\n  const onFinish = async (values: IFormValues) => {\\n    const nodeConfig = {\\n      ...values,\\n    }\\n    setGroup(true)\\n    console.log(nodeConfig)\\n    await app.commandService.executeCommand<NsGroupCmd.DelGroup.IArgs>(\\n      XFlowGroupCommands.DEL_GROUP.id,\\n      {\\n        nodeConfig: nodeConfig,\\n      },\\n    )\\n\\n    message.success(\`\${XFlowGroupCommands.DEL_GROUP.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        id: null,\\n      }}\\n      submitButton={\\n        <Button type=\\"primary\\" htmlType=\\"submit\\" style={{ width: '100%' }} disabled={hasGroup}>\\n          \u6267\u884C\u547D\u4EE4\\n        </Button>\\n      }\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"Group Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/config-graph.tsx?dumi-raw-code
/* harmony default export */ var demos_config_graphdumi_raw_code = ("import type { IAppLoad, NsGraphCmd, NsGroupCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands, XFlowGroupCommands } from '@antv/xflow'\\nimport { DND_NODE_RENDER_ID, GROUP_COLLAPSED_SIZE, GROUP_NODE_RENDER_ID } from './constant'\\nimport { DndNode } from './react-node'\\nimport { GroupNode } from './react-group-node'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // addGroup\\n  await app.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.ADD_GROUP.id, {\\n    nodeConfig: {\\n      id: 'group1',\\n      label: 'Group1',\\n      groupChildren: ['node1', 'node2', 'node3', 'node4'],\\n      isCollapsed: false,\\n      renderKey: GROUP_NODE_RENDER_ID,\\n      groupCollapsedSize: GROUP_COLLAPSED_SIZE,\\n    },\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  /**  graphConfig\uFF1A\u914D\u7F6ENode\u8282\u70B9\u7EC4\u4EF6  */\\n  graphConfig.setNodeRender(DND_NODE_RENDER_ID, DndNode)\\n  /**  graphConfig\uFF1A\u914D\u7F6EGroup\u8282\u70B9\u7EC4\u4EF6 h  */\\n  graphConfig.setNodeRender(GROUP_NODE_RENDER_ID, GroupNode)\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/constant.ts?dumi-raw-code
/* harmony default export */ var demos_constantdumi_raw_code = ("export const DND_NODE_RENDER_ID = 'DND_NDOE'\\nexport const GROUP_NODE_RENDER_ID = 'GROUP_NODE_RENDER_ID'\\nexport const GROUP_COLLAPSED_SIZE = { width: 160, height: 40 }");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/react-node/index.tsx?dumi-raw-code
/* harmony default export */ var demos_react_nodedumi_raw_code = ("import React from 'react'\\nimport type { NsGraph } from '@antv/xflow'\\nimport './index.less'\\n\\nexport const DndNode: NsGraph.INodeRender = props => {\\n  return <div className=\\"xflow-dnd-node\\">{props.data.label}</div>\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/react-node/index.less?dumi-raw-code
var group_del_demos_react_nodedumi_raw_code = __webpack_require__("Nuev");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/react-group-node/index.tsx?dumi-raw-code
/* harmony default export */ var demos_react_group_nodedumi_raw_code = ("import React from 'react'\\nimport { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { useXFlowApp, XFlowGroupCommands } from '@antv/xflow'\\n\\nimport './index.less'\\n\\nexport const GroupNode: NsGraph.INodeRender = props => {\\n  const { cell } = props\\n  const app = useXFlowApp()\\n  const isCollapse = cell.getProp('isCollapsed') || false\\n  const onExpand = e => {\\n    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {\\n      nodeId: cell.id,\\n      isCollapsed: false,\\n    })\\n  }\\n  const onCollapse = e => {\\n    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {\\n      nodeId: cell.id,\\n      isCollapsed: true,\\n\\n      gap: 3,\\n    })\\n  }\\n\\n  return (\\n    <div className=\\"xflow-group-node\\">\\n      <div className=\\"xflow-group-header\\">\\n        <div className=\\"header-left\\">{props.data.label}</div>\\n        <div className=\\"header-right\\">\\n          {isCollapse && <PlusSquareOutlined onClick={onExpand} />}\\n          {!isCollapse && <MinusSquareOutlined onClick={onCollapse} />}\\n        </div>\\n      </div>\\n    </div>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/react-group-node/index.less?dumi-raw-code
var group_del_demos_react_group_nodedumi_raw_code = __webpack_require__("axYh");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/mock.ts?dumi-raw-code
/* harmony default export */ var demos_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\nimport { DND_NODE_RENDER_ID, GROUP_NODE_RENDER_ID, GROUP_COLLAPSED_SIZE } from './constant'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 40,\\n  renderKey: DND_NODE_RENDER_ID,\\n} as const\\n\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: [...nodes],\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/group/group-del/demos/index.less?dumi-raw-code
var group_group_del_demosdumi_raw_code = __webpack_require__("VhSw");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-add/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_add_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel, width, height } from './form'\\nimport './index.less'\\n\\n/**  graphConfig hook  */\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst NodeAddDemo: React.FC<{}> = () => {\\n  const graphConfig = useGraphConfig()\\n  const onLoad: IAppLoad = async app => {\\n    // \u5728appReadyCallback\u4E2D\u53EF\u4EE5\u901A\u8FC7app\u6267\u884Ccommand\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node1',\\n        x: 100,\\n        y: 30,\\n        label: 'Hello World',\\n        width,\\n        height,\\n      },\\n    })\\n    return app\\n  }\\n\\n  return (\\n    <XFlow meta={{ flowId: 'add-node-demo' }} onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas\\n        className=\\"app-main-content\\"\\n        config={graphConfig}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default NodeAddDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-add/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_add_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Card, Form, Input, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { usePanelContext, WorkspacePanel, randomInt, FormBuilder } from '@antv/xflow'\\nimport type { NsGraph, NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\nexport const width = 100\\nexport const height = 40\\n\\ntype IFormValues = NsGraph.INodeConfig\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'id',\\n    label: 'id',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'label',\\n    label: 'label',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'x',\\n    label: 'x',\\n    render: Input,\\n  },\\n  {\\n    name: 'y',\\n    label: 'y',\\n    render: Input,\\n  },\\n  {\\n    name: 'width',\\n    label: 'width',\\n    render: Input,\\n  },\\n  {\\n    name: 'height',\\n    label: 'height',\\n    render: Input,\\n  },\\n]\\n\\nlet nodeId = 1\\n\\nexport const CmdForm = () => {\\n  const { commandService } = usePanelContext()\\n  const [form] = Form.useForm<IFormValues>()\\n\\n  React.useEffect(() => {\\n    nodeId = 1\\n  }, [])\\n\\n  const onFinish = async (values: IFormValues) => {\\n    commandService.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: values,\\n    })\\n    nodeId += 1\\n    form.setFieldsValue({\\n      id: 'node_' + nodeId,\\n      x: randomInt(20, 600),\\n      y: randomInt(50, 270),\\n      width,\\n      height,\\n      label: 'Node_' + nodeId,\\n    })\\n    message.success(\`\${XFlowNodeCommands.ADD_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        id: 'node_' + nodeId,\\n        x: randomInt(20, 100),\\n        y: randomInt(50, 150),\\n        width,\\n        height,\\n        label: 'Node_' + nodeId,\\n      }}\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-add/demos/index.less?dumi-raw-code
var nodes_node_add_demosdumi_raw_code = __webpack_require__("/k1H");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-back/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_back_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel } from './form'\\nimport './index.less'\\n\\nexport const width = 100\\nexport const height = 40\\n\\n/**  graphConfig hook  */\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst NodeAddDemo: React.FC<{}> = () => {\\n  const graphConfig = useGraphConfig()\\n  const onLoad: IAppLoad = async app => {\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node1',\\n        x: 100,\\n        y: 30,\\n        label: 'NODENODE1',\\n        width,\\n        height,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node2',\\n        x: 120,\\n        y: 50,\\n        label: 'NODENODE2',\\n        width,\\n        height,\\n      },\\n    })\\n    return app\\n  }\\n\\n  return (\\n    <XFlow meta={{ flowId: 'add-node-demo' }} onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas\\n        className=\\"app-main-content\\"\\n        config={graphConfig}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default NodeAddDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-back/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_back_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Card, Form, Input, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { usePanelContext, WorkspacePanel, FormBuilder } from '@antv/xflow'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\ninterface IFormValues {\\n  nodeId: string\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'nodeId',\\n    label: 'nodeId',\\n    rules: [{ required: true }],\\n    render: Input,\\n    renderProps: { disabled: true },\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const { commandService } = usePanelContext()\\n  const [form] = Form.useForm<IFormValues>()\\n\\n  const onFinish = async (values: IFormValues) => {\\n    commandService.executeCommand<NsNodeCmd.BackNode.IArgs>(XFlowNodeCommands.BACK_NODE.id, values)\\n    console.log('executeCommand with args', values)\\n    message.success(\`\${XFlowNodeCommands.BACK_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n    form.setFieldsValue({\\n      nodeId: values.nodeId === 'node1' ? 'node2' : 'node1',\\n    })\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        nodeId: 'node1',\\n      }}\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-back/demos/index.less?dumi-raw-code
var nodes_node_back_demosdumi_raw_code = __webpack_require__("Oxtj");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-center/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_center_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel, width, height } from './form'\\nimport './index.less'\\n\\n/**  graphConfig hook  */\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst NodeAddDemo: React.FC<{}> = () => {\\n  const graphConfig = useGraphConfig()\\n  const onLoad: IAppLoad = async app => {\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node1',\\n        x: 100,\\n        y: 30,\\n        label: 'Hello World 1',\\n        width,\\n        height,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node2',\\n        x: 50,\\n        y: 150,\\n        label: 'Hello World 2',\\n        width,\\n        height,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node3',\\n        x: 200,\\n        y: 150,\\n        label: 'Hello World 3',\\n        width,\\n        height,\\n      },\\n    })\\n    return app\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas\\n        className=\\"app-main-content\\"\\n        config={graphConfig}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default NodeAddDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-center/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_center_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Button, Card, Form, Input, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { useXFlowApp, WorkspacePanel, MODELS, useModelAsync, FormBuilder } from '@antv/xflow'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\nexport const width = 100\\nexport const height = 40\\n\\ninterface IFormValues {\\n  id: string\\n  nodeConfig: string\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'id',\\n    label: 'id',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'nodeConfig',\\n    label: 'nodeConfig',\\n    rules: [{ required: true }],\\n    render: Input.TextArea,\\n    renderProps: { rows: 5 },\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const app = useXFlowApp()\\n  const [form] = Form.useForm<IFormValues>()\\n\\n  const [selectNode] = useModelAsync<MODELS.SELECTED_NODE.IState>({\\n    getModel: async () => MODELS.SELECTED_NODE.getModel(app.modelService),\\n    initialState: null,\\n  })\\n\\n  React.useEffect(() => {\\n    if (selectNode) {\\n      const node = selectNode.getData()\\n      form.setFieldsValue({\\n        id: node.id,\\n        nodeConfig: JSON.stringify(node),\\n      })\\n    }\\n  }, [form, selectNode])\\n\\n  const onFinish = async (values: IFormValues) => {\\n    app.commandService.executeCommand<NsNodeCmd.CenterNode.IArgs>(\\n      XFlowNodeCommands.CENTER_NODE.id,\\n      {\\n        nodeConfig: JSON.parse(values.nodeConfig),\\n      },\\n    )\\n\\n    message.success(\`\${XFlowNodeCommands.CENTER_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        id: null,\\n        nodeConfig: null,\\n      }}\\n      submitButton={\\n        <Button type=\\"primary\\" htmlType=\\"submit\\" style={{ width: '100%' }} disabled={!selectNode}>\\n          \u9009\u4E2D\u8282\u70B9\u6267\u884C\u547D\u4EE4\\n        </Button>\\n      }\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-center/demos/index.less?dumi-raw-code
var nodes_node_center_demosdumi_raw_code = __webpack_require__("Qu8M");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-delete/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_delete_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel, width, height } from './form'\\nimport './index.less'\\n\\n/**  graphConfig hook  */\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst NodeAddDemo: React.FC<{}> = () => {\\n  const graphConfig = useGraphConfig()\\n  const onLoad: IAppLoad = async app => {\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node1',\\n        x: 100,\\n        y: 30,\\n        label: 'Hello World 1',\\n        width,\\n        height,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node2',\\n        x: 50,\\n        y: 150,\\n        label: 'Hello World 2',\\n        width,\\n        height,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node3',\\n        x: 200,\\n        y: 150,\\n        label: 'Hello World 3',\\n        width,\\n        height,\\n      },\\n    })\\n    return app\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas\\n        className=\\"app-main-content\\"\\n        config={graphConfig}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default NodeAddDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-delete/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_delete_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Button, Card, Form, Input, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { useXFlowApp, WorkspacePanel, MODELS, useModelAsync, FormBuilder } from '@antv/xflow'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\nexport const width = 100\\nexport const height = 40\\n\\ninterface IFormValues {\\n  id: string\\n  nodeConfig: string\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'id',\\n    label: 'node id',\\n    rules: [{ required: true }],\\n    render: Input,\\n    renderProps: { disabled: true },\\n  },\\n  {\\n    name: 'nodeConfig',\\n    label: 'nodeConfig',\\n    rules: [{ required: true }],\\n    render: Input.TextArea,\\n    renderProps: { rows: 5, disabled: true },\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const app = useXFlowApp()\\n  const [form] = Form.useForm<IFormValues>()\\n\\n  const [selectNode] = useModelAsync<MODELS.SELECTED_NODE.IState>({\\n    getModel: async () => MODELS.SELECTED_NODE.getModel(app.modelService),\\n    initialState: null,\\n  })\\n\\n  React.useEffect(() => {\\n    if (selectNode) {\\n      const node = selectNode.getData()\\n      form.setFieldsValue({\\n        id: node.id,\\n        nodeConfig: JSON.stringify(node),\\n      })\\n    }\\n  }, [form, selectNode])\\n\\n  const onFinish = async (values: IFormValues) => {\\n    app.commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n      nodeConfig: JSON.parse(values.nodeConfig),\\n    })\\n\\n    form.setFieldsValue({\\n      id: null,\\n      nodeConfig: null,\\n    })\\n    message.success(\`\${XFlowNodeCommands.DEL_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      layout=\\"vertical\\"\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        id: null,\\n        nodeConfig: null,\\n      }}\\n      submitButton={\\n        <Button type=\\"primary\\" htmlType=\\"submit\\" style={{ width: '100%' }} disabled={!selectNode}>\\n          \u9009\u4E2D\u8282\u70B9\u6267\u884C\u547D\u4EE4\\n        </Button>\\n      }\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-delete/demos/index.less?dumi-raw-code
var nodes_node_delete_demosdumi_raw_code = __webpack_require__("OCoK");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-front/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_front_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel } from './form'\\nimport './index.less'\\n\\nexport const width = 100\\nexport const height = 40\\n\\n/**  graphConfig hook  */\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst NodeAddDemo: React.FC<{}> = () => {\\n  const graphConfig = useGraphConfig()\\n  const onLoad: IAppLoad = async app => {\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node1',\\n        x: 100,\\n        y: 30,\\n        label: 'NODENODE1',\\n        width,\\n        height,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node2',\\n        x: 120,\\n        y: 50,\\n        label: 'NODENODE2',\\n        width,\\n        height,\\n      },\\n    })\\n    return app\\n  }\\n\\n  return (\\n    <XFlow meta={{ flowId: 'add-node-demo' }} onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas\\n        className=\\"app-main-content\\"\\n        config={graphConfig}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default NodeAddDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-front/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_front_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Card, Form, Input, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { usePanelContext, WorkspacePanel, FormBuilder } from '@antv/xflow'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\ninterface IFormValues {\\n  nodeId: string\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'nodeId',\\n    label: 'nodeId',\\n    rules: [{ required: true }],\\n    render: Input,\\n    renderProps: { disabled: true },\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const { commandService } = usePanelContext()\\n  const [form] = Form.useForm<IFormValues>()\\n\\n  const onFinish = async (values: IFormValues) => {\\n    commandService.executeCommand<NsNodeCmd.FrontNode.IArgs>(\\n      XFlowNodeCommands.FRONT_NODE.id,\\n      values,\\n    )\\n    console.log('executeCommand with args', values)\\n    message.success(\`\${XFlowNodeCommands.FRONT_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n    form.setFieldsValue({\\n      nodeId: values.nodeId === 'node1' ? 'node2' : 'node1',\\n    })\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        nodeId: 'node1',\\n      }}\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-front/demos/index.less?dumi-raw-code
var nodes_node_front_demosdumi_raw_code = __webpack_require__("6sWn");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-highlight/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_highlight_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel, width, height } from './form'\\nimport './index.less'\\n\\n/**  graphConfig hook  */\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst NodeAddDemo: React.FC<{}> = () => {\\n  const graphConfig = useGraphConfig()\\n  const onLoad: IAppLoad = async app => {\\n    // \u5728appReadyCallback\u4E2D\u53EF\u4EE5\u901A\u8FC7app\u6267\u884Ccommand\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node1',\\n        x: 100,\\n        y: 30,\\n        shape: 'rect',\\n        label: 'Hello World',\\n        width,\\n        height,\\n      },\\n    })\\n    return app\\n  }\\n\\n  return (\\n    <XFlow meta={{ flowId: 'add-node-demo' }} onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas\\n        className=\\"app-main-content\\"\\n        config={graphConfig}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default NodeAddDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-highlight/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_highlight_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Card, Form, Input, InputNumber, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { usePanelContext, WorkspacePanel, FormBuilder } from '@antv/xflow'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\nexport const width = 100\\nexport const height = 40\\n\\ninterface IFormValues {\\n  nodeId: string\\n  stroke: string\\n  strokeWidth: number\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'nodeId',\\n    label: 'nodeId',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'stroke',\\n    label: 'stroke',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'strokeWidth',\\n    label: 'strokeWidth',\\n    render: InputNumber,\\n    renderProps: {\\n      min: 1,\\n      max: 7,\\n    },\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const { commandService } = usePanelContext()\\n  const [form] = Form.useForm<IFormValues>()\\n  const onFinish = async (values: IFormValues) => {\\n    commandService.executeCommand<NsNodeCmd.HighlightNode.IArgs>(\\n      XFlowNodeCommands.HIGHLIGHT_NODE.id,\\n      {\\n        ...values,\\n      },\\n    )\\n    console.log('XFlowNodeCommands.HIGHLIGHT_NODE.id', values)\\n    message.success(\`\${XFlowNodeCommands.HIGHLIGHT_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        nodeId: 'node1',\\n        stroke: '#873bf4',\\n        strokeWidth: 3,\\n      }}\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-highlight/demos/index.less?dumi-raw-code
var nodes_node_highlight_demosdumi_raw_code = __webpack_require__("8iJt");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-move/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_move_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel } from './form'\\nimport './index.less'\\n\\n/**  graphConfig hook  */\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst NodeAddDemo: React.FC<{}> = () => {\\n  const graphConfig = useGraphConfig()\\n  const onLoad: IAppLoad = async app => {\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node1',\\n        x: 100,\\n        y: 30,\\n        label: 'Hello World 1',\\n        width: 160,\\n        height: 32,\\n      },\\n    })\\n    return app\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas\\n        className=\\"app-main-content\\"\\n        config={graphConfig}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default NodeAddDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-move/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_move_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Button, Card, Form, Input, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { useXFlowApp, WorkspacePanel, MODELS, useModelAsync, FormBuilder } from '@antv/xflow'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\ninterface IFormValues {\\n  id: string\\n  dx: string\\n  dy: string\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'id',\\n    label: 'id',\\n    rules: [{ required: true }],\\n    render: Input,\\n    renderProps: { disabled: true },\\n  },\\n  {\\n    name: 'dx',\\n    label: 'position.dx',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'dy',\\n    label: 'position.dy',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const app = useXFlowApp()\\n  const [form] = Form.useForm<IFormValues>()\\n\\n  const [selectNode] = useModelAsync<MODELS.SELECTED_NODE.IState>({\\n    getModel: async () => MODELS.SELECTED_NODE.getModel(app.modelService),\\n    initialState: null,\\n  })\\n\\n  React.useEffect(() => {\\n    if (selectNode) {\\n      const node = selectNode.getData()\\n      form.setFieldsValue({\\n        id: node.id,\\n        dx: '20',\\n        dy: '20',\\n      })\\n    }\\n  }, [form, selectNode])\\n\\n  const onFinish = async (values: IFormValues) => {\\n    app.commandService.executeCommand<NsNodeCmd.MoveNode.IArgs>(XFlowNodeCommands.MOVE_NODE.id, {\\n      id: values.id,\\n      position: {\\n        dx: parseInt(values.dx, 10),\\n        dy: parseInt(values.dy, 10),\\n      },\\n    })\\n\\n    message.success(\`\${XFlowNodeCommands.CENTER_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        id: null,\\n        dx: '10',\\n        dy: '10',\\n      }}\\n      submitButton={\\n        <Button type=\\"primary\\" htmlType=\\"submit\\" style={{ width: '100%' }} disabled={!selectNode}>\\n          \u9009\u4E2D\u8282\u70B9\u6267\u884C\u547D\u4EE4\\n        </Button>\\n      }\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-move/demos/index.less?dumi-raw-code
var nodes_node_move_demosdumi_raw_code = __webpack_require__("mazz");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-select/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_select_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel } from './form'\\nimport './index.less'\\nexport const width = 120\\nexport const height = 40\\n/**  graphConfig hook  */\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst NodeAddDemo: React.FC<{}> = () => {\\n  const graphConfig = useGraphConfig()\\n  const onLoad: IAppLoad = async app => {\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node1',\\n        x: 100,\\n        y: 30,\\n        label: 'Hello World 1',\\n        width,\\n        height,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node2',\\n        x: 50,\\n        y: 150,\\n        label: 'Hello World 2',\\n        width,\\n        height,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'node3',\\n        x: 200,\\n        y: 150,\\n        label: 'Hello World 3',\\n        width,\\n        height,\\n      },\\n    })\\n    return app\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <FormPanel />\\n      <XFlowCanvas\\n        className=\\"app-main-content\\"\\n        config={graphConfig}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default NodeAddDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-select/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_select_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Card, Form, Input, Switch, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { useXFlowApp, WorkspacePanel, FormBuilder } from '@antv/xflow'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\ninterface IFormValues {\\n  nodeIds: string\\n  resetSelection: boolean\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'nodeIds',\\n    label: 'nodeIds',\\n    rules: [{ required: true }],\\n    render: Input,\\n    renderProps: { disabled: true },\\n  },\\n  {\\n    name: 'resetSelection',\\n    label: 'resetSelection',\\n    rules: [{ required: true }],\\n    render: Switch,\\n    itemProps: {\\n      valuePropName: 'checked',\\n    },\\n  },\\n]\\n\\nlet nodeIdx = 1\\nexport const CmdForm = () => {\\n  const app = useXFlowApp()\\n  const [form] = Form.useForm<IFormValues>()\\n\\n  const onFinish = async (values: IFormValues) => {\\n    const args: NsNodeCmd.SelectNode.IArgs = {\\n      nodeIds: [values.nodeIds],\\n      resetSelection: values.resetSelection,\\n    }\\n    app.commandService.executeCommand<NsNodeCmd.SelectNode.IArgs>(\\n      XFlowNodeCommands.SELECT_NODE.id,\\n      args,\\n    )\\n    console.log('executeCommand with args :', args)\\n    message.success(\`\${XFlowNodeCommands.DEL_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n    // \u8F6E\u6D41\u9009\u4E2D\\n    if (nodeIdx < 3) {\\n      nodeIdx += 1\\n    } else {\\n      nodeIdx = 1\\n    }\\n    form.setFieldsValue({\\n      nodeIds: \`node\${nodeIdx}\`,\\n    })\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      layout=\\"vertical\\"\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        nodeIds: \`node\${nodeIdx}\`,\\n        resetSelection: true,\\n      }}\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-select/demos/index.less?dumi-raw-code
var nodes_node_select_demosdumi_raw_code = __webpack_require__("WfS/");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-update/demos/index.tsx?dumi-raw-code
/* harmony default export */ var node_update_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlow, XFlowCanvas, createGraphConfig, XFlowNodeCommands } from '@antv/xflow'\\nimport { FormPanel } from './form'\\nimport './index.less'\\n\\nexport const useGraphConfig = createGraphConfig(graphConfig => {\\n  graphConfig.setX6Config({ grid: true })\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst Demo: React.FC<{}> = () => {\\n  const onLoad: IAppLoad = async app => {\\n    app.executeCommand(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: { id: 'node1', x: 280, y: 130, width: 120, height: 40, label: 'Hello World' },\\n    } as NsNodeCmd.AddNode.IArgs)\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-node-update-demo\\" meta={{ flowId: 'node-update-demo' }}>\\n      <FormPanel />\\n      <XFlowCanvas\\n        config={useGraphConfig()}\\n        position={{ top: 0, left: 230, right: 0, bottom: 0 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default Demo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-update/demos/form.tsx?dumi-raw-code
/* harmony default export */ var node_update_demos_formdumi_raw_code = ("import React from 'react'\\nimport { Button, Card, Form, Input, message } from 'antd'\\nimport type { IFormSchema } from '@antv/xflow'\\nimport { useXFlowApp, WorkspacePanel, MODELS, useModelAsync, FormBuilder } from '@antv/xflow'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\n\\ninterface IFormValues {\\n  id: string\\n  label: string\\n  x: string\\n  y: string\\n}\\n\\nconst formItems: IFormSchema[] = [\\n  {\\n    name: 'id',\\n    label: 'id',\\n    rules: [{ required: true }],\\n    render: Input,\\n    renderProps: { disabled: true },\\n  },\\n  {\\n    name: 'label',\\n    label: 'label',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'x',\\n    label: 'x',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n  {\\n    name: 'y',\\n    label: 'y',\\n    rules: [{ required: true }],\\n    render: Input,\\n  },\\n]\\n\\nexport const CmdForm = () => {\\n  const app = useXFlowApp()\\n  const [form] = Form.useForm<IFormValues>()\\n  const [selectNode] = useModelAsync<MODELS.SELECTED_NODE.IState>({\\n    getModel: async () => MODELS.SELECTED_NODE.getModel(app.modelService),\\n    initialState: null,\\n  })\\n\\n  React.useEffect(() => {\\n    if (selectNode) {\\n      const nodeConfig = selectNode.getData()\\n      form.setFieldsValue({\\n        id: nodeConfig.id,\\n        label: nodeConfig.label,\\n        x: nodeConfig.x,\\n        y: nodeConfig.y,\\n      })\\n    }\\n  }, [form, selectNode])\\n\\n  const onFinish = async (values: IFormValues) => {\\n    const nodeConfig = selectNode.getData()\\n    app.commandService.executeCommand<NsNodeCmd.UpdateNode.IArgs>(\\n      XFlowNodeCommands.UPDATE_NODE.id,\\n      {\\n        nodeConfig: { ...nodeConfig, ...values },\\n      },\\n    )\\n\\n    message.success(\`\${XFlowNodeCommands.DEL_NODE.label}: \u547D\u4EE4\u6267\u884C\u6210\u529F\`)\\n  }\\n\\n  return (\\n    <FormBuilder<IFormValues>\\n      form={form}\\n      formItems={formItems}\\n      onFinish={onFinish}\\n      initialValues={{\\n        id: null,\\n        label: null,\\n        x: null,\\n        y: null,\\n      }}\\n      submitButton={\\n        <Button type=\\"primary\\" htmlType=\\"submit\\" style={{ width: '100%' }} disabled={!selectNode}>\\n          \u9009\u4E2D\u8282\u70B9\u6267\u884C\u547D\u4EE4\\n        </Button>\\n      }\\n    />\\n  )\\n}\\n\\nexport const FormPanel = () => {\\n  return (\\n    <WorkspacePanel position={{ top: 0, left: 0, bottom: 0, width: 230 }} className=\\"panel\\">\\n      <Card title=\\"NodeConfig Options\\" size=\\"small\\" bordered={false}>\\n        <CmdForm />\\n      </Card>\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/api/commands/nodes/node-update/demos/index.less?dumi-raw-code
var nodes_node_update_demosdumi_raw_code = __webpack_require__("kQzY");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var demos_basicdumi_raw_code = ("import React from 'react'\\nimport type { NsNodeCmd, NsGraph } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  XFlowCanvas,\\n  JsonSchemaForm,\\n  createGraphConfig,\\n  NsJsonSchemaForm,\\n  XFlowNodeCommands,\\n} from '@antv/xflow'\\nimport { set } from 'lodash'\\nimport { onLoad } from './graph-config'\\nimport '@antv/xflow/dist/index.css'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nnamespace NsJsonForm {\\n  /** ControlShape\u7684Enum */\\n  const { ControlShape } = NsJsonSchemaForm\\n\\n  /** \u4FDD\u5B58form\u7684values */\\n  export const formValueUpdateService: NsJsonSchemaForm.IFormValueUpdateService = async args => {\\n    const { values, commandService, targetData } = args\\n    const updateNode = (node: NsGraph.INodeConfig) => {\\n      return commandService.executeCommand<NsNodeCmd.UpdateNode.IArgs>(\\n        XFlowNodeCommands.UPDATE_NODE.id,\\n        { nodeConfig: node },\\n      )\\n    }\\n    console.log('formValueUpdateService  values:', values, args)\\n    const nodeConfig: NsGraph.INodeConfig = {\\n      ...targetData,\\n    }\\n    values.forEach(val => {\\n      set(nodeConfig, val.name, val.value)\\n    })\\n    updateNode(nodeConfig)\\n  }\\n\\n  /** \u6839\u636E\u9009\u4E2D\u7684\u8282\u70B9\u66F4\u65B0formSchema */\\n  export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async args => {\\n    const { targetData } = args\\n    console.log(\`formSchemaService args:\`, args)\\n    if (!targetData) {\\n      return {\\n        tabs: [\\n          {\\n            /** Tab\u7684title */\\n            name: '\u753B\u5E03\u914D\u7F6E',\\n            groups: [],\\n          },\\n        ],\\n      }\\n    }\\n\\n    return {\\n      /** \u914D\u7F6E\u4E00\u4E2ATab */\\n      tabs: [\\n        {\\n          /** Tab\u7684title */\\n          name: '\u8282\u70B9\u914D\u7F6E',\\n          groups: [\\n            {\\n              name: 'group1',\\n              controls: [\\n                {\\n                  name: 'label',\\n                  label: '\u8282\u70B9Label',\\n                  shape: ControlShape.INPUT,\\n                  value: targetData.label,\\n                },\\n                {\\n                  name: 'x',\\n                  label: 'x',\\n                  shape: ControlShape.FLOAT,\\n                  value: targetData.x,\\n                },\\n                {\\n                  name: 'y',\\n                  label: 'y',\\n                  shape: ControlShape.FLOAT,\\n                  value: targetData.y,\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n      ],\\n    }\\n  }\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 290 }} />\\n      <JsonSchemaForm\\n        formSchemaService={NsJsonForm.formSchemaService}\\n        formValueUpdateService={NsJsonForm.formValueUpdateService}\\n        position={{ top: 0, bottom: 0, right: 0, width: 290 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/basic/graph-config.tsx?dumi-raw-code
/* harmony default export */ var graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/basic/mock.ts?dumi-raw-code
/* harmony default export */ var demos_basic_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/basic/index.less?dumi-raw-code
var canvas_config_form_demos_basicdumi_raw_code = __webpack_require__("xMVw");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-shape/index.tsx?dumi-raw-code
/* harmony default export */ var custom_shapedumi_raw_code = ("import React from 'react'\\nimport type { NsJsonSchemaForm } from '@antv/xflow'\\nimport { XFlow, XFlowCanvas, JsonSchemaForm, createGraphConfig } from '@antv/xflow'\\nimport { controlMapService, ControlShapeEnum } from './custom-shapes'\\nimport { onLoad } from './graph-config'\\nimport '@antv/xflow/dist/index.css'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nnamespace NsJsonForm {\\n  /** \u6839\u636E\u9009\u4E2D\u7684\u8282\u70B9\u66F4\u65B0formSchema */\\n  export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async args => {\\n    const { targetData } = args\\n    console.log(\`formSchemaService args:\`, args)\\n    if (!targetData) {\\n      return {\\n        tabs: [\\n          {\\n            /** Tab\u7684title */\\n            name: '\u753B\u5E03\u914D\u7F6E',\\n            groups: [\\n              {\\n                name: 'group1',\\n                controls: [\\n                  {\\n                    name: 'link',\\n                    label: '\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684Shape',\\n                    shape: ControlShapeEnum.LINK_SHAPE,\\n                  },\\n                  {\\n                    name: 'graph-json',\\n                    label: '\u81EA\u5B9A\u4E49Shape: \u5C55\u793AGraph\u7684JSON\u6570\u636E',\\n                    shape: ControlShapeEnum.EDITOR_SHAPE,\\n                  },\\n                ],\\n              },\\n            ],\\n          },\\n        ],\\n      }\\n    }\\n\\n    return {\\n      /** \u914D\u7F6E\u4E00\u4E2ATab */\\n      tabs: [\\n        {\\n          /** Tab\u7684title */\\n          name: '\u8282\u70B9\u914D\u7F6E',\\n          groups: [],\\n        },\\n      ],\\n    }\\n  }\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 290 }} />\\n      <JsonSchemaForm\\n        controlMapService={controlMapService}\\n        formSchemaService={NsJsonForm.formSchemaService}\\n        footerPosition={{ bottom: 0, left: 0, right: 0, height: 0 }}\\n        position={{ top: 0, bottom: 0, right: 0, width: 290 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-shape/custom-shapes/index.tsx?dumi-raw-code
/* harmony default export */ var custom_shapesdumi_raw_code = ("import type { NsJsonSchemaForm } from '@antv/xflow'\\nimport { EditorShape } from './custom-editor'\\nimport { LinkShape } from './custom-link'\\n\\n/** \u81EA\u5B9A\u4E49form\u63A7\u4EF6 */\\nexport enum ControlShapeEnum {\\n  'EDITOR_SHAPE' = 'EDITOR',\\n  'LINK_SHAPE' = 'LINKSHAPE',\\n}\\n\\nexport const controlMapService: NsJsonSchemaForm.IControlMapService = controlMap => {\\n  controlMap.set(ControlShapeEnum.EDITOR_SHAPE, EditorShape)\\n  controlMap.set(ControlShapeEnum.LINK_SHAPE, LinkShape)\\n  return controlMap\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-shape/custom-shapes/custom-editor.tsx?dumi-raw-code
/* harmony default export */ var custom_editordumi_raw_code = ("import type { NsJsonSchemaForm, NsGraphCmd } from '@antv/xflow'\\nimport { useXFlowApp, MODELS, XFlowGraphCommands, FormItemWrapper } from '@antv/xflow'\\nimport { Form, Input } from 'antd'\\nimport React from 'react'\\n\\ninterface IEditorProps extends NsJsonSchemaForm.IFormItemProps {\\n  controlSchema: NsJsonSchemaForm.IControlSchema\\n  placeholder?: string\\n  disabled: boolean\\n}\\n\\nconst Editor: React.FC<IEditorProps> = props => {\\n  const { placeholder, disabled, onChange, value } = props\\n  const { commandService, modelService } = useXFlowApp()\\n  React.useEffect(() => {\\n    commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(\\n      XFlowGraphCommands.SAVE_GRAPH_DATA.id,\\n      {\\n        saveGraphDataService: async (meta, graph) => {\\n          /** \u5F53\u524D\u9009\u4E2D\u8282\u70B9\u6570\u636E */\\n          const nodes = await MODELS.SELECTED_NODES.useValue(modelService)\\n          console.log(graph)\\n          /** \u62FF\u5230\u6570\u636E\uFF0C\u89E6\u53D1onChange*/\\n          onChange(JSON.stringify(graph))\\n          return { err: null, data: graph, meta }\\n        },\\n      },\\n    )\\n  })\\n\\n  return <Input.TextArea value={value} placeholder={placeholder} disabled={disabled} rows={10} />\\n}\\n\\nexport const EditorShape: React.FC<NsJsonSchemaForm.IControlProps> = props => {\\n  const { controlSchema } = props\\n  const { required, tooltip, extra, name, label, placeholder } = controlSchema\\n\\n  return (\\n    <FormItemWrapper schema={controlSchema}>\\n      {({ disabled, hidden, initialValue }) => {\\n        return (\\n          <Form.Item\\n            name={name}\\n            label={label}\\n            initialValue={initialValue}\\n            tooltip={tooltip}\\n            extra={extra}\\n            required={required}\\n            hidden={hidden}\\n          >\\n            {/* \u8FD9\u91CC\u7684\u7EC4\u4EF6\u53EF\u4EE5\u62FF\u5230onChange\u548Cvalue */}\\n            <Editor controlSchema={controlSchema} placeholder={placeholder} disabled={disabled} />\\n          </Form.Item>\\n        )\\n      }}\\n    </FormItemWrapper>\\n  )\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-shape/custom-shapes/custom-link.tsx?dumi-raw-code
/* harmony default export */ var custom_linkdumi_raw_code = ("import type { NsJsonSchemaForm } from '@antv/xflow'\\nimport React from 'react'\\n\\nexport const LinkShape: React.FC<NsJsonSchemaForm.IControlProps> = props => {\\n  const { controlSchema } = props\\n  return (\\n    <div style={{ padding: '8px 0px', marginBottom: '8px' }}>\\n      <a href={controlSchema.value as string} target=\\"_blank\\">\\n        {controlSchema.label}\\n      </a>\\n    </div>\\n  )\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-shape/graph-config.tsx?dumi-raw-code
/* harmony default export */ var custom_shape_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-shape/mock.ts?dumi-raw-code
/* harmony default export */ var custom_shape_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-shape/index.less?dumi-raw-code
var demos_custom_shapedumi_raw_code = __webpack_require__("ir7f");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/target-type/index.tsx?dumi-raw-code
/* harmony default export */ var target_typedumi_raw_code = ("import React from 'react'\\nimport type { NsNodeCmd, NsEdgeCmd, NsGraph } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  XFlowCanvas,\\n  JsonSchemaForm,\\n  createGraphConfig,\\n  NsJsonSchemaForm,\\n  XFlowNodeCommands,\\n  XFlowEdgeCommands,\\n} from '@antv/xflow'\\nimport { set } from 'lodash'\\nimport { onLoad } from './graph-config'\\nimport '@antv/xflow/dist/index.css'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nnamespace NsJsonForm {\\n  /** ControlShape\u7684Enum */\\n  const { ControlShape } = NsJsonSchemaForm\\n\\n  /** \u4FDD\u5B58form\u7684values */\\n  export const formValueUpdateService: NsJsonSchemaForm.IFormValueUpdateService = async args => {\\n    const { values, commandService, targetData } = args\\n    const updateNode = (node: NsGraph.INodeConfig) => {\\n      return commandService.executeCommand<NsNodeCmd.UpdateNode.IArgs>(\\n        XFlowNodeCommands.UPDATE_NODE.id,\\n        { nodeConfig: node },\\n      )\\n    }\\n    const updateEdge = (edge: NsGraph.IEdgeConfig) => {\\n      return commandService.executeCommand<NsEdgeCmd.UpdateEdge.IArgs>(\\n        XFlowEdgeCommands.UPDATE_EDGE.id,\\n        { edgeConfig: edge },\\n      )\\n    }\\n    const data = {\\n      ...targetData,\\n    }\\n    values.forEach(val => {\\n      set(data, val.name, val.value)\\n    })\\n    console.log('formValueUpdateService  values:', values, data)\\n    if (args.targetType === 'edge') {\\n      updateEdge(data as NsGraph.IEdgeConfig)\\n    } else if (args.targetType === 'node') {\\n      updateNode(data as NsGraph.INodeConfig)\\n    }\\n  }\\n\\n  /** \u6839\u636E\u9009\u4E2D\u7684\u8282\u70B9\u66F4\u65B0formSchema */\\n  export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async args => {\\n    const { targetData, targetType } = args\\n    console.log(\`formSchemaService args:\`, args)\\n    if (!targetData) {\\n      return {\\n        tabs: [\\n          {\\n            /** Tab\u7684title */\\n            name: '\u753B\u5E03\u914D\u7F6E',\\n            groups: [],\\n          },\\n        ],\\n      }\\n    }\\n    if (targetType === 'edge') {\\n      return {\\n        /** \u914D\u7F6E\u4E00\u4E2ATab */\\n        tabs: [\\n          {\\n            /** Tab\u7684title */\\n            name: '\u8FB9\u914D\u7F6E',\\n            groups: [\\n              {\\n                name: 'group1',\\n                controls: [\\n                  {\\n                    name: 'label',\\n                    label: 'Edge Label',\\n                    shape: ControlShape.INPUT,\\n                    value: targetData.label,\\n                  },\\n                ],\\n              },\\n            ],\\n          },\\n        ],\\n      }\\n    }\\n\\n    return {\\n      /** \u914D\u7F6E\u4E00\u4E2ATab */\\n      tabs: [\\n        {\\n          /** Tab\u7684title */\\n          name: '\u8282\u70B9\u914D\u7F6E',\\n          groups: [\\n            {\\n              name: 'group1',\\n              controls: [\\n                {\\n                  name: 'label',\\n                  label: '\u8282\u70B9Label',\\n                  shape: ControlShape.INPUT,\\n                  value: targetData.label,\\n                },\\n                {\\n                  name: 'x',\\n                  label: 'x',\\n                  shape: ControlShape.FLOAT,\\n                  value: targetData.x,\\n                },\\n                {\\n                  name: 'y',\\n                  label: 'y',\\n                  shape: ControlShape.FLOAT,\\n                  value: targetData.y,\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n      ],\\n    }\\n  }\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 290 }} />\\n      <JsonSchemaForm\\n        targetType={['node', 'edge', 'canvas']}\\n        formSchemaService={NsJsonForm.formSchemaService}\\n        formValueUpdateService={NsJsonForm.formValueUpdateService}\\n        position={{ top: 0, bottom: 0, right: 0, width: 290 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/target-type/graph-config.tsx?dumi-raw-code
/* harmony default export */ var target_type_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/target-type/mock.ts?dumi-raw-code
/* harmony default export */ var target_type_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/target-type/index.less?dumi-raw-code
var demos_target_typedumi_raw_code = __webpack_require__("rhWt");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-render/index.tsx?dumi-raw-code
/* harmony default export */ var custom_renderdumi_raw_code = ("import React from 'react'\\nimport type { NsNodeCmd, NsGraph } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  XFlowCanvas,\\n  JsonSchemaForm,\\n  createGraphConfig,\\n  NsJsonSchemaForm,\\n  XFlowNodeCommands,\\n} from '@antv/xflow'\\nimport { set } from 'lodash'\\nimport { onLoad } from './graph-config'\\nimport '@antv/xflow/dist/index.css'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nnamespace NsJsonForm {\\n  /** ControlShape\u7684Enum */\\n  const { ControlShape } = NsJsonSchemaForm\\n\\n  /** \u4FDD\u5B58form\u7684values */\\n  export const formValueUpdateService: NsJsonSchemaForm.IFormValueUpdateService = async args => {\\n    const { values, commandService, targetData } = args\\n    const updateNode = (node: NsGraph.INodeConfig) => {\\n      return commandService.executeCommand<NsNodeCmd.UpdateNode.IArgs>(\\n        XFlowNodeCommands.UPDATE_NODE.id,\\n        { nodeConfig: node },\\n      )\\n    }\\n    console.log('formValueUpdateService  values:', values)\\n    const nodeConfig: NsGraph.INodeConfig = {\\n      ...targetData,\\n    }\\n    values.forEach(val => {\\n      set(nodeConfig, val.name, val.value)\\n    })\\n    updateNode(nodeConfig)\\n  }\\n\\n  export const getCustomRenderComponent: NsJsonSchemaForm.ICustomRender = (\\n    targetType,\\n    targetData,\\n  ) => {\\n    console.log(targetType, targetData)\\n    if (targetType === 'node') {\\n      return () => (\\n        <div className=\\"custom-form-component\\"> node: {targetData.label} custom componnet </div>\\n      )\\n    }\\n    if (targetType === 'canvas') {\\n      return () => <div className=\\"custom-form-component\\"> canvas custom componnet </div>\\n    }\\n  }\\n\\n  /** \u6839\u636E\u9009\u4E2D\u7684\u8282\u70B9\u66F4\u65B0formSchema */\\n  export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async args => {\\n    const { targetData } = args\\n    console.log(\`formSchemaService args:\`, args)\\n    if (!targetData) {\\n      return {\\n        tabs: [\\n          {\\n            /** Tab\u7684title */\\n            name: '\u753B\u5E03\u914D\u7F6E',\\n            groups: [],\\n          },\\n        ],\\n      }\\n    }\\n\\n    return {\\n      /** \u914D\u7F6E\u4E00\u4E2ATab */\\n      tabs: [\\n        {\\n          /** Tab\u7684title */\\n          name: '\u8282\u70B9\u914D\u7F6E',\\n          groups: [\\n            {\\n              name: 'group1',\\n              controls: [\\n                {\\n                  name: 'label',\\n                  label: '\u8282\u70B9Label',\\n                  shape: ControlShape.INPUT,\\n                  value: targetData.label,\\n                },\\n                {\\n                  name: 'x',\\n                  label: 'x',\\n                  shape: ControlShape.FLOAT,\\n                  value: targetData.x,\\n                },\\n                {\\n                  name: 'y',\\n                  label: 'y',\\n                  shape: ControlShape.FLOAT,\\n                  value: targetData.y,\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n      ],\\n    }\\n  }\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 290 }} />\\n      <JsonSchemaForm\\n        formSchemaService={NsJsonForm.formSchemaService}\\n        getCustomRenderComponent={NsJsonForm.getCustomRenderComponent}\\n        position={{ top: 0, bottom: 0, right: 0, width: 290 }}\\n      />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-render/graph-config.tsx?dumi-raw-code
/* harmony default export */ var custom_render_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-render/mock.ts?dumi-raw-code
/* harmony default export */ var custom_render_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-config-form/demos/custom-render/index.less?dumi-raw-code
var demos_custom_renderdumi_raw_code = __webpack_require__("1A75");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-keybinding/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var canvas_keybinding_demos_basicdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  XFlowCanvas,\\n  KeyBindings,\\n  XFlowGraphCommands,\\n  createGraphConfig,\\n  createKeybindingConfig,\\n} from '@antv/xflow'\\nimport '@antv/xflow/dist/index.css'\\nimport { getGraphData } from './mock'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\n/**  keybindings  */\\nexport const useKeybindingConfig = createKeybindingConfig(config => {\\n  config.setKeybindingFunc(reg => {\\n    return reg.registerKeybinding([\\n      {\\n        id: 'basic',\\n        keybinding: ['command+c', 'ctrl+c'],\\n        callback: async function (item, modelService, cmd, e) {\\n          console.log('keyboard event is triggered', e)\\n        },\\n      },\\n    ])\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const keybindingConfig = useKeybindingConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    // \u8BA1\u7B97\u5E03\u5C40\\n    const res = await app.executeCommand<\\n      NsGraphCmd.GraphLayout.IArgs,\\n      NsGraphCmd.GraphLayout.IResult\\n    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        /** \u5E03\u5C40\u65B9\u5411 */\\n        rankdir: 'TB',\\n        /** \u8282\u70B9\u95F4\u8DDD */\\n        nodesep: 60,\\n        /** \u5C42\u95F4\u8DDD */\\n        ranksep: 30,\\n      },\\n      graphData: getGraphData(),\\n    })\\n    const { graphData } = res.contextProvider().getResult()\\n    // render\\n    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData: graphData,\\n    })\\n    // \u5C45\u4E2D\\n    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n      factor: 'real',\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <KeyBindings config={keybindingConfig} />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-keybinding/demos/basic/mock.ts?dumi-raw-code
/* harmony default export */ var canvas_keybinding_demos_basic_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-keybinding/demos/basic/index.less?dumi-raw-code
var extension_components_canvas_keybinding_demos_basicdumi_raw_code = __webpack_require__("6Qid");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-keybinding/demos/command/index.tsx?dumi-raw-code
/* harmony default export */ var commanddumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsGraphCmd, NsEdgeCmd, NsNodeCmd } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  XFlowCanvas,\\n  KeyBindings,\\n  MODELS,\\n  XFlowGraphCommands,\\n  XFlowEdgeCommands,\\n  XFlowNodeCommands,\\n  createGraphConfig,\\n  createKeybindingConfig,\\n} from '@antv/xflow'\\nimport { getGraphData } from './mock'\\nimport './index.less'\\nimport type { Node, Edge } from '@antv/x6'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\n/**  keybindings  */\\nexport const useKeybindingConfig = createKeybindingConfig((config, getProps) => {\\n  config.setKeybindingFunc(reg => {\\n    return reg.registerKeybinding([\\n      {\\n        id: 'delete node or edge',\\n        keybinding: 'backspace',\\n        callback: async function (item, modelService, cmd, e) {\\n          const cells = await MODELS.SELECTED_CELLS.useValue(modelService)\\n          const nodes = cells.filter((cell): cell is Edge => cell.isEdge())\\n          const edges = cells.filter((cell): cell is Node => cell.isNode())\\n          // \u8C03\u7528\u5220\u9664Edge\u7684Command\\n          const delEdge = (cell: Edge) => {\\n            return cmd.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n              edgeConfig: { ...cell.getData(), id: cell.id },\\n            })\\n          }\\n          // \u8C03\u7528\u5220\u9664Node\u7684Command\\n          const delNode = (cell: Node) => {\\n            return cmd.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n              nodeConfig: {\\n                ...cell.getData(),\\n                id: cell.id,\\n              },\\n            })\\n          }\\n          if (cells.length === 0) {\\n            console.warn('\u6CA1\u6709\u9009\u4E2D\u7684\u8282\u70B9')\\n          }\\n          // \u5148\u5220\u9664edges\\n          await Promise.all(nodes.map(cell => delEdge(cell)))\\n          // \u5148\u5220\u9664nodes\\n          await Promise.all(edges.map(cell => delNode(cell)))\\n        },\\n      },\\n      {\\n        id: 'copy',\\n        keybinding: ['command+c', 'ctrl+c'],\\n        callback: async function (item, modelService, cmd, e) {\\n          e.preventDefault()\\n          console.log(item)\\n          cmd.executeCommand<\\n            NsGraphCmd.GraphCopySelection.IArgs,\\n            NsGraphCmd.GraphCopySelection.IResult\\n          >(XFlowGraphCommands.GRAPH_COPY.id, {})\\n        },\\n      },\\n      {\\n        id: 'paste',\\n        keybinding: ['command+v', 'ctrl+v'],\\n        callback: async function (item, modelService, cmd, e) {\\n          e.preventDefault()\\n          cmd.executeCommand<\\n            NsGraphCmd.GraphPasteSelection.IArgs,\\n            NsGraphCmd.GraphPasteSelection.IResult\\n          >(XFlowGraphCommands.GRAPH_PASTE.id, {})\\n        },\\n      },\\n    ])\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const keybindingConfig = useKeybindingConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    // \u8BA1\u7B97\u5E03\u5C40\\n    const res = await app.executeCommand<\\n      NsGraphCmd.GraphLayout.IArgs,\\n      NsGraphCmd.GraphLayout.IResult\\n    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        /** \u5E03\u5C40\u65B9\u5411 */\\n        rankdir: 'TB',\\n        /** \u8282\u70B9\u95F4\u8DDD */\\n        nodesep: 60,\\n        /** \u5C42\u95F4\u8DDD */\\n        ranksep: 30,\\n      },\\n      graphData: getGraphData(),\\n    })\\n    const { graphData } = res.contextProvider().getResult()\\n    // render\\n    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData: graphData,\\n    })\\n    // \u5C45\u4E2D\\n    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n      factor: 'real',\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <KeyBindings config={keybindingConfig} />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-keybinding/demos/command/mock.ts?dumi-raw-code
/* harmony default export */ var command_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-keybinding/demos/command/index.less?dumi-raw-code
var demos_commanddumi_raw_code = __webpack_require__("6LG1");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var canvas_mini_map_demos_basicdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  createGraphConfig,\\n  XFlowCanvas,\\n  CanvasMiniMap,\\n  XFlowGraphCommands,\\n} from '@antv/xflow'\\nimport { getGraphData } from './mock'\\nimport '@antv/xflow/dist/index.css'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    // \u8BA1\u7B97\u5E03\u5C40\\n    const res = await app.executeCommand<\\n      NsGraphCmd.GraphLayout.IArgs,\\n      NsGraphCmd.GraphLayout.IResult\\n    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        /** \u5E03\u5C40\u65B9\u5411 */\\n        rankdir: 'TB',\\n        /** \u8282\u70B9\u95F4\u8DDD */\\n        nodesep: 60,\\n        /** \u5C42\u95F4\u8DDD */\\n        ranksep: 30,\\n      },\\n      graphData: getGraphData(),\\n    })\\n    const { graphData } = res.contextProvider().getResult()\\n    // render\\n    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData: graphData,\\n    })\\n    // \u5C45\u4E2D\\n    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n      factor: 'real',\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasMiniMap position={{ top: 12, left: 12 }} />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/basic/mock.ts?dumi-raw-code
/* harmony default export */ var canvas_mini_map_demos_basic_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/basic/index.less?dumi-raw-code
var extension_components_canvas_mini_map_demos_basicdumi_raw_code = __webpack_require__("HoN3");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/color/index.tsx?dumi-raw-code
/* harmony default export */ var colordumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  createGraphConfig,\\n  XFlowCanvas,\\n  CanvasMiniMap,\\n  XFlowGraphCommands,\\n} from '@antv/xflow'\\nimport { getGraphData } from './mock'\\nimport '@antv/xflow/dist/index.css'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    // \u8BA1\u7B97\u5E03\u5C40\\n    const res = await app.executeCommand<\\n      NsGraphCmd.GraphLayout.IArgs,\\n      NsGraphCmd.GraphLayout.IResult\\n    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        /** \u5E03\u5C40\u65B9\u5411 */\\n        rankdir: 'TB',\\n        /** \u8282\u70B9\u95F4\u8DDD */\\n        nodesep: 60,\\n        /** \u5C42\u95F4\u8DDD */\\n        ranksep: 30,\\n      },\\n      graphData: getGraphData(),\\n    })\\n    const { graphData } = res.contextProvider().getResult()\\n    // render\\n    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData: graphData,\\n    })\\n    // \u5C45\u4E2D\\n    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n      factor: 'real',\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasMiniMap\\n          position={{ top: 12, left: 12 }}\\n          nodeFillColor=\\"#873bf4\\"\\n          borderColor=\\"#873bf4\\"\\n          handlerColor=\\"#873bf4\\"\\n        />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/color/mock.ts?dumi-raw-code
/* harmony default export */ var color_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/color/index.less?dumi-raw-code
var demos_colordumi_raw_code = __webpack_require__("ls6G");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/graph-options/index.tsx?dumi-raw-code
/* harmony default export */ var graph_optionsdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  createGraphConfig,\\n  XFlowCanvas,\\n  CanvasMiniMap,\\n  XFlowGraphCommands,\\n} from '@antv/xflow'\\nimport { getGraphData } from './mock'\\nimport '@antv/xflow/dist/index.css'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    // \u8BA1\u7B97\u5E03\u5C40\\n    const res = await app.executeCommand<\\n      NsGraphCmd.GraphLayout.IArgs,\\n      NsGraphCmd.GraphLayout.IResult\\n    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        /** \u5E03\u5C40\u65B9\u5411 */\\n        rankdir: 'TB',\\n        /** \u8282\u70B9\u95F4\u8DDD */\\n        nodesep: 60,\\n        /** \u5C42\u95F4\u8DDD */\\n        ranksep: 30,\\n      },\\n      graphData: getGraphData(),\\n    })\\n    const { graphData } = res.contextProvider().getResult()\\n    // render\\n    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData: graphData,\\n    })\\n    // \u5C45\u4E2D\\n    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n      factor: 'real',\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasMiniMap\\n          position={{ top: 12, left: 12 }}\\n          minimapOptions={{ width: 200, height: 200 }}\\n        />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/graph-options/mock.ts?dumi-raw-code
/* harmony default export */ var graph_options_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-mini-map/demos/graph-options/index.less?dumi-raw-code
var demos_graph_optionsdumi_raw_code = __webpack_require__("K7oc");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var canvas_node_panel_demos_basicdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, NodeTreePanel } from '@antv/xflow'\\nimport { onLoad, useGraphConfig } from './graph-config'\\nimport * as TreeConfig from './dnd-tree-config'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n\\nconst XFlowDemo: React.FC<{}> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <NodeTreePanel\\n        header={<h4 className=\\"dnd-panel-header\\"> \u7EC4\u4EF6\u9762\u677F </h4>}\\n        footer={<div> Foorter </div>}\\n        onNodeDrop={TreeConfig.onNodeDrop}\\n        treeDataService={TreeConfig.treeDataService}\\n        position={{ top: 0, bottom: 0, left: 0, width: 290 }}\\n      />\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 290, right: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/basic/graph-config.tsx?dumi-raw-code
/* harmony default export */ var basic_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-dnd-node\\"> {props.data.label} </div>\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/basic/mock.ts?dumi-raw-code
/* harmony default export */ var canvas_node_panel_demos_basic_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/basic/dnd-tree-config.tsx?dumi-raw-code
/* harmony default export */ var dnd_tree_configdumi_raw_code = ("import type { NsNodeTreePanel } from '@antv/xflow'\\nimport React from 'react'\\nimport { XFlowConstants } from '@antv/xflow'\\nimport * as commandUtils from './comannd-utils'\\n\\nexport const DND_RENDER_ID = 'DND_RENDER_ID'\\n\\nexport const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (\\n  nodeConfig,\\n  commandService,\\n  modelService,\\n) => {\\n  commandUtils.addNode(commandService, nodeConfig)\\n}\\n\\nexport const treeDataService: NsNodeTreePanel.ITreeDataService = async (meta, modelService) => {\\n  return [\\n    {\\n      id: '1',\\n      label: '\u6570\u636E\u8BFB\u5199',\\n      parentId: '',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '2',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF61',\\n      parentId: '1',\\n      width: 190,\\n      height: 32,\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n      popoverContent: <div> test </div>,\\n    },\\n    {\\n      id: '3',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF62',\\n      parentId: '1',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '4',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF63',\\n      parentId: '1',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '5',\\n      label: '\u6570\u636E\u52A0\u5DE5',\\n      parentId: '',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '6',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF64',\\n      parentId: '5',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '7',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF65',\\n      parentId: '5',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '8',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF66',\\n      parentId: '5',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '9',\\n      label: '\u6A21\u578B\u8BAD\u7EC3',\\n      parentId: '',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '10',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF67',\\n      parentId: '9',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '11',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF68',\\n      parentId: '9',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '12',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF69',\\n      parentId: '9',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n  ]\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/basic/comannd-utils.tsx?dumi-raw-code
/* harmony default export */ var comannd_utilsdumi_raw_code = ("import type { NsNodeCmd, IGraphCommandService, NsGraph } from '@antv/xflow'\\nimport { XFlowNodeCommands, uuidv4 } from '@antv/xflow'\\n\\nexport const addNode = (cmd: IGraphCommandService, nodeConfig: NsGraph.INodeConfig) => {\\n  return cmd.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n    nodeConfig: { ...nodeConfig, id: uuidv4(), width: 190, height: 32 },\\n  })\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/basic/index.less?dumi-raw-code
var extension_components_canvas_node_panel_demos_basicdumi_raw_code = __webpack_require__("AHxr");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/search/index.tsx?dumi-raw-code
/* harmony default export */ var searchdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, NodeTreePanel } from '@antv/xflow'\\nimport { onLoad, useGraphConfig } from './graph-config'\\nimport * as TreeConfig from './dnd-tree-config'\\nimport { searchService } from './dnd-tree-config'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n\\nconst XFlowDemo: React.FC<{}> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <NodeTreePanel\\n        searchService={searchService}\\n        onNodeDrop={TreeConfig.onNodeDrop}\\n        treeDataService={TreeConfig.treeDataService}\\n        position={{ top: 0, bottom: 0, left: 0, width: 290 }}\\n      />\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 290, right: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/search/graph-config.tsx?dumi-raw-code
/* harmony default export */ var search_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-dnd-node\\"> {props.data.label} </div>\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/search/mock.ts?dumi-raw-code
/* harmony default export */ var search_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/search/dnd-tree-config.tsx?dumi-raw-code
/* harmony default export */ var search_dnd_tree_configdumi_raw_code = ("import type { NsNodeTreePanel } from '@antv/xflow'\\nimport { XFlowConstants } from '@antv/xflow'\\nimport * as commandUtils from './comannd-utils'\\n\\nexport const DND_RENDER_ID = 'DND_RENDER_ID'\\n\\nexport const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (\\n  nodeConfig,\\n  commandService,\\n  modelService,\\n) => {\\n  commandUtils.addNode(commandService, nodeConfig)\\n}\\n\\nexport const treeDataService: NsNodeTreePanel.ITreeDataService = async (meta, modelService) => {\\n  return [\\n    {\\n      id: '1',\\n      label: '\u6570\u636E\u8BFB\u5199',\\n      parentId: '',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '2',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF61',\\n      parentId: '1',\\n      width: 190,\\n      height: 32,\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n      popoverContent: <div> test </div>,\\n    },\\n    {\\n      id: '3',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF62',\\n      parentId: '1',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '4',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF63',\\n      parentId: '1',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '5',\\n      label: '\u6570\u636E\u52A0\u5DE5',\\n      parentId: '',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '6',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF64',\\n      parentId: '5',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '7',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF65',\\n      parentId: '5',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '8',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF66',\\n      parentId: '5',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '9',\\n      label: '\u6A21\u578B\u8BAD\u7EC3',\\n      parentId: '',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '10',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF67',\\n      parentId: '9',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '11',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF68',\\n      parentId: '9',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n    {\\n      id: '12',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF69',\\n      parentId: '9',\\n      renderKey: XFlowConstants.XFLOW_DEFAULT_NODE,\\n    },\\n  ]\\n}\\n\\nexport const searchService: NsNodeTreePanel.ISearchService = async (\\n  treeNodeList: NsNodeTreePanel.ITreeNode[] = [],\\n  keyword: string,\\n) => {\\n  const list = treeNodeList.filter(i => i.isDirectory || i.label.includes(keyword))\\n  console.log(list, keyword, treeNodeList)\\n  return list\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/search/comannd-utils.tsx?dumi-raw-code
/* harmony default export */ var search_comannd_utilsdumi_raw_code = ("import type { NsNodeCmd, IGraphCommandService, NsGraph } from '@antv/xflow'\\nimport { XFlowNodeCommands, uuidv4 } from '@antv/xflow'\\n\\nexport const addNode = (cmd: IGraphCommandService, nodeConfig: NsGraph.INodeConfig) => {\\n  return cmd.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n    nodeConfig: { ...nodeConfig, id: uuidv4(), width: 190, height: 32 },\\n  })\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-node-panel/demos/search/index.less?dumi-raw-code
var demos_searchdumi_raw_code = __webpack_require__("xmj0");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-scale-toolbar/demos/index.tsx?dumi-raw-code
/* harmony default export */ var canvas_scale_toolbar_demosdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, CanvasScaleToolbar } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    // \u8BA1\u7B97\u5E03\u5C40\\n    const res = await app.executeCommand<\\n      NsGraphCmd.GraphLayout.IArgs,\\n      NsGraphCmd.GraphLayout.IResult\\n    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        /** \u5E03\u5C40\u65B9\u5411 */\\n        rankdir: 'TB',\\n        /** \u8282\u70B9\u95F4\u8DDD */\\n        nodesep: 60,\\n        /** \u5C42\u95F4\u8DDD */\\n        ranksep: 30,\\n      },\\n      graphData: getGraphData(),\\n    })\\n    const { graphData } = res.contextProvider().getResult()\\n    // render\\n    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData: graphData,\\n    })\\n    // \u5C45\u4E2D\\n    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n      factor: 'real',\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        {/* \u76F8\u5BF9\u4E8ECanvas\u753B\u5E03\u5B9A\u4F4D */}\\n        <CanvasScaleToolbar position={{ top: 12, left: 12 }} />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-scale-toolbar/demos/mock.ts?dumi-raw-code
/* harmony default export */ var canvas_scale_toolbar_demos_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#909090',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-scale-toolbar/demos/index.less?dumi-raw-code
var extension_components_canvas_scale_toolbar_demosdumi_raw_code = __webpack_require__("1oFN");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-snapline/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var canvas_snapline_demos_basicdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  createGraphConfig,\\n  XFlowCanvas,\\n  CanvasSnapline,\\n  XFlowGraphCommands,\\n} from '@antv/xflow'\\nimport { getGraphData } from './mock'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    // \u8BA1\u7B97\u5E03\u5C40\\n    const res = await app.executeCommand<\\n      NsGraphCmd.GraphLayout.IArgs,\\n      NsGraphCmd.GraphLayout.IResult\\n    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        /** \u5E03\u5C40\u65B9\u5411 */\\n        rankdir: 'TB',\\n        /** \u8282\u70B9\u95F4\u8DDD */\\n        nodesep: 60,\\n        /** \u5C42\u95F4\u8DDD */\\n        ranksep: 30,\\n      },\\n      graphData: getGraphData(),\\n    })\\n    const { graphData } = res.contextProvider().getResult()\\n    // render\\n    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData: graphData,\\n    })\\n    // \u5C45\u4E2D\\n    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n      factor: 'real',\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasSnapline />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-snapline/demos/basic/mock.ts?dumi-raw-code
/* harmony default export */ var canvas_snapline_demos_basic_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-snapline/demos/basic/index.less?dumi-raw-code
var extension_components_canvas_snapline_demos_basicdumi_raw_code = __webpack_require__("BLUh");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-snapline/demos/color/index.tsx?dumi-raw-code
/* harmony default export */ var canvas_snapline_demos_colordumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport {\\n  XFlow,\\n  XFlowCanvas,\\n  CanvasSnapline,\\n  XFlowGraphCommands,\\n  createGraphConfig,\\n} from '@antv/xflow'\\nimport { getGraphData } from './mock'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    // \u8BA1\u7B97\u5E03\u5C40\\n    const res = await app.executeCommand<\\n      NsGraphCmd.GraphLayout.IArgs,\\n      NsGraphCmd.GraphLayout.IResult\\n    >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n      layoutType: 'dagre',\\n      layoutOptions: {\\n        type: 'dagre',\\n        /** \u5E03\u5C40\u65B9\u5411 */\\n        rankdir: 'TB',\\n        /** \u8282\u70B9\u95F4\u8DDD */\\n        nodesep: 60,\\n        /** \u5C42\u95F4\u8DDD */\\n        ranksep: 30,\\n      },\\n      graphData: getGraphData(),\\n    })\\n    const { graphData } = res.contextProvider().getResult()\\n    // render\\n    await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData: graphData,\\n    })\\n    // \u5C45\u4E2D\\n    await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n      factor: 'real',\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasSnapline color=\\"#873bf4\\" />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-snapline/demos/color/mock.ts?dumi-raw-code
/* harmony default export */ var demos_color_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-snapline/demos/color/index.less?dumi-raw-code
var extension_components_canvas_snapline_demos_colordumi_raw_code = __webpack_require__("77de");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var canvas_toolbar_demos_basicdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, CanvasToolbar } from '@antv/xflow'\\nimport { useToolbarConfig } from './toolbar-config'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const toolbarConfig = useToolbarConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    console.log(app)\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <CanvasToolbar\\n        layout=\\"horizontal\\"\\n        config={toolbarConfig}\\n        position={{ top: 0, left: 0, right: 0, height: 40 }}\\n      />\\n      <XFlowCanvas config={graphConfig} position={{ top: 40, bottom: 0, left: 0, right: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/basic/toolbar-config.tsx?dumi-raw-code
/* harmony default export */ var toolbar_configdumi_raw_code = ("import type { IToolbarItemOptions } from '@antv/xflow'\\nimport { createToolbarConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands, XFlowNodeCommands, IconStore } from '@antv/xflow'\\nimport { SaveOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'\\nimport { message } from 'antd'\\nimport type { NsGraphCmd, NsNodeCmd } from '@antv/xflow'\\n\\nnamespace NsConfig {\\n  /** \u6CE8\u518Cicon \u7C7B\u578B */\\n  IconStore.set('PlusCircleOutlined', PlusCircleOutlined)\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('SaveOutlined', SaveOutlined)\\n  /** nodeId */\\n  let id = 1\\n  /** \u83B7\u53D6toobar\u914D\u7F6E\u9879 */\\n  export const getToolbarItems = async () => {\\n    const toolbarGroup1: IToolbarItemOptions[] = []\\n    const toolbarGroup2: IToolbarItemOptions[] = []\\n    /** \u4FDD\u5B58\u6570\u636E */\\n    toolbarGroup1.push({\\n      id: XFlowNodeCommands.ADD_NODE.id,\\n      iconName: 'PlusCircleOutlined',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9',\\n      onClick: async ({ commandService }) => {\\n        const nodeName = \`Node-\${id}\`\\n        commandService.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n          nodeConfig: {\\n            id: nodeName,\\n            label: nodeName,\\n            x: 100 + id * 5,\\n            y: 50 + id * 5,\\n            width: 160,\\n            height: 32,\\n          },\\n        })\\n        id += 1\\n      },\\n    })\\n    toolbarGroup1.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id,\\n      iconName: 'DeleteOutlined',\\n      tooltip: '\u5220\u9664\u8282\u70B9',\\n      isEnabled: false,\\n    })\\n\\n    /** \u4FDD\u5B58\u6570\u636E */\\n    toolbarGroup2.push({\\n      id: XFlowGraphCommands.SAVE_GRAPH_DATA.id,\\n      iconName: 'SaveOutlined',\\n      tooltip: '\u4FDD\u5B58\u6570\u636E',\\n      onClick: async ({ commandService }) => {\\n        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(\\n          XFlowGraphCommands.SAVE_GRAPH_DATA.id,\\n          {\\n            saveGraphDataService: async (meta, data) => {\\n              console.log(data)\\n              message.success('nodes count:' + data.nodes.length)\\n            },\\n          },\\n        )\\n      },\\n    })\\n\\n    return [\\n      { name: 'nodeGroup', items: toolbarGroup1 },\\n      { name: 'graphGroup', items: toolbarGroup2 },\\n    ]\\n  }\\n}\\n\\n/** wrap\u51FA\u4E00\u4E2Ahook */\\nexport const useToolbarConfig = createToolbarConfig(toolbarConfig => {\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async toolbarModel => {\\n    const toolbarItems = await NsConfig.getToolbarItems()\\n    toolbarModel.setValue(toolbar => {\\n      toolbar.mainGroups = toolbarItems\\n    })\\n  })\\n})");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/basic/index.less?dumi-raw-code
var extension_components_canvas_toolbar_demos_basicdumi_raw_code = __webpack_require__("FKPX");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-render-item/index.tsx?dumi-raw-code
/* harmony default export */ var toolbar_render_itemdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, CanvasToolbar } from '@antv/xflow'\\nimport { useToolbarConfig } from './toolbar-config'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const toolbarConfig = useToolbarConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    console.log(app)\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <CanvasToolbar\\n        layout=\\"horizontal\\"\\n        config={toolbarConfig}\\n        position={{ top: 0, left: 0, right: 0, height: 40 }}\\n      />\\n      <XFlowCanvas config={graphConfig} position={{ top: 40, bottom: 0, left: 0, right: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-render-item/toolbar-config.tsx?dumi-raw-code
/* harmony default export */ var toolbar_render_item_toolbar_configdumi_raw_code = ("import type { IToolbarItemOptions } from '@antv/xflow'\\nimport { XFlowNodeCommands, createToolbarConfig } from '@antv/xflow'\\nimport { IconStore } from '@antv/xflow'\\nimport { SaveOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'\\nimport { Popconfirm } from 'antd'\\nimport React from 'react'\\n\\nexport namespace NSToolbarConfig {\\n  /** \u6CE8\u518Cicon \u7C7B\u578B */\\n  IconStore.set('PlusCircleOutlined', PlusCircleOutlined)\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('SaveOutlined', SaveOutlined)\\n\\n  export const getToolbarItems = async () => {\\n    const textToolbarGroup: IToolbarItemOptions[] = []\\n    const iconToolbarGroup: IToolbarItemOptions[] = []\\n    /** \u4FDD\u5B58\u6570\u636E */\\n    textToolbarGroup.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id + 'text only',\\n      text: '\u6DFB\u52A0\u8282\u70B9',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9\uFF0Ctext=\u6DFB\u52A0\u8282\u70B9, group1',\\n    })\\n    textToolbarGroup.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id + 'text',\\n      iconName: 'PlusCircleOutlined',\\n      text: '\u6DFB\u52A0\u8282\u70B9',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9\uFF0Ctext + iconName, group1 ',\\n    })\\n    iconToolbarGroup.push({\\n      id: XFlowNodeCommands.ADD_NODE.id + 'iconName',\\n      iconName: 'PlusCircleOutlined',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9\uFF0C\u53EA\u914D\u7F6E iconName=PlusCircleOutlined, group2  ',\\n    })\\n    iconToolbarGroup.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id + 'tooltip',\\n      iconName: 'PlusCircleOutlined',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9\uFF0C tooltip \u914D\u7F6E, group2',\\n    })\\n    iconToolbarGroup.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id + 'disabled',\\n      iconName: 'PlusCircleOutlined',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9\uFF0C isEnabled=false, group2',\\n      isEnabled: false,\\n    })\\n    iconToolbarGroup.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id + 'visible',\\n      iconName: 'PlusCircleOutlined',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9 isVisible=true, group2',\\n      isVisible: false,\\n    })\\n    iconToolbarGroup.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id + 'active',\\n      iconName: 'PlusCircleOutlined',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9 active=true, group2',\\n      active: true,\\n    })\\n    iconToolbarGroup.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id + 'custom render',\\n      iconName: 'PlusCircleOutlined',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9 \u81EA\u5B9A\u4E49\u6E32\u67D3\u6DFB\u52A0\u4E00\u4E2APopconfirm, group2',\\n      onClick: args => {\\n        console.log('toolbar onClick args', args)\\n      },\\n      render: props => {\\n        return (\\n          <Popconfirm\\n            title=\\"are you sure\\"\\n            onConfirm={() => {\\n              props.onClick()\\n            }}\\n          >\\n            {props.children}\\n          </Popconfirm>\\n        )\\n      },\\n    })\\n\\n    return [\\n      { name: 'textToolbarGroup', items: textToolbarGroup },\\n      { name: 'iconToolbarGroup', items: iconToolbarGroup },\\n    ]\\n  }\\n  export const getExtraToolbarItems = async () => {\\n    const toolbarGroup: IToolbarItemOptions[] = []\\n    /** \u4FDD\u5B58\u6570\u636E */\\n    toolbarGroup.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id + 'text only',\\n      text: '\u6DFB\u52A0\u8282\u70B9',\\n      tooltip: '\u6DFB\u52A0\u8282\u70B9\uFF0C\u914D\u7F6EextraGroups',\\n    })\\n\\n    return [{ name: 'extra', items: toolbarGroup }]\\n  }\\n}\\nexport const useToolbarConfig = createToolbarConfig(toolbarConfig => {\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async toolbarModel => {\\n    const toolbarItems = await NSToolbarConfig.getToolbarItems()\\n    const extraToolbarItems = await NSToolbarConfig.getExtraToolbarItems()\\n    toolbarModel.setValue(toolbar => {\\n      toolbar.mainGroups = toolbarItems\\n      toolbar.extraGroups = extraToolbarItems\\n    })\\n  })\\n})");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-render-item/index.less?dumi-raw-code
var demos_toolbar_render_itemdumi_raw_code = __webpack_require__("5lFA");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-layout/index.tsx?dumi-raw-code
/* harmony default export */ var toolbar_layoutdumi_raw_code = ("import React from 'react'\\nimport { XFlow, createGraphConfig, XFlowCanvas, CanvasToolbar } from '@antv/xflow'\\nimport { useToolbarConfig1, useToolbarConfig2, useToolbarConfig3 } from './toolbar-config'\\nimport type { IAppLoad } from '@antv/xflow'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const toolbarConfig1 = useToolbarConfig1(props)\\n  const toolbarConfig2 = useToolbarConfig2(props)\\n  const toolbarConfig3 = useToolbarConfig3(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    console.log(app)\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <CanvasToolbar\\n        layout={'vertical'}\\n        config={toolbarConfig1}\\n        position={{ top: 48, left: 8, bottom: 48 }}\\n      />\\n      <CanvasToolbar\\n        layout=\\"horizontal\\"\\n        config={toolbarConfig2}\\n        position={{ top: 0, left: 0, right: 0, height: 40 }}\\n      />\\n      <CanvasToolbar\\n        layout={'horizontal-center'}\\n        config={toolbarConfig3}\\n        position={{ bottom: 0, left: 0, right: 0, height: 40 }}\\n      />\\n\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-layout/toolbar-config.tsx?dumi-raw-code
/* harmony default export */ var toolbar_layout_toolbar_configdumi_raw_code = ("import { createToolbarConfig } from '@antv/xflow'\\nimport { IconStore } from '@antv/xflow'\\nimport { PlusCircleOutlined } from '@ant-design/icons'\\n\\nIconStore.set('PlusCircleOutlined', PlusCircleOutlined)\\n\\nexport const useToolbarConfig1 = createToolbarConfig(toolbarConfig => {\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async toolbarModel => {\\n    toolbarModel.setValue(toolbar => {\\n      toolbar.mainGroups = [\\n        {\\n          name: 'main',\\n          items: [\\n            {\\n              id: '1',\\n              iconName: 'PlusCircleOutlined',\\n              tooltip: 'vertical',\\n            },\\n            {\\n              id: '2',\\n              iconName: 'PlusCircleOutlined',\\n              tooltip: 'vertical',\\n            },\\n          ],\\n        },\\n      ]\\n      toolbar.extraGroups = [\\n        {\\n          name: 'extra',\\n          items: [\\n            {\\n              id: '3',\\n              iconName: 'PlusCircleOutlined',\\n              tooltip: 'vertical',\\n            },\\n          ],\\n        },\\n      ]\\n    })\\n  })\\n})\\nexport const useToolbarConfig2 = createToolbarConfig(toolbarConfig => {\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async toolbarModel => {\\n    toolbarModel.setValue(toolbar => {\\n      toolbar.mainGroups = [\\n        {\\n          name: 'main',\\n          items: [\\n            {\\n              id: '1',\\n              text: '\u6DFB\u52A0\u8282\u70B9',\\n              iconName: 'PlusCircleOutlined',\\n              tooltip: 'horizontal',\\n            },\\n            {\\n              id: '2',\\n              text: '\u6DFB\u52A0\u8282\u70B9',\\n              iconName: 'PlusCircleOutlined',\\n              tooltip: 'horizontal',\\n            },\\n          ],\\n        },\\n      ]\\n      toolbar.extraGroups = [\\n        {\\n          name: 'extra',\\n          items: [\\n            {\\n              id: '3',\\n              iconName: 'PlusCircleOutlined',\\n              text: '\u6DFB\u52A0\u8282\u70B9',\\n              tooltip: '\u6DFB\u52A0\u8282\u70B9\uFF0C\u914D\u7F6EextraGroups',\\n            },\\n          ],\\n        },\\n      ]\\n    })\\n  })\\n})\\nexport const useToolbarConfig3 = createToolbarConfig(toolbarConfig => {\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async toolbarModel => {\\n    toolbarModel.setValue(toolbar => {\\n      toolbar.mainGroups = [\\n        {\\n          name: 'main',\\n          items: [\\n            {\\n              id: '1',\\n              text: '\u6DFB\u52A0\u8282\u70B9',\\n              iconName: 'PlusCircleOutlined',\\n              tooltip: 'horizontal-center',\\n            },\\n            {\\n              id: '2',\\n              text: '\u6DFB\u52A0\u8282\u70B9',\\n              iconName: 'PlusCircleOutlined',\\n              tooltip: 'horizontal-center',\\n            },\\n          ],\\n        },\\n      ]\\n      toolbar.extraGroups = [\\n        {\\n          name: 'extra',\\n          items: [\\n            {\\n              id: '3',\\n              iconName: 'PlusCircleOutlined',\\n              text: '\u6DFB\u52A0\u8282\u70B9',\\n              tooltip: '\u6DFB\u52A0\u8282\u70B9\uFF0C\u914D\u7F6EextraGroups',\\n            },\\n          ],\\n        },\\n      ]\\n    })\\n  })\\n})");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-layout/index.less?dumi-raw-code
var demos_toolbar_layoutdumi_raw_code = __webpack_require__("7qbT");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-model/index.tsx?dumi-raw-code
/* harmony default export */ var toolbar_modeldumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, CanvasToolbar } from '@antv/xflow'\\nimport { useToolbarConfig } from './toolbar-config'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const toolbarConfig = useToolbarConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    console.log(app)\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: \`Node-1\`,\\n        label: \`Node-1\`,\\n        x: 100,\\n        y: 50,\\n        width: 160,\\n        height: 32,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: \`Node-2\`,\\n        label: \`Node-2\`,\\n        x: 110,\\n        y: 60,\\n        width: 160,\\n        height: 32,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: \`Node-3\`,\\n        label: \`Node-3\`,\\n        x: 120,\\n        y: 70,\\n        width: 160,\\n        height: 32,\\n      },\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <CanvasToolbar\\n        layout=\\"horizontal\\"\\n        config={toolbarConfig}\\n        position={{ top: 0, left: 0, right: 0, height: 40 }}\\n      />\\n      <XFlowCanvas config={graphConfig} position={{ top: 40, bottom: 0, left: 0, right: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-model/toolbar-config.tsx?dumi-raw-code
/* harmony default export */ var toolbar_model_toolbar_configdumi_raw_code = ("import type { IModelService, IToolbarItemOptions } from '@antv/xflow'\\nimport { createToolbarConfig } from '@antv/xflow'\\nimport { MODELS, XFlowNodeCommands, IconStore } from '@antv/xflow'\\nimport { SaveOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'\\n\\nexport namespace NSToolbarConfig {\\n  /** \u6CE8\u518Cicon \u7C7B\u578B */\\n  IconStore.set('PlusCircleOutlined', PlusCircleOutlined)\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('SaveOutlined', SaveOutlined)\\n\\n  /** toolbar\u4F9D\u8D56\u7684\u72B6\u6001 */\\n  export interface IState {\\n    isNodeSelected: boolean\\n  }\\n\\n  /** \u83B7\u53D6toolbar\u4F9D\u8D56\u7684\u72B6\u6001 */\\n  export const getToolbarState = async (modelService: IModelService) => {\\n    // nodes\\n    const nodes = await MODELS.SELECTED_NODES.useValue(modelService)\\n    return {\\n      isNodeSelected: nodes.length > 0,\\n    } as IState\\n  }\\n  /** toolbar\u4F9D\u8D56\u7684\u914D\u7F6E\u9879 */\\n  export const getToolbarItems = async (state: IState) => {\\n    const toolbarGroup1: IToolbarItemOptions[] = []\\n    toolbarGroup1.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id,\\n      text: '\u5220\u9664\u8282\u70B9\uFF0C\u53EA\u6709Node\u9009\u4E2D\u65F6\u53EF\u7528',\\n      iconName: 'DeleteOutlined',\\n      tooltip: '\u5220\u9664\u8282\u70B9: \u53EA\u5728\u6709node\u9009\u4E2D\u65F6Enable',\\n      isEnabled: state.isNodeSelected,\\n    })\\n\\n    return [{ name: 'toolbar', items: toolbarGroup1 }]\\n  }\\n}\\n\\n/** toolbar\u4F9D\u8D56\u7684\u914D\u7F6E\u9879 */\\nexport const useToolbarConfig = createToolbarConfig(toolbarConfig => {\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService) => {\\n    // \u66F4\u65B0toolbar model\\n    const updateToolbarState = async () => {\\n      const toolbarState = await NSToolbarConfig.getToolbarState(modelService)\\n      const toolbarItems = await NSToolbarConfig.getToolbarItems(toolbarState)\\n      toolbarModel.setValue(toolbar => {\\n        toolbar.mainGroups = toolbarItems\\n      })\\n    }\\n\\n    // \u76D1\u542C\u5BF9\u5E94\u7684model\\n    const model = await MODELS.SELECTED_NODES.getModel(modelService)\\n    model.watch(() => {\\n      updateToolbarState()\\n    })\\n  })\\n})");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-model/index.less?dumi-raw-code
var demos_toolbar_modeldumi_raw_code = __webpack_require__("CEIR");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-custom-render/index.tsx?dumi-raw-code
/* harmony default export */ var toolbar_custom_renderdumi_raw_code = ("import React from 'react'\\nimport type { IAppLoad, NsNodeCmd } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\nimport { XFlow, createGraphConfig, XFlowCanvas, CanvasToolbar } from '@antv/xflow'\\nimport { useToolbarConfig } from './toolbar-config'\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<IDemoProps>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const toolbarConfig = useToolbarConfig(props)\\n\\n  const onLoad: IAppLoad = async app => {\\n    console.log(app)\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: \`Node-1\`,\\n        label: \`Node-1\`,\\n        x: 100,\\n        y: 50,\\n        width: 160,\\n        height: 32,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: \`Node-2\`,\\n        label: \`Node-2\`,\\n        x: 110,\\n        y: 60,\\n        width: 160,\\n        height: 32,\\n      },\\n    })\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: \`Node-3\`,\\n        label: \`Node-3\`,\\n        x: 120,\\n        y: 70,\\n        width: 160,\\n        height: 32,\\n      },\\n    })\\n  }\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <CanvasToolbar\\n        layout=\\"horizontal\\"\\n        config={toolbarConfig}\\n        position={{ top: 0, left: 0, right: 0, height: 40 }}\\n      />\\n      <XFlowCanvas config={graphConfig} position={{ top: 40, bottom: 0, left: 0, right: 0 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-custom-render/toolbar-config.tsx?dumi-raw-code
/* harmony default export */ var toolbar_custom_render_toolbar_configdumi_raw_code = ("import type { IModelService, IToolbarItemOptions } from '@antv/xflow'\\nimport { createToolbarConfig } from '@antv/xflow'\\nimport { MODELS, XFlowNodeCommands, IconStore } from '@antv/xflow'\\nimport { SaveOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons'\\nimport { Button } from 'antd'\\nimport React from 'react'\\nexport namespace NSToolbarConfig {\\n  /** \u6CE8\u518Cicon \u7C7B\u578B */\\n  IconStore.set('PlusCircleOutlined', PlusCircleOutlined)\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('SaveOutlined', SaveOutlined)\\n\\n  /** toolbar\u4F9D\u8D56\u7684\u72B6\u6001 */\\n  export interface IState {\\n    isNodeSelected: boolean\\n  }\\n\\n  /** \u83B7\u53D6toolbar\u4F9D\u8D56\u7684\u72B6\u6001 */\\n  export const getToolbarState = async (modelService: IModelService) => {\\n    // nodes\\n    const nodes = await MODELS.SELECTED_NODES.useValue(modelService)\\n    return {\\n      isNodeSelected: nodes.length > 0,\\n    } as IState\\n  }\\n  /** toolbar\u4F9D\u8D56\u7684\u914D\u7F6E\u9879 */\\n  export const getToolbarItems = async (state: IState) => {\\n    const toolbarGroup1: IToolbarItemOptions[] = []\\n    toolbarGroup1.push({\\n      id: XFlowNodeCommands.MOVE_NODE.id,\\n      text: '\u9009\u4E2D\u8282\u70B9\u65F6\u4F1A\u4F7F\u7528\u81EA\u5B9A\u4E49\u6E32\u67D3',\\n      iconName: 'DeleteOutlined',\\n      tooltip: '\u9009\u4E2D\u8282\u70B9\u65F6\u4F1A\u89E6\u53D1\u81EA\u5B9A\u4E49\u6E32\u67D3',\\n      isEnabled: state.isNodeSelected,\\n    })\\n\\n    return [{ name: 'toolbar', items: toolbarGroup1 }]\\n  }\\n}\\n\\n/** toolbar\u4F9D\u8D56\u7684\u914D\u7F6E\u9879 */\\nexport const useToolbarConfig = createToolbarConfig(toolbarConfig => {\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService, toDispose) => {\\n    // \u66F4\u65B0toolbar model\\n    const updateToolbarState = async () => {\\n      const toolbarState = await NSToolbarConfig.getToolbarState(modelService)\\n      const toolbarItems = await NSToolbarConfig.getToolbarItems(toolbarState)\\n      toolbarModel.setValue(toolbar => {\\n        toolbar.mainGroups = toolbarItems\\n      })\\n    }\\n\\n    // \u76D1\u542C\u5BF9\u5E94\u7684model\\n    const model = await MODELS.SELECTED_NODES.getModel(modelService)\\n    const d = model.watch(() => {\\n      updateToolbarState()\\n    })\\n    toDispose.push(d)\\n  })\\n\\n  toolbarConfig.setCustomToolbarRender(async (modelService, updateComponent) => {\\n    const model = await MODELS.SELECTED_NODES.getModel(modelService)\\n    model.watch(nodes => {\\n      if (nodes.length > 0) {\\n        const CustomRender = () => (\\n          <div className=\\"custom-toolbar\\">\\n            <Button> \u652F\u6301\u81EA\u5B9A\u4E49\u6E32\u67D3 </Button>\\n          </div>\\n        )\\n        updateComponent(CustomRender)\\n      } else {\\n        updateComponent(null)\\n      }\\n    })\\n    return null\\n  })\\n})");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/canvas-toolbar/demos/toolbar-custom-render/index.less?dumi-raw-code
var demos_toolbar_custom_renderdumi_raw_code = __webpack_require__("nHmS");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var context_menu_demos_basicdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, CanvasContextMenu } from '@antv/xflow'\\nimport { onLoad, useGraphConfig } from './graph-config'\\nimport { useMenuConfig } from './menu-config'\\n\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const menucConfig = useMenuConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasContextMenu config={menucConfig} />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/basic/graph-config.tsx?dumi-raw-code
/* harmony default export */ var demos_basic_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport React from 'react'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/basic/mock.ts?dumi-raw-code
/* harmony default export */ var context_menu_demos_basic_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/basic/menu-config.tsx?dumi-raw-code
/* harmony default export */ var menu_configdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport type { NsNodeCmd, NsEdgeCmd } from '@antv/xflow'\\nimport type { IMenuOptions } from '@antv/xflow'\\nimport { createCtxMenuConfig } from '@antv/xflow'\\nimport { MenuItemType } from '@antv/xflow'\\nimport { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'\\nimport { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'\\n\\n/** menuitem \u914D\u7F6E */\\nexport namespace NsCustomMenuItems {\\n  /** \u6CE8\u518C\u83DC\u5355\u4F9D\u8D56\u7684icon */\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('EditOutlined', EditOutlined)\\n  IconStore.set('StopOutlined', StopOutlined)\\n\\n  export const DELETE_EDGE: IMenuOptions = {\\n    id: XFlowEdgeCommands.DEL_EDGE.id,\\n    label: '\u5220\u9664\u8FB9',\\n    hotkey: 'Delete',\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n        edgeConfig: target.data as NsGraph.IEdgeConfig,\\n      })\\n    },\\n  }\\n\\n  export const DELETE_NODE: IMenuOptions = {\\n    id: XFlowNodeCommands.DEL_NODE.id,\\n    label: '\u5220\u9664\u8282\u70B9',\\n    iconName: 'DeleteOutlined',\\n    hotkey: 'Delete',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const EMPTY_MENU: IMenuOptions = {\\n    id: 'EMPTY_MENU_ITEM',\\n    label: '\u6682\u65E0\u53EF\u7528',\\n    isEnabled: false,\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const SEPARATOR: IMenuOptions = {\\n    id: 'separator',\\n    type: MenuItemType.Separator,\\n  }\\n}\\n\\nexport const useMenuConfig = createCtxMenuConfig(config => {\\n  config.setMenuModelService(async (data, model, modelService, toDispose) => {\\n    const { type, cell } = data\\n    console.log(type)\\n    switch (type) {\\n      case 'node':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.DELETE_NODE],\\n        })\\n        break\\n      case 'edge':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.DELETE_EDGE],\\n        })\\n        break\\n      case 'blank':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.EMPTY_MENU],\\n        })\\n        break\\n      default:\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.EMPTY_MENU],\\n        })\\n        break\\n    }\\n  })\\n})");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/basic/index.less?dumi-raw-code
var extension_components_context_menu_demos_basicdumi_raw_code = __webpack_require__("ytmb");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/dynamic-config/index.tsx?dumi-raw-code
/* harmony default export */ var dynamic_configdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, CanvasContextMenu } from '@antv/xflow'\\nimport { onLoad, useGraphConfig } from './graph-config'\\nimport { useMenuConfig } from './menu-config'\\n\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const menucConfig = useMenuConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasContextMenu config={menucConfig} />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/dynamic-config/graph-config.tsx?dumi-raw-code
/* harmony default export */ var dynamic_config_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/dynamic-config/mock.ts?dumi-raw-code
/* harmony default export */ var dynamic_config_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n      menuItems: ['\u52A8\u6001\u6E32\u67D3\u7684MenuItem '],\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n      menuItems: ['\u52A8\u6001\u6E32\u67D3\u7684MenuItem ', '\u52A8\u6001\u6E32\u67D3\u7684MenuItem '],\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n      menuItems: ['\u52A8\u6001\u6E32\u67D3\u7684MenuItem ', '\u52A8\u6001\u6E32\u67D3\u7684MenuItem ', '\u52A8\u6001\u6E32\u67D3\u7684MenuItem '],\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n      menuItems: [],\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/dynamic-config/menu-config.tsx?dumi-raw-code
/* harmony default export */ var dynamic_config_menu_configdumi_raw_code = ("import type { NsNodeCmd, NsEdgeCmd, IMenuOptions, MODELS, NsGraph } from '@antv/xflow'\\nimport { createCtxMenuConfig, MenuItemType } from '@antv/xflow'\\nimport {} from '@antv/xflow'\\nimport { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'\\nimport {\\n  DeleteOutlined,\\n  EditOutlined,\\n  StopOutlined,\\n  UnorderedListOutlined,\\n} from '@ant-design/icons'\\n\\nexport const useMenuConfig = createCtxMenuConfig(config => {\\n  config.setMenuModelService(async (data, model, modelService, toDispose) => {\\n    const { type, cell } = data\\n    console.log(type)\\n    switch (type) {\\n      case 'node':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.DELETE_NODE, NsCustomMenuItems.getDynamicMenuItems(data)],\\n        })\\n        break\\n\\n      default:\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.EMPTY_MENU],\\n        })\\n        break\\n    }\\n  })\\n})\\n\\n/** menuitem \u914D\u7F6E */\\nexport namespace NsCustomMenuItems {\\n  /** \u6CE8\u518C\u83DC\u5355\u4F9D\u8D56\u7684icon */\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('EditOutlined', EditOutlined)\\n  IconStore.set('StopOutlined', StopOutlined)\\n  IconStore.set('UnorderedListOutlined', UnorderedListOutlined)\\n\\n  interface INode extends NsGraph.INodeConfig {\\n    menuItems: string[]\\n  }\\n\\n  export const getDynamicMenuItems = (state: MODELS.CONTEXTMENU_TARGET.IState) => {\\n    const data = state.cell.getData<INode>()\\n    return {\\n      id: '\u52A8\u6001\u6E32\u7684submenu',\\n      label: '\u52A8\u6001\u6E32\u67D3\u7684\u83DC\u5355',\\n      iconName: 'UnorderedListOutlined',\\n      type: MenuItemType.Submenu,\\n      submenu: data.menuItems.map((item, idx) => {\\n        return {\\n          id: item + '#' + idx,\\n          label: item + '#' + (idx + 1),\\n          type: MenuItemType.Leaf,\\n          iconName: 'UnorderedListOutlined',\\n          onClick: async ({ target }) => {\\n            console.log('submenu is  click', target, item)\\n          },\\n        }\\n      }),\\n    }\\n  }\\n\\n  export const DELETE_NODE: IMenuOptions = {\\n    id: XFlowNodeCommands.DEL_NODE.id,\\n    label: '\u5220\u9664\u8282\u70B9',\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const EMPTY_MENU: IMenuOptions = {\\n    id: 'EMPTY_MENU_ITEM',\\n    label: '\u6682\u65E0\u53EF\u7528',\\n    isEnabled: false,\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const SEPARATOR: IMenuOptions = {\\n    id: 'separator',\\n    type: MenuItemType.Separator,\\n  }\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/dynamic-config/index.less?dumi-raw-code
var demos_dynamic_configdumi_raw_code = __webpack_require__("4mDT");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/hotkey/index.tsx?dumi-raw-code
/* harmony default export */ var hotkeydumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, CanvasContextMenu, KeyBindings } from '@antv/xflow'\\nimport { onLoad, useGraphConfig } from './graph-config'\\nimport { useMenuConfig } from './menu-config'\\nimport { useKeybindingConfig } from './hotkey-config'\\nimport './index.less'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const menucConfig = useMenuConfig(props)\\n  const keybindingConfig = useKeybindingConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasContextMenu config={menucConfig} />\\n        <KeyBindings config={keybindingConfig} />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/hotkey/graph-config.tsx?dumi-raw-code
/* harmony default export */ var hotkey_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/hotkey/mock.ts?dumi-raw-code
/* harmony default export */ var hotkey_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/hotkey/menu-config.tsx?dumi-raw-code
/* harmony default export */ var hotkey_menu_configdumi_raw_code = ("import type { NsNodeCmd, NsEdgeCmd } from '@antv/xflow'\\nimport type { IMenuOptions } from '@antv/xflow'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { createCtxMenuConfig } from '@antv/xflow'\\nimport { MenuItemType } from '@antv/xflow'\\nimport { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'\\nimport { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'\\n\\nexport const useMenuConfig = createCtxMenuConfig(config => {\\n  config.setMenuModelService(async (data, model, modelService, toDispose) => {\\n    const { type, cell } = data\\n    console.log(type)\\n    switch (type) {\\n      case 'node':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.DELETE_NODE],\\n        })\\n        break\\n      case 'edge':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.DELETE_EDGE],\\n        })\\n        break\\n      case 'blank':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.EMPTY_MENU],\\n        })\\n        break\\n      default:\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.EMPTY_MENU],\\n        })\\n        break\\n    }\\n  })\\n})\\n\\n/** menuitem \u914D\u7F6E */\\nexport namespace NsCustomMenuItems {\\n  /** \u6CE8\u518C\u83DC\u5355\u4F9D\u8D56\u7684icon */\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('EditOutlined', EditOutlined)\\n  IconStore.set('StopOutlined', StopOutlined)\\n\\n  export const DELETE_EDGE: IMenuOptions = {\\n    id: XFlowEdgeCommands.DEL_EDGE.id,\\n    label: '\u5220\u9664\u8FB9',\\n    hotkey: 'Delete',\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n        edgeConfig: target.data as NsGraph.IEdgeConfig,\\n      })\\n    },\\n  }\\n\\n  export const DELETE_NODE: IMenuOptions = {\\n    id: XFlowNodeCommands.DEL_NODE.id,\\n    label: '\u5220\u9664\u8282\u70B9',\\n    iconName: 'DeleteOutlined',\\n    hotkey: 'Delete',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const EMPTY_MENU: IMenuOptions = {\\n    id: 'EMPTY_MENU_ITEM',\\n    label: '\u6682\u65E0\u53EF\u7528',\\n    isEnabled: false,\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const SEPARATOR: IMenuOptions = {\\n    id: 'separator',\\n    type: MenuItemType.Separator,\\n  }\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/hotkey/hotkey-config.tsx?dumi-raw-code
/* harmony default export */ var hotkey_configdumi_raw_code = ("import type { Edge, Node } from '@antv/x6'\\nimport { createKeybindingConfig, MODELS, XFlowEdgeCommands, XFlowNodeCommands } from '@antv/xflow'\\nimport type { NsEdgeCmd, NsNodeCmd } from '@antv/xflow'\\n\\n/**  keybindings  */\\nexport const useKeybindingConfig = createKeybindingConfig((config, getProps) => {\\n  config.setKeybindingFunc(reg => {\\n    return reg.registerKeybinding([\\n      {\\n        id: 'delete node or edge',\\n        keybinding: 'backspace',\\n        callback: async function (item, modelService, cmd, e) {\\n          const cells = await MODELS.SELECTED_CELLS.useValue(modelService)\\n          const nodes = cells.filter((cell): cell is Edge => cell.isEdge())\\n          const edges = cells.filter((cell): cell is Node => cell.isNode())\\n          // \u8C03\u7528\u5220\u9664Edge\u7684Command\\n          const delEdge = (cell: Edge) => {\\n            return cmd.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n              edgeConfig: { ...cell.getData(), id: cell.id },\\n            })\\n          }\\n          // \u8C03\u7528\u5220\u9664Node\u7684Command\\n          const delNode = (cell: Node) => {\\n            return cmd.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n              nodeConfig: {\\n                ...cell.getData(),\\n                id: cell.id,\\n              },\\n            })\\n          }\\n          if (cells.length === 0) {\\n            console.warn('\u6CA1\u6709\u9009\u4E2D\u7684\u8282\u70B9')\\n          }\\n          // \u5148\u5220\u9664edges\\n          await Promise.all(nodes.map(cell => delEdge(cell)))\\n          // \u5148\u5220\u9664nodes\\n          await Promise.all(edges.map(cell => delNode(cell)))\\n        },\\n      },\\n    ])\\n  })\\n})");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/hotkey/index.less?dumi-raw-code
var demos_hotkeydumi_raw_code = __webpack_require__("A1s9");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/custom-render/index.tsx?dumi-raw-code
/* harmony default export */ var context_menu_demos_custom_renderdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas, CanvasContextMenu } from '@antv/xflow'\\nimport { onLoad, useGraphConfig } from './graph-config'\\nimport { useMenuConfig } from './menu-config'\\n\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  const menucConfig = useMenuConfig(props)\\n\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 0, right: 0 }}>\\n        <CanvasContextMenu config={menucConfig} />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/custom-render/graph-config.tsx?dumi-raw-code
/* harmony default export */ var demos_custom_render_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/custom-render/mock.ts?dumi-raw-code
/* harmony default export */ var demos_custom_render_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/custom-render/menu-config.tsx?dumi-raw-code
/* harmony default export */ var custom_render_menu_configdumi_raw_code = ("import type { NsNodeCmd, NsEdgeCmd } from '@antv/xflow'\\nimport type { IMenuOptions } from '@antv/xflow'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { MenuItemType } from '@antv/xflow'\\nimport { createCtxMenuConfig } from '@antv/xflow'\\nimport { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'\\nimport { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'\\n\\n/** menuitem \u914D\u7F6E */\\nexport namespace NsCustomMenuItems {\\n  /** \u6CE8\u518C\u83DC\u5355\u4F9D\u8D56\u7684icon */\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('EditOutlined', EditOutlined)\\n  IconStore.set('StopOutlined', StopOutlined)\\n\\n  export const DELETE_EDGE: IMenuOptions = {\\n    id: XFlowEdgeCommands.DEL_EDGE.id,\\n    label: '\u5220\u9664\u8FB9',\\n    hotkey: 'Delete',\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n        edgeConfig: target.data as NsGraph.IEdgeConfig,\\n      })\\n    },\\n  }\\n\\n  export const DELETE_NODE: IMenuOptions = {\\n    id: XFlowNodeCommands.DEL_NODE.id,\\n    label: '\u5220\u9664\u8282\u70B9',\\n    iconName: 'DeleteOutlined',\\n    hotkey: 'Delete',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const NODE_LINK: IMenuOptions = {\\n    id: 'NODE_LINK',\\n    label: 'NODE_LINK',\\n    render: ({ children }) => {\\n      return (\\n        <a target=\\"_blank\\" href=\\"https://x6.antv.vision/\\" style={{ padding: '0 16px' }}>\\n          \u4E00\u4E2A\u81EA\u5B9A\u4E49\u6E32\u67D3\u7684\u8FDE\u63A5\\n        </a>\\n      )\\n    },\\n  }\\n\\n  export const EMPTY_MENU: IMenuOptions = {\\n    id: 'EMPTY_MENU_ITEM',\\n    label: '\u6682\u65E0\u53EF\u7528',\\n    isEnabled: false,\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const SEPARATOR: IMenuOptions = {\\n    id: 'separator',\\n    type: MenuItemType.Separator,\\n  }\\n}\\n\\nexport const useMenuConfig = createCtxMenuConfig(config => {\\n  config.setMenuModelService(async (data, model, modelService, toDispose) => {\\n    const { type, cell } = data\\n    console.log(type)\\n    switch (type) {\\n      case 'node':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [\\n            NsCustomMenuItems.DELETE_NODE,\\n            NsCustomMenuItems.SEPARATOR,\\n            NsCustomMenuItems.NODE_LINK,\\n          ],\\n        })\\n        break\\n      case 'edge':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.DELETE_EDGE],\\n        })\\n        break\\n      case 'blank':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.EMPTY_MENU],\\n        })\\n        break\\n      default:\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsCustomMenuItems.EMPTY_MENU],\\n        })\\n        break\\n    }\\n  })\\n})");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/context-menu/demos/custom-render/index.less?dumi-raw-code
var extension_components_context_menu_demos_custom_renderdumi_raw_code = __webpack_require__("q/4A");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/workspace-panel/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var workspace_panel_demos_basicdumi_raw_code = ("import React from 'react'\\nimport { XFlow, XFlowCanvas } from '@antv/xflow'\\nimport CustomPanel from './custom-panel'\\nimport './index.less'\\nimport { useGraphConfig, onLoad } from './graph-config'\\nimport '@antv/xflow/dist/index.css'\\n/**  Demo Props  */\\nexport interface IDemoProps {\\n  anything: string\\n}\\n\\nconst XFlowDemo: React.FC<IDemoProps> = props => {\\n  const graphConfig = useGraphConfig(props)\\n  return (\\n    <XFlow onLoad={onLoad} className=\\"xflow-workspace\\">\\n      <XFlowCanvas config={graphConfig} position={{ top: 0, bottom: 0, left: 290, right: 0 }} />\\n      <CustomPanel position={{ top: 0, bottom: 0, left: 0, width: 290 }} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default XFlowDemo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/workspace-panel/demos/basic/custom-panel/index.tsx?dumi-raw-code
/* harmony default export */ var custom_paneldumi_raw_code = ("import {\\n  WorkspacePanel,\\n  usePanelContext,\\n  useXFlowApp,\\n  MODELS,\\n  XFlowNodeCommands,\\n  useModelAsync,\\n  randomInt,\\n  uuidv4,\\n} from '@antv/xflow'\\nimport type { IPosition, NsNodeCmd } from '@antv/xflow'\\nimport { Card, Form, Button, Input, message } from 'antd'\\nexport interface IPanelProps {\\n  position: IPosition\\n}\\n\\nexport const ModelServieCard = () => {\\n  const app = useXFlowApp()\\n  const [cells] = useModelAsync<MODELS.SELECTED_NODES.IState>({\\n    getModel: async () => MODELS.SELECTED_NODES.getModel(app.modelService),\\n    initialState: [],\\n  })\\n  return (\\n    <Card title=\\"Model Service \\" size=\\"small\\">\\n      <div> \u5F53\u524D\u9009\u4E2D\u8282\u70B9\u6570\u91CF: {cells.length} </div>\\n    </Card>\\n  )\\n}\\n\\nexport const CommandServieCard = () => {\\n  const app = useXFlowApp()\\n  const onFinish = values => {\\n    if (!values.label) {\\n      return message.warn(\`\u8BF7\u8F93\u5165\u8282\u70B9\u540D\`)\\n    }\\n    app.executeCommand<NsNodeCmd.AddNode.IArgs>(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: uuidv4(),\\n        label: values.label,\\n        x: randomInt(50, 100),\\n        y: randomInt(50, 100),\\n        width: 160,\\n        height: 30,\\n      },\\n    })\\n  }\\n\\n  return (\\n    <Card title=\\"Command Service \\" size=\\"small\\">\\n      <Form onFinish={onFinish} layout=\\"vertical\\">\\n        <Form.Item name=\\"label\\" label=\\"\u8282\u70B9\u540D\\" required requiredMark>\\n          <Input placeholder=\\"node label\\" />\\n        </Form.Item>\\n        <Form.Item name=\\"label\\">\\n          <Button type=\\"primary\\" htmlType=\\"submit\\" style={{ width: '100%' }}>\\n            \u6267\u884CAddNode\u547D\u4EE4\\n          </Button>\\n        </Form.Item>\\n      </Form>\\n    </Card>\\n  )\\n}\\n\\nexport const X6GraphCard = () => {\\n  const app = useXFlowApp()\\n  const callX6Api = async () => {\\n    const x6 = await app.getGraphInstance()\\n    const cells = x6.getCells()\\n    console.log('x6 graph', x6)\\n    message.info(\`x6 \u753B\u5E03\u5DF2\u6709cell: \${cells.length} \u4E2A\`)\\n    // \u8BF7\u52FF\u7ED5\u8FC7command \u76F4\u63A5\u4FEE\u6539\u753B\u5E03\u6570\u636E\\n  }\\n  return (\\n    <Card title=\\"use X6 Graph \\" size=\\"small\\">\\n      <Button type=\\"primary\\" htmlType=\\"submit\\" onClick={callX6Api} style={{ width: '100%' }}>\\n        \u83B7\u53D6X6 Cells \u6570\u91CF\\n      </Button>\\n    </Card>\\n  )\\n}\\n\\nexport const CustomPanel: React.FC = () => {\\n  const { propsProxy } = usePanelContext()\\n  const app = useXFlowApp()\\n  const props = propsProxy.getValue()\\n  console.log('can use root component props:', props)\\n  console.log('can use app', app)\\n\\n  return (\\n    <div className=\\"card-wrap\\">\\n      <ModelServieCard />\\n      <CommandServieCard />\\n      <X6GraphCard />\\n    </div>\\n  )\\n}\\n\\nexport default (props: IPanelProps) => {\\n  return (\\n    <WorkspacePanel {...props}>\\n      <CustomPanel />\\n    </WorkspacePanel>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/workspace-panel/demos/basic/index.less?dumi-raw-code
var extension_components_workspace_panel_demos_basicdumi_raw_code = __webpack_require__("HXH3");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/workspace-panel/demos/basic/graph-config.tsx?dumi-raw-code
/* harmony default export */ var workspace_panel_demos_basic_graph_configdumi_raw_code = ("import type { IAppLoad, NsGraphCmd } from '@antv/xflow'\\nimport { createGraphConfig } from '@antv/xflow'\\nimport { XFlowGraphCommands } from '@antv/xflow'\\nimport { getGraphData } from './mock'\\n\\nexport const onLoad: IAppLoad = async app => {\\n  // \u8BA1\u7B97\u5E03\u5C40\\n  const res = await app.executeCommand<\\n    NsGraphCmd.GraphLayout.IArgs,\\n    NsGraphCmd.GraphLayout.IResult\\n  >(XFlowGraphCommands.GRAPH_LAYOUT.id, {\\n    layoutType: 'dagre',\\n    layoutOptions: {\\n      type: 'dagre',\\n      /** \u5E03\u5C40\u65B9\u5411 */\\n      rankdir: 'TB',\\n      /** \u8282\u70B9\u95F4\u8DDD */\\n      nodesep: 60,\\n      /** \u5C42\u95F4\u8DDD */\\n      ranksep: 30,\\n    },\\n    graphData: getGraphData(),\\n  })\\n  const { graphData } = res.contextProvider().getResult()\\n  // render\\n  await app.executeCommand<NsGraphCmd.GraphRender.IArgs>(XFlowGraphCommands.GRAPH_RENDER.id, {\\n    graphData: graphData,\\n  })\\n  // \u5C45\u4E2D\\n  await app.executeCommand<NsGraphCmd.GraphZoom.IArgs>(XFlowGraphCommands.GRAPH_ZOOM.id, {\\n    factor: 'real',\\n  })\\n}\\n\\n/**  graphConfig\uFF1A\u914D\u7F6EGraph  */\\nexport const useGraphConfig = createGraphConfig<any>(graphConfig => {\\n  graphConfig.setDefaultNodeRender(props => {\\n    return <div className=\\"react-node\\"> {props.data.label} </div>\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/extension-components/workspace-panel/demos/basic/mock.ts?dumi-raw-code
/* harmony default export */ var workspace_panel_demos_basic_mockdumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport { uuidv4 } from '@antv/xflow'\\n\\n// NodeConfig\\nconst NODE_COMMON_PROPS = {\\n  width: 160,\\n  height: 32,\\n} as const\\n// NodeConfig\\nconst EDGE_COMMON_PROPS = {\\n  attrs: {\\n    line: {\\n      targetMarker: {\\n        name: 'block',\\n        width: 4,\\n        height: 8,\\n      },\\n      strokeDasharray: '',\\n      stroke: '#A2B1C3',\\n      strokeWidth: 1,\\n    },\\n  },\\n} as const\\n\\n// mock data\\nexport const getGraphData = () => {\\n  const nodes: NsGraph.INodeConfig[] = [\\n    {\\n      id: 'node1',\\n      label: '\u7B97\u6CD5\u8282\u70B9-1',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node2',\\n      label: '\u7B97\u6CD5\u8282\u70B9-2',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node3',\\n      label: '\u7B97\u6CD5\u8282\u70B9-3',\\n      ...NODE_COMMON_PROPS,\\n    },\\n    {\\n      id: 'node4',\\n      label: '\u7B97\u6CD5\u8282\u70B9-4',\\n      ...NODE_COMMON_PROPS,\\n    },\\n  ]\\n  const edges: NsGraph.IEdgeConfig[] = [\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node2',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node2-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node3',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node3-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n    {\\n      id: uuidv4(),\\n      source: 'node1',\\n      target: 'node4',\\n      sourcePortId: 'node1-output-1',\\n      targetPortId: 'node4-input-1',\\n      ...EDGE_COMMON_PROPS,\\n    },\\n  ]\\n  return {\\n    nodes: nodes,\\n    edges: edges,\\n  } as NsGraph.IGraphData\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/index.tsx?dumi-raw-code
/* harmony default export */ var demodumi_raw_code = ("import React, { useState } from 'react'\\n/** \u56FE\u6838\u5FC3\u7EC4\u4EF6 & \u7C7B\u578B\u5B9A\u4E49 */\\nimport type { IAppLoad, NsGraph } from '@antv/xflow'\\nimport { XFlow, XFlowCanvas } from '@antv/xflow'\\n/** \u56FE\u7684\u5404\u79CD\u6269\u5C55\u4EA4\u4E92\u7EC4\u4EF6 */\\nimport { CanvasContextMenu, CanvasMiniMap, CanvasScaleToolbar, CanvasSnapline } from '@antv/xflow'\\n/** \u56FE\u7684\u914D\u7F6E\u9879 */\\nimport { useGraphConfig } from './config-graph'\\nimport { message } from 'antd'\\n\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n\\nexport interface IProps {}\\n\\nconst Demo: React.FC<IProps> = () => {\\n  /** \u753B\u5E03\u914D\u7F6E */\\n  const graphConfig = useGraphConfig()\\n\\n  /** \u753B\u5E03\u6E32\u67D3\u6570\u636E */\\n  const [graphData, setGraphData] = useState<NsGraph.IGraphData>(undefined)\\n\\n  /** XFlow\u521D\u59CB\u5316\u5B8C\u6210\u7684\u56DE\u8C03 */\\n  const onLoad: IAppLoad = async app => {\\n    const nodes: NsGraph.INodeConfig[] = [\\n      { id: 'root1', width: 150, height: 40, renderKey: 'NODE1', info: { text: 'root1' } },\\n      { id: 'down1', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down1' } },\\n      { id: 'down2', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down2' } },\\n      { id: 'down3', width: 150, height: 40, renderKey: 'NODE2', info: { text: 'down3' } },\\n    ]\\n    const edges: NsGraph.IEdgeConfig[] = [\\n      {\\n        id: 'root1-down1',\\n        source: 'root1',\\n        target: 'down1',\\n        renderKey: 'EDGE1',\\n        edgeContentWidth: 60,\\n        edgeContentHeigt: 30,\\n        info: { line: 'root1-down1' },\\n      },\\n      {\\n        id: 'root1-down2',\\n        source: 'root1',\\n        target: 'down2',\\n        renderKey: 'EDGE2',\\n        edgeContentWidth: 60,\\n        edgeContentHeigt: 30,\\n        info: { line: 'root1-down2' },\\n      },\\n      {\\n        id: 'root1-down3',\\n        source: 'root1',\\n        target: 'down3',\\n        label: '1:N(\u7EAF\u6587\u672C)',\\n        info: { line: 'root1-down3' },\\n      },\\n    ]\\n    const newGraphData = { nodes, edges }\\n    setGraphData(newGraphData)\\n\\n    const graph = await app.getGraphInstance()\\n    graph.on('node:click', ({ node }) => {\\n      const nodeData: NsGraph.INodeConfig = node.getData()\\n      message.success(\`\${nodeData.id}\u8282\u70B9\u88AB\u70B9\u51FB\u4E86\`)\\n    })\\n    graph.on('edge:click', ({ edge }) => {\\n      edge.toFront()\\n      const edgeData: NsGraph.IEdgeConfig = edge.getData()\\n      message.success(\`\${edgeData.id}\u8FDE\u7EBF\u88AB\u70B9\u51FB\u4E86\`)\\n    })\\n  }\\n\\n  return (\\n    <XFlow\\n      className=\\"xflow-user-container\\"\\n      graphData={graphData}\\n      graphLayout={{\\n        layoutType: 'dagre',\\n        layoutOptions: {\\n          type: 'dagre',\\n          rankdir: 'TB',\\n          nodesep: 60,\\n          ranksep: 40,\\n        },\\n      }}\\n      onLoad={onLoad}\\n      isAutoCenter={true}\\n    >\\n      <XFlowCanvas config={graphConfig}>\\n        <CanvasScaleToolbar position={{ top: 12, left: 12 }} />\\n        <CanvasMiniMap\\n          miniMapClz=\\"xflow-custom-minimap\\"\\n          nodeFillColor=\\"#ccc\\"\\n          minimapOptions={{\\n            width: 200,\\n            height: 120,\\n          }}\\n          position={{ top: 12, right: 12 }}\\n        />\\n        <CanvasSnapline color=\\"#1890ff\\" />\\n      </XFlowCanvas>\\n    </XFlow>\\n  )\\n}\\n\\nexport default Demo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/config-graph.tsx?dumi-raw-code
/* harmony default export */ var demo_config_graphdumi_raw_code = ("import React from 'react'\\nimport { createGraphConfig } from '@antv/xflow'\\n/** \u81EA\u5B9A\u4E49React\u8282\u70B9/\u8FB9 */\\nimport Node1 from './react-node/node1'\\nimport Node2 from './react-node/node2'\\nimport Edge1 from './react-edge/edge1'\\nimport Edge2 from './react-edge/edge2'\\n\\nexport const useGraphConfig = createGraphConfig(config => {\\n  /** \u8BBE\u7F6EXFlow\u753B\u5E03\u914D\u7F6E\u9879 */\\n  config.setX6Config({\\n    /** \u753B\u5E03\u7F51\u683C */\\n    grid: true,\\n    /** \u753B\u5E03\u7F29\u653E\u7B49\u7EA7 */\\n    scaling: {\\n      min: 0.2,\\n      max: 3,\\n    },\\n    /** \u753B\u5E03\u6EDA\u8F6E\u7F29\u653E */\\n    // mousewheel: {\\n    //   enabled: true,\\n    //   /** \u5C06\u9F20\u6807\u4F4D\u7F6E\u4F5C\u4E3A\u4E2D\u5FC3\u7F29\u653E */\\n    //   zoomAtMousePosition: true,\\n    // },\\n  })\\n\\n  /** \u8BBE\u7F6EXFlow\u753B\u5E03\u9700\u8981\u6E32\u67D3\u7684React\u8282\u70B9/\u8FB9 */\\n  config.setNodeRender('NODE1', props => <Node1 {...props} />)\\n  config.setNodeRender('NODE2', Node2)\\n  config.setEdgeRender('EDGE1', props => <Edge1 {...props} />)\\n  config.setEdgeRender('EDGE2', props => <Edge2 {...props} />)\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/react-node/node1.tsx?dumi-raw-code
/* harmony default export */ var node1dumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport React from 'react'\\nimport './node1.less'\\n\\nconst Node1: NsGraph.INodeRender = props => {\\n  /**\\n   * 1. \u8282\u70B9\u7684\u6570\u636E\u3001\u4F4D\u7F6E\u4FE1\u606F\u901A\u8FC7props\u53D6\\n   * 2. \u5F53\u8282\u70B9\u88AB\u89E6\u53D1\u66F4\u65B0\u65F6, props\u8FD4\u56DE\u7684\u6570\u636E\u4E5F\u4F1A\u52A8\u6001\u66F4\u65B0, \u89E6\u53D1\u8282\u70B9\u91CD\u65B0\u6E32\u67D3\\n   */\\n  return (\\n    <div className=\\"node1-container\\">\\n      <div>{'React\u8282\u70B91'}</div>\\n    </div>\\n  )\\n}\\nexport default Node1");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/react-node/node1.less?dumi-raw-code
var react_node_node1dumi_raw_code = __webpack_require__("NGn4");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/react-node/node2.tsx?dumi-raw-code
/* harmony default export */ var node2dumi_raw_code = ("import type { NsGraph } from '@antv/xflow'\\nimport React from 'react'\\nimport { useAppContext } from '@antv/xflow'\\nimport './node2.less'\\n\\nconst Node2: NsGraph.INodeRender = props => {\\n  const ctx = useAppContext()\\n\\n  return (\\n    <div className=\\"node2-container\\">\\n      <div>{'React\u8282\u70B92'}</div>\\n    </div>\\n  )\\n}\\nexport default Node2");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/react-node/node2.less?dumi-raw-code
var react_node_node2dumi_raw_code = __webpack_require__("5mll");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/react-edge/edge1.tsx?dumi-raw-code
/* harmony default export */ var edge1dumi_raw_code = ("import React from 'react'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { useAppContext } from '@antv/xflow'\\nimport { Tooltip } from 'antd'\\nimport './edge1.less'\\n\\nconst Edge1: NsGraph.IEdgeRender = props => {\\n  const ctx = useAppContext()\\n  // console.log('edge useAppContext', ctx);\\n  // console.log('edge props:', props);\\n  return (\\n    <div className=\\"edge1-container\\">\\n      <Tooltip\\n        title=\\"\u8FD9\u662F\u8FDE\u7EBF\u4E0A\u6E32\u67D3\u7684React\u5185\u5BB9\\"\\n        // defaultVisible={true}\\n      >\\n        <div>hover\u6211</div>\\n      </Tooltip>\\n    </div>\\n  )\\n}\\nexport default Edge1");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/react-edge/edge1.less?dumi-raw-code
var react_edge_edge1dumi_raw_code = __webpack_require__("M/Sn");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/react-edge/edge2.tsx?dumi-raw-code
/* harmony default export */ var edge2dumi_raw_code = ("import React from 'react'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { useAppContext } from '@antv/xflow'\\nimport './edge2.less'\\n\\nconst Edge2: NsGraph.IEdgeRender = props => {\\n  return <div className=\\"edge2-container\\">React2</div>\\n}\\nexport default Edge2");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/react-edge/edge2.less?dumi-raw-code
var react_edge_edge2dumi_raw_code = __webpack_require__("gbxz");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/getting-started/demo/index.less?dumi-raw-code
var getting_started_demodumi_raw_code = __webpack_require__("fI0w");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/index.tsx?dumi-raw-code
/* harmony default export */ var dag_demos_basicdumi_raw_code = ("import React from 'react'\\n/** app \u6838\u5FC3\u7EC4\u4EF6 */\\nimport { XFlow, XFlowCanvas, KeyBindings } from '@antv/xflow'\\nimport type { IApplication, IAppLoad } from '@antv/xflow'\\n/** \u4EA4\u4E92\u7EC4\u4EF6 */\\nimport {\\n  /** \u89E6\u53D1Command\u7684\u4EA4\u4E92\u7EC4\u4EF6 */\\n  CanvasScaleToolbar,\\n  JsonSchemaForm,\\n  NodeTreePanel,\\n  CanvasContextMenu,\\n  CanvasToolbar,\\n  /** Graph\u7684\u6269\u5C55\u4EA4\u4E92\u7EC4\u4EF6 */\\n  CanvasSnapline,\\n  // CanvasMiniMap,\\n  CanvasNodePortTooltip,\\n  DagGraphExtension,\\n} from '@antv/xflow'\\n\\n/** app \u7EC4\u4EF6\u914D\u7F6E  */\\n/** \u914D\u7F6E\u753B\u5E03 */\\nimport { useGraphHookConfig } from './config-graph'\\n/** \u914D\u7F6ECommand */\\nimport { useCmdConfig, initGraphCmds } from './config-cmd'\\n/** \u914D\u7F6EModel */\\nimport { useModelServiceConfig } from './config-model-service'\\n/** \u914D\u7F6EMenu */\\nimport { useMenuConfig } from './config-menu'\\n/** \u914D\u7F6EToolbar */\\nimport { useToolbarConfig } from './config-toolbar'\\n/** \u914D\u7F6E\u5FEB\u6377\u952E */\\nimport { useKeybindingConfig } from './config-keybinding'\\n/** \u914D\u7F6EDnd\u7EC4\u4EF6\u9762\u677F */\\nimport { onNodeDrop, searchService, treeDataService } from './config-dnd-panel'\\n/** \u914D\u7F6EJsonConfigForm */\\nimport { formSchemaService, formValueUpdateService, controlMapService } from './config-form'\\n\\nimport './index.less'\\nimport '@antv/xflow/dist/index.css'\\n\\nexport interface IProps {\\n  meta: { flowId: string }\\n}\\n\\nexport const Demo: React.FC<IProps> = props => {\\n  const { meta } = props\\n  const graphHooksConfig = useGraphHookConfig(props)\\n  const toolbarConfig = useToolbarConfig()\\n  const menuConfig = useMenuConfig()\\n  const cmdConfig = useCmdConfig()\\n  const modelServiceConfig = useModelServiceConfig()\\n  const keybindingConfig = useKeybindingConfig()\\n\\n  const cache = React.useMemo<{ app: IApplication } | null>(\\n    () => ({\\n      app: null,\\n    }),\\n    [],\\n  )\\n  /**\\n   * @param app \u5F53\u524DXFlow\u5DE5\u4F5C\u7A7A\u95F4\\n   * @param extensionRegistry \u5F53\u524DXFlow\u914D\u7F6E\u9879\\n   */\\n\\n  const onLoad: IAppLoad = async app => {\\n    cache.app = app\\n    initGraphCmds(cache.app)\\n  }\\n\\n  /** \u7236\u7EC4\u4EF6meta\u5C5E\u6027\u66F4\u65B0\u65F6,\u6267\u884CinitGraphCmds */\\n  React.useEffect(() => {\\n    if (cache.app) {\\n      initGraphCmds(cache.app)\\n    }\\n  }, [cache.app, meta])\\n\\n  return (\\n    <XFlow\\n      className=\\"dag-user-custom-clz\\"\\n      hookConfig={graphHooksConfig}\\n      modelServiceConfig={modelServiceConfig}\\n      commandConfig={cmdConfig}\\n      onLoad={onLoad}\\n      meta={meta}\\n    >\\n      <DagGraphExtension />\\n      <NodeTreePanel\\n        className=\\"xflow-node-panel\\"\\n        searchService={searchService}\\n        treeDataService={treeDataService}\\n        onNodeDrop={onNodeDrop}\\n        position={{ width: 230, top: 0, bottom: 0, left: 0 }}\\n        footerPosition={{ height: 0 }}\\n        bodyPosition={{ top: 40, bottom: 0, left: 0 }}\\n      />\\n      <CanvasToolbar\\n        className=\\"xflow-workspace-toolbar-top\\"\\n        layout=\\"horizontal\\"\\n        config={toolbarConfig}\\n        position={{ top: 0, left: 230, right: 290, bottom: 0 }}\\n      />\\n      <XFlowCanvas position={{ top: 40, left: 230, right: 290, bottom: 0 }}>\\n        <CanvasScaleToolbar position={{ top: 12, right: 12 }} />\\n        <CanvasContextMenu config={menuConfig} />\\n        {/* <CanvasMiniMap nodeFillColor=\\"#c5c5c5\\" /> */}\\n        <CanvasSnapline color=\\"#faad14\\" />\\n        <CanvasNodePortTooltip />\\n      </XFlowCanvas>\\n      <JsonSchemaForm\\n        controlMapService={controlMapService}\\n        formSchemaService={formSchemaService}\\n        formValueUpdateService={formValueUpdateService}\\n        bodyPosition={{ top: 0, bottom: 0, right: 0 }}\\n        position={{ width: 290, top: 0, bottom: 0, right: 0 }}\\n        footerPosition={{ height: 0 }}\\n      />\\n      <KeyBindings config={keybindingConfig} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default Demo\\n\\nDemo.defaultProps = {\\n  meta: { flowId: 'test-meta-flow-id' },\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/config-graph.tsx?dumi-raw-code
/* harmony default export */ var demos_basic_config_graphdumi_raw_code = ("import type { IProps } from './index'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { createHookConfig, DisposableCollection } from '@antv/xflow'\\nimport { DND_RENDER_ID, GROUP_NODE_RENDER_ID } from './constant'\\nimport { AlgoNode } from './react-node/algo-node'\\nimport { GroupNode } from './react-node/group'\\n\\nexport const useGraphHookConfig = createHookConfig<IProps>((config, proxy) => {\\n  // \u83B7\u53D6 Props\\n  const props = proxy.getValue()\\n  console.log('get main props', props)\\n  config.setRegisterHook(hooks => {\\n    const disposableList = [\\n      // \u6CE8\u518C\u589E\u52A0 react Node Render\\n      hooks.reactNodeRender.registerHook({\\n        name: 'add react node',\\n        handler: async renderMap => {\\n          renderMap.set(DND_RENDER_ID, AlgoNode)\\n          renderMap.set(GROUP_NODE_RENDER_ID, GroupNode)\\n        },\\n      }),\\n      // \u6CE8\u518C\u4FEE\u6539graphOptions\u914D\u7F6E\u7684\u94A9\u5B50\\n      hooks.graphOptions.registerHook({\\n        name: 'custom-x6-options',\\n        // before: 'dag-extension-x6-options',\\n        handler: async options => {\\n          options.grid = false\\n          options.keyboard = {\\n            enabled: true,\\n          }\\n        },\\n      }),\\n      // \u6CE8\u518C\u589E\u52A0 graph event\\n      hooks.x6Events.registerHook({\\n        name: 'add node click event',\\n        handler: async events => {\\n          events.push({\\n            eventName: 'node:click',\\n            // eslint-disable-next-line @typescript-eslint/no-unused-vars\\n            callback: (e, cmds, ctx) => {\\n              // \u7ED1\u5B9A\u4E8B\u4EF6\\n            },\\n          } as NsGraph.IEvent<'node:click'>)\\n        },\\n      }),\\n    ]\\n    const toDispose = new DisposableCollection()\\n    toDispose.pushAll(disposableList)\\n    return toDispose\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/constant.ts?dumi-raw-code
/* harmony default export */ var demos_basic_constantdumi_raw_code = ("export const DND_RENDER_ID = 'DND_NDOE'\\nexport const GROUP_NODE_RENDER_ID = 'GROUP_NODE_RENDER_ID'\\nexport const NODE_WIDTH = 180\\nexport const NODE_HEIGHT = 36");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/react-node/algo-node.tsx?dumi-raw-code
/* harmony default export */ var algo_nodedumi_raw_code = ("import React from 'react'\\nimport {\\n  DatabaseOutlined,\\n  RedoOutlined,\\n  CloseCircleOutlined,\\n  CheckCircleOutlined,\\n  ExclamationCircleOutlined,\\n  InfoCircleOutlined,\\n} from '@ant-design/icons'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { NsGraphStatusCommand } from '@antv/xflow'\\nimport './algo-node.less'\\n\\nconst fontStyle = { fontSize: '16px', color: '#3057e3' }\\ninterface IProps {\\n  status: NsGraphStatusCommand.StatusEnum\\n  hide: boolean\\n}\\nexport const AlgoIcon: React.FC<IProps> = props => {\\n  if (props.hide) {\\n    return null\\n  }\\n  switch (props.status) {\\n    case NsGraphStatusCommand.StatusEnum.PROCESSING:\\n      return <RedoOutlined spin style={{ color: '#c1cdf7', fontSize: '16px' }} />\\n    case NsGraphStatusCommand.StatusEnum.ERROR:\\n      return <CloseCircleOutlined style={{ color: '#ff4d4f', fontSize: '16px' }} />\\n    case NsGraphStatusCommand.StatusEnum.SUCCESS:\\n      return <CheckCircleOutlined style={{ color: '#39ca74cc', fontSize: '16px' }} />\\n    case NsGraphStatusCommand.StatusEnum.WARNING:\\n      return <ExclamationCircleOutlined style={{ color: '#faad14', fontSize: '16px' }} />\\n    case NsGraphStatusCommand.StatusEnum.DEFAULT:\\n      return <InfoCircleOutlined style={{ color: '#d9d9d9', fontSize: '16px' }} />\\n    default:\\n      return null\\n  }\\n}\\n\\nexport const AlgoNode: NsGraph.INodeRender = props => {\\n  return (\\n    <div className={\`xflow-algo-node \${props.isNodeTreePanel ? 'panel-node' : ''}\`}>\\n      <span className=\\"icon\\">\\n        <DatabaseOutlined style={fontStyle} />\\n      </span>\\n      <span className=\\"label\\">{props.data.label}</span>\\n      <span className=\\"status\\">\\n        <AlgoIcon status={props.data && props.data.status} hide={props.isNodeTreePanel} />\\n      </span>\\n    </div>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/react-node/algo-node.less?dumi-raw-code
var react_node_algo_nodedumi_raw_code = __webpack_require__("JJiW");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/react-node/group.tsx?dumi-raw-code
/* harmony default export */ var groupdumi_raw_code = ("import React from 'react'\\nimport { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'\\nimport type { NsGraph } from '@antv/xflow'\\nimport { useXFlowApp, XFlowGroupCommands, NsNodeCmd } from '@antv/xflow'\\nimport './group.less'\\n\\nexport const GroupNode: NsGraph.INodeRender = props => {\\n  const { cell } = props\\n  const app = useXFlowApp()\\n  const isCollapsed = props.data.isCollapsed || false\\n  const onExpand = e => {\\n    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {\\n      nodeId: cell.id,\\n      isCollapsed: false,\\n      collapsedSize: { width: 200, height: 40 },\\n    })\\n  }\\n  const onCollapse = e => {\\n    app.executeCommand(XFlowGroupCommands.COLLAPSE_GROUP.id, {\\n      nodeId: cell.id,\\n      isCollapsed: true,\\n      collapsedSize: { width: 200, height: 40 },\\n      gap: 3,\\n    })\\n  }\\n\\n  return (\\n    <div className=\\"xflow-group-node\\">\\n      <div className=\\"xflow-group-header\\">\\n        <div className=\\"header-left\\">{props.data.label}</div>\\n        <div className=\\"header-right\\">\\n          {isCollapsed && <PlusSquareOutlined onClick={onExpand} />}\\n          {!isCollapsed && <MinusSquareOutlined onClick={onCollapse} />}\\n        </div>\\n      </div>\\n    </div>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/react-node/group.less?dumi-raw-code
var react_node_groupdumi_raw_code = __webpack_require__("4LR5");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/config-cmd.ts?dumi-raw-code
/* harmony default export */ var config_cmddumi_raw_code = ("import type { NsGraphCmd } from '@antv/xflow'\\nimport { createCmdConfig, DisposableCollection, XFlowGraphCommands } from '@antv/xflow'\\nimport type { IApplication } from '@antv/xflow'\\nimport type { IGraphPipelineCommand } from '@antv/xflow'\\nimport { MockApi } from './service'\\nimport { commandContributions } from './cmd-extensions'\\nexport const useCmdConfig = createCmdConfig(config => {\\n  // \u6CE8\u518C\u5168\u5C40Command\u6269\u5C55\\n  config.setCommandContributions(() => commandContributions)\\n  // \u8BBE\u7F6Ehook\\n  config.setRegisterHookFn(hooks => {\\n    const list = [\\n      hooks.graphMeta.registerHook({\\n        name: 'get node config from backend api',\\n        handler: async args => {\\n          args.graphMetaService = MockApi.queryGraphMeta\\n        },\\n      }),\\n      hooks.saveGrpahData.registerHook({\\n        name: 'get node config from backend api',\\n        handler: async args => {\\n          if (!args.saveGraphDataService) {\\n            args.saveGraphDataService = MockApi.saveGraphData\\n          }\\n        },\\n      }),\\n      hooks.addNode.registerHook({\\n        name: 'get node config from backend api',\\n        handler: async args => {\\n          args.createNodeService = MockApi.addNode\\n        },\\n      }),\\n      hooks.delNode.registerHook({\\n        name: 'get edge config from backend api',\\n        handler: async args => {\\n          args.deleteNodeService = MockApi.delNode\\n        },\\n      }),\\n      hooks.addEdge.registerHook({\\n        name: 'get edge config from backend api',\\n        handler: async args => {\\n          args.createEdgeService = MockApi.addEdge\\n        },\\n      }),\\n      hooks.delEdge.registerHook({\\n        name: 'get edge config from backend api',\\n        handler: async args => {\\n          args.deleteEdgeService = MockApi.delEdge\\n        },\\n      }),\\n    ]\\n    const toDispose = new DisposableCollection()\\n    toDispose.pushAll(list)\\n    return toDispose\\n  })\\n})\\n\\n/** \u67E5\u8BE2\u56FE\u7684\u8282\u70B9\u548C\u8FB9\u7684\u6570\u636E */\\nexport const initGraphCmds = (app: IApplication) => {\\n  app.executeCommandPipeline([\\n    /** 1. \u4ECE\u670D\u52A1\u7AEF\u83B7\u53D6\u6570\u636E */\\n    {\\n      commandId: XFlowGraphCommands.LOAD_DATA.id,\\n      getCommandOption: async () => {\\n        return {\\n          args: {\\n            loadDataService: MockApi.loadGraphData,\\n          },\\n        }\\n      },\\n    } as IGraphPipelineCommand<NsGraphCmd.GraphLoadData.IArgs>,\\n    /** 2. \u6267\u884C\u5E03\u5C40\u7B97\u6CD5 */\\n    {\\n      commandId: XFlowGraphCommands.GRAPH_LAYOUT.id,\\n      getCommandOption: async ctx => {\\n        const { graphData } = ctx.getResult()\\n        return {\\n          args: {\\n            layoutType: 'dagre',\\n            layoutOptions: {\\n              type: 'dagre',\\n              /** \u5E03\u5C40\u65B9\u5411 */\\n              rankdir: 'TB',\\n              /** \u8282\u70B9\u95F4\u8DDD */\\n              nodesep: 60,\\n              /** \u5C42\u95F4\u8DDD */\\n              ranksep: 30,\\n            },\\n            graphData,\\n          },\\n        }\\n      },\\n    } as IGraphPipelineCommand<NsGraphCmd.GraphLayout.IArgs>,\\n    /** 3. \u753B\u5E03\u5185\u5BB9\u6E32\u67D3 */\\n    {\\n      commandId: XFlowGraphCommands.GRAPH_RENDER.id,\\n      getCommandOption: async ctx => {\\n        const { graphData } = ctx.getResult()\\n        return {\\n          args: {\\n            graphData,\\n          },\\n        }\\n      },\\n    } as IGraphPipelineCommand<NsGraphCmd.GraphRender.IArgs>,\\n    /** 4. \u7F29\u653E\u753B\u5E03 */\\n    {\\n      commandId: XFlowGraphCommands.GRAPH_ZOOM.id,\\n      getCommandOption: async () => {\\n        return {\\n          args: { factor: 'fit', zoomOptions: { maxScale: 0.9 } },\\n        }\\n      },\\n    } as IGraphPipelineCommand<NsGraphCmd.GraphZoom.IArgs>,\\n  ])\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/service.ts?dumi-raw-code
/* harmony default export */ var servicedumi_raw_code = ("/* eslint-disable @typescript-eslint/no-unused-vars */\\nimport { DND_RENDER_ID, NODE_WIDTH, NODE_HEIGHT } from './constant'\\nimport { uuidv4, NsGraph, NsGraphStatusCommand } from '@antv/xflow'\\nimport type { NsRenameNodeCmd } from './cmd-extensions/cmd-rename-node-modal'\\nimport type { NsNodeCmd, NsEdgeCmd, NsGraphCmd } from '@antv/xflow'\\nimport type { NsDeployDagCmd } from './cmd-extensions/cmd-deploy'\\n/** mock \u540E\u7AEF\u63A5\u53E3\u8C03\u7528 */\\nexport namespace MockApi {\\n  export const NODE_COMMON_PROPS = {\\n    renderKey: DND_RENDER_ID,\\n    width: NODE_WIDTH,\\n    height: NODE_HEIGHT,\\n  } as const\\n\\n  /** \u67E5\u56FE\u7684meta\u5143\u4FE1\u606F */\\n  export const queryGraphMeta: NsGraphCmd.GraphMeta.IArgs['graphMetaService'] = async args => {\\n    console.log('queryMeta', args)\\n    return { ...args, flowId: args.meta.flowId }\\n  }\\n  /** \u52A0\u8F7D\u56FE\u6570\u636E\u7684api */\\n  export const loadGraphData = async (meta: NsGraph.IGraphMeta) => {\\n    const nodes: NsGraph.INodeConfig[] = [\\n      {\\n        ...NODE_COMMON_PROPS,\\n        id: 'node1',\\n        label: '\u7B97\u6CD5\u8282\u70B9-1',\\n        ports: [\\n          {\\n            id: 'node1-input-1',\\n            type: NsGraph.AnchorType.INPUT,\\n            group: NsGraph.AnchorGroup.TOP,\\n            tooltip: '\u8F93\u5165\u6869',\\n          },\\n          {\\n            id: 'node1-output-1',\\n            type: NsGraph.AnchorType.OUTPUT,\\n            group: NsGraph.AnchorGroup.BOTTOM,\\n            tooltip: '\u8F93\u51FA\u6869',\\n          },\\n        ] as NsGraph.INodeAnchor[],\\n      },\\n      {\\n        ...NODE_COMMON_PROPS,\\n        id: 'node2',\\n        label: '\u7B97\u6CD5\u8282\u70B9-2',\\n        ports: [\\n          {\\n            id: 'node2-input-1',\\n            type: NsGraph.AnchorType.INPUT,\\n            group: NsGraph.AnchorGroup.TOP,\\n            tooltip: '\u8F93\u5165\u6869',\\n            connected: true,\\n          },\\n          {\\n            id: 'node2-output-1',\\n            type: NsGraph.AnchorType.OUTPUT,\\n            group: NsGraph.AnchorGroup.BOTTOM,\\n            tooltip: '\u8F93\u51FA\u6869',\\n          },\\n        ] as NsGraph.INodeAnchor[],\\n      },\\n      {\\n        ...NODE_COMMON_PROPS,\\n        id: 'node3',\\n        label: '\u7B97\u6CD5\u8282\u70B9-3',\\n        ports: [\\n          {\\n            id: 'node3-input-1',\\n            type: NsGraph.AnchorType.INPUT,\\n            group: NsGraph.AnchorGroup.TOP,\\n            tooltip: '\u8F93\u5165\u6869',\\n            connected: true,\\n          },\\n          {\\n            id: 'node3-output-1',\\n            type: NsGraph.AnchorType.OUTPUT,\\n            group: NsGraph.AnchorGroup.BOTTOM,\\n            tooltip: '\u8F93\u51FA\u6869',\\n          },\\n        ] as NsGraph.INodeAnchor[],\\n      },\\n      {\\n        ...NODE_COMMON_PROPS,\\n        id: 'node4',\\n        label: '\u7B97\u6CD5\u8282\u70B9-4',\\n        ports: [\\n          {\\n            id: 'node4-input-1',\\n            type: NsGraph.AnchorType.INPUT,\\n            group: NsGraph.AnchorGroup.TOP,\\n            tooltip: '\u8F93\u5165\u6869',\\n            connected: true,\\n          },\\n          {\\n            id: 'node4-output-1',\\n            type: NsGraph.AnchorType.OUTPUT,\\n            group: NsGraph.AnchorGroup.BOTTOM,\\n            tooltip: '\u8F93\u51FA\u6869',\\n          },\\n        ] as NsGraph.INodeAnchor[],\\n      },\\n    ]\\n    const edges: NsGraph.IEdgeConfig[] = [\\n      {\\n        id: uuidv4(),\\n        source: 'node1',\\n        target: 'node2',\\n        sourcePortId: 'node1-output-1',\\n        targetPortId: 'node2-input-1',\\n      },\\n      {\\n        id: uuidv4(),\\n        source: 'node1',\\n        target: 'node3',\\n        sourcePortId: 'node1-output-1',\\n        targetPortId: 'node3-input-1',\\n      },\\n      {\\n        id: uuidv4(),\\n        source: 'node1',\\n        target: 'node4',\\n        sourcePortId: 'node1-output-1',\\n        targetPortId: 'node4-input-1',\\n      },\\n    ]\\n    return { nodes, edges }\\n  }\\n  /** \u4FDD\u5B58\u56FE\u6570\u636E\u7684api */\\n  export const saveGraphData: NsGraphCmd.SaveGraphData.IArgs['saveGraphDataService'] = async (\\n    meta: NsGraph.IGraphMeta,\\n    graphData: NsGraph.IGraphData,\\n  ) => {\\n    console.log('saveGraphData api', meta, graphData)\\n    return {\\n      success: true,\\n      data: graphData,\\n    }\\n  }\\n  /** \u90E8\u7F72\u56FE\u6570\u636E\u7684api */\\n  export const deployDagService: NsDeployDagCmd.IDeployDagService = async (\\n    meta: NsGraph.IGraphMeta,\\n    graphData: NsGraph.IGraphData,\\n  ) => {\\n    console.log('deployService api', meta, graphData)\\n    return {\\n      success: true,\\n      data: graphData,\\n    }\\n  }\\n\\n  /** \u6DFB\u52A0\u8282\u70B9api */\\n  export const addNode: NsNodeCmd.AddNode.IArgs['createNodeService'] = async (\\n    args: NsNodeCmd.AddNode.IArgs,\\n  ) => {\\n    console.info('addNode service running, add node:', args)\\n    const portItems = [\\n      {\\n        type: NsGraph.AnchorType.INPUT,\\n        group: NsGraph.AnchorGroup.TOP,\\n        tooltip: '\u8F93\u5165\u68691',\\n      },\\n      {\\n        type: NsGraph.AnchorType.INPUT,\\n        group: NsGraph.AnchorGroup.TOP,\\n        tooltip: '\u8F93\u5165\u68692',\\n      },\\n      {\\n        type: NsGraph.AnchorType.INPUT,\\n        group: NsGraph.AnchorGroup.TOP,\\n        tooltip: '\u8F93\u5165\u68693',\\n      },\\n      {\\n        type: NsGraph.AnchorType.OUTPUT,\\n        group: NsGraph.AnchorGroup.BOTTOM,\\n        tooltip: '\u8F93\u51FA\u6869',\\n      },\\n    ] as NsGraph.INodeAnchor[]\\n\\n    const { id, ports = portItems, groupChildren } = args.nodeConfig\\n    const nodeId = id || uuidv4()\\n    /** \u8FD9\u91CC\u6DFB\u52A0\u8FDE\u7EBF\u6869 */\\n    const node: NsNodeCmd.AddNode.IArgs['nodeConfig'] = {\\n      ...NODE_COMMON_PROPS,\\n      ...args.nodeConfig,\\n      id: nodeId,\\n      ports: (ports as NsGraph.INodeAnchor[]).map(port => {\\n        return { ...port, id: uuidv4() }\\n      }),\\n    }\\n    /** group\u6CA1\u6709\u94FE\u63A5\u6869 */\\n    if (groupChildren && groupChildren.length) {\\n      node.ports = []\\n    }\\n    return node\\n  }\\n\\n  /** \u66F4\u65B0\u8282\u70B9 name\uFF0C\u53EF\u80FD\u4F9D\u8D56\u63A5\u53E3\u5224\u65AD\u662F\u5426\u91CD\u540D\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u65F6\uFF0C\u4E0D\u66F4\u65B0 */\\n  export const renameNode: NsRenameNodeCmd.IUpdateNodeNameService = async (\\n    name,\\n    node,\\n    graphMeta,\\n  ) => {\\n    console.log('rename node', node, name, graphMeta)\\n    return { err: null, nodeName: name }\\n  }\\n\\n  /** \u5220\u9664\u8282\u70B9\u7684api */\\n  export const delNode: NsNodeCmd.DelNode.IArgs['deleteNodeService'] = async args => {\\n    console.info('delNode service running, del node:', args.nodeConfig.id)\\n    return true\\n  }\\n\\n  /** \u6DFB\u52A0\u8FB9\u7684api */\\n  export const addEdge: NsEdgeCmd.AddEdge.IArgs['createEdgeService'] = async args => {\\n    console.info('addEdge service running, add edge:', args)\\n    const { edgeConfig } = args\\n    return {\\n      ...edgeConfig,\\n      id: uuidv4(),\\n    }\\n  }\\n\\n  /** \u5220\u9664\u8FB9\u7684api */\\n  export const delEdge: NsEdgeCmd.DelEdge.IArgs['deleteEdgeService'] = async args => {\\n    console.info('delEdge service running, del edge:', args)\\n    return true\\n  }\\n\\n  let runningNodeId = 0\\n  const statusMap = {} as NsGraphStatusCommand.IStatusInfo['statusMap']\\n  let graphStatus: NsGraphStatusCommand.StatusEnum = NsGraphStatusCommand.StatusEnum.DEFAULT\\n  export const graphStatusService: NsGraphStatusCommand.IArgs['graphStatusService'] = async () => {\\n    if (runningNodeId < 4) {\\n      statusMap[\`node\${runningNodeId}\`] = { status: NsGraphStatusCommand.StatusEnum.SUCCESS }\\n      statusMap[\`node\${runningNodeId + 1}\`] = { status: NsGraphStatusCommand.StatusEnum.PROCESSING }\\n      runningNodeId += 1\\n      graphStatus = NsGraphStatusCommand.StatusEnum.PROCESSING\\n    } else {\\n      runningNodeId = 0\\n      statusMap.node4 = { status: NsGraphStatusCommand.StatusEnum.SUCCESS }\\n      graphStatus = NsGraphStatusCommand.StatusEnum.SUCCESS\\n    }\\n    return {\\n      graphStatus: graphStatus,\\n      statusMap: statusMap,\\n    }\\n  }\\n  export const stopGraphStatusService: NsGraphStatusCommand.IArgs['graphStatusService'] =\\n    async () => {\\n      Object.entries(statusMap).forEach(([, val]) => {\\n        const { status } = val as { status: NsGraphStatusCommand.StatusEnum }\\n        if (status === NsGraphStatusCommand.StatusEnum.PROCESSING) {\\n          val.status = NsGraphStatusCommand.StatusEnum.ERROR\\n        }\\n      })\\n      return {\\n        graphStatus: NsGraphStatusCommand.StatusEnum.ERROR,\\n        statusMap: statusMap,\\n      }\\n    }\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/cmd-extensions/index.ts?dumi-raw-code
/* harmony default export */ var cmd_extensionsdumi_raw_code = ("import { TestAsyncCommand, NsTestCmd } from './cmd-async-test'\\nimport { DeployDagCommand, NsDeployDagCmd } from './cmd-deploy'\\nimport { RenameNodeCommand, NsRenameNodeCmd } from './cmd-rename-node-modal'\\nimport type { ICommandContributionConfig } from '@antv/xflow'\\n/** \u6CE8\u518C\u6210\u4E3A\u53EF\u4EE5\u6267\u884C\u7684\u547D\u4EE4 */\\n\\nexport const commandContributions: ICommandContributionConfig[] = [\\n  {\\n    ...NsTestCmd,\\n    CommandHandler: TestAsyncCommand,\\n  },\\n  {\\n    ...NsDeployDagCmd,\\n    CommandHandler: DeployDagCommand,\\n  },\\n  {\\n    ...NsRenameNodeCmd,\\n    CommandHandler: RenameNodeCommand,\\n  },\\n]");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/cmd-extensions/cmd-async-test.ts?dumi-raw-code
/* harmony default export */ var cmd_async_testdumi_raw_code = ("import type { ICmdHooks as IHooks } from '@antv/xflow'\\nimport type { HookHub } from '@antv/xflow-hook'\\nimport type { IArgsBase, ICommandHandler } from '@antv/xflow'\\nimport { ICommandContextProvider, ManaSyringe } from '@antv/xflow'\\nimport { CustomCommands } from './constants'\\n\\ntype ICommand = ICommandHandler<NsTestCmd.IArgs, NsTestCmd.IResult, NsTestCmd.ICmdHooks>\\n\\nconst { inject, injectable } = ManaSyringe\\nexport namespace NsTestCmd {\\n  /** Command: \u7528\u4E8E\u6CE8\u518Cnamed factory */\\n  export const command = CustomCommands.TEST_ASYNC_CMD\\n  /** hook name */\\n  export const hookKey = 'testCmd'\\n  /** hook \u53C2\u6570\u7C7B\u578B */\\n  export interface IArgs extends IArgsBase {\\n    test: any\\n  }\\n  /** hook handler \u8FD4\u56DE\u7C7B\u578B */\\n  export interface IResult {\\n    test: any\\n  }\\n  /** hooks \u7C7B\u578B */\\n  export interface ICmdHooks extends IHooks {\\n    testCmd: HookHub<IArgs, IResult>\\n  }\\n}\\n\\n@injectable()\\n/** \u521B\u5EFA\u8282\u70B9\u547D\u4EE4 */\\nexport class TestAsyncCommand implements ICommand {\\n  /** api */\\n  @inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']\\n\\n  /** \u6267\u884CCmd */\\n  execute = async () => {\\n    const ctx = this.contextProvider()\\n    const hooks = ctx.getHooks()\\n    const { args, hooks: runtimeHook } = ctx.getArgs()\\n    const graph = await ctx.getX6Graph()\\n    const result = await hooks.testCmd.call(\\n      args,\\n      async handlerArgs => {\\n        const { commandService, modelService, graphMeta, test } = handlerArgs\\n        console.log(graph, commandService, modelService, graphMeta, test)\\n        return { test: true }\\n      },\\n      runtimeHook,\\n    )\\n\\n    ctx.setResult(result)\\n    return this\\n  }\\n\\n  /** undo cmd */\\n  undo = async () => {\\n    if (this.isUndoable()) {\\n      const ctx = this.contextProvider()\\n      ctx.undo()\\n    }\\n    return this\\n  }\\n\\n  /** redo cmd */\\n  redo = async () => {\\n    if (!this.isUndoable()) {\\n      await this.execute()\\n    }\\n    return this\\n  }\\n\\n  isUndoable(): boolean {\\n    const ctx = this.contextProvider()\\n    return ctx.isUndoable()\\n  }\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/cmd-extensions/constants.ts?dumi-raw-code
/* harmony default export */ var constantsdumi_raw_code = ("import type { IGraphCommand } from '@antv/xflow'\\n\\n/** \u8282\u70B9\u547D\u4EE4 */\\nexport namespace CustomCommands {\\n  const category = '\u8282\u70B9\u64CD\u4F5C'\\n  /** \u5F02\u6B65\u8BF7\u6C42demo */\\n  export const TEST_ASYNC_CMD: IGraphCommand = {\\n    id: 'xflow:async-cmd',\\n    label: '\u5F02\u6B65\u8BF7\u6C42',\\n    category,\\n  }\\n  /** \u91CD\u547D\u540D\u8282\u70B9\u5F39\u7A97 */\\n  export const SHOW_RENAME_MODAL: IGraphCommand = {\\n    id: 'xflow:rename-node-modal',\\n    label: '\u6253\u5F00\u91CD\u547D\u540D\u5F39\u7A97',\\n    category,\\n  }\\n  /** \u90E8\u7F72\u670D\u52A1 */\\n  export const DEPLOY_SERVICE: IGraphCommand = {\\n    id: 'xflow:deploy-service',\\n    label: '\u90E8\u7F72\u670D\u52A1',\\n    category,\\n  }\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/cmd-extensions/cmd-deploy.ts?dumi-raw-code
/* harmony default export */ var cmd_deploydumi_raw_code = ("import { inject, injectable } from 'mana-syringe'\\nimport type { NsGraphCmd, ICmdHooks as IHooks, NsGraph } from '@antv/xflow'\\nimport type { HookHub } from '@antv/xflow-hook'\\nimport type { IArgsBase, ICommandHandler } from '@antv/xflow'\\nimport { XFlowGraphCommands, ManaSyringe } from '@antv/xflow'\\nimport { ICommandContextProvider } from '@antv/xflow'\\nimport { CustomCommands } from './constants'\\n\\ntype ICommand = ICommandHandler<\\n  NsDeployDagCmd.IArgs,\\n  NsDeployDagCmd.IResult,\\n  NsDeployDagCmd.ICmdHooks\\n>\\n\\nexport namespace NsDeployDagCmd {\\n  /** Command: \u7528\u4E8E\u6CE8\u518Cnamed factory */\\n  export const command = CustomCommands.DEPLOY_SERVICE\\n  /** hook name */\\n  export const hookKey = 'deployDag'\\n  /** hook \u53C2\u6570\u7C7B\u578B */\\n  export interface IArgs extends IArgsBase {\\n    deployDagService: IDeployDagService\\n  }\\n  export interface IDeployDagService {\\n    (meta: NsGraph.IGraphMeta, data: NsGraph.IGraphData): Promise<{ success: boolean }>\\n  }\\n  /** hook handler \u8FD4\u56DE\u7C7B\u578B */\\n  export interface IResult {\\n    success: boolean\\n  }\\n  /** hooks \u7C7B\u578B */\\n  export interface ICmdHooks extends IHooks {\\n    deployDag: HookHub<IArgs, IResult>\\n  }\\n}\\n\\n@ManaSyringe.injectable()\\n/** \u90E8\u7F72\u753B\u5E03\u6570\u636E */\\nexport class DeployDagCommand implements ICommand {\\n  /** api */\\n  @ManaSyringe.inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']\\n\\n  /** \u6267\u884CCmd */\\n  execute = async () => {\\n    const ctx = this.contextProvider()\\n    const { args, hooks: runtimeHook } = ctx.getArgs()\\n    const hooks = ctx.getHooks()\\n\\n    const result = await hooks.deployDag.call(args, async args => {\\n      const { commandService, deployDagService } = args\\n      /** \u6267\u884CCommand */\\n      await commandService.executeCommand(\\n        XFlowGraphCommands.SAVE_GRAPH_DATA.id,\\n        {\\n          saveGraphDataService: async (meta, graph) => {\\n            await deployDagService(meta, graph)\\n          },\\n        } as NsGraphCmd.SaveGraphData.IArgs,\\n        runtimeHook,\\n      )\\n      return { success: true }\\n    })\\n\\n    ctx.setResult(result)\\n    return this\\n  }\\n\\n  /** undo cmd */\\n  undo = async () => {\\n    if (this.isUndoable()) {\\n      const ctx = this.contextProvider()\\n      ctx.undo()\\n    }\\n    return this\\n  }\\n\\n  /** redo cmd */\\n  redo = async () => {\\n    if (!this.isUndoable()) {\\n      await this.execute()\\n    }\\n    return this\\n  }\\n\\n  isUndoable(): boolean {\\n    const ctx = this.contextProvider()\\n    return ctx.isUndoable()\\n  }\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/cmd-extensions/cmd-rename-node-modal.tsx?dumi-raw-code
/* harmony default export */ var cmd_rename_node_modaldumi_raw_code = ("import React from 'react'\\nimport type { HookHub, ICmdHooks as IHooks, NsGraph, IModelService } from '@antv/xflow'\\nimport { Deferred, ManaSyringe } from '@antv/xflow'\\nimport type { FormInstance } from 'antd'\\nimport { Modal, Form, Input, ConfigProvider } from 'antd'\\n\\nimport type { IArgsBase, ICommandHandler, IGraphCommandService } from '@antv/xflow'\\nimport { ICommandContextProvider } from '@antv/xflow'\\n\\nimport { CustomCommands } from './constants'\\n\\nimport 'antd/es/modal/style/index.css'\\n\\ntype ICommand = ICommandHandler<\\n  NsRenameNodeCmd.IArgs,\\n  NsRenameNodeCmd.IResult,\\n  NsRenameNodeCmd.ICmdHooks\\n>\\n\\nexport namespace NsRenameNodeCmd {\\n  /** Command: \u7528\u4E8E\u6CE8\u518Cnamed factory */\\n  export const command = CustomCommands.SHOW_RENAME_MODAL\\n  /** hook name */\\n  export const hookKey = 'renameNode'\\n  /** hook \u53C2\u6570\u7C7B\u578B */\\n  export interface IArgs extends IArgsBase {\\n    nodeConfig: NsGraph.INodeConfig\\n    updateNodeNameService: IUpdateNodeNameService\\n  }\\n  export interface IUpdateNodeNameService {\\n    (newName: string, nodeConfig: NsGraph.INodeConfig, meta: NsGraph.IGraphMeta): Promise<{\\n      err: string | null\\n      nodeName: string\\n    }>\\n  }\\n  /** hook handler \u8FD4\u56DE\u7C7B\u578B */\\n  export interface IResult {\\n    err: string | null\\n    preNodeName?: string\\n    currenNodetName?: string\\n  }\\n  /** hooks \u7C7B\u578B */\\n  export interface ICmdHooks extends IHooks {\\n    renameNode: HookHub<IArgs, IResult>\\n  }\\n}\\n\\n@ManaSyringe.injectable()\\n/** \u90E8\u7F72\u753B\u5E03\u6570\u636E */\\nexport class RenameNodeCommand implements ICommand {\\n  /** api */\\n  @ManaSyringe.inject(ICommandContextProvider) contextProvider: ICommand['contextProvider']\\n\\n  /** \u6267\u884CCmd */\\n  execute = async () => {\\n    const ctx = this.contextProvider()\\n    const { args, hooks: runtimeHook } = ctx.getArgs()\\n    const hooks = ctx.getHooks()\\n    const result = await hooks.renameNode.call(args, async args => {\\n      const { nodeConfig, graphMeta, commandService, modelService, updateNodeNameService } = args\\n      const preNodeName = nodeConfig.label\\n\\n      const getAppContext: IGetAppCtx = () => {\\n        return {\\n          graphMeta,\\n          commandService,\\n          modelService,\\n          updateNodeNameService,\\n        }\\n      }\\n\\n      const x6Graph = await ctx.getX6Graph()\\n      const cell = x6Graph.getCellById(nodeConfig.id)\\n\\n      if (!cell || !cell.isNode()) {\\n        throw new Error(\`\${nodeConfig.id} is not a valid node\`)\\n      }\\n      /** \u901A\u8FC7modal \u83B7\u53D6 new name */\\n      const newName = await showModal(nodeConfig, getAppContext)\\n      /** \u66F4\u65B0 node name  */\\n      if (newName) {\\n        const cellData = cell.getData<NsGraph.INodeConfig>()\\n        cell.setData({ ...cellData, label: newName } as NsGraph.INodeConfig)\\n        return { err: null, preNodeName, currenNodetName: newName }\\n      }\\n      return { err: null, preNodeName, currenNodetName: '' }\\n    })\\n\\n    ctx.setResult(result)\\n    return this\\n  }\\n\\n  /** undo cmd */\\n  undo = async () => {\\n    if (this.isUndoable()) {\\n      const ctx = this.contextProvider()\\n      ctx.undo()\\n    }\\n    return this\\n  }\\n\\n  /** redo cmd */\\n  redo = async () => {\\n    if (!this.isUndoable()) {\\n      await this.execute()\\n    }\\n    return this\\n  }\\n\\n  isUndoable(): boolean {\\n    const ctx = this.contextProvider()\\n    return ctx.isUndoable()\\n  }\\n}\\n\\nexport interface IGetAppCtx {\\n  (): {\\n    graphMeta: NsGraph.IGraphMeta\\n    commandService: IGraphCommandService\\n    modelService: IModelService\\n    updateNodeNameService: NsRenameNodeCmd.IUpdateNodeNameService\\n  }\\n}\\n\\nexport type IModalInstance = ReturnType<typeof Modal.confirm>\\nexport interface IFormProps {\\n  newNodeName: string\\n}\\n\\nconst layout = {\\n  labelCol: { span: 5 },\\n  wrapperCol: { span: 19 },\\n}\\n\\nfunction showModal(node: NsGraph.INodeConfig, getAppContext: IGetAppCtx) {\\n  /** showModal \u8FD4\u56DE\u4E00\u4E2APromise */\\n  const defer = new Deferred<string | void>()\\n\\n  /** modal\u786E\u8BA4\u4FDD\u5B58\u903B\u8F91 */\\n  class ModalCache {\\n    static modal: IModalInstance\\n    static form: FormInstance<IFormProps>\\n  }\\n\\n  /** modal\u786E\u8BA4\u4FDD\u5B58\u903B\u8F91 */\\n  const onOk = async () => {\\n    const { form, modal } = ModalCache\\n    const appContext = getAppContext()\\n    const { updateNodeNameService, graphMeta } = appContext\\n    try {\\n      modal.update({ okButtonProps: { loading: true } })\\n      await form.validateFields()\\n      const values = await form.getFieldsValue()\\n      const newName: string = values.newNodeName\\n      /** \u6267\u884C backend service */\\n      if (updateNodeNameService) {\\n        const { err, nodeName } = await updateNodeNameService(newName, node, graphMeta)\\n        if (err) {\\n          throw new Error(err)\\n        }\\n        defer.resolve(nodeName)\\n      }\\n      /** \u66F4\u65B0\u6210\u529F\u540E\uFF0C\u5173\u95EDmodal */\\n      onHide()\\n    } catch (error) {\\n      console.error(error)\\n      /** \u5982\u679Cresolve\u7A7A\u5B57\u7B26\u4E32\u5219\u4E0D\u66F4\u65B0 */\\n      modal.update({ okButtonProps: { loading: false } })\\n    }\\n  }\\n\\n  /** modal\u9500\u6BC1\u903B\u8F91 */\\n  const onHide = () => {\\n    modal.destroy()\\n    ModalCache.form = null as any\\n    ModalCache.modal = null as any\\n    container.destory()\\n  }\\n\\n  /** modal\u5185\u5BB9 */\\n  const ModalContent = () => {\\n    const [form] = Form.useForm<IFormProps>()\\n    /** \u7F13\u5B58form\u5B9E\u4F8B */\\n    ModalCache.form = form\\n\\n    return (\\n      <div>\\n        <ConfigProvider>\\n          <Form form={form} {...layout} initialValues={{ newNodeName: node.label }}>\\n            <Form.Item\\n              name=\\"newNodeName\\"\\n              label=\\"\u8282\u70B9\u540D\\"\\n              rules={[\\n                { required: true, message: '\u8BF7\u8F93\u5165\u65B0\u8282\u70B9\u540D' },\\n                { min: 3, message: '\u8282\u70B9\u540D\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26' },\\n              ]}\\n            >\\n              <Input />\\n            </Form.Item>\\n          </Form>\\n        </ConfigProvider>\\n      </div>\\n    )\\n  }\\n  /** \u521B\u5EFAmodal dom\u5BB9\u5668 */\\n  const container = createContainer()\\n  /** \u521B\u5EFAmodal */\\n  const modal = Modal.confirm({\\n    title: '\u91CD\u547D\u540D',\\n    content: <ModalContent />,\\n    getContainer: () => {\\n      return container.element\\n    },\\n    okButtonProps: {\\n      onClick: e => {\\n        e.stopPropagation()\\n        onOk()\\n      },\\n    },\\n    onCancel: () => {\\n      onHide()\\n    },\\n    afterClose: () => {\\n      onHide()\\n    },\\n  })\\n\\n  /** \u7F13\u5B58modal\u5B9E\u4F8B */\\n  ModalCache.modal = modal\\n\\n  /** showModal \u8FD4\u56DE\u4E00\u4E2APromise\uFF0C\u7528\u4E8Eawait */\\n  return defer.promise\\n}\\n\\nconst createContainer = () => {\\n  const div = document.createElement('div')\\n  div.classList.add('xflow-modal-container')\\n  window.document.body.append(div)\\n  return {\\n    element: div,\\n    destory: () => {\\n      window.document.body.removeChild(div)\\n    },\\n  }\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/config-model-service.ts?dumi-raw-code
/* harmony default export */ var config_model_servicedumi_raw_code = ("import type { IModelService } from '@antv/xflow'\\nimport { createModelServiceConfig } from '@antv/xflow'\\n\\nexport namespace NS_LOADING_STATE {\\n  export const id = 'test'\\n  export interface IState {\\n    loading: boolean\\n  }\\n}\\n\\nexport const useModelServiceConfig = createModelServiceConfig(config => {\\n  config.registerModel(registry => {\\n    return registry.registerModel({\\n      id: NS_LOADING_STATE.id,\\n      getInitialValue: () => {\\n        loading: true\\n      },\\n    })\\n  })\\n})\\n\\nexport const useLoadingState = async (contextService: IModelService) => {\\n  const ctx = await contextService.awaitModel<NS_LOADING_STATE.IState>(NS_LOADING_STATE.id)\\n  return ctx.getValidValue()\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/config-menu.ts?dumi-raw-code
/* harmony default export */ var config_menudumi_raw_code = ("/* eslint-disable @typescript-eslint/no-unused-vars */\\nimport type { NsNodeCmd, NsEdgeCmd, IMenuOptions, NsGraph } from '@antv/xflow'\\nimport type { NsRenameNodeCmd } from './cmd-extensions/cmd-rename-node-modal'\\nimport { createCtxMenuConfig, MenuItemType } from '@antv/xflow'\\nimport { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'\\nimport { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'\\nimport { CustomCommands } from './cmd-extensions/constants'\\nimport { MockApi } from './service'\\n\\n/** menuitem \u914D\u7F6E */\\nexport namespace NsMenuItemConfig {\\n  /** \u6CE8\u518C\u83DC\u5355\u4F9D\u8D56\u7684icon */\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('EditOutlined', EditOutlined)\\n  IconStore.set('StopOutlined', StopOutlined)\\n\\n  export const DELETE_EDGE: IMenuOptions = {\\n    id: XFlowEdgeCommands.DEL_EDGE.id,\\n    label: '\u5220\u9664\u8FB9',\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n        edgeConfig: target.data as NsGraph.IEdgeConfig,\\n      })\\n    },\\n  }\\n\\n  export const DELETE_NODE: IMenuOptions = {\\n    id: XFlowNodeCommands.DEL_NODE.id,\\n    label: '\u5220\u9664\u8282\u70B9',\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const EMPTY_MENU: IMenuOptions = {\\n    id: 'EMPTY_MENU_ITEM',\\n    label: '\u6682\u65E0\u53EF\u7528',\\n    isEnabled: false,\\n    iconName: 'DeleteOutlined',\\n  }\\n\\n  export const RENAME_NODE: IMenuOptions = {\\n    id: CustomCommands.SHOW_RENAME_MODAL.id,\\n    label: '\u91CD\u547D\u540D',\\n    isVisible: true,\\n    iconName: 'EditOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      const nodeConfig = target.data as NsGraph.INodeConfig\\n      commandService.executeCommand<NsRenameNodeCmd.IArgs>(CustomCommands.SHOW_RENAME_MODAL.id, {\\n        nodeConfig,\\n        updateNodeNameService: MockApi.renameNode,\\n      })\\n    },\\n  }\\n\\n  export const SEPARATOR: IMenuOptions = {\\n    id: 'separator',\\n    type: MenuItemType.Separator,\\n  }\\n}\\n\\nexport const useMenuConfig = createCtxMenuConfig(config => {\\n  config.setMenuModelService(async (target, model, modelService, toDispose) => {\\n    const { type, cell } = target\\n    console.log(type)\\n    switch (type) {\\n      /** \u8282\u70B9\u83DC\u5355 */\\n      case 'node':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsMenuItemConfig.DELETE_NODE, NsMenuItemConfig.RENAME_NODE],\\n        })\\n        break\\n      /** \u8FB9\u83DC\u5355 */\\n      case 'edge':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsMenuItemConfig.DELETE_EDGE],\\n        })\\n        break\\n      /** \u753B\u5E03\u83DC\u5355 */\\n      case 'blank':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsMenuItemConfig.EMPTY_MENU],\\n        })\\n        break\\n      /** \u9ED8\u8BA4\u83DC\u5355 */\\n      default:\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsMenuItemConfig.EMPTY_MENU],\\n        })\\n        break\\n    }\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/config-toolbar.tsx?dumi-raw-code
/* harmony default export */ var config_toolbardumi_raw_code = ("import type { IToolbarItemOptions } from '@antv/xflow'\\nimport { createToolbarConfig, uuidv4 } from '@antv/xflow'\\nimport type { IModelService } from '@antv/xflow'\\nimport {\\n  XFlowGraphCommands,\\n  XFlowGroupCommands,\\n  XFlowDagCommands,\\n  NsGraphStatusCommand,\\n  MODELS,\\n  IconStore,\\n} from '@antv/xflow'\\nimport {\\n  UngroupOutlined,\\n  SaveOutlined,\\n  CloudSyncOutlined,\\n  GroupOutlined,\\n  GatewayOutlined,\\n  PlaySquareOutlined,\\n  StopOutlined,\\n} from '@ant-design/icons'\\nimport { MockApi } from './service'\\nimport { CustomCommands } from './cmd-extensions/constants'\\nimport type { NsDeployDagCmd } from './cmd-extensions/cmd-deploy'\\nimport type { NsGraphCmd, NsGroupCmd } from '@antv/xflow'\\nimport { GROUP_NODE_RENDER_ID } from './constant'\\nimport { Popconfirm } from 'antd'\\nimport React from 'react'\\n\\nexport namespace NSToolbarConfig {\\n  /** \u6CE8\u518Cicon \u7C7B\u578B */\\n  IconStore.set('SaveOutlined', SaveOutlined)\\n  IconStore.set('CloudSyncOutlined', CloudSyncOutlined)\\n  IconStore.set('GatewayOutlined', GatewayOutlined)\\n  IconStore.set('GroupOutlined', GroupOutlined)\\n  IconStore.set('UngroupOutlined', UngroupOutlined)\\n  IconStore.set('PlaySquareOutlined', PlaySquareOutlined)\\n  IconStore.set('StopOutlined', StopOutlined)\\n\\n  /** toolbar\u4F9D\u8D56\u7684\u72B6\u6001 */\\n  export interface IToolbarState {\\n    isMultiSelctionActive: boolean\\n    isNodeSelected: boolean\\n    isGroupSelected: boolean\\n    isProcessing: boolean\\n  }\\n\\n  export const getDependencies = async (modelService: IModelService) => {\\n    return [\\n      await MODELS.SELECTED_CELLS.getModel(modelService),\\n      await MODELS.GRAPH_ENABLE_MULTI_SELECT.getModel(modelService),\\n      await NsGraphStatusCommand.MODEL.getModel(modelService),\\n    ]\\n  }\\n\\n  /** toolbar\u4F9D\u8D56\u7684\u72B6\u6001 */\\n  export const getToolbarState = async (modelService: IModelService) => {\\n    // isMultiSelctionActive\\n    const { isEnable: isMultiSelctionActive } = await MODELS.GRAPH_ENABLE_MULTI_SELECT.useValue(\\n      modelService,\\n    )\\n    // isGroupSelected\\n    const isGroupSelected = await MODELS.IS_GROUP_SELECTED.useValue(modelService)\\n    // isNormalNodesSelected: node\u4E0D\u80FD\u662FGroupNode\\n    const isNormalNodesSelected = await MODELS.IS_NORMAL_NODES_SELECTED.useValue(modelService)\\n    // statusInfo\\n    const statusInfo = await NsGraphStatusCommand.MODEL.useValue(modelService)\\n\\n    return {\\n      isNodeSelected: isNormalNodesSelected,\\n      isGroupSelected,\\n      isMultiSelctionActive,\\n      isProcessing: statusInfo.graphStatus === NsGraphStatusCommand.StatusEnum.PROCESSING,\\n    } as NSToolbarConfig.IToolbarState\\n  }\\n\\n  export const getToolbarItems = async (state: IToolbarState) => {\\n    const toolbarGroup1: IToolbarItemOptions[] = []\\n    const toolbarGroup2: IToolbarItemOptions[] = []\\n    const toolbarGroup3: IToolbarItemOptions[] = []\\n    /** \u4FDD\u5B58\u6570\u636E */\\n    toolbarGroup1.push({\\n      id: XFlowGraphCommands.SAVE_GRAPH_DATA.id,\\n      iconName: 'SaveOutlined',\\n      tooltip: '\u4FDD\u5B58\u6570\u636E',\\n      onClick: async ({ commandService }) => {\\n        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(\\n          XFlowGraphCommands.SAVE_GRAPH_DATA.id,\\n          { saveGraphDataService: (meta, graphData) => MockApi.saveGraphData(meta, graphData) },\\n        )\\n      },\\n    })\\n    /** \u90E8\u7F72\u670D\u52A1\u6309\u94AE */\\n    toolbarGroup1.push({\\n      iconName: 'CloudSyncOutlined',\\n      tooltip: '\u90E8\u7F72\u670D\u52A1',\\n      id: CustomCommands.DEPLOY_SERVICE.id,\\n      onClick: ({ commandService }) => {\\n        commandService.executeCommand<NsDeployDagCmd.IArgs>(CustomCommands.DEPLOY_SERVICE.id, {\\n          deployDagService: (meta, graphData) => MockApi.deployDagService(meta, graphData),\\n        })\\n      },\\n    })\\n    /** \u5F00\u542F\u6846\u9009 */\\n    toolbarGroup2.push({\\n      id: XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id,\\n      tooltip: '\u5F00\u542F\u6846\u9009',\\n      iconName: 'GatewayOutlined',\\n      active: state.isMultiSelctionActive,\\n      onClick: async ({ commandService }) => {\\n        commandService.executeCommand<NsGraphCmd.GraphToggleMultiSelect.IArgs>(\\n          XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id,\\n          {},\\n        )\\n      },\\n    })\\n    /** \u65B0\u5EFA\u7FA4\u7EC4 */\\n    toolbarGroup2.push({\\n      id: XFlowGroupCommands.ADD_GROUP.id,\\n      tooltip: '\u65B0\u5EFA\u7FA4\u7EC4',\\n      iconName: 'GroupOutlined',\\n      isEnabled: state.isNodeSelected,\\n      onClick: async ({ commandService, modelService }) => {\\n        const cells = await MODELS.SELECTED_CELLS.useValue(modelService)\\n        const groupChildren = cells.map(cell => cell.id)\\n        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.ADD_GROUP.id, {\\n          nodeConfig: {\\n            id: uuidv4(),\\n            renderKey: GROUP_NODE_RENDER_ID,\\n            groupChildren,\\n            groupCollapsedSize: { width: 200, height: 40 },\\n            label: '\u65B0\u5EFA\u7FA4\u7EC4',\\n          },\\n        })\\n      },\\n    })\\n    /** \u89E3\u6563\u7FA4\u7EC4 */\\n    toolbarGroup2.push({\\n      id: XFlowGroupCommands.DEL_GROUP.id,\\n      tooltip: '\u89E3\u6563\u7FA4\u7EC4',\\n      iconName: 'UngroupOutlined',\\n      isEnabled: state.isGroupSelected,\\n      onClick: async ({ commandService, modelService }) => {\\n        const cell = await MODELS.SELECTED_NODE.useValue(modelService)\\n        const nodeConfig = cell.getData()\\n        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.DEL_GROUP.id, {\\n          nodeConfig: nodeConfig,\\n        })\\n      },\\n    })\\n\\n    toolbarGroup3.push({\\n      id: XFlowDagCommands.QUERY_GRAPH_STATUS.id + 'play',\\n      tooltip: '\u5F00\u59CB\u6267\u884C',\\n      iconName: 'PlaySquareOutlined',\\n      isEnabled: !state.isProcessing,\\n      onClick: async ({ commandService }) => {\\n        commandService.executeCommand<NsGraphStatusCommand.IArgs>(\\n          XFlowDagCommands.QUERY_GRAPH_STATUS.id,\\n          {\\n            graphStatusService: MockApi.graphStatusService,\\n            loopInterval: 3000,\\n          },\\n        )\\n      },\\n    })\\n    toolbarGroup3.push({\\n      id: XFlowDagCommands.QUERY_GRAPH_STATUS.id + 'stop',\\n      tooltip: '\u505C\u6B62\u6267\u884C',\\n      iconName: 'StopOutlined',\\n      isEnabled: state.isProcessing,\\n      onClick: async ({ commandService }) => {\\n        commandService.executeCommand<NsGraphStatusCommand.IArgs>(\\n          XFlowDagCommands.QUERY_GRAPH_STATUS.id,\\n          {\\n            graphStatusService: MockApi.stopGraphStatusService,\\n            loopInterval: 5000,\\n          },\\n        )\\n      },\\n      render: props => {\\n        return (\\n          <Popconfirm\\n            title=\\"\u786E\u5B9A\u505C\u6B62\u6267\u884C\uFF1F\\"\\n            onConfirm={() => {\\n              props.onClick()\\n            }}\\n          >\\n            {props.children}\\n          </Popconfirm>\\n        )\\n      },\\n    })\\n\\n    return [\\n      { name: 'graphData', items: toolbarGroup1 },\\n      { name: 'groupOperations', items: toolbarGroup2 },\\n      {\\n        name: 'customCmd',\\n        items: toolbarGroup3,\\n      },\\n    ]\\n  }\\n}\\nexport const useToolbarConfig = createToolbarConfig(toolbarConfig => {\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService, toDispose) => {\\n    const updateToolbarModel = async () => {\\n      const state = await NSToolbarConfig.getToolbarState(modelService)\\n      const toolbarItems = await NSToolbarConfig.getToolbarItems(state)\\n      toolbarModel.setValue(toolbar => {\\n        toolbar.mainGroups = toolbarItems\\n      })\\n    }\\n    const models = await NSToolbarConfig.getDependencies(modelService)\\n    const subscriptions = models.map(model => {\\n      return model.watch(async () => {\\n        updateToolbarModel()\\n      })\\n    })\\n    toDispose.pushAll(subscriptions)\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/config-keybinding.ts?dumi-raw-code
/* harmony default export */ var config_keybindingdumi_raw_code = ("import type { NsNodeCmd, NsEdgeCmd, NsGraphCmd } from '@antv/xflow'\\nimport {\\n  createKeybindingConfig,\\n  XFlowNodeCommands,\\n  XFlowEdgeCommands,\\n  MODELS,\\n  XFlowGraphCommands,\\n} from '@antv/xflow'\\n\\nexport const useKeybindingConfig = createKeybindingConfig(config => {\\n  config.setKeybindingFunc(regsitry => {\\n    return regsitry.registerKeybinding([\\n      {\\n        id: 'delete node or edge',\\n        keybinding: 'backspace',\\n        callback: async function (item, modelService, cmd, e) {\\n          const cells = await MODELS.SELECTED_CELLS.useValue(modelService)\\n          // \u5148\u5220\u9664edges\\n          await Promise.all(\\n            cells.map(cell => {\\n              if (cell.isEdge()) {\\n                return cmd.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n                  edgeConfig: { ...cell.getData(), id: cell.id },\\n                })\\n              }\\n            }),\\n          )\\n          // \u5148\u5220\u9664nodes\\n          await Promise.all(\\n            cells.map(cell => {\\n              if (cell.isNode()) {\\n                return cmd.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n                  nodeConfig: {\\n                    ...cell.getData(),\\n                    id: cell.id,\\n                  },\\n                })\\n              }\\n            }),\\n          )\\n        },\\n      },\\n      {\\n        id: 'copy',\\n        keybinding: ['command+c', 'ctrl+c'],\\n        callback: async function (item, modelService, cmd, e) {\\n          e.preventDefault()\\n          console.log(item)\\n          cmd.executeCommand<NsGraphCmd.GraphCopySelection.IArgs>(\\n            XFlowGraphCommands.GRAPH_COPY.id,\\n            {},\\n          )\\n        },\\n      },\\n      {\\n        id: 'paste',\\n        keybinding: ['command+v', 'ctrl+v'],\\n        callback: async function (item, ctx, cmd, e) {\\n          e.preventDefault()\\n          cmd.executeCommand<NsGraphCmd.GraphPasteSelection.IArgs>(\\n            XFlowGraphCommands.GRAPH_PASTE.id,\\n            {},\\n          )\\n        },\\n      },\\n    ])\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/config-dnd-panel.tsx?dumi-raw-code
/* harmony default export */ var config_dnd_paneldumi_raw_code = ("/* eslint-disable @typescript-eslint/no-unused-vars */\\nimport { uuidv4 } from '@antv/xflow'\\nimport { XFlowNodeCommands } from '@antv/xflow'\\nimport { DND_RENDER_ID } from './constant'\\nimport type { NsNodeCmd } from '@antv/xflow'\\nimport type { NsNodeTreePanel } from '@antv/xflow'\\nimport { Card } from 'antd'\\nimport React from 'react'\\n\\nexport const onNodeDrop: NsNodeTreePanel.IOnNodeDrop = async (node, commands, modelService) => {\\n  const args: NsNodeCmd.AddNode.IArgs = {\\n    nodeConfig: { ...node, id: uuidv4() },\\n  }\\n  commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args)\\n}\\n\\nconst NodeDescription = (props: { name: string }) => {\\n  return (\\n    <Card size=\\"small\\" title=\\"\u7B97\u6CD5\u7EC4\u4EF6\u4ECB\u7ECD\\" style={{ width: '200px' }} bordered={false}>\\n      \u6B22\u8FCE\u4F7F\u7528\uFF1A{props.name}\\n      \u8FD9\u91CC\u53EF\u4EE5\u6839\u636E\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u6570\u636E\u663E\u793A\u4E0D\u540C\u7684\u5185\u5BB9\\n    </Card>\\n  )\\n}\\n\\nexport const treeDataService: NsNodeTreePanel.ITreeDataService = async (meta, modelService) => {\\n  return [\\n    {\\n      id: '1',\\n      label: '\u6570\u636E\u8BFB\u5199',\\n      parentId: '',\\n      renderKey: DND_RENDER_ID,\\n    },\\n    {\\n      id: '2',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF61',\\n      parentId: '1',\\n      renderKey: DND_RENDER_ID,\\n      popoverContent: <NodeDescription name=\\"\u7B97\u6CD5\u7EC4\u4EF61\\" />,\\n    },\\n    {\\n      id: '3',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF62',\\n      parentId: '1',\\n      renderKey: DND_RENDER_ID,\\n      popoverContent: <NodeDescription name=\\"\u7B97\u6CD5\u7EC4\u4EF62\\" />,\\n    },\\n    {\\n      id: '4',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF63',\\n      parentId: '1',\\n      renderKey: DND_RENDER_ID,\\n      popoverContent: <NodeDescription name=\\"\u7B97\u6CD5\u7EC4\u4EF63\\" />,\\n    },\\n    {\\n      id: '5',\\n      label: '\u6570\u636E\u52A0\u5DE5',\\n      parentId: '',\\n      renderKey: DND_RENDER_ID,\\n    },\\n    {\\n      id: '6',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF64',\\n      parentId: '5',\\n      renderKey: DND_RENDER_ID,\\n    },\\n    {\\n      id: '7',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF65',\\n      parentId: '5',\\n      renderKey: DND_RENDER_ID,\\n    },\\n    {\\n      id: '8',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF66',\\n      parentId: '5',\\n      renderKey: DND_RENDER_ID,\\n    },\\n    {\\n      id: '9',\\n      label: '\u6A21\u578B\u8BAD\u7EC3',\\n      parentId: '',\\n      renderKey: DND_RENDER_ID,\\n    },\\n    {\\n      id: '10',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF67',\\n      parentId: '9',\\n      renderKey: DND_RENDER_ID,\\n    },\\n    {\\n      id: '11',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF68',\\n      parentId: '9',\\n      renderKey: DND_RENDER_ID,\\n    },\\n    {\\n      id: '12',\\n      label: '\u7B97\u6CD5\u7EC4\u4EF69',\\n      parentId: '9',\\n      renderKey: DND_RENDER_ID,\\n    },\\n  ]\\n}\\n\\nexport const searchService: NsNodeTreePanel.ISearchService = async (\\n  treeNodeList: NsNodeTreePanel.ITreeNode[] = [],\\n  keyword: string,\\n) => {\\n  const list = treeNodeList.filter(i => i.isDirectory || i.label.includes(keyword))\\n  console.log(list, keyword, treeNodeList)\\n  return list\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/config-form.tsx?dumi-raw-code
/* harmony default export */ var config_formdumi_raw_code = ("import type { NsJsonSchemaForm } from '@antv/xflow'\\nimport { controlMapService, ControlShapeEnum } from './form-controls'\\nimport { MODELS } from '@antv/xflow'\\n\\nexport function delay(ms: number) {\\n  return new Promise(resolve => setTimeout(() => resolve(true), ms))\\n}\\n\\nlet i = 0\\nexport const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async args => {\\n  const { targetData, modelService, targetType } = args\\n  /** \u53EF\u4EE5\u4F7F\u7528\u83B7\u53D6 graphMeta */\\n  const graphMeta = await MODELS.GRAPH_META.useValue(modelService)\\n  console.log('formSchemaService', graphMeta, args)\\n\\n  if (targetType === 'canvas') {\\n    return {\\n      tabs: [\\n        {\\n          name: 'GraphMeta',\\n          groups: [\\n            {\\n              name: 'groupName',\\n              controls: [\\n                {\\n                  name: 'Tab2-1',\\n                  label: '\u9879\u76EE\u540D',\\n                  shape: 'Input',\\n                  disabled: false,\\n                  required: true,\\n                  tooltip: '\u56FE\u7684\u4E1A\u52A1\u9879\u76EE\u540D',\\n                  extra: '\u548C\u56FE\u7684ID\u5BF9\u5E94',\\n                  placeholder: 'please write something',\\n                  value: '',\\n                  defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                  hidden: false,\\n                  options: [{ title: '', value: '' }],\\n                  originData: {}, // \u539F\u59CB\u6570\u636E\\n                },\\n                {\\n                  label: '\u56FE\u6570\u636E',\\n                  name: 'Tab1-0',\\n                  /** \u4F7F\u7528\u81EA\u5B9A\u4E49shape */\\n                  shape: ControlShapeEnum.EDITOR,\\n                  disabled: false,\\n                  required: true,\\n                  tooltip: 'JSON \u6570\u636E',\\n                  placeholder: 'please write something',\\n                  value: '',\\n                  defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                  hidden: false,\\n                  options: [{ title: '', value: '' }],\\n                  originData: {}, // \u539F\u59CB\u6570\u636E\\n                },\\n                {\\n                  label: '\u67E5\u770B\u65E5\u5FD7\u94FE\u63A5',\\n                  name: 'Tab1-1',\\n                  /** \u4F7F\u7528\u81EA\u5B9A\u4E49shape */\\n                  shape: ControlShapeEnum.LINKSHAPE,\\n                  disabled: false,\\n                  required: true,\\n                  tooltip: 'hello world',\\n                  placeholder: 'please write something',\\n                  value: '',\\n                  defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                  hidden: false,\\n                  options: [{ title: '', value: '' }],\\n                  originData: {}, // \u539F\u59CB\u6570\u636E\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n      ],\\n    }\\n  }\\n\\n  const nodeSchema: NsJsonSchemaForm.ISchema = {\\n    tabs: [\\n      {\\n        name: 'Tab1',\\n        groups: [\\n          {\\n            name: 'groupName',\\n            controls: [\\n              {\\n                label: 'GraphEditor',\\n                name: 'Tab1-0',\\n                /** \u4F7F\u7528\u81EA\u5B9A\u4E49shape */\\n                shape: ControlShapeEnum.EDITOR,\\n                disabled: false,\\n                required: true,\\n                tooltip: 'hello world',\\n                placeholder: 'please write something',\\n                value: '',\\n                defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                hidden: false,\\n                options: [{ title: '', value: '' }],\\n                originData: {}, // \u539F\u59CB\u6570\u636E\\n              },\\n              {\\n                label: 'Tab1-2',\\n                name: 'Tab1-2',\\n                shape: 'Input',\\n                disabled: false,\\n                required: true,\\n                tooltip: 'hello world',\\n                placeholder: 'please write something',\\n                value: '',\\n                defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                hidden: false,\\n                options: [{ title: '', value: '' }],\\n                originData: {}, // \u539F\u59CB\u6570\u636E\\n              },\\n              {\\n                label: 'Tab1-3',\\n                name: 'Tab1-3',\\n                shape: 'Input',\\n                disabled: false,\\n                required: true,\\n                tooltip: 'hello world',\\n                placeholder: 'please write something',\\n                value: '',\\n                defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                hidden: false,\\n                options: [{ title: '', value: '' }],\\n                originData: {}, // \u539F\u59CB\u6570\u636E\\n              },\\n              {\\n                label: 'Tab1-4',\\n                name: 'Tab1-4',\\n                shape: 'Input',\\n                disabled: false,\\n                required: true,\\n                tooltip: 'hello world',\\n                placeholder: 'please write something',\\n                value: '',\\n                defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                hidden: false,\\n                options: [{ title: '', value: '' }],\\n                originData: {}, // \u539F\u59CB\u6570\u636E\\n              },\\n            ],\\n          },\\n        ],\\n      },\\n      {\\n        name: 'Tab2',\\n        groups: [\\n          {\\n            name: 'groupName',\\n            controls: [\\n              {\\n                name: 'Tab2-1',\\n                label: 'Tab2-1',\\n                shape: 'Input',\\n                disabled: false,\\n                required: true,\\n                tooltip: 'hello world',\\n                placeholder: 'please write something',\\n                value: '',\\n                defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                hidden: false,\\n                options: [{ title: '', value: '' }],\\n                originData: {}, // \u539F\u59CB\u6570\u636E\\n              },\\n              {\\n                label: 'Tab2-2',\\n                name: 'Tab2-2', // \u4E5F\u53EF\u4EE5\u662F\u6570\u7EC4\\n                shape: 'Input',\\n                disabled: false,\\n                required: true,\\n                tooltip: 'hello world',\\n                placeholder: 'please write something',\\n                value: '',\\n                defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                hidden: false,\\n                options: [{ title: '', value: '' }],\\n                originData: {}, // \u539F\u59CB\u6570\u636E\\n              },\\n              {\\n                label: 'Tab2-3',\\n                name: 'Tab2-3', // \u4E5F\u53EF\u4EE5\u662F\u6570\u7EC4\\n                shape: 'Input',\\n                disabled: false,\\n                required: true,\\n                tooltip: 'hello world',\\n                placeholder: 'please write something',\\n                value: '',\\n                defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                hidden: false,\\n                options: [{ title: '', value: '' }],\\n                originData: {}, // \u539F\u59CB\u6570\u636E\\n              },\\n            ],\\n          },\\n        ],\\n      },\\n    ],\\n  }\\n\\n  await delay(100)\\n  if (targetData && i === 0) {\\n    i = 1\\n    return nodeSchema\\n  }\\n\\n  if (targetData) {\\n    i = 0\\n    return {\\n      tabs: [\\n        {\\n          name: 'Tab3',\\n          groups: [\\n            {\\n              name: '',\\n              controls: [\\n                {\\n                  name: 'Tab3-1',\\n                  label: '\u7B97\u6CD5\u914D\u7F6E1',\\n                  shape: 'Input',\\n                  disabled: false,\\n                  required: true,\\n                  tooltip: '\u7B97\u6CD5\u914D\u7F6E1',\\n                  placeholder: 'please write something',\\n                  value: '',\\n                  defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                  hidden: false,\\n                  options: [{ title: '', value: '' }],\\n                  originData: {}, // \u539F\u59CB\u6570\u636E\\n                },\\n                {\\n                  name: 'Tab3-2',\\n                  label: '\u7B97\u6CD5\u914D\u7F6E2',\\n                  shape: 'Input',\\n                  disabled: false,\\n                  required: true,\\n                  tooltip: '\u7B97\u6CD5\u914D\u7F6E2',\\n                  placeholder: 'please write something',\\n                  value: '',\\n                  defaultValue: '', // \u53EF\u4EE5\u8BA4\u4E3A\u662F\u9ED8\u8BA4\u503C\\n                  hidden: false,\\n                  options: [{ title: '', value: '' }],\\n                  originData: {}, // \u539F\u59CB\u6570\u636E\\n                },\\n              ],\\n            },\\n          ],\\n        },\\n      ],\\n    }\\n  }\\n\\n  if (targetData) {\\n    return nodeSchema\\n  }\\n\\n  return {\\n    tabs: [],\\n  }\\n}\\n\\nexport const formValueUpdateService: NsJsonSchemaForm.IFormValueUpdateService = async args => {\\n  console.log('formValueUpdateService', args)\\n}\\n\\nexport { controlMapService }");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/form-controls/index.tsx?dumi-raw-code
/* harmony default export */ var form_controlsdumi_raw_code = ("import type { NsJsonSchemaForm } from '@antv/xflow'\\nimport { EditorShape } from './custom-editor'\\nimport { LinkShape } from './link'\\n\\n/** \u81EA\u5B9A\u4E49form\u63A7\u4EF6 */\\nexport enum ControlShapeEnum {\\n  'EDITOR' = 'EDITOR',\\n  'LINKSHAPE' = 'LINKSHAPE',\\n}\\n\\nexport const controlMapService: NsJsonSchemaForm.IControlMapService = controlMap => {\\n  controlMap.set(ControlShapeEnum.EDITOR, EditorShape)\\n  controlMap.set(ControlShapeEnum.LINKSHAPE, LinkShape)\\n  return controlMap\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/form-controls/custom-editor.tsx?dumi-raw-code
/* harmony default export */ var form_controls_custom_editordumi_raw_code = ("import type { NsJsonSchemaForm, NsGraphCmd } from '@antv/xflow'\\nimport { useXFlowApp, MODELS, XFlowGraphCommands } from '@antv/xflow'\\nimport { FormItemWrapper } from '@antv/xflow'\\nimport { Form, Input } from 'antd'\\nimport React from 'react'\\n\\nexport const EditorShape: React.FC<NsJsonSchemaForm.IControlProps> = props => {\\n  const { controlSchema } = props\\n  const { required, tooltip, extra, name, label, placeholder } = controlSchema\\n\\n  return (\\n    <FormItemWrapper schema={controlSchema}>\\n      {({ disabled, hidden, initialValue }) => {\\n        return (\\n          <Form.Item\\n            name={name}\\n            label={label}\\n            initialValue={initialValue}\\n            tooltip={tooltip}\\n            extra={extra}\\n            required={required}\\n            hidden={hidden}\\n          >\\n            {/* \u8FD9\u91CC\u7684\u7EC4\u4EF6\u53EF\u4EE5\u62FF\u5230onChange\u548Cvalue */}\\n            <Editor controlSchema={controlSchema} placeholder={placeholder} disabled={disabled} />\\n          </Form.Item>\\n        )\\n      }}\\n    </FormItemWrapper>\\n  )\\n}\\n\\ninterface IEditorProps extends NsJsonSchemaForm.IFormItemProps {\\n  controlSchema: NsJsonSchemaForm.IControlSchema\\n  placeholder?: string\\n  disabled: boolean\\n}\\n\\nconst Editor: React.FC<IEditorProps> = props => {\\n  const { placeholder, disabled, onChange, value } = props\\n  const { commandService, modelService } = useXFlowApp()\\n  React.useEffect(() => {\\n    commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(\\n      XFlowGraphCommands.SAVE_GRAPH_DATA.id,\\n      {\\n        saveGraphDataService: async (meta, graph) => {\\n          /** \u5F53\u524D\u9009\u4E2D\u8282\u70B9\u6570\u636E */\\n          const nodes = await MODELS.SELECTED_NODES.useValue(modelService)\\n          console.log(graph)\\n          /** \u62FF\u5230\u6570\u636E\uFF0C\u89E6\u53D1onChange*/\\n          onChange(JSON.stringify(graph))\\n          return { err: null, data: graph, meta }\\n        },\\n      },\\n    )\\n  })\\n\\n  return <Input.TextArea value={value} placeholder={placeholder} disabled={disabled} rows={10} />\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/form-controls/link.tsx?dumi-raw-code
/* harmony default export */ var linkdumi_raw_code = ("import type { NsJsonSchemaForm } from '@antv/xflow'\\nimport React from 'react'\\n\\nexport const LinkShape: React.FC<NsJsonSchemaForm.IControlProps> = props => {\\n  const { controlSchema } = props\\n  return (\\n    <div style={{ padding: '8px 0px', marginBottom: '8px' }}>\\n      <a href={controlSchema.value as string} target=\\"_blank\\" style={{ color: '#3057e3' }}>\\n        {controlSchema.label}\\n      </a>\\n    </div>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/dag/demos/basic/index.less?dumi-raw-code
var solutions_dag_demos_basicdumi_raw_code = __webpack_require__("X9ll");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/index.tsx?dumi-raw-code
/* harmony default export */ var er_demosdumi_raw_code = ("import React, { useState } from 'react'\\nimport type { IAppLoad, NsGraph, IApplication } from '@antv/xflow'\\nimport { XFlow, XFlowCanvas, KeyBindings } from '@antv/xflow'\\nimport { XFlowAppProvider, useXFlowApp } from '@antv/xflow'\\nimport type { NsGraphCmd, NsNodeCmd, NsEdgeCmd } from '@antv/xflow'\\nimport { XFlowGraphCommands, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'\\nimport { CanvasMiniMap, CanvasScaleToolbar, CanvasSnapline } from '@antv/xflow'\\nimport { MODELS } from '@antv/xflow'\\nimport GraphToolbar from './GraphToolbar/index'\\n\\n/** \u914D\u7F6E\u753B\u5E03 */\\nimport { useGraphConfig } from './config-graph'\\n/** \u914D\u7F6ECommand */\\nimport { useCmdConfig } from './config-cmd'\\n/** \u914D\u7F6E\u5FEB\u6377\u952E */\\nimport { useKeybindingConfig } from './config-keybinding'\\n\\nimport { message } from 'antd'\\nimport type { EntityCanvasModel } from './interface'\\n\\nimport CreateNodeModal from './CreateNodeModal'\\nimport CreateRelationModal from './CreateRelationModal'\\nimport Entity from './react-node/Entity'\\nimport Relation from './react-edge/Relation'\\n\\nimport './index.less'\\n\\n/** Mock\u6240\u6709\u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92\u7684\u63A5\u53E3 */\\nimport { MockApi } from './service'\\n\\ninterface IProps {}\\n\\n/** \u9F20\u6807\u7684\u5F15\u7528 */\\nlet cursorTipRef: HTMLDivElement\\n/** \u9F20\u6807\u5728\u753B\u5E03\u7684\u4F4D\u7F6E */\\nlet cursorLocation: any\\n\\nconst Demo: React.FC<IProps> = (props: IProps) => {\\n  /** XFlow\u5E94\u7528\u5B9E\u4F8B */\\n  const app = useXFlowApp()\\n\\n  /** \u753B\u5E03\u914D\u7F6E\u9879 */\\n  const graphConfig = useGraphConfig()\\n  /** \u9884\u8BBEXFlow\u753B\u5E03\u9700\u8981\u6E32\u67D3\u7684React\u8282\u70B9 / \u8FB9 */\\n  graphConfig.setNodeRender('NODE1', props => {\\n    return <Entity {...props} deleteNode={handleDeleteNode} />\\n  })\\n  graphConfig.setEdgeRender('EDGE1', props => {\\n    return <Relation {...props} deleteRelation={handleDeleteEdge} />\\n  })\\n  /** \u547D\u4EE4\u914D\u7F6E\u9879 */\\n  const cmdConfig = useCmdConfig()\\n  /** \u5FEB\u6377\u952E\u914D\u7F6E\u9879 */\\n  const keybindingConfig = useKeybindingConfig()\\n\\n  /** \u662F\u5426\u753B\u5E03\u5904\u4E8E\u53EF\u4EE5\u65B0\u5EFA\u8282\u70B9\u72B6\u6001 */\\n  const [graphStatuts, setGraphStatus] = useState<string>('NORMAL')\\n  /** \u662F\u5426\u5C55\u793A\u65B0\u5EFA\u8282\u70B9\u5F39\u7A97 */\\n  const [isShowCreateNodeModal, setIsShowCreateNodeModal] = useState<boolean>(false)\\n  /** \u662F\u5426\u5C55\u793A\u65B0\u5EFA\u5173\u8054\u5173\u7CFB\u5F39\u7A97 */\\n  const [isShowCreateRelationModal, setIsShowCreateRelationModal] = useState<boolean>(false)\\n  /** \u8FDE\u7EBFsource\u6570\u636E */\\n  const [relationSourceData, setRelationSourceData] = useState<EntityCanvasModel>(undefined)\\n  /** \u8FDE\u7EBFtarget\u6570\u636E */\\n  const [relationTargetData, setRelationTargetData] = useState<EntityCanvasModel>(undefined)\\n\\n  /** XFlow\u521D\u59CB\u5316\u5B8C\u6210\u7684\u56DE\u8C03 */\\n  const onLoad: IAppLoad = async app => {\\n    const graph = await app.getGraphInstance()\\n    graph.zoom(-0.2)\\n\\n    /** Mock\u4ECE\u670D\u52A1\u7AEF\u83B7\u53D6\u6570\u636E */\\n    const graphData = await MockApi.loadGraphData()\\n\\n    /** \u6E32\u67D3\u753B\u5E03\u6570\u636E */\\n    await app.executeCommand(XFlowGraphCommands.GRAPH_RENDER.id, {\\n      graphData,\\n    } as NsGraphCmd.GraphRender.IArgs)\\n\\n    /** \u8BBE\u7F6E\u76D1\u542C\u4E8B\u4EF6 */\\n    await watchEvent(app)\\n  }\\n\\n  /** \u76D1\u542C\u4E8B\u4EF6 */\\n  const watchEvent = async (appRef: IApplication) => {\\n    if (appRef) {\\n      const graph = await appRef.getGraphInstance()\\n      graph.on('node:mousedown', ({ e, x, y, node, view }) => {\\n        appRef.executeCommand(XFlowNodeCommands.FRONT_NODE.id, {\\n          nodeId: node?.getData()?.id,\\n        } as NsNodeCmd.FrontNode.IArgs)\\n      })\\n      graph.on('edge:connected', ({ edge }) => {\\n        const relationSourceData = edge?.getSourceNode()?.data\\n        const relationTargetData = edge?.getTargetNode()?.data\\n        setRelationSourceData(relationSourceData)\\n        setRelationTargetData(relationTargetData)\\n        setIsShowCreateRelationModal(true)\\n        /** \u62D6\u62FD\u8FC7\u7A0B\u4E2D\u4F1A\u751F\u6210\u4E00\u6761\u65E0\u5B9E\u9645\u4E1A\u52A1\u542B\u4E49\u7684\u7EBF, \u9700\u8981\u624B\u52A8\u5220\u9664 */\\n        const edgeData: NsGraph.IEdgeConfig = edge?.getData()\\n        if (!edgeData) {\\n          appRef.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {\\n            x6Edge: edge as any,\\n          } as NsEdgeCmd.DelEdge.IArgs)\\n        }\\n      })\\n      graph.on('node:mouseenter', ({ e, node, view }) => {\\n        changePortsVisible(true)\\n      })\\n      graph.on('node:mouseleave', ({ e, node, view }) => {\\n        changePortsVisible(false)\\n      })\\n      graph.on('edge:click', ({ edge }) => {\\n        edge.toFront()\\n      })\\n    }\\n  }\\n\\n  const changePortsVisible = (visible: boolean) => {\\n    const ports = document.body.querySelectorAll('.x6-port-body') as NodeListOf<SVGElement>\\n    for (let i = 0, len = ports.length; i < len; i = i + 1) {\\n      ports[i].style.visibility = visible ? 'visible' : 'hidden'\\n    }\\n  }\\n\\n  /** \u521B\u5EFA\u753B\u5E03\u8282\u70B9 */\\n  const handleCreateNode = async (values: any) => {\\n    const { cb, ...rest } = values\\n\\n    const graph = await app.getGraphInstance()\\n    /** div\u5757\u9F20\u6807\u7684\u4F4D\u7F6E\u8F6C\u6362\u4E3A\u753B\u5E03\u7684\u4F4D\u7F6E */\\n    const graphLoc = graph.clientToLocal(cursorLocation.x, cursorLocation.y - 200)\\n\\n    const res = await app.executeCommand(XFlowNodeCommands.ADD_NODE.id, {\\n      nodeConfig: {\\n        id: 'customNode',\\n        x: graphLoc.x,\\n        y: graphLoc.y,\\n        width: 214,\\n        height: 252,\\n        renderKey: 'NODE1',\\n        entityId: values?.name,\\n        entityName: values?.displayName,\\n        entityType: 'FACT',\\n      }\\n    } as NsNodeCmd.AddNode.IArgs)\\n\\n    if (res) {\\n      cb && cb()\\n      setIsShowCreateNodeModal(false)\\n      message.success('\u6DFB\u52A0\u8282\u70B9\u6210\u529F!')\\n    }\\n  }\\n\\n  /** \u5220\u9664\u753B\u5E03\u8282\u70B9 */\\n  const handleDeleteNode = async (nodeId: string) => {\\n    const res = await app.executeCommand(XFlowNodeCommands.DEL_NODE.id, {\\n      nodeConfig: { id: nodeId },\\n    } as NsNodeCmd.DelNode.IArgs)\\n\\n    if (res) {\\n      message.success('\u5220\u9664\u8282\u70B9\u6210\u529F!')\\n    }\\n  }\\n\\n  /** \u521B\u5EFA\u5173\u8054\u5173\u7CFB */\\n  const handleCreateEdge = async (values: any) => {\\n    const { cb, ...rest } = values\\n    const res = await app.executeCommand(XFlowEdgeCommands.ADD_EDGE.id, {\\n      edgeConfig: {\\n        id: 'fact1-other2',\\n        source: 'fact1',\\n        target: 'other2',\\n        renderKey: 'EDGE1',\\n        edgeContentWidth: 20,\\n        edgeContentHeigt: 20,\\n        /** \u8BBE\u7F6E\u8FDE\u7EBF\u6837\u5F0F */\\n        attrs: {\\n          line: {\\n            stroke: '#d8d8d8',\\n            strokeWidth: 1,\\n            targetMarker: {\\n              name: 'classic',\\n            },\\n          },\\n        },\\n      },\\n    } as NsEdgeCmd.AddEdge.IArgs)\\n\\n    if (res) {\\n      cb && cb()\\n      setIsShowCreateRelationModal(false)\\n      message.success('\u6DFB\u52A0\u8FDE\u7EBF\u6210\u529F!')\\n    }\\n  }\\n\\n  /** \u5220\u9664\u5173\u8054\u5173\u7CFB */\\n  const handleDeleteEdge = async (relationId: string) => {\\n    const res = await app.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {\\n      edgeConfig: { id: relationId },\\n    } as NsEdgeCmd.DelEdge.IArgs)\\n    if (res) {\\n      message.success('\u5220\u9664\u8FDE\u7EBF\u6210\u529F!')\\n    }\\n  }\\n\\n  /** \u8BBE\u7F6E\u9F20\u6807\u6837\u5F0F */\\n  const configCursorTip = ({ left, top, display }) => {\\n    cursorTipRef.style.left = left\\n    cursorTipRef.style.top = top\\n    cursorTipRef.style.display = display\\n  }\\n\\n  return (\\n    <div\\n      onMouseMove={e => {\\n        if (graphStatuts === 'CREATE') {\\n          configCursorTip({\\n            left: \`\${e.pageX}px\`,\\n            top: \`\${e.pageY - 180}px\`,\\n            display: 'block',\\n          })\\n        }\\n      }}\\n      onMouseDown={e => {\\n        if (graphStatuts === 'CREATE') {\\n          cursorLocation = { x: e.pageX, y: e.pageY }\\n          setIsShowCreateNodeModal(true)\\n          configCursorTip({\\n            left: '0px',\\n            top: '0px',\\n            display:'none',\\n          })\\n          setGraphStatus('NORMAL')\\n        }\\n      }}\\n      onMouseLeave={e => {\\n        if (graphStatuts === 'CREATE') {\\n          configCursorTip({\\n            left: '0px',\\n            top: '0px',\\n            display:'none',\\n          })\\n        }\\n      }}\\n    >\\n      <XFlow\\n        className=\\"xflow-er-solution-container\\"\\n        commandConfig={cmdConfig}\\n        onLoad={onLoad}\\n      >\\n        <GraphToolbar\\n          onAddNodeClick={() => {\\n            message.info('\u9F20\u6807\u79FB\u52A8\u5230\u753B\u5E03\u7A7A\u767D\u4F4D\u7F6E, \u518D\u6B21\u70B9\u51FB\u9F20\u6807\u5B8C\u6210\u521B\u5EFA', 2)\\n            setGraphStatus('CREATE')\\n          }}\\n          onDeleteNodeClick={async () => {\\n            const modelService = app.modelService\\n            const nodes = await MODELS.SELECTED_NODES.useValue(modelService)\\n            nodes.forEach(node => {\\n              handleDeleteNode(node?.id)\\n            })\\n          }}\\n          onConnectEdgeClick={() => {\\n            setIsShowCreateRelationModal(true)\\n          }}\\n        />\\n        <XFlowCanvas config={graphConfig}>\\n          <CanvasMiniMap\\n            nodeFillColor='#ced4de'\\n            minimapOptions={{}} \\n          />\\n          <CanvasScaleToolbar position={{ top: 12, left: 20 }} />\\n          <CanvasSnapline />\\n        </XFlowCanvas>\\n        <KeyBindings config={keybindingConfig} />\\n        {/** \u5360\u4F4D\u7A7A\u8282\u70B9 */}\\n        {graphStatuts === 'CREATE' && (\\n          <div\\n            className=\\"cursor-tip-container\\"\\n            ref={ref => {\\n              ref && (cursorTipRef = ref)\\n            }}\\n          >\\n            <div className=\\"draft-entity-container\\">\\n              <div>\u672A\u547D\u540D\u6A21\u578B</div>\\n            </div>\\n          </div>\\n        )}\\n        {/** \u521B\u5EFA\u8282\u70B9\u5F39\u7A97 */}\\n        <CreateNodeModal\\n          visible={isShowCreateNodeModal}\\n          onOk={handleCreateNode}\\n          onCancel={() => {\\n            setIsShowCreateNodeModal(false)\\n          }}\\n        />\\n        {/** \u521B\u5EFA\u5173\u8054\u5173\u7CFB\u5F39\u7A97 */}\\n        <CreateRelationModal\\n          visible={isShowCreateRelationModal}\\n          sourceEntity={relationSourceData}\\n          targetEntity={relationTargetData}\\n          onOk={handleCreateEdge}\\n          onCancel={() => {\\n            setIsShowCreateRelationModal(false)\\n          }}\\n        />\\n      </XFlow>\\n    </div>\\n  )\\n}\\n\\nexport default (props: IProps) => (\\n  <XFlowAppProvider>\\n    <Demo {...props} />\\n  </XFlowAppProvider>\\n)");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/GraphToolbar/index.tsx?dumi-raw-code
/* harmony default export */ var GraphToolbardumi_raw_code = ("import React from 'react'\\nimport {} from 'antd'\\nimport { PlusCircleOutlined, DeleteOutlined, LinkOutlined } from '@ant-design/icons'\\nimport { MODELS, useXFlowApp } from '@antv/xflow'\\nimport './index.less'\\n\\ninterface Props {\\n  onAddNodeClick: () => void\\n  onDeleteNodeClick: () => void\\n  onConnectEdgeClick: () => void\\n}\\n\\nconst GraphToolbar = (props: Props) => {\\n  const { onAddNodeClick, onDeleteNodeClick, onConnectEdgeClick } = props\\n  const [selectedNodes, setSelectedNodes] = React.useState([])\\n\\n  /** \u76D1\u542C\u753B\u5E03\u4E2D\u9009\u4E2D\u7684\u8282\u70B9 */\\n  const watchModelService = async () => {\\n    const appRef = useXFlowApp()\\n    const modelService = appRef && appRef?.modelService\\n    if (modelService) {\\n      const model = await MODELS.SELECTED_NODES.getModel(modelService)\\n      model.watch(async () => {\\n        const nodes = await MODELS.SELECTED_NODES.useValue(modelService)\\n        setSelectedNodes(nodes)\\n      })\\n    }\\n  }\\n\\n  watchModelService()\\n\\n  return (\\n    <div className=\\"xflow-er-solution-toolbar\\">\\n      <div className=\\"icon\\" onClick={() => onAddNodeClick()}>\\n        <span>\u6DFB\u52A0\u8282\u70B9</span>\\n        <PlusCircleOutlined />\\n      </div>\\n      <div className=\\"icon\\" onClick={() => onConnectEdgeClick()}>\\n        <span>\u6DFB\u52A0\u5173\u7CFB</span>\\n        <LinkOutlined />\\n      </div>\\n      <div\\n        className={\`icon \${selectedNodes?.length > 0 ? '' : 'disabled'}\`}\\n        onClick={() => onDeleteNodeClick()}\\n      >\\n        <span>\u5220\u9664\u8282\u70B9</span>\\n        <DeleteOutlined />\\n      </div>\\n    </div>\\n  )\\n}\\n\\nexport default GraphToolbar");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/GraphToolbar/index.less?dumi-raw-code
var demos_GraphToolbardumi_raw_code = __webpack_require__("Tp6B");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/config-graph.tsx?dumi-raw-code
/* harmony default export */ var er_demos_config_graphdumi_raw_code = ("import { createGraphConfig } from '@antv/xflow'\\n\\nexport const useGraphConfig = createGraphConfig(config => {\\n  /** \u9884\u8BBEXFlow\u753B\u5E03\u914D\u7F6E\u9879 */\\n  config.setX6Config({\\n    grid: true,\\n    scroller: {\\n      enabled: true,\\n    },\\n    scaling: {\\n      min: 0.2,\\n      max: 3,\\n    },\\n    connecting: {\\n      /** \u8FDE\u7EBF\u8FC7\u7A0B\u4E2D\u8DDD\u79BB\u76EE\u6807\u8282\u70B950px\u65F6\u81EA\u52A8\u5438\u9644 */\\n      snap: {\\n        radius: 50,\\n      },\\n      connector: {\\n        name: 'rounded',\\n        args: {\\n          radius: 50,\\n        },\\n      },\\n      router: {\\n        name: 'er',\\n      },\\n      /** \u4E0D\u5141\u8BB8\u8FDE\u63A5\u5230\u753B\u5E03\u7A7A\u767D\u4F4D\u7F6E, \u5373\u6CA1\u6709\u76EE\u6807\u8282\u70B9\u65F6\u8FDE\u7EBF\u4F1A\u81EA\u52A8\u6D88\u5931 */\\n      allowBlank: false,\\n    },\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/config-cmd.ts?dumi-raw-code
/* harmony default export */ var demos_config_cmddumi_raw_code = ("import { createCmdConfig, DisposableCollection } from '@antv/xflow'\\nimport { MockApi } from './service'\\n\\nexport const useCmdConfig = createCmdConfig(config => {\\n  /** \u8BBE\u7F6Ehook */\\n  config.setRegisterHookFn(hooks => {\\n    const list = [\\n      hooks.addNode.registerHook({\\n        name: 'addNodeHook',\\n        handler: async args => {\\n          args.createNodeService = MockApi.addNode\\n        },\\n      }),\\n      hooks.addEdge.registerHook({\\n        name: 'addEdgeHook',\\n        handler: async args => {\\n          args.createEdgeService = MockApi.addEdge\\n        },\\n      }),\\n    ]\\n    const toDispose = new DisposableCollection()\\n    toDispose.pushAll(list)\\n    return toDispose\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/service.ts?dumi-raw-code
/* harmony default export */ var demos_servicedumi_raw_code = ("import type { NsGraph, NsNodeCmd, NsEdgeCmd } from '@antv/xflow'\\nimport { mockEntityData, mockRelationData } from './mock'\\n\\n/** mock\u540E\u7AEF\u63A5\u53E3\u8C03\u7528 */\\nexport namespace MockApi {\\n  /** \u52A0\u8F7D\u753B\u5E03\u6570\u636E */\\n  export const loadGraphData = async () => {\\n    const promise: Promise<NsGraph.IGraphData> = new Promise(resolve => {\\n      setTimeout(() => {\\n        /** \u94FE\u63A5\u6869\u6837\u5F0F\u914D\u7F6E, \u5C06\u5177\u6709\u76F8\u540C\u884C\u4E3A\u548C\u5916\u89C2\u7684\u94FE\u63A5\u6869\u5F52\u4E3A\u540C\u4E00\u7EC4 */\\n        const portAttrs = {\\n          circle: {\\n            r: 7,\\n            stroke: '#31d0c6',\\n            strokeWidth: 2,\\n            fill: '#fff',\\n            /** \u94FE\u63A5\u6869\u5728\u8FDE\u7EBF\u4EA4\u4E92\u65F6\u53EF\u4EE5\u88AB\u8FDE\u63A5\u4E0A */\\n            magnet: true,\\n          },\\n        }\\n        const nodes: NsGraph.INodeConfig[] = mockEntityData?.map(entity => {\\n          const nodeConfig: NsGraph.INodeConfig = {\\n            ...entity,\\n            renderKey: 'NODE1',\\n            ports: {\\n              groups: {\\n                top: {\\n                  position: 'top',\\n                  attrs: portAttrs,\\n                },\\n                right: {\\n                  position: 'right',\\n                  attrs: portAttrs,\\n                },\\n                bottom: {\\n                  position: 'bottom',\\n                  attrs: portAttrs,\\n                },\\n                left: {\\n                  position: 'left',\\n                  attrs: portAttrs,\\n                },\\n              },\\n              items: [\\n                { id: 'top_port', group: 'top' },\\n                { id: 'right_port', group: 'right' },\\n                { id: 'bottom_port', group: 'bottom' },\\n                { id: 'left_port', group: 'left' },\\n              ],\\n            },\\n          }\\n          return nodeConfig\\n        })\\n        const edges: NsGraph.IEdgeConfig[] = mockRelationData?.map(relation => {\\n          const edgeConfig: NsGraph.IEdgeConfig = {\\n            ...relation,\\n            renderKey: 'EDGE1',\\n            edgeContentWidth: 20,\\n            edgeContentHeigt: 20,\\n            /** \u8BBE\u7F6E\u8FDE\u7EBF\u6837\u5F0F */\\n            attrs: {\\n              line: {\\n                stroke: '#d8d8d8',\\n                strokeWidth: 1,\\n                targetMarker: {\\n                  name: 'classic',\\n                },\\n              },\\n            },\\n          }\\n          return edgeConfig\\n        })\\n        const graphData = { nodes, edges }\\n        resolve(graphData)\\n      }, 100)\\n    })\\n    const res = await promise\\n    return res\\n  }\\n\\n  /** \u6DFB\u52A0\u8282\u70B9 */\\n  export const addNode: NsNodeCmd.AddNode.IArgs['createNodeService'] = async args => {\\n    const { nodeConfig } = args\\n    const promise: Promise<NsGraph.INodeConfig> = new Promise(resolve => {\\n      setTimeout(() => {\\n        resolve({\\n          ...nodeConfig,\\n        })\\n      }, 1000)\\n    })\\n    const res = await promise\\n    return res\\n  }\\n  /** \u5220\u9664\u8282\u70B9 */\\n  export const delNode: NsNodeCmd.DelNode.IArgs['deleteNodeService'] = async args => {\\n    const { nodeConfig } = args\\n    const promise: Promise<boolean> = new Promise(resolve => {\\n      setTimeout(() => {\\n        resolve(true)\\n      }, 1000)\\n    })\\n    const res = await promise\\n    return res\\n  }\\n  /** \u6DFB\u52A0\u8FB9 */\\n  export const addEdge: NsEdgeCmd.AddEdge.IArgs['createEdgeService'] = async args => {\\n    const { edgeConfig } = args\\n    const promise: Promise<NsGraph.IEdgeConfig> = new Promise(resolve => {\\n      setTimeout(() => {\\n        resolve({\\n          ...edgeConfig,\\n        })\\n      }, 1000)\\n    })\\n    const res = await promise\\n    return res\\n  }\\n  /** \u5220\u9664\u8FB9 */\\n  export const delEdge: NsEdgeCmd.DelEdge.IArgs['deleteEdgeService'] = async args => {\\n    const { edgeConfig } = args\\n    const promise: Promise<boolean> = new Promise(resolve => {\\n      setTimeout(() => {\\n        resolve(true)\\n      }, 1000)\\n    })\\n    const res = await promise\\n    return res\\n  }\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/mock.ts?dumi-raw-code
/* harmony default export */ var er_demos_mockdumi_raw_code = ("import type { EntityProperty, EntityCanvasModel, RelationCanvasModel } from './interface'\\n\\nexport const mockProperties: EntityProperty[] = [\\n  {\\n    propertyId: 'propertyId1',\\n    propertyName: '\u4E1A\u52A1\u65E5\u671F',\\n    propertyType: 'string',\\n    isPK: true,\\n  },\\n  {\\n    propertyId: 'propertyId2',\\n    propertyName: '\u4EA4\u6613\u53F71',\\n    propertyType: 'bigint',\\n    isFK: true,\\n  },\\n  {\\n    propertyId: 'propertyId3',\\n    propertyName: '\u6700\u957F\u663E\u793A\u7684\u8868\u5355\u540D\u6700\u957F\u663E\u793A\u7684\u8868\u5355\u540D',\\n    propertyType: 'string',\\n  },\\n  {\\n    propertyId: 'propertyId4',\\n    propertyName: '\u4EA4\u6613\u652F\u4ED8\u5916\u952E',\\n    propertyType: 'string',\\n  },\\n  {\\n    propertyId: 'propertyId5',\\n    propertyName: '\u5356\u5BB6\u652F\u4ED8\u65E5\u671F',\\n    propertyType: 'string',\\n  },\\n  {\\n    propertyId: 'propertyId6',\\n    propertyName: '\u7F51\u5546\u94F6\u884C',\\n    propertyType: 'string',\\n  },\\n  {\\n    propertyId: 'propertyId7',\\n    propertyName: '\u4E1A\u52A1\u65E5\u671F',\\n    propertyType: 'string',\\n  },\\n  {\\n    propertyId: 'propertyId8',\\n    propertyName: '\u4E1A\u52A1\u65E5\u671F111',\\n    propertyType: 'string',\\n  },\\n  {\\n    propertyId: 'propertyId9',\\n    propertyName: '\u4E1A\u52A1\u65E5\u671F222',\\n    propertyType: 'string',\\n  },\\n  {\\n    propertyId: 'propertyId10',\\n    propertyName: '\u4E1A\u52A1\u65E5\u671F333',\\n    propertyType: 'string',\\n  },\\n]\\n\\nexport const mockEntityData: EntityCanvasModel[] = [\\n  {\\n    id: 'fact1',\\n    x: 450,\\n    y: 150,\\n    width: 214,\\n    height: 252,\\n    entityId: 'fact1',\\n    entityName: '\u4E8B\u5B9E\u88681',\\n    entityType: 'FACT',\\n    properties: mockProperties,\\n  },\\n  {\\n    id: 'fact2',\\n    x: 0,\\n    y: -20,\\n    width: 214,\\n    height: 252,\\n    entityId: 'fact2',\\n    entityName: '\u4E8B\u5B9E\u88682',\\n    entityType: 'FACT',\\n    properties: mockProperties,\\n  },\\n  {\\n    id: 'dim1',\\n    x: 0,\\n    y: 300,\\n    width: 214,\\n    height: 252,\\n    entityId: 'dim1',\\n    entityName: '\u7EF4\u5EA6\u88681',\\n    entityType: 'DIM',\\n    properties: mockProperties,\\n  },\\n  {\\n    id: 'other1',\\n    x: 180,\\n    y: 500,\\n    width: 214,\\n    height: 252,\\n    entityId: 'other1',\\n    entityName: '\u5176\u4ED6\u88681',\\n    entityType: 'OTHER',\\n    properties: mockProperties,\\n  },\\n  {\\n    id: 'other2',\\n    x: 810,\\n    y: 0,\\n    width: 214,\\n    height: 252,\\n    entityId: 'other2',\\n    entityName: '\u5176\u4ED6\u88682',\\n    entityType: 'OTHER',\\n    properties: mockProperties,\\n  },\\n]\\n\\nexport const mockRelationData: RelationCanvasModel[] = [\\n  {\\n    id: 'fact1-fact2',\\n    source: 'fact1',\\n    target: 'fact2',\\n  },\\n  {\\n    id: 'fact1-dim1',\\n    source: 'fact1',\\n    target: 'dim1',\\n  },\\n]");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/config-keybinding.ts?dumi-raw-code
/* harmony default export */ var demos_config_keybindingdumi_raw_code = ("import type { NsNodeCmd, NsEdgeCmd, IGraphCommandService } from '@antv/xflow'\\nimport { createKeybindingConfig, XFlowNodeCommands, XFlowEdgeCommands, MODELS } from '@antv/xflow'\\nimport type { Node as X6Node, Edge as X6Edge } from '@antv/x6'\\nimport { Platform } from '@antv/x6'\\nimport { message } from 'antd'\\n\\n/** \u5FEB\u6377\u952E */\\nenum ShortCut {\\n  DELETE = 'Backspace', // \u5220\u9664\\n  CmdDelete = 'Cmd+Delete', // Mac\u6309\u4F4FCommand\u591A\u9009\u5220\u9664\\n  CtrlDelete = 'Ctrl+Delete', // Windows\u6309\u4F4FCtrl\u591A\u9009\u5220\u9664\\n}\\n\\nexport const useKeybindingConfig = createKeybindingConfig(config => {\\n  config.setKeybindingFunc(registry => {\\n    return registry.registerKeybinding([\\n      {\\n        id: 'delete',\\n        keybinding: ShortCut.DELETE,\\n        callback: async (item, modelService, commandService, e) => {\\n          /** \u5982\u679C\u662Finput\u7684delete\u4E8B\u4EF6, \u5219\u4E0D\u8D70\u5220\u9664\u7684\u56DE\u8C03 */\\n          const target = e && (e?.target as HTMLElement)\\n          if (target && target.tagName && target.tagName.toLowerCase() === 'input') {\\n            return\\n          }\\n          const cells = await MODELS.SELECTED_CELLS.useValue(modelService)\\n          const nodes = cells?.filter(cell => cell.isNode())\\n          const edges = cells?.filter(cell => cell.isEdge())\\n          if (edges?.length > 0) {\\n            deleteEdges(commandService, edges as X6Edge[])\\n          }\\n          if (nodes?.length > 0) {\\n            deleteNodes(commandService, nodes as X6Node[])\\n          }\\n        },\\n      },\\n      {\\n        id: 'deleteAll',\\n        keybinding: Platform.IS_MAC ? ShortCut.CmdDelete : ShortCut.CtrlDelete,\\n        callback: async (item, modelService, commandService, e) => {\\n          const cells = await MODELS.SELECTED_CELLS.useValue(modelService)\\n          const nodes = cells?.filter(cell => cell.isNode())\\n          const edges = cells?.filter(cell => cell.isEdge())\\n          deleteEdges(commandService, edges as X6Edge[])\\n          deleteNodes(commandService, nodes as X6Node[])\\n        },\\n      },\\n    ])\\n  })\\n})\\n\\nexport const deleteNodes = async (commandService: IGraphCommandService, nodes: X6Node[]) => {\\n  const promiseList = nodes?.map(node => {\\n    return commandService.executeCommand(XFlowNodeCommands.DEL_NODE.id, {\\n      nodeConfig: {\\n        ...node.getData(),\\n      },\\n    } as NsNodeCmd.DelNode.IArgs)\\n  })\\n  const res = await Promise.all(promiseList)\\n  if (res.length > 0) {\\n    message.success('\u5220\u9664\u8282\u70B9\u6210\u529F\uFF01')\\n  }\\n}\\n\\nexport const deleteEdges = async (commandServce: IGraphCommandService, edges: X6Edge[]) => {\\n  const promiseList = edges\\n    ?.filter(edge => edge.isEdge())\\n    ?.map(edge => {\\n      return commandServce.executeCommand(XFlowEdgeCommands.DEL_EDGE.id, {\\n        edgeConfig: {\\n          ...edge.getData(),\\n        },\\n      } as NsEdgeCmd.DelEdge.IArgs)\\n    })\\n  const res = await Promise.all(promiseList)\\n  if (res.length > 0) {\\n    message.success('\u5220\u9664\u8FDE\u7EBF\u6210\u529F\uFF01')\\n  }\\n}");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/CreateNodeModal/index.tsx?dumi-raw-code
/* harmony default export */ var CreateNodeModaldumi_raw_code = ("import React from 'react'\\nimport { Modal, Form, Input, Radio, Select } from 'antd'\\nimport _ from 'lodash'\\nimport { EntityType, EntityTypeDisplay } from '../const'\\nimport './index.less';\\n\\nconst formItemLayout = {\\n  labelCol: {\\n    xs: { span: 24 },\\n    sm: { span: 6 },\\n  },\\n  wrapperCol: {\\n    xs: { span: 24 },\\n    sm: { span: 16 },\\n  },\\n};\\n\\ninterface Props {\\n  visible: boolean;\\n  onOk: Function;\\n  onCancel: Function;\\n}\\n\\n/** \u521B\u5EFA\u6A21\u578B\u5F39\u7A97 */\\nconst CreateEntityModal = (props: Props) => {\\n  const { visible, onOk, onCancel } = props\\n  const [confirmLoading, setConfirmLoading] = React.useState<boolean>(false)\\n  const [currentEntityType, setCurrentEntityType] = React.useState<EntityType>(EntityType.FACT)\\n  const [form] = Form.useForm()\\n\\n  const hanldeOk = () => {\\n    form.validateFields().then(values => {\\n      const callback = (result: any) => {\\n        setConfirmLoading(false)\\n        if (result) {\\n          onCancel();\\n        }\\n      }\\n      setConfirmLoading(true)\\n      onOk({\\n        ...values,\\n        cb: callback,\\n      })\\n    })\\n  };\\n\\n  const onChange = (e: any) => {\\n    /** \u5207\u6362\u6A21\u578B\u7C7B\u578B\u91CD\u7F6E\u8868\u5355 */\\n    form.resetFields();\\n    setCurrentEntityType(e.target.value)\\n  };\\n\\n  return (\\n    <Modal\\n      title=\\"\u521B\u5EFA\u6A21\u578B\\"\\n      visible={visible}\\n      confirmLoading={confirmLoading}\\n      wrapClassName=\\"create-entity-container\\"\\n      okText=\\"\u786E\u5B9A\\"\\n      cancelText=\\"\u53D6\u6D88\\"\\n      onOk={hanldeOk}\\n      onCancel={() => onCancel()}\\n      mask={false}\\n      centered\\n      destroyOnClose={true}\\n    >\\n      <Form form={form}>\\n        <Form.Item\\n          {...formItemLayout}\\n          name=\\"entityType\\"\\n          label=\\"\u6A21\u578B\u7C7B\u578B\\"\\n          rules={[{ required: true }]}\\n          initialValue={currentEntityType}\\n        >\\n          <Radio.Group onChange={onChange}>\\n            {_.map(EntityType, (type: EntityType) => {\\n              return (\\n                <Radio value={type} key={type}>\\n                  {EntityTypeDisplay[type]}\\n                </Radio>\\n              );\\n            })}\\n          </Radio.Group>\\n        </Form.Item>\\n        <Form.Item\\n          {...formItemLayout}\\n          name=\\"displayName\\"\\n          label=\\"\u4E2D\u6587\u540D\\"\\n          rules={\\n            [\\n              {\\n                required: true,\\n                validator: (rule, v, callback) => {\\n                  if (!v) {\\n                    callback('\u8BF7\u8F93\u5165\u4E2D\u6587\u540D\u79F0');\\n                  }\\n                  const reg1 = new RegExp(\`^[a-zA-Z0-9_]*$\`);\\n                  if (reg1.test(v)) {\\n                    callback('\u5FC5\u987B\u5305\u542B\u4E2D\u6587');\\n                  }\\n                  const reg2 = new RegExp('^[\\\\\\\\u4e00-\\\\\\\\u9fa5a-zA-Z0-9_]*$');\\n                  if (reg2.test(v)) {\\n                    callback();\\n                  } else {\\n                    callback('\u53EA\u80FD\u5305\u542B\u4E2D\u6587\u3001\u5B57\u7B26\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF');\\n                  }\\n                },\\n              },\\n            ]\\n          }\\n          initialValue={'\u7528\u6237\u521B\u5EFA\u7684\u8868'}\\n        >\\n          <Input placeholder=\\"\u8BF7\u8F93\u5165\u4E2D\u6587\u540D\u79F0\\" autoComplete=\\"off\\" />\\n        </Form.Item>\\n        <Form.Item\\n          {...formItemLayout}\\n          name=\\"name\\"\\n          label=\\"\u82F1\u6587\u540D\\"\\n          rules={\\n            [\\n              {\\n                required: true,\\n                validator: (rule, v, callback) => {\\n                  if (!v) {\\n                    callback('\u8BF7\u8F93\u5165\u82F1\u6587\u540D');\\n                  } else if (v.includes(' ')) {\\n                    callback('\u4E0D\u80FD\u5305\u542B\u7A7A\u683C');\\n                  }\\n                  const reg = new RegExp(\`^[a-zA-Z0-9_]*$\`);\\n                  if (reg.test(v)) {\\n                    callback();\\n                  } else {\\n                    callback('\u53EA\u80FD\u5305\u542B\u6570\u5B57\u3001\u5B57\u7B26\u3001\u4E0B\u5212\u7EBF');\\n                  }\\n                },\\n              },\\n            ]\\n          }\\n          initialValue={'customNode'}\\n        >\\n          <Input placeholder=\\"\u8BF7\u8F93\u5165\u82F1\u6587\u540D\\" autoComplete=\\"off\\" />\\n        </Form.Item>\\n      </Form>\\n    </Modal>\\n  );\\n}\\n\\nexport default CreateEntityModal");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/const.ts?dumi-raw-code
/* harmony default export */ var constdumi_raw_code = ("export enum GraphMode {\\n  INFO = 'INFO', // \u7F29\u7565\u6A21\u5F0F\\n  DETAIL = 'DETAIL', // \u8BE6\u60C5\u6A21\u5F0F\\n}\\n\\nexport enum EntityType {\\n  FACT = 'FACT',\\n  DIM = 'DIM',\\n  OTHER = 'OTHER',\\n}\\n\\nexport const EntityTypeDisplay = {\\n  [EntityType.FACT]: '\u4E8B\u5B9E\u8868',\\n  [EntityType.DIM]: '\u7EF4\u5EA6\u8868',\\n  [EntityType.OTHER]: '\u5176\u4ED6\u8868',\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/CreateNodeModal/index.less?dumi-raw-code
var demos_CreateNodeModaldumi_raw_code = __webpack_require__("56pB");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/CreateRelationModal/index.tsx?dumi-raw-code
/* harmony default export */ var CreateRelationModaldumi_raw_code = ("import React, { useState } from 'react'\\nimport { Modal, Form, Input, Select } from 'antd'\\nimport type { EntityCanvasModel } from '../interface'\\n\\nconst formItemLayout = {\\n  labelCol: {\\n    xs: { span: 24 },\\n    sm: { span: 6 },\\n  },\\n  wrapperCol: {\\n    xs: { span: 24 },\\n    sm: { span: 16 },\\n  },\\n}\\n\\ninterface Props {\\n  visible: boolean\\n  onOk: (value: any) => void\\n  onCancel: () => void\\n  sourceEntity?: EntityCanvasModel\\n  targetEntity?: EntityCanvasModel\\n}\\n\\nconst CreateRelationModal = (props: Props) => {\\n  const { visible, sourceEntity, targetEntity, onOk, onCancel } = props\\n  const [confirmLoading, setConfirmLoading] = useState<boolean>(false)\\n  const [form] = Form.useForm()\\n\\n  const handleOK = () => {\\n    form.validateFields().then(values => {\\n      setConfirmLoading(true)\\n      const cb = () => {\\n        setConfirmLoading(false)\\n      }\\n      onOk({ ...values, cb })\\n    })\\n  }\\n\\n  return (\\n    <Modal\\n      title=\\"\u5173\u8054\u6A21\u578B\\"\\n      visible={visible}\\n      confirmLoading={confirmLoading}\\n      wrapClassName=\\"create-relation-container\\"\\n      okText=\\"\u786E\u5B9A\\"\\n      cancelText=\\"\u53D6\u6D88\\"\\n      onOk={handleOK}\\n      onCancel={onCancel}\\n      mask={false}\\n      centered\\n      destroyOnClose={true}\\n    >\\n      <Form form={form}>\\n        <Form.Item\\n          {...formItemLayout}\\n          name=\\"SOURCE_GUID\\"\\n          label=\\"SOURCE_GUID\\"\\n          rules={[{ required: true }]}\\n          initialValue={\`\${sourceEntity?.entityName || ''}(\${sourceEntity?.entityId || ''})\`}\\n        >\\n          <Input />\\n        </Form.Item>\\n        <Form.Item\\n          {...formItemLayout}\\n          name=\\"TARGET_GUID\\"\\n          label=\\"TARGET_GUID\\"\\n          rules={[{ required: true }]}\\n          initialValue={\`\${targetEntity?.entityName || ''}(\${targetEntity?.entityId || ''})\`}\\n        >\\n          <Input />\\n        </Form.Item>\\n        <Form.Item\\n          {...formItemLayout}\\n          name=\\"RELATION_TYPE\\"\\n          label=\\"\u9009\u62E9\u5173\u8054\u5173\u7CFB\\"\\n          rules={[{ required: true }]}\\n          initialValue={'N:1'}\\n        >\\n          <Select placeholder=\\"\u8BF7\u9009\u62E9\u5173\u8054\u5173\u7CFB\\">\\n            <Select.Option value=\\"N:1\\">\u591A\u5BF9\u4E00</Select.Option>\\n            <Select.Option value=\\"1:N\\">\u4E00\u5BF9\u591A</Select.Option>\\n          </Select>\\n        </Form.Item>\\n      </Form>\\n    </Modal>\\n  )\\n}\\n\\nexport default CreateRelationModal");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/react-node/Entity.tsx?dumi-raw-code
/* harmony default export */ var Entitydumi_raw_code = ("import React from 'react'\\nimport type { NsGraph } from '@antv/xflow'\\nimport type { EntityCanvasModel, EntityProperty } from '../interface'\\nimport { BarsOutlined, DeleteOutlined } from '@ant-design/icons'\\nimport { EntityType } from '../const'\\n\\nimport './Entity.less'\\n\\ninterface OwnProps {\\n  deleteNode: Function\\n}\\n\\ntype Props = OwnProps & NsGraph.IReactNodeProps\\n\\nconst Entity = (props: Props) => {\\n  const entity: EntityCanvasModel = props?.data\\n\\n  const getCls = () => {\\n    if (entity?.entityType === EntityType.FACT) {\\n      return 'fact'\\n    }\\n    if (entity?.entityType === EntityType.DIM) {\\n      return 'dim'\\n    }\\n    if (entity?.entityType === EntityType.OTHER) {\\n      return 'other'\\n    }\\n    return ''\\n  }\\n  return (\\n    <div className={\`entity-container \${getCls()}\`}>\\n      <div className={\`content \${getCls()}\`}>\\n        <div className=\\"head\\">\\n          <div>\\n            <BarsOutlined className=\\"type\\" />\\n            <span>{entity?.entityName}</span>\\n          </div>\\n          <div className=\\"del-icon\\" onClick={() => props.deleteNode(entity?.id)}>\\n            <DeleteOutlined />\\n          </div>\\n        </div>\\n        <div className=\\"body\\">\\n          {entity?.properties?.map((property: EntityProperty) => {\\n            return (\\n              <div className=\\"body-item\\" key={property.propertyId}>\\n                <div className=\\"name\\">\\n                  {property?.isPK && <span className=\\"pk\\">PK</span>}\\n                  {property?.isFK && <span className=\\"fk\\">FK</span>}\\n                  {property?.propertyName}\\n                </div>\\n                <div className=\\"type\\">{property.propertyType}</div>\\n              </div>\\n            )\\n          })}\\n        </div>\\n      </div>\\n    </div>\\n  )\\n}\\n\\nexport default Entity");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/react-node/Entity.less?dumi-raw-code
var react_node_Entitydumi_raw_code = __webpack_require__("7B+o");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/react-edge/Relation.tsx?dumi-raw-code
/* harmony default export */ var Relationdumi_raw_code = ("import React from 'react'\\nimport type { NsGraph } from '@antv/xflow-core'\\nimport type { RelationCanvasModel } from '../interface'\\nimport { Popover, Popconfirm, Tooltip } from 'antd'\\nimport { ScissorOutlined } from '@ant-design/icons'\\nimport _ from 'lodash'\\nimport './Relation.less'\\n\\ninterface OwnProps {\\n  deleteRelation: Function\\n}\\n\\ntype Props = OwnProps & NsGraph.IReactEdgeProps\\n\\nconst Relation = (props: Props) => {\\n  const relation: RelationCanvasModel = props?.data\\n\\n  const renderRelationOperationItem = (relation: RelationCanvasModel) => {\\n    const sourcePropertyName = relation?.source\\n    const targetPropertyName = relation?.target\\n    return (\\n      <div className=\\"relation-operation-item\\" key={relation.id}>\\n        <div className=\\"relation-operation-item-content\\">\\n          <Tooltip placement=\\"top\\" title={sourcePropertyName}>\\n            <span className=\\"relation-property-source\\">{sourcePropertyName}</span>\\n          </Tooltip>\\n          (N:1)\\n          <Tooltip placement=\\"top\\" title={targetPropertyName}>\\n            <span className=\\"relation-property-target\\">{targetPropertyName}</span>\\n          </Tooltip>\\n        </div>\\n        <Popconfirm\\n          placement=\\"leftTop\\"\\n          title=\\"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5173\u7CFB\u5417\\"\\n          okText=\\"\u786E\u5B9A\\"\\n          cancelText=\\"\u53D6\u6D88\\"\\n          onConfirm={() => {\\n            props?.deleteRelation(relation.id)\\n          }}\\n        >\\n          <ScissorOutlined />\\n        </Popconfirm>\\n      </div>\\n    )\\n  }\\n\\n  const renderPopoverContent = () => {\\n    return (\\n      <div className=\\"relation-operation-container\\">{renderRelationOperationItem(relation)}</div>\\n    )\\n  }\\n\\n  return (\\n    <Popover\\n      trigger={'hover'}\\n      content={renderPopoverContent()}\\n      overlayClassName=\\"relation-operation-popover\\"\\n    >\\n      <div className=\\"relation-count-container\\">{1}</div>\\n    </Popover>\\n  )\\n}\\n\\nexport default Relation");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/react-edge/Relation.less?dumi-raw-code
var react_edge_Relationdumi_raw_code = __webpack_require__("sLV1");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/er/demos/index.less?dumi-raw-code
var solutions_er_demosdumi_raw_code = __webpack_require__("QOAa");

// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/flow/demos/index.tsx?dumi-raw-code
/* harmony default export */ var flow_demosdumi_raw_code = ("import type { IAppLoad } from '@antv/xflow'\\nimport React, { useRef, useEffect } from 'react'\\n/** \u4EA4\u4E92\u7EC4\u4EF6 */\\nimport {\\n  /** XFlow\u6838\u5FC3\u7EC4\u4EF6 */\\n  XFlow,\\n  /** \u6D41\u7A0B\u56FE\u753B\u5E03\u7EC4\u4EF6 */\\n  FlowchartCanvas,\\n  /** \u6D41\u7A0B\u56FE\u914D\u7F6E\u6269\u5C55 */\\n  FlowchartExtension,\\n  /** \u6D41\u7A0B\u56FE\u8282\u70B9\u7EC4\u4EF6 */\\n  FlowchartNodePanel,\\n  /** \u6D41\u7A0B\u56FE\u8868\u5355\u7EC4\u4EF6 */\\n  FlowchartFormPanel,\\n  /** \u901A\u7528\u7EC4\u4EF6\uFF1A\u5FEB\u6377\u952E */\\n  KeyBindings,\\n  /** \u901A\u7528\u7EC4\u4EF6\uFF1A\u753B\u5E03\u7F29\u653E */\\n  CanvasScaleToolbar,\\n  /** \u901A\u7528\u7EC4\u4EF6\uFF1A\u53F3\u952E\u83DC\u5355 */\\n  CanvasContextMenu,\\n  /** \u901A\u7528\u7EC4\u4EF6\uFF1A\u5DE5\u5177\u680F */\\n  CanvasToolbar,\\n  /** \u901A\u7528\u7EC4\u4EF6\uFF1A\u5BF9\u9F50\u7EBF */\\n  CanvasSnapline,\\n  /** \u901A\u7528\u7EC4\u4EF6\uFF1A\u8282\u70B9\u8FDE\u63A5\u6869 */\\n  CanvasNodePortTooltip,\\n} from '@antv/xflow'\\nimport type { Graph } from '@antv/x6'\\n/** \u914D\u7F6EMenu */\\nimport { useMenuConfig } from './config-menu'\\n/** \u914D\u7F6EToolbar */\\nimport { useToolbarConfig } from './config-toolbar'\\n/** \u914D\u7F6E\u5FEB\u6377\u952E */\\nimport { useKeybindingConfig } from './config-keybinding'\\n/** \u914D\u7F6EDnd\u7EC4\u4EF6\u9762\u677F */\\nimport { DndNode } from './react-node/dnd-node'\\n\\nimport './index.less'\\n\\nexport interface IProps {\\n  meta: { flowId: string }\\n}\\n\\nexport const Demo: React.FC<IProps> = props => {\\n  const { meta } = props\\n  const toolbarConfig = useToolbarConfig()\\n  const menuConfig = useMenuConfig()\\n  const keybindingConfig = useKeybindingConfig()\\n  const graphRef = useRef<Graph>()\\n  /**\\n   * @param app \u5F53\u524DXFlow\u5DE5\u4F5C\u7A7A\u95F4\\n   * @param extensionRegistry \u5F53\u524DXFlow\u914D\u7F6E\u9879\\n   */\\n\\n  const onLoad: IAppLoad = async app => {\\n    graphRef.current = await app.getGraphInstance()\\n  }\\n\\n  useEffect(() => {\\n    if (graphRef.current) {\\n      graphRef.current.on('node:click', (...arg) => {\\n        console.log(arg)\\n      })\\n    }\\n  }, [graphRef])\\n\\n  return (\\n    <XFlow className=\\"flow-user-custom-clz\\" onLoad={onLoad} meta={meta}>\\n      <FlowchartExtension />\\n      <FlowchartNodePanel\\n        registerNode={{\\n          title: '\u81EA\u5B9A\u4E49\u8282\u70B9',\\n          nodes: [\\n            {\\n              component: DndNode,\\n              popover: () => <div>\u81EA\u5B9A\u4E49\u8282\u70B9</div>,\\n              name: 'custom-node-indicator',\\n              width: 210,\\n              height: 130,\\n              label: '\u81EA\u5B9A\u4E49\u8282\u70B9',\\n            },\\n          ],\\n        }}\\n        position={{ width: 162, top: 40, bottom: 0, left: 0 }}\\n      />\\n      <CanvasToolbar\\n        className=\\"xflow-workspace-toolbar-top\\"\\n        layout=\\"horizontal\\"\\n        config={toolbarConfig}\\n        position={{ top: 0, left: 0, right: 0, bottom: 0 }}\\n      />\\n      <FlowchartCanvas position={{ top: 40, left: 0, right: 0, bottom: 0 }}>\\n        <CanvasScaleToolbar\\n          layout=\\"horizontal\\"\\n          position={{ top: -40, right: 0 }}\\n          style={{\\n            width: 120,\\n            left: 'auto',\\n            height: 39,\\n          }}\\n        />\\n        <CanvasContextMenu config={menuConfig} />\\n        <CanvasSnapline color=\\"#faad14\\" />\\n        <CanvasNodePortTooltip />\\n      </FlowchartCanvas>\\n      <FlowchartFormPanel show={true} position={{ width: 200, top: 40, bottom: 0, right: 0 }} />\\n      <KeyBindings config={keybindingConfig} />\\n    </XFlow>\\n  )\\n}\\n\\nexport default Demo");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/flow/demos/config-menu.ts?dumi-raw-code
/* harmony default export */ var demos_config_menudumi_raw_code = ("import type {\\n  NsNodeCmd,\\n  NsEdgeCmd,\\n  IMenuOptions,\\n  NsGraph,\\n  IArgsBase,\\n  HookHub,\\n  ICmdHooks as IHooks,\\n} from '@antv/xflow'\\nimport { createCtxMenuConfig, MenuItemType } from '@antv/xflow'\\nimport { IconStore, XFlowNodeCommands, XFlowEdgeCommands } from '@antv/xflow'\\nimport { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons'\\nimport { MockApi } from './service'\\n\\nimport type { IGraphCommand } from '@antv/xflow'\\n\\n/** \u8282\u70B9\u547D\u4EE4 */\\nexport namespace CustomCommands {\\n  const category = '\u8282\u70B9\u64CD\u4F5C'\\n  /** \u6E05\u9664\u753B\u5E03 */\\n  export const CLEAR_GRAPH: IGraphCommand = {\\n    id: 'xflow:clear-graph',\\n    label: '\u6E05\u9664',\\n    category,\\n  }\\n  /** \u5BFC\u51FA */\\n  export const EXPORT_GRAPH: IGraphCommand = {\\n    id: 'xflow:export-graph',\\n    label: '\u5BFC\u51FA',\\n    category,\\n  }\\n  /** \u91CD\u547D\u540D\u8282\u70B9\u5F39\u7A97 */\\n  export const SHOW_RENAME_MODAL: IGraphCommand = {\\n    id: 'xflow:rename-node-modal',\\n    label: '\u6253\u5F00\u91CD\u547D\u540D\u5F39\u7A97',\\n    category,\\n  }\\n}\\nexport namespace NsRenameNodeCmd {\\n  /** Command: \u7528\u4E8E\u6CE8\u518Cnamed factory */\\n  export const command = CustomCommands.SHOW_RENAME_MODAL\\n  /** hook name */\\n  export const hookKey = 'renameNode'\\n  /** hook \u53C2\u6570\u7C7B\u578B */\\n  export interface IArgs extends IArgsBase {\\n    nodeConfig: NsGraph.INodeConfig\\n    updateNodeNameService: IUpdateNodeNameService\\n  }\\n  export interface IUpdateNodeNameService {\\n    (newName: string, nodeConfig: NsGraph.INodeConfig, meta: NsGraph.IGraphMeta): Promise<{\\n      err: string | null\\n      nodeName: string\\n    }>\\n  }\\n  /** hook handler \u8FD4\u56DE\u7C7B\u578B */\\n  export interface IResult {\\n    err: string | null\\n    preNodeName?: string\\n    currenNodetName?: string\\n  }\\n  /** hooks \u7C7B\u578B */\\n  export interface ICmdHooks extends IHooks {\\n    renameNode: HookHub<IArgs, IResult>\\n  }\\n}\\n\\n/** menuitem \u914D\u7F6E */\\nexport namespace NsMenuItemConfig {\\n  /** \u6CE8\u518C\u83DC\u5355\u4F9D\u8D56\u7684icon */\\n  IconStore.set('DeleteOutlined', DeleteOutlined)\\n  IconStore.set('EditOutlined', EditOutlined)\\n  IconStore.set('StopOutlined', StopOutlined)\\n\\n  export const DELETE_EDGE: IMenuOptions = {\\n    id: XFlowEdgeCommands.DEL_EDGE.id,\\n    label: '\u5220\u9664\u8FB9',\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n        edgeConfig: target.data as NsGraph.IEdgeConfig,\\n      })\\n    },\\n  }\\n\\n  export const DELETE_NODE: IMenuOptions = {\\n    id: XFlowNodeCommands.DEL_NODE.id,\\n    label: '\u5220\u9664\u8282\u70B9',\\n    iconName: 'DeleteOutlined',\\n    onClick: async ({ target, commandService }) => {\\n      commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n        nodeConfig: { id: target.data.id },\\n      })\\n    },\\n  }\\n\\n  export const EMPTY_MENU: IMenuOptions = {\\n    id: 'EMPTY_MENU_ITEM',\\n    label: '\u6682\u65E0\u53EF\u7528',\\n    isEnabled: false,\\n    iconName: 'DeleteOutlined',\\n  }\\n\\n  export const SEPARATOR: IMenuOptions = {\\n    id: 'separator',\\n    type: MenuItemType.Separator,\\n  }\\n}\\n\\nexport const useMenuConfig = createCtxMenuConfig(config => {\\n  config.setMenuModelService(async (target, model, modelService, toDispose) => {\\n    const { type, cell } = target\\n    console.log(type)\\n    switch (type) {\\n      /** \u8282\u70B9\u83DC\u5355 */\\n      case 'node':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsMenuItemConfig.DELETE_NODE],\\n        })\\n        break\\n      /** \u8FB9\u83DC\u5355 */\\n      case 'edge':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsMenuItemConfig.DELETE_EDGE],\\n        })\\n        break\\n      /** \u753B\u5E03\u83DC\u5355 */\\n      case 'blank':\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsMenuItemConfig.EMPTY_MENU],\\n        })\\n        break\\n      /** \u9ED8\u8BA4\u83DC\u5355 */\\n      default:\\n        model.setValue({\\n          id: 'root',\\n          type: MenuItemType.Root,\\n          submenu: [NsMenuItemConfig.EMPTY_MENU],\\n        })\\n        break\\n    }\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/flow/demos/config-toolbar.ts?dumi-raw-code
/* harmony default export */ var demos_config_toolbardumi_raw_code = ("import {\\n  createToolbarConfig,\\n  IModelService,\\n  IToolbarItemOptions,\\n  NsGroupCmd,\\n  uuidv4,\\n  XFlowGroupCommands,\\n  XFlowNodeCommands,\\n  XFlowGraphCommands,\\n  NsGraphCmd,\\n  NsNodeCmd,\\n  IconStore,\\n  MODELS,\\n} from '@antv/xflow'\\nimport {\\n  UngroupOutlined,\\n  SaveOutlined,\\n  GroupOutlined,\\n  GatewayOutlined,\\n  UndoOutlined,\\n  RedoOutlined,\\n  VerticalAlignTopOutlined,\\n  VerticalAlignBottomOutlined,\\n  CopyOutlined,\\n  SnippetsOutlined,\\n} from '@ant-design/icons'\\n\\nconst GROUP_NODE_RENDER_ID = 'GROUP_NODE_RENDER_ID'\\n\\nexport namespace TOOLBAR_ITEMS {\\n  export const BACK_NODE = XFlowNodeCommands.BACK_NODE.id\\n  export const FRONT_NODE = XFlowNodeCommands.FRONT_NODE.id\\n  export const SAVE_GRAPH_DATA = XFlowGraphCommands.SAVE_GRAPH_DATA.id\\n  export const REDO_CMD = \`\${XFlowGraphCommands.REDO_CMD.id}\`\\n  export const UNDO_CMD = \`\${XFlowGraphCommands.UNDO_CMD.id}\`\\n  export const MULTI_SELECT = \`\${XFlowGraphCommands.GRAPH_TOGGLE_MULTI_SELECT.id}\`\\n  export const ADD_GROUP = \`\${XFlowGroupCommands.ADD_GROUP.id}\`\\n  export const DEL_GROUP = \`\${XFlowGroupCommands.DEL_GROUP.id}\`\\n  export const COPY = \`\${XFlowGraphCommands.GRAPH_COPY.id}\`\\n  export const PASTE = \`\${XFlowGraphCommands.GRAPH_PASTE.id}\`\\n}\\n\\nnamespace NSToolbarConfig {\\n  /** toolbar\u4F9D\u8D56\u7684\u72B6\u6001 */\\n  export interface IToolbarState {\\n    isMultiSelctionActive: boolean\\n    isGroupSelected: boolean\\n    isNodeSelected: boolean\\n    isUndoable: boolean\\n    isRedoable: boolean\\n  }\\n\\n  export const getDependencies = async (modelService: IModelService) => {\\n    return [\\n      await MODELS.SELECTED_NODES.getModel(modelService),\\n      await MODELS.GRAPH_ENABLE_MULTI_SELECT.getModel(modelService),\\n    ]\\n  }\\n\\n  /** toolbar\u4F9D\u8D56\u7684\u72B6\u6001 */\\n  export const getToolbarState = async (modelService: IModelService) => {\\n    // isMultiSelctionActive\\n    const { isEnable: isMultiSelctionActive } = await MODELS.GRAPH_ENABLE_MULTI_SELECT.useValue(\\n      modelService,\\n    )\\n    // isGroupSelected\\n    const isGroupSelected = await MODELS.IS_GROUP_SELECTED.useValue(modelService)\\n    // isNormalNodesSelected: node\u4E0D\u80FD\u662FGroupNode\\n    const isNormalNodesSelected = await MODELS.IS_NORMAL_NODES_SELECTED.useValue(modelService)\\n    // undo redo\\n    const isUndoable = await MODELS.COMMAND_UNDOABLE.useValue(modelService)\\n    const isRedoable = await MODELS.COMMAND_REDOABLE.useValue(modelService)\\n\\n    return {\\n      isUndoable,\\n      isRedoable,\\n      isNodeSelected: isNormalNodesSelected,\\n      isGroupSelected,\\n      isMultiSelctionActive,\\n    } as NSToolbarConfig.IToolbarState\\n  }\\n\\n  export const getToolbarItems = async (state: IToolbarState) => {\\n    const toolbarGroup: IToolbarItemOptions[] = []\\n    // const history = getGraphHistory()\\n\\n    // /** \u64A4\u9500 */\\n    // toolbarGroup.push({\\n    //   tooltip: '\u64A4\u9500',\\n    //   iconName: 'UndoOutlined',\\n    //   id: TOOLBAR_ITEMS.UNDO_CMD,\\n    //   isEnabled: history.canUndo(),\\n    //   onClick: async () => {\\n    //     history.undo()\\n    //   },\\n    // })\\n\\n    // /** \u91CD\u505A */\\n    // toolbarGroup.push({\\n    //   tooltip: '\u91CD\u505A',\\n    //   iconName: 'RedoOutlined',\\n    //   id: TOOLBAR_ITEMS.REDO_CMD,\\n    //   isEnabled: history.canRedo(),\\n    //   onClick: async () => {\\n    //     history.redo()\\n    //   },\\n    // })\\n\\n    /** FRONT_NODE */\\n    toolbarGroup.push({\\n      tooltip: '\u7F6E\u524D',\\n      iconName: 'VerticalAlignTopOutlined',\\n      id: TOOLBAR_ITEMS.FRONT_NODE,\\n      isEnabled: state.isNodeSelected,\\n      onClick: async ({ commandService, modelService }) => {\\n        const node = await MODELS.SELECTED_NODE.useValue(modelService)\\n        commandService.executeCommand<NsNodeCmd.FrontNode.IArgs>(TOOLBAR_ITEMS.FRONT_NODE, {\\n          nodeId: node?.id,\\n        })\\n      },\\n    })\\n\\n    /** BACK_NODE */\\n    toolbarGroup.push({\\n      tooltip: '\u7F6E\u540E',\\n      iconName: 'VerticalAlignBottomOutlined',\\n      id: TOOLBAR_ITEMS.BACK_NODE,\\n      isEnabled: state.isNodeSelected,\\n      onClick: async ({ commandService, modelService }) => {\\n        const node = await MODELS.SELECTED_NODE.useValue(modelService)\\n        commandService.executeCommand<NsNodeCmd.FrontNode.IArgs>(TOOLBAR_ITEMS.BACK_NODE, {\\n          nodeId: node?.id,\\n        })\\n      },\\n    })\\n\\n    /** \u5F00\u542F\u6846\u9009 */\\n    toolbarGroup.push({\\n      tooltip: '\u5F00\u542F\u6846\u9009',\\n      iconName: 'GatewayOutlined',\\n      id: TOOLBAR_ITEMS.MULTI_SELECT,\\n      active: state.isMultiSelctionActive,\\n      onClick: async ({ commandService }) => {\\n        commandService.executeCommand<NsGraphCmd.GraphToggleMultiSelect.IArgs>(\\n          TOOLBAR_ITEMS.MULTI_SELECT,\\n          {},\\n        )\\n      },\\n    })\\n\\n    /** \u65B0\u5EFA\u7FA4\u7EC4 */\\n    toolbarGroup.push({\\n      tooltip: '\u65B0\u5EFA\u7FA4\u7EC4',\\n      iconName: 'GroupOutlined',\\n      id: TOOLBAR_ITEMS.ADD_GROUP,\\n      isEnabled: state.isNodeSelected,\\n      onClick: async ({ commandService, modelService }) => {\\n        const cells = await MODELS.SELECTED_CELLS.useValue(modelService)\\n        const groupChildren = cells.map(cell => cell.id)\\n        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(TOOLBAR_ITEMS.ADD_GROUP, {\\n          nodeConfig: {\\n            id: uuidv4(),\\n            renderKey: GROUP_NODE_RENDER_ID,\\n            groupChildren,\\n            groupCollapsedSize: { width: 200, height: 40 },\\n            label: '\u65B0\u5EFA\u7FA4\u7EC4',\\n          },\\n        })\\n      },\\n    })\\n\\n    /** \u89E3\u6563\u7FA4\u7EC4 */\\n    toolbarGroup.push({\\n      tooltip: '\u89E3\u6563\u7FA4\u7EC4',\\n      iconName: 'UngroupOutlined',\\n      id: TOOLBAR_ITEMS.DEL_GROUP,\\n      isEnabled: state.isGroupSelected,\\n      onClick: async ({ commandService, modelService }) => {\\n        const cell = await MODELS.SELECTED_NODE.useValue(modelService)\\n        const nodeConfig = cell.getData()\\n        commandService.executeCommand<NsGroupCmd.AddGroup.IArgs>(XFlowGroupCommands.DEL_GROUP.id, {\\n          nodeConfig: nodeConfig,\\n        })\\n      },\\n    })\\n\\n    /** \u4FDD\u5B58\u6570\u636E */\\n    toolbarGroup.push({\\n      tooltip: '\u4FDD\u5B58',\\n      iconName: 'SaveOutlined',\\n      id: TOOLBAR_ITEMS.SAVE_GRAPH_DATA,\\n      onClick: async ({ commandService }) => {\\n        commandService.executeCommand<NsGraphCmd.SaveGraphData.IArgs>(\\n          TOOLBAR_ITEMS.SAVE_GRAPH_DATA,\\n          {\\n            saveGraphDataService: (meta, graphData) => {\\n              console.log(graphData)\\n              return null\\n            },\\n          },\\n        )\\n      },\\n    })\\n    return [\\n      {\\n        name: 'graphData',\\n        items: toolbarGroup,\\n      },\\n    ]\\n  }\\n}\\n\\n/** \u6CE8\u518Cicon \u7C7B\u578B */\\nconst registerIcon = () => {\\n  IconStore.set('SaveOutlined', SaveOutlined)\\n  IconStore.set('UndoOutlined', UndoOutlined)\\n  IconStore.set('RedoOutlined', RedoOutlined)\\n  IconStore.set('VerticalAlignTopOutlined', VerticalAlignTopOutlined)\\n  IconStore.set('VerticalAlignBottomOutlined', VerticalAlignBottomOutlined)\\n  IconStore.set('GatewayOutlined', GatewayOutlined)\\n  IconStore.set('GroupOutlined', GroupOutlined)\\n  IconStore.set('UngroupOutlined', UngroupOutlined)\\n  IconStore.set('CopyOutlined', CopyOutlined)\\n  IconStore.set('SnippetsOutlined', SnippetsOutlined)\\n}\\n\\nexport const useToolbarConfig = createToolbarConfig((toolbarConfig, proxy) => {\\n  registerIcon()\\n  /** \u751F\u4EA7 toolbar item */\\n  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService, toDispose) => {\\n    const updateToolbarModel = async () => {\\n      const state = await NSToolbarConfig.getToolbarState(modelService)\\n      const toolbarItems = await NSToolbarConfig.getToolbarItems(state)\\n\\n      toolbarModel.setValue(toolbar => {\\n        toolbar.mainGroups = toolbarItems\\n      })\\n    }\\n    const models = await NSToolbarConfig.getDependencies(modelService)\\n    const subscriptions = models.map(model => {\\n      return model.watch(async () => {\\n        updateToolbarModel()\\n      })\\n    })\\n    toDispose.pushAll(subscriptions)\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/flow/demos/config-keybinding.ts?dumi-raw-code
/* harmony default export */ var flow_demos_config_keybindingdumi_raw_code = ("import type { NsNodeCmd, NsGraphCmd, NsEdgeCmd } from '@antv/xflow'\\nimport {\\n  createKeybindingConfig,\\n  XFlowNodeCommands,\\n  XFlowEdgeCommands,\\n  XFlowGraphCommands,\\n  MODELS,\\n} from '@antv/xflow'\\n\\nexport const useKeybindingConfig = createKeybindingConfig(config => {\\n  // delete\\n  config.setKeybindingFunc(regsitry => {\\n    return regsitry.registerKeybinding([\\n      {\\n        id: 'delete node or edge',\\n        keybinding: 'backspace',\\n        callback: async function (item, modelService, cmd, e) {\\n          const cells = await MODELS.SELECTED_CELLS.useValue(modelService)\\n          cells.map(cell => {\\n            if (cell.isNode()) {\\n              return cmd.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {\\n                nodeConfig: {\\n                  ...cell.getData(),\\n                  id: cell.id,\\n                },\\n              })\\n            }\\n            if (cell.isEdge()) {\\n              return cmd.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {\\n                edgeConfig: { ...cell.getData(), id: cell.id },\\n              })\\n            }\\n          })\\n        },\\n      },\\n      {\\n        id: 'copy',\\n        keybinding: ['command+c', 'ctrl+c'],\\n        callback: async function (item, modelService, cmd, e) {\\n          e.preventDefault()\\n          console.log(item)\\n          cmd.executeCommand<NsGraphCmd.GraphCopySelection.IArgs>(\\n            XFlowGraphCommands.GRAPH_COPY.id,\\n            {},\\n          )\\n        },\\n      },\\n      {\\n        id: 'paste',\\n        keybinding: ['command+v', 'ctrl+v'],\\n        callback: async function (item, ctx, cmd, e) {\\n          e.preventDefault()\\n          cmd.executeCommand<NsGraphCmd.GraphPasteSelection.IArgs>(\\n            XFlowGraphCommands.GRAPH_PASTE.id,\\n            {},\\n          )\\n        },\\n      },\\n      {\\n        id: 'undo',\\n        keybinding: ['meta+z', 'ctrl+z'],\\n        callback: async function (item, ctx, cmd, e) {\\n          e.preventDefault()\\n          cmd.executeCommand<NsGraphCmd.GraphHistoryUndo.IArgs>(\\n            XFlowGraphCommands.GRAPH_HISTORY_UNDO.id,\\n            {},\\n          )\\n        },\\n      },\\n      {\\n        id: 'redo',\\n        keybinding: ['meta+shift+z', 'ctrl+shift+z'],\\n        callback: async function (item, ctx, cmd, e) {\\n          e.preventDefault()\\n          cmd.executeCommand<NsGraphCmd.GraphHistoryRedo.IArgs>(\\n            XFlowGraphCommands.GRAPH_HISTORY_REDO.id,\\n            {},\\n          )\\n        },\\n      },\\n    ])\\n  })\\n})");
// CONCATENATED MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/flow/demos/react-node/dnd-node.tsx?dumi-raw-code
/* harmony default export */ var dnd_nodedumi_raw_code = ("import React from 'react'\\nimport './dnd-node.less'\\n\\nexport const DndNode = props => {\\n  const { size = { width: 126, height: 104 }, data } = props\\n  const { width, height } = size\\n  const { label, stroke, fill, fontFill, fontSize } = data\\n\\n  return (\\n    <div\\n      className=\\"container\\"\\n      style={{\\n        width,\\n        height,\\n        borderColor: stroke,\\n        backgroundColor: fill,\\n        color: fontFill,\\n        fontSize,\\n      }}\\n    >\\n      <span>{label}</span>\\n    </div>\\n  )\\n}");
// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/flow/demos/react-node/dnd-node.less?dumi-raw-code
var react_node_dnd_nodedumi_raw_code = __webpack_require__("WKmj");

// EXTERNAL MODULE: /Users/lyn/github/xflow-github/node_modules/@umijs/preset-dumi/lib/loader/rawCode.js!./docs/tutorial/solutions/flow/demos/index.less?dumi-raw-code
var solutions_flow_demosdumi_raw_code = __webpack_require__("nHJs");

// CONCATENATED MODULE: ./src/.umi-production/dumi/demos/index.ts


// @ts-nocheck































































































































































































































/* harmony default export */ var demos = __webpack_exports__["default"] = ({
  'edge-highlight-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "W4te"));

                case 2:
                  return _context.abrupt("return", _context.sent.default);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function loader() {
          return _loader.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": demosdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": edge_highlight_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["cmd-demo"],
      "identifier": "edge-highlight-demos"
    }
  },
  'edge-update-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader2 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
          return regenerator_default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "KU79"));

                case 2:
                  return _context2.abrupt("return", _context2.sent.default);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function loader() {
          return _loader2.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": edge_update_demosdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": edges_edge_update_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "identifier": "edge-update-demos"
    }
  },
  'graph-layout-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader3 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
          return regenerator_default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "suys"));

                case 2:
                  return _context3.abrupt("return", _context3.sent.default);

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function loader() {
          return _loader3.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": graph_layout_demosdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": graph_graph_layout_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "identifier": "graph-layout-demos"
    }
  },
  'graph-render-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader4 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
          return regenerator_default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "fLTG"));

                case 2:
                  return _context4.abrupt("return", _context4.sent.default);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        function loader() {
          return _loader4.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": graph_render_demosdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": graph_graph_render_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "identifier": "graph-render-demos"
    }
  },
  'graph-zoom-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader5 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee5() {
          return regenerator_default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "ofWA"));

                case 2:
                  return _context5.abrupt("return", _context5.sent.default);

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        function loader() {
          return _loader5.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": graph_zoom_demosdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": graph_graph_zoom_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "identifier": "graph-zoom-demos"
    }
  },
  'group-add-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader6 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee6() {
          return regenerator_default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "DiY4"));

                case 2:
                  return _context6.abrupt("return", _context6.sent.default);

                case 3:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        function loader() {
          return _loader6.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": basicdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": formdumi_raw_code
        },
        "constant.ts": {
          "import": "./constant",
          "content": constantdumi_raw_code
        },
        "config-graph.tsx": {
          "import": "./config-graph",
          "content": config_graphdumi_raw_code
        },
        "react-node/index.tsx": {
          "import": "./react-node",
          "content": react_nodedumi_raw_code
        },
        "react-node/index.less": {
          "import": "./index.less",
          "content": basic_react_nodedumi_raw_code["a" /* default */]
        },
        "react-group-node/index.tsx": {
          "import": "./react-group-node",
          "content": react_group_nodedumi_raw_code
        },
        "react-group-node/index.less": {
          "import": "./index.less",
          "content": basic_react_group_nodedumi_raw_code["a" /* default */]
        },
        "mock.ts": {
          "import": "./mock",
          "content": mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": group_add_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["add-group-demo"],
      "description": "<div class=\\"markdown\\"><p>\u628A\u8282\u70B9\u548C\u8FB9\u7EC4\u5408\u6210\u7FA4\u7EC4 <br /></p></div>",
      "identifier": "group-add-basic"
    }
  },
  'group-collapse-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader7 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee7() {
          return regenerator_default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "6cNV"));

                case 2:
                  return _context7.abrupt("return", _context7.sent.default);

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        function loader() {
          return _loader7.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": group_collapse_basicdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": basic_formdumi_raw_code
        },
        "config-graph.tsx": {
          "import": "./config-graph",
          "content": basic_config_graphdumi_raw_code
        },
        "constant.ts": {
          "import": "./constant",
          "content": basic_constantdumi_raw_code
        },
        "react-node/index.tsx": {
          "import": "./react-node",
          "content": group_collapse_basic_react_nodedumi_raw_code
        },
        "react-node/index.less": {
          "import": "./index.less",
          "content": group_group_collapse_basic_react_nodedumi_raw_code["a" /* default */]
        },
        "react-group-node/index.tsx": {
          "import": "./react-group-node",
          "content": group_collapse_basic_react_group_nodedumi_raw_code
        },
        "react-group-node/index.less": {
          "import": "./index.less",
          "content": group_group_collapse_basic_react_group_nodedumi_raw_code["a" /* default */]
        },
        "mock.ts": {
          "import": "./mock",
          "content": basic_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": group_group_collapse_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["add-group-demo"],
      "description": "<div class=\\"markdown\\"><p>\u6298\u53E0\u6307\u5B9A\u7684\u7FA4\u7EC4</p></div>",
      "identifier": "group-collapse-basic"
    }
  },
  'group-del-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader8 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee8() {
          return regenerator_default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "XVLT"));

                case 2:
                  return _context8.abrupt("return", _context8.sent.default);

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        function loader() {
          return _loader8.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": group_del_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": demos_formdumi_raw_code
        },
        "config-graph.tsx": {
          "import": "./config-graph",
          "content": demos_config_graphdumi_raw_code
        },
        "constant.ts": {
          "import": "./constant",
          "content": demos_constantdumi_raw_code
        },
        "react-node/index.tsx": {
          "import": "./react-node",
          "content": demos_react_nodedumi_raw_code
        },
        "react-node/index.less": {
          "import": "./index.less",
          "content": group_del_demos_react_nodedumi_raw_code["a" /* default */]
        },
        "react-group-node/index.tsx": {
          "import": "./react-group-node",
          "content": demos_react_group_nodedumi_raw_code
        },
        "react-group-node/index.less": {
          "import": "./index.less",
          "content": group_del_demos_react_group_nodedumi_raw_code["a" /* default */]
        },
        "mock.ts": {
          "import": "./mock",
          "content": demos_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": group_group_del_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["cmd-demo"],
      "description": "<div class=\\"markdown\\"><p>\u89E3\u6563\u6307\u5B9A\u7684\u7FA4\u7EC4</p></div>",
      "identifier": "group-del-demos"
    }
  },
  'node-add-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader9 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee9() {
          return regenerator_default.a.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "77Ab"));

                case 2:
                  return _context9.abrupt("return", _context9.sent.default);

                case 3:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        function loader() {
          return _loader9.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_add_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_add_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_add_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["cmd-demo"],
      "identifier": "node-add-demos"
    }
  },
  'node-back-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader10 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee10() {
          return regenerator_default.a.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "u8p8"));

                case 2:
                  return _context10.abrupt("return", _context10.sent.default);

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        function loader() {
          return _loader10.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_back_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_back_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_back_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["cmd-demo"],
      "identifier": "node-back-demos"
    }
  },
  'node-center-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader11 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee11() {
          return regenerator_default.a.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "rbyC"));

                case 2:
                  return _context11.abrupt("return", _context11.sent.default);

                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11);
        }));

        function loader() {
          return _loader11.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_center_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_center_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_center_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["cmd-demo"],
      "identifier": "node-center-demos"
    }
  },
  'node-delete-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader12 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee12() {
          return regenerator_default.a.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "W3ZF"));

                case 2:
                  return _context12.abrupt("return", _context12.sent.default);

                case 3:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));

        function loader() {
          return _loader12.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_delete_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_delete_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_delete_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["cmd-demo"],
      "identifier": "node-delete-demos"
    }
  },
  'node-front-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader13 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee13() {
          return regenerator_default.a.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "bDTx"));

                case 2:
                  return _context13.abrupt("return", _context13.sent.default);

                case 3:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13);
        }));

        function loader() {
          return _loader13.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_front_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_front_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_front_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["cmd-demo"],
      "identifier": "node-front-demos"
    }
  },
  'node-highlight-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader14 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee14() {
          return regenerator_default.a.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "H0s4"));

                case 2:
                  return _context14.abrupt("return", _context14.sent.default);

                case 3:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));

        function loader() {
          return _loader14.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_highlight_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_highlight_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_highlight_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["cmd-demo"],
      "identifier": "node-highlight-demos"
    }
  },
  'node-move-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader15 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee15() {
          return regenerator_default.a.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "KDqh"));

                case 2:
                  return _context15.abrupt("return", _context15.sent.default);

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        function loader() {
          return _loader15.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_move_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_move_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_move_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["cmd-demo"],
      "identifier": "node-move-demos"
    }
  },
  'node-select-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader16 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee16() {
          return regenerator_default.a.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "6Ya1"));

                case 2:
                  return _context16.abrupt("return", _context16.sent.default);

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        function loader() {
          return _loader16.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_select_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_select_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_select_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "className": ["node-select-demo"],
      "identifier": "node-select-demos"
    }
  },
  'node-update-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader17 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee17() {
          return regenerator_default.a.wrap(function _callee17$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "KKXM"));

                case 2:
                  return _context17.abrupt("return", _context17.sent.default);

                case 3:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee17);
        }));

        function loader() {
          return _loader17.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": node_update_demosdumi_raw_code
        },
        "form.tsx": {
          "import": "./form",
          "content": node_update_demos_formdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": nodes_node_update_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "identifier": "node-update-demos"
    }
  },
  'canvas-config-form-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader18 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee18() {
          return regenerator_default.a.wrap(function _callee18$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "kcdX"));

                case 2:
                  return _context18.abrupt("return", _context18.sent.default);

                case 3:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee18);
        }));

        function loader() {
          return _loader18.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": demos_basicdumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": demos_basic_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": canvas_config_form_demos_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["json-form-demo"],
      "description": "<div class=\\"markdown\\"><p>\u4F7F\u7528 formSchemaService \u51FD\u6570\u8FD4\u56DE\u7684\u6570\u636E\u4F5C\u4E3Aform\u7684schema <br />\\nschema \u4E2D\u7684 shape \u5B57\u6BB5\u51B3\u5B9A\u6E32\u67D3\u7684\u7EC4\u4EF6 <br />\\n\u7528\u6237\u4FEE\u6539\u8868\u5355\u9879\u540E\u4F1A\u89E6\u53D1 formValueUpdateService \u7684\u56DE\u8C03\uFF0C\u56DE\u8C03\u4E2D\u53EF\u4EE5\u4FDD\u5B58\u6570\u636E <br /></p></div>",
      "identifier": "canvas-config-form-basic"
    }
  },
  'canvas-config-form-custom-shape': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader19 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee19() {
          return regenerator_default.a.wrap(function _callee19$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "Fm8e"));

                case 2:
                  return _context19.abrupt("return", _context19.sent.default);

                case 3:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee19);
        }));

        function loader() {
          return _loader19.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": custom_shapedumi_raw_code
        },
        "custom-shapes/index.tsx": {
          "import": "./custom-shapes",
          "content": custom_shapesdumi_raw_code
        },
        "custom-shapes/custom-editor.tsx": {
          "import": "./custom-editor",
          "content": custom_editordumi_raw_code
        },
        "custom-shapes/custom-link.tsx": {
          "import": "./custom-link",
          "content": custom_linkdumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": custom_shape_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": custom_shape_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_custom_shapedumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["json-form-demo"],
      "description": "<div class=\\"markdown\\"><p>\u901A\u8FC7 Schema \u4E2D\u7684 shape \u5B57\u6BB5\u548C controlMapService \u914D\u5408\u53EF\u4EE5\u6E32\u67D3\u81EA\u5B9A\u4E49\u7684\u8868\u5355\u9879\u76EE</p></div>",
      "identifier": "canvas-config-form-custom-shape"
    }
  },
  'canvas-config-form-target-type': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader20 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee20() {
          return regenerator_default.a.wrap(function _callee20$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "+5ps"));

                case 2:
                  return _context20.abrupt("return", _context20.sent.default);

                case 3:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee20);
        }));

        function loader() {
          return _loader20.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": target_typedumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": target_type_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": target_type_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_target_typedumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u914D\u7F6E\u8054\u52A8\u5BF9\u8C61",
      "className": ["json-form-demo"],
      "description": "<div class=\\"markdown\\"><p>\u652F\u6301 'edge' \u9009\u4E2D\u65F6\u66F4\u65B0\u8868\u5355  <br />\\n\u9ED8\u8BA4\u652F\u6301['node', 'canvas']\u9009\u4E2D\u65F6\uFF0C\u66F4\u65B0\u8868\u5355\u7684\u6E32\u67D3\u3002 <br />\\n\u53EF\u4EE5\u901A\u8FC7 targetType \u5C5E\u6027\u6765\u652F\u6301\u66F4\u591A\u5143\u7D20\u7684\u9009\u4E2D\u65F6\u66F4\u65B0\u8868\u5355\uFF1A'edge','group' <br /></p></div>",
      "identifier": "canvas-config-form-target-type"
    }
  },
  'canvas-config-form-custom-render': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader21 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee21() {
          return regenerator_default.a.wrap(function _callee21$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "S1za"));

                case 2:
                  return _context21.abrupt("return", _context21.sent.default);

                case 3:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee21);
        }));

        function loader() {
          return _loader21.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": custom_renderdumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": custom_render_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": custom_render_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_custom_renderdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u81EA\u5B9A\u4E49\u6E32\u67D3",
      "className": ["json-form-demo"],
      "description": "<div class=\\"markdown\\"><p>\u652F\u6301\u4F7F\u7528\u81EA\u5B9A\u4E49\u6E32\u67D3\u6765\u652F\u6301\u66F4\u590D\u6742\u7684\u4E1A\u52A1\u573A\u666F <br />\\n\u914D\u7F6E\u4E00\u4E2A\u51FD\u6570\u51B3\u5B9A\u662F\u5426\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4EE3\u66FFform\u7684\u6E32\u67D3 <br /></p></div>",
      "identifier": "canvas-config-form-custom-render"
    }
  },
  'canvas-keybinding-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader22 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee22() {
          return regenerator_default.a.wrap(function _callee22$(_context22) {
            while (1) {
              switch (_context22.prev = _context22.next) {
                case 0:
                  _context22.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "WuEN"));

                case 2:
                  return _context22.abrupt("return", _context22.sent.default);

                case 3:
                case "end":
                  return _context22.stop();
              }
            }
          }, _callee22);
        }));

        function loader() {
          return _loader22.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": canvas_keybinding_demos_basicdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": canvas_keybinding_demos_basic_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_canvas_keybinding_demos_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["keyboard-basic-demo"],
      "description": "<div class=\\"markdown\\"><p>\u901A\u8FC7keybinding\u5B57\u6BB5\u914D\u7F6E\u952E\u76D8\u7684\u5FEB\u6377\u952E\uFF1A<a href=\\"https://craig.is/killing/mice\\" target=\\"_blank\\">https://craig.is/killing/mice<svg xmlns=\\"http://www.w3.org/2000/svg\\" aria-hidden=\\"\\" x=\\"0px\\" y=\\"0px\\" viewBox=\\"0 0 100 100\\" width=\\"15\\" height=\\"15\\" class=\\"__dumi-default-external-link-icon\\"><path fill=\\"currentColor\\" d=\\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\\"></path><polygon fill=\\"currentColor\\" points=\\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\\"></polygon></svg></a></p></div>",
      "identifier": "canvas-keybinding-basic"
    }
  },
  'canvas-keybinding-command': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader23 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee23() {
          return regenerator_default.a.wrap(function _callee23$(_context23) {
            while (1) {
              switch (_context23.prev = _context23.next) {
                case 0:
                  _context23.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "TBvq"));

                case 2:
                  return _context23.abrupt("return", _context23.sent.default);

                case 3:
                case "end":
                  return _context23.stop();
              }
            }
          }, _callee23);
        }));

        function loader() {
          return _loader23.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": commanddumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": command_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_commanddumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u89E6\u53D1Command\u547D\u4EE4",
      "className": ["keyboard-command-demo"],
      "description": "<div class=\\"markdown\\"><p>\u901A\u8FC7\u8C03\u7528Command\u547D\u4EE4\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u56FE\u7684\u4EA4\u4E92:\u5220\u9664(backspace)/\u590D\u5236(ctrl+c)/\u7C98\u8D34(ctrl+v)</p></div>",
      "identifier": "canvas-keybinding-command"
    }
  },
  'canvas-mini-map-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader24 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee24() {
          return regenerator_default.a.wrap(function _callee24$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  _context24.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "oiMV"));

                case 2:
                  return _context24.abrupt("return", _context24.sent.default);

                case 3:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee24);
        }));

        function loader() {
          return _loader24.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": canvas_mini_map_demos_basicdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": canvas_mini_map_demos_basic_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_canvas_mini_map_demos_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["canvas-minimap-basic-demo"],
      "transform": true,
      "description": "<div class=\\"markdown\\"><p>\u653E\u7F6E\u5728XFlowCanvas\u7EC4\u4EF6\u5185\u90E8\u751F\u6548</p></div>",
      "identifier": "canvas-mini-map-basic"
    }
  },
  'canvas-mini-map-color': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader25 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee25() {
          return regenerator_default.a.wrap(function _callee25$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "N33m"));

                case 2:
                  return _context25.abrupt("return", _context25.sent.default);

                case 3:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee25);
        }));

        function loader() {
          return _loader25.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": colordumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": color_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_colordumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u914D\u7F6E\u989C\u8272",
      "className": ["canvas-minimap-color-demo"],
      "transform": true,
      "description": "<div class=\\"markdown\\"><p>nodeFillColor(\u8282\u70B9\u989C\u8272)/borderColor(\u89C6\u7A97\u8FB9\u6846\u989C\u8272)/handlerColor(\u8C03\u8282\u6309\u94AE\u989C\u8272)</p></div>",
      "identifier": "canvas-mini-map-color"
    }
  },
  'canvas-mini-map-graph-options': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader26 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee26() {
          return regenerator_default.a.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "Oxvr"));

                case 2:
                  return _context26.abrupt("return", _context26.sent.default);

                case 3:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26);
        }));

        function loader() {
          return _loader26.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": graph_optionsdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": graph_options_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_graph_optionsdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "minimapOptions",
      "className": ["canvas-minimap-options-demo"],
      "transform": true,
      "description": "<div class=\\"markdown\\"><p>\u901A\u8FC7minimapOptions\u914D\u7F6EminiMap, \u6240\u6709\u914D\u7F6E\u9879\u53C2\u8003X6\u6587\u6863\uFF1A<a href=\\"https://x6.antv.vision/zh/docs/api/graph/minimap/#enabled\\" target=\\"_blank\\">https://x6.antv.vision/zh/docs/api/graph/minimap/#enabled<svg xmlns=\\"http://www.w3.org/2000/svg\\" aria-hidden=\\"\\" x=\\"0px\\" y=\\"0px\\" viewBox=\\"0 0 100 100\\" width=\\"15\\" height=\\"15\\" class=\\"__dumi-default-external-link-icon\\"><path fill=\\"currentColor\\" d=\\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\\"></path><polygon fill=\\"currentColor\\" points=\\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\\"></polygon></svg></a></p></div>",
      "identifier": "canvas-mini-map-graph-options"
    }
  },
  'canvas-node-panel-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader27 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee27() {
          return regenerator_default.a.wrap(function _callee27$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  _context27.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "bTza"));

                case 2:
                  return _context27.abrupt("return", _context27.sent.default);

                case 3:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee27);
        }));

        function loader() {
          return _loader27.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": canvas_node_panel_demos_basicdumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": basic_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": canvas_node_panel_demos_basic_mockdumi_raw_code
        },
        "dnd-tree-config.tsx": {
          "import": "./dnd-tree-config",
          "content": dnd_tree_configdumi_raw_code
        },
        "comannd-utils.tsx": {
          "import": "./comannd-utils",
          "content": comannd_utilsdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_canvas_node_panel_demos_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["dnd-node-demo"],
      "description": "<div class=\\"markdown\\"><p>treeDataService:\u8FD4\u56DE\u5E73\u94FA\u7684\u6811\u7ED3\u6784 <br />\\n\u901A\u8FC7parentId\u5C06node\u7EC4\u7EC7\u5230\u5BF9\u5E94\u6587\u4EF6\u5939\u4E0B, parentId \u4E3A\u7A7A\u7684\u8282\u70B9\u662F\u6587\u4EF6\u5939\u8282\u70B9 <br />\\n\u652F\u6301popoverContent\u5C5E\u6027  <br />\\nonNodeDrop \u56DE\u8C03\u65F6\u65F6\uFF0C\u8981\u6C42\u4F7F\u7528\u547D\u4EE4\u521B\u5EFA\u8282\u70B9  <br /></p></div>",
      "identifier": "canvas-node-panel-basic"
    }
  },
  'canvas-node-panel-search': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader28 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee28() {
          return regenerator_default.a.wrap(function _callee28$(_context28) {
            while (1) {
              switch (_context28.prev = _context28.next) {
                case 0:
                  _context28.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "/9bf"));

                case 2:
                  return _context28.abrupt("return", _context28.sent.default);

                case 3:
                case "end":
                  return _context28.stop();
              }
            }
          }, _callee28);
        }));

        function loader() {
          return _loader28.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": searchdumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": search_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": search_mockdumi_raw_code
        },
        "dnd-tree-config.tsx": {
          "import": "./dnd-tree-config",
          "content": search_dnd_tree_configdumi_raw_code
        },
        "comannd-utils.tsx": {
          "import": "./comannd-utils",
          "content": search_comannd_utilsdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_searchdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u652F\u6301\u641C\u7D22",
      "className": ["dnd-node-demo"],
      "description": "<div class=\\"markdown\\"><p>\u914D\u7F6E searchService \u4F1A\u652F\u6301\u641C\u7D22 <br /></p></div>",
      "identifier": "canvas-node-panel-search"
    }
  },
  'canvas-scale-toolbar-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader29 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee29() {
          return regenerator_default.a.wrap(function _callee29$(_context29) {
            while (1) {
              switch (_context29.prev = _context29.next) {
                case 0:
                  _context29.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "91QT"));

                case 2:
                  return _context29.abrupt("return", _context29.sent.default);

                case 3:
                case "end":
                  return _context29.stop();
              }
            }
          }, _callee29);
        }));

        function loader() {
          return _loader29.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": canvas_scale_toolbar_demosdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": canvas_scale_toolbar_demos_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_canvas_scale_toolbar_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u4F7F\u7528\u65B9\u6CD5",
      "className": ["canvas-scale-toolbar-demo"],
      "description": "<div class=\\"markdown\\"><p>CanvasScaleToolbar\u7EC4\u4EF6\u7684\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E0Bposition\u5C5E\u6027</p></div>",
      "identifier": "canvas-scale-toolbar-demos"
    }
  },
  'canvas-snapline-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader30 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee30() {
          return regenerator_default.a.wrap(function _callee30$(_context30) {
            while (1) {
              switch (_context30.prev = _context30.next) {
                case 0:
                  _context30.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "4iYd"));

                case 2:
                  return _context30.abrupt("return", _context30.sent.default);

                case 3:
                case "end":
                  return _context30.stop();
              }
            }
          }, _callee30);
        }));

        function loader() {
          return _loader30.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": canvas_snapline_demos_basicdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": canvas_snapline_demos_basic_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_canvas_snapline_demos_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["canvas-snapline-basic-demo"],
      "description": "<div class=\\"markdown\\"><p>\u653E\u7F6E\u5728XFlowCanvas\u7EC4\u4EF6\u5185\u90E8\u751F\u6548</p></div>",
      "identifier": "canvas-snapline-basic"
    }
  },
  'canvas-snapline-color': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader31 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee31() {
          return regenerator_default.a.wrap(function _callee31$(_context31) {
            while (1) {
              switch (_context31.prev = _context31.next) {
                case 0:
                  _context31.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "moO5"));

                case 2:
                  return _context31.abrupt("return", _context31.sent.default);

                case 3:
                case "end":
                  return _context31.stop();
              }
            }
          }, _callee31);
        }));

        function loader() {
          return _loader31.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": canvas_snapline_demos_colordumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": demos_color_mockdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_canvas_snapline_demos_colordumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u5BF9\u9F50\u7EBF\u989C\u8272",
      "className": ["canvas-snapline-color-demo"],
      "description": "<div class=\\"markdown\\"><p>\u4F7F\u7528color\u5C5E\u6027\u914D\u7F6E\u4E0D\u540C\u7684\u5BF9\u9F50\u7EBF\u989C\u8272</p></div>",
      "identifier": "canvas-snapline-color"
    }
  },
  'canvas-toolbar-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader32 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee32() {
          return regenerator_default.a.wrap(function _callee32$(_context32) {
            while (1) {
              switch (_context32.prev = _context32.next) {
                case 0:
                  _context32.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "MbdG"));

                case 2:
                  return _context32.abrupt("return", _context32.sent.default);

                case 3:
                case "end":
                  return _context32.stop();
              }
            }
          }, _callee32);
        }));

        function loader() {
          return _loader32.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": canvas_toolbar_demos_basicdumi_raw_code
        },
        "toolbar-config.tsx": {
          "import": "./toolbar-config",
          "content": toolbar_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_canvas_toolbar_demos_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.9.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528\u65B9\u6CD5",
      "className": ["canvas-toolbar-basic"],
      "description": "<div class=\\"markdown\\"><p>\u901A\u8FC7position\u5B9A\u4F4DToolbar,\u901A\u8FC7config\u5C5E\u6027\u914D\u7F6Etoolbar, \u67E5\u770Btoolbar-config.tsx\u6587\u4EF6\u4E86\u89E3\u5982\u4F55\u914D\u7F6Etoolbar</p></div>",
      "identifier": "canvas-toolbar-basic"
    }
  },
  'canvas-toolbar-toolbar-render-item': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader33 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee33() {
          return regenerator_default.a.wrap(function _callee33$(_context33) {
            while (1) {
              switch (_context33.prev = _context33.next) {
                case 0:
                  _context33.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "Rt7r"));

                case 2:
                  return _context33.abrupt("return", _context33.sent.default);

                case 3:
                case "end":
                  return _context33.stop();
              }
            }
          }, _callee33);
        }));

        function loader() {
          return _loader33.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": toolbar_render_itemdumi_raw_code
        },
        "toolbar-config.tsx": {
          "import": "./toolbar-config",
          "content": toolbar_render_item_toolbar_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_toolbar_render_itemdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.9.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "title": "\u5DE5\u5177\u680F\u914D\u7F6E",
      "className": ["toolbar-render-item"],
      "description": "<div class=\\"markdown\\"><p>\u652F\u6301text/iconName/tooltip/isEnable/isDisable/active/onClick/render\u5C5E\u6027\u6765\u914D\u7F6EToolbar</p></div>",
      "identifier": "canvas-toolbar-toolbar-render-item"
    }
  },
  'canvas-toolbar-toolbar-layout': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader34 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee34() {
          return regenerator_default.a.wrap(function _callee34$(_context34) {
            while (1) {
              switch (_context34.prev = _context34.next) {
                case 0:
                  _context34.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "yenX"));

                case 2:
                  return _context34.abrupt("return", _context34.sent.default);

                case 3:
                case "end":
                  return _context34.stop();
              }
            }
          }, _callee34);
        }));

        function loader() {
          return _loader34.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": toolbar_layoutdumi_raw_code
        },
        "toolbar-config.tsx": {
          "import": "./toolbar-config",
          "content": toolbar_layout_toolbar_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_toolbar_layoutdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.0.0"
        }
      },
      "title": "\u5DE5\u5177\u680F\u5E03\u5C40",
      "className": ["toolbar-layout"],
      "description": "<div class=\\"markdown\\"><p>\u652F\u6301\u4E09\u79CD\u5E03\u5C40\uFF1A'vertical'|'horizontal'|'horizontal-center'</p></div>",
      "identifier": "canvas-toolbar-toolbar-layout"
    }
  },
  'canvas-toolbar-toolbar-model': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader35 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee35() {
          return regenerator_default.a.wrap(function _callee35$(_context35) {
            while (1) {
              switch (_context35.prev = _context35.next) {
                case 0:
                  _context35.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "nyl5"));

                case 2:
                  return _context35.abrupt("return", _context35.sent.default);

                case 3:
                case "end":
                  return _context35.stop();
              }
            }
          }, _callee35);
        }));

        function loader() {
          return _loader35.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": toolbar_modeldumi_raw_code
        },
        "toolbar-config.tsx": {
          "import": "./toolbar-config",
          "content": toolbar_model_toolbar_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_toolbar_modeldumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.0.0"
        }
      },
      "title": "\u5DE5\u5177\u680F\u72B6\u6001\u8054\u52A8",
      "className": ["canvas-toolbar-model"],
      "description": "<div class=\\"markdown\\"><p>\u901A\u8FC7ModelService\u5B9E\u73B0ToolbarItem\u7684\u53EF\u7528\u72B6\u6001</p></div>",
      "identifier": "canvas-toolbar-toolbar-model"
    }
  },
  'canvas-toolbar-toolbar-custom-render': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader36 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee36() {
          return regenerator_default.a.wrap(function _callee36$(_context36) {
            while (1) {
              switch (_context36.prev = _context36.next) {
                case 0:
                  _context36.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "DvfK"));

                case 2:
                  return _context36.abrupt("return", _context36.sent.default);

                case 3:
                case "end":
                  return _context36.stop();
              }
            }
          }, _callee36);
        }));

        function loader() {
          return _loader36.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": toolbar_custom_renderdumi_raw_code
        },
        "toolbar-config.tsx": {
          "import": "./toolbar-config",
          "content": toolbar_custom_render_toolbar_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_toolbar_custom_renderdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.9.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "title": "\u81EA\u5B9A\u4E49\u6E32\u67D3",
      "className": ["toolbar-custom-render"],
      "description": "<div class=\\"markdown\\"><p>\u9009\u4E2D\u8282\u70B9\u65F6\u4F1A\u89E6\u53D1\u81EA\u5B9A\u4E49\u6E32\u67D3\u66FF\u6362ToolbarItem</p></div>",
      "identifier": "canvas-toolbar-toolbar-custom-render"
    }
  },
  'context-menu-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader37 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee37() {
          return regenerator_default.a.wrap(function _callee37$(_context37) {
            while (1) {
              switch (_context37.prev = _context37.next) {
                case 0:
                  _context37.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "A8/L"));

                case 2:
                  return _context37.abrupt("return", _context37.sent.default);

                case 3:
                case "end":
                  return _context37.stop();
              }
            }
          }, _callee37);
        }));

        function loader() {
          return _loader37.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": context_menu_demos_basicdumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": demos_basic_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": context_menu_demos_basic_mockdumi_raw_code
        },
        "menu-config.tsx": {
          "import": "./menu-config",
          "content": menu_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_context_menu_demos_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528\uFF08\u53F3\u952E\u5220\u9664\u8282\u70B9/\u5220\u9664\u8FB9/\u753B\u5E03\u83DC\u5355\uFF09",
      "className": ["canvas-menu-basic"],
      "description": "<div class=\\"markdown\\"><p>\u53EF\u4EE5\u5728\u8282\u70B9/\u8FB9/\u753B\u5E03\u4E0A\u914D\u7F6E\u83DC\u5355 <br />\\n\u83DC\u5355\u914D\u7F6E\u4E2D\u53EF\u4EE5\u914D\u7F6E\u70B9\u51FB\u65F6\u6267\u884C xflow \u547D\u4EE4 <br />\\n\u70B9\u51FB\u67E5\u770B <a href=\\"/api/commands\\">\u6240\u6709\u53EF\u7528\u7684\u547D\u4EE4</a> <br /></p></div>",
      "identifier": "context-menu-basic"
    }
  },
  'context-menu-dynamic-config': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader38 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee38() {
          return regenerator_default.a.wrap(function _callee38$(_context38) {
            while (1) {
              switch (_context38.prev = _context38.next) {
                case 0:
                  _context38.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "ui7r"));

                case 2:
                  return _context38.abrupt("return", _context38.sent.default);

                case 3:
                case "end":
                  return _context38.stop();
              }
            }
          }, _callee38);
        }));

        function loader() {
          return _loader38.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": dynamic_configdumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": dynamic_config_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": dynamic_config_mockdumi_raw_code
        },
        "menu-config.tsx": {
          "import": "./menu-config",
          "content": dynamic_config_menu_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_dynamic_configdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.0.0"
        }
      },
      "title": "\u52A8\u6001\u6E32\u67D3\uFF1A\u4E0D\u540C\u7684\u8282\u70B9\u6709\u4E0D\u540C\u7684\u83DC\u5355",
      "className": ["canvas-menu-dynamic-config"],
      "description": "<div class=\\"markdown\\"><p>\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684\u8282\u70B9\u6570\u636E\uFF0C\u52A8\u6001\u7684\u751F\u6210\u4E0D\u540C\u7684Menu Items <br /></p></div>",
      "identifier": "context-menu-dynamic-config"
    }
  },
  'context-menu-hotkey': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader39 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee39() {
          return regenerator_default.a.wrap(function _callee39$(_context39) {
            while (1) {
              switch (_context39.prev = _context39.next) {
                case 0:
                  _context39.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "BXxw"));

                case 2:
                  return _context39.abrupt("return", _context39.sent.default);

                case 3:
                case "end":
                  return _context39.stop();
              }
            }
          }, _callee39);
        }));

        function loader() {
          return _loader39.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": hotkeydumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": hotkey_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": hotkey_mockdumi_raw_code
        },
        "menu-config.tsx": {
          "import": "./menu-config",
          "content": hotkey_menu_configdumi_raw_code
        },
        "hotkey-config.tsx": {
          "import": "./hotkey-config",
          "content": hotkey_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": demos_hotkeydumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u642D\u914D\u5FEB\u6377\u952E",
      "className": ["canvas-menu-hotkey"],
      "description": "<div class=\\"markdown\\"><p>\u4E0EKeyBindings\u7EC4\u4EF6\u914D\u5408\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5FEB\u6377\u952E\u548C\u83DC\u5355\u90FD\u89E6\u53D1Command <br /></p></div>",
      "identifier": "context-menu-hotkey"
    }
  },
  'context-menu-custom-render': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader40 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee40() {
          return regenerator_default.a.wrap(function _callee40$(_context40) {
            while (1) {
              switch (_context40.prev = _context40.next) {
                case 0:
                  _context40.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "7L2j"));

                case 2:
                  return _context40.abrupt("return", _context40.sent.default);

                case 3:
                case "end":
                  return _context40.stop();
              }
            }
          }, _callee40);
        }));

        function loader() {
          return _loader40.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": context_menu_demos_custom_renderdumi_raw_code
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": demos_custom_render_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": demos_custom_render_mockdumi_raw_code
        },
        "menu-config.tsx": {
          "import": "./menu-config",
          "content": custom_render_menu_configdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_context_menu_demos_custom_renderdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.0.0"
        }
      },
      "title": "\u81EA\u5B9A\u4E49\u6E32\u67D3",
      "className": ["canvas-custom-render"],
      "description": "<div class=\\"markdown\\"><p>\u5185\u7F6E\u7684\u83DC\u5355\u8865\u6EE1\u8DB3\u65F6\uFF0C\u53EF\u4EE5\u914D\u7F6E\u81EA\u5B9A\u4E49\u7EC4\u4EF6 <br /></p></div>",
      "identifier": "context-menu-custom-render"
    }
  },
  'workspace-panel-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader41 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee41() {
          return regenerator_default.a.wrap(function _callee41$(_context41) {
            while (1) {
              switch (_context41.prev = _context41.next) {
                case 0:
                  _context41.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "Yj0D"));

                case 2:
                  return _context41.abrupt("return", _context41.sent.default);

                case 3:
                case "end":
                  return _context41.stop();
              }
            }
          }, _callee41);
        }));

        function loader() {
          return _loader41.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": workspace_panel_demos_basicdumi_raw_code
        },
        "custom-panel/index.tsx": {
          "import": "./custom-panel",
          "content": custom_paneldumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": extension_components_workspace_panel_demos_basicdumi_raw_code["a" /* default */]
        },
        "graph-config.tsx": {
          "import": "./graph-config",
          "content": workspace_panel_demos_basic_graph_configdumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": workspace_panel_demos_basic_mockdumi_raw_code
        }
      },
      "dependencies": {
        "react": {
          "version": "^16.8.0  || ^17.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "title": "\u57FA\u7840\u4F7F\u7528",
      "className": ["custom-panel-demo"],
      "description": "<div class=\\"markdown\\"><p>\uFF5C \u83B7\u53D6app, \u5206\u522B\u4F7F\u7528Model/Command/X6Graph <br /></p></div>",
      "identifier": "workspace-panel-basic"
    }
  },
  'getting-started-demo': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader42 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee42() {
          return regenerator_default.a.wrap(function _callee42$(_context42) {
            while (1) {
              switch (_context42.prev = _context42.next) {
                case 0:
                  _context42.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "MSDE"));

                case 2:
                  return _context42.abrupt("return", _context42.sent.default);

                case 3:
                case "end":
                  return _context42.stop();
              }
            }
          }, _callee42);
        }));

        function loader() {
          return _loader42.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": demodumi_raw_code
        },
        "config-graph.tsx": {
          "import": "./config-graph",
          "content": demo_config_graphdumi_raw_code
        },
        "react-node/node1.tsx": {
          "import": "./react-node/node1",
          "content": node1dumi_raw_code
        },
        "react-node/node1.less": {
          "import": "./node1.less",
          "content": react_node_node1dumi_raw_code["a" /* default */]
        },
        "react-node/node2.tsx": {
          "import": "./react-node/node2",
          "content": node2dumi_raw_code
        },
        "react-node/node2.less": {
          "import": "./node2.less",
          "content": react_node_node2dumi_raw_code["a" /* default */]
        },
        "react-edge/edge1.tsx": {
          "import": "./react-edge/edge1",
          "content": edge1dumi_raw_code
        },
        "react-edge/edge1.less": {
          "import": "./edge1.less",
          "content": react_edge_edge1dumi_raw_code["a" /* default */]
        },
        "react-edge/edge2.tsx": {
          "import": "./react-edge/edge2",
          "content": edge2dumi_raw_code
        },
        "react-edge/edge2.less": {
          "import": "./edge2.less",
          "content": react_edge_edge2dumi_raw_code["a" /* default */]
        },
        "index.less": {
          "import": "./index.less",
          "content": getting_started_demodumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "17.0.2"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "className": ["quick-start"],
      "identifier": "getting-started-demo"
    }
  },
  'dag-basic': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader43 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee43() {
          return regenerator_default.a.wrap(function _callee43$(_context43) {
            while (1) {
              switch (_context43.prev = _context43.next) {
                case 0:
                  _context43.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "Xjk0"));

                case 2:
                  return _context43.abrupt("return", _context43.sent.default);

                case 3:
                case "end":
                  return _context43.stop();
              }
            }
          }, _callee43);
        }));

        function loader() {
          return _loader43.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": dag_demos_basicdumi_raw_code
        },
        "config-graph.tsx": {
          "import": "./config-graph",
          "content": demos_basic_config_graphdumi_raw_code
        },
        "constant.ts": {
          "import": "./constant",
          "content": demos_basic_constantdumi_raw_code
        },
        "react-node/algo-node.tsx": {
          "import": "./react-node/algo-node",
          "content": algo_nodedumi_raw_code
        },
        "react-node/algo-node.less": {
          "import": "./algo-node.less",
          "content": react_node_algo_nodedumi_raw_code["a" /* default */]
        },
        "react-node/group.tsx": {
          "import": "./react-node/group",
          "content": groupdumi_raw_code
        },
        "react-node/group.less": {
          "import": "./group.less",
          "content": react_node_groupdumi_raw_code["a" /* default */]
        },
        "config-cmd.ts": {
          "import": "./config-cmd",
          "content": config_cmddumi_raw_code
        },
        "service.ts": {
          "import": "./service",
          "content": servicedumi_raw_code
        },
        "cmd-extensions/index.ts": {
          "import": "./cmd-extensions",
          "content": cmd_extensionsdumi_raw_code
        },
        "cmd-extensions/cmd-async-test.ts": {
          "import": "./cmd-async-test",
          "content": cmd_async_testdumi_raw_code
        },
        "cmd-extensions/constants.ts": {
          "import": "./constants",
          "content": constantsdumi_raw_code
        },
        "cmd-extensions/cmd-deploy.ts": {
          "import": "./cmd-deploy",
          "content": cmd_deploydumi_raw_code
        },
        "cmd-extensions/cmd-rename-node-modal.tsx": {
          "import": "./cmd-rename-node-modal",
          "content": cmd_rename_node_modaldumi_raw_code
        },
        "config-model-service.ts": {
          "import": "./config-model-service",
          "content": config_model_servicedumi_raw_code
        },
        "config-menu.ts": {
          "import": "./config-menu",
          "content": config_menudumi_raw_code
        },
        "config-toolbar.tsx": {
          "import": "./config-toolbar",
          "content": config_toolbardumi_raw_code
        },
        "config-keybinding.ts": {
          "import": "./config-keybinding",
          "content": config_keybindingdumi_raw_code
        },
        "config-dnd-panel.tsx": {
          "import": "./config-dnd-panel",
          "content": config_dnd_paneldumi_raw_code
        },
        "config-form.tsx": {
          "import": "./config-form",
          "content": config_formdumi_raw_code
        },
        "form-controls/index.tsx": {
          "import": "./form-controls",
          "content": form_controlsdumi_raw_code
        },
        "form-controls/custom-editor.tsx": {
          "import": "./custom-editor",
          "content": form_controls_custom_editordumi_raw_code
        },
        "form-controls/link.tsx": {
          "import": "./link",
          "content": linkdumi_raw_code
        },
        "index.less": {
          "import": "./index.less",
          "content": solutions_dag_demos_basicdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "17.0.2"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": ">=16.9.0"
        }
      },
      "compact": true,
      "transform": true,
      "className": ["dag-solution"],
      "identifier": "dag-basic"
    }
  },
  'er-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader44 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee44() {
          return regenerator_default.a.wrap(function _callee44$(_context44) {
            while (1) {
              switch (_context44.prev = _context44.next) {
                case 0:
                  _context44.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "6svi"));

                case 2:
                  return _context44.abrupt("return", _context44.sent.default);

                case 3:
                case "end":
                  return _context44.stop();
              }
            }
          }, _callee44);
        }));

        function loader() {
          return _loader44.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": er_demosdumi_raw_code
        },
        "GraphToolbar/index.tsx": {
          "import": "./GraphToolbar/index",
          "content": GraphToolbardumi_raw_code
        },
        "GraphToolbar/index.less": {
          "import": "./index.less",
          "content": demos_GraphToolbardumi_raw_code["a" /* default */]
        },
        "config-graph.tsx": {
          "import": "./config-graph",
          "content": er_demos_config_graphdumi_raw_code
        },
        "config-cmd.ts": {
          "import": "./config-cmd",
          "content": demos_config_cmddumi_raw_code
        },
        "service.ts": {
          "import": "./service",
          "content": demos_servicedumi_raw_code
        },
        "mock.ts": {
          "import": "./mock",
          "content": er_demos_mockdumi_raw_code
        },
        "config-keybinding.ts": {
          "import": "./config-keybinding",
          "content": demos_config_keybindingdumi_raw_code
        },
        "CreateNodeModal/index.tsx": {
          "import": "./CreateNodeModal",
          "content": CreateNodeModaldumi_raw_code
        },
        "const.ts": {
          "import": "../const",
          "content": constdumi_raw_code
        },
        "CreateNodeModal/index.less": {
          "import": "./index.less",
          "content": demos_CreateNodeModaldumi_raw_code["a" /* default */]
        },
        "CreateRelationModal/index.tsx": {
          "import": "./CreateRelationModal",
          "content": CreateRelationModaldumi_raw_code
        },
        "react-node/Entity.tsx": {
          "import": "./react-node/Entity",
          "content": Entitydumi_raw_code
        },
        "react-node/Entity.less": {
          "import": "./Entity.less",
          "content": react_node_Entitydumi_raw_code["a" /* default */]
        },
        "react-edge/Relation.tsx": {
          "import": "./react-edge/Relation",
          "content": Relationdumi_raw_code
        },
        "react-edge/Relation.less": {
          "import": "./Relation.less",
          "content": react_edge_Relationdumi_raw_code["a" /* default */]
        },
        "index.less": {
          "import": "./index.less",
          "content": solutions_er_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": ">=16.0.0"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "antd": {
          "version": "4.16.13",
          "css": "antd/dist/antd.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "4.7.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "lodash": {
          "version": "4.17.21"
        },
        "react-dom": {
          "version": ">=16.0.0"
        }
      },
      "compact": true,
      "transform": true,
      "className": ["er-demo"],
      "identifier": "er-demos"
    }
  },
  'flow-demos': {
    component: Object(index_esm["dynamic"])({
      loader: function () {
        var _loader45 = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee45() {
          return regenerator_default.a.wrap(function _callee45$(_context45) {
            while (1) {
              switch (_context45.prev = _context45.next) {
                case 0:
                  _context45.next = 2;
                  return Promise.all(/* import() | demos_no_comp */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "rzPi"));

                case 2:
                  return _context45.abrupt("return", _context45.sent.default);

                case 3:
                case "end":
                  return _context45.stop();
              }
            }
          }, _callee45);
        }));

        function loader() {
          return _loader45.apply(this, arguments);
        }

        return loader;
      }()
    }),
    previewerProps: {
      "sources": {
        "_": {
          "tsx": flow_demosdumi_raw_code
        },
        "config-menu.ts": {
          "import": "./config-menu",
          "content": demos_config_menudumi_raw_code
        },
        "config-toolbar.ts": {
          "import": "./config-toolbar",
          "content": demos_config_toolbardumi_raw_code
        },
        "config-keybinding.ts": {
          "import": "./config-keybinding",
          "content": flow_demos_config_keybindingdumi_raw_code
        },
        "react-node/dnd-node.tsx": {
          "import": "./react-node/dnd-node",
          "content": dnd_nodedumi_raw_code
        },
        "react-node/dnd-node.less": {
          "import": "./dnd-node.less",
          "content": react_node_dnd_nodedumi_raw_code["a" /* default */]
        },
        "index.less": {
          "import": "./index.less",
          "content": solutions_flow_demosdumi_raw_code["a" /* default */]
        }
      },
      "dependencies": {
        "react": {
          "version": "17.0.2"
        },
        "@antv/xflow": {
          "version": "1.0.0",
          "css": "@antv/xflow/dist/index.css"
        },
        "@antv/layout": {
          "version": "^0.0.5"
        },
        "@ant-design/icons": {
          "version": "^4.6.0"
        },
        "@antv/x6": {
          "version": "^1.12.11",
          "css": "@antv/x6/dist/x6.css"
        },
        "@antv/x6-react-components": {
          "version": "^1.1.15",
          "css": "@antv/x6-react-components/dist/index.css"
        },
        "@antv/x6-react-shape": {
          "version": "^1.2.5"
        },
        "antd": {
          "version": "^4.6.3",
          "css": "antd/dist/antd.css"
        },
        "lodash": {
          "version": "^4.17.20"
        },
        "react-dom": {
          "version": "^16.8.0  || ^17.0.0"
        }
      },
      "compact": true,
      "transform": true,
      "className": ["flowchart-demo"],
      "identifier": "flow-demos"
    }
  }
});

//# sourceURL=webpack:///./src/.umi-production/dumi/demos/index.ts_+_160_modules?`)},ekZX:function(module,__webpack_exports__,__webpack_require__){"use strict";eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("V8Cu");
/* harmony import */ var dumi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9kvl");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2tE6");
/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _useCodeSandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BlwA");
/* harmony import */ var dumi_theme_default_src_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("SfYC");
/* harmony import */ var _Previewer_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oeoJ");
/* harmony import */ var _Previewer_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Previewer_less__WEBPACK_IMPORTED_MODULE_7__);


 // @ts-ignore







/**
 * get source code type for file
 * @param file    file path
 * @param source  file source object
 */
function getSourceType(file, source) {
  var _file$match;

  // use file extension as source type first
  var type = (_file$match = file.match(/\\.(\\w+)$/)) === null || _file$match === void 0 ? void 0 : _file$match[1];

  if (!type) {
    type = source.tsx ? 'tsx' : 'jsx';
  }

  return type;
}

var Previewer = oProps => {
  var _props$hideActions, _props$hideActions2, _props$hideActions3;

  var demoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["context"]),
      locale = _useContext.locale;

  var props = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useLocaleProps"])(locale, oProps);
  var builtinDemoUrl = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useDemoUrl"])(props.identifier);
  var demoUrl = props.demoUrl || builtinDemoUrl;
  var isActive = (dumi__WEBPACK_IMPORTED_MODULE_3__[/* history */ "a"] === null || dumi__WEBPACK_IMPORTED_MODULE_3__[/* history */ "a"] === void 0 ? void 0 : dumi__WEBPACK_IMPORTED_MODULE_3__[/* history */ "a"].location.hash) === "#".concat(props.identifier);
  var isSingleFile = Object.keys(props.sources).length === 1;
  var openCSB = Object(_useCodeSandbox__WEBPACK_IMPORTED_MODULE_5__[/* useCodeSandbox */ "a"])((_props$hideActions = props.hideActions) !== null && _props$hideActions !== void 0 && _props$hideActions.includes('CSB') ? null : props);
  var openRiddle = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useRiddle"])((_props$hideActions2 = props.hideActions) !== null && _props$hideActions2 !== void 0 && _props$hideActions2.includes('RIDDLE') ? null : props);

  var _useMotions = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useMotions"])(props.motions || [], demoRef.current),
      _useMotions2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useMotions, 2),
      execMotions = _useMotions2[0],
      isMotionRunning = _useMotions2[1];

  var _useCopy = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useCopy"])(),
      _useCopy2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useCopy, 2),
      copyCode = _useCopy2[0],
      copyStatus = _useCopy2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => props.sources._ ? '_' : Object.keys(props.sources)[0]),
      _useState2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      currentFile = _useState2[0],
      setCurrentFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getSourceType(currentFile, props.sources[currentFile])),
      _useState4 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      sourceType = _useState4[0],
      setSourceType = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Boolean(props.defaultShowCode)),
      _useState6 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState5, 2),
      showSource = _useState6[0],
      setShowSource = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Math.random()),
      _useState8 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState7, 2),
      iframeKey = _useState8[0],
      setIframeKey = _useState8[1];

  var currentFileCode = props.sources[currentFile][sourceType] || props.sources[currentFile].content;
  var playgroundUrl = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useTSPlaygroundUrl"])(locale, currentFileCode);
  var iframeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _usePrefersColor = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["usePrefersColor"])(),
      _usePrefersColor2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_usePrefersColor, 1),
      color = _usePrefersColor2[0]; // re-render iframe if prefers color changed


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIframeKey(Math.random());
  }, [color]);

  function handleFileChange(filename) {
    setCurrentFile(filename);
    setSourceType(getSourceType(filename, props.sources[filename]));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: props.style,
    className: [props.className, '__dumi-default-previewer', isActive ? '__dumi-default-previewer-target' : ''].filter(Boolean).join(' '),
    id: props.identifier,
    "data-debug": props.debug || undefined,
    "data-iframe": props.iframe || undefined
  }, props.iframe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "__dumi-default-previewer-browser-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: demoRef,
    className: "__dumi-default-previewer-demo",
    style: {
      transform: props.transform ? 'translate(0, 0)' : undefined,
      padding: props.compact || props.iframe && props.compact !== false ? '0' : undefined,
      background: props.background
    }
  }, props.iframe ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    title: "dumi-previewer",
    style: {
      // both compatible with unit or non-unit, such as 100, 100px, 100vh
      height: String(props.iframe).replace(/(\\d)$/, '$1px')
    },
    key: iframeKey,
    src: demoUrl,
    ref: iframeRef
  }) : props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "__dumi-default-previewer-desc",
    "data-title": props.title
  }, props.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["AnchorLink"], {
    to: "#".concat(props.identifier)
  }, props.title), props.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    // eslint-disable-next-line
    dangerouslySetInnerHTML: {
      __html: props.description
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "__dumi-default-previewer-actions"
  }, openCSB && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: "Open demo on CodeSandbox.io",
    className: "__dumi-default-icon",
    role: "codesandbox",
    onClick: openCSB
  }), openRiddle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: "Open demo on Riddle",
    className: "__dumi-default-icon",
    role: "riddle",
    onClick: openRiddle
  }), props.motions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: "Execute motions",
    className: "__dumi-default-icon",
    role: "motions",
    disabled: isMotionRunning,
    onClick: () => execMotions()
  }), props.iframe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: "Reload demo iframe page",
    className: "__dumi-default-icon",
    role: "refresh",
    onClick: () => setIframeKey(Math.random())
  }), !((_props$hideActions3 = props.hideActions) !== null && _props$hideActions3 !== void 0 && _props$hideActions3.includes('EXTERNAL')) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    target: "_blank",
    to: demoUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: "Open demo in new tab",
    className: "__dumi-default-icon",
    role: "open-demo",
    type: "button"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: "Copy source code",
    className: "__dumi-default-icon",
    role: "copy",
    "data-status": copyStatus,
    onClick: () => copyCode(currentFileCode)
  }), sourceType === 'tsx' && showSource && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    target: "_blank",
    to: playgroundUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: "Get JSX via TypeScript Playground",
    className: "__dumi-default-icon",
    role: "change-tsx",
    type: "button"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    title: "Toggle source code panel",
    className: "__dumi-default-icon".concat(showSource ? ' __dumi-default-btn-expand' : ''),
    role: "source",
    type: "button",
    onClick: () => setShowSource(!showSource)
  })), showSource && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "__dumi-default-previewer-source-wrapper"
  }, !isSingleFile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], {
    className: "__dumi-default-previewer-source-tab",
    prefixCls: "__dumi-default-tabs",
    moreIcon: "\\xB7\\xB7\\xB7",
    defaultActiveKey: currentFile,
    onChange: handleFileChange
  }, Object.keys(props.sources).map(filename => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_2__[/* TabPane */ "a"], {
    tab: filename === '_' ? "index.".concat(getSourceType(filename, props.sources[filename])) : filename,
    key: filename
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "__dumi-default-previewer-source"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(dumi_theme_default_src_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    code: currentFileCode,
    lang: sourceType,
    showCopy: false
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Previewer);

//# sourceURL=webpack:///./.dumi/theme/builtins/Previewer.tsx?`)},x2v5:function(module){eval(`module.exports = JSON.parse("{}");

//# sourceURL=webpack:///./src/.umi-production/dumi/apis.json?`)}}]);
