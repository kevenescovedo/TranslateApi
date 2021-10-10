"use strict";
(() => {
var exports = {};
exports.id = "pages/api/mensagetranslate";
exports.ids = ["pages/api/mensagetranslate"];
exports.modules = {

/***/ "./pages/api/mensagetranslate.js":
/*!***************************************!*\
  !*** ./pages/api/mensagetranslate.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var google_translate_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-translate-api */ "google-translate-api");
/* harmony import */ var google_translate_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_translate_api__WEBPACK_IMPORTED_MODULE_0__);


function ApiTranslateMensage(request, response) {
  if (request.method !== 'POST') {
    response.status(405).send({
      message: 'Only POST requests allowed'
    });
    return;
  } else {
    var tolangue = request.body.to;
    tolangue = tolangue.toLowerCase();
    tolangue = tolangue.substr(0, 2);
    var texttranslate = request.body.text;

    const translate = __webpack_require__(/*! @vitalets/google-translate-api */ "@vitalets/google-translate-api");

    translate(texttranslate, {
      to: tolangue
    }).then(res => {
      console.log(res.text); //=> I speak English

      console.log(res.from.language.iso); //=> nl

      response.status(200).send({
        text: res.text,
        from: res.from.language.iso
      });
    }).catch(err => {
      response.status(400).send(err);
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiTranslateMensage);

/***/ }),

/***/ "@vitalets/google-translate-api":
/*!*************************************************!*\
  !*** external "@vitalets/google-translate-api" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@vitalets/google-translate-api");

/***/ }),

/***/ "google-translate-api":
/*!***************************************!*\
  !*** external "google-translate-api" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("google-translate-api");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/mensagetranslate.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL21lbnNhZ2V0cmFuc2xhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDOztBQUNBLFNBQVNDLG1CQUFULENBQTZCQyxPQUE3QixFQUFzQ0MsUUFBdEMsRUFBK0M7QUFFeEMsTUFBSUQsT0FBTyxDQUFDRSxNQUFSLEtBQW1CLE1BQXZCLEVBQStCO0FBQzdCRCxJQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQTFCO0FBQ0E7QUFDRCxHQUhELE1BSUs7QUFDSCxRQUFJQyxRQUFRLEdBQUdOLE9BQU8sQ0FBQ08sSUFBUixDQUFhQyxFQUE1QjtBQUNBRixJQUFBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0csV0FBVCxFQUFYO0FBQ0FILElBQUFBLFFBQVEsR0FBR0EsUUFBUSxDQUFDSSxNQUFULENBQWdCLENBQWhCLEVBQWtCLENBQWxCLENBQVg7QUFDQSxRQUFJQyxhQUFhLEdBQUdYLE9BQU8sQ0FBQ08sSUFBUixDQUFhSyxJQUFqQzs7QUFFQSxVQUFNZCxTQUFTLEdBQUdlLG1CQUFPLENBQUMsc0VBQUQsQ0FBekI7O0FBRVZmLElBQUFBLFNBQVMsQ0FBQ2EsYUFBRCxFQUFnQjtBQUFDSCxNQUFBQSxFQUFFLEVBQUVGO0FBQUwsS0FBaEIsQ0FBVCxDQUF5Q1EsSUFBekMsQ0FBOENDLEdBQUcsSUFBSTtBQUNqREMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0gsSUFBaEIsRUFEaUQsQ0FFakQ7O0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQUosQ0FBU0MsUUFBVCxDQUFrQkMsR0FBOUIsRUFIaUQsQ0FJakQ7O0FBQ0FuQixNQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQUNRLFFBQUFBLElBQUksRUFBRUcsR0FBRyxDQUFDSCxJQUFYO0FBQWlCTSxRQUFBQSxJQUFJLEVBQUVILEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxRQUFULENBQWtCQztBQUF6QyxPQUExQjtBQUNILEtBTkQsRUFNR0MsS0FOSCxDQU1TQyxHQUFHLElBQUk7QUFDWnJCLE1BQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEJrQixHQUExQjtBQUNILEtBUkQ7QUFTTztBQUVOOztBQUNELGlFQUFnQnZCLG1CQUFoQjs7Ozs7Ozs7OztBQzVCQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhbnNsYXRlQXBpLy4vcGFnZXMvYXBpL21lbnNhZ2V0cmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vdHJhbnNsYXRlQXBpL2V4dGVybmFsIFwiQHZpdGFsZXRzL2dvb2dsZS10cmFuc2xhdGUtYXBpXCIiLCJ3ZWJwYWNrOi8vdHJhbnNsYXRlQXBpL2V4dGVybmFsIFwiZ29vZ2xlLXRyYW5zbGF0ZS1hcGlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIGltcG9ydCB0cmFuc2xhdGUgZnJvbSBcImdvb2dsZS10cmFuc2xhdGUtYXBpXCI7XHJcbiBmdW5jdGlvbiBBcGlUcmFuc2xhdGVNZW5zYWdlKHJlcXVlc3QsIHJlc3BvbnNlKXtcclxuICAgXHJcbiAgICAgICAgaWYgKHJlcXVlc3QubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyg0MDUpLnNlbmQoeyBtZXNzYWdlOiAnT25seSBQT1NUIHJlcXVlc3RzIGFsbG93ZWQnIH0pXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YXIgdG9sYW5ndWUgPSByZXF1ZXN0LmJvZHkudG87XHJcbiAgICAgICAgICB0b2xhbmd1ZSA9IHRvbGFuZ3VlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICB0b2xhbmd1ZSA9IHRvbGFuZ3VlLnN1YnN0cigwLDIpO1xyXG4gICAgICAgICAgdmFyIHRleHR0cmFuc2xhdGUgPSByZXF1ZXN0LmJvZHkudGV4dDtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSByZXF1aXJlKCdAdml0YWxldHMvZ29vZ2xlLXRyYW5zbGF0ZS1hcGknKTtcclxuXHJcbnRyYW5zbGF0ZSh0ZXh0dHJhbnNsYXRlLCB7dG86IHRvbGFuZ3VlfSkudGhlbihyZXMgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzLnRleHQpO1xyXG4gICAgLy89PiBJIHNwZWFrIEVuZ2xpc2hcclxuICAgIGNvbnNvbGUubG9nKHJlcy5mcm9tLmxhbmd1YWdlLmlzbyk7XHJcbiAgICAvLz0+IG5sXHJcbiAgICByZXNwb25zZS5zdGF0dXMoMjAwKS5zZW5kKHt0ZXh0OiByZXMudGV4dCwgZnJvbTogcmVzLmZyb20ubGFuZ3VhZ2UuaXNvfSk7XHJcbn0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICByZXNwb25zZS5zdGF0dXMoNDAwKS5zZW5kKGVycik7XHJcbn0pO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgIEFwaVRyYW5zbGF0ZU1lbnNhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHZpdGFsZXRzL2dvb2dsZS10cmFuc2xhdGUtYXBpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS10cmFuc2xhdGUtYXBpXCIpOyJdLCJuYW1lcyI6WyJ0cmFuc2xhdGUiLCJBcGlUcmFuc2xhdGVNZW5zYWdlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJ0b2xhbmd1ZSIsImJvZHkiLCJ0byIsInRvTG93ZXJDYXNlIiwic3Vic3RyIiwidGV4dHRyYW5zbGF0ZSIsInRleHQiLCJyZXF1aXJlIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmcm9tIiwibGFuZ3VhZ2UiLCJpc28iLCJjYXRjaCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=