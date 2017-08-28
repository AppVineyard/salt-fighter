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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(4);
module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

function App(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(MatchesTopRow, null),
        React.createElement(MatchesArea, { matches: props.matches })
    );
}
ReactDOM.render(React.createElement(App, { matches: LOCAL_MATCHES }), document.getElementById('container'));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _logger = __webpack_require__(3);

var LOCAL_MATCHES = [{
    "match_date": "1503435264",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1502288556",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1502288529",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1501879996",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1501879975",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501769049",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1501697277",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1501686564",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501611012",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ryu",
    "userName": "Cache"
}, {
    "match_date": "1501538470",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Ryu",
    "userName": "Panda"
}, {
    "match_date": "1501278315",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1501278287",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1501245269",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501245233",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501245211",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Akuma",
    "userName": "Kellogz"
}, {
    "match_date": "1501187090",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ken",
    "userName": "Cache"
}, {
    "match_date": "1501187066",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ken",
    "userName": "Cache"
}, {
    "match_date": "1501177845",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ken",
    "userName": "Cache"
}, {
    "match_date": "1501175539",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ken",
    "userName": "Cache"
}, {
    "match_date": "1501160295",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501160276",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501102480",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1501101062",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501101016",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1501100997",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1501100968",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1500336818",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1500336793",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1500073853",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1500072918",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Akuma",
    "userName": "Kellogz"
}, {
    "match_date": "1500072537",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1500071325",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "Panda"
}, {
    "match_date": "1500071073",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Dhalsim",
    "userName": "Kellogz"
}, {
    "match_date": "1500070709",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "Panda"
}, {
    "match_date": "1500070350",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Dhalsim",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499966482",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Akuma",
    "userName": "Kellogz"
}, {
    "match_date": "1499898686",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1499898375",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ryu",
    "userName": "Cache"
}, {
    "match_date": "1499897974",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499897555",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1499897538",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499897514",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499897485",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "Panda"
}, {
    "match_date": "1499735505",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1499735460",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1499477604",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499477492",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1499361372",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499292661",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1499277789",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498862314",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498861902",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1498861621",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1498861597",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1498845372",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "99f77fb3-5cec-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "99f77fb3-5cec-11e7-98d0-22000b95c3d9",
    "p1_char": "Karin",
    "p2_char": "Rashid",
    "userName": "Panda"
}, {
    "match_date": "1498845051",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498844832",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Necalli",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1498844388",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "99f77fb3-5cec-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "99f77fb3-5cec-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Rashid",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1498844271",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Necalli",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1498758056",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Necalli",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498684754",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Guile",
    "p2_char": "Necalli",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1498603504",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498603046",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498602596",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Necalli",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498602273",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498601940",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498601419",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Panda"
}];

function App(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(MatchesTopRow, null),
        React.createElement(MatchesArea, { matches: props.matches })
    );
}
var MatchesArea = React.createClass({
    displayName: "MatchesArea",

    propTypes: {
        matches: React.PropTypes.arrayOf(React.PropTypes.shape({
            match_date: React.PropTypes.string,
            win: React.PropTypes.string,
            loss: React.PropTypes.string,
            p1_id: React.PropTypes.string,
            p2_id: React.PropTypes.string,
            p1_char: React.PropTypes.string,
            p2_char: React.PropTypes.string,
            userName: React.PropTypes.String
        }))
    },
    render: function render() {
        var that = this;
        return React.createElement(
            "div",
            null,
            React.createElement(_logger.Logger, null),
            this.props.matches.map(function (match) {
                var date = match.match_date;
                var p1ID = match.p1_id;
                var p2ID = match.p2_id;
                var winner = match.win === p1ID ? p1ID : p2ID;

                return React.createElement(
                    "div",
                    { className: "matchRow", id: date, key: date },
                    React.createElement(
                        "div",
                        { className: "matchData userName " + match.p1_char.toLowerCase() },
                        p2ID,
                        React.createElement("br", null),
                        match.p1_char,
                        React.createElement("br", null),
                        React.createElement(Counter, null)
                    ),
                    React.createElement(
                        "div",
                        { className: "matchData vs" },
                        React.createElement(
                            "h1",
                            null,
                            "VS"
                        ),
                        date
                    ),
                    React.createElement(
                        "div",
                        { className: "matchData userName " + match.p2_char.toLowerCase() },
                        p2ID,
                        React.createElement("br", null),
                        match.p2_char,
                        " ",
                        React.createElement("br", null),
                        React.createElement(Counter, null)
                    )
                );
            })
        );
    }
});
function MatchesTopRow() {
    return React.createElement(
        "div",
        { className: "topLabelHolder" },
        React.createElement(
            "span",
            { className: "topLabel" },
            "Winner"
        ),
        React.createElement(
            "span",
            { className: "topLabel" },
            "Vs"
        ),
        React.createElement(
            "span",
            { className: "topLabel" },
            "Loser"
        )
    );
}

