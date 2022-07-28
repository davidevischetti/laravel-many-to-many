/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/front.js":
/*!*******************************!*\
  !*** ./resources/js/front.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\resources\\js\\front.js: Support for the experimental syntax 'jsx' isn't currently enabled (16:1):\n\n\u001b[0m \u001b[90m 14 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 16 |\u001b[39m \u001b[33m<\u001b[39m\u001b[33mstyle\u001b[39m scoped\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mstyle\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m\u001b[0m\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n    at instantiate (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:359:12)\n    at Parser.raise (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:3339:19)\n    at Parser.expectOnePlugin (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:3396:18)\n    at Parser.parseExprAtom (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:13078:18)\n    at Parser.parseExprSubscripts (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12648:23)\n    at Parser.parseUpdate (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12627:21)\n    at Parser.parseMaybeUnary (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12598:23)\n    at Parser.parseMaybeUnaryOrPrivate (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12392:61)\n    at Parser.parseExprOps (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12399:23)\n    at Parser.parseMaybeConditional (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12369:23)\n    at Parser.parseMaybeAssign (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12321:21)\n    at Parser.parseExpressionBase (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12257:23)\n    at D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12251:39\n    at Parser.allowInAnd (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:14346:16)\n    at Parser.parseExpression (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:12251:17)\n    at Parser.parseStatementContent (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:14786:23)\n    at Parser.parseStatement (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:14643:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:15286:25)\n    at Parser.parseBlockBody (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:15277:10)\n    at Parser.parseProgram (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:14561:10)\n    at Parser.parseTopLevel (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:14548:25)\n    at Parser.parse (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:16556:10)\n    at parse (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\parser\\lib\\index.js:16608:38)\n    at parser (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\core\\lib\\parser\\index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\boolean\\esercizi\\back_end\\project_60\\laravel-many-to-many\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)");

/***/ }),

/***/ "./resources/sass/back.scss":
/*!**********************************!*\
  !*** ./resources/sass/back.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./resources/js/front.js ./resources/sass/back.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\boolean\esercizi\back_end\project_60\laravel-many-to-many\resources\js\front.js */"./resources/js/front.js");
module.exports = __webpack_require__(/*! D:\boolean\esercizi\back_end\project_60\laravel-many-to-many\resources\sass\back.scss */"./resources/sass/back.scss");


/***/ })

/******/ });