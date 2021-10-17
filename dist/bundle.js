'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var TOAST_TYPE = {
  Success: "success",
  Error: "error",
  Warning: "warning",
  Info: "info"
};

var BUTTON_PROPS = [{
  id: 1,
  type: TOAST_TYPE.Success,
  label: "Success"
}, {
  id: 2,
  type: TOAST_TYPE.Error,
  label: "Error"
}, {
  id: 3,
  type: TOAST_TYPE.Info,
  label: "Info"
}, {
  id: 4,
  type: TOAST_TYPE.Warning,
  label: "Warning"
}];

var _path$3, _path2$2;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function SvgError(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 340.8 340.8"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M170.4 0C76.4 0 0 76.4 0 170.4s76.4 170.4 170.4 170.4 170.4-76.4 170.4-170.4S264.4 0 170.4 0zm0 323.6c-84.4 0-153.2-68.8-153.2-153.2S86 17.2 170.4 17.2 323.6 86 323.6 170.4s-68.8 153.2-153.2 153.2z"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M182.4 169.6l50-50c3.2-3.2 3.2-8.8 0-12-3.2-3.2-8.8-3.2-12 0l-50 50-50-50c-3.2-3.2-8.8-3.2-12 0-3.2 3.2-3.2 8.8 0 12l50 50-50 49.6c-3.2 3.2-3.2 8.8 0 12 1.6 1.6 4 2.4 6 2.4s4.4-.8 6-2.4l50-50 50 50c1.6 1.6 4 2.4 6 2.4s4.4-.8 6-2.4c3.2-3.2 3.2-8.8 0-12l-50-49.6z"
  })));
}

var _path$2, _path2$1;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgInfo(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    height: 512,
    viewBox: "0 0 24 24",
    width: 512,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 19c-.827 0-1.5-.673-1.5-1.5S11.173 16 12 16s1.5.673 1.5 1.5S12.827 19 12 19zm0-2a.5.5 0 10.002 1.002A.5.5 0 0012 17zM12 14.5a.5.5 0 01-.5-.5v-1.23c0-.877.562-1.644 1.4-1.908A2.986 2.986 0 0015 8c0-1.654-1.346-3-3-3S9 6.346 9 8a.5.5 0 01-1 0c0-2.206 1.794-4 4-4s4 1.794 4 4a3.981 3.981 0 01-2.8 3.816.996.996 0 00-.7.954V14a.5.5 0 01-.5.5z"
  })));
}

var _path$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgSuccess(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    fill: "#fff",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: 35,
    height: 35
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M27 55L6 33l3-4 17 12 29-29 4 4z"
  })));
}

var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgWarning(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    height: 512,
    viewBox: "0 0 511.069 511.069",
    width: 512,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M336.207 0H174.863c-62.86 0-114 51.14-114 114v214.177c0 62.86 51.14 114 114 114h5.922l155.204 68.892v-68.892h.218c62.859 0 114-51.14 114-114V114c0-62.86-51.141-114-114-114zm84 328.177c0 46.318-37.683 84-84 84h-30.218v52.753l-118.845-52.753h-12.281c-46.318 0-84-37.682-84-84V114c0-46.318 37.682-84 84-84h161.344c46.317 0 84 37.682 84 84z"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M255.534 280.457c-10.908 0-19.751 8.843-19.751 19.751s8.843 19.751 19.751 19.751c10.909 0 19.751-8.843 19.751-19.751.001-10.908-8.842-19.751-19.751-19.751zM240.665 121.037h30v140.219h-30z"
  })));
}

var _colors;
var darkOrchid = '#9a40d3';
var minionYellow = '#f4e048';
var flamePea = '#e25837';
var shamrock = '#37e29a';
var theme = {
  colors: (_colors = {}, _defineProperty(_colors, TOAST_TYPE.Info, darkOrchid), _defineProperty(_colors, TOAST_TYPE.Warning, minionYellow), _defineProperty(_colors, TOAST_TYPE.Error, flamePea), _defineProperty(_colors, TOAST_TYPE.Success, shamrock), _defineProperty(_colors, "white", '#ffffff'), _defineProperty(_colors, "black", '#000000'), _defineProperty(_colors, "main", 'red'), _colors),
  fontSize: [15, 17],
  borderRadius: [10, 15],
  spacing: [-20, 0, 4, 10, 15, 18, 20, 25],
  CONTENT_WIDTH: 100,
  MAIN_CONTAINER_WIDTH: 100,
  MAIN_CONTAINER_HEIGTH: 500,
  BUTTON_WIDTH: 100,
  BUTTON_HEIGTH: 25,
  TOAST_CONTENT_WIDTH: 260,
  TOAST_CONTENT_HEIGTH: 60,
  TOAST_CONTENT_BLOCK_WIDTH: 100,
  TOAST_CONTENT_BLOCK_HEIGTH: 100,
  TOAST_CLOSE_BUTTON_WIDTH: 24,
  TOAST_CLOSE_BUTTON_HEIGTH: 4,
  TOAS_ICON_WIDTH: 35,
  TOAS_ICON_HEIGTH: 35
};

var SUCCESS = 'SUCCESS';
var ERROR = 'ERROR';
var WARNING = 'WARNING';
var INFO = 'INFO';
var TOP_RIGHT = 'TOP_RIGHT';
var TOP_LEFT = 'TOP_LEFT';
var BOTTOM_RIGHT = 'BOTTOM_RIGHT';
var BOTTOM_LEFT = 'BOTTOM_LEFT';
var id = Date.now().toString();
var SUCCESS_TOAST = {
  id: id,
  description: 'Success toast example',
  backgroundColor: "".concat(theme.colors[TOAST_TYPE.Success]),
  color: "".concat(theme.colors.white),
  icon: SvgSuccess
};
var ERROR_TOAST = {
  id: id,
  description: 'Error toast example',
  backgroundColor: "".concat(theme.colors[TOAST_TYPE.Error]),
  color: "".concat(theme.colors.white),
  icon: SvgError
};
var INFO_TOAST = {
  id: id,
  description: 'Info toast example',
  backgroundColor: "".concat(theme.colors[TOAST_TYPE.Info]),
  color: "".concat(theme.colors.white),
  icon: SvgInfo
};
var WARNING_TOAST = {
  id: id,
  description: 'Warning toast example',
  backgroundColor: "".concat(theme.colors[TOAST_TYPE.Warning]),
  color: "".concat(theme.colors.black),
  icon: SvgWarning
};

var _templateObject$3;
var GlobalStyles = styled.createGlobalStyle(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  * {\n  body {\n margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  }\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n  }\n"])));

var _TOAST_POSITIONS;
var TOAST_POSITIONS = (_TOAST_POSITIONS = {}, _defineProperty(_TOAST_POSITIONS, TOP_RIGHT, {
  top: 0,
  rigth: 0,
  bottom: "initiial",
  left: "initiial"
}), _defineProperty(_TOAST_POSITIONS, TOP_LEFT, {
  top: 0,
  rigth: "initiial",
  bottom: "initiial",
  left: 0
}), _defineProperty(_TOAST_POSITIONS, BOTTOM_LEFT, {
  top: "initiial",
  rigth: 0,
  bottom: 0,
  left: "initiial"
}), _defineProperty(_TOAST_POSITIONS, BOTTOM_RIGHT, {
  top: "initiial",
  rigth: "initiial",
  bottom: 0,
  left: 0
}), _TOAST_POSITIONS);

var _templateObject$2, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1;
var ModalStyles = styled__default["default"].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  position: absolute;\n  margin: ", "px;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n"])), function (props) {
  return props.theme.spacing[3];
}, function (_ref) {
  var position = _ref.position,
      toastPosition = _ref.toastPosition;
  return toastPosition[position].top;
}, function (_ref2) {
  var position = _ref2.position,
      toastPosition = _ref2.toastPosition;
  return toastPosition[position].bottom;
}, function (_ref3) {
  var position = _ref3.position,
      toastPosition = _ref3.toastPosition;
  return toastPosition[position].left;
}, function (_ref4) {
  var position = _ref4.position,
      toastPosition = _ref4.toastPosition;
  return toastPosition[position].rigth;
});
var ToastContent = styled__default["default"].div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ", "px;\n  height: ", "px;\n  width: ", "px;\n  border-radius: ", "px;\n  margin: ", "px;\n  background-color: ", ";\n"])), function (props) {
  return props.theme.spacing[4];
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.TOAST_CONTENT_HEIGTH;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.TOAST_CONTENT_WIDTH;
}, function (props) {
  return props.theme.borderRadius[1];
}, function (props) {
  return props.theme.spacing[2];
}, function (props) {
  return props.backgroundColor;
});
var ToastInfo = styled__default["default"].p(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  font-size: ", "px;\n  text-align: left;\n  height: ", "px;\n  margin: 0px;\n  margin-left: ", "px;\n  color: ", ";\n"])), function (props) {
  return props.theme.fontSize[1];
}, function (props) {
  return props.theme.spacing[7];
}, function (props) {
  return props.theme.spacing[4];
}, function (props) {
  return props.toastColor;
});
var ToastContentBlock = styled__default["default"].div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n  display: flex;\n  width: ", "%;\n  height: ", "%;\n  align-items: center;\n  & > svg {\n    width: 35px;\n    height: 35px;\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.TOAST_CONTENT_BLOCK_WIDTH;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.TOAST_CONTENT_BLOCK_HEIGTH;
});
var ToastCloseButton = styled__default["default"].div(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: relative;\n  right: ", "px;\n  top: ", "px;\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    width: ", "px;\n    height: ", "px;\n    background-color: ", ";\n  }\n  &:before {\n    transform: rotate(45deg);\n  }\n  &:after {\n    transform: rotate(-45deg);\n  }\n"])), function (props) {
  return props.theme.spacing[5];
}, function (props) {
  return props.theme.spacing[0];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.TOAST_CLOSE_BUTTON_WIDTH;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.TOAST_CLOSE_BUTTON_HEIGTH;
}, function (_ref11) {
  var isBlack = _ref11.isBlack;
  return isBlack ? 'black' : 'white';
});
styled__default["default"].img(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["\n  width: ", "px;\n  height: ", "px;\n"])), function (_ref12) {
  var theme = _ref12.theme;
  return theme.TOAS_ICON_WIDTH;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.TOAST_CLOSE_BUTTON_HEIGTHTOAS_ICON_HEIGTH;
});

var Toast = function Toast(_ref) {
  var toastList = _ref.toastList,
      position = _ref.position,
      checkValue = _ref.checkValue,
      setList = _ref.setList;
  React.useEffect(function () {
    var interval = setInterval(function () {
      if (checkValue && toastList.length) {
        handleDeleteToast(toastList[0].id)();
      }
    }, 2000);
    return function () {
      clearInterval(interval);
    };
  }, [toastList, checkValue]);

  var handleDeleteToast = function handleDeleteToast(id) {
    return function () {
      setList(_toConsumableArray(toastList.filter(function (toast) {
        return toast.id !== id;
      })));
    };
  };

  return /*#__PURE__*/React__default["default"].createElement(ModalStyles, {
    position: position,
    toastPosition: TOAST_POSITIONS
  }, toastList.map(function (toast) {
    return /*#__PURE__*/React__default["default"].createElement(ToastContent, {
      key: toast.id,
      backgroundColor: toast.backgroundColor
    }, /*#__PURE__*/React__default["default"].createElement(ToastContentBlock, null, /*#__PURE__*/React__default["default"].createElement(toast.icon, null), /*#__PURE__*/React__default["default"].createElement(ToastInfo, {
      toastColor: toast.color
    }, toast.description)), /*#__PURE__*/React__default["default"].createElement(ToastCloseButton, {
      isBlack: toast.description.includes('Warning'),
      onClick: handleDeleteToast(toast.id)
    }));
  }));
};

var ToastPortal = function ToastPortal(_ref) {
  var toastList = _ref.toastList,
      position = _ref.position,
      checkValue = _ref.checkValue,
      setList = _ref.setList;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = React.useState("".concat(Date.now())),
      _useState4 = _slicedToArray(_useState3, 1),
      portalId = _useState4[0];

  React.useEffect(function () {
    var div = document.createElement('div');
    div.id = portalId;
    document.getElementsByTagName('body')[0].prepend(div);
    setLoaded(true);
    return function () {
      return document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalId]);
  return loaded && /*#__PURE__*/ReactDOM__default["default"].createPortal( /*#__PURE__*/React__default["default"].createElement(Toast, {
    toastList: toastList,
    position: position,
    checkValue: checkValue,
    setList: setList
  }), document.getElementById(portalId));
};

var _templateObject$1;
var ButtonContent$1 = styled__default["default"].button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n  background-color: ", ";\n  border: none;\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.BUTTON_WIDTH;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.BUTTON_HEIGTH;
}, function (_ref3) {
  var _theme$borderRadius;

  var theme = _ref3.theme;
  return (_theme$borderRadius = theme.borderRadius) === null || _theme$borderRadius === void 0 ? void 0 : _theme$borderRadius[0];
}, function (_ref4) {
  var _theme$colors;

  var theme = _ref4.theme;
  return (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.white;
}, function (_ref5) {
  var _theme$colors2;

  var type = _ref5.type,
      theme = _ref5.theme;
  return (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2[type];
});

var Button = function Button(_ref) {
  var label = _ref.label,
      handleClick = _ref.handleClick,
      type = _ref.type;
  return /*#__PURE__*/React__default["default"].createElement(ButtonContent$1, {
    type: type,
    onClick: handleClick
  }, label);
};

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Content = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: ", "px;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.CONTENT_WIDTH;
});
var MainContainer = styled__default["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: ", "%;\n  height: ", "px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.MAIN_CONTAINER_WIDTH;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.MAIN_CONTAINER_HEIGTH;
});
var CheckBoxContent = styled__default["default"].label(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var CheckBoxText = styled__default["default"].p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: ", ";\n"])), function (props) {
  return props.theme.spacing[1];
});
var SelectBox = styled__default["default"].select(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: ", "px;\n  height: ", "px;\n"])), function (props) {
  return props.theme.spacing[3];
}, function (props) {
  return props.theme.spacing[7];
});
var ButtonContent = styled__default["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
var Checkbox = styled__default["default"].input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""])));
var OptionValue = styled__default["default"].option(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([""])));

var ToastNotification = function ToastNotification() {
  var _config;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checkValue = _useState2[0],
      setCheckValue = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = React.useState(TOP_RIGHT),
      _useState6 = _slicedToArray(_useState5, 2),
      position = _useState6[0],
      setPosition = _useState6[1];

  var config = (_config = {}, _defineProperty(_config, TOAST_TYPE.Success, SUCCESS_TOAST), _defineProperty(_config, TOAST_TYPE.Error, ERROR_TOAST), _defineProperty(_config, TOAST_TYPE.Info, INFO_TOAST), _defineProperty(_config, TOAST_TYPE.Warning, WARNING_TOAST), _config);

  var showToast = function showToast(type) {
    return function () {
      var id = Date.now().toString();
      var options = config[type];

      if (options) {
        setList([].concat(_toConsumableArray(list), [_objectSpread2(_objectSpread2({}, options), {}, {
          id: id
        })]));
      } else {
        setList([]);
      }
    };
  };

  var handleOnCheckBoxChange = React.useCallback(function () {
    return setCheckValue(!checkValue);
  }, [checkValue]);

  var handleSelectPosition = function handleSelectPosition(e) {
    setPosition(e.target.value);
  };

  return /*#__PURE__*/React__default["default"].createElement(styled.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React__default["default"].createElement(MainContainer, null, /*#__PURE__*/React__default["default"].createElement(Content, null, /*#__PURE__*/React__default["default"].createElement(ButtonContent, null, BUTTON_PROPS.map(function (e) {
    return /*#__PURE__*/React__default["default"].createElement(Button, {
      key: e.id,
      label: e.label,
      type: e.type,
      handleClick: showToast(e.type)
    });
  })), /*#__PURE__*/React__default["default"].createElement(CheckBoxContent, null, /*#__PURE__*/React__default["default"].createElement(Checkbox, {
    type: "checkbox",
    value: checkValue,
    onChange: handleOnCheckBoxChange
  }), /*#__PURE__*/React__default["default"].createElement(CheckBoxText, null, "Auto close")), /*#__PURE__*/React__default["default"].createElement(SelectBox, {
    value: position,
    onChange: handleSelectPosition
  }, /*#__PURE__*/React__default["default"].createElement(OptionValue, {
    value: TOP_RIGHT
  }, "Top Rigth"), /*#__PURE__*/React__default["default"].createElement(OptionValue, {
    value: TOP_LEFT
  }, "Top Left"), /*#__PURE__*/React__default["default"].createElement(OptionValue, {
    value: BOTTOM_LEFT
  }, "Bottom Rigth"), /*#__PURE__*/React__default["default"].createElement(OptionValue, {
    value: BOTTOM_RIGHT
  }, "Bottom Left")))), /*#__PURE__*/React__default["default"].createElement(ToastPortal, {
    toastList: list,
    position: position,
    checkValue: checkValue,
    setList: setList
  }), /*#__PURE__*/React__default["default"].createElement(GlobalStyles, null));
};

exports.BOTTOM_LEFT = BOTTOM_LEFT;
exports.BOTTOM_RIGHT = BOTTOM_RIGHT;
exports.BUTTON_PROPS = BUTTON_PROPS;
exports.Button = Button;
exports.ERROR = ERROR;
exports.ERROR_TOAST = ERROR_TOAST;
exports.INFO = INFO;
exports.INFO_TOAST = INFO_TOAST;
exports.SUCCESS = SUCCESS;
exports.SUCCESS_TOAST = SUCCESS_TOAST;
exports.TOAST_POSITIONS = TOAST_POSITIONS;
exports.TOAST_TYPE = TOAST_TYPE;
exports.TOP_LEFT = TOP_LEFT;
exports.TOP_RIGHT = TOP_RIGHT;
exports.Toast = Toast;
exports.ToastNotification = ToastNotification;
exports.ToastPortal = ToastPortal;
exports.WARNING = WARNING;
exports.WARNING_TOAST = WARNING_TOAST;
exports.theme = theme;