var Counter = React.createClass({
    displayName: "Counter",

    propTypes: {
        initialScore: React.PropTypes.number
    },
    getInitialState: function getInitialState() {
        return {
            score: this.props.initialScore || 0
        };
    },
    incrementScore: function incrementScore() {
        this.setState({
            score: this.state.score + 1
        });
    },
    decrementScore: function decrementScore() {
        this.setState({
            score: this.state.score - 1
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { className: "minus", onClick: this.decrementScore },
                "-"
            ),
            "score: ",
            this.state.score,
            React.createElement(
                "button",
                { className: "plus", onClick: this.incrementScore },
                "+"
            )
        );
    }
});

ReactDOM.render(React.createElement(App, { matches: LOCAL_MATCHES }), document.getElementById('container'));

/**
 * Theonlyrealstreetfig : edd4e172-5b84-11e7-98d0-22000b95c3d9
 * Kellogz : c2eac02e-5b84-11e7-98d0-22000b95c3d9
 *  FrontEndRuben : 8b15de49-5dba-11e7-98d0-22000b95c3d9
 *  Cache: 2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9
 *  Panda : d7bddfc7-5b84-11e7-98d0-22000b95c3d9
 *  Jason : 99f77fb3-5cec-11e7-98d0-22000b95c3d9
 *
 *
 *
 *
 *  "match_date": "1503435264",
 *  "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
 *  "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
 *  "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
 *  "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
 *  "p1_char": "Nash",
 *  "p2_char": "Ryu",
 *  "userName": "Theonlyrealstreetfig"
 */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Logger = exports.Logger = function Logger() {
    console.log('it works');
    return React.createElement("div", { className: "logger" });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

function App(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(MatchesTopRow, null),
        React.createElement(MatchesArea, { matches: props.matches })
    );
}
ReactDOM.render(React.createElement(App, { matches: LOCAL_MATCHES }), document.getElementById('container'));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _logger = __webpack_require__(6);

var LOCAL_MATCHES = [{
    "match_date": "1503435264",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1502288556",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1502288529",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1501879996",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1501879975",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501769049",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1501697277",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1501686564",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501611012",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ryu",
    "userName": "Cache"
}, {
    "match_date": "1501538470",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Ryu",
    "userName": "Panda"
}, {
    "match_date": "1501278315",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1501278287",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1501245269",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501245233",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501245211",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Akuma",
    "userName": "Kellogz"
}, {
    "match_date": "1501187090",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ken",
    "userName": "Cache"
}, {
    "match_date": "1501187066",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ken",
    "userName": "Cache"
}, {
    "match_date": "1501177845",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ken",
    "userName": "Cache"
}, {
    "match_date": "1501175539",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ken",
    "userName": "Cache"
}, {
    "match_date": "1501160295",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501160276",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501102480",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1501101062",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1501101016",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1501100997",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1501100968",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1500336818",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1500336793",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1500073853",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Kellogz"
}, {
    "match_date": "1500072918",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Akuma",
    "userName": "Kellogz"
}, {
    "match_date": "1500072537",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1500071325",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "Panda"
}, {
    "match_date": "1500071073",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Dhalsim",
    "userName": "Kellogz"
}, {
    "match_date": "1500070709",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "Panda"
}, {
    "match_date": "1500070350",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Dhalsim",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499966482",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Akuma",
    "userName": "Kellogz"
}, {
    "match_date": "1499898686",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1499898375",
    "win": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Akuma",
    "p2_char": "Ryu",
    "userName": "Cache"
}, {
    "match_date": "1499897974",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499897555",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1499897538",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499897514",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499897485",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Akuma",
    "userName": "Panda"
}, {
    "match_date": "1499735505",
    "win": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Nash",
    "userName": "Kellogz"
}, {
    "match_date": "1499735460",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1499477604",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499477492",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1499361372",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ryu",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1499292661",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1499277789",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498862314",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498861902",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1498861621",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1498861597",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Nash",
    "userName": "Panda"
}, {
    "match_date": "1498845372",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "99f77fb3-5cec-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "99f77fb3-5cec-11e7-98d0-22000b95c3d9",
    "p1_char": "Karin",
    "p2_char": "Rashid",
    "userName": "Panda"
}, {
    "match_date": "1498845051",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498844832",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Necalli",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1498844388",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "99f77fb3-5cec-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "99f77fb3-5cec-11e7-98d0-22000b95c3d9",
    "p1_char": "Ken",
    "p2_char": "Rashid",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1498844271",
    "win": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "8b15de49-5dba-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Necalli",
    "userName": "FrontEndRuben"
}, {
    "match_date": "1498758056",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Necalli",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498684754",
    "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_char": "Guile",
    "p2_char": "Necalli",
    "userName": "Theonlyrealstreetfig"
}, {
    "match_date": "1498603504",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498603046",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498602596",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p1_id": "2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Necalli",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498602273",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498601940",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Nash",
    "p2_char": "Ken",
    "userName": "Panda"
}, {
    "match_date": "1498601419",
    "win": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p1_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
    "p2_id": "d7bddfc7-5b84-11e7-98d0-22000b95c3d9",
    "p1_char": "Ryu",
    "p2_char": "Ken",
    "userName": "Panda"
}];

function App(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(MatchesTopRow, null),
        React.createElement(MatchesArea, { matches: props.matches })
    );
}
var MatchesArea = React.createClass({
    displayName: "MatchesArea",

    propTypes: {
        matches: React.PropTypes.arrayOf(React.PropTypes.shape({
            match_date: React.PropTypes.string,
            win: React.PropTypes.string,
            loss: React.PropTypes.string,
            p1_id: React.PropTypes.string,
            p2_id: React.PropTypes.string,
            p1_char: React.PropTypes.string,
            p2_char: React.PropTypes.string,
            userName: React.PropTypes.String
        }))
    },
    render: function render() {
        var that = this;
        return React.createElement(
            "div",
            null,
            React.createElement(_logger.Logger, null),
            this.props.matches.map(function (match) {
                var date = match.match_date;
                var p1ID = match.p1_id;
                var p2ID = match.p2_id;
                var winner = match.win === p1ID ? p1ID : p2ID;

                return React.createElement(
                    "div",
                    { className: "matchRow", id: date, key: date },
                    React.createElement(
                        "div",
                        { className: "matchData userName " + match.p1_char.toLowerCase() },
                        p2ID,
                        React.createElement("br", null),
                        match.p1_char,
                        React.createElement("br", null),
                        React.createElement(Counter, null)
                    ),
                    React.createElement(
                        "div",
                        { className: "matchData vs" },
                        React.createElement(
                            "h1",
                            null,
                            "VS"
                        ),
                        date
                    ),
                    React.createElement(
                        "div",
                        { className: "matchData userName " + match.p2_char.toLowerCase() },
                        p2ID,
                        React.createElement("br", null),
                        match.p2_char,
                        " ",
                        React.createElement("br", null),
                        React.createElement(Counter, null)
                    )
                );
            })
        );
    }
});
function MatchesTopRow() {
    return React.createElement(
        "div",
        { className: "topLabelHolder" },
        React.createElement(
            "span",
            { className: "topLabel" },
            "Winner"
        ),
        React.createElement(
            "span",
            { className: "topLabel" },
            "Vs"
        ),
        React.createElement(
            "span",
            { className: "topLabel" },
            "Loser"
        )
    );
}

var Counter = React.createClass({
    displayName: "Counter",

    propTypes: {
        initialScore: React.PropTypes.number
    },
    getInitialState: function getInitialState() {
        return {
            score: this.props.initialScore || 0
        };
    },
    incrementScore: function incrementScore() {
        this.setState({
            score: this.state.score + 1
        });
    },
    decrementScore: function decrementScore() {
        this.setState({
            score: this.state.score - 1
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { className: "minus", onClick: this.decrementScore },
                "-"
            ),
            "score: ",
            this.state.score,
            React.createElement(
                "button",
                { className: "plus", onClick: this.incrementScore },
                "+"
            )
        );
    }
});

ReactDOM.render(React.createElement(App, { matches: LOCAL_MATCHES }), document.getElementById('container'));

/**
 * Theonlyrealstreetfig : edd4e172-5b84-11e7-98d0-22000b95c3d9
 * Kellogz : c2eac02e-5b84-11e7-98d0-22000b95c3d9
 *  FrontEndRuben : 8b15de49-5dba-11e7-98d0-22000b95c3d9
 *  Cache: 2f9bbd2e-5b4f-11e7-98d0-22000b95c3d9
 *  Panda : d7bddfc7-5b84-11e7-98d0-22000b95c3d9
 *  Jason : 99f77fb3-5cec-11e7-98d0-22000b95c3d9
 *
 *
 *
 *
 *  "match_date": "1503435264",
 *  "win": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
 *  "loss": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
 *  "p1_id": "edd4e172-5b84-11e7-98d0-22000b95c3d9",
 *  "p2_id": "c2eac02e-5b84-11e7-98d0-22000b95c3d9",
 *  "p1_char": "Nash",
 *  "p2_char": "Ryu",
 *  "userName": "Theonlyrealstreetfig"
 */

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Logger = exports.Logger = function Logger() {
    console.log('it works');
    return React.createElement("div", { className: "logger" });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  throw new Error("Module parse failed: /Users/Ruben/Desktop/salt-fighter/reactBuild/app.jsx Unexpected token (4:8)\nYou may need an appropriate loader to handle this file type.\n| function App(props) {\n|     return (\n|         <div>\n|             <MatchesTopRow></MatchesTopRow>\n|             <MatchesArea matches={props.matches}></MatchesArea>");

  /***/
}]
/******/);

/***/ })
/******/ ]);