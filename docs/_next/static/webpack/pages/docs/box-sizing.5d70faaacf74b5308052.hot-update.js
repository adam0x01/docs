webpackHotUpdate_N_E("pages/docs/box-sizing",{

/***/ "./src/components/Disabling.js":
/*!*************************************!*\
  !*** ./src/components/Disabling.js ***!
  \*************************************/
/*! exports provided: Disabling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Disabling\", function() { return Disabling; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ConfigSample__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConfigSample */ \"./src/components/ConfigSample.js\");\n/* harmony import */ var _utils_castArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/castArray */ \"./src/utils/castArray.js\");\n/* harmony import */ var _utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/joinWithAnd */ \"./src/utils/joinWithAnd.js\");\n\nvar _jsxFileName = \"/Users/zhangrui/docs/tailwindcss-docs-cn/src/components/Disabling.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction Disabling(_ref) {\n  var plugin = _ref.plugin,\n      name = _ref.name;\n  var plugins = Object(_utils_castArray__WEBPACK_IMPORTED_MODULE_3__[\"castArray\"])(plugin);\n  name = name || plugin.replace(/([a-z])([A-Z])/g, function (m, p1, p2) {\n    return \"\".concat(p1, \" \").concat(p2.toLowerCase());\n  }); // return (\n  //   <div className=\"prose\">\n  //     <p>\n  //       If you don't plan to use the {name} utilities in your project, you can disable them entirely\n  //       by setting the{' '}\n  //       <span\n  //         dangerouslySetInnerHTML={{\n  //           __html: joinWithAnd(plugins.map((p) => `<code>${p}</code>`)),\n  //         }}\n  //       />{' '}\n  //       {plugins.length > 1 ? 'properties' : 'property'} to <code>false</code> in the{' '}\n  //       <code>corePlugins</code> section of your config file:\n  //     </p>\n  //\n  //     <ConfigSample\n  //       path=\"corePlugins\"\n  //       before=\"...\"\n  //       add={plugins.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})}\n  //     />\n  //   </div>\n  // )\n\n  return __jsx(\"div\", {\n    className: \"prose\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"\\u5982\\u679C\\u4F60\\u4E0D\\u6253\\u7B97\\u5728\\u4F60\\u7684\\u9879\\u76EE\\u4E2D\\u4F7F\\u7528 \", name, \" \\u529F\\u80FD\\uFF0C\\u4F60\\u53EF\\u4EE5\\u901A\\u8FC7\\u5728\\u914D\\u7F6E\\u6587\\u4EF6\\u7684\", ' ', __jsx(\"code\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 52\n    }\n  }, \"corePlugins\"), \"\\u90E8\\u5206\\u5C06\", ' ', __jsx(\"span\", {\n    dangerouslySetInnerHTML: {\n      __html: Object(_utils_joinWithAnd__WEBPACK_IMPORTED_MODULE_4__[\"joinWithAnd\"])(plugins.map(function (p) {\n        return \"<code>\".concat(p, \"</code>\");\n      }))\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }), ' ', \" \\u5C5E\\u6027\\u8BBE\\u7F6E\\u4E3A\", __jsx(\"code\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 24\n    }\n  }, \"false\"), \"\\u6765\\u5B8C\\u5168\\u7981\\u7528\\u5B83\\u4EEC\\uFF1A\"), __jsx(_components_ConfigSample__WEBPACK_IMPORTED_MODULE_2__[\"ConfigSample\"], {\n    path: \"corePlugins\",\n    before: \"...\",\n    add: plugins.reduce(function (acc, cur) {\n      return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, cur, false));\n    }, {}),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }));\n}\n_c = Disabling;\n\nvar _c;\n\n$RefreshReg$(_c, \"Disabling\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGlzYWJsaW5nLmpzP2MwN2UiXSwibmFtZXMiOlsiRGlzYWJsaW5nIiwicGx1Z2luIiwibmFtZSIsInBsdWdpbnMiLCJjYXN0QXJyYXkiLCJyZXBsYWNlIiwibSIsInAxIiwicDIiLCJ0b0xvd2VyQ2FzZSIsIl9faHRtbCIsImpvaW5XaXRoQW5kIiwibWFwIiwicCIsInJlZHVjZSIsImFjYyIsImN1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULE9BQXFDO0FBQUEsTUFBaEJDLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMxQyxNQUFNQyxPQUFPLEdBQUdDLGtFQUFTLENBQUNILE1BQUQsQ0FBekI7QUFDQUMsTUFBSSxHQUFHQSxJQUFJLElBQUlELE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLGlCQUFmLEVBQWtDLFVBQUNDLENBQUQsRUFBSUMsRUFBSixFQUFRQyxFQUFSO0FBQUEscUJBQWtCRCxFQUFsQixjQUF3QkMsRUFBRSxDQUFDQyxXQUFILEVBQXhCO0FBQUEsR0FBbEMsQ0FBZixDQUYwQyxDQUkxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhGQUNvQlAsSUFEcEIsMkZBQ3lDLEdBRHpDLEVBQzZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDdDLHdCQUN5RSxHQUR6RSxFQUVJO0FBQ0ksMkJBQXVCLEVBQUU7QUFDckJRLFlBQU0sRUFBRUMsc0VBQVcsQ0FBQ1IsT0FBTyxDQUFDUyxHQUFSLENBQVksVUFBQ0MsQ0FBRDtBQUFBLCtCQUFnQkEsQ0FBaEI7QUFBQSxPQUFaLENBQUQ7QUFERSxLQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFNTyxHQU5QLHFDQU1pQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTmpCLHFEQURGLEVBVUUsTUFBQyxxRUFBRDtBQUNFLFFBQUksRUFBQyxhQURQO0FBRUUsVUFBTSxFQUFDLEtBRlQ7QUFHRSxPQUFHLEVBQUVWLE9BQU8sQ0FBQ1csTUFBUixDQUFlLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLDZDQUFvQkQsR0FBcEIscUdBQTBCQyxHQUExQixFQUFnQyxLQUFoQztBQUFBLEtBQWYsRUFBeUQsRUFBekQsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERjtBQWtCRDtLQTVDZWhCLFMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EaXNhYmxpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdTYW1wbGUgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29uZmlnU2FtcGxlJ1xuaW1wb3J0IHsgY2FzdEFycmF5IH0gZnJvbSAnQC91dGlscy9jYXN0QXJyYXknXG5pbXBvcnQgeyBqb2luV2l0aEFuZCB9IGZyb20gJ0AvdXRpbHMvam9pbldpdGhBbmQnXG5cbmV4cG9ydCBmdW5jdGlvbiBEaXNhYmxpbmcoeyBwbHVnaW4sIG5hbWUgfSkge1xuICBjb25zdCBwbHVnaW5zID0gY2FzdEFycmF5KHBsdWdpbilcbiAgbmFtZSA9IG5hbWUgfHwgcGx1Z2luLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIChtLCBwMSwgcDIpID0+IGAke3AxfSAke3AyLnRvTG93ZXJDYXNlKCl9YClcblxuICAvLyByZXR1cm4gKFxuICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2VcIj5cbiAgLy8gICAgIDxwPlxuICAvLyAgICAgICBJZiB5b3UgZG9uJ3QgcGxhbiB0byB1c2UgdGhlIHtuYW1lfSB1dGlsaXRpZXMgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRpc2FibGUgdGhlbSBlbnRpcmVseVxuICAvLyAgICAgICBieSBzZXR0aW5nIHRoZXsnICd9XG4gIC8vICAgICAgIDxzcGFuXG4gIC8vICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgLy8gICAgICAgICAgIF9faHRtbDogam9pbldpdGhBbmQocGx1Z2lucy5tYXAoKHApID0+IGA8Y29kZT4ke3B9PC9jb2RlPmApKSxcbiAgLy8gICAgICAgICB9fVxuICAvLyAgICAgICAvPnsnICd9XG4gIC8vICAgICAgIHtwbHVnaW5zLmxlbmd0aCA+IDEgPyAncHJvcGVydGllcycgOiAncHJvcGVydHknfSB0byA8Y29kZT5mYWxzZTwvY29kZT4gaW4gdGhleycgJ31cbiAgLy8gICAgICAgPGNvZGU+Y29yZVBsdWdpbnM8L2NvZGU+IHNlY3Rpb24gb2YgeW91ciBjb25maWcgZmlsZTpcbiAgLy8gICAgIDwvcD5cbiAgLy9cbiAgLy8gICAgIDxDb25maWdTYW1wbGVcbiAgLy8gICAgICAgcGF0aD1cImNvcmVQbHVnaW5zXCJcbiAgLy8gICAgICAgYmVmb3JlPVwiLi4uXCJcbiAgLy8gICAgICAgYWRkPXtwbHVnaW5zLnJlZHVjZSgoYWNjLCBjdXIpID0+ICh7IC4uLmFjYywgW2N1cl06IGZhbHNlIH0pLCB7fSl9XG4gIC8vICAgICAvPlxuICAvLyAgIDwvZGl2PlxuICAvLyApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlXCI+XG4gICAgICA8cD5cbiAgICAgICAgICDlpoLmnpzkvaDkuI3miZPnrpflnKjkvaDnmoTpobnnm67kuK3kvb/nlKgge25hbWV9IOWKn+iDve+8jOS9oOWPr+S7pemAmui/h+WcqOmFjee9ruaWh+S7tueahHsnICd9PGNvZGU+Y29yZVBsdWdpbnM8L2NvZGU+6YOo5YiG5bCGeycgJ31cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBqb2luV2l0aEFuZChwbHVnaW5zLm1hcCgocCkgPT4gYDxjb2RlPiR7cH08L2NvZGU+YCkpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgIC8+eycgJ30g5bGe5oCn6K6+572u5Li6PGNvZGU+ZmFsc2U8L2NvZGU+5p2l5a6M5YWo56aB55So5a6D5Lus77yaXG4gICAgICA8L3A+XG5cbiAgICAgIDxDb25maWdTYW1wbGVcbiAgICAgICAgcGF0aD1cImNvcmVQbHVnaW5zXCJcbiAgICAgICAgYmVmb3JlPVwiLi4uXCJcbiAgICAgICAgYWRkPXtwbHVnaW5zLnJlZHVjZSgoYWNjLCBjdXIpID0+ICh7IC4uLmFjYywgW2N1cl06IGZhbHNlIH0pLCB7fSl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Disabling.js\n");

/***/ })

})