"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sharp = _interopRequireDefault(require("sharp"));

var _svg2img = _interopRequireDefault(require("svg2img"));

var _trianglify = _interopRequireDefault(require("trianglify"));

var _xmlserializer = _interopRequireDefault(require("xmlserializer"));

var _text2png = _interopRequireDefault(require("text2png"));

// import gradient from "random-gradient";
var svg2imgPromise = function svg2imgPromise(_svg) {
  return new Promise(function (resolve, reject) {
    (0, _svg2img["default"])(_svg, function (e, buffer) {
      resolve(buffer);
    });
  });
};

var pfp =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(options) {
    var _options$width, width, _options$height, height, _options$opacity, opacity, id, _options$_width, _width, _options$_height, _height, _options$text_color, text_color, _options$name, name, _options$r, r, _options$g, g, _options$b, b, _options$alpha, alpha, pattern, svgString, buffer, text, overlay;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _options$width = options.width, width = _options$width === void 0 ? 400 : _options$width, _options$height = options.height, height = _options$height === void 0 ? 400 : _options$height, _options$opacity = options.opacity, opacity = _options$opacity === void 0 ? 1 : _options$opacity, id = options.id, _options$_width = options._width, _width = _options$_width === void 0 ? 200 : _options$_width, _options$_height = options._height, _height = _options$_height === void 0 ? 50 : _options$_height, _options$text_color = options.text_color, text_color = _options$text_color === void 0 ? 'white' : _options$text_color, _options$name = options.name, name = _options$name === void 0 ? 'Hyper' : _options$name, _options$r = options.r, r = _options$r === void 0 ? 0 : _options$r, _options$g = options.g, g = _options$g === void 0 ? 0 : _options$g, _options$b = options.b, b = _options$b === void 0 ? 0 : _options$b, _options$alpha = options.alpha, alpha = _options$alpha === void 0 ? 0.5 : _options$alpha;
            pattern = (0, _trianglify["default"])({
              width: width,
              height: height,
              seed: id
            });
            svgString = _xmlserializer["default"].serializeToString(pattern.svg());
            _context.next = 5;
            return svg2imgPromise(svgString);

          case 5:
            buffer = _context.sent;
            text = (0, _text2png["default"])(name, {
              color: text_color
            });
            _context.next = 9;
            return (0, _sharp["default"])({
              create: {
                width: _width,
                height: _height,
                channels: 4,
                background: {
                  r: Number(r),
                  g: Number(g),
                  b: Number(b),
                  alpha: Number(alpha)
                }
              }
            }).png().toBuffer();

          case 9:
            overlay = _context.sent;
            return _context.abrupt("return", (0, _sharp["default"])(buffer).composite([{
              input: overlay,
              gravity: 'centre'
            }, {
              input: text,
              gravity: 'centre'
            }]));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function pfp(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = pfp;
exports["default"] = _default;