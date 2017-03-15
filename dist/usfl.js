(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.usfl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = array;
function array(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        var val = typeof value !== 'undefined' ? value : i;
        arr.push(val);
    }
    return arr;
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clone;
function clone(arr) {
    return arr.slice(0);
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

var _nearest = require('./nearest');

var _nearest2 = _interopRequireDefault(_nearest);

var _randomChoice = require('./randomChoice');

var _randomChoice2 = _interopRequireDefault(_randomChoice);

var _sortAlpha = require('./sortAlpha');

var _sortAlpha2 = _interopRequireDefault(_sortAlpha);

var _sortNumeric = require('./sortNumeric');

var _sortNumeric2 = _interopRequireDefault(_sortNumeric);

var _sortRandom = require('./sortRandom');

var _sortRandom2 = _interopRequireDefault(_sortRandom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    array: _array2.default,
    clone: _clone2.default,
    nearest: _nearest2.default,
    randomChoice: _randomChoice2.default,
    sortAlpha: _sortAlpha2.default,
    sortNumeric: _sortNumeric2.default,
    sortRandom: _sortRandom2.default
};

},{"./array":1,"./clone":2,"./nearest":4,"./randomChoice":5,"./sortAlpha":6,"./sortNumeric":7,"./sortRandom":8}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = nearest;
function nearest(value, arr) {
    var least = Number.MAX_VALUE;
    return arr.reduce(function (result, item) {
        var diff = Math.abs(item - value);
        if (diff < least) {
            least = diff;
            result = item;
        }
        return result;
    }, -1);
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = randomChoice;
function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sortAlpha;
function sortAlpha(a, b) {
    if (arguments.length === 1) {
        return function (x, y) {
            return String(x[a]).toLowerCase() > String(y[a]).toLowerCase() ? 1 : -1;
        };
    }
    return String(a).toLowerCase() > String(b).toLowerCase() ? 1 : -1;
}

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sortNumeric;
function sortNumeric(a, b) {
    if (arguments.length === 1) {
        return function (x, y) {
            return Number(x[a]) - Number(y[a]);
        };
    }
    return Number(a) - Number(b);
}

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sortRandom;
function sortRandom() {
    return Math.random() > 0.5 ? -1 : 1;
}

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = blockScrolling;
function blockScrolling(value) {
    document.body.style.overflow = value ? 'hidden' : '';
}

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = elCoords;
function elCoords(el) {
    var box = el.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {
        top: Math.round(top),
        left: Math.round(left),
        x: Math.round(left),
        y: Math.round(top)
    };
}

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = forceRedraw;
function forceRedraw(el) {
    var display = el.style.display;
    el.style.display = 'none';
    el.offsetHeight;
    el.style.display = display;
}

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getPageHeight;
function getPageHeight() {
    var body = document.body;
    var doc = document.documentElement;

    return Math.max(body.scrollHeight || 0, body.offsetHeight || 0, body.clientHeight || 0, doc.clientHeight || 0, doc.offsetHeight || 0, doc.scrollHeight || 0);
}

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollPercentage;

var _getScrollTop = require('./getScrollTop');

var _getScrollTop2 = _interopRequireDefault(_getScrollTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollPercentage() {
    return ((0, _getScrollTop2.default)() + window.innerHeight) / document.body.clientHeight;
}

},{"./getScrollTop":15}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollRemaining;

var _getScrollTop = require('./getScrollTop');

var _getScrollTop2 = _interopRequireDefault(_getScrollTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollRemaining() {
    var b = document.body;
    return Math.abs((0, _getScrollTop2.default)() - (b.scrollHeight - b.clientHeight));
}

},{"./getScrollTop":15}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getScrollTop;
function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = getSrcsetImage;
function getSrcsetImage(srcset, pixelWidth) {
    pixelWidth = pixelWidth || window.innerWidth * (window.devicePixelRatio || 0);

    var set = srcset.split(',').map(function (item) {
        var _item$trim$split = item.trim().split(/\s+/),
            _item$trim$split2 = _slicedToArray(_item$trim$split, 2),
            url = _item$trim$split2[0],
            width = _item$trim$split2[1];

        var size = parseInt(width.slice(0, -1), 10);
        return { url: url, size: size };
    }).sort(function (a, b) {
        return b.size - a.size;
    });

    if (!set.length) {
        return '';
    }

    return set.reduce(function (value, item) {
        return item.size >= pixelWidth ? item.url : value;
    }, set[0].url);
}

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _blockScrolling = require('./blockScrolling');

var _blockScrolling2 = _interopRequireDefault(_blockScrolling);

var _elCoords = require('./elCoords');

var _elCoords2 = _interopRequireDefault(_elCoords);

var _forceRedraw = require('./forceRedraw');

var _forceRedraw2 = _interopRequireDefault(_forceRedraw);

var _getPageHeight = require('./getPageHeight');

var _getPageHeight2 = _interopRequireDefault(_getPageHeight);

var _getScrollPercentage = require('./getScrollPercentage');

var _getScrollPercentage2 = _interopRequireDefault(_getScrollPercentage);

var _getScrollRemaining = require('./getScrollRemaining');

var _getScrollRemaining2 = _interopRequireDefault(_getScrollRemaining);

var _getScrollTop = require('./getScrollTop');

var _getScrollTop2 = _interopRequireDefault(_getScrollTop);

var _getSrcsetImage = require('./getSrcsetImage');

var _getSrcsetImage2 = _interopRequireDefault(_getSrcsetImage);

var _isElementInViewport = require('./isElementInViewport');

var _isElementInViewport2 = _interopRequireDefault(_isElementInViewport);

var _isPageEnd = require('./isPageEnd');

var _isPageEnd2 = _interopRequireDefault(_isPageEnd);

var _resize = require('./resize');

var _resize2 = _interopRequireDefault(_resize);

var _scroll = require('./scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _setStyle = require('./setStyle');

var _setStyle2 = _interopRequireDefault(_setStyle);

var _transitionEnd = require('./transitionEnd');

var _transitionEnd2 = _interopRequireDefault(_transitionEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    blockScrolling: _blockScrolling2.default,
    elCoords: _elCoords2.default,
    forceRedraw: _forceRedraw2.default,
    getPageHeight: _getPageHeight2.default,
    getScrollPercentage: _getScrollPercentage2.default,
    getScrollRemaining: _getScrollRemaining2.default,
    getScrollTop: _getScrollTop2.default,
    getSrcsetImage: _getSrcsetImage2.default,
    isElementInViewport: _isElementInViewport2.default,
    isPageEnd: _isPageEnd2.default,
    resize: _resize2.default,
    scroll: _scroll2.default,
    setStyle: _setStyle2.default,
    transitionEnd: _transitionEnd2.default
};

},{"./blockScrolling":9,"./elCoords":10,"./forceRedraw":11,"./getPageHeight":12,"./getScrollPercentage":13,"./getScrollRemaining":14,"./getScrollTop":15,"./getSrcsetImage":16,"./isElementInViewport":18,"./isPageEnd":19,"./resize":20,"./scroll":21,"./setStyle":22,"./transitionEnd":23}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isElementInViewport;
function isElementInViewport(el) {
    var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var rect = el.getBoundingClientRect();
    return rect.top >= 0 - buffer && rect.left >= 0 - buffer && rect.bottom <= window.innerHeight + buffer && rect.right <= window.innerWidth + buffer;
}

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPageEnd;

var _getScrollRemaining = require('./getScrollRemaining');

var _getScrollRemaining2 = _interopRequireDefault(_getScrollRemaining);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPageEnd() {
    var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    return (0, _getScrollRemaining2.default)() <= buffer;
}

},{"./getScrollRemaining":14}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = resize;

var _eventBus = require('../events/eventBus');

var _eventBus2 = _interopRequireDefault(_eventBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resize() {
    var debouceDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;


    var timeoutId = void 0;

    // orientationchange too?

    window.addEventListener('resize', function () {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(function () {
            return _eventBus2.default.emit('resize');
        }, debouceDelay);
    });
}

},{"../events/eventBus":39}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = scroll;

var _eventBus = require('../events/eventBus');

var _eventBus2 = _interopRequireDefault(_eventBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scroll() {
    var callNow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


    var lastScrollY = 0,
        ticking = false,
        timeoutId = void 0;

    function update() {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(function () {
            return _eventBus2.default.emit('scrollend', lastScrollY);
        }, 200);

        _eventBus2.default.emit('scroll', lastScrollY);
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }

    function onScroll() {
        // lastScrollY = window.scrollY;
        lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
        requestTick();
    }

    window.addEventListener('scroll', onScroll, false);

    if (callNow) {
        onScroll();
    }
}

},{"../events/eventBus":39}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setStyle;
function setStyle(el, style) {
    Object.keys(style).forEach(function (prop) {
        el.style[prop] = style[prop];
    });
    return el;
}

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = transitionEnd;
function transitionEnd(el, cb) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;


    var timeoutId = void 0;

    function handler() {
        window.clearTimeout(timeoutId);
        el.removeEventListener('transitionend', handler);
        el.removeEventListener('webkitTransitionEnd', handler);
        cb();
    }

    if (typeof el.style.transition !== 'undefined') {
        el.addEventListener('transitionend', handler);
    } else if (typeof el.style.WebkitTransition !== 'undefined') {
        el.addEventListener('webkitTransitionEnd', handler);
    }

    timeoutId = window.setTimeout(handler, timeout);
}

},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function easeInBack(t, b, c, d) {
    var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;

    return c * (t /= d) * t * ((s + 1) * t - s) + b;
}

function easeOutBack(t, b, c, d) {
    var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;

    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}

function easeInOutBack(t, b, c, d) {
    var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.70158;

    if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}

exports.default = {
    easeIn: easeInBack,
    easeOut: easeOutBack,
    easeInOut: easeInOutBack
};
exports.easeInBack = easeInBack;
exports.easeOutBack = easeOutBack;
exports.easeInOutBack = easeInOutBack;

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function easeOutBounce(t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    }
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
}

function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
}

function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) {
        return easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    }
    return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}

exports.default = {
    easeIn: easeInBounce,
    easeOut: easeOutBounce,
    easeInOut: easeInOutBounce
};
exports.easeInBounce = easeInBounce;
exports.easeOutBounce = easeOutBounce;
exports.easeInOutBounce = easeInOutBounce;

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sqrt = Math.sqrt;


function easeInCircular(t, b, c, d) {
    return -c * (sqrt(1 - (t /= d) * t) - 1) + b;
}

function easeOutCircular(t, b, c, d) {
    return c * sqrt(1 - (t = t / d - 1) * t) + b;
}

function easeInOutCircular(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return -c / 2 * (sqrt(1 - t * t) - 1) + b;
    }
    return c / 2 * (sqrt(1 - (t -= 2) * t) + 1) + b;
}

exports.default = {
    easeIn: easeInCircular,
    easeOut: easeOutCircular,
    easeInOut: easeInOutCircular
};
exports.easeInCircular = easeInCircular;
exports.easeOutCircular = easeOutCircular;
exports.easeInOutCircular = easeInOutCircular;

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function easeInCubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
}

function easeOutCubic(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}

function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}

exports.default = {
    easeIn: easeInCubic,
    easeOut: easeOutCubic,
    easeInOut: easeInOutCubic
};
exports.easeInCubic = easeInCubic;
exports.easeOutCubic = easeOutCubic;
exports.easeInOutCubic = easeInOutCubic;

},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var abs = Math.abs,
    asin = Math.asin,
    PI = Math.PI,
    pow = Math.pow,
    sin = Math.sin;

var PI_2 = PI * 2;

function easeInElastic(t, b, c, d, a, p) {
    var s = void 0;
    if (t === 0) {
        return b;
    }
    if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (!a || a < abs(c)) {
        a = c;
        s = p / 4;
    } else {
        s = p / PI_2 * asin(c / a);
    }
    return -(a * pow(2, 10 * (t -= 1)) * sin((t * d - s) * PI_2 / p)) + b;
}

function easeOutElastic(t, b, c, d, a, p) {
    var s = void 0;
    if (t === 0) {
        return b;
    }
    if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (!a || a < abs(c)) {
        a = c;
        s = p / 4;
    } else {
        s = p / PI_2 * asin(c / a);
    }
    return a * pow(2, -10 * t) * sin((t * d - s) * PI_2 / p) + c + b;
}

function easeInOutElastic(t, b, c, d, a, p) {
    var s = void 0;
    if (t === 0) {
        return b;
    }
    if ((t /= d / 2) === 2) {
        return b + c;
    }
    if (!p) {
        p = d * (0.3 * 1.5);
    }
    if (!a || a < abs(c)) {
        a = c;
        s = p / 4;
    } else {
        s = p / PI_2 * asin(c / a);
    }
    if (t < 1) {
        return -0.5 * (a * pow(2, 10 * (t -= 1)) * sin((t * d - s) * PI_2 / p)) + b;
    }
    return a * pow(2, -10 * (t -= 1)) * sin((t * d - s) * PI_2 / p) * 0.5 + c + b;
}

exports.default = {
    easeIn: easeInElastic,
    easeOut: easeOutElastic,
    easeInOut: easeInOutElastic
};
exports.easeInElastic = easeInElastic;
exports.easeOutElastic = easeOutElastic;
exports.easeInOutElastic = easeInOutElastic;

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pow = Math.pow;


function easeInExpo(t, b, c, d) {
    return t === 0 ? b : c * pow(2, 10 * (t / d - 1)) + b;
}

function easeOutExpo(t, b, c, d) {
    return t === d ? b + c : c * (-pow(2, -10 * t / d) + 1) + b;
}

function easeInOutExpo(t, b, c, d) {
    if (t === 0) {
        return b;
    }
    if (t === d) {
        return b + c;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * pow(2, 10 * (t - 1)) + b;
    }
    return c / 2 * (-pow(2, -10 * --t) + 2) + b;
}

exports.default = {
    easeIn: easeInExpo,
    easeOut: easeOutExpo,
    easeInOut: easeInOutExpo
};
exports.easeInExpo = easeInExpo;
exports.easeOutExpo = easeOutExpo;
exports.easeInOutExpo = easeInOutExpo;

},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.easeInOutSine = exports.easeOutSine = exports.easeInSine = exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.easeInOutExpo = exports.easeOutExpo = exports.easeInExpo = exports.easeInOutElastic = exports.easeOutElastic = exports.easeInElastic = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutCircular = exports.easeOutCircular = exports.easeInCircular = exports.easeInOutBounce = exports.easeOutBounce = exports.easeInBounce = exports.easeInOutBack = exports.easeOutBack = exports.easeInBack = exports.easeLinear = exports.sine = exports.quint = exports.quart = exports.quad = exports.linear = exports.expo = exports.elastic = exports.cubic = exports.circular = exports.bounce = exports.back = undefined;

var _back = require('./back');

var _back2 = _interopRequireDefault(_back);

var _bounce = require('./bounce');

var _bounce2 = _interopRequireDefault(_bounce);

var _circular = require('./circular');

var _circular2 = _interopRequireDefault(_circular);

var _cubic = require('./cubic');

var _cubic2 = _interopRequireDefault(_cubic);

var _elastic = require('./elastic');

var _elastic2 = _interopRequireDefault(_elastic);

var _expo = require('./expo');

var _expo2 = _interopRequireDefault(_expo);

var _linear = require('./linear');

var _linear2 = _interopRequireDefault(_linear);

var _quad = require('./quad');

var _quad2 = _interopRequireDefault(_quad);

var _quart = require('./quart');

var _quart2 = _interopRequireDefault(_quart);

var _quint = require('./quint');

var _quint2 = _interopRequireDefault(_quint);

var _sine = require('./sine');

var _sine2 = _interopRequireDefault(_sine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.back = _back2.default;
exports.bounce = _bounce2.default;
exports.circular = _circular2.default;
exports.cubic = _cubic2.default;
exports.elastic = _elastic2.default;
exports.expo = _expo2.default;
exports.linear = _linear2.default;
exports.quad = _quad2.default;
exports.quart = _quart2.default;
exports.quint = _quint2.default;
exports.sine = _sine2.default;
exports.easeLinear = _linear.easeLinear;
exports.easeInBack = _back.easeInBack;
exports.easeOutBack = _back.easeOutBack;
exports.easeInOutBack = _back.easeInOutBack;
exports.easeInBounce = _bounce.easeInBounce;
exports.easeOutBounce = _bounce.easeOutBounce;
exports.easeInOutBounce = _bounce.easeInOutBounce;
exports.easeInCircular = _circular.easeInCircular;
exports.easeOutCircular = _circular.easeOutCircular;
exports.easeInOutCircular = _circular.easeInOutCircular;
exports.easeInCubic = _cubic.easeInCubic;
exports.easeOutCubic = _cubic.easeOutCubic;
exports.easeInOutCubic = _cubic.easeInOutCubic;
exports.easeInElastic = _elastic.easeInElastic;
exports.easeOutElastic = _elastic.easeOutElastic;
exports.easeInOutElastic = _elastic.easeInOutElastic;
exports.easeInExpo = _expo.easeInExpo;
exports.easeOutExpo = _expo.easeOutExpo;
exports.easeInOutExpo = _expo.easeInOutExpo;
exports.easeInQuad = _quad.easeInQuad;
exports.easeOutQuad = _quad.easeOutQuad;
exports.easeInOutQuad = _quad.easeInOutQuad;
exports.easeInQuart = _quart.easeInQuart;
exports.easeOutQuart = _quart.easeOutQuart;
exports.easeInOutQuart = _quart.easeInOutQuart;
exports.easeInQuint = _quint.easeInQuint;
exports.easeOutQuint = _quint.easeOutQuint;
exports.easeInOutQuint = _quint.easeInOutQuint;
exports.easeInSine = _sine.easeInSine;
exports.easeOutSine = _sine.easeOutSine;
exports.easeInOutSine = _sine.easeInOutSine;

/*
TERMS OF USE - EASING EQUATIONS

Open source under the BSD License.

Copyright © 2001 Robert Penner
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this
list of conditions and the following disclaimer in the documentation and/or
other materials provided with the distribution.
Neither the name of the author nor the names of contributors may be used to
endorse or promote products derived from this software without specific
prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

},{"./back":24,"./bounce":25,"./circular":26,"./cubic":27,"./elastic":28,"./expo":29,"./linear":31,"./quad":32,"./quart":33,"./quint":34,"./sine":35}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function easeLinear(t, b, c, d) {
    return c * t / d + b;
}

exports.default = {
    easeIn: easeLinear,
    easeOut: easeLinear,
    easeInOut: easeLinear
};
exports.easeLinear = easeLinear;

},{}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function easeInQuad(t, b, c, d) {
    return c * (t /= d) * t + b;
}

function easeOutQuad(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
}

function easeInOutQuad(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    }
    return -c / 2 * (--t * (t - 2) - 1) + b;
}

exports.default = {
    easeIn: easeInQuad,
    easeOut: easeOutQuad,
    easeInOut: easeInOutQuad
};
exports.easeInQuad = easeInQuad;
exports.easeOutQuad = easeOutQuad;
exports.easeInOutQuad = easeInOutQuad;

},{}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function easeInQuart(t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
}

function easeOutQuart(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    }
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}

exports.default = {
    easeIn: easeInQuart,
    easeOut: easeOutQuart,
    easeInOut: easeInOutQuart
};
exports.easeInQuart = easeInQuart;
exports.easeOutQuart = easeOutQuart;
exports.easeInOutQuart = easeInOutQuart;

},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function easeInQuint(t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
}

function easeOutQuint(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}

exports.default = {
    easeIn: easeInQuint,
    easeOut: easeOutQuint,
    easeInOut: easeInOutQuint
};
exports.easeInQuint = easeInQuint;
exports.easeOutQuint = easeOutQuint;
exports.easeInOutQuint = easeInOutQuint;

},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var cos = Math.cos,
    PI = Math.PI,
    sin = Math.sin;

var PI_D2 = PI / 2;

function easeInSine(t, b, c, d) {
    return -c * cos(t / d * PI_D2) + c + b;
}

function easeOutSine(t, b, c, d) {
    return c * sin(t / d * PI_D2) + b;
}

function easeInOutSine(t, b, c, d) {
    return -c / 2 * (cos(PI * t / d) - 1) + b;
}

exports.default = {
    easeIn: easeInSine,
    easeOut: easeOutSine,
    easeInOut: easeInOutSine
};
exports.easeInSine = easeInSine;
exports.easeOutSine = easeOutSine;
exports.easeInOutSine = easeInOutSine;

},{}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = debounce;
function debounce(handler) {
    var ticking = false;

    function update(event) {
        handler(event);
        ticking = false;
    }

    function requestTick(event) {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                return update(event);
            });
            ticking = true;
        }
    }

    return requestTick;
}

},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = delegateEvents;
function delegateEvents(parentEl, eventType, tagName, cb) {
    tagName = tagName.toUpperCase();

    parentEl.addEventListener(eventType, function (event) {
        var target = event.target;

        while (target !== parentEl) {
            if (target.tagName === tagName) {
                event.stopImmediatePropagation();
                cb(target, event);
                break;
            }
            target = target.parentNode;
        }
    });
}

},{}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emitter = function (_EventEmitter) {
    _inherits(emitter, _EventEmitter);

    function emitter() {
        _classCallCheck(this, emitter);

        var _this = _possibleConstructorReturn(this, (emitter.__proto__ || Object.getPrototypeOf(emitter)).call(this));

        _this.setMaxListeners(20);
        return _this;
    }

    _createClass(emitter, [{
        key: 'off',
        value: function off(type, listener) {
            if (listener) {
                return this.removeListener(type, listener);
            }
            if (type) {
                return this.removeAllListeners(type);
            }
            return this.removeAllListeners();
        }
    }]);

    return emitter;
}(_events.EventEmitter);

exports.default = emitter;

},{"events":109}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emitter = require('./emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.create(_emitter2.default.prototype);

// export default Object.create(EventEmitter.prototype, {
//     _events: {
//         value: {}
//     }
// });

},{"./emitter":38}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = heartbeat;

var _emitter = require('./emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function heartbeat(interval) {
    var beat = null,
        time = 0,
        numTimes = 0,
        maxTimes = 0,
        running = false;

    function start() {
        var maxNumTimes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var timeOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        maxTimes = maxNumTimes;
        time = timeOffset;
        numTimes = 0;
        running = true;
        return beat;
    }

    function stop() {
        running = false;
        return beat;
    }

    function update() {
        var dt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        if (!running) {
            return beat;
        }

        if (maxTimes > 0 && numTimes >= maxTimes) {
            running = false;
            beat.emit('complete');
            return beat;
        }

        time += dt;

        if (time >= interval) {
            time = 0;
            numTimes++;
            beat.emit('update', numTimes);
        }
        return beat;
    }

    function setInterval(value) {
        interval = value;
        return beat;
    }

    beat = Object.assign(Object.create(_emitter2.default.prototype), {
        start: start,
        stop: stop,
        update: update,
        get interval() {
            return interval;
        },
        set interval(value) {
            interval = value;
        },
        setInterval: setInterval
    });

    return beat;
}

},{"./emitter":38}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _debounce = require('./debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _delegateEvents = require('./delegateEvents');

var _delegateEvents2 = _interopRequireDefault(_delegateEvents);

var _emitter = require('./emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _eventBus = require('./eventBus');

var _eventBus2 = _interopRequireDefault(_eventBus);

var _heartbeat = require('./heartbeat');

var _heartbeat2 = _interopRequireDefault(_heartbeat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    debounce: _debounce2.default,
    delegateEvents: _delegateEvents2.default,
    emitter: _emitter2.default,
    eventBus: _eventBus2.default,
    heartbeat: _heartbeat2.default
};

},{"./debounce":36,"./delegateEvents":37,"./emitter":38,"./eventBus":39,"./heartbeat":40}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fps;
function fps(el) {

    var time = 0,
        fps = 0,
        currentFps = 0,
        averageFps = 0,
        ticks = 0,
        totalFps = 0,
        lastFps = 0,
        lastAverage = 0;

    if (!el) {
        el = document.createElement('div');
        el.setAttribute('id', 'fps');
        el.style.position = 'absolute';
        el.style.top = '0px';
        el.style.right = '0px';
        el.style.padding = '2px 6px';
        el.style.zIndex = '99999';
        el.style.background = '#000';
        el.style.color = '#fff';
        el.style.fontSize = '10px';
        document.body.appendChild(el);
    }

    function report() {
        if (currentFps === lastFps && averageFps === lastAverage) {
            return;
        }
        lastFps = currentFps;
        lastAverage = averageFps;
        el.innerHTML = 'FPS: ' + currentFps + '<br />AVE: ' + averageFps;
    }

    function update(now) {
        if (typeof now === 'undefined') {
            now = Date.now();
        }

        if (time === 0) {
            time = now;
        }

        if (now - 1000 > time) {
            time = now;
            currentFps = fps;
            fps = 0;

            if (currentFps > 1) {
                ticks++;
                totalFps += currentFps;
                averageFps = Math.floor(totalFps / ticks);
            }
            report();
        }

        fps++;
    }

    function auto() {
        window.requestAnimationFrame(auto);

        update();
    }

    return {
        auto: auto,
        update: update
    };
}

},{}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var request = null,
    exit = null,
    change = null,
    error = null,
    element = null,
    enabled = null;

var docEl = document.documentElement;

if (typeof docEl.requestFullscreen !== 'undefined') {
    request = 'requestFullscreen';
    exit = 'exitFullscreen';
    change = 'fullscreenchange';
    error = 'fullscreenerror';
    element = 'fullscreenElement';
    enabled = 'fullscreenEnabled';
} else if (typeof docEl.mozRequestFullScreen !== 'undefined') {
    request = 'mozRequestFullScreen';
    exit = 'mozCancelFullScreen';
    change = 'mozfullscreenchange';
    error = 'mozfullscreenerror';
    element = 'mozFullScreenElement';
    enabled = 'mozFullScreenEnabled';
} else if (typeof docEl.msRequestFullscreen !== 'undefined') {
    request = 'msRequestFullscreen';
    exit = 'msExitFullscreen';
    change = 'MSFullscreenChange';
    error = 'MSFullscreenError';
    element = 'msFullscreenElement';
    enabled = 'msFullscreenEnabled';
} else if (typeof docEl.webkitRequestFullscreen !== 'undefined') {
    request = 'webkitRequestFullscreen';
    exit = 'webkitExitFullscreen';
    change = 'webkitfullscreenchange';
    error = 'webkitFullscreenError';
    element = 'webkitFullscreenElement';
    enabled = 'webkitFullscreenEnabled';
}

exports.default = {
    request: request,
    exit: exit,
    change: change,
    error: error,
    element: element,
    enabled: enabled
};

},{}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _emitter = require('../events/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullscreen = Object.create(_emitter2.default.prototype);

document.addEventListener(_api2.default.change, function (event) {
    fullscreen.emit('change', event);
});

document.addEventListener(_api2.default.error, function (event) {
    fullscreen.emit('error', event);
});

Object.defineProperties(fullscreen, {
    request: {
        value: function value(el) {
            el = el || document.documentElement;
            el[_api2.default.request](true);
        }
    },
    exit: {
        value: function value() {
            document[_api2.default.exit]();
        }
    },
    toggle: {
        value: function value(el) {
            if (this.isFullscreen) {
                this.exit();
            } else {
                this.request(el);
            }
        }
    },
    isSupported: {
        get: function get() {
            return !!_api2.default.request;
        }
    },
    isFullscreen: {
        get: function get() {
            return !!document[_api2.default.element];
        }
    },
    element: {
        enumerable: true,
        get: function get() {
            return document[_api2.default.element];
        }
    },
    enabled: {
        enumerable: true,
        get: function get() {
            return document[_api2.default.enabled];
        }
    }
});

exports.default = fullscreen;

},{"../events/emitter":38,"./api":43}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getColour(r, g, b) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    if (typeof r === 'string') {
        return r;
    }
    if (typeof r === 'number') {
        return 'rgba(' + r + ',' + b + ',' + g + ',' + a + ')';
    }
    return null;
}

var Graphics = function () {
    function Graphics(width, height) {
        _classCallCheck(this, Graphics);

        if ((typeof width === 'undefined' ? 'undefined' : _typeof(width)) === 'object' && width.tagName === 'CANVAS') {
            this.canvas = width;
        } else {
            this.canvas = document.createElement('canvas');
            this.size(width, height);
        }
        this.ctx = this.canvas.getContext('2d');
    }

    _createClass(Graphics, [{
        key: 'fill',
        value: function fill(r, g, b) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            this.ctx.fillStyle = getColour(r, g, b, a);
            return this;
        }
    }, {
        key: 'stroke',
        value: function stroke(r, g, b) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            this.ctx.strokeStyle = getColour(r, g, b, a);
            return this;
        }
    }, {
        key: 'circle',
        value: function circle(x, y, radius) {
            var ctx = this.ctx;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);
            ctx.fill();
            return this;
        }
    }, {
        key: 'rect',
        value: function rect(x, y, width, height) {
            var angle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var ctx = this.ctx;

            if (angle !== 0) {
                ctx.save();
                ctx.translate(x + width / 2, y + height / 2);
                ctx.rotate(angle);
                ctx.beginPath();
                ctx.rect(-width / 2, -height / 2, width, height);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            } else {
                ctx.rect(x, y, width, height);
                ctx.fill();
                ctx.stroke();
            }
            return this;
        }
    }, {
        key: 'line',
        value: function line(x1, y1, x2, y2) {
            var ctx = this.ctx;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            return this;
        }
    }, {
        key: 'lineWidth',
        value: function lineWidth(width) {
            this.ctx.lineWidth = width;
            return this;
        }
    }, {
        key: 'move',
        value: function move(x, y) {
            this.ctx.moveTo(x, y);
            return this;
        }
    }, {
        key: 'image',
        value: function image(el, x, y) {
            var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var ctx = this.ctx;

            if (angle !== 0) {
                var offsetX = el.width / 2;
                var offsetY = el.height / 2;
                ctx.save();
                ctx.translate(x + offsetX, y + offsetY);
                ctx.rotate(angle);
                ctx.drawImage(el, -offsetX, -offsetY);
                ctx.restore();
            } else {
                ctx.drawImage(el, x, y);
            }
            return this;
        }
    }, {
        key: 'text',
        value: function text(str, x, y) {
            this.ctx.fillText(str, x, y);
            return this;
        }
    }, {
        key: 'setFontStyle',
        value: function setFontStyle(family, size) {
            this.ctx.font = size + 'px ' + family;
        }
    }, {
        key: 'getImageData',
        value: function getImageData() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var width = arguments[2];
            var height = arguments[3];
            var ctx = this.ctx,
                canvas = this.canvas;

            return ctx.getImageData(x, y, width || canvas.width, height || canvas.height);
        }
    }, {
        key: 'getPixel',
        value: function getPixel(x, y) {
            x = Math.floor(x);
            y = Math.floor(y);

            var _ctx$getImageData = this.ctx.getImageData(x, y, 1, 1),
                data = _ctx$getImageData.data;

            return Array.prototype.slice.call(data);
        }
    }, {
        key: 'setPixel',
        value: function setPixel(x, y, r, g, b, a) {
            x = Math.floor(x);
            y = Math.floor(y);

            var _getImageData = this.getImageData(),
                width = _getImageData.width,
                data = _getImageData.data;

            var i = (x + y * width) * 4;
            data[i + 0] = r;
            data[i + 1] = g;
            data[i + 2] = b;
            data[i + 3] = a;
            return this;
        }
    }, {
        key: 'clearCircle',
        value: function clearCircle(x, y) {
            var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
            var ctx = this.ctx;

            ctx.save();
            ctx.globalCompositeOperation = 'destination-out';
            this.circle(x, y, radius);
            ctx.globalCompositeOperation = 'source-over';
            ctx.restore();
            return this;
        }
    }, {
        key: 'translateAnd',
        value: function translateAnd(x, y, fn) {
            var ctx = this.ctx;

            ctx.save();
            ctx.translate(x, y);
            fn(ctx);
            ctx.restore();
            return this;
        }
    }, {
        key: 'clear',
        value: function clear(r, g, b) {
            var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

            var color = getColour(r, g, b, a);
            var ctx = this.ctx;
            var _canvas = this.canvas,
                width = _canvas.width,
                height = _canvas.height;

            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            if (color) {
                ctx.fillStyle = color;
                ctx.fillRect(0, 0, width, height);
            } else {
                ctx.clearRect(0, 0, width, height);
            }
            ctx.beginPath();
            ctx.restore();
            return this;
        }
    }, {
        key: 'size',
        value: function size() {
            var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.innerWidth;
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.innerHeight;

            this.canvas.width = width;
            this.canvas.height = height;
            return this;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.canvas.parentElement) {
                this.canvas.parentElement.removeChild(this.canvas);
            }
            this.canvas = null;
            this.ctx = null;
        }
    }, {
        key: 'context',
        get: function get() {
            return this.ctx;
        }
    }]);

    return Graphics;
}();

exports.default = Graphics;

},{}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = gui;

var _loadScript = require('../http/loadScript');

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// example usage:
//
// const opts = {
//     friction: 0.9,
//     maxSpeed: 1
// };
// gui(true)
//     .then((g) => {
//         g.add(opts, 'friction', 0.7, 0.999);
//         g.add(opts, 'maxSpeed', 0.5, 2).onChange((value) => console.log(value));
//     })
//     .catch((err) => console.error(err));

function gui() {
    var localhostOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (localhostOnly && !/^(?:https?:\/\/)?(?:localhost|192\.168)/.test(window.location.href)) {
        return new Promise(function () {});
    }
    return new Promise(function (resolve, reject) {
        (0, _loadScript2.default)('https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.1/dat.gui.min.js', function (err, src) {
            if (err) {
                console.error('Error loading script', src);
                reject(new Error('Error loading script'));
                return;
            }
            var g = new window.dat.GUI({ autoPlace: true });
            var s = document.styleSheets[0];
            s.insertRule('.dg.ac {z-index:10000 !important}', 0);
            s.insertRule('.dg * {font-size:11px !important}', 0);
            s.insertRule('.dg input {font:11px Lucida Grande,sans-serif !important}', 0);
            resolve(g);
        });
    });
}

},{"../http/loadScript":50}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getLocation;
function getLocation(href) {
    var l = document.createElement('a');
    l.href = href;

    return {
        hash: l.hash,
        host: l.host,
        hostname: l.hostname,
        pathname: l.pathname,
        port: l.port,
        protocol: l.protocol,
        search: l.search
    };
}

},{}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = require('./getLocation');

var _getLocation2 = _interopRequireDefault(_getLocation);

var _jsonp = require('./jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _loadScript = require('./loadScript');

var _loadScript2 = _interopRequireDefault(_loadScript);

var _urlParams = require('./urlParams');

var _urlParams2 = _interopRequireDefault(_urlParams);

var _xhr = require('./xhr');

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getLocation: _getLocation2.default,
    jsonp: _jsonp2.default,
    loadScript: _loadScript2.default,
    urlParams: _urlParams2.default,
    xhr: _xhr2.default
};

},{"./getLocation":47,"./jsonp":49,"./loadScript":50,"./urlParams":51,"./xhr":52}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = jsonp;
function jsonp(url, cb) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;

    var script = document.createElement('script');
    var callback = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var separator = url.indexOf('?') >= 0 ? '&' : '?';

    var timeoutId = window.setTimeout(function () {
        window[callback](null, 'jsonp error');
    }, timeout);

    window[callback] = function (data) {
        var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        window.clearTimeout(timeoutId);
        delete window[callback];
        document.body.removeChild(script);
        cb(data, err);
    };

    script.src = '' + url + separator + 'callback=' + callback;
    document.body.appendChild(script);
}

},{}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = loadScript;
function loadScript(src, cb) {
    var script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function () {
        return cb(null, src);
    });
    script.addEventListener('error', function () {
        return cb(true, src);
    });
    document.body.appendChild(script);
    return script;
}

},{}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = urlParams;
var plus = /\+/g; // match '+' symbol
var search = /([^&=]+)=?([^&]*)/g;

function decode(str) {
    return decodeURIComponent(str.replace(plus, ' '));
}

function urlParams(query) {
    query = query || window.location.search.slice(1);

    var params = {};
    var match = search.exec(query);
    while (match) {
        params[decode(match[1])] = decode(match[2]);
        match = search.exec(query);
    }
    return params;
}

},{}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = xhr;
function xhr(url) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';

    var p = new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.addEventListener('load', function () {
            var response = req.response;
            if (type === 'json' && typeof response === 'string') {
                response = JSON.parse(response);
            }
            resolve(response);
        });
        req.addEventListener('error', function () {
            return reject(req.status);
        });
        req.open('GET', url);
        req.responseType = type;
        // req.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        req.send();
    });
    return p;
}

},{}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('./polyfill');

var _array = require('./array');

var _array2 = _interopRequireDefault(_array);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _ease = require('./ease');

var _ease2 = _interopRequireDefault(_ease);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var _fps = require('./fps');

var _fps2 = _interopRequireDefault(_fps);

var _fullscreen = require('./fullscreen');

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _graphics = require('./graphics');

var _graphics2 = _interopRequireDefault(_graphics);

var _gui = require('./gui');

var _gui2 = _interopRequireDefault(_gui);

var _http = require('./http');

var _http2 = _interopRequireDefault(_http);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _linkedList = require('./linked-list');

var _linkedList2 = _interopRequireDefault(_linkedList);

var _math = require('./math');

var _math2 = _interopRequireDefault(_math);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

var _objectPool = require('./object-pool');

var _objectPool2 = _interopRequireDefault(_objectPool);

var _particle = require('./particle');

var _particle2 = _interopRequireDefault(_particle);

var _platform = require('./platform');

var _platform2 = _interopRequireDefault(_platform);

var _popup = require('./popup');

var _popup2 = _interopRequireDefault(_popup);

var _quadTree = require('./quad-tree');

var _quadTree2 = _interopRequireDefault(_quadTree);

var _share = require('./share');

var _share2 = _interopRequireDefault(_share);

var _storage = require('./storage');

var _storage2 = _interopRequireDefault(_storage);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

var _ticker = require('./ticker');

var _ticker2 = _interopRequireDefault(_ticker);

var _track = require('./track');

var _track2 = _interopRequireDefault(_track);

var _tween = require('./tween');

var _tween2 = _interopRequireDefault(_tween);

var _visibility = require('./visibility');

var _visibility2 = _interopRequireDefault(_visibility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    array: _array2.default,
    dom: _dom2.default,
    ease: _ease2.default,
    events: _events2.default,
    fps: _fps2.default,
    fullscreen: _fullscreen2.default,
    graphics: _graphics2.default,
    gui: _gui2.default,
    http: _http2.default,
    input: _input2.default,
    linkedList: _linkedList2.default,
    math: _math2.default,
    media: _media2.default,
    objectPool: _objectPool2.default,
    Particle: _particle2.default,
    ParticleGroup: _particle2.default,
    platform: _platform2.default,
    popup: _popup2.default,
    QuadTree: _quadTree2.default,
    share: _share2.default,
    storage: _storage2.default,
    string: _string2.default,
    Ticker: _ticker2.default,
    Tween: _tween2.default,
    track: _track2.default,
    visibility: _visibility2.default
};

},{"./array":3,"./dom":17,"./ease":30,"./events":41,"./fps":42,"./fullscreen":44,"./graphics":45,"./gui":46,"./http":48,"./input":55,"./linked-list":63,"./math":79,"./media":104,"./object-pool":111,"./particle":112,"./platform":118,"./polyfill":136,"./popup":138,"./quad-tree":139,"./share":144,"./storage":154,"./string":169,"./ticker":186,"./track":188,"./tween":191,"./visibility":193}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clickOutside;
function clickOutside(el, fn) {
    function onClickOutside(event) {
        var target = event.target;
        var inside = false;

        while (target !== document.body) {
            if (target === el) {
                event.stopImmediatePropagation();
                inside = true;
                break;
            }
            target = target.parentNode;
        }

        if (!inside) {
            fn(event);
        }
    }

    function onTouchOutside(event) {
        document.body.removeEventListener('click', onClickOutside);
        onClickOutside(event);
    }

    function destroy() {
        document.body.removeEventListener('click', onClickOutside);
        document.body.removeEventListener('touchstart', onTouchOutside);
    }

    destroy();

    document.body.addEventListener('click', onClickOutside);
    document.body.addEventListener('touchstart', onTouchOutside);

    return {
        destroy: destroy
    };
}

},{}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _clickOutside = require('./clickOutside');

var _clickOutside2 = _interopRequireDefault(_clickOutside);

var _keyboard = require('./keyboard');

var _keyboard2 = _interopRequireDefault(_keyboard);

var _keyInput = require('./keyInput');

var _keyInput2 = _interopRequireDefault(_keyInput);

var _microphone = require('./microphone');

var _microphone2 = _interopRequireDefault(_microphone);

var _mouseLeftWindow = require('./mouseLeftWindow');

var _mouseLeftWindow2 = _interopRequireDefault(_mouseLeftWindow);

var _mouseWheel = require('./mouseWheel');

var _mouseWheel2 = _interopRequireDefault(_mouseWheel);

var _pointerCoords = require('./pointerCoords');

var _pointerCoords2 = _interopRequireDefault(_pointerCoords);

var _touchInput = require('./touchInput');

var _touchInput2 = _interopRequireDefault(_touchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    clickOutside: _clickOutside2.default,
    keyboard: _keyboard2.default,
    keyInput: _keyInput2.default,
    microphone: _microphone2.default,
    mouseLeftWindow: _mouseLeftWindow2.default,
    mouseWheel: _mouseWheel2.default,
    pointerCoords: _pointerCoords2.default,
    touchInput: _touchInput2.default
};

},{"./clickOutside":54,"./keyInput":56,"./keyboard":57,"./microphone":58,"./mouseLeftWindow":59,"./mouseWheel":60,"./pointerCoords":61,"./touchInput":62}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = keyInput;

var _array = require('../array/array');

var _array2 = _interopRequireDefault(_array);

var _emitter = require('../events/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _keyboard = require('./keyboard');

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function keyInput() {
    var api = Object.create(_emitter2.default.prototype);
    var keys = (0, _array2.default)(256, false);

    function emitKey(keyCode) {
        var keyName = Object.keys(_keyboard2.default).reduce(function (value, key) {
            return _keyboard2.default[key] === keyCode ? key : value;
        }, '').toLowerCase();
        if (keyName) {
            api.emit(keyName.toLowerCase());
        }
    }

    function onKeyDown(event) {
        event.preventDefault();
        keys[event.keyCode] = true;
        api.emit('keydown', event.keyCode);
        emitKey(event.keyCode);
    }

    function onKeyUp(event) {
        event.preventDefault();
        keys[event.keyCode] = false;
        api.emit('keyup', event.keyCode);
    }

    function add() {
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('keyup', onKeyUp, false);
    }

    function remove() {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
    }

    function isDown(key) {
        return keys[key];
    }

    function left() {
        return keys[_keyboard2.default.LEFT] || keys[_keyboard2.default.A];
    }

    function right() {
        return keys[_keyboard2.default.RIGHT] || keys[_keyboard2.default.D];
    }

    function up() {
        return keys[_keyboard2.default.UP] || keys[_keyboard2.default.W];
    }

    function down() {
        return keys[_keyboard2.default.DOWN] || keys[_keyboard2.default.S];
    }

    function space() {
        return keys[_keyboard2.default.SPACE];
    }

    function enable() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        remove();
        if (value) {
            add();
        }
    }

    add();

    return Object.assign(api, {
        keyboard: _keyboard2.default,
        enable: enable,
        isDown: isDown,
        left: left,
        right: right,
        up: up,
        down: down,
        space: space
    });
}

},{"../array/array":1,"../events/emitter":38,"./keyboard":57}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    A: 'A'.charCodeAt(0),
    B: 'B'.charCodeAt(0),
    C: 'C'.charCodeAt(0),
    D: 'D'.charCodeAt(0),
    E: 'E'.charCodeAt(0),
    F: 'F'.charCodeAt(0),
    G: 'G'.charCodeAt(0),
    H: 'H'.charCodeAt(0),
    I: 'I'.charCodeAt(0),
    J: 'J'.charCodeAt(0),
    K: 'K'.charCodeAt(0),
    L: 'L'.charCodeAt(0),
    M: 'M'.charCodeAt(0),
    N: 'N'.charCodeAt(0),
    O: 'O'.charCodeAt(0),
    P: 'P'.charCodeAt(0),
    Q: 'Q'.charCodeAt(0),
    R: 'R'.charCodeAt(0),
    S: 'S'.charCodeAt(0),
    T: 'T'.charCodeAt(0),
    U: 'U'.charCodeAt(0),
    V: 'V'.charCodeAt(0),
    W: 'W'.charCodeAt(0),
    X: 'X'.charCodeAt(0),
    Y: 'Y'.charCodeAt(0),
    Z: 'Z'.charCodeAt(0),
    ZERO: '0'.charCodeAt(0),
    ONE: '1'.charCodeAt(0),
    TWO: '2'.charCodeAt(0),
    THREE: '3'.charCodeAt(0),
    FOUR: '4'.charCodeAt(0),
    FIVE: '5'.charCodeAt(0),
    SIX: '6'.charCodeAt(0),
    SEVEN: '7'.charCodeAt(0),
    EIGHT: '8'.charCodeAt(0),
    NINE: '9'.charCodeAt(0),
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    NUMPAD_MULTIPLY: 106,
    NUMPAD_ADD: 107,
    NUMPAD_ENTER: 108,
    NUMPAD_SUBTRACT: 109,
    NUMPAD_DECIMAL: 110,
    NUMPAD_DIVIDE: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,
    COLON: 186,
    EQUALS: 187,
    UNDERSCORE: 189,
    QUESTION_MARK: 191,
    TILDE: 192,
    OPEN_BRACKET: 219,
    BACKWARD_SLASH: 220,
    CLOSED_BRACKET: 221,
    QUOTES: 222,
    BACKSPACE: 8,
    TAB: 9,
    CLEAR: 12,
    ENTER: 13,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    INSERT: 45,
    DELETE: 46,
    HELP: 47,
    NUM_LOCK: 144
};

},{}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = microphone;

var _emitter = require('../events/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function microphone() {
    var mic = Object.create(_emitter2.default.prototype);
    var _stream = null;

    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    var _isSupported = !!getUserMedia;

    function connect() {
        if (!_isSupported) {
            mic.emit('error', 'Not supported');
            return;
        }
        getUserMedia({
            audio: true
        }, function (mediaStream) {
            _stream = mediaStream;
            mic.emit('connect', _stream);
        }, function (e) {
            if (e.name === 'PermissionDeniedError' || e === 'PERMISSION_DENIED') {
                console.log('Permission denied. Undo by clicking the camera icon in the address bar');
                mic.emit('denied');
            } else {
                mic.emit('error', e.message || e);
            }
        });
    }

    function disconnect() {
        if (_stream) {
            _stream.stop();
            _stream = null;
        }
    }

    function createWebAudioSource(webAudioContext, connectTo) {
        if (!_stream) {
            return null;
        }

        var source = webAudioContext.createMediaStreamSource(_stream);

        if (connectTo) {
            source.connect(connectTo);
        }

        // HACK: stops moz garbage collection killing the stream
        // see https://support.mozilla.org/en-US/questions/984179
        if (navigator.mozGetUserMedia) {
            window.hack_for_mozilla = source;
        }

        return source;
    }

    return Object.assign(mic, {
        connect: connect,
        disconnect: disconnect,
        createWebAudioSource: createWebAudioSource,
        isSupported: function isSupported() {
            return _isSupported;
        },
        stream: function stream() {
            return _stream;
        }
    });
}

},{"../events/emitter":38}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouseLeftWindow;
function mouseLeftWindow(cb) {
    function handler(event) {
        var from = event.relatedTarget || event.toElement;
        if (!from || from.nodeName === 'HTML') {
            cb();
        }
    }

    document.addEventListener('mouseout', handler, false);

    return {
        destroy: function destroy() {
            document.removeEventListener('mouseout', handler);
        }
    };
}

},{}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouseWheel;

var _emitter = require('../events/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mouseWheel(speed) {
    speed = speed || 2;

    var wheel = void 0;

    function wheelHandler(event) {
        var direction = event.detail < 0 || event.wheelDelta > 0 ? 1 : -1;
        var delta = direction * speed;

        if (direction > 0) {
            wheel.emit('up', delta);
        } else {
            wheel.emit('down', delta);
        }

        wheel.emit('update', delta);
    }

    function add() {
        if ('onmousewheel' in window) {
            window.addEventListener('mousewheel', wheelHandler, false);
        } else if (window.addEventListener) {
            window.addEventListener('DOMMouseScroll', wheelHandler, false);
        }
    }

    function remove() {
        if ('onmousewheel' in window) {
            window.removeEventListener('mousewheel', wheelHandler, false);
        } else if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', wheelHandler, false);
        }
    }

    add();

    wheel = Object.create(_emitter2.default.prototype, {
        _events: {
            value: {}
        },
        add: {
            value: add
        },
        remove: {
            value: remove
        }
    });

    return Object.freeze(wheel);
}

},{"../events/emitter":38}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pointerCoords;
function pointerCoords() {
    var self = void 0;

    function calculateCoords(event) {
        var pX = event.clientX || 0;
        var pY = event.clientY || 0;
        var sX = window.pageXOffset;
        var sY = window.pageYOffset;
        self.x = pX + sX;
        self.y = pY + sY;
        self.percentX = self.x / window.innerWidth;
        self.percentY = self.y / window.innerHeight;
    }

    self = {
        x: 0,
        y: 0,
        percentX: 0,
        percentY: 0,
        isListening: false,

        on: function on() {
            document.body.addEventListener('mousemove', calculateCoords);
            document.body.addEventListener('touchmove', calculateCoords);
            self.isListening = true;
            return this;
        },
        off: function off() {
            document.body.removeEventListener('mousemove', calculateCoords);
            document.body.removeEventListener('touchmove', calculateCoords);
            self.isListening = false;
            return this;
        }
    };
    return self;
}

},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = touchInput;

var _emitter = require('../events/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function touchInput(el) {
    el = el || document.body;

    var data = {
        start: [-1, -1],
        move: [-1, -1],
        end: [-1, -1],
        position: [-1, -1],
        distance: [0, 0],
        direction: ['none', 'none'],
        touching: false,
        originalEvent: null
    };

    var self = void 0;

    function touchHandler(event) {
        if (!(event && event.touches)) {
            return;
        }
        data.originalEvent = event;
        var touch = event.touches[0];
        var x = touch && touch.pageX;
        var y = touch && touch.pageY;

        switch (event.type) {
            case 'touchstart':
                data.start[0] = data.move[0] = data.end[0] = data.position[0] = x;
                data.start[1] = data.move[1] = data.end[1] = data.position[1] = y;
                data.touching = true;
                self.emit('start', data);
                break;
            case 'touchmove':
                data.move[0] = data.position[0] = x;
                data.move[1] = data.position[1] = y;
                self.emit('move', data);
                break;
            case 'touchend':
                data.end[0] = data.position[0] = x;
                data.end[1] = data.position[1] = y;
                data.touching = false;
                self.emit('end', data);
                break;
            default:
                break;
        }
    }

    function listen(elem) {
        el = elem || el;
        el.addEventListener('touchstart', touchHandler);
        el.addEventListener('touchmove', touchHandler);
        el.addEventListener('touchend', touchHandler);
        return self;
    }

    function destroy() {
        self.removeAllListeners();
        el.removeEventListener('touchstart', touchHandler);
        el.removeEventListener('touchmove', touchHandler);
        el.removeEventListener('touchend', touchHandler);
        el = null;
        return self;
    }

    listen(el);

    self = Object.create(_emitter2.default.prototype, {
        _events: {
            value: {}
        },
        listen: {
            value: listen
        },
        isDown: {
            value: function value() {
                return data.touching;
            }
        },
        getTouch: {
            value: function value() {
                return data;
            }
        },
        destroy: {
            value: destroy
        }
    });

    return Object.freeze(self);
}

},{"../events/emitter":38}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = linkedList;
function linkedList() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


    var first = void 0,
        last = void 0;

    /*
        item = {
            'next': null,
            'prev': null
        }
         var item = linkedList.getFirst();
        while(item) {
            // do stuff
            item = item.next;
        }
    */

    function remove(item) {
        if (item.next) {
            item.next.prev = item.prev;
        }
        if (item.prev) {
            item.prev.next = item.next;
        }
        if (item === first) {
            first = item.next;
        }
        if (item === last) {
            last = item.prev;
        }
        item.next = item.prev = null;

        return item;
    }

    function insertAfter(item, after) {
        remove(item);

        item.prev = after;
        item.next = after.next;

        if (!after.next) {
            last = item;
        } else {
            after.next.prev = item;
        }

        after.next = item;

        return item;
    }

    function insertBefore(item, before) {
        remove(item);

        item.prev = before.prev;
        item.next = before;

        if (!before.prev) {
            first = item;
        } else {
            before.prev.next = item;
        }

        before.prev = item;

        return item;
    }

    function add(item) {
        if (!first) {
            first = last = item;
        } else {
            var i = first;
            while (i.next) {
                i = i.next;
            }
            insertAfter(item, i);
        }
        return item;
    }

    function forEach(fn) {
        var item = first;
        while (item) {
            fn(item);
            item = item.next;
        }
    }

    function map(fn) {
        var list = linkedList();
        var item = first;
        while (item) {
            list.add(fn(item));
            item = item.next;
        }
        return list;
    }

    arr.forEach(function (item) {
        return add(item);
    });

    return {
        get first() {
            return first;
        },
        getFirst: function getFirst() {
            return first;
        },

        get last() {
            return last;
        },
        getLast: function getLast() {
            return last;
        },

        get length() {
            return this.getCount();
        },
        getCount: function getCount() {
            var count = 0;
            var i = first;
            while (i) {
                count++;
                i = i.next;
            }
            return count;
        },

        add: add,
        remove: remove,
        insertAfter: insertAfter,
        insertBefore: insertBefore,
        forEach: forEach,
        map: map
    };
}

},{}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angle;
function angle(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.atan2(dy, dx);
}

},{}],65:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cerp;
function cerp(from, to) {
    var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;

    var f = (1 - Math.cos(weight * Math.PI)) / 2;
    return from * (1 - f) + to * f;
}

},{}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = circleDistribution;
function circleDistribution(radius) {
    var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: 0, y: 0 };
    var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { x: 0, y: 0 };

    var r = Math.sqrt(Math.random()) * radius;
    var theta = Math.random() * Math.PI * 2;
    p.x = origin.x + Math.cos(theta) * r;
    p.y = origin.y + Math.sin(theta) * r;
    return p;
}

},{}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clamp;
function clamp(value, min, max) {
    if (min > max) {
        var a = min;
        min = max;
        max = a;
    }
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}

},{}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = coinToss;
function coinToss() {
    var heads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var tails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return Math.random() > 0.5 ? heads : tails;
}

},{}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = crossProduct2d;
/*
The sign tells us if a is to the left (-) or the right (+) of b
*/
function crossProduct2d(aX, aY, bX, bY) {
    return aX * bY - aY * bX;
}

},{}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = degrees;
var DEG = 180 / Math.PI;

function degrees(radians) {
    return radians * DEG;
}

},{}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = difference;
function difference(a, b) {
    return Math.abs(a - b);
}

},{}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = distance;
function distance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}

},{}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = distanceSQ;
function distanceSQ(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return dx * dx + dy * dy;
}

},{}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = dotProduct2d;
/*
- If A and B are perpendicular (at 90 degrees to each other), the result
of the dot product will be zero, because cos(Θ) will be zero.
- If the angle between A and B are less than 90 degrees, the dot product
will be positive (greater than zero), as cos(Θ) will be positive, and
the vector lengths are always positive values.
- If the angle between A and B are greater than 90 degrees, the dot
product will be negative (less than zero), as cos(Θ) will be negative,
and the vector lengths are always positive values
*/
function dotProduct2d(aX, aY, bX, bY) {
    return aX * bX + aY * bY;
}

},{}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getCirclePoints;
function getCirclePoints(originX, originY, radius, count, start, Class) {
    if (typeof start === 'undefined') {
        start = -Math.PI / 2;
    }

    var points = [],
        circ = Math.PI * 2,
        incr = circ / count;

    for (var i = start; i < circ + start; i += incr) {
        var ob = typeof Class === 'undefined' ? {} : new Class();
        ob.x = originX + radius * Math.cos(i);
        ob.y = originY + radius * Math.sin(i);
        points.push(ob);
    }

    return points;
}

},{}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getIntersectionArea;
function getIntersectionArea(aX, aY, aW, aH, bX, bY, bW, bH) {
    var overlapX = Math.max(0, Math.min(aX + aW, bX + bW) - Math.max(aX, bX));
    var overlapY = Math.max(0, Math.min(aY + aH, bY + bH) - Math.max(aY, bY));
    return overlapX * overlapY;
}

},{}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getOverlapX;
function getOverlapX(aX, aW, bX, bW) {
    return Math.max(0, Math.min(aX + aW, bX + bW) - Math.max(aX, bX));
}

},{}],78:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getOverlapY;
function getOverlapY(aY, aH, bY, bH) {
    return Math.max(0, Math.min(aY + aH, bY + bH) - Math.max(aY, bY));
}

},{}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _angle = require('./angle');

var _angle2 = _interopRequireDefault(_angle);

var _cerp = require('./cerp');

var _cerp2 = _interopRequireDefault(_cerp);

var _circleDistribution = require('./circleDistribution');

var _circleDistribution2 = _interopRequireDefault(_circleDistribution);

var _clamp = require('./clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _coinToss = require('./coinToss');

var _coinToss2 = _interopRequireDefault(_coinToss);

var _crossProduct2d = require('./crossProduct2d');

var _crossProduct2d2 = _interopRequireDefault(_crossProduct2d);

var _degrees = require('./degrees');

var _degrees2 = _interopRequireDefault(_degrees);

var _difference = require('./difference');

var _difference2 = _interopRequireDefault(_difference);

var _distance = require('./distance');

var _distance2 = _interopRequireDefault(_distance);

var _distanceSq = require('./distanceSq');

var _distanceSq2 = _interopRequireDefault(_distanceSq);

var _dotProduct2d = require('./dotProduct2d');

var _dotProduct2d2 = _interopRequireDefault(_dotProduct2d);

var _getCirclePoints = require('./getCirclePoints');

var _getCirclePoints2 = _interopRequireDefault(_getCirclePoints);

var _getIntersectionArea = require('./getIntersectionArea');

var _getIntersectionArea2 = _interopRequireDefault(_getIntersectionArea);

var _getOverlapX = require('./getOverlapX');

var _getOverlapX2 = _interopRequireDefault(_getOverlapX);

var _getOverlapY = require('./getOverlapY');

var _getOverlapY2 = _interopRequireDefault(_getOverlapY);

var _lerp = require('./lerp');

var _lerp2 = _interopRequireDefault(_lerp);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _normalize = require('./normalize');

var _normalize2 = _interopRequireDefault(_normalize);

var _orientation = require('./orientation');

var _orientation2 = _interopRequireDefault(_orientation);

var _percentRemaining = require('./percentRemaining');

var _percentRemaining2 = _interopRequireDefault(_percentRemaining);

var _perspective = require('./perspective');

var _perspective2 = _interopRequireDefault(_perspective);

var _quadraticCurve = require('./quadraticCurve');

var _quadraticCurve2 = _interopRequireDefault(_quadraticCurve);

var _radians = require('./radians');

var _radians2 = _interopRequireDefault(_radians);

var _random = require('./random');

var _random2 = _interopRequireDefault(_random);

var _randomInt = require('./randomInt');

var _randomInt2 = _interopRequireDefault(_randomInt);

var _randomSign = require('./randomSign');

var _randomSign2 = _interopRequireDefault(_randomSign);

var _rotatePoint = require('./rotatePoint');

var _rotatePoint2 = _interopRequireDefault(_rotatePoint);

var _rotateToDeg = require('./rotateToDeg');

var _rotateToDeg2 = _interopRequireDefault(_rotateToDeg);

var _rotateToRad = require('./rotateToRad');

var _rotateToRad2 = _interopRequireDefault(_rotateToRad);

var _roundTo = require('./roundTo');

var _roundTo2 = _interopRequireDefault(_roundTo);

var _roundToNearest = require('./roundToNearest');

var _roundToNearest2 = _interopRequireDefault(_roundToNearest);

var _size = require('./size');

var _size2 = _interopRequireDefault(_size);

var _smerp = require('./smerp');

var _smerp2 = _interopRequireDefault(_smerp);

var _smoothstep = require('./smoothstep');

var _smoothstep2 = _interopRequireDefault(_smoothstep);

var _splitValueAndUnit = require('./splitValueAndUnit');

var _splitValueAndUnit2 = _interopRequireDefault(_splitValueAndUnit);

var _weightedAverage = require('./weightedAverage');

var _weightedAverage2 = _interopRequireDefault(_weightedAverage);

var _weightedDistribution = require('./weightedDistribution');

var _weightedDistribution2 = _interopRequireDefault(_weightedDistribution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    angle: _angle2.default,
    cerp: _cerp2.default,
    circleDistribution: _circleDistribution2.default,
    clamp: _clamp2.default,
    coinToss: _coinToss2.default,
    crossProduct2d: _crossProduct2d2.default,
    degrees: _degrees2.default,
    difference: _difference2.default,
    distance: _distance2.default,
    distanceSq: _distanceSq2.default,
    dotProduct2d: _dotProduct2d2.default,
    getCirclePoints: _getCirclePoints2.default,
    getIntersectionArea: _getIntersectionArea2.default,
    getOverlapX: _getOverlapX2.default,
    getOverlapY: _getOverlapY2.default,
    lerp: _lerp2.default,
    map: _map2.default,
    normalize: _normalize2.default,
    orientation: _orientation2.default,
    percentRemaining: _percentRemaining2.default,
    perspective: _perspective2.default,
    quadraticCurve: _quadraticCurve2.default,
    radians: _radians2.default,
    random: _random2.default,
    randomInt: _randomInt2.default,
    randomSign: _randomSign2.default,
    rotatePoint: _rotatePoint2.default,
    rotateToDeg: _rotateToDeg2.default,
    rotateToRad: _rotateToRad2.default,
    roundTo: _roundTo2.default,
    roundToNearest: _roundToNearest2.default,
    smerp: _smerp2.default,
    smoothstep: _smoothstep2.default,
    size: _size2.default,
    splitValueAndUnit: _splitValueAndUnit2.default,
    weightedAverage: _weightedAverage2.default,
    weightedDistribution: _weightedDistribution2.default
};

},{"./angle":64,"./cerp":65,"./circleDistribution":66,"./clamp":67,"./coinToss":68,"./crossProduct2d":69,"./degrees":70,"./difference":71,"./distance":72,"./distanceSq":73,"./dotProduct2d":74,"./getCirclePoints":75,"./getIntersectionArea":76,"./getOverlapX":77,"./getOverlapY":78,"./lerp":80,"./map":81,"./normalize":82,"./orientation":83,"./percentRemaining":84,"./perspective":85,"./quadraticCurve":86,"./radians":87,"./random":88,"./randomInt":89,"./randomSign":90,"./rotatePoint":91,"./rotateToDeg":92,"./rotateToRad":93,"./roundTo":94,"./roundToNearest":95,"./size":96,"./smerp":97,"./smoothstep":98,"./splitValueAndUnit":99,"./weightedAverage":100,"./weightedDistribution":101}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lerp;
function lerp(from, to) {
    var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.3;

    return from + (to - from) * weight;
}

},{}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = map;
function map(v, a, b, x, y) {
    // value, min expected, max expected, map min, map max
    // e.g. map some value between 0 to 100 to -50 to 50
    // map(50, 0, 100, -50, 50) // 0
    // map(25, 0, 100, -50, 50) // -25
    return v === a ? x : (v - a) * (y - x) / (b - a) + x;
}

},{}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = normalize;
function normalize(value, min, max) {
    return (value - min) / (max - min);
}

},{}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = orientation;
function orientation(x, y) {
    return Math.atan2(y, x);
}

},{}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = percentRemaining;
function percentRemaining(value, total) {
    return value % total / total;
}

},{}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = perspective;
// x = x * perspective
// y = y * perspective
// scale = perspective

function perspective(z) {
    var focalLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

    return focalLength / (focalLength + z);
}

},{}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = quadraticCurve;
function quadraticCurve(fromX, fromY, cpX, cpY, toX, toY) {
    var goThroughCP = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

    var n = 20;
    var points = [fromX, fromY];
    var xa = 0;
    var ya = 0;

    if (goThroughCP) {
        cpX = cpX * 2 - (fromX + toX) / 2;
        cpY = cpY * 2 - (fromY + toY) / 2;
    }

    for (var i = 1; i <= n; ++i) {
        var j = i / n;

        xa = fromX + (cpX - fromX) * j;
        ya = fromY + (cpY - fromY) * j;

        points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
    }

    return points;
}

},{}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = radians;
var RAD = Math.PI / 180;

function radians(degrees) {
    return degrees * RAD;
}

},{}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = random;
function random(min, max) {
    if (isNaN(max)) {
        max = min;
        min = 0;
    }
    return min + Math.random() * (max - min);
}

},{}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = randomInt;
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

},{}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = randomSign;
function randomSign() {
    return Math.random() > 0.5 ? -1 : 1;
}

},{}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rotatePoint;
function rotatePoint(p, theta) {
    var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { x: 0, y: 0 };
    var p1 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { x: 0, y: 0 };

    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    p1.x = (p.x - origin.x) * cosTheta - (p.y - origin.y) * sinTheta;
    p1.y = (p.x - origin.x) * sinTheta + (p.y - origin.y) * cosTheta;
    p1.x += origin.x;
    p1.y += origin.y;
    return p1;
}

},{}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rotateToDeg;
function rotateToDeg(start, end) {
    var diff = (end - start) % 360;
    if (diff !== diff % 180) {
        diff = diff < 0 ? diff + 360 : diff - 360;
    }
    return start + diff;
}

},{}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rotateToRAD;
var PI2 = Math.PI * 2;

function rotateToRAD(start, end) {
    var diff = (end - start) % PI2;
    if (diff !== diff % Math.PI) {
        diff = diff < 0 ? diff + PI2 : diff - PI2;
    }
    return start + diff;
}

},{}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = roundTo;
function roundTo(x) {
    var places = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var div = Math.pow(10, places);
    return Math.round(x * div) / div;
}

},{}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = roundToNearest;
function roundToNearest(value, unit) {
    return Math.round(value / unit) * unit;
}

},{}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = size;
function getScale(method, width, height, areaWidth, areaHeight) {
    switch (method) {
        case 'cover':
            return Math.max(areaWidth / width, areaHeight / height);
        case 'contain':
            return Math.min(areaWidth / width, areaHeight / height);
        case 'width':
            return areaWidth / width;
        case 'height':
            return areaHeight / height;
        default:
            break;
    }
    return 1;
}

function size(rect, areaWidth, areaHeight) {
    var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'cover';
    var autoCenter = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var scale = getScale(method, rect.width, rect.height, areaWidth, areaHeight);
    var width = Math.ceil(rect.width * scale);
    var height = Math.ceil(rect.height * scale);

    var x = 0,
        y = 0;

    if (autoCenter) {
        x = Math.round((areaWidth - width) * 0.5);
        y = Math.round((areaHeight - height) * 0.5);
    }

    return {
        x: x,
        y: y,
        width: width,
        height: height,
        scale: scale
    };
}

},{}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = smerp;

var _smoothstep = require('./smoothstep');

var _smoothstep2 = _interopRequireDefault(_smoothstep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function smerp(from, to, startTime, endTime, time) {
    return from + (to - from) * (0, _smoothstep2.default)(startTime, endTime, time);
}

},{"./smoothstep":98}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = smoothstep;

var _clamp = require('./clamp');

var _clamp2 = _interopRequireDefault(_clamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function smoothstep(min, max, value) {
    var x = (0, _clamp2.default)((value - min) / (max - min), 0, 1);
    return x * x * (3 - 2 * x);
}

},{"./clamp":67}],99:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = splitValueAndUnit;
function splitValueAndUnit(prop) {
    var re = /(^-?\d*\.?\d*)(.*)/;
    var match = prop.match(re);
    var value = Number(match[1]);
    var unit = match[2];
    return { value: value, unit: unit };
}

},{}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = weightedAverage;
function weightedAverage(from, to) {
    var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    return (from * (weight - 1) + to) / weight;
}

},{}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = weightedDistribution;

var _random = require('./random');

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// greater probability of being halfway betweeen min and max

function weightedDistribution(min, max) {
    var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

    var total = 0;
    for (var i = 0; i < weight; i++) {
        total += (0, _random2.default)(min, max);
    }
    return total / weight;
}

},{"./random":88}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cuepointsReader;
function cuepointsReader() {
    var list = [];
    var reader = void 0;
    var dispatch = void 0;
    var currentPosition = 0;
    var lastPosition = -1;
    var tolerance = 0.2;

    function add(position, name, data) {
        list.push({ position: position, name: name, data: data });

        list.sort(function (a, b) {
            return a.position - b.position;
        });

        return reader;
    }

    function onCuepoint(fn, thisArg) {
        if (fn) {
            dispatch = thisArg ? fn.bind(thisArg) : fn;
        } else {
            dispatch = null;
        }
        return reader;
    }

    function reset() {
        currentPosition = 0;
        lastPosition = -1;
        return reader;
    }

    function removeAll() {
        list.length = 0;
        return reset();
    }

    function setTolerance(value) {
        tolerance = value;
        return reader;
    }

    function inRange(cuepointPos, currentPos, lastPos) {
        if (cuepointPos > currentPos) {
            return false;
        }
        if (cuepointPos <= lastPos) {
            return false;
        }

        var diff = cuepointPos - currentPos;
        if (diff < 0) {
            diff = -diff;
        }
        return diff <= tolerance;
    }

    function check(currentPos, lastPos) {
        if (currentPos <= lastPos) {
            return;
        }
        if (typeof dispatch !== 'function') {
            return;
        }

        list.some(function (item) {
            if (inRange(item.position, currentPos, lastPos)) {
                dispatch(item);
                return true;
            }
        });
    }

    function update(position) {
        currentPosition = position;
        check(currentPosition, lastPosition);
        lastPosition = currentPosition;
        return reader;
    }

    reader = Object.freeze({
        add: add,
        onCuepoint: onCuepoint,
        removeAll: removeAll,
        reset: reset,
        setTolerance: setTolerance,
        update: update
    });

    return reader;
}

},{}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iOSPlayVideoInline;
function iOSPlayVideoInline(el) {
    var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var frameTime = 1 / 25;

    var self = void 0,
        lastTime = 0,
        playing = false;

    // This can (and should) be put in a css file instead of doing styleSheets[0].insertRule:
    var cssRule = '.iOSPlayVideoInline::-webkit-media-controls { display:none !important; }';
    document.styleSheets[0].insertRule(cssRule, 0);

    el.removeAttribute('controls');
    el.classList.add('iOSPlayVideoInline');

    function seek(time) {
        el.currentTime = time;
        return self;
    }

    function pause() {
        playing = false;
        return self;
    }

    function updateFrame() {
        if (!playing) {
            return;
        }

        window.requestAnimationFrame(updateFrame);

        var now = Date.now();
        var deltaTime = now - lastTime;

        if (deltaTime >= frameTime * 1000) {
            lastTime = now;

            var ended = el.currentTime + frameTime >= el.duration;

            if (ended && loop) {
                seek(0);
            } else if (ended) {
                pause();
                // self.emit('ended');
            } else {
                seek(el.currentTime + frameTime);
            }

            // self.emit('timeupdate', el.currentTime, self);
        }
    }

    function play() {
        playing = true;
        updateFrame();
        return self;
    }

    function destroy() {
        // self.removeAllListeners();
        pause();
        window.cancelAnimationFrame(updateFrame);

        return self;
    }

    // self = Object.create(Emitter.prototype, {
    self = Object.create(null, {
        _events: {
            value: {}
        },
        destroy: {
            value: destroy
        },
        pause: {
            value: pause
        },
        play: {
            value: play
        },
        seek: {
            value: seek
        },
        el: {
            get: function get() {
                return el;
            }
        },
        currentTime: {
            get: function get() {
                return el.currentTime;
            }
        },
        duration: {
            get: function get() {
                return el.duration;
            }
        },
        loop: {
            get: function get() {
                return loop;
            },
            set: function set(value) {
                loop = value;
            }
        },
        playing: {
            get: function get() {
                return playing;
            }
        }
    });

    return Object.freeze(self);
}

},{}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cuepointsReader = require('./cuepointsReader');

var _cuepointsReader2 = _interopRequireDefault(_cuepointsReader);

var _iOSPlayVideoInline = require('./iOSPlayVideoInline');

var _iOSPlayVideoInline2 = _interopRequireDefault(_iOSPlayVideoInline);

var _videoPlayer = require('./videoPlayer');

var _videoPlayer2 = _interopRequireDefault(_videoPlayer);

var _vimeo = require('./vimeo');

var _vimeo2 = _interopRequireDefault(_vimeo);

var _youtube = require('./youtube');

var _youtube2 = _interopRequireDefault(_youtube);

var _youtubeBasic = require('./youtubeBasic');

var _youtubeBasic2 = _interopRequireDefault(_youtubeBasic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    cuepointsReader: _cuepointsReader2.default,
    iOSPlayVideoInline: _iOSPlayVideoInline2.default,
    videoPlayer: _videoPlayer2.default,
    vimeo: _vimeo2.default,
    youtube: _youtube2.default,
    youtubeBasic: _youtubeBasic2.default
};

},{"./cuepointsReader":102,"./iOSPlayVideoInline":103,"./videoPlayer":105,"./vimeo":106,"./youtube":107,"./youtubeBasic":108}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = videoPlayer;

var _emitter = require('../events/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function videoPlayer(videoEl) {
    var el = videoEl || document.createElement('video');
    var player = void 0;

    function metadataHandler() {
        player.emit('metadata', {
            src: el.currentSrc,
            width: el.videoWidth,
            height: el.videoHeight,
            duration: el.duration
        });
    }

    function canplayHandler() {
        player.emit('ready');
    }

    function playHandler() {
        player.emit('play');
    }

    function endedHandler() {
        player.emit('ended');
    }

    function errorHandler() {
        player.emit('error', el.error);
    }

    function timeupdateHandler() {
        player.emit('timeupdate', el.currentTime);
    }

    function removeEventListeners() {
        el.removeEventListener('loadedmetadata', metadataHandler);
        el.removeEventListener('canplaythrough', canplayHandler);
        el.removeEventListener('play', playHandler);
        el.removeEventListener('playing', playHandler);
        el.removeEventListener('error', errorHandler);
        el.removeEventListener('ended', endedHandler);
        el.removeEventListener('timeupdate', timeupdateHandler);
    }

    function addEventListeners() {
        removeEventListeners();

        el.addEventListener('loadedmetadata', metadataHandler, false);
        el.addEventListener('canplaythrough', canplayHandler, false);
        el.addEventListener('play', playHandler, false);
        el.addEventListener('playing', playHandler, false);
        el.addEventListener('error', errorHandler, false);
        el.addEventListener('ended', endedHandler, false);
        el.addEventListener('timeupdate', timeupdateHandler, false);
    }

    function destroy() {
        player.off();
        el.pause();

        try {
            el.removeAttribute('src');
        } catch (e) {}

        removeEventListeners();

        if (el.parentElement) {
            el.parentElement.removeChild(el);
        }

        el = null;

        return player;
    }

    function getBlobURL(url) {
        url = window.URL.createObjectURL(url);
        function revoke() {
            el.removeEventListener('canplaythrough', revoke);
            window.URL.revokeObjectURL(url);
        }
        el.addEventListener('canplaythrough', revoke);
        return url;
    }

    function load(url) {
        if (window.Blob && url instanceof window.Blob) {
            url = getBlobURL(url);
        }
        addEventListeners();

        el.crossOrigin = 'anonymous';
        el.preload = 'auto';
        el.src = url;
        el.load();

        return player;
    }

    function play() {
        el.play();

        return player;
    }

    function pause() {
        el.pause();

        return player;
    }

    function seek(time) {
        try {
            el.currentTime = time;
        } catch (e) {}

        return player;
    }

    addEventListeners();

    player = Object.create(_emitter2.default.prototype, {
        _events: {
            value: {}
        },
        destroy: {
            value: destroy
        },
        load: {
            value: load
        },
        pause: {
            value: pause
        },
        play: {
            value: play
        },
        seek: {
            value: seek
        },
        el: {
            get: function get() {
                return el;
            }
        },
        currentTime: {
            get: function get() {
                return el.currentTime;
            },
            set: function set(value) {
                el.currentTime = value;
            }
        },
        duration: {
            get: function get() {
                return el.duration;
            }
        },
        volume: {
            get: function get() {
                return el.volume;
            },
            set: function set(value) {
                el.volume = value;
            }
        }
    });

    return Object.freeze(player);
}

},{"../events/emitter":38}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = vimeo;

var _emitter = require('../events/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://developer.vimeo.com/player/js-api

function vimeo(el) {
    var vimeoPlayer = el.contentWindow;
    var re = /^https?:\/\/player.vimeo.com/;
    var player = void 0,
        origin = '*',
        _paused = false;

    function sendCommand(method) {
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        var data = {
            method: method
        };

        if (value) {
            data.value = value;
        }

        var message = JSON.stringify(data);
        vimeoPlayer.postMessage(message, origin);
    }

    function play() {
        _paused = false;
        sendCommand('play');
    }

    function pause() {
        _paused = true;
        sendCommand('pause');
    }

    function onReady() {
        sendCommand('addEventListener', 'play');
        sendCommand('addEventListener', 'pause');
        sendCommand('addEventListener', 'finish');
        sendCommand('addEventListener', 'playProgress');
        player.emit('ready');
    }

    function onPlay() {
        _paused = false;
        player.emit('play');
    }

    function onPause() {
        _paused = true;
        player.emit('pause');
    }

    function onFinish() {
        player.emit('ended');
    }

    function onPlayProgress(data) {
        player.emit('timeupdate', data.seconds);
    }

    function onMessage(event) {
        var isVimeo = re.test(event.origin);

        if (!isVimeo) {
            return;
        }

        var data = JSON.parse(event.data);

        if (data.player_id && el.id !== data.player_id) {
            return;
        }

        if (origin === '*') {
            origin = event.origin;
        }

        switch (data.event) {
            case 'ready':
                onReady(data.player_id);
                break;
            case 'playProgress':
                onPlayProgress(data.data);
                break;
            case 'play':
                onPlay();
                break;
            case 'pause':
                onPause();
                break;
            case 'finish':
                onFinish();
                break;
            default:
                break;
        }
    }

    function destroy() {
        window.removeEventListener('message', onMessage);
    }

    window.addEventListener('message', onMessage);

    player = Object.assign(Object.create(_emitter2.default.prototype), {
        _events: {},
        play: play,
        pause: pause,
        paused: function paused() {
            return _paused;
        },
        destroy: destroy
    });

    return player;
}

},{"../events/emitter":38}],107:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = youtube;

var _events = require('events');

function youtube(el) {
    var emitter = null,
        player = null,
        _paused = false;

    function play() {
        _paused = false;
        player.playVideo();
        return emitter;
    }

    function pause() {
        _paused = true;
        player.pauseVideo();
        return emitter;
    }

    function onReady() {
        emitter.emit('ready');
    }

    function onStateChange(event) {
        var PlayerState = window.YT.PlayerState;


        switch (event.data) {
            case PlayerState.CUED:
            case PlayerState.BUFFERING:
                break;
            case PlayerState.PLAYING:
                _paused = false;
                emitter.emit('play');
                break;
            case PlayerState.PAUSED:
                _paused = true;
                emitter.emit('pause');
                break;
            case PlayerState.ENDED:
                emitter.emit('ended');
                break;
            default:
                break;
        }
    }

    function destroy() {}

    function createPlayer() {
        if (player) {
            return;
        }

        player = new window.YT.Player(el, {
            events: {
                onReady: onReady,
                onStateChange: onStateChange
            }
        });
    }

    if (window.YT) {
        createPlayer();
    } else if (window.ytPlayerCalls) {
        window.ytPlayerCalls.push(createPlayer);
    } else {
        window.ytPlayerCalls = [createPlayer];
        window.onYouTubeIframeAPIReady = function () {
            window.ytPlayerCalls.forEach(function (call) {
                return call();
            });
        };
        var script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);
    }

    emitter = Object.assign(Object.create(_events.EventEmitter.prototype), {
        _events: {},
        play: play,
        pause: pause,
        paused: function paused() {
            return _paused;
        },
        destroy: destroy
    });

    return emitter;
} // https://developers.google.com/youtube/iframe_api_reference#Events

},{"events":109}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = youtubeBasic;
function youtubeBasic(el) {
    var iframe = el.contentWindow;

    function sendCommand(command) {
        iframe.postMessage('{"event":"command","func":"' + command + '","args":""}', '*');
    }

    function play() {
        sendCommand('playVideo');
    }

    function pause() {
        sendCommand('pauseVideo');
    }

    return {
        play: play,
        pause: pause
    };
}

},{}],109:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MiniSignalBinding = (function () {
  function MiniSignalBinding(fn, once, thisArg) {
    if (once === undefined) once = false;

    _classCallCheck(this, MiniSignalBinding);

    this._fn = fn;
    this._once = once;
    this._thisArg = thisArg;
    this._next = this._prev = this._owner = null;
  }

  _createClass(MiniSignalBinding, [{
    key: 'detach',
    value: function detach() {
      if (this._owner === null) return false;
      this._owner.detach(this);
      return true;
    }
  }]);

  return MiniSignalBinding;
})();

function _addMiniSignalBinding(self, node) {
  if (!self._head) {
    self._head = node;
    self._tail = node;
  } else {
    self._tail._next = node;
    node._prev = self._tail;
    self._tail = node;
  }

  node._owner = self;

  return node;
}

var MiniSignal = (function () {
  function MiniSignal() {
    _classCallCheck(this, MiniSignal);

    this._head = this._tail = undefined;
  }

  _createClass(MiniSignal, [{
    key: 'handlers',
    value: function handlers() {
      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      var node = this._head;

      if (exists) return !!node;

      var ee = [];

      while (node) {
        ee.push(node);
        node = node._next;
      }

      return ee;
    }
  }, {
    key: 'has',
    value: function has(node) {
      if (!(node instanceof MiniSignalBinding)) {
        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
      }

      return node._owner === this;
    }
  }, {
    key: 'dispatch',
    value: function dispatch() {
      var node = this._head;

      if (!node) return false;

      while (node) {
        if (node._once) this.detach(node);
        node._fn.apply(node._thisArg, arguments);
        node = node._next;
      }

      return true;
    }
  }, {
    key: 'add',
    value: function add(fn) {
      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (typeof fn !== 'function') {
        throw new Error('MiniSignal#add(): First arg must be a Function.');
      }
      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
    }
  }, {
    key: 'once',
    value: function once(fn) {
      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      if (typeof fn !== 'function') {
        throw new Error('MiniSignal#once(): First arg must be a Function.');
      }
      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
    }
  }, {
    key: 'detach',
    value: function detach(node) {
      if (!(node instanceof MiniSignalBinding)) {
        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
      }
      if (node._owner !== this) return this;

      if (node._prev) node._prev._next = node._next;
      if (node._next) node._next._prev = node._prev;

      if (node === this._head) {
        this._head = node._next;
        if (node._next === null) {
          this._tail = null;
        }
      } else if (node === this._tail) {
        this._tail = node._prev;
        this._tail._next = null;
      }

      node._owner = null;
      return this;
    }
  }, {
    key: 'detachAll',
    value: function detachAll() {
      var node = this._head;
      if (!node) return this;

      this._head = this._tail = null;

      while (node) {
        node._owner = null;
        node = node._next;
      }
      return this;
    }
  }]);

  return MiniSignal;
})();

MiniSignal.MiniSignalBinding = MiniSignalBinding;

exports['default'] = MiniSignal;
module.exports = exports['default'];

},{}],111:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = objectPool;
function objectPool(factoryFn) {

    var pool = [];
    var numCreated = 0;

    return {
        getPool: function getPool() {
            return pool;
        },
        get: function get() {
            if (pool.length > 0) {
                return pool.pop();
            } else {
                numCreated++;
                return factoryFn();
            }
        },
        dispose: function dispose(instance) {
            pool.push(instance);
        },
        fill: function fill(count) {
            while (pool.length < count) {
                numCreated++;
                pool[pool.length] = factoryFn();
            }
        },
        empty: function empty() {
            pool = [];
        },
        getNumCreated: function getNumCreated() {
            return numCreated;
        }
    };
}

},{}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var abs = Math.abs,
    atan2 = Math.atan2,
    cos = Math.cos,
    sin = Math.sin,
    sqrt = Math.sqrt;

var Particle = function () {
    function Particle(options) {
        _classCallCheck(this, Particle);

        this.opts = options;

        this._bounds = {};
        this._outerBounds = {};

        this._defaults = {
            alive: true,
            x: 0,
            y: 0,
            angle: 0,
            speed: 0,
            gravity: 0,
            mass: 1,
            radius: 0,
            bounce: { x: -1, y: -1 },
            friction: 1,
            lifeTime: 0,
            bounds: { x: 0, y: 0, width: 1280, height: 720 }
        };

        this._props = Object.keys(this._defaults);

        this.reset(options);
    }

    _createClass(Particle, [{
        key: 'reset',
        value: function reset(options) {
            var defs = this._defaults;
            var props = this._props;
            var opts = options || defs;

            for (var i = 0; i < props.length; i++) {
                var key = props[i];
                var value = opts[key] || defs[key];
                this[key] = value;
                defs[key] = value;
            }

            var angle = opts.angle || defs.angle;
            var speed = opts.speed || defs.speed;

            this.vx = cos(angle) * speed;
            this.vy = sin(angle) * speed;

            return this;
        }
    }, {
        key: 'update',
        value: function update() {
            this.vx *= this.friction;
            this.vy *= this.friction;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            return this;
        }
    }, {
        key: 'accellerate',
        value: function accellerate(speed, angle) {
            if (typeof angle === 'undefined') {
                angle = this.angle;
            }
            this.vx += cos(angle) * speed;
            this.vy += sin(angle) * speed;
            return this;
        }
    }, {
        key: 'setBounds',
        value: function setBounds(x, y, width, height) {
            this._bounds.x = x || 0;
            this._bounds.y = y || 0;
            this._bounds.width = width;
            this._bounds.height = height;
        }
    }, {
        key: 'angleTo',
        value: function angleTo(p) {
            return atan2(p.y - this.y, p.x - this.x);
        }
    }, {
        key: 'distanceTo',
        value: function distanceTo(p) {
            var dx = p.x - this.x;
            var dy = p.y - this.y;
            return sqrt(dx * dx + dy * dy);
        }
    }, {
        key: 'moveTo',
        value: function moveTo(p) {
            var thrust = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.005;

            var dx = p.x - this.x;
            var dy = p.y - this.y;

            this.vx += dx * thrust;
            this.vy += dy * thrust;

            if (abs(this.vx) > abs(dx)) {
                this.vx = dx;
            }

            if (abs(this.vy) > abs(dy)) {
                this.vy = dy;
            }

            return this;
        }
    }, {
        key: 'gravitateTo',
        value: function gravitateTo(p) {
            var dx = p.x - this.x;
            var dy = p.y - this.y;
            var distSq = dx * dx + dy * dy;
            if (distSq > 0) {
                var dist = sqrt(distSq);
                var force = p.mass / distSq;
                var ax = dx / dist * force;
                var ay = dy / dist * force;
                this.vx += ax;
                this.vy += ay;
            }

            return this;
        }
    }, {
        key: 'springTo',
        value: function springTo(p, stiffness, length) {
            var dx = p.x - this.x;
            var dy = p.y - this.y;
            var distance = sqrt(dx * dx + dy * dy);
            var force = (distance - (length || 0)) * (stiffness || 0.2);

            if (abs(distance * force) > 0) {
                this.vx += dx / distance * force;
                this.vy += dy / distance * force;
            }

            return this;
        }
    }, {
        key: 'collides',
        value: function collides(p) {
            return this.distanceTo(p) <= this.radius + p.radius;
        }
    }, {
        key: 'edgeCollide',
        value: function edgeCollide() {
            var left = this._bounds.x + this.radius;
            var right = this._bounds.x + this._bounds.width - this.radius;
            var top = this._bounds.y + this.radius;
            var bottom = this._bounds.y + this._bounds.height - this.radius;

            if (this.x < left) {
                this.x = left;
                this.vx = this.vx * this.bounce.x;
            }

            if (this.x > right) {
                this.x = right;
                this.vx = this.vx * this.bounce.x;
            }

            if (this.y < top) {
                this.y = top;
                this.vy = this.vy * this.bounce.y;
            }

            if (this.y > bottom) {
                this.y = bottom;
                this.vy = this.vy * this.bounce.y;
            }
        }
    }, {
        key: 'edgeWrap',
        value: function edgeWrap() {
            var _outerBounds = this.outerBounds,
                left = _outerBounds.left,
                right = _outerBounds.right,
                top = _outerBounds.top,
                bottom = _outerBounds.bottom;


            if (this.x < left) {
                this.x = right;
            }

            if (this.x > right) {
                this.x = left;
            }

            if (this.y < top) {
                this.y = bottom;
            }

            if (this.y > bottom) {
                this.y = top;
            }
        }
    }, {
        key: 'edgeKill',
        value: function edgeKill() {
            var _outerBounds2 = this.outerBounds,
                left = _outerBounds2.left,
                right = _outerBounds2.right,
                top = _outerBounds2.top,
                bottom = _outerBounds2.bottom;


            if (this.x < left || this.x > right || this.y < top || this.y > bottom) {
                this.alive = false;
            }
        }
    }, {
        key: 'edgeReset',
        value: function edgeReset() {
            var _outerBounds3 = this.outerBounds,
                left = _outerBounds3.left,
                right = _outerBounds3.right,
                top = _outerBounds3.top,
                bottom = _outerBounds3.bottom;


            if (this.x < left || this.x > right || this.y < top || this.y > bottom) {
                this.reset();
            }
        }
    }, {
        key: 'lifeKill',
        value: function lifeKill() {
            this.lifeTime--;

            if (this.lifeTime <= 0) {
                this.alive = false;
            }
        }
    }, {
        key: 'speed',
        get: function get() {
            if (this.vx === 0 && this.vy === 0) {
                return 0;
            }
            return sqrt(this.vx * this.vx + this.vy * this.vy);
        },
        set: function set(value) {
            var angle = this.angle;
            this.vx = cos(angle) * value;
            this.vy = sin(angle) * value;
        }
    }, {
        key: 'angle',
        get: function get() {
            if (this.vx === 0 && this.vy === 0) {
                return 0;
            }
            return atan2(this.vy, this.vx);
        },
        set: function set(value) {
            var speed = this.speed;
            this.vx = cos(value) * speed;
            this.vy = sin(value) * speed;
        }
    }, {
        key: 'bounds',
        get: function get() {
            return this._bounds;
        },
        set: function set(ob) {
            var x = ob.x,
                y = ob.y,
                width = ob.width,
                height = ob.height;

            this.setBounds(x, y, width, height);
        }
    }, {
        key: 'left',
        get: function get() {
            return this.x - this.radius;
        }
    }, {
        key: 'right',
        get: function get() {
            return this.x + this.radius;
        }
    }, {
        key: 'top',
        get: function get() {
            return this.y - this.radius;
        }
    }, {
        key: 'bottom',
        get: function get() {
            return this.y + this.radius;
        }
    }, {
        key: 'outerBounds',
        get: function get() {
            this._outerBounds.left = this._bounds.x - this.radius;
            this._outerBounds.right = this._bounds.x + this._bounds.width + this.radius;
            this._outerBounds.top = this._bounds.y - this.radius;
            this._outerBounds.bottom = this._bounds.y + this._bounds.height + this.radius;
            return this._outerBounds;
        }
    }]);

    return Particle;
}();

exports.default = Particle;

},{}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = androidNative;

var _android = require('../os/android');

var _android2 = _interopRequireDefault(_android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//http://stackoverflow.com/questions/14403766/how-to-detect-the-stock-android-browser
function androidNative() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    if (!(0, _android2.default)(ua)) {
        return false;
    }

    var isAndroidMobile = ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('AppleWebKit') > -1;

    var reAppleWebKit = /AppleWebKit\/([\d.]+)/;
    var resultAppleWebKit = reAppleWebKit.exec(ua);
    var appleWebKitVersion = resultAppleWebKit ? parseFloat(reAppleWebKit.exec(ua)[1]) : null;

    var reChrome = /Chrome\/([\d.]+)/;
    var resultChrome = reChrome.exec(ua);
    var chromeVersion = resultChrome ? parseFloat(reChrome.exec(ua)[1]) : null;

    return isAndroidMobile && appleWebKitVersion && appleWebKitVersion < 537 || chromeVersion && chromeVersion < 37;
}

},{"../os/android":119}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ieVersion;
function ieVersion() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    var v = 0;
    if (/MSIE (\d+\.\d+);/.test(ua)) {
        v = parseInt(RegExp.$1, 10);
    } else if (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(ua)) {
        v = parseInt(RegExp.$3, 10);
    }
    return v;
}

},{}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _os = require('../os');

var _os2 = _interopRequireDefault(_os);

var _ieVersion = require('./ieVersion');

var _ieVersion2 = _interopRequireDefault(_ieVersion);

var _androidNative = require('./androidNative');

var _androidNative2 = _interopRequireDefault(_androidNative);

var _safari = require('./safari');

var _safari2 = _interopRequireDefault(_safari);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ua = navigator.userAgent;
var chromeiOS = function chromeiOS() {
    return _os2.default.ios() && /CriOS/.test(ua);
};
var firefox = function firefox() {
    return (/Firefox/.test(ua)
    );
};
var ie = function ie() {
    return (0, _ieVersion2.default)() > 0;
};
var safariMobile = function safariMobile() {
    return _os2.default.ios() && /AppleWebKit/.test(ua);
};

exports.default = {
    androidNative: _androidNative2.default,
    chromeiOS: chromeiOS,
    firefox: firefox,
    ie: ie,
    ieVersion: _ieVersion2.default,
    safari: _safari2.default,
    safariMobile: safariMobile
};

},{"../os":121,"./androidNative":113,"./ieVersion":114,"./safari":116}],116:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = safari;
function safari() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    return !/Android/.test(ua) && !/Chrome/.test(ua) && /Safari/.test(ua);
}

},{}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ua = navigator.userAgent;

var ipad = function ipad() {
    return (/iPad/i.test(ua)
    );
};
var ipod = function ipod() {
    return (/iPod/i.test(ua)
    );
};
var iphone = function iphone() {
    return (/iPhone/i.test(ua)
    );
};
var mobile = function mobile() {
    return !!ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|SymbianOS/i);
};
var desktop = function desktop() {
    return !mobile();
};

exports.default = {
    desktop: desktop,
    ipad: ipad,
    iphone: iphone,
    ipod: ipod,
    mobile: mobile
};

},{}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _browser = require('./browser');

var _browser2 = _interopRequireDefault(_browser);

var _device = require('./device');

var _device2 = _interopRequireDefault(_device);

var _os = require('./os');

var _os2 = _interopRequireDefault(_os);

var _supports = require('./supports');

var _supports2 = _interopRequireDefault(_supports);

var _screen = require('./screen');

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var local = /^(?:https?:\/\/)?(?:localhost|192\.168)/.test(window.location.href);

exports.default = {
    browser: _browser2.default,
    device: _device2.default,
    os: _os2.default,
    supports: _supports2.default,
    screen: _screen2.default,
    local: local
};

},{"./browser":115,"./device":117,"./os":121,"./screen":128,"./supports":130}],119:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    return (/Android/i.test(ua)
    );
};

},{}],120:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = androidVersion;

var _android = require('./android');

var _android2 = _interopRequireDefault(_android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function androidVersion() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    if (!(0, _android2.default)(ua)) {
        return 0;
    }
    var version = ua.match(/Android (\d+(?:\.\d+)+);/)[1];

    var _version$split = version.split('.'),
        _version$split2 = _slicedToArray(_version$split, 2),
        a = _version$split2[0],
        b = _version$split2[1];

    return parseFloat(a + '.' + b);
}

},{"./android":119}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _android = require('./android');

var _android2 = _interopRequireDefault(_android);

var _androidVersion = require('./androidVersion');

var _androidVersion2 = _interopRequireDefault(_androidVersion);

var _ios = require('./ios');

var _ios2 = _interopRequireDefault(_ios);

var _iosVersion = require('./iosVersion');

var _iosVersion2 = _interopRequireDefault(_iosVersion);

var _linux = require('./linux');

var _linux2 = _interopRequireDefault(_linux);

var _mac = require('./mac');

var _mac2 = _interopRequireDefault(_mac);

var _windows = require('./windows');

var _windows2 = _interopRequireDefault(_windows);

var _windowsPhone = require('./windowsPhone');

var _windowsPhone2 = _interopRequireDefault(_windowsPhone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    android: _android2.default,
    androidVersion: _androidVersion2.default,
    ios: _ios2.default,
    iosVersion: _iosVersion2.default,
    linux: _linux2.default,
    mac: _mac2.default,
    windows: _windows2.default,
    windowsPhone: _windowsPhone2.default
};

},{"./android":119,"./androidVersion":120,"./ios":122,"./iosVersion":123,"./linux":124,"./mac":125,"./windows":126,"./windowsPhone":127}],122:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ios;
function ios() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    return (/iP[ao]d|iPhone/i.test(ua)
    );
}

},{}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = iosVersion;

var _ios = require('./ios');

var _ios2 = _interopRequireDefault(_ios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function iosVersion() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    if ((0, _ios2.default)(ua)) {
        var _ua$match = ua.match(/OS (\d+)_(\d+)/i),
            _ua$match2 = _slicedToArray(_ua$match, 3),
            b = _ua$match2[1],
            c = _ua$match2[2];

        if (b && c) {
            return parseFloat(b + '.' + c);
        }
    }
    return 0;
}

},{"./ios":122}],124:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = linux;

var _android = require('./android');

var _android2 = _interopRequireDefault(_android);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linux() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    return !(0, _android2.default)(ua) && /Linux/.test(ua);
}

},{"./android":119}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mac;

var _ios = require('./ios');

var _ios2 = _interopRequireDefault(_ios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mac() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    return !(0, _ios2.default)(ua) && /Mac OS/.test(ua);
}

},{"./ios":122}],126:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = windows;

var _windowsPhone = require('./windowsPhone');

var _windowsPhone2 = _interopRequireDefault(_windowsPhone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function windows() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    return !(0, _windowsPhone2.default)(ua) && /Windows/.test(ua);
}

},{"./windowsPhone":127}],127:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = windowsPhone;
function windowsPhone() {
    var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : navigator.userAgent;

    return (/Windows Phone/i.test(ua)
    );
}

},{}],128:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// screen.width / screen.height is often wrong in Android
var height = function height() {
    return Math.max(window.outerHeight, window.screen.height);
};
var width = function width() {
    return Math.max(window.outerWidth, window.screen.width);
};
var dpr = function dpr() {
    return window.devicePixelRatio || 1;
};
var retina = function retina() {
    return dpr() > 1;
};

exports.default = {
    width: width,
    height: height,
    dpr: dpr,
    retina: retina
};

},{}],129:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return !!window.DeviceOrientationEvent;
};

},{}],130:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _webgl = require('./webgl');

var _webgl2 = _interopRequireDefault(_webgl);

var _webm = require('./webm');

var _webm2 = _interopRequireDefault(_webm);

var _mp = require('./mp4');

var _mp2 = _interopRequireDefault(_mp);

var _deviceOrientation = require('./deviceOrientation');

var _deviceOrientation2 = _interopRequireDefault(_deviceOrientation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    webgl: _webgl2.default,
    webm: _webm2.default,
    mp4: _mp2.default,
    deviceOrientation: _deviceOrientation2.default
};

},{"./deviceOrientation":129,"./mp4":131,"./webgl":132,"./webm":133}],131:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var videoEl = document.createElement('video');

exports.default = function () {
  return !!(videoEl.canPlayType && videoEl.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'));
};

},{}],132:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = webgl;
function webgl() {
    try {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!(window.WebGLRenderingContext && context);
    } catch (e) {
        return false;
    }
}

},{}],133:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var videoEl = document.createElement('video');

exports.default = function () {
  return !!(videoEl.canPlayType && videoEl.canPlayType('video/webm; codecs="vp8, vorbis"'));
};

},{}],134:[function(require,module,exports){
'use strict';

/*
 * classList (partial polyfill for IE 10, IE 11 and Firefox <24)
 * adapted from: https://github.com/eligrey/classList.js/blob/master/classList.js
 */

(function () {

    var testElement = document.createElement('_');

    testElement.classList.add('c1', 'c2');

    // Polyfill for IE 10/11 and Firefox <26, where classList.add and
    // classList.remove exist but support only one argument at a time.
    if (!testElement.classList.contains('c2')) {
        var createMethod = function createMethod(method) {
            var original = window.DOMTokenList.prototype[method];

            window.DOMTokenList.prototype[method] = function (token) {
                var i = void 0;
                var len = arguments.length;

                for (i = 0; i < len; i++) {
                    token = arguments[i];
                    original.call(this, token);
                }
            };
        };

        createMethod('add');
        createMethod('remove');
    }

    testElement.classList.toggle('c3', false);

    // Polyfill for IE 10, IE 11 and Firefox <24, where classList.toggle does not
    // support the second argument.
    if (testElement.classList.contains('c3')) {
        var toggle = window.DOMTokenList.prototype.toggle;

        window.DOMTokenList.prototype.toggle = function (token, force) {
            force = !!force;
            if (arguments.length > 1 && this.contains(token) === force) {
                return force;
            } else {
                return toggle.call(this, token);
            }
        };
    }

    testElement = null;
})();

},{}],135:[function(require,module,exports){
'use strict';

(function (fn) {
    window.console = window.console || {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'memory', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'timeline', 'timelineEnd', 'trace', 'warn'];
    methods.forEach(function (name) {
        window.console[name] = window.console[name] || fn;
    });
})(function () {});

},{}],136:[function(require,module,exports){
'use strict';

require('./classList');

require('./console');

require('./requestAnimationFrame');

},{"./classList":134,"./console":135,"./requestAnimationFrame":137}],137:[function(require,module,exports){
'use strict';

/*
 * requestAnimationFrame (ios6 and android < 4.4)
 */

(function () {
    if (!window.requestAnimationFrame) {
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
    }
})();

},{}],138:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = popup;
function popup(url) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 800;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 600;
    var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var left = (window.screen.width - width) / 2;
    var top = (window.screen.height - height) / 2;
    // const left = (window.screen.availWidth - width) / 2;
    // const top = (window.screen.availHeight - height) / 2;
    var defaults = 'directories=no,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no';
    var params = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',' + defaults;
    var win = window.open(url, name, params);
    if (win === null || typeof win === 'undefined') {
        return false;
    }
    if (window.focus) {
        win.focus();
    }
    return true;
}

},{}],139:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(bounds, depth, maxDepth, maxChildren) {
        _classCallCheck(this, Node);

        this._bounds = bounds;
        this._depth = depth;
        this._maxDepth = maxDepth;
        this._maxChildren = maxChildren;

        this.children = [];
        this.nodes = [];
    }

    _createClass(Node, [{
        key: "insert",
        value: function insert(item) {
            if (this.nodes.length) {
                var index = this._findIndex(item);
                this.nodes[index].insert(item);
                return;
            }

            this.children.push(item);

            if (!(this._depth >= this._maxDepth) && this.children.length > this._maxChildren) {

                this.subdivide();

                for (var i = 0; i < this.children.length; i++) {
                    this.insert(this.children[i]);
                }

                this.children.length = 0;
            }
        }
    }, {
        key: "retrieve",
        value: function retrieve(item) {
            if (this.nodes.length) {
                var index = this._findIndex(item);
                return this.nodes[index].retrieve(item);
            }

            return this.children;
        }
    }, {
        key: "_findIndex",
        value: function _findIndex(item) {
            var _bounds = this._bounds,
                x = _bounds.x,
                y = _bounds.y,
                width = _bounds.width,
                height = _bounds.height;


            var right = item.x > x + width / 2;
            var bottom = item.y > y + height / 2;

            var index = void 0;

            if (right) {
                index = bottom ? Node.BR : Node.TR;
            } else {
                index = bottom ? Node.BL : Node.TL;
            }

            return index;
        }
    }, {
        key: "subdivide",
        value: function subdivide() {
            var depth = this._depth + 1;

            var _bounds2 = this._bounds,
                x = _bounds2.x,
                y = _bounds2.y,
                width = _bounds2.width,
                height = _bounds2.height;

            var w = width / 2;
            var h = height / 2;

            this.nodes[Node.TL] = new Node({
                x: x,
                y: y,
                width: w,
                height: h
            }, depth, this._maxDepth, this._maxChildren);

            this.nodes[Node.TR] = new Node({
                x: x + w,
                y: y,
                width: w,
                height: h
            }, depth, this._maxDepth, this._maxChildren);

            this.nodes[Node.BL] = new Node({
                x: x,
                y: y + h,
                width: w,
                height: h
            }, depth, this._maxDepth, this._maxChildren);

            this.nodes[Node.BR] = new Node({
                x: x + w,
                y: y + h,
                width: w,
                height: h
            }, depth, this._maxDepth, this._maxChildren);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.children.length = 0;

            while (this.nodes.length) {
                this.nodes.pop().clear();
            }
        }
    }]);

    return Node;
}();

Node.TL = 0;
Node.TR = 1;
Node.BL = 2;
Node.BR = 3;

var QuadTree = function () {
    function QuadTree(bounds) {
        var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var maxChildren = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        _classCallCheck(this, QuadTree);

        this.root = new Node(bounds, 0, maxDepth, maxChildren);
    }

    _createClass(QuadTree, [{
        key: "insert",
        value: function insert(item) {
            if (Array.isArray(item)) {
                for (var i = 0; i < item.length; i++) {
                    this.root.insert(item[i]);
                }
            } else {
                this.root.insert(item);
            }
        }
    }, {
        key: "clear",
        value: function clear() {
            this.root.clear();
        }
    }, {
        key: "retrieve",
        value: function retrieve(item) {
            return this.root.retrieve(item);
        }
    }]);

    return QuadTree;
}();

exports.default = QuadTree;

},{}],140:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = email;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function email(url) {
    var subject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    url = encodeURIComponent(url);
    subject = encodeURIComponent(subject);

    var newlines = encodeURIComponent('\r\n\r\n');
    body = body ? '' + encodeURIComponent(body) + newlines : '';

    return (0, _popup2.default)('mailto:?subject=' + subject + '&body=' + body + url);
}

},{"../popup":138}],141:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = facebook;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function facebook(url) {
    url = encodeURIComponent(url);
    return (0, _popup2.default)('https://www.facebook.com/sharer/sharer.php?u=' + url);
}

},{"../popup":138}],142:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = facebookFeedDialog;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function facebookFeedDialog(appId, redirect, url) {
    var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var image = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var caption = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
    var desc = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
    var source = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';

    title = encodeURIComponent(title);
    caption = encodeURIComponent(caption);
    desc = encodeURIComponent(desc);

    var params = '?display=popup&show_error=true&app_id=' + appId + '&source=' + source + '&redirect_uri=' + redirect;
    var content = 'name=' + title + '&link=' + url + '&caption=' + caption + '&description=' + desc + '&picture=' + image;

    return (0, _popup2.default)('https://www.facebook.com/dialog/feed?' + params + '&' + content);
}

},{"../popup":138}],143:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = googleplus;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function googleplus(url) {
    url = encodeURIComponent(url);
    return (0, _popup2.default)('https://plus.google.com/share?url=' + url);
}

},{"../popup":138}],144:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _email = require('./email');

var _email2 = _interopRequireDefault(_email);

var _facebook = require('./facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _facebookFeedDialog = require('./facebookFeedDialog');

var _facebookFeedDialog2 = _interopRequireDefault(_facebookFeedDialog);

var _googleplus = require('./googleplus');

var _googleplus2 = _interopRequireDefault(_googleplus);

var _linkedin = require('./linkedin');

var _linkedin2 = _interopRequireDefault(_linkedin);

var _pinterest = require('./pinterest');

var _pinterest2 = _interopRequireDefault(_pinterest);

var _reddit = require('./reddit');

var _reddit2 = _interopRequireDefault(_reddit);

var _renren = require('./renren');

var _renren2 = _interopRequireDefault(_renren);

var _sms = require('./sms');

var _sms2 = _interopRequireDefault(_sms);

var _twitter = require('./twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _vkontakte = require('./vkontakte');

var _vkontakte2 = _interopRequireDefault(_vkontakte);

var _weibo = require('./weibo');

var _weibo2 = _interopRequireDefault(_weibo);

var _whatsapp = require('./whatsapp');

var _whatsapp2 = _interopRequireDefault(_whatsapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    email: _email2.default,
    facebook: _facebook2.default,
    facebookFeedDialog: _facebookFeedDialog2.default,
    googleplus: _googleplus2.default,
    linkedin: _linkedin2.default,
    pinterest: _pinterest2.default,
    reddit: _reddit2.default,
    renren: _renren2.default,
    sms: _sms2.default,
    twitter: _twitter2.default,
    vkontakte: _vkontakte2.default,
    weibo: _weibo2.default,
    whatsapp: _whatsapp2.default
};

},{"./email":140,"./facebook":141,"./facebookFeedDialog":142,"./googleplus":143,"./linkedin":145,"./pinterest":146,"./reddit":147,"./renren":148,"./sms":149,"./twitter":150,"./vkontakte":151,"./weibo":152,"./whatsapp":153}],145:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = linkedin;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkedin(url) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    url = encodeURIComponent(url);
    title = encodeURIComponent(title);
    return (0, _popup2.default)('https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title);
}

},{"../popup":138}],146:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pinterest;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pinterest(url, media) {
    var desc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    url = encodeURIComponent(url);
    media = encodeURIComponent(media);
    desc = encodeURIComponent(desc);
    return (0, _popup2.default)('https://pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + desc);
}

},{"../popup":138}],147:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reddit;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reddit(url) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    url = encodeURIComponent(url);
    title = encodeURIComponent(title);
    return (0, _popup2.default)('https://www.reddit.com/submit?url=' + url + '&title=' + title);
}

},{"../popup":138}],148:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = vkontakte;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function vkontakte(url) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    url = encodeURIComponent(url);
    title = encodeURIComponent(title);
    return (0, _popup2.default)('http://share.renren.com/share/buttonshare.do?link=' + url + '&title=' + title);
}

},{"../popup":138}],149:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sms;
function sms(url) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    url = encodeURIComponent(url);

    var newlines = encodeURIComponent('\r\n\r\n');
    body = body ? '' + encodeURIComponent(body) + newlines : '';

    var ios = /iP[ao]d|iPhone/i.test(navigator.userAgent);
    var delim = ios ? '&' : '?';

    window.location.href = 'sms:' + delim + 'body=' + body + url;
}

},{}],150:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = twitter;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function twitter(url) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var hashtags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var related = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    url = encodeURIComponent(url);
    text = encodeURIComponent(text);
    hashtags = encodeURIComponent(hashtags);
    related = encodeURIComponent(related);

    return (0, _popup2.default)('https://twitter.com/intent/tweet?url=' + url + '&text=' + text + '&hashtags=' + hashtags + '&related=' + related);
}

},{"../popup":138}],151:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = vkontakte;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function vkontakte(url) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var image = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    url = encodeURIComponent(url);
    title = encodeURIComponent(title);
    description = encodeURIComponent(description);
    image = encodeURIComponent(image);
    return (0, _popup2.default)('http://vkontakte.ru/share.php?url=' + url + '&title=' + title + '&description=' + description + '&image=' + image);
}

},{"../popup":138}],152:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = weibo;

var _popup = require('../popup');

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function weibo(url) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    url = encodeURIComponent(url);
    title = encodeURIComponent(title);
    image = encodeURIComponent(image);

    var params = 'url=' + url + '&appkey=&title=' + title + '&pic=' + image + '&ralateUid=&language=zh_cn';
    return (0, _popup2.default)('http://service.weibo.com/share/share.php?' + params);
}

},{"../popup":138}],153:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = whatsapp;
function whatsapp(url) {
    var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    url = encodeURIComponent(url);

    var newlines = encodeURIComponent('\r\n\r\n');
    body = body ? '' + encodeURIComponent(body) + newlines : '';

    window.location.href = 'whatsapp://send?text=' + body + url;
}

},{}],154:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function load(key) {
    var item = null;

    try {
        item = localStorage.getItem(key);
    } catch (err) {}

    return item;
}

function save(key, item) {
    try {
        localStorage.setItem(key, item);
        return true;
    } catch (err) {
        console.error('Couldn\'t save in localStorage');
    }
}

function loadJSON(key) {
    var item = load(key);
    return item ? JSON.parse(item) : null;
}

function saveJSON(key, item) {
    return save(key, JSON.stringify(item));
}

function remove(key) {
    try {
        localStorage.removeItem(key);
    } catch (err) {}
}

exports.default = { load: load, save: save, loadJSON: loadJSON, saveJSON: saveJSON, remove: remove };

},{}],155:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = afterFirst;
// everything after the first occurrence of substr in str
function afterFirst(str, substr) {
    var index = str.indexOf(substr);
    if (index === -1) {
        return '';
    }
    index += substr.length;
    return str.slice(index);
}

},{}],156:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = afterLast;
// everything after the last occurence of substr in str
function afterLast(str, substr) {
    var index = str.lastIndexOf(substr);
    if (index === -1) {
        return '';
    }
    index += substr.length;
    return str.slice(index);
}

},{}],157:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = beforeFirst;
// everything before the first occurrence of substr in str
function beforeFirst(str, substr) {
    var index = str.indexOf(substr);
    if (index === -1) {
        return '';
    }
    return str.slice(0, index);
}

},{}],158:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = beforeLast;
// everything before the last occurrence of substr in the string.
function beforeLast(str, substr) {
    var index = str.lastIndexOf(substr);
    if (index === -1) {
        return '';
    }
    return str.slice(0, index);
}

},{}],159:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = beginsWith;
// whether str begins with substr
function beginsWith(str, substr) {
    return str.indexOf(substr) === 0;
}

},{}],160:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = between;
// everything after the first occurance of start and before the first occurrence of end
function between(str, start, end) {
    var substr = '';
    var startIndex = str.indexOf(start);
    if (startIndex !== -1) {
        startIndex += start.length;
        var endIndex = str.indexOf(end, startIndex);
        if (endIndex !== -1) {
            substr = str.slice(startIndex, endIndex);
        }
    }
    return substr;
}

},{}],161:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = block;

var _escapePattern = require('./escapePattern');

var _escapePattern2 = _interopRequireDefault(_escapePattern);

var _truncate = require('./truncate');

var _truncate2 = _interopRequireDefault(_truncate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Utility method that intelligently breaks up your string,
// allowing you to create blocks of readable text.
// This method returns you the closest possible match to the delim paramater,
// while keeping the text length within the len paramter.
// If a match can't be found in your specified length an  '...' is added to that block,
// and the blocking continues untill all the text is broken apart.
function block(str, len) {
    var delim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';

    var arr = [];

    if (!str || !str.includes(delim)) {
        return arr;
    }

    if (delim === ' ') {
        str += delim;
    }

    var chrIndex = 0;
    var replPatt = new RegExp('[^' + (0, _escapePattern2.default)(delim) + ']+$');

    while (chrIndex < str.length) {
        var subString = str.substr(chrIndex, len);
        if (!subString.includes(delim)) {
            arr.push((0, _truncate2.default)(subString, subString.length));
            chrIndex += subString.length;
        }
        subString = subString.replace(replPatt, '');
        chrIndex += subString.length;
        arr.push(subString.trim());
    }
    return arr;
}

},{"./escapePattern":167,"./truncate":184}],162:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = capitalize;
// Capitalize the first word in a string or all words
function capitalize(str) {
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var substr = str.trimLeft();
    var re = all ? /^.|\b./g : /(^\w)/;
    return substr.replace(re, function (match) {
        return match.toUpperCase();
    });
}

},{}],163:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = countOf;

var _escapePattern = require('./escapePattern');

var _escapePattern2 = _interopRequireDefault(_escapePattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// the number of times substr appears within str
function countOf(str, substr, caseSensitive) {
    var escapedStr = (0, _escapePattern2.default)(substr);
    var flags = !caseSensitive ? 'ig' : 'g';
    return str.match(new RegExp(escapedStr, flags)).length;
}

},{"./escapePattern":167}],164:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = editDistance;
// Levenshtein distance (editDistance) is a measure of the similarity between
// two strings. The distance is the number of deletions, insertions, or
// substitutions required to transform source into target.
function editDistance() {
    var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';


    if (source === target) {
        return 0;
    }

    if (!source.length) {
        return target.length;
    }

    if (!target.length) {
        return source.length;
    }

    var d = [];
    var i = void 0,
        j = void 0,
        cost = void 0;

    for (i = 0; i <= source.length; i++) {
        d[i] = [];
    }
    for (i = 0; i <= source.length; i++) {
        d[i][0] = i;
    }
    for (j = 0; j <= target.length; j++) {
        d[0][j] = j;
    }

    for (i = 1; i <= source.length; i++) {

        var si = source.charAt(i - 1);
        for (j = 1; j <= target.length; j++) {

            var tj = target.charAt(j - 1);

            if (si === tj) {
                cost = 0;
            } else {
                cost = 1;
            }

            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
    }

    return d[source.length][target.length];
}

},{}],165:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = endsWith;
// whether str ends with substr
function endsWith(str, substr) {
    return str.lastIndexOf(substr) === str.length - substr.length;
}

},{}],166:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = escapeHtml;
// export default function escapeHtml(str) {
//     const div = document.createElement('div');
//     div.appendChild(document.createTextNode(str));
//     return div.innerHTML;
// }

var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
        return entityMap[s];
    });
}

},{}],167:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = escapePattern;
// regex escape pattern
function escapePattern(pattern) {
    return pattern.replace(/(\]|\[|\{|\}|\(|\)|\*|\+|\?|\.|\\)/g, '\\$1');
}

},{}],168:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hasText;

var _removeExtraWhitespace = require('./removeExtraWhitespace');

var _removeExtraWhitespace2 = _interopRequireDefault(_removeExtraWhitespace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// whether str contains any text
function hasText(str) {
    return !!(0, _removeExtraWhitespace2.default)(str).length;
}

},{"./removeExtraWhitespace":176}],169:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _afterFirst = require('./afterFirst');

var _afterFirst2 = _interopRequireDefault(_afterFirst);

var _afterLast = require('./afterLast');

var _afterLast2 = _interopRequireDefault(_afterLast);

var _beforeFirst = require('./beforeFirst');

var _beforeFirst2 = _interopRequireDefault(_beforeFirst);

var _beforeLast = require('./beforeLast');

var _beforeLast2 = _interopRequireDefault(_beforeLast);

var _beginsWith = require('./beginsWith');

var _beginsWith2 = _interopRequireDefault(_beginsWith);

var _between = require('./between');

var _between2 = _interopRequireDefault(_between);

var _block = require('./block');

var _block2 = _interopRequireDefault(_block);

var _capitalize = require('./capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _countOf = require('./countOf');

var _countOf2 = _interopRequireDefault(_countOf);

var _editDistance = require('./editDistance');

var _editDistance2 = _interopRequireDefault(_editDistance);

var _endsWith = require('./endsWith');

var _endsWith2 = _interopRequireDefault(_endsWith);

var _escapeHTML = require('./escapeHTML');

var _escapeHTML2 = _interopRequireDefault(_escapeHTML);

var _escapePattern = require('./escapePattern');

var _escapePattern2 = _interopRequireDefault(_escapePattern);

var _hasText = require('./hasText');

var _hasText2 = _interopRequireDefault(_hasText);

var _isNumeric = require('./isNumeric');

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _padLeft = require('./padLeft');

var _padLeft2 = _interopRequireDefault(_padLeft);

var _padRight = require('./padRight');

var _padRight2 = _interopRequireDefault(_padRight);

var _preventWidow = require('./preventWidow');

var _preventWidow2 = _interopRequireDefault(_preventWidow);

var _properCase = require('./properCase');

var _properCase2 = _interopRequireDefault(_properCase);

var _remove = require('./remove');

var _remove2 = _interopRequireDefault(_remove);

var _removeExtraWhitespace = require('./removeExtraWhitespace');

var _removeExtraWhitespace2 = _interopRequireDefault(_removeExtraWhitespace);

var _reverse = require('./reverse');

var _reverse2 = _interopRequireDefault(_reverse);

var _reverseWords = require('./reverseWords');

var _reverseWords2 = _interopRequireDefault(_reverseWords);

var _similarity = require('./similarity');

var _similarity2 = _interopRequireDefault(_similarity);

var _stripTags = require('./stripTags');

var _stripTags2 = _interopRequireDefault(_stripTags);

var _swapCase = require('./swapCase');

var _swapCase2 = _interopRequireDefault(_swapCase);

var _timeCode = require('./timeCode');

var _timeCode2 = _interopRequireDefault(_timeCode);

var _toNumber = require('./toNumber');

var _toNumber2 = _interopRequireDefault(_toNumber);

var _truncate = require('./truncate');

var _truncate2 = _interopRequireDefault(_truncate);

var _wordCount = require('./wordCount');

var _wordCount2 = _interopRequireDefault(_wordCount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    afterFirst: _afterFirst2.default,
    afterLast: _afterLast2.default,
    beforeFirst: _beforeFirst2.default,
    beforeLast: _beforeLast2.default,
    beginsWith: _beginsWith2.default,
    between: _between2.default,
    block: _block2.default,
    capitalize: _capitalize2.default,
    countOf: _countOf2.default,
    editDistance: _editDistance2.default,
    endsWith: _endsWith2.default,
    escapeHTML: _escapeHTML2.default,
    escapePattern: _escapePattern2.default,
    hasText: _hasText2.default,
    isNumeric: _isNumeric2.default,
    padLeft: _padLeft2.default,
    padRight: _padRight2.default,
    preventWidow: _preventWidow2.default,
    properCase: _properCase2.default,
    remove: _remove2.default,
    removeExtraWhitespace: _removeExtraWhitespace2.default,
    reverse: _reverse2.default,
    reverseWords: _reverseWords2.default,
    similarity: _similarity2.default,
    stripTags: _stripTags2.default,
    swapCase: _swapCase2.default,
    timeCode: _timeCode2.default,
    toNumber: _toNumber2.default,
    truncate: _truncate2.default,
    wordCount: _wordCount2.default
};

},{"./afterFirst":155,"./afterLast":156,"./beforeFirst":157,"./beforeLast":158,"./beginsWith":159,"./between":160,"./block":161,"./capitalize":162,"./countOf":163,"./editDistance":164,"./endsWith":165,"./escapeHTML":166,"./escapePattern":167,"./hasText":168,"./isNumeric":170,"./padLeft":171,"./padRight":172,"./preventWidow":173,"./properCase":174,"./remove":175,"./removeExtraWhitespace":176,"./reverse":177,"./reverseWords":178,"./similarity":179,"./stripTags":180,"./swapCase":181,"./timeCode":182,"./toNumber":183,"./truncate":184,"./wordCount":185}],170:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isNumeric;
// whether str is numeric
function isNumeric(str) {
    var regx = /^[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?$/;
    return regx.test(str);
}

},{}],171:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = padLeft;
// pad str with substr from the left
function padLeft(str, substr, length) {
    str = String(str);
    while (str.length < length) {
        str = substr + str;
    }
    return str;
}

},{}],172:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = padRight;
// pads str with substr from the right
function padRight(str, substr, length) {
    str = String(str);
    while (str.length < length) {
        str += substr;
    }
    return str;
}

},{}],173:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = preventWidow;
function preventWidow(str) {
    str = str.trim();

    var lastSpace = str.lastIndexOf(' ');
    if (lastSpace > 0) {
        return str.slice(0, lastSpace) + '&nbsp;' + str.slice(lastSpace + 1);
    }

    return str;
}

},{}],174:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = properCase;

var _capitalize = require('./capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// proper case str in sentence format
function properCase(str) {
    var newStr = str.toLowerCase().replace(/\b([^.?;!]+)/, _capitalize2.default);
    return newStr.replace(/\b[i]\b/, 'I');
}

},{"./capitalize":162}],175:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = remove;

var _escapePattern = require('./escapePattern');

var _escapePattern2 = _interopRequireDefault(_escapePattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// remove all instances of substr in str
function remove(str, substr) {
    var caseSensitive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var escapedStr = (0, _escapePattern2.default)(substr);
    var flags = caseSensitive ? 'g' : 'ig';
    return str.replace(new RegExp(escapedStr, flags), '');
}

},{"./escapePattern":167}],176:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeExtraWhitespace;
// remove extra whitespace (extra spaces, tabs, line breaks, etc)
function removeExtraWhitespace(str) {
    return str.trim().replace(/\s+/g, ' ');
}

},{}],177:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reverse;
// reverse character order
function reverse(str) {
    return str.split('').reverse().join('');
}

},{}],178:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reverseWords;
// reverse word order
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

},{}],179:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = similarity;

var _editDistance = require('./editDistance');

var _editDistance2 = _interopRequireDefault(_editDistance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// percentage of similiarity from 0 to 1
function similarity(a, b) {
    var e = (0, _editDistance2.default)(a, b);
    var m = Math.max(a.length, b.length);
    if (m === 0) {
        return 1;
    }
    return 1 - e / m;
}

},{"./editDistance":164}],180:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = stripTags;
// remove all HTML tags from str
function stripTags(str) {
    return str.replace(/<\/?[^>]+>/igm, '');
}

},{}],181:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = swapCase;

// swaps the case of str
function swapCase(str) {
    return str.replace(/(\w)/, function (newStr) {
        var lower = newStr.toLowerCase();
        var upper = newStr.toUpperCase();
        switch (newStr) {
            case lower:
                return upper;
            case upper:
                return lower;
            default:
                return newStr;
        }
    });
}

},{}],182:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = timeCode;
// formats seconds into HH:MM:SS
function timeCode(seconds) {
    var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ':';

    var h = Math.floor(seconds / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);
    var hr = (h < 10 ? '0' + h : h) + delim;
    var mn = (m < 10 ? '0' + m : m) + delim;
    var sc = s < 10 ? '0' + s : s;
    return hr + mn + sc;
}

},{}],183:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toNumber;
function toNumber(str) {
    return Number(str.replace(/[^0-9.]/g, ''));
}

},{}],184:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = truncate;
// truncate to length with suffix
function truncate(str, len) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

    len -= suffix.length;
    var trunc = str;
    if (trunc.length > len) {
        trunc = trunc.substr(0, len);
        var r = /[^\s]/;
        if (r.test(str.charAt(len))) {
            trunc = trunc.replace(/\w+$|\s+$/, '').trimRight();
        }
        trunc += suffix;
    }
    return trunc;
}

},{}],185:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = wordCount;
// the number of words in a string
function wordCount(str) {
    return str.match(/\b\w+\b/g).length;
}

},{}],186:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import Signal from 'signals';


var _miniSignals = require('mini-signals');

var _miniSignals2 = _interopRequireDefault(_miniSignals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ticker = function () {
    function Ticker() {
        _classCallCheck(this, Ticker);

        this.update = this.update.bind(this);
        // this.onUpdate = new Signal();
        this.onUpdate = new _miniSignals2.default();

        this.running = false;
        this.last = 0;
        // this.accumulated = 0;
        // this.step = 1000 / 60;
    }

    _createClass(Ticker, [{
        key: 'start',
        value: function start() {
            if (this.running) {
                return;
            }

            this.running = true;
            this.update();
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (!this.running) {
                return;
            }

            this.running = false;
        }
    }, {
        key: 'update',
        value: function update() {
            if (!this.running) {
                return;
            }

            window.requestAnimationFrame(this.update);

            var now = Date.now();
            var dt = now - this.last;
            if (dt > 20) {
                dt = 20;
            }
            this.last = now;

            //  // fixed step:
            // this.accumulated += dt;
            //
            // while (this.accumulated >= this.step) {
            //     this.accumulated -= this.step;
            //     this.onUpdate.dispatch(this.step);
            // }

            this.onUpdate.dispatch(dt * 0.001);
        }
    }, {
        key: 'add',
        value: function add(fn, context) {
            return this.onUpdate.add(fn, context);
        }
    }, {
        key: 'remove',
        value: function remove(binding) {
            this.onUpdate.detach(binding);
        }

        // remove(fn, context) {
        //     this.onUpdate.remove(fn, context);
        // }

    }]);

    return Ticker;
}();

exports.default = Ticker;

},{"mini-signals":110}],187:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = event;
function event(category, action, label, value) {
    if (!window.ga) {
        return;
    }
    window.ga('send', 'event', category, action, label, value);
}

},{}],188:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

var _pageview = require('./pageview');

var _pageview2 = _interopRequireDefault(_pageview);

var _load = require('./load');

var _load2 = _interopRequireDefault(_load);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    event: _event2.default,
    pageview: _pageview2.default,
    load: _load2.default
};

},{"./event":187,"./load":189,"./pageview":190}],189:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = load;
function load(gaAccount) {
    console.log('Initialize Google Analytics with account Id:', gaAccount);

    /*eslint-disable*/
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    /*eslint-enable*/

    window.ga('create', gaAccount, 'auto');
    window.ga('send', 'pageview');
}

},{}],190:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pageview;
function pageview(path) {
    if (!window.ga) {
        return;
    }
    window.ga('send', 'pageview', path);
}

},{}],191:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quad = require('../ease/quad');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tween = function () {
    function Tween(ob, props, duration, options) {
        _classCallCheck(this, Tween);

        this.ob = ob;

        if (props) {
            this.to(props, duration, options);
        }
    }

    _createClass(Tween, [{
        key: 'to',
        value: function to(props, duration) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            this.duration = duration;
            this.ease = options.ease || _quad.easeOutQuad;
            this.delay = options.delay || 0;
            this.onUpdate = options.onUpdate;
            this.onComplete = options.onComplete;
            this.time = 0;
            this.complete = false;

            this._props = Object.keys(props);
            this._beginVals = {};
            this._changeVals = {};

            for (var i = 0; i < this._props.length; i++) {
                var prop = this._props[i];
                this._beginVals[prop] = this.ob[prop];
                this._changeVals[prop] = props[prop] - this._beginVals[prop];
            }
        }
    }, {
        key: 'update',
        value: function update(dt) {
            if (this.time === this.duration) {
                return;
            }

            if (this.delay > 0) {
                this.delay -= dt;
                return;
            }

            this.time += dt;

            if (this.time > this.duration) {
                this.time = this.duration;
            }

            for (var i = 0; i < this._props.length; i++) {
                var prop = this._props[i];
                this.ob[prop] = this.ease(this.time, this._beginVals[prop], this._changeVals[prop], this.duration);
            }

            if (this.onUpdate) {
                this.onUpdate(this.ob);
            }

            if (this.time === this.duration) {
                this.complete = true;

                if (this.onComplete) {
                    this.onComplete(this.ob);
                }
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.time = 0;
            this.complete = false;
        }
    }]);

    return Tween;
}();

exports.default = Tween;

},{"../ease/quad":32}],192:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var hidden = void 0,
    change = void 0;

if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden';
    change = 'visibilitychange';
} else if (typeof document.mozHidden !== 'undefined') {
    hidden = 'mozHidden';
    change = 'mozvisibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    change = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    change = 'webkitvisibilitychange';
}

exports.default = {
    hidden: hidden,
    change: change
};

},{}],193:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _emitter = require('../events/emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var visibility = Object.create(_emitter2.default.prototype, {
    hidden: {
        get: function get() {
            return document[_api2.default.hidden];
        }
    }
});

function onVisibilityChange() {
    if (document[_api2.default.hidden]) {
        visibility.emit('hidden');
    } else {
        visibility.emit('shown');
    }
}

if (_api2.default.change) {
    document.addEventListener(_api2.default.change, onVisibilityChange, false);
}

exports.default = visibility;

},{"../events/emitter":38,"./api":192}]},{},[53])(53)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcnJheS9hcnJheS5qcyIsImFycmF5L2Nsb25lLmpzIiwiYXJyYXkvaW5kZXguanMiLCJhcnJheS9uZWFyZXN0LmpzIiwiYXJyYXkvcmFuZG9tQ2hvaWNlLmpzIiwiYXJyYXkvc29ydEFscGhhLmpzIiwiYXJyYXkvc29ydE51bWVyaWMuanMiLCJhcnJheS9zb3J0UmFuZG9tLmpzIiwiZG9tL2Jsb2NrU2Nyb2xsaW5nLmpzIiwiZG9tL2VsQ29vcmRzLmpzIiwiZG9tL2ZvcmNlUmVkcmF3LmpzIiwiZG9tL2dldFBhZ2VIZWlnaHQuanMiLCJkb20vZ2V0U2Nyb2xsUGVyY2VudGFnZS5qcyIsImRvbS9nZXRTY3JvbGxSZW1haW5pbmcuanMiLCJkb20vZ2V0U2Nyb2xsVG9wLmpzIiwiZG9tL2dldFNyY3NldEltYWdlLmpzIiwiZG9tL2luZGV4LmpzIiwiZG9tL2lzRWxlbWVudEluVmlld3BvcnQuanMiLCJkb20vaXNQYWdlRW5kLmpzIiwiZG9tL3Jlc2l6ZS5qcyIsImRvbS9zY3JvbGwuanMiLCJkb20vc2V0U3R5bGUuanMiLCJkb20vdHJhbnNpdGlvbkVuZC5qcyIsImVhc2UvYmFjay5qcyIsImVhc2UvYm91bmNlLmpzIiwiZWFzZS9jaXJjdWxhci5qcyIsImVhc2UvY3ViaWMuanMiLCJlYXNlL2VsYXN0aWMuanMiLCJlYXNlL2V4cG8uanMiLCJlYXNlL2luZGV4LmpzIiwiZWFzZS9saW5lYXIuanMiLCJlYXNlL3F1YWQuanMiLCJlYXNlL3F1YXJ0LmpzIiwiZWFzZS9xdWludC5qcyIsImVhc2Uvc2luZS5qcyIsImV2ZW50cy9kZWJvdW5jZS5qcyIsImV2ZW50cy9kZWxlZ2F0ZUV2ZW50cy5qcyIsImV2ZW50cy9lbWl0dGVyLmpzIiwiZXZlbnRzL2V2ZW50QnVzLmpzIiwiZXZlbnRzL2hlYXJ0YmVhdC5qcyIsImV2ZW50cy9pbmRleC5qcyIsImZwcy9pbmRleC5qcyIsImZ1bGxzY3JlZW4vYXBpLmpzIiwiZnVsbHNjcmVlbi9pbmRleC5qcyIsImdyYXBoaWNzL2luZGV4LmpzIiwiZ3VpL2luZGV4LmpzIiwiaHR0cC9nZXRMb2NhdGlvbi5qcyIsImh0dHAvaW5kZXguanMiLCJodHRwL2pzb25wLmpzIiwiaHR0cC9sb2FkU2NyaXB0LmpzIiwiaHR0cC91cmxQYXJhbXMuanMiLCJodHRwL3hoci5qcyIsImluZGV4LmpzIiwiaW5wdXQvY2xpY2tPdXRzaWRlLmpzIiwiaW5wdXQvaW5kZXguanMiLCJpbnB1dC9rZXlJbnB1dC5qcyIsImlucHV0L2tleWJvYXJkLmpzIiwiaW5wdXQvbWljcm9waG9uZS5qcyIsImlucHV0L21vdXNlTGVmdFdpbmRvdy5qcyIsImlucHV0L21vdXNlV2hlZWwuanMiLCJpbnB1dC9wb2ludGVyQ29vcmRzLmpzIiwiaW5wdXQvdG91Y2hJbnB1dC5qcyIsImxpbmtlZC1saXN0L2luZGV4LmpzIiwibWF0aC9hbmdsZS5qcyIsIm1hdGgvY2VycC5qcyIsIm1hdGgvY2lyY2xlRGlzdHJpYnV0aW9uLmpzIiwibWF0aC9jbGFtcC5qcyIsIm1hdGgvY29pblRvc3MuanMiLCJtYXRoL2Nyb3NzUHJvZHVjdDJkLmpzIiwibWF0aC9kZWdyZWVzLmpzIiwibWF0aC9kaWZmZXJlbmNlLmpzIiwibWF0aC9kaXN0YW5jZS5qcyIsIm1hdGgvZGlzdGFuY2VTcS5qcyIsIm1hdGgvZG90UHJvZHVjdDJkLmpzIiwibWF0aC9nZXRDaXJjbGVQb2ludHMuanMiLCJtYXRoL2dldEludGVyc2VjdGlvbkFyZWEuanMiLCJtYXRoL2dldE92ZXJsYXBYLmpzIiwibWF0aC9nZXRPdmVybGFwWS5qcyIsIm1hdGgvaW5kZXguanMiLCJtYXRoL2xlcnAuanMiLCJtYXRoL21hcC5qcyIsIm1hdGgvbm9ybWFsaXplLmpzIiwibWF0aC9vcmllbnRhdGlvbi5qcyIsIm1hdGgvcGVyY2VudFJlbWFpbmluZy5qcyIsIm1hdGgvcGVyc3BlY3RpdmUuanMiLCJtYXRoL3F1YWRyYXRpY0N1cnZlLmpzIiwibWF0aC9yYWRpYW5zLmpzIiwibWF0aC9yYW5kb20uanMiLCJtYXRoL3JhbmRvbUludC5qcyIsIm1hdGgvcmFuZG9tU2lnbi5qcyIsIm1hdGgvcm90YXRlUG9pbnQuanMiLCJtYXRoL3JvdGF0ZVRvRGVnLmpzIiwibWF0aC9yb3RhdGVUb1JhZC5qcyIsIm1hdGgvcm91bmRUby5qcyIsIm1hdGgvcm91bmRUb05lYXJlc3QuanMiLCJtYXRoL3NpemUuanMiLCJtYXRoL3NtZXJwLmpzIiwibWF0aC9zbW9vdGhzdGVwLmpzIiwibWF0aC9zcGxpdFZhbHVlQW5kVW5pdC5qcyIsIm1hdGgvd2VpZ2h0ZWRBdmVyYWdlLmpzIiwibWF0aC93ZWlnaHRlZERpc3RyaWJ1dGlvbi5qcyIsIm1lZGlhL2N1ZXBvaW50c1JlYWRlci5qcyIsIm1lZGlhL2lPU1BsYXlWaWRlb0lubGluZS5qcyIsIm1lZGlhL2luZGV4LmpzIiwibWVkaWEvdmlkZW9QbGF5ZXIuanMiLCJtZWRpYS92aW1lby5qcyIsIm1lZGlhL3lvdXR1YmUuanMiLCJtZWRpYS95b3V0dWJlQmFzaWMuanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9taW5pLXNpZ25hbHMvbGliL21pbmktc2lnbmFscy5qcyIsIm9iamVjdC1wb29sL2luZGV4LmpzIiwicGFydGljbGUvaW5kZXguanMiLCJwbGF0Zm9ybS9icm93c2VyL2FuZHJvaWROYXRpdmUuanMiLCJwbGF0Zm9ybS9icm93c2VyL2llVmVyc2lvbi5qcyIsInBsYXRmb3JtL2Jyb3dzZXIvaW5kZXguanMiLCJwbGF0Zm9ybS9icm93c2VyL3NhZmFyaS5qcyIsInBsYXRmb3JtL2RldmljZS9pbmRleC5qcyIsInBsYXRmb3JtL2luZGV4LmpzIiwicGxhdGZvcm0vb3MvYW5kcm9pZC5qcyIsInBsYXRmb3JtL29zL2FuZHJvaWRWZXJzaW9uLmpzIiwicGxhdGZvcm0vb3MvaW5kZXguanMiLCJwbGF0Zm9ybS9vcy9pb3MuanMiLCJwbGF0Zm9ybS9vcy9pb3NWZXJzaW9uLmpzIiwicGxhdGZvcm0vb3MvbGludXguanMiLCJwbGF0Zm9ybS9vcy9tYWMuanMiLCJwbGF0Zm9ybS9vcy93aW5kb3dzLmpzIiwicGxhdGZvcm0vb3Mvd2luZG93c1Bob25lLmpzIiwicGxhdGZvcm0vc2NyZWVuL2luZGV4LmpzIiwicGxhdGZvcm0vc3VwcG9ydHMvZGV2aWNlT3JpZW50YXRpb24uanMiLCJwbGF0Zm9ybS9zdXBwb3J0cy9pbmRleC5qcyIsInBsYXRmb3JtL3N1cHBvcnRzL21wNC5qcyIsInBsYXRmb3JtL3N1cHBvcnRzL3dlYmdsLmpzIiwicGxhdGZvcm0vc3VwcG9ydHMvd2VibS5qcyIsInBvbHlmaWxsL2NsYXNzTGlzdC5qcyIsInBvbHlmaWxsL2NvbnNvbGUuanMiLCJwb2x5ZmlsbC9pbmRleC5qcyIsInBvbHlmaWxsL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsInBvcHVwL2luZGV4LmpzIiwicXVhZC10cmVlL2luZGV4LmpzIiwic2hhcmUvZW1haWwuanMiLCJzaGFyZS9mYWNlYm9vay5qcyIsInNoYXJlL2ZhY2Vib29rRmVlZERpYWxvZy5qcyIsInNoYXJlL2dvb2dsZXBsdXMuanMiLCJzaGFyZS9pbmRleC5qcyIsInNoYXJlL2xpbmtlZGluLmpzIiwic2hhcmUvcGludGVyZXN0LmpzIiwic2hhcmUvcmVkZGl0LmpzIiwic2hhcmUvcmVucmVuLmpzIiwic2hhcmUvc21zLmpzIiwic2hhcmUvdHdpdHRlci5qcyIsInNoYXJlL3Zrb250YWt0ZS5qcyIsInNoYXJlL3dlaWJvLmpzIiwic2hhcmUvd2hhdHNhcHAuanMiLCJzdG9yYWdlL2luZGV4LmpzIiwic3RyaW5nL2FmdGVyRmlyc3QuanMiLCJzdHJpbmcvYWZ0ZXJMYXN0LmpzIiwic3RyaW5nL2JlZm9yZUZpcnN0LmpzIiwic3RyaW5nL2JlZm9yZUxhc3QuanMiLCJzdHJpbmcvYmVnaW5zV2l0aC5qcyIsInN0cmluZy9iZXR3ZWVuLmpzIiwic3RyaW5nL2Jsb2NrLmpzIiwic3RyaW5nL2NhcGl0YWxpemUuanMiLCJzdHJpbmcvY291bnRPZi5qcyIsInN0cmluZy9lZGl0RGlzdGFuY2UuanMiLCJzdHJpbmcvZW5kc1dpdGguanMiLCJzdHJpbmcvZXNjYXBlSFRNTC5qcyIsInN0cmluZy9lc2NhcGVQYXR0ZXJuLmpzIiwic3RyaW5nL2hhc1RleHQuanMiLCJzdHJpbmcvaW5kZXguanMiLCJzdHJpbmcvaXNOdW1lcmljLmpzIiwic3RyaW5nL3BhZExlZnQuanMiLCJzdHJpbmcvcGFkUmlnaHQuanMiLCJzdHJpbmcvcHJldmVudFdpZG93LmpzIiwic3RyaW5nL3Byb3BlckNhc2UuanMiLCJzdHJpbmcvcmVtb3ZlLmpzIiwic3RyaW5nL3JlbW92ZUV4dHJhV2hpdGVzcGFjZS5qcyIsInN0cmluZy9yZXZlcnNlLmpzIiwic3RyaW5nL3JldmVyc2VXb3Jkcy5qcyIsInN0cmluZy9zaW1pbGFyaXR5LmpzIiwic3RyaW5nL3N0cmlwVGFncy5qcyIsInN0cmluZy9zd2FwQ2FzZS5qcyIsInN0cmluZy90aW1lQ29kZS5qcyIsInN0cmluZy90b051bWJlci5qcyIsInN0cmluZy90cnVuY2F0ZS5qcyIsInN0cmluZy93b3JkQ291bnQuanMiLCJ0aWNrZXIvaW5kZXguanMiLCJ0cmFjay9ldmVudC5qcyIsInRyYWNrL2luZGV4LmpzIiwidHJhY2svbG9hZC5qcyIsInRyYWNrL3BhZ2V2aWV3LmpzIiwidHdlZW4vaW5kZXguanMiLCJ2aXNpYmlsaXR5L2FwaS5qcyIsInZpc2liaWxpdHkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNBd0IsSztBQUFULFNBQVMsS0FBVCxDQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFBOEI7QUFDekMsUUFBTSxNQUFNLEVBQVo7QUFDQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBcEIsRUFBNEIsR0FBNUIsRUFBaUM7QUFDN0IsWUFBTSxNQUFNLE9BQU8sS0FBUCxLQUFpQixXQUFqQixHQUErQixLQUEvQixHQUF1QyxDQUFuRDtBQUNBLFlBQUksSUFBSixDQUFTLEdBQVQ7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RkQsTUFFTztBQUNILG1CQUFXLElBQVgsQ0FBZ0IsT0FBaEI7QUFDSDtBQUNKOztBQUVELElBQUksY0FBSSxNQUFSLEVBQWdCO0FBQ1osYUFBUyxnQkFBVCxDQUEwQixjQUFJLE1BQTlCLEVBQXNDLGtCQUF0QyxFQUEwRCxLQUExRDtBQUNIOztrQkFFYyxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5KGxlbmd0aCwgdmFsdWUpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6IGk7XG4gICAgICAgIGFyci5wdXNoKHZhbCk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZShhcnIpIHtcbiAgICByZXR1cm4gYXJyLnNsaWNlKDApO1xufVxuIiwiaW1wb3J0IGFycmF5IGZyb20gJy4vYXJyYXknO1xuaW1wb3J0IGNsb25lIGZyb20gJy4vY2xvbmUnO1xuaW1wb3J0IG5lYXJlc3QgZnJvbSAnLi9uZWFyZXN0JztcbmltcG9ydCByYW5kb21DaG9pY2UgZnJvbSAnLi9yYW5kb21DaG9pY2UnO1xuaW1wb3J0IHNvcnRBbHBoYSBmcm9tICcuL3NvcnRBbHBoYSc7XG5pbXBvcnQgc29ydE51bWVyaWMgZnJvbSAnLi9zb3J0TnVtZXJpYyc7XG5pbXBvcnQgc29ydFJhbmRvbSBmcm9tICcuL3NvcnRSYW5kb20nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXJyYXksXG4gICAgY2xvbmUsXG4gICAgbmVhcmVzdCxcbiAgICByYW5kb21DaG9pY2UsXG4gICAgc29ydEFscGhhLFxuICAgIHNvcnROdW1lcmljLFxuICAgIHNvcnRSYW5kb21cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZWFyZXN0KHZhbHVlLCBhcnIpIHtcbiAgICBsZXQgbGVhc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHJldHVybiBhcnIucmVkdWNlKChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGl0ZW0gLSB2YWx1ZSk7XG4gICAgICAgIGlmIChkaWZmIDwgbGVhc3QpIHtcbiAgICAgICAgICAgIGxlYXN0ID0gZGlmZjtcbiAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCAtMSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb21DaG9pY2UoYXJyKSB7XG4gICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0QWxwaGEoYSwgYikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHhbYV0pLnRvTG93ZXJDYXNlKCkgPiBTdHJpbmcoeVthXSkudG9Mb3dlckNhc2UoKSA/IDEgOiAtMTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhhKS50b0xvd2VyQ2FzZSgpID4gU3RyaW5nKGIpLnRvTG93ZXJDYXNlKCkgPyAxIDogLTE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0TnVtZXJpYyhhLCBiKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoeFthXSkgLSBOdW1iZXIoeVthXSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIoYSkgLSBOdW1iZXIoYik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0UmFuZG9tKCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmxvY2tTY3JvbGxpbmcodmFsdWUpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gdmFsdWUgPyAnaGlkZGVuJyA6ICcnO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWxDb29yZHMoZWwpIHtcbiAgICBjb25zdCBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcDtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgY29uc3QgY2xpZW50VG9wID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICBjb25zdCB0b3AgPSBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wO1xuICAgIGNvbnN0IGxlZnQgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBNYXRoLnJvdW5kKHRvcCksXG4gICAgICAgIGxlZnQ6IE1hdGgucm91bmQobGVmdCksXG4gICAgICAgIHg6IE1hdGgucm91bmQobGVmdCksXG4gICAgICAgIHk6IE1hdGgucm91bmQodG9wKVxuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JjZVJlZHJhdyhlbCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZWwub2Zmc2V0SGVpZ2h0O1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFnZUhlaWdodCgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgIGJvZHkuc2Nyb2xsSGVpZ2h0IHx8IDAsXG4gICAgICAgIGJvZHkub2Zmc2V0SGVpZ2h0IHx8IDAsXG4gICAgICAgIGJvZHkuY2xpZW50SGVpZ2h0IHx8IDAsXG4gICAgICAgIGRvYy5jbGllbnRIZWlnaHQgfHwgMCxcbiAgICAgICAgZG9jLm9mZnNldEhlaWdodCB8fCAwLFxuICAgICAgICBkb2Muc2Nyb2xsSGVpZ2h0IHx8IDBcbiAgICApO1xufVxuIiwiaW1wb3J0IGdldFNjcm9sbFRvcCBmcm9tICcuL2dldFNjcm9sbFRvcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBlcmNlbnRhZ2UoKSB7XG4gICAgcmV0dXJuIChnZXRTY3JvbGxUb3AoKSArIHdpbmRvdy5pbm5lckhlaWdodCkgLyBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbn1cbiIsImltcG9ydCBnZXRTY3JvbGxUb3AgZnJvbSAnLi9nZXRTY3JvbGxUb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxSZW1haW5pbmcoKSB7XG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmJvZHk7XG4gICAgcmV0dXJuIE1hdGguYWJzKGdldFNjcm9sbFRvcCgpIC0gKGIuc2Nyb2xsSGVpZ2h0IC0gYi5jbGllbnRIZWlnaHQpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTcmNzZXRJbWFnZShzcmNzZXQsIHBpeGVsV2lkdGgpIHtcbiAgICBwaXhlbFdpZHRoID0gcGl4ZWxXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCAqICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAwKTtcblxuICAgIGNvbnN0IHNldCA9IHNyY3NldC5zcGxpdCgnLCcpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFt1cmwsIHdpZHRoXSA9IGl0ZW0udHJpbSgpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gcGFyc2VJbnQod2lkdGguc2xpY2UoMCwgLTEpLCAxMCk7XG4gICAgICAgICAgICByZXR1cm4ge3VybCwgc2l6ZX07XG4gICAgICAgIH0pXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnNpemUgLSBhLnNpemUpO1xuXG4gICAgaWYgKCFzZXQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0LnJlZHVjZSgodmFsdWUsIGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uc2l6ZSA+PSBwaXhlbFdpZHRoID8gaXRlbS51cmwgOiB2YWx1ZTtcbiAgICB9LCBzZXRbMF0udXJsKTtcbn1cbiIsImltcG9ydCBibG9ja1Njcm9sbGluZyBmcm9tICcuL2Jsb2NrU2Nyb2xsaW5nJztcbmltcG9ydCBlbENvb3JkcyBmcm9tICcuL2VsQ29vcmRzJztcbmltcG9ydCBmb3JjZVJlZHJhdyBmcm9tICcuL2ZvcmNlUmVkcmF3JztcbmltcG9ydCBnZXRQYWdlSGVpZ2h0IGZyb20gJy4vZ2V0UGFnZUhlaWdodCc7XG5pbXBvcnQgZ2V0U2Nyb2xsUGVyY2VudGFnZSBmcm9tICcuL2dldFNjcm9sbFBlcmNlbnRhZ2UnO1xuaW1wb3J0IGdldFNjcm9sbFJlbWFpbmluZyBmcm9tICcuL2dldFNjcm9sbFJlbWFpbmluZyc7XG5pbXBvcnQgZ2V0U2Nyb2xsVG9wIGZyb20gJy4vZ2V0U2Nyb2xsVG9wJztcbmltcG9ydCBnZXRTcmNzZXRJbWFnZSBmcm9tICcuL2dldFNyY3NldEltYWdlJztcbmltcG9ydCBpc0VsZW1lbnRJblZpZXdwb3J0IGZyb20gJy4vaXNFbGVtZW50SW5WaWV3cG9ydCc7XG5pbXBvcnQgaXNQYWdlRW5kIGZyb20gJy4vaXNQYWdlRW5kJztcbmltcG9ydCByZXNpemUgZnJvbSAnLi9yZXNpemUnO1xuaW1wb3J0IHNjcm9sbCBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgc2V0U3R5bGUgZnJvbSAnLi9zZXRTdHlsZSc7XG5pbXBvcnQgdHJhbnNpdGlvbkVuZCBmcm9tICcuL3RyYW5zaXRpb25FbmQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYmxvY2tTY3JvbGxpbmcsXG4gICAgZWxDb29yZHMsXG4gICAgZm9yY2VSZWRyYXcsXG4gICAgZ2V0UGFnZUhlaWdodCxcbiAgICBnZXRTY3JvbGxQZXJjZW50YWdlLFxuICAgIGdldFNjcm9sbFJlbWFpbmluZyxcbiAgICBnZXRTY3JvbGxUb3AsXG4gICAgZ2V0U3Jjc2V0SW1hZ2UsXG4gICAgaXNFbGVtZW50SW5WaWV3cG9ydCxcbiAgICBpc1BhZ2VFbmQsXG4gICAgcmVzaXplLFxuICAgIHNjcm9sbCxcbiAgICBzZXRTdHlsZSxcbiAgICB0cmFuc2l0aW9uRW5kXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbGVtZW50SW5WaWV3cG9ydChlbCwgYnVmZmVyID0gMCkge1xuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICByZWN0LnRvcCA+PSAwIC0gYnVmZmVyICYmXG4gICAgICAgIHJlY3QubGVmdCA+PSAwIC0gYnVmZmVyICYmXG4gICAgICAgIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCArIGJ1ZmZlciAmJlxuICAgICAgICByZWN0LnJpZ2h0IDw9IHdpbmRvdy5pbm5lcldpZHRoICsgYnVmZmVyXG4gICAgKTtcbn1cbiIsImltcG9ydCBnZXRTY3JvbGxSZW1haW5pbmcgZnJvbSAnLi9nZXRTY3JvbGxSZW1haW5pbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1BhZ2VFbmQoYnVmZmVyID0gMCkge1xuICAgIHJldHVybiBnZXRTY3JvbGxSZW1haW5pbmcoKSA8PSBidWZmZXI7XG59XG4iLCJpbXBvcnQgZXZlbnRCdXMgZnJvbSAnLi4vZXZlbnRzL2V2ZW50QnVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzaXplKGRlYm91Y2VEZWxheSA9IDUwMCkge1xuXG4gICAgbGV0IHRpbWVvdXRJZDtcblxuICAgIC8vIG9yaWVudGF0aW9uY2hhbmdlIHRvbz9cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICB0aW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBldmVudEJ1cy5lbWl0KCdyZXNpemUnKSwgZGVib3VjZURlbGF5KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBldmVudEJ1cyBmcm9tICcuLi9ldmVudHMvZXZlbnRCdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGwoY2FsbE5vdyA9IGZhbHNlKSB7XG5cbiAgICBsZXQgbGFzdFNjcm9sbFkgPSAwLFxuICAgICAgICB0aWNraW5nID0gZmFsc2UsXG4gICAgICAgIHRpbWVvdXRJZDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGV2ZW50QnVzLmVtaXQoJ3Njcm9sbGVuZCcsIGxhc3RTY3JvbGxZKSwgMjAwKTtcblxuICAgICAgICBldmVudEJ1cy5lbWl0KCdzY3JvbGwnLCBsYXN0U2Nyb2xsWSk7XG4gICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0VGljaygpIHtcbiAgICAgICAgaWYgKCF0aWNraW5nKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgICAgICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICAgICAgICAvLyBsYXN0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBsYXN0U2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICByZXF1ZXN0VGljaygpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCwgZmFsc2UpO1xuXG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgb25TY3JvbGwoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTdHlsZShlbCwgc3R5bGUpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICBlbC5zdHlsZVtwcm9wXSA9IHN0eWxlW3Byb3BdO1xuICAgIH0pO1xuICAgIHJldHVybiBlbDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZWwsIGNiLCB0aW1lb3V0ID0gMTAwMCkge1xuXG4gICAgbGV0IHRpbWVvdXRJZDtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZXIpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgaGFuZGxlcik7XG4gICAgICAgIGNiKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbC5zdHlsZS50cmFuc2l0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlcik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZWwuc3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpO1xufVxuIiwiZnVuY3Rpb24gZWFzZUluQmFjayh0LCBiLCBjLCBkLCBzID0gMS43MDE1OCkge1xuICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogKChzICsgMSkgKiB0IC0gcykgKyBiO1xufVxuXG5mdW5jdGlvbiBlYXNlT3V0QmFjayh0LCBiLCBjLCBkLCBzID0gMS43MDE1OCkge1xuICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcbn1cblxuZnVuY3Rpb24gZWFzZUluT3V0QmFjayh0LCBiLCBjLCBkLCBzID0gMS43MDE1OCkge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgIHJldHVybiBjIC8gMiAqICh0ICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgLSBzKSkgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdCArIHMpICsgMikgKyBiO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZWFzZUluOiBlYXNlSW5CYWNrLFxuICAgIGVhc2VPdXQ6IGVhc2VPdXRCYWNrLFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0QmFja1xufTtcblxuZXhwb3J0IHtcbiAgICBlYXNlSW5CYWNrLFxuICAgIGVhc2VPdXRCYWNrLFxuICAgIGVhc2VJbk91dEJhY2tcbn07XG4iLCJmdW5jdGlvbiBlYXNlT3V0Qm91bmNlKHQsIGIsIGMsIGQpIHtcbiAgICBpZiAoKHQgLz0gZCkgPCAoMSAvIDIuNzUpKSB7XG4gICAgICAgIHJldHVybiBjICogKDcuNTYyNSAqIHQgKiB0KSArIGI7XG4gICAgfSBlbHNlIGlmICh0IDwgKDIgLyAyLjc1KSkge1xuICAgICAgICByZXR1cm4gYyAqICg3LjU2MjUgKiAodCAtPSAoMS41IC8gMi43NSkpICogdCArIDAuNzUpICsgYjtcbiAgICB9IGVsc2UgaWYgKHQgPCAoMi41IC8gMi43NSkpIHtcbiAgICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gKDIuMjUgLyAyLjc1KSkgKiB0ICsgMC45Mzc1KSArIGI7XG4gICAgfVxuICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09ICgyLjYyNSAvIDIuNzUpKSAqIHQgKyAwLjk4NDM3NSkgKyBiO1xufVxuXG5mdW5jdGlvbiBlYXNlSW5Cb3VuY2UodCwgYiwgYywgZCkge1xuICAgIHJldHVybiBjIC0gZWFzZU91dEJvdW5jZShkIC0gdCwgMCwgYywgZCkgKyBiO1xufVxuXG5mdW5jdGlvbiBlYXNlSW5PdXRCb3VuY2UodCwgYiwgYywgZCkge1xuICAgIGlmICh0IDwgZCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIGVhc2VJbkJvdW5jZSh0ICogMiwgMCwgYywgZCkgKiAwLjUgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gZWFzZU91dEJvdW5jZSh0ICogMiAtIGQsIDAsIGMsIGQpICogMC41ICsgYyAqIDAuNSArIGI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBlYXNlSW46IGVhc2VJbkJvdW5jZSxcbiAgICBlYXNlT3V0OiBlYXNlT3V0Qm91bmNlLFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0Qm91bmNlXG59O1xuXG5leHBvcnQge1xuICAgIGVhc2VJbkJvdW5jZSxcbiAgICBlYXNlT3V0Qm91bmNlLFxuICAgIGVhc2VJbk91dEJvdW5jZVxufTtcbiIsImNvbnN0IHtzcXJ0fSA9IE1hdGg7XG5cbmZ1bmN0aW9uIGVhc2VJbkNpcmN1bGFyKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gLWMgKiAoc3FydCgxIC0gKHQgLz0gZCkgKiB0KSAtIDEpICsgYjtcbn1cblxuZnVuY3Rpb24gZWFzZU91dENpcmN1bGFyKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqIHNxcnQoMSAtICh0ID0gdCAvIGQgLSAxKSAqIHQpICsgYjtcbn1cblxuZnVuY3Rpb24gZWFzZUluT3V0Q2lyY3VsYXIodCwgYiwgYywgZCkge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgIHJldHVybiAtYyAvIDIgKiAoc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gYyAvIDIgKiAoc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpICsgYjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVhc2VJbjogZWFzZUluQ2lyY3VsYXIsXG4gICAgZWFzZU91dDogZWFzZU91dENpcmN1bGFyLFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0Q2lyY3VsYXJcbn07XG5cbmV4cG9ydCB7XG4gICAgZWFzZUluQ2lyY3VsYXIsXG4gICAgZWFzZU91dENpcmN1bGFyLFxuICAgIGVhc2VJbk91dENpcmN1bGFyXG59O1xuIiwiZnVuY3Rpb24gZWFzZUluQ3ViaWModCwgYiwgYywgZCkge1xuICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCArIGI7XG59XG5cbmZ1bmN0aW9uIGVhc2VPdXRDdWJpYyh0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKyAxKSArIGI7XG59XG5cbmZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQsIGIsIGMsIGQpIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgICByZXR1cm4gYyAvIDIgKiB0ICogdCAqIHQgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVhc2VJbjogZWFzZUluQ3ViaWMsXG4gICAgZWFzZU91dDogZWFzZU91dEN1YmljLFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0Q3ViaWNcbn07XG5cbmV4cG9ydCB7XG4gICAgZWFzZUluQ3ViaWMsXG4gICAgZWFzZU91dEN1YmljLFxuICAgIGVhc2VJbk91dEN1YmljXG59O1xuIiwiY29uc3Qge2FicywgYXNpbiwgUEksIHBvdywgc2lufSA9IE1hdGg7XG5jb25zdCBQSV8yID0gUEkgKiAyO1xuXG5mdW5jdGlvbiBlYXNlSW5FbGFzdGljKHQsIGIsIGMsIGQsIGEsIHApIHtcbiAgICBsZXQgcztcbiAgICBpZiAodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgaWYgKCh0IC89IGQpID09PSAxKSB7XG4gICAgICAgIHJldHVybiBiICsgYztcbiAgICB9XG4gICAgaWYgKCFwKSB7XG4gICAgICAgIHAgPSBkICogMC4zO1xuICAgIH1cbiAgICBpZiAoIWEgfHwgYSA8IGFicyhjKSkge1xuICAgICAgICBhID0gYztcbiAgICAgICAgcyA9IHAgLyA0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHMgPSBwIC8gUElfMiAqIGFzaW4oYyAvIGEpO1xuICAgIH1cbiAgICByZXR1cm4gLShhICogcG93KDIsIDEwICogKHQgLT0gMSkpICogc2luKCh0ICogZCAtIHMpICogUElfMiAvIHApKSArIGI7XG59XG5cbmZ1bmN0aW9uIGVhc2VPdXRFbGFzdGljKHQsIGIsIGMsIGQsIGEsIHApIHtcbiAgICBsZXQgcztcbiAgICBpZiAodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgaWYgKCh0IC89IGQpID09PSAxKSB7XG4gICAgICAgIHJldHVybiBiICsgYztcbiAgICB9XG4gICAgaWYgKCFwKSB7XG4gICAgICAgIHAgPSBkICogMC4zO1xuICAgIH1cbiAgICBpZiAoIWEgfHwgYSA8IGFicyhjKSkge1xuICAgICAgICBhID0gYztcbiAgICAgICAgcyA9IHAgLyA0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHMgPSBwIC8gUElfMiAqIGFzaW4oYyAvIGEpO1xuICAgIH1cbiAgICByZXR1cm4gKGEgKiBwb3coMiwgLTEwICogdCkgKiBzaW4oKHQgKiBkIC0gcykgKiBQSV8yIC8gcCkgKyBjICsgYik7XG59XG5cbmZ1bmN0aW9uIGVhc2VJbk91dEVsYXN0aWModCwgYiwgYywgZCwgYSwgcCkge1xuICAgIGxldCBzO1xuICAgIGlmICh0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICBpZiAoKHQgLz0gZCAvIDIpID09PSAyKSB7XG4gICAgICAgIHJldHVybiBiICsgYztcbiAgICB9XG4gICAgaWYgKCFwKSB7XG4gICAgICAgIHAgPSBkICogKDAuMyAqIDEuNSk7XG4gICAgfVxuICAgIGlmICghYSB8fCBhIDwgYWJzKGMpKSB7XG4gICAgICAgIGEgPSBjO1xuICAgICAgICBzID0gcCAvIDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcyA9IHAgLyBQSV8yICogYXNpbihjIC8gYSk7XG4gICAgfVxuICAgIGlmICh0IDwgMSkge1xuICAgICAgICByZXR1cm4gLTAuNSAqIChhICogcG93KDIsIDEwICogKHQgLT0gMSkpICogc2luKCh0ICogZCAtIHMpICogUElfMiAvIHApKSArIGI7XG4gICAgfVxuICAgIHJldHVybiBhICogcG93KDIsIC0xMCAqICh0IC09IDEpKSAqIHNpbigodCAqIGQgLSBzKSAqIFBJXzIgLyBwKSAqIDAuNSArIGMgKyBiO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZWFzZUluOiBlYXNlSW5FbGFzdGljLFxuICAgIGVhc2VPdXQ6IGVhc2VPdXRFbGFzdGljLFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0RWxhc3RpY1xufTtcblxuZXhwb3J0IHtcbiAgICBlYXNlSW5FbGFzdGljLFxuICAgIGVhc2VPdXRFbGFzdGljLFxuICAgIGVhc2VJbk91dEVsYXN0aWNcbn07XG4iLCJjb25zdCB7cG93fSA9IE1hdGg7XG5cbmZ1bmN0aW9uIGVhc2VJbkV4cG8odCwgYiwgYywgZCkge1xuICAgIHJldHVybiB0ID09PSAwID8gYiA6IGMgKiBwb3coMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiO1xufVxuXG5mdW5jdGlvbiBlYXNlT3V0RXhwbyh0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIHQgPT09IGQgPyBiICsgYyA6IGMgKiAoLXBvdygyLCAtMTAgKiB0IC8gZCkgKyAxKSArIGI7XG59XG5cbmZ1bmN0aW9uIGVhc2VJbk91dEV4cG8odCwgYiwgYywgZCkge1xuICAgIGlmICh0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICBpZiAodCA9PT0gZCkge1xuICAgICAgICByZXR1cm4gYiArIGM7XG4gICAgfVxuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgIHJldHVybiBjIC8gMiAqIHBvdygyLCAxMCAqICh0IC0gMSkpICsgYjtcbiAgICB9XG4gICAgcmV0dXJuIGMgLyAyICogKC1wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVhc2VJbjogZWFzZUluRXhwbyxcbiAgICBlYXNlT3V0OiBlYXNlT3V0RXhwbyxcbiAgICBlYXNlSW5PdXQ6IGVhc2VJbk91dEV4cG9cbn07XG5cbmV4cG9ydCB7XG4gICAgZWFzZUluRXhwbyxcbiAgICBlYXNlT3V0RXhwbyxcbiAgICBlYXNlSW5PdXRFeHBvXG59O1xuIiwiaW1wb3J0IGJhY2ssIHtlYXNlSW5CYWNrLCBlYXNlT3V0QmFjaywgZWFzZUluT3V0QmFja30gZnJvbSAnLi9iYWNrJztcbmltcG9ydCBib3VuY2UsIHtlYXNlSW5Cb3VuY2UsIGVhc2VPdXRCb3VuY2UsIGVhc2VJbk91dEJvdW5jZX0gZnJvbSAnLi9ib3VuY2UnO1xuaW1wb3J0IGNpcmN1bGFyLCB7ZWFzZUluQ2lyY3VsYXIsIGVhc2VPdXRDaXJjdWxhciwgZWFzZUluT3V0Q2lyY3VsYXJ9IGZyb20gJy4vY2lyY3VsYXInO1xuaW1wb3J0IGN1YmljLCB7ZWFzZUluQ3ViaWMsIGVhc2VPdXRDdWJpYywgZWFzZUluT3V0Q3ViaWN9IGZyb20gJy4vY3ViaWMnO1xuaW1wb3J0IGVsYXN0aWMsIHtlYXNlSW5FbGFzdGljLCBlYXNlT3V0RWxhc3RpYywgZWFzZUluT3V0RWxhc3RpY30gZnJvbSAnLi9lbGFzdGljJztcbmltcG9ydCBleHBvLCB7ZWFzZUluRXhwbywgZWFzZU91dEV4cG8sIGVhc2VJbk91dEV4cG99IGZyb20gJy4vZXhwbyc7XG5pbXBvcnQgbGluZWFyLCB7ZWFzZUxpbmVhcn0gZnJvbSAnLi9saW5lYXInO1xuaW1wb3J0IHF1YWQsIHtlYXNlSW5RdWFkLCBlYXNlT3V0UXVhZCwgZWFzZUluT3V0UXVhZH0gZnJvbSAnLi9xdWFkJztcbmltcG9ydCBxdWFydCwge2Vhc2VJblF1YXJ0LCBlYXNlT3V0UXVhcnQsIGVhc2VJbk91dFF1YXJ0fSBmcm9tICcuL3F1YXJ0JztcbmltcG9ydCBxdWludCwge2Vhc2VJblF1aW50LCBlYXNlT3V0UXVpbnQsIGVhc2VJbk91dFF1aW50fSBmcm9tICcuL3F1aW50JztcbmltcG9ydCBzaW5lLCB7ZWFzZUluU2luZSwgZWFzZU91dFNpbmUsIGVhc2VJbk91dFNpbmV9IGZyb20gJy4vc2luZSc7XG5cbmV4cG9ydCB7XG4gICAgYmFjayxcbiAgICBib3VuY2UsXG4gICAgY2lyY3VsYXIsXG4gICAgY3ViaWMsXG4gICAgZWxhc3RpYyxcbiAgICBleHBvLFxuICAgIGxpbmVhcixcbiAgICBxdWFkLFxuICAgIHF1YXJ0LFxuICAgIHF1aW50LFxuICAgIHNpbmUsXG4gICAgZWFzZUxpbmVhcixcbiAgICBlYXNlSW5CYWNrLFxuICAgIGVhc2VPdXRCYWNrLFxuICAgIGVhc2VJbk91dEJhY2ssXG4gICAgZWFzZUluQm91bmNlLFxuICAgIGVhc2VPdXRCb3VuY2UsXG4gICAgZWFzZUluT3V0Qm91bmNlLFxuICAgIGVhc2VJbkNpcmN1bGFyLFxuICAgIGVhc2VPdXRDaXJjdWxhcixcbiAgICBlYXNlSW5PdXRDaXJjdWxhcixcbiAgICBlYXNlSW5DdWJpYyxcbiAgICBlYXNlT3V0Q3ViaWMsXG4gICAgZWFzZUluT3V0Q3ViaWMsXG4gICAgZWFzZUluRWxhc3RpYyxcbiAgICBlYXNlT3V0RWxhc3RpYyxcbiAgICBlYXNlSW5PdXRFbGFzdGljLFxuICAgIGVhc2VJbkV4cG8sXG4gICAgZWFzZU91dEV4cG8sXG4gICAgZWFzZUluT3V0RXhwbyxcbiAgICBlYXNlSW5RdWFkLFxuICAgIGVhc2VPdXRRdWFkLFxuICAgIGVhc2VJbk91dFF1YWQsXG4gICAgZWFzZUluUXVhcnQsXG4gICAgZWFzZU91dFF1YXJ0LFxuICAgIGVhc2VJbk91dFF1YXJ0LFxuICAgIGVhc2VJblF1aW50LFxuICAgIGVhc2VPdXRRdWludCxcbiAgICBlYXNlSW5PdXRRdWludCxcbiAgICBlYXNlSW5TaW5lLFxuICAgIGVhc2VPdXRTaW5lLFxuICAgIGVhc2VJbk91dFNpbmVcbn07XG5cbi8qXG5URVJNUyBPRiBVU0UgLSBFQVNJTkcgRVFVQVRJT05TXG5cbk9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cblxuQ29weXJpZ2h0IMKpIDIwMDEgUm9iZXJ0IFBlbm5lclxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG5tb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG5saXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xubGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXG5vdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgYXV0aG9yIG5vciB0aGUgbmFtZXMgb2YgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvXG5lbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpY1xucHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbkFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbklNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxuRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUlxuQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTXG4oSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG5MT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT05cbkFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4oSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJU1xuU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuIiwiZnVuY3Rpb24gZWFzZUxpbmVhcih0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiB0IC8gZCArIGI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBlYXNlSW46IGVhc2VMaW5lYXIsXG4gICAgZWFzZU91dDogZWFzZUxpbmVhcixcbiAgICBlYXNlSW5PdXQ6IGVhc2VMaW5lYXJcbn07XG5cbmV4cG9ydCB7XG4gICAgZWFzZUxpbmVhclxufTtcbiIsImZ1bmN0aW9uIGVhc2VJblF1YWQodCwgYiwgYywgZCkge1xuICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICsgYjtcbn1cblxuZnVuY3Rpb24gZWFzZU91dFF1YWQodCwgYiwgYywgZCkge1xuICAgIHJldHVybiAtYyAqICh0IC89IGQpICogKHQgLSAyKSArIGI7XG59XG5cbmZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCwgYiwgYywgZCkge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICB9XG4gICAgcmV0dXJuIC1jIC8gMiAqICgoLS10KSAqICh0IC0gMikgLSAxKSArIGI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBlYXNlSW46IGVhc2VJblF1YWQsXG4gICAgZWFzZU91dDogZWFzZU91dFF1YWQsXG4gICAgZWFzZUluT3V0OiBlYXNlSW5PdXRRdWFkXG59O1xuXG5leHBvcnQge1xuICAgIGVhc2VJblF1YWQsXG4gICAgZWFzZU91dFF1YWQsXG4gICAgZWFzZUluT3V0UXVhZFxufTtcbiIsImZ1bmN0aW9uIGVhc2VJblF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICsgYjtcbn1cblxuZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xufVxuXG5mdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0LCBiLCBjLCBkKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGMgLyAyICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgfVxuICAgIHJldHVybiAtYyAvIDIgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgLSAyKSArIGI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBlYXNlSW46IGVhc2VJblF1YXJ0LFxuICAgIGVhc2VPdXQ6IGVhc2VPdXRRdWFydCxcbiAgICBlYXNlSW5PdXQ6IGVhc2VJbk91dFF1YXJ0XG59O1xuXG5leHBvcnQge1xuICAgIGVhc2VJblF1YXJ0LFxuICAgIGVhc2VPdXRRdWFydCxcbiAgICBlYXNlSW5PdXRRdWFydFxufTtcbiIsImZ1bmN0aW9uIGVhc2VJblF1aW50KHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XG59XG5cbmZ1bmN0aW9uIGVhc2VPdXRRdWludCh0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0ICogdCArIDEpICsgYjtcbn1cblxuZnVuY3Rpb24gZWFzZUluT3V0UXVpbnQodCwgYiwgYywgZCkge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICB9XG4gICAgcmV0dXJuIGMgLyAyICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVhc2VJbjogZWFzZUluUXVpbnQsXG4gICAgZWFzZU91dDogZWFzZU91dFF1aW50LFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0UXVpbnRcbn07XG5cbmV4cG9ydCB7XG4gICAgZWFzZUluUXVpbnQsXG4gICAgZWFzZU91dFF1aW50LFxuICAgIGVhc2VJbk91dFF1aW50XG59O1xuIiwiY29uc3Qge2NvcywgUEksIHNpbn0gPSBNYXRoO1xuY29uc3QgUElfRDIgPSBQSSAvIDI7XG5cbmZ1bmN0aW9uIGVhc2VJblNpbmUodCwgYiwgYywgZCkge1xuICAgIHJldHVybiAtYyAqIGNvcyh0IC8gZCAqIFBJX0QyKSArIGMgKyBiO1xufVxuXG5mdW5jdGlvbiBlYXNlT3V0U2luZSh0LCBiLCBjLCBkKSB7XG4gICAgcmV0dXJuIGMgKiBzaW4odCAvIGQgKiBQSV9EMikgKyBiO1xufVxuXG5mdW5jdGlvbiBlYXNlSW5PdXRTaW5lKHQsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gLWMgLyAyICogKGNvcyhQSSAqIHQgLyBkKSAtIDEpICsgYjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVhc2VJbjogZWFzZUluU2luZSxcbiAgICBlYXNlT3V0OiBlYXNlT3V0U2luZSxcbiAgICBlYXNlSW5PdXQ6IGVhc2VJbk91dFNpbmVcbn07XG5cbmV4cG9ydCB7XG4gICAgZWFzZUluU2luZSxcbiAgICBlYXNlT3V0U2luZSxcbiAgICBlYXNlSW5PdXRTaW5lXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoaGFuZGxlcikge1xuICAgIGxldCB0aWNraW5nID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoZXZlbnQpIHtcbiAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0VGljayhldmVudCkge1xuICAgICAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdXBkYXRlKGV2ZW50KSk7XG4gICAgICAgICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXF1ZXN0VGljaztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGVnYXRlRXZlbnRzKHBhcmVudEVsLCBldmVudFR5cGUsIHRhZ05hbWUsIGNiKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUudG9VcHBlckNhc2UoKTtcblxuICAgIHBhcmVudEVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB3aGlsZSAodGFyZ2V0ICE9PSBwYXJlbnRFbCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSB0YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgY2IodGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2V2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVtaXR0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc2V0TWF4TGlzdGVuZXJzKDIwKTtcbiAgICB9XG5cbiAgICBvZmYgKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnModHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGVtaXR0ZXIgZnJvbSAnLi9lbWl0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmNyZWF0ZShlbWl0dGVyLnByb3RvdHlwZSk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSwge1xuLy8gICAgIF9ldmVudHM6IHtcbi8vICAgICAgICAgdmFsdWU6IHt9XG4vLyAgICAgfVxuLy8gfSk7XG4iLCJpbXBvcnQgZW1pdHRlciBmcm9tICcuL2VtaXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFydGJlYXQoaW50ZXJ2YWwpIHtcbiAgICBsZXQgYmVhdCA9IG51bGwsXG4gICAgICAgIHRpbWUgPSAwLFxuICAgICAgICBudW1UaW1lcyA9IDAsXG4gICAgICAgIG1heFRpbWVzID0gMCxcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gc3RhcnQobWF4TnVtVGltZXMgPSAwLCB0aW1lT2Zmc2V0ID0gMCkge1xuICAgICAgICBtYXhUaW1lcyA9IG1heE51bVRpbWVzO1xuICAgICAgICB0aW1lID0gdGltZU9mZnNldDtcbiAgICAgICAgbnVtVGltZXMgPSAwO1xuICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGJlYXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYmVhdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoZHQgPSAxKSB7XG4gICAgICAgIGlmICghcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGJlYXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF4VGltZXMgPiAwICYmIG51bVRpbWVzID49IG1heFRpbWVzKSB7XG4gICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBiZWF0LmVtaXQoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICByZXR1cm4gYmVhdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgKz0gZHQ7XG5cbiAgICAgICAgaWYgKHRpbWUgPj0gaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRpbWUgPSAwO1xuICAgICAgICAgICAgbnVtVGltZXMrKztcbiAgICAgICAgICAgIGJlYXQuZW1pdCgndXBkYXRlJywgbnVtVGltZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZWF0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEludGVydmFsKHZhbHVlKSB7XG4gICAgICAgIGludGVydmFsID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBiZWF0O1xuICAgIH1cblxuICAgIGJlYXQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoZW1pdHRlci5wcm90b3R5cGUpLCB7XG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBzdG9wLFxuICAgICAgICB1cGRhdGUsXG4gICAgICAgIGdldCBpbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcnZhbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGludGVydmFsKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXRJbnRlcnZhbFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJlYXQ7XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi9kZWJvdW5jZSc7XG5pbXBvcnQgZGVsZWdhdGVFdmVudHMgZnJvbSAnLi9kZWxlZ2F0ZUV2ZW50cyc7XG5pbXBvcnQgZW1pdHRlciBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IGV2ZW50QnVzIGZyb20gJy4vZXZlbnRCdXMnO1xuaW1wb3J0IGhlYXJ0YmVhdCBmcm9tICcuL2hlYXJ0YmVhdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWJvdW5jZSxcbiAgICBkZWxlZ2F0ZUV2ZW50cyxcbiAgICBlbWl0dGVyLFxuICAgIGV2ZW50QnVzLFxuICAgIGhlYXJ0YmVhdFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZwcyhlbCkge1xuXG4gICAgbGV0IHRpbWUgPSAwLFxuICAgICAgICBmcHMgPSAwLFxuICAgICAgICBjdXJyZW50RnBzID0gMCxcbiAgICAgICAgYXZlcmFnZUZwcyA9IDAsXG4gICAgICAgIHRpY2tzID0gMCxcbiAgICAgICAgdG90YWxGcHMgPSAwLFxuICAgICAgICBsYXN0RnBzID0gMCxcbiAgICAgICAgbGFzdEF2ZXJhZ2UgPSAwO1xuXG4gICAgaWYgKCFlbCkge1xuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZwcycpO1xuICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGVsLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICBlbC5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nID0gJzJweCA2cHgnO1xuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAnOTk5OTknO1xuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAnO1xuICAgICAgICBlbC5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgICAgZWwuc3R5bGUuZm9udFNpemUgPSAnMTBweCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydCgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGcHMgPT09IGxhc3RGcHMgJiYgYXZlcmFnZUZwcyA9PT0gbGFzdEF2ZXJhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsYXN0RnBzID0gY3VycmVudEZwcztcbiAgICAgICAgbGFzdEF2ZXJhZ2UgPSBhdmVyYWdlRnBzO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSAnRlBTOiAnICsgY3VycmVudEZwcyArICc8YnIgLz5BVkU6ICcgKyBhdmVyYWdlRnBzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShub3cpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBub3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWUgPT09IDApIHtcbiAgICAgICAgICAgIHRpbWUgPSBub3c7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm93IC0gMTAwMCA+IHRpbWUpIHtcbiAgICAgICAgICAgIHRpbWUgPSBub3c7XG4gICAgICAgICAgICBjdXJyZW50RnBzID0gZnBzO1xuICAgICAgICAgICAgZnBzID0gMDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRGcHMgPiAxKSB7XG4gICAgICAgICAgICAgICAgdGlja3MrKztcbiAgICAgICAgICAgICAgICB0b3RhbEZwcyArPSBjdXJyZW50RnBzO1xuICAgICAgICAgICAgICAgIGF2ZXJhZ2VGcHMgPSBNYXRoLmZsb29yKHRvdGFsRnBzIC8gdGlja3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVwb3J0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmcHMrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdXRvKCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG8pO1xuXG4gICAgICAgIHVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGF1dG8sXG4gICAgICAgIHVwZGF0ZVxuICAgIH07XG59XG4iLCJsZXQgcmVxdWVzdCA9IG51bGwsXG4gICAgZXhpdCA9IG51bGwsXG4gICAgY2hhbmdlID0gbnVsbCxcbiAgICBlcnJvciA9IG51bGwsXG4gICAgZWxlbWVudCA9IG51bGwsXG4gICAgZW5hYmxlZCA9IG51bGw7XG5cbmNvbnN0IGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5pZiAodHlwZW9mIGRvY0VsLnJlcXVlc3RGdWxsc2NyZWVuICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJlcXVlc3QgPSAncmVxdWVzdEZ1bGxzY3JlZW4nO1xuICAgIGV4aXQgPSAnZXhpdEZ1bGxzY3JlZW4nO1xuICAgIGNoYW5nZSA9ICdmdWxsc2NyZWVuY2hhbmdlJztcbiAgICBlcnJvciA9ICdmdWxsc2NyZWVuZXJyb3InO1xuICAgIGVsZW1lbnQgPSAnZnVsbHNjcmVlbkVsZW1lbnQnO1xuICAgIGVuYWJsZWQgPSAnZnVsbHNjcmVlbkVuYWJsZWQnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jRWwubW96UmVxdWVzdEZ1bGxTY3JlZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmVxdWVzdCA9ICdtb3pSZXF1ZXN0RnVsbFNjcmVlbic7XG4gICAgZXhpdCA9ICdtb3pDYW5jZWxGdWxsU2NyZWVuJztcbiAgICBjaGFuZ2UgPSAnbW96ZnVsbHNjcmVlbmNoYW5nZSc7XG4gICAgZXJyb3IgPSAnbW96ZnVsbHNjcmVlbmVycm9yJztcbiAgICBlbGVtZW50ID0gJ21vekZ1bGxTY3JlZW5FbGVtZW50JztcbiAgICBlbmFibGVkID0gJ21vekZ1bGxTY3JlZW5FbmFibGVkJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY0VsLm1zUmVxdWVzdEZ1bGxzY3JlZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmVxdWVzdCA9ICdtc1JlcXVlc3RGdWxsc2NyZWVuJztcbiAgICBleGl0ID0gJ21zRXhpdEZ1bGxzY3JlZW4nO1xuICAgIGNoYW5nZSA9ICdNU0Z1bGxzY3JlZW5DaGFuZ2UnO1xuICAgIGVycm9yID0gJ01TRnVsbHNjcmVlbkVycm9yJztcbiAgICBlbGVtZW50ID0gJ21zRnVsbHNjcmVlbkVsZW1lbnQnO1xuICAgIGVuYWJsZWQgPSAnbXNGdWxsc2NyZWVuRW5hYmxlZCc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2NFbC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXF1ZXN0ID0gJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJztcbiAgICBleGl0ID0gJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJztcbiAgICBjaGFuZ2UgPSAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZSc7XG4gICAgZXJyb3IgPSAnd2Via2l0RnVsbHNjcmVlbkVycm9yJztcbiAgICBlbGVtZW50ID0gJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50JztcbiAgICBlbmFibGVkID0gJ3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlcXVlc3QsXG4gICAgZXhpdCxcbiAgICBjaGFuZ2UsXG4gICAgZXJyb3IsXG4gICAgZWxlbWVudCxcbiAgICBlbmFibGVkXG59O1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZW1pdHRlciBmcm9tICcuLi9ldmVudHMvZW1pdHRlcic7XG5cbmNvbnN0IGZ1bGxzY3JlZW4gPSBPYmplY3QuY3JlYXRlKGVtaXR0ZXIucHJvdG90eXBlKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihhcGkuY2hhbmdlLCAoZXZlbnQpID0+IHtcbiAgICBmdWxsc2NyZWVuLmVtaXQoJ2NoYW5nZScsIGV2ZW50KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGFwaS5lcnJvciwgKGV2ZW50KSA9PiB7XG4gICAgZnVsbHNjcmVlbi5lbWl0KCdlcnJvcicsIGV2ZW50KTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhmdWxsc2NyZWVuLCB7XG4gICAgcmVxdWVzdDoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsID0gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgZWxbYXBpLnJlcXVlc3RdKHRydWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50W2FwaS5leGl0XSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0b2dnbGU6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNTdXBwb3J0ZWQ6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuICEhYXBpLnJlcXVlc3Q7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGlzRnVsbHNjcmVlbjoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gISFkb2N1bWVudFthcGkuZWxlbWVudF07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50W2FwaS5lbGVtZW50XTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZW5hYmxlZDoge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbYXBpLmVuYWJsZWRdO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bGxzY3JlZW47XG4iLCJmdW5jdGlvbiBnZXRDb2xvdXIociwgZywgYiwgYSA9IDEpIHtcbiAgICBpZiAodHlwZW9mIHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHIgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBgcmdiYSgke3J9LCR7Yn0sJHtnfSwke2F9KWA7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaGljcyB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpZHRoID09PSAnb2JqZWN0JyAmJiB3aWR0aC50YWdOYW1lID09PSAnQ0FOVkFTJykge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSB3aWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLnNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cblxuICAgIGdldCBjb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdHg7XG4gICAgfVxuXG4gICAgZmlsbChyLCBnLCBiLCBhID0gMSkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBnZXRDb2xvdXIociwgZywgYiwgYSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0cm9rZShyLCBnLCBiLCBhID0gMSkge1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGdldENvbG91cihyLCBnLCBiLCBhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2lyY2xlKHgsIHksIHJhZGl1cykge1xuICAgICAgICBjb25zdCB7Y3R4fSA9IHRoaXM7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCwgYW5nbGUgPSAwKSB7XG4gICAgICAgIGNvbnN0IHtjdHh9ID0gdGhpcztcbiAgICAgICAgaWYgKGFuZ2xlICE9PSAwKSB7XG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBjdHgucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5yZWN0KC13aWR0aCAvIDIsIC1oZWlnaHQgLyAyLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3R4LnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxpbmUoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgY29uc3Qge2N0eH0gPSB0aGlzO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxpbmVXaWR0aCh3aWR0aCkge1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbW92ZSh4LCB5KSB7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW1hZ2UoZWwsIHgsIHksIGFuZ2xlID0gMCkge1xuICAgICAgICBjb25zdCB7Y3R4fSA9IHRoaXM7XG4gICAgICAgIGlmIChhbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IGVsLndpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFkgPSBlbC5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoeCArIG9mZnNldFgsIHkgKyBvZmZzZXRZKTtcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoYW5nbGUpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShlbCwgLW9mZnNldFgsIC1vZmZzZXRZKTtcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGVsLCB4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0ZXh0KHN0ciwgeCwgeSkge1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChzdHIsIHgsIHkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRGb250U3R5bGUoZmFtaWx5LCBzaXplKSB7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBgJHtzaXplfXB4ICR7ZmFtaWx5fWA7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VEYXRhKHggPSAwLCB5ID0gMCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjb25zdCB7Y3R4LCBjYW52YXN9ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGN0eC5nZXRJbWFnZURhdGEoeCwgeSwgd2lkdGggfHwgY2FudmFzLndpZHRoLCBoZWlnaHQgfHwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgZ2V0UGl4ZWwoeCwgeSkge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGEpO1xuICAgIH1cblxuICAgIHNldFBpeGVsKHgsIHksIHIsIGcsIGIsIGEpIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICAgICAgICBjb25zdCB7d2lkdGgsIGRhdGF9ID0gdGhpcy5nZXRJbWFnZURhdGEoKTtcbiAgICAgICAgY29uc3QgaSA9ICh4ICsgeSAqIHdpZHRoKSAqIDQ7XG4gICAgICAgIGRhdGFbaSArIDBdID0gcjtcbiAgICAgICAgZGF0YVtpICsgMV0gPSBnO1xuICAgICAgICBkYXRhW2kgKyAyXSA9IGI7XG4gICAgICAgIGRhdGFbaSArIDNdID0gYTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXJDaXJjbGUoeCwgeSwgcmFkaXVzID0gMjApIHtcbiAgICAgICAgY29uc3Qge2N0eH0gPSB0aGlzO1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG4gICAgICAgIHRoaXMuY2lyY2xlKHgsIHksIHJhZGl1cyk7XG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0cmFuc2xhdGVBbmQoeCwgeSwgZm4pIHtcbiAgICAgICAgY29uc3Qge2N0eH0gPSB0aGlzO1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgICBmbihjdHgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcihyLCBnLCBiLCBhID0gMSkge1xuICAgICAgICBjb25zdCBjb2xvciA9IGdldENvbG91cihyLCBnLCBiLCBhKTtcbiAgICAgICAgY29uc3Qge2N0eH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSB0aGlzLmNhbnZhcztcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2l6ZSh3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jYW52YXMucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IGxvYWRTY3JpcHQgZnJvbSAnLi4vaHR0cC9sb2FkU2NyaXB0JztcblxuLy8gZXhhbXBsZSB1c2FnZTpcbi8vXG4vLyBjb25zdCBvcHRzID0ge1xuLy8gICAgIGZyaWN0aW9uOiAwLjksXG4vLyAgICAgbWF4U3BlZWQ6IDFcbi8vIH07XG4vLyBndWkodHJ1ZSlcbi8vICAgICAudGhlbigoZykgPT4ge1xuLy8gICAgICAgICBnLmFkZChvcHRzLCAnZnJpY3Rpb24nLCAwLjcsIDAuOTk5KTtcbi8vICAgICAgICAgZy5hZGQob3B0cywgJ21heFNwZWVkJywgMC41LCAyKS5vbkNoYW5nZSgodmFsdWUpID0+IGNvbnNvbGUubG9nKHZhbHVlKSk7XG4vLyAgICAgfSlcbi8vICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ3VpKGxvY2FsaG9zdE9ubHkgPSBmYWxzZSkge1xuICAgIGlmIChsb2NhbGhvc3RPbmx5ICYmICEvXig/Omh0dHBzPzpcXC9cXC8pPyg/OmxvY2FsaG9zdHwxOTJcXC4xNjgpLy50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9kYXQtZ3VpLzAuNi4xL2RhdC5ndWkubWluLmpzJywgKGVyciwgc3JjKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBzY3JpcHQnLCBzcmMpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0Vycm9yIGxvYWRpbmcgc2NyaXB0JykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGcgPSBuZXcgd2luZG93LmRhdC5HVUkoe2F1dG9QbGFjZTogdHJ1ZX0pO1xuICAgICAgICAgICAgY29uc3QgcyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xuICAgICAgICAgICAgcy5pbnNlcnRSdWxlKCcuZGcuYWMge3otaW5kZXg6MTAwMDAgIWltcG9ydGFudH0nLCAwKTtcbiAgICAgICAgICAgIHMuaW5zZXJ0UnVsZSgnLmRnICoge2ZvbnQtc2l6ZToxMXB4ICFpbXBvcnRhbnR9JywgMCk7XG4gICAgICAgICAgICBzLmluc2VydFJ1bGUoJy5kZyBpbnB1dCB7Zm9udDoxMXB4IEx1Y2lkYSBHcmFuZGUsc2Fucy1zZXJpZiAhaW1wb3J0YW50fScsIDApO1xuICAgICAgICAgICAgcmVzb2x2ZShnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMb2NhdGlvbihocmVmKSB7XG4gICAgY29uc3QgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsLmhyZWYgPSBocmVmO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzaDogbC5oYXNoLFxuICAgICAgICBob3N0OiBsLmhvc3QsXG4gICAgICAgIGhvc3RuYW1lOiBsLmhvc3RuYW1lLFxuICAgICAgICBwYXRobmFtZTogbC5wYXRobmFtZSxcbiAgICAgICAgcG9ydDogbC5wb3J0LFxuICAgICAgICBwcm90b2NvbDogbC5wcm90b2NvbCxcbiAgICAgICAgc2VhcmNoOiBsLnNlYXJjaFxuICAgIH07XG59XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSAnLi9nZXRMb2NhdGlvbic7XG5pbXBvcnQganNvbnAgZnJvbSAnLi9qc29ucCc7XG5pbXBvcnQgbG9hZFNjcmlwdCBmcm9tICcuL2xvYWRTY3JpcHQnO1xuaW1wb3J0IHVybFBhcmFtcyBmcm9tICcuL3VybFBhcmFtcyc7XG5pbXBvcnQgeGhyIGZyb20gJy4veGhyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldExvY2F0aW9uLFxuICAgIGpzb25wLFxuICAgIGxvYWRTY3JpcHQsXG4gICAgdXJsUGFyYW1zLFxuICAgIHhoclxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGpzb25wKHVybCwgY2IsIHRpbWVvdXQgPSA1MDAwKSB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBganNvbnBfY2FsbGJhY2tfJHtNYXRoLnJvdW5kKDEwMDAwMCAqIE1hdGgucmFuZG9tKCkpfWA7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gdXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nO1xuXG4gICAgY29uc3QgdGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB3aW5kb3dbY2FsbGJhY2tdKG51bGwsICdqc29ucCBlcnJvcicpO1xuICAgIH0sIHRpbWVvdXQpO1xuXG4gICAgd2luZG93W2NhbGxiYWNrXSA9IGZ1bmN0aW9uKGRhdGEsIGVyciA9IG51bGwpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICBkZWxldGUgd2luZG93W2NhbGxiYWNrXTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICBjYihkYXRhLCBlcnIpO1xuICAgIH07XG5cbiAgICBzY3JpcHQuc3JjID0gYCR7dXJsfSR7c2VwYXJhdG9yfWNhbGxiYWNrPSR7Y2FsbGJhY2t9YDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU2NyaXB0KHNyYywgY2IpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gY2IobnVsbCwgc3JjKSk7XG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4gY2IodHJ1ZSwgc3JjKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIHJldHVybiBzY3JpcHQ7XG59XG4iLCJjb25zdCBwbHVzID0gL1xcKy9nOyAgLy8gbWF0Y2ggJysnIHN5bWJvbFxuY29uc3Qgc2VhcmNoID0gLyhbXiY9XSspPT8oW14mXSopL2c7XG5cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0ci5yZXBsYWNlKHBsdXMsICcgJykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cmxQYXJhbXMocXVlcnkpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5IHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMSk7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XG4gICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIHBhcmFtc1tkZWNvZGUobWF0Y2hbMV0pXSA9IGRlY29kZShtYXRjaFsyXSk7XG4gICAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geGhyKHVybCwgdHlwZSA9ICdqc29uJykge1xuICAgIGNvbnN0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcS5yZXNwb25zZTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnanNvbicgJiYgdHlwZW9mIHJlc3BvbnNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHJlamVjdChyZXEuc3RhdHVzKSk7XG4gICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICByZXEucmVzcG9uc2VUeXBlID0gdHlwZTtcbiAgICAgICAgLy8gcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICAgIHJlcS5zZW5kKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG59XG4iLCJpbXBvcnQgJy4vcG9seWZpbGwnO1xuaW1wb3J0IGFycmF5IGZyb20gJy4vYXJyYXknO1xuaW1wb3J0IGRvbSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgZWFzZSBmcm9tICcuL2Vhc2UnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgZnBzIGZyb20gJy4vZnBzJztcbmltcG9ydCBmdWxsc2NyZWVuIGZyb20gJy4vZnVsbHNjcmVlbic7XG5pbXBvcnQgZ3JhcGhpY3MgZnJvbSAnLi9ncmFwaGljcyc7XG5pbXBvcnQgZ3VpIGZyb20gJy4vZ3VpJztcbmltcG9ydCBodHRwIGZyb20gJy4vaHR0cCc7XG5pbXBvcnQgaW5wdXQgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgbGlua2VkTGlzdCBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCBtYXRoIGZyb20gJy4vbWF0aCc7XG5pbXBvcnQgbWVkaWEgZnJvbSAnLi9tZWRpYSc7XG5pbXBvcnQgb2JqZWN0UG9vbCBmcm9tICcuL29iamVjdC1wb29sJztcbmltcG9ydCBQYXJ0aWNsZSBmcm9tICcuL3BhcnRpY2xlJztcbmltcG9ydCBQYXJ0aWNsZUdyb3VwIGZyb20gJy4vcGFydGljbGUnO1xuaW1wb3J0IHBsYXRmb3JtIGZyb20gJy4vcGxhdGZvcm0nO1xuaW1wb3J0IHBvcHVwIGZyb20gJy4vcG9wdXAnO1xuaW1wb3J0IFF1YWRUcmVlIGZyb20gJy4vcXVhZC10cmVlJztcbmltcG9ydCBzaGFyZSBmcm9tICcuL3NoYXJlJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5pbXBvcnQgc3RyaW5nIGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCBUaWNrZXIgZnJvbSAnLi90aWNrZXInO1xuaW1wb3J0IHRyYWNrIGZyb20gJy4vdHJhY2snO1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuaW1wb3J0IHZpc2liaWxpdHkgZnJvbSAnLi92aXNpYmlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFycmF5LFxuICAgIGRvbSxcbiAgICBlYXNlLFxuICAgIGV2ZW50cyxcbiAgICBmcHMsXG4gICAgZnVsbHNjcmVlbixcbiAgICBncmFwaGljcyxcbiAgICBndWksXG4gICAgaHR0cCxcbiAgICBpbnB1dCxcbiAgICBsaW5rZWRMaXN0LFxuICAgIG1hdGgsXG4gICAgbWVkaWEsXG4gICAgb2JqZWN0UG9vbCxcbiAgICBQYXJ0aWNsZSxcbiAgICBQYXJ0aWNsZUdyb3VwLFxuICAgIHBsYXRmb3JtLFxuICAgIHBvcHVwLFxuICAgIFF1YWRUcmVlLFxuICAgIHNoYXJlLFxuICAgIHN0b3JhZ2UsXG4gICAgc3RyaW5nLFxuICAgIFRpY2tlcixcbiAgICBUd2VlbixcbiAgICB0cmFjayxcbiAgICB2aXNpYmlsaXR5XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xpY2tPdXRzaWRlKGVsLCBmbikge1xuICAgIGZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBpbnNpZGUgPSBmYWxzZTtcblxuICAgICAgICB3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBlbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGluc2lkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5zaWRlKSB7XG4gICAgICAgICAgICBmbihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRvdWNoT3V0c2lkZShldmVudCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGlja091dHNpZGUpO1xuICAgICAgICBvbkNsaWNrT3V0c2lkZShldmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaE91dHNpZGUpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrT3V0c2lkZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaE91dHNpZGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveVxuICAgIH07XG59XG4iLCJpbXBvcnQgY2xpY2tPdXRzaWRlIGZyb20gJy4vY2xpY2tPdXRzaWRlJztcbmltcG9ydCBrZXlib2FyZCBmcm9tICcuL2tleWJvYXJkJztcbmltcG9ydCBrZXlJbnB1dCBmcm9tICcuL2tleUlucHV0JztcbmltcG9ydCBtaWNyb3Bob25lIGZyb20gJy4vbWljcm9waG9uZSc7XG5pbXBvcnQgbW91c2VMZWZ0V2luZG93IGZyb20gJy4vbW91c2VMZWZ0V2luZG93JztcbmltcG9ydCBtb3VzZVdoZWVsIGZyb20gJy4vbW91c2VXaGVlbCc7XG5pbXBvcnQgcG9pbnRlckNvb3JkcyBmcm9tICcuL3BvaW50ZXJDb29yZHMnO1xuaW1wb3J0IHRvdWNoSW5wdXQgZnJvbSAnLi90b3VjaElucHV0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNsaWNrT3V0c2lkZSxcbiAgICBrZXlib2FyZCxcbiAgICBrZXlJbnB1dCxcbiAgICBtaWNyb3Bob25lLFxuICAgIG1vdXNlTGVmdFdpbmRvdyxcbiAgICBtb3VzZVdoZWVsLFxuICAgIHBvaW50ZXJDb29yZHMsXG4gICAgdG91Y2hJbnB1dFxufTtcbiIsImltcG9ydCBhcnJheSBmcm9tICcuLi9hcnJheS9hcnJheSc7XG5pbXBvcnQgZW1pdHRlciBmcm9tICcuLi9ldmVudHMvZW1pdHRlcic7XG5pbXBvcnQga2V5Ym9hcmQgZnJvbSAnLi9rZXlib2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleUlucHV0KCkge1xuICAgIGNvbnN0IGFwaSA9IE9iamVjdC5jcmVhdGUoZW1pdHRlci5wcm90b3R5cGUpO1xuICAgIGNvbnN0IGtleXMgPSBhcnJheSgyNTYsIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGVtaXRLZXkoa2V5Q29kZSkge1xuICAgICAgICBjb25zdCBrZXlOYW1lID0gT2JqZWN0LmtleXMoa2V5Ym9hcmQpLnJlZHVjZSgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleWJvYXJkW2tleV0gPT09IGtleUNvZGUgPyBrZXkgOiB2YWx1ZTtcbiAgICAgICAgfSwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChrZXlOYW1lKSB7XG4gICAgICAgICAgICBhcGkuZW1pdChrZXlOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGtleXNbZXZlbnQua2V5Q29kZV0gPSB0cnVlO1xuICAgICAgICBhcGkuZW1pdCgna2V5ZG93bicsIGV2ZW50LmtleUNvZGUpO1xuICAgICAgICBlbWl0S2V5KGV2ZW50LmtleUNvZGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAga2V5c1tldmVudC5rZXlDb2RlXSA9IGZhbHNlO1xuICAgICAgICBhcGkuZW1pdCgna2V5dXAnLCBldmVudC5rZXlDb2RlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbktleVVwLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBvbktleVVwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0Rvd24oa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXlzW2tleV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVmdCgpIHtcbiAgICAgICAgcmV0dXJuIGtleXNba2V5Ym9hcmQuTEVGVF0gfHwga2V5c1trZXlib2FyZC5BXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIGtleXNba2V5Ym9hcmQuUklHSFRdIHx8IGtleXNba2V5Ym9hcmQuRF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXAoKSB7XG4gICAgICAgIHJldHVybiBrZXlzW2tleWJvYXJkLlVQXSB8fCBrZXlzW2tleWJvYXJkLlddO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvd24oKSB7XG4gICAgICAgIHJldHVybiBrZXlzW2tleWJvYXJkLkRPV05dIHx8IGtleXNba2V5Ym9hcmQuU107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3BhY2UoKSB7XG4gICAgICAgIHJldHVybiBrZXlzW2tleWJvYXJkLlNQQUNFXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGUodmFsdWUgPSB0cnVlKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGFkZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkKCk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhcGksIHtcbiAgICAgICAga2V5Ym9hcmQsXG4gICAgICAgIGVuYWJsZSxcbiAgICAgICAgaXNEb3duLFxuICAgICAgICBsZWZ0LFxuICAgICAgICByaWdodCxcbiAgICAgICAgdXAsXG4gICAgICAgIGRvd24sXG4gICAgICAgIHNwYWNlXG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgQTogJ0EnLmNoYXJDb2RlQXQoMCksXG4gICAgQjogJ0InLmNoYXJDb2RlQXQoMCksXG4gICAgQzogJ0MnLmNoYXJDb2RlQXQoMCksXG4gICAgRDogJ0QnLmNoYXJDb2RlQXQoMCksXG4gICAgRTogJ0UnLmNoYXJDb2RlQXQoMCksXG4gICAgRjogJ0YnLmNoYXJDb2RlQXQoMCksXG4gICAgRzogJ0cnLmNoYXJDb2RlQXQoMCksXG4gICAgSDogJ0gnLmNoYXJDb2RlQXQoMCksXG4gICAgSTogJ0knLmNoYXJDb2RlQXQoMCksXG4gICAgSjogJ0onLmNoYXJDb2RlQXQoMCksXG4gICAgSzogJ0snLmNoYXJDb2RlQXQoMCksXG4gICAgTDogJ0wnLmNoYXJDb2RlQXQoMCksXG4gICAgTTogJ00nLmNoYXJDb2RlQXQoMCksXG4gICAgTjogJ04nLmNoYXJDb2RlQXQoMCksXG4gICAgTzogJ08nLmNoYXJDb2RlQXQoMCksXG4gICAgUDogJ1AnLmNoYXJDb2RlQXQoMCksXG4gICAgUTogJ1EnLmNoYXJDb2RlQXQoMCksXG4gICAgUjogJ1InLmNoYXJDb2RlQXQoMCksXG4gICAgUzogJ1MnLmNoYXJDb2RlQXQoMCksXG4gICAgVDogJ1QnLmNoYXJDb2RlQXQoMCksXG4gICAgVTogJ1UnLmNoYXJDb2RlQXQoMCksXG4gICAgVjogJ1YnLmNoYXJDb2RlQXQoMCksXG4gICAgVzogJ1cnLmNoYXJDb2RlQXQoMCksXG4gICAgWDogJ1gnLmNoYXJDb2RlQXQoMCksXG4gICAgWTogJ1knLmNoYXJDb2RlQXQoMCksXG4gICAgWjogJ1onLmNoYXJDb2RlQXQoMCksXG4gICAgWkVSTzogJzAnLmNoYXJDb2RlQXQoMCksXG4gICAgT05FOiAnMScuY2hhckNvZGVBdCgwKSxcbiAgICBUV086ICcyJy5jaGFyQ29kZUF0KDApLFxuICAgIFRIUkVFOiAnMycuY2hhckNvZGVBdCgwKSxcbiAgICBGT1VSOiAnNCcuY2hhckNvZGVBdCgwKSxcbiAgICBGSVZFOiAnNScuY2hhckNvZGVBdCgwKSxcbiAgICBTSVg6ICc2Jy5jaGFyQ29kZUF0KDApLFxuICAgIFNFVkVOOiAnNycuY2hhckNvZGVBdCgwKSxcbiAgICBFSUdIVDogJzgnLmNoYXJDb2RlQXQoMCksXG4gICAgTklORTogJzknLmNoYXJDb2RlQXQoMCksXG4gICAgTlVNUEFEXzA6IDk2LFxuICAgIE5VTVBBRF8xOiA5NyxcbiAgICBOVU1QQURfMjogOTgsXG4gICAgTlVNUEFEXzM6IDk5LFxuICAgIE5VTVBBRF80OiAxMDAsXG4gICAgTlVNUEFEXzU6IDEwMSxcbiAgICBOVU1QQURfNjogMTAyLFxuICAgIE5VTVBBRF83OiAxMDMsXG4gICAgTlVNUEFEXzg6IDEwNCxcbiAgICBOVU1QQURfOTogMTA1LFxuICAgIE5VTVBBRF9NVUxUSVBMWTogMTA2LFxuICAgIE5VTVBBRF9BREQ6IDEwNyxcbiAgICBOVU1QQURfRU5URVI6IDEwOCxcbiAgICBOVU1QQURfU1VCVFJBQ1Q6IDEwOSxcbiAgICBOVU1QQURfREVDSU1BTDogMTEwLFxuICAgIE5VTVBBRF9ESVZJREU6IDExMSxcbiAgICBGMTogMTEyLFxuICAgIEYyOiAxMTMsXG4gICAgRjM6IDExNCxcbiAgICBGNDogMTE1LFxuICAgIEY1OiAxMTYsXG4gICAgRjY6IDExNyxcbiAgICBGNzogMTE4LFxuICAgIEY4OiAxMTksXG4gICAgRjk6IDEyMCxcbiAgICBGMTA6IDEyMSxcbiAgICBGMTE6IDEyMixcbiAgICBGMTI6IDEyMyxcbiAgICBGMTM6IDEyNCxcbiAgICBGMTQ6IDEyNSxcbiAgICBGMTU6IDEyNixcbiAgICBDT0xPTjogMTg2LFxuICAgIEVRVUFMUzogMTg3LFxuICAgIFVOREVSU0NPUkU6IDE4OSxcbiAgICBRVUVTVElPTl9NQVJLOiAxOTEsXG4gICAgVElMREU6IDE5MixcbiAgICBPUEVOX0JSQUNLRVQ6IDIxOSxcbiAgICBCQUNLV0FSRF9TTEFTSDogMjIwLFxuICAgIENMT1NFRF9CUkFDS0VUOiAyMjEsXG4gICAgUVVPVEVTOiAyMjIsXG4gICAgQkFDS1NQQUNFOiA4LFxuICAgIFRBQjogOSxcbiAgICBDTEVBUjogMTIsXG4gICAgRU5URVI6IDEzLFxuICAgIFNISUZUOiAxNixcbiAgICBDT05UUk9MOiAxNyxcbiAgICBBTFQ6IDE4LFxuICAgIENBUFNfTE9DSzogMjAsXG4gICAgRVNDOiAyNyxcbiAgICBTUEFDRTogMzIsXG4gICAgUEFHRV9VUDogMzMsXG4gICAgUEFHRV9ET1dOOiAzNCxcbiAgICBFTkQ6IDM1LFxuICAgIEhPTUU6IDM2LFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgSU5TRVJUOiA0NSxcbiAgICBERUxFVEU6IDQ2LFxuICAgIEhFTFA6IDQ3LFxuICAgIE5VTV9MT0NLOiAxNDRcbn07XG4iLCJpbXBvcnQgZW1pdHRlciBmcm9tICcuLi9ldmVudHMvZW1pdHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pY3JvcGhvbmUoKSB7XG4gICAgY29uc3QgbWljID0gT2JqZWN0LmNyZWF0ZShlbWl0dGVyLnByb3RvdHlwZSk7XG4gICAgbGV0IHN0cmVhbSA9IG51bGw7XG5cbiAgICBjb25zdCBnZXRVc2VyTWVkaWEgPSAobmF2aWdhdG9yLmdldFVzZXJNZWRpYSB8fFxuICAgICAgICBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8XG4gICAgICAgIG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHxcbiAgICAgICAgbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhKTtcblxuICAgIGNvbnN0IGlzU3VwcG9ydGVkID0gISFnZXRVc2VyTWVkaWE7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICBtaWMuZW1pdCgnZXJyb3InLCAnTm90IHN1cHBvcnRlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICBhdWRpbzogdHJ1ZVxuICAgICAgICB9LCAobWVkaWFTdHJlYW0pID0+IHtcbiAgICAgICAgICAgIHN0cmVhbSA9IG1lZGlhU3RyZWFtO1xuICAgICAgICAgICAgbWljLmVtaXQoJ2Nvbm5lY3QnLCBzdHJlYW0pO1xuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1Blcm1pc3Npb25EZW5pZWRFcnJvcicgfHwgZSA9PT0gJ1BFUk1JU1NJT05fREVOSUVEJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQZXJtaXNzaW9uIGRlbmllZC4gVW5kbyBieSBjbGlja2luZyB0aGUgY2FtZXJhIGljb24gaW4gdGhlIGFkZHJlc3MgYmFyJyk7XG4gICAgICAgICAgICAgICAgbWljLmVtaXQoJ2RlbmllZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaWMuZW1pdCgnZXJyb3InLCBlLm1lc3NhZ2UgfHwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgICAgIHN0cmVhbS5zdG9wKCk7XG4gICAgICAgICAgICBzdHJlYW0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlV2ViQXVkaW9Tb3VyY2Uod2ViQXVkaW9Db250ZXh0LCBjb25uZWN0VG8pIHtcbiAgICAgICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gd2ViQXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XG5cbiAgICAgICAgaWYgKGNvbm5lY3RUbykge1xuICAgICAgICAgICAgc291cmNlLmNvbm5lY3QoY29ubmVjdFRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhBQ0s6IHN0b3BzIG1veiBnYXJiYWdlIGNvbGxlY3Rpb24ga2lsbGluZyB0aGUgc3RyZWFtXG4gICAgICAgIC8vIHNlZSBodHRwczovL3N1cHBvcnQubW96aWxsYS5vcmcvZW4tVVMvcXVlc3Rpb25zLzk4NDE3OVxuICAgICAgICBpZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICAgICAgICAgICAgd2luZG93LmhhY2tfZm9yX21vemlsbGEgPSBzb3VyY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG1pYywge1xuICAgICAgICBjb25uZWN0LFxuICAgICAgICBkaXNjb25uZWN0LFxuICAgICAgICBjcmVhdGVXZWJBdWRpb1NvdXJjZSxcbiAgICAgICAgaXNTdXBwb3J0ZWQ6ICgpID0+IGlzU3VwcG9ydGVkLFxuICAgICAgICBzdHJlYW06ICgpID0+IHN0cmVhbVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW91c2VMZWZ0V2luZG93KGNiKSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgICBjb25zdCBmcm9tID0gZXZlbnQucmVsYXRlZFRhcmdldCB8fCBldmVudC50b0VsZW1lbnQ7XG4gICAgICAgIGlmICghZnJvbSB8fCBmcm9tLm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZXIsIGZhbHNlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3kgKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iLCJpbXBvcnQgZW1pdHRlciBmcm9tICcuLi9ldmVudHMvZW1pdHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdXNlV2hlZWwoc3BlZWQpIHtcbiAgICBzcGVlZCA9IHNwZWVkIHx8IDI7XG5cbiAgICBsZXQgd2hlZWw7XG5cbiAgICBmdW5jdGlvbiB3aGVlbEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gKGV2ZW50LmRldGFpbCA8IDAgfHwgZXZlbnQud2hlZWxEZWx0YSA+IDApID8gMSA6IC0xO1xuICAgICAgICBjb25zdCBkZWx0YSA9IGRpcmVjdGlvbiAqIHNwZWVkO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICB3aGVlbC5lbWl0KCd1cCcsIGRlbHRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoZWVsLmVtaXQoJ2Rvd24nLCBkZWx0YSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGVlbC5lbWl0KCd1cGRhdGUnLCBkZWx0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICBpZiAoJ29ubW91c2V3aGVlbCcgaW4gd2luZG93KSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHdoZWVsSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB3aGVlbEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKCdvbm1vdXNld2hlZWwnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB3aGVlbEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgd2hlZWxIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQoKTtcblxuICAgIHdoZWVsID0gT2JqZWN0LmNyZWF0ZShlbWl0dGVyLnByb3RvdHlwZSwge1xuICAgICAgICBfZXZlbnRzOiB7XG4gICAgICAgICAgICB2YWx1ZToge31cbiAgICAgICAgfSxcbiAgICAgICAgYWRkOiB7XG4gICAgICAgICAgICB2YWx1ZTogYWRkXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZToge1xuICAgICAgICAgICAgdmFsdWU6IHJlbW92ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh3aGVlbCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb2ludGVyQ29vcmRzKCkge1xuICAgIGxldCBzZWxmO1xuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlQ29vcmRzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBYID0gZXZlbnQuY2xpZW50WCB8fCAwO1xuICAgICAgICBjb25zdCBwWSA9IGV2ZW50LmNsaWVudFkgfHwgMDtcbiAgICAgICAgY29uc3Qgc1ggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIGNvbnN0IHNZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBzZWxmLnggPSBwWCArIHNYO1xuICAgICAgICBzZWxmLnkgPSBwWSArIHNZO1xuICAgICAgICBzZWxmLnBlcmNlbnRYID0gc2VsZi54IC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHNlbGYucGVyY2VudFkgPSBzZWxmLnkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgc2VsZiA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgcGVyY2VudFg6IDAsXG4gICAgICAgIHBlcmNlbnRZOiAwLFxuICAgICAgICBpc0xpc3RlbmluZzogZmFsc2UsXG5cbiAgICAgICAgb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBjYWxjdWxhdGVDb29yZHMpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBjYWxjdWxhdGVDb29yZHMpO1xuICAgICAgICAgICAgc2VsZi5pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgY2FsY3VsYXRlQ29vcmRzKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgY2FsY3VsYXRlQ29vcmRzKTtcbiAgICAgICAgICAgIHNlbGYuaXNMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZjtcbn1cbiIsImltcG9ydCBlbWl0dGVyIGZyb20gJy4uL2V2ZW50cy9lbWl0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG91Y2hJbnB1dChlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQuYm9keTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHN0YXJ0OiBbLTEsIC0xXSxcbiAgICAgICAgbW92ZTogWy0xLCAtMV0sXG4gICAgICAgIGVuZDogWy0xLCAtMV0sXG4gICAgICAgIHBvc2l0aW9uOiBbLTEsIC0xXSxcbiAgICAgICAgZGlzdGFuY2U6IFswLCAwXSxcbiAgICAgICAgZGlyZWN0aW9uOiBbJ25vbmUnLCAnbm9uZSddLFxuICAgICAgICB0b3VjaGluZzogZmFsc2UsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IG51bGxcbiAgICB9O1xuXG4gICAgbGV0IHNlbGY7XG5cbiAgICBmdW5jdGlvbiB0b3VjaEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoZXZlbnQgJiYgZXZlbnQudG91Y2hlcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLm9yaWdpbmFsRXZlbnQgPSBldmVudDtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICBjb25zdCB4ID0gdG91Y2ggJiYgdG91Y2gucGFnZVg7XG4gICAgICAgIGNvbnN0IHkgPSB0b3VjaCAmJiB0b3VjaC5wYWdlWTtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvdWNoc3RhcnQnOlxuICAgICAgICAgICAgICAgIGRhdGEuc3RhcnRbMF0gPSBkYXRhLm1vdmVbMF0gPSBkYXRhLmVuZFswXSA9IGRhdGEucG9zaXRpb25bMF0gPSB4O1xuICAgICAgICAgICAgICAgIGRhdGEuc3RhcnRbMV0gPSBkYXRhLm1vdmVbMV0gPSBkYXRhLmVuZFsxXSA9IGRhdGEucG9zaXRpb25bMV0gPSB5O1xuICAgICAgICAgICAgICAgIGRhdGEudG91Y2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgnc3RhcnQnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RvdWNobW92ZSc6XG4gICAgICAgICAgICAgICAgZGF0YS5tb3ZlWzBdID0gZGF0YS5wb3NpdGlvblswXSA9IHg7XG4gICAgICAgICAgICAgICAgZGF0YS5tb3ZlWzFdID0gZGF0YS5wb3NpdGlvblsxXSA9IHk7XG4gICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdtb3ZlJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3VjaGVuZCc6XG4gICAgICAgICAgICAgICAgZGF0YS5lbmRbMF0gPSBkYXRhLnBvc2l0aW9uWzBdID0geDtcbiAgICAgICAgICAgICAgICBkYXRhLmVuZFsxXSA9IGRhdGEucG9zaXRpb25bMV0gPSB5O1xuICAgICAgICAgICAgICAgIGRhdGEudG91Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ2VuZCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW4oZWxlbSkge1xuICAgICAgICBlbCA9IGVsZW0gfHwgZWw7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaEhhbmRsZXIpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaEhhbmRsZXIpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoSGFuZGxlcik7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHNlbGYucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaEhhbmRsZXIpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaEhhbmRsZXIpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoSGFuZGxlcik7XG4gICAgICAgIGVsID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgbGlzdGVuKGVsKTtcblxuICAgIHNlbGYgPSBPYmplY3QuY3JlYXRlKGVtaXR0ZXIucHJvdG90eXBlLCB7XG4gICAgICAgIF9ldmVudHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7fVxuICAgICAgICB9LFxuICAgICAgICBsaXN0ZW46IHtcbiAgICAgICAgICAgIHZhbHVlOiBsaXN0ZW5cbiAgICAgICAgfSxcbiAgICAgICAgaXNEb3duOiB7XG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudG91Y2hpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRvdWNoOiB7XG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IHtcbiAgICAgICAgICAgIHZhbHVlOiBkZXN0cm95XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHNlbGYpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlua2VkTGlzdChhcnIgPSBbXSkge1xuXG4gICAgbGV0IGZpcnN0LFxuICAgICAgICBsYXN0O1xuXG4gICAgLypcbiAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgICduZXh0JzogbnVsbCxcbiAgICAgICAgICAgICdwcmV2JzogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZW0gPSBsaW5rZWRMaXN0LmdldEZpcnN0KCk7XG4gICAgICAgIHdoaWxlKGl0ZW0pIHtcbiAgICAgICAgICAgIC8vIGRvIHN0dWZmXG4gICAgICAgICAgICBpdGVtID0gaXRlbS5uZXh0O1xuICAgICAgICB9XG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIHJlbW92ZShpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtLm5leHQpIHtcbiAgICAgICAgICAgIGl0ZW0ubmV4dC5wcmV2ID0gaXRlbS5wcmV2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLnByZXYpIHtcbiAgICAgICAgICAgIGl0ZW0ucHJldi5uZXh0ID0gaXRlbS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtID09PSBmaXJzdCkge1xuICAgICAgICAgICAgZmlyc3QgPSBpdGVtLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0gPT09IGxhc3QpIHtcbiAgICAgICAgICAgIGxhc3QgPSBpdGVtLnByZXY7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5uZXh0ID0gaXRlbS5wcmV2ID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNlcnRBZnRlcihpdGVtLCBhZnRlcikge1xuICAgICAgICByZW1vdmUoaXRlbSk7XG5cbiAgICAgICAgaXRlbS5wcmV2ID0gYWZ0ZXI7XG4gICAgICAgIGl0ZW0ubmV4dCA9IGFmdGVyLm5leHQ7XG5cbiAgICAgICAgaWYgKCFhZnRlci5uZXh0KSB7XG4gICAgICAgICAgICBsYXN0ID0gaXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFmdGVyLm5leHQucHJldiA9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICBhZnRlci5uZXh0ID0gaXRlbTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnNlcnRCZWZvcmUoaXRlbSwgYmVmb3JlKSB7XG4gICAgICAgIHJlbW92ZShpdGVtKTtcblxuICAgICAgICBpdGVtLnByZXYgPSBiZWZvcmUucHJldjtcbiAgICAgICAgaXRlbS5uZXh0ID0gYmVmb3JlO1xuXG4gICAgICAgIGlmICghYmVmb3JlLnByZXYpIHtcbiAgICAgICAgICAgIGZpcnN0ID0gaXRlbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJlZm9yZS5wcmV2Lm5leHQgPSBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYmVmb3JlLnByZXYgPSBpdGVtO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZChpdGVtKSB7XG4gICAgICAgIGlmICghZmlyc3QpIHtcbiAgICAgICAgICAgIGZpcnN0ID0gbGFzdCA9IGl0ZW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaSA9IGZpcnN0O1xuICAgICAgICAgICAgd2hpbGUgKGkubmV4dCkge1xuICAgICAgICAgICAgICAgIGkgPSBpLm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnNlcnRBZnRlcihpdGVtLCBpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gICAgICAgIGxldCBpdGVtID0gZmlyc3Q7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBmbihpdGVtKTtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtLm5leHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoZm4pIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGxpbmtlZExpc3QoKTtcbiAgICAgICAgbGV0IGl0ZW0gPSBmaXJzdDtcbiAgICAgICAgd2hpbGUgKGl0ZW0pIHtcbiAgICAgICAgICAgIGxpc3QuYWRkKGZuKGl0ZW0pKTtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IGFkZChpdGVtKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgZmlyc3QgKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRGaXJzdCAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsYXN0ICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRMYXN0ICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0O1xuICAgICAgICB9LFxuICAgICAgICBnZXQgbGVuZ3RoICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENvdW50ICgpIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICBsZXQgaSA9IGZpcnN0O1xuICAgICAgICAgICAgd2hpbGUgKGkpIHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIGkgPSBpLm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICBpbnNlcnRBZnRlcixcbiAgICAgICAgaW5zZXJ0QmVmb3JlLFxuICAgICAgICBmb3JFYWNoLFxuICAgICAgICBtYXBcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5nbGUoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBjb25zdCBkeCA9IHgyIC0geDE7XG4gICAgY29uc3QgZHkgPSB5MiAtIHkxO1xuICAgIHJldHVybiBNYXRoLmF0YW4yKGR5LCBkeCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjZXJwKGZyb20sIHRvLCB3ZWlnaHQgPSAwLjMpIHtcbiAgICBjb25zdCBmID0gKDEgLSBNYXRoLmNvcyh3ZWlnaHQgKiBNYXRoLlBJKSkgLyAyO1xuICAgIHJldHVybiAoZnJvbSAqICgxIC0gZikgKyB0byAqIGYpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2lyY2xlRGlzdHJpYnV0aW9uKHJhZGl1cywgb3JpZ2luID0ge3g6IDAsIHk6IDB9LCBwID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgY29uc3QgciA9IE1hdGguc3FydChNYXRoLnJhbmRvbSgpKSAqIHJhZGl1cztcbiAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICBwLnggPSBvcmlnaW4ueCArIE1hdGguY29zKHRoZXRhKSAqIHI7XG4gICAgcC55ID0gb3JpZ2luLnkgKyBNYXRoLnNpbih0aGV0YSkgKiByO1xuICAgIHJldHVybiBwO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgaWYgKG1pbiA+IG1heCkge1xuICAgICAgICBjb25zdCBhID0gbWluO1xuICAgICAgICBtaW4gPSBtYXg7XG4gICAgICAgIG1heCA9IGE7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA8IG1pbikge1xuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29pblRvc3MoaGVhZHMgPSB0cnVlLCB0YWlscyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyBoZWFkcyA6IHRhaWxzO1xufVxuIiwiLypcblRoZSBzaWduIHRlbGxzIHVzIGlmIGEgaXMgdG8gdGhlIGxlZnQgKC0pIG9yIHRoZSByaWdodCAoKykgb2YgYlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyb3NzUHJvZHVjdDJkKGFYLCBhWSwgYlgsIGJZKSB7XG4gICAgcmV0dXJuIGFYICogYlkgLSBhWSAqIGJYO1xufVxuIiwiY29uc3QgREVHID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVncmVlcyhyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiBERUc7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBjb25zdCBkeCA9IHgxIC0geDI7XG4gICAgY29uc3QgZHkgPSB5MSAtIHkyO1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzdGFuY2VTUSh4MSwgeTEsIHgyLCB5Mikge1xuICAgIGNvbnN0IGR4ID0geDEgLSB4MjtcbiAgICBjb25zdCBkeSA9IHkxIC0geTI7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwiLypcbi0gSWYgQSBhbmQgQiBhcmUgcGVycGVuZGljdWxhciAoYXQgOTAgZGVncmVlcyB0byBlYWNoIG90aGVyKSwgdGhlIHJlc3VsdFxub2YgdGhlIGRvdCBwcm9kdWN0IHdpbGwgYmUgemVybywgYmVjYXVzZSBjb3MozpgpIHdpbGwgYmUgemVyby5cbi0gSWYgdGhlIGFuZ2xlIGJldHdlZW4gQSBhbmQgQiBhcmUgbGVzcyB0aGFuIDkwIGRlZ3JlZXMsIHRoZSBkb3QgcHJvZHVjdFxud2lsbCBiZSBwb3NpdGl2ZSAoZ3JlYXRlciB0aGFuIHplcm8pLCBhcyBjb3MozpgpIHdpbGwgYmUgcG9zaXRpdmUsIGFuZFxudGhlIHZlY3RvciBsZW5ndGhzIGFyZSBhbHdheXMgcG9zaXRpdmUgdmFsdWVzLlxuLSBJZiB0aGUgYW5nbGUgYmV0d2VlbiBBIGFuZCBCIGFyZSBncmVhdGVyIHRoYW4gOTAgZGVncmVlcywgdGhlIGRvdFxucHJvZHVjdCB3aWxsIGJlIG5lZ2F0aXZlIChsZXNzIHRoYW4gemVybyksIGFzIGNvcyjOmCkgd2lsbCBiZSBuZWdhdGl2ZSxcbmFuZCB0aGUgdmVjdG9yIGxlbmd0aHMgYXJlIGFsd2F5cyBwb3NpdGl2ZSB2YWx1ZXNcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb3RQcm9kdWN0MmQoYVgsIGFZLCBiWCwgYlkpIHtcbiAgICByZXR1cm4gYVggKiBiWCArIGFZICogYlk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDaXJjbGVQb2ludHMob3JpZ2luWCwgb3JpZ2luWSwgcmFkaXVzLCBjb3VudCwgc3RhcnQsIENsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc3RhcnQgPSAtTWF0aC5QSSAvIDI7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRzID0gW10sXG4gICAgICAgIGNpcmMgPSBNYXRoLlBJICogMixcbiAgICAgICAgaW5jciA9IGNpcmMgLyBjb3VudDtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGNpcmMgKyBzdGFydDsgaSArPSBpbmNyKSB7XG4gICAgICAgIGNvbnN0IG9iID0gdHlwZW9mIENsYXNzID09PSAndW5kZWZpbmVkJyA/IHt9IDogbmV3IENsYXNzKCk7XG4gICAgICAgIG9iLnggPSBvcmlnaW5YICsgcmFkaXVzICogTWF0aC5jb3MoaSk7XG4gICAgICAgIG9iLnkgPSBvcmlnaW5ZICsgcmFkaXVzICogTWF0aC5zaW4oaSk7XG4gICAgICAgIHBvaW50cy5wdXNoKG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9pbnRzO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SW50ZXJzZWN0aW9uQXJlYShhWCwgYVksIGFXLCBhSCwgYlgsIGJZLCBiVywgYkgpIHtcbiAgICBjb25zdCBvdmVybGFwWCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGFYICsgYVcsIGJYICsgYlcpIC0gTWF0aC5tYXgoYVgsIGJYKSk7XG4gICAgY29uc3Qgb3ZlcmxhcFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihhWSArIGFILCBiWSArIGJIKSAtIE1hdGgubWF4KGFZLCBiWSkpO1xuICAgIHJldHVybiBvdmVybGFwWCAqIG92ZXJsYXBZO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3ZlcmxhcFgoYVgsIGFXLCBiWCwgYlcpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oYVggKyBhVywgYlggKyBiVykgLSBNYXRoLm1heChhWCwgYlgpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE92ZXJsYXBZKGFZLCBhSCwgYlksIGJIKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKGFZICsgYUgsIGJZICsgYkgpIC0gTWF0aC5tYXgoYVksIGJZKSk7XG59XG4iLCJpbXBvcnQgYW5nbGUgZnJvbSAnLi9hbmdsZSc7XG5pbXBvcnQgY2VycCBmcm9tICcuL2NlcnAnO1xuaW1wb3J0IGNpcmNsZURpc3RyaWJ1dGlvbiBmcm9tICcuL2NpcmNsZURpc3RyaWJ1dGlvbic7XG5pbXBvcnQgY2xhbXAgZnJvbSAnLi9jbGFtcCc7XG5pbXBvcnQgY29pblRvc3MgZnJvbSAnLi9jb2luVG9zcyc7XG5pbXBvcnQgY3Jvc3NQcm9kdWN0MmQgZnJvbSAnLi9jcm9zc1Byb2R1Y3QyZCc7XG5pbXBvcnQgZGVncmVlcyBmcm9tICcuL2RlZ3JlZXMnO1xuaW1wb3J0IGRpZmZlcmVuY2UgZnJvbSAnLi9kaWZmZXJlbmNlJztcbmltcG9ydCBkaXN0YW5jZSBmcm9tICcuL2Rpc3RhbmNlJztcbmltcG9ydCBkaXN0YW5jZVNxIGZyb20gJy4vZGlzdGFuY2VTcSc7XG5pbXBvcnQgZG90UHJvZHVjdDJkIGZyb20gJy4vZG90UHJvZHVjdDJkJztcbmltcG9ydCBnZXRDaXJjbGVQb2ludHMgZnJvbSAnLi9nZXRDaXJjbGVQb2ludHMnO1xuaW1wb3J0IGdldEludGVyc2VjdGlvbkFyZWEgZnJvbSAnLi9nZXRJbnRlcnNlY3Rpb25BcmVhJztcbmltcG9ydCBnZXRPdmVybGFwWCBmcm9tICcuL2dldE92ZXJsYXBYJztcbmltcG9ydCBnZXRPdmVybGFwWSBmcm9tICcuL2dldE92ZXJsYXBZJztcbmltcG9ydCBsZXJwIGZyb20gJy4vbGVycCc7XG5pbXBvcnQgbWFwIGZyb20gJy4vbWFwJztcbmltcG9ydCBub3JtYWxpemUgZnJvbSAnLi9ub3JtYWxpemUnO1xuaW1wb3J0IG9yaWVudGF0aW9uIGZyb20gJy4vb3JpZW50YXRpb24nO1xuaW1wb3J0IHBlcmNlbnRSZW1haW5pbmcgZnJvbSAnLi9wZXJjZW50UmVtYWluaW5nJztcbmltcG9ydCBwZXJzcGVjdGl2ZSBmcm9tICcuL3BlcnNwZWN0aXZlJztcbmltcG9ydCBxdWFkcmF0aWNDdXJ2ZSBmcm9tICcuL3F1YWRyYXRpY0N1cnZlJztcbmltcG9ydCByYWRpYW5zIGZyb20gJy4vcmFkaWFucyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9tJztcbmltcG9ydCByYW5kb21JbnQgZnJvbSAnLi9yYW5kb21JbnQnO1xuaW1wb3J0IHJhbmRvbVNpZ24gZnJvbSAnLi9yYW5kb21TaWduJztcbmltcG9ydCByb3RhdGVQb2ludCBmcm9tICcuL3JvdGF0ZVBvaW50JztcbmltcG9ydCByb3RhdGVUb0RlZyBmcm9tICcuL3JvdGF0ZVRvRGVnJztcbmltcG9ydCByb3RhdGVUb1JhZCBmcm9tICcuL3JvdGF0ZVRvUmFkJztcbmltcG9ydCByb3VuZFRvIGZyb20gJy4vcm91bmRUbyc7XG5pbXBvcnQgcm91bmRUb05lYXJlc3QgZnJvbSAnLi9yb3VuZFRvTmVhcmVzdCc7XG5pbXBvcnQgc2l6ZSBmcm9tICcuL3NpemUnO1xuaW1wb3J0IHNtZXJwIGZyb20gJy4vc21lcnAnO1xuaW1wb3J0IHNtb290aHN0ZXAgZnJvbSAnLi9zbW9vdGhzdGVwJztcbmltcG9ydCBzcGxpdFZhbHVlQW5kVW5pdCBmcm9tICcuL3NwbGl0VmFsdWVBbmRVbml0JztcbmltcG9ydCB3ZWlnaHRlZEF2ZXJhZ2UgZnJvbSAnLi93ZWlnaHRlZEF2ZXJhZ2UnO1xuaW1wb3J0IHdlaWdodGVkRGlzdHJpYnV0aW9uIGZyb20gJy4vd2VpZ2h0ZWREaXN0cmlidXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYW5nbGUsXG4gICAgY2VycCxcbiAgICBjaXJjbGVEaXN0cmlidXRpb24sXG4gICAgY2xhbXAsXG4gICAgY29pblRvc3MsXG4gICAgY3Jvc3NQcm9kdWN0MmQsXG4gICAgZGVncmVlcyxcbiAgICBkaWZmZXJlbmNlLFxuICAgIGRpc3RhbmNlLFxuICAgIGRpc3RhbmNlU3EsXG4gICAgZG90UHJvZHVjdDJkLFxuICAgIGdldENpcmNsZVBvaW50cyxcbiAgICBnZXRJbnRlcnNlY3Rpb25BcmVhLFxuICAgIGdldE92ZXJsYXBYLFxuICAgIGdldE92ZXJsYXBZLFxuICAgIGxlcnAsXG4gICAgbWFwLFxuICAgIG5vcm1hbGl6ZSxcbiAgICBvcmllbnRhdGlvbixcbiAgICBwZXJjZW50UmVtYWluaW5nLFxuICAgIHBlcnNwZWN0aXZlLFxuICAgIHF1YWRyYXRpY0N1cnZlLFxuICAgIHJhZGlhbnMsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUludCxcbiAgICByYW5kb21TaWduLFxuICAgIHJvdGF0ZVBvaW50LFxuICAgIHJvdGF0ZVRvRGVnLFxuICAgIHJvdGF0ZVRvUmFkLFxuICAgIHJvdW5kVG8sXG4gICAgcm91bmRUb05lYXJlc3QsXG4gICAgc21lcnAsXG4gICAgc21vb3Roc3RlcCxcbiAgICBzaXplLFxuICAgIHNwbGl0VmFsdWVBbmRVbml0LFxuICAgIHdlaWdodGVkQXZlcmFnZSxcbiAgICB3ZWlnaHRlZERpc3RyaWJ1dGlvblxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlcnAoZnJvbSwgdG8sIHdlaWdodCA9IDAuMykge1xuICAgIHJldHVybiBmcm9tICsgKHRvIC0gZnJvbSkgKiB3ZWlnaHQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXAodiwgYSwgYiwgeCwgeSkge1xuICAgIC8vIHZhbHVlLCBtaW4gZXhwZWN0ZWQsIG1heCBleHBlY3RlZCwgbWFwIG1pbiwgbWFwIG1heFxuICAgIC8vIGUuZy4gbWFwIHNvbWUgdmFsdWUgYmV0d2VlbiAwIHRvIDEwMCB0byAtNTAgdG8gNTBcbiAgICAvLyBtYXAoNTAsIDAsIDEwMCwgLTUwLCA1MCkgLy8gMFxuICAgIC8vIG1hcCgyNSwgMCwgMTAwLCAtNTAsIDUwKSAvLyAtMjVcbiAgICByZXR1cm4gKHYgPT09IGEpID8geCA6ICh2IC0gYSkgKiAoeSAtIHgpIC8gKGIgLSBhKSArIHg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yaWVudGF0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBlcmNlbnRSZW1haW5pbmcodmFsdWUsIHRvdGFsKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAlIHRvdGFsKSAvIHRvdGFsO1xufVxuIiwiLy8geCA9IHggKiBwZXJzcGVjdGl2ZVxuLy8geSA9IHkgKiBwZXJzcGVjdGl2ZVxuLy8gc2NhbGUgPSBwZXJzcGVjdGl2ZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZXJzcGVjdGl2ZSh6LCBmb2NhbExlbmd0aCA9IDMwMCkge1xuICAgIHJldHVybiBmb2NhbExlbmd0aCAvIChmb2NhbExlbmd0aCArIHopO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVhZHJhdGljQ3VydmUoZnJvbVgsIGZyb21ZLCBjcFgsIGNwWSwgdG9YLCB0b1ksIGdvVGhyb3VnaENQID0gZmFsc2UpIHtcbiAgICBjb25zdCBuID0gMjA7XG4gICAgY29uc3QgcG9pbnRzID0gW2Zyb21YLCBmcm9tWV07XG4gICAgbGV0IHhhID0gMDtcbiAgICBsZXQgeWEgPSAwO1xuXG4gICAgaWYgKGdvVGhyb3VnaENQKSB7XG4gICAgICAgIGNwWCA9IGNwWCAqIDIgLSAoZnJvbVggKyB0b1gpIC8gMjtcbiAgICAgICAgY3BZID0gY3BZICogMiAtIChmcm9tWSArIHRvWSkgLyAyO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47ICsraSkge1xuICAgICAgICBjb25zdCBqID0gaSAvIG47XG5cbiAgICAgICAgeGEgPSBmcm9tWCArICgoY3BYIC0gZnJvbVgpICogaik7XG4gICAgICAgIHlhID0gZnJvbVkgKyAoKGNwWSAtIGZyb21ZKSAqIGopO1xuXG4gICAgICAgIHBvaW50cy5wdXNoKHhhICsgKCgoY3BYICsgKCh0b1ggLSBjcFgpICogaikpIC0geGEpICogaiksIHlhICsgKCgoY3BZICsgKCh0b1kgLSBjcFkpICogaikpIC0geWEpICogaikpO1xuICAgIH1cblxuICAgIHJldHVybiBwb2ludHM7XG59XG4iLCJjb25zdCBSQUQgPSBNYXRoLlBJIC8gMTgwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYWRpYW5zKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIFJBRDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuICAgIGlmIChpc05hTihtYXgpKSB7XG4gICAgICAgIG1heCA9IG1pbjtcbiAgICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tU2lnbigpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuNSA/IC0xIDogMTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdGF0ZVBvaW50KHAsIHRoZXRhLCBvcmlnaW4gPSB7eDogMCwgeTogMH0sIHAxID0ge3g6IDAsIHk6IDB9KSB7XG4gICAgY29uc3Qgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSk7XG4gICAgY29uc3QgY29zVGhldGEgPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgcDEueCA9IChwLnggLSBvcmlnaW4ueCkgKiBjb3NUaGV0YSAtIChwLnkgLSBvcmlnaW4ueSkgKiBzaW5UaGV0YTtcbiAgICBwMS55ID0gKHAueCAtIG9yaWdpbi54KSAqIHNpblRoZXRhICsgKHAueSAtIG9yaWdpbi55KSAqIGNvc1RoZXRhO1xuICAgIHAxLnggKz0gb3JpZ2luLng7XG4gICAgcDEueSArPSBvcmlnaW4ueTtcbiAgICByZXR1cm4gcDE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3RhdGVUb0RlZyhzdGFydCwgZW5kKSB7XG4gICAgbGV0IGRpZmYgPSAoZW5kIC0gc3RhcnQpICUgMzYwO1xuICAgIGlmIChkaWZmICE9PSBkaWZmICUgMTgwKSB7XG4gICAgICAgIGRpZmYgPSAoZGlmZiA8IDApID8gZGlmZiArIDM2MCA6IGRpZmYgLSAzNjA7XG4gICAgfVxuICAgIHJldHVybiBzdGFydCArIGRpZmY7XG59XG4iLCJjb25zdCBQSTIgPSBNYXRoLlBJICogMjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm90YXRlVG9SQUQoc3RhcnQsIGVuZCkge1xuICAgIGxldCBkaWZmID0gKGVuZCAtIHN0YXJ0KSAlIFBJMjtcbiAgICBpZiAoZGlmZiAhPT0gZGlmZiAlIE1hdGguUEkpIHtcbiAgICAgICAgZGlmZiA9IGRpZmYgPCAwID8gZGlmZiArIFBJMiA6IGRpZmYgLSBQSTI7XG4gICAgfVxuICAgIHJldHVybiBzdGFydCArIGRpZmY7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByb3VuZFRvKHgsIHBsYWNlcyA9IDIpIHtcbiAgICBjb25zdCBkaXYgPSBNYXRoLnBvdygxMCwgcGxhY2VzKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh4ICogZGl2KSAvIGRpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdW5kVG9OZWFyZXN0KHZhbHVlLCB1bml0KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgLyB1bml0KSAqIHVuaXQ7XG59XG4iLCJmdW5jdGlvbiBnZXRTY2FsZShtZXRob2QsIHdpZHRoLCBoZWlnaHQsIGFyZWFXaWR0aCwgYXJlYUhlaWdodCkge1xuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ2NvdmVyJzpcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChhcmVhV2lkdGggLyB3aWR0aCwgYXJlYUhlaWdodCAvIGhlaWdodCk7XG4gICAgICAgIGNhc2UgJ2NvbnRhaW4nOlxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKGFyZWFXaWR0aCAvIHdpZHRoLCBhcmVhSGVpZ2h0IC8gaGVpZ2h0KTtcbiAgICAgICAgY2FzZSAnd2lkdGgnOlxuICAgICAgICAgICAgcmV0dXJuIGFyZWFXaWR0aCAvIHdpZHRoO1xuICAgICAgICBjYXNlICdoZWlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIGFyZWFIZWlnaHQgLyBoZWlnaHQ7XG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2l6ZShyZWN0LCBhcmVhV2lkdGgsIGFyZWFIZWlnaHQsIG1ldGhvZCA9ICdjb3ZlcicsIGF1dG9DZW50ZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZShtZXRob2QsIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0LCBhcmVhV2lkdGgsIGFyZWFIZWlnaHQpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5jZWlsKHJlY3Qud2lkdGggKiBzY2FsZSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5jZWlsKHJlY3QuaGVpZ2h0ICogc2NhbGUpO1xuXG4gICAgbGV0IHggPSAwLCB5ID0gMDtcblxuICAgIGlmIChhdXRvQ2VudGVyKSB7XG4gICAgICAgIHggPSBNYXRoLnJvdW5kKChhcmVhV2lkdGggLSB3aWR0aCkgKiAwLjUpO1xuICAgICAgICB5ID0gTWF0aC5yb3VuZCgoYXJlYUhlaWdodCAtIGhlaWdodCkgKiAwLjUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHNjYWxlXG4gICAgfTtcbn1cbiIsImltcG9ydCBzbW9vdGhzdGVwIGZyb20gJy4vc21vb3Roc3RlcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNtZXJwKGZyb20sIHRvLCBzdGFydFRpbWUsIGVuZFRpbWUsIHRpbWUpIHtcbiAgICByZXR1cm4gZnJvbSArICh0byAtIGZyb20pICogc21vb3Roc3RlcChzdGFydFRpbWUsIGVuZFRpbWUsIHRpbWUpO1xufVxuIiwiaW1wb3J0IGNsYW1wIGZyb20gJy4vY2xhbXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbW9vdGhzdGVwKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAgIGNvbnN0IHggPSBjbGFtcCgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbiksIDAsIDEpO1xuICAgIHJldHVybiB4ICogeCAqICgzIC0gMiAqIHgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3BsaXRWYWx1ZUFuZFVuaXQocHJvcCkge1xuICAgIGNvbnN0IHJlID0gLyheLT9cXGQqXFwuP1xcZCopKC4qKS87XG4gICAgY29uc3QgbWF0Y2ggPSBwcm9wLm1hdGNoKHJlKTtcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihtYXRjaFsxXSk7XG4gICAgY29uc3QgdW5pdCA9IG1hdGNoWzJdO1xuICAgIHJldHVybiB7dmFsdWUsIHVuaXR9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VpZ2h0ZWRBdmVyYWdlKGZyb20sIHRvLCB3ZWlnaHQgPSAxMCkge1xuICAgIHJldHVybiAoKGZyb20gKiAod2VpZ2h0IC0gMSkpICsgdG8pIC8gd2VpZ2h0O1xufVxuIiwiaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbSc7XG5cbi8vIGdyZWF0ZXIgcHJvYmFiaWxpdHkgb2YgYmVpbmcgaGFsZndheSBiZXR3ZWVlbiBtaW4gYW5kIG1heFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWlnaHRlZERpc3RyaWJ1dGlvbihtaW4sIG1heCwgd2VpZ2h0ID0gNSkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWlnaHQ7IGkrKykge1xuICAgICAgICB0b3RhbCArPSByYW5kb20obWluLCBtYXgpO1xuICAgIH1cbiAgICByZXR1cm4gdG90YWwgLyB3ZWlnaHQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdWVwb2ludHNSZWFkZXIoKSB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGxldCByZWFkZXI7XG4gICAgbGV0IGRpc3BhdGNoO1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSAwO1xuICAgIGxldCBsYXN0UG9zaXRpb24gPSAtMTtcbiAgICBsZXQgdG9sZXJhbmNlID0gMC4yO1xuXG4gICAgZnVuY3Rpb24gYWRkKHBvc2l0aW9uLCBuYW1lLCBkYXRhKSB7XG4gICAgICAgIGxpc3QucHVzaCh7cG9zaXRpb24sIG5hbWUsIGRhdGF9KTtcblxuICAgICAgICBsaXN0LnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4gcmVhZGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ3VlcG9pbnQoZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCA9IHRoaXNBcmcgPyBmbi5iaW5kKHRoaXNBcmcpIDogZm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwYXRjaCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWRlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgY3VycmVudFBvc2l0aW9uID0gMDtcbiAgICAgICAgbGFzdFBvc2l0aW9uID0gLTE7XG4gICAgICAgIHJldHVybiByZWFkZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICAgICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgIHJldHVybiByZXNldCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRvbGVyYW5jZSh2YWx1ZSkge1xuICAgICAgICB0b2xlcmFuY2UgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJlYWRlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpblJhbmdlKGN1ZXBvaW50UG9zLCBjdXJyZW50UG9zLCBsYXN0UG9zKSB7XG4gICAgICAgIGlmIChjdWVwb2ludFBvcyA+IGN1cnJlbnRQb3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VlcG9pbnRQb3MgPD0gbGFzdFBvcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRpZmYgPSBjdWVwb2ludFBvcyAtIGN1cnJlbnRQb3M7XG4gICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgZGlmZiA9IC1kaWZmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaWZmIDw9IHRvbGVyYW5jZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVjayhjdXJyZW50UG9zLCBsYXN0UG9zKSB7XG4gICAgICAgIGlmIChjdXJyZW50UG9zIDw9IGxhc3RQb3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRpc3BhdGNoICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpblJhbmdlKGl0ZW0ucG9zaXRpb24sIGN1cnJlbnRQb3MsIGxhc3RQb3MpKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goaXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShwb3NpdGlvbikge1xuICAgICAgICBjdXJyZW50UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgY2hlY2soY3VycmVudFBvc2l0aW9uLCBsYXN0UG9zaXRpb24pO1xuICAgICAgICBsYXN0UG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG4gICAgICAgIHJldHVybiByZWFkZXI7XG4gICAgfVxuXG4gICAgcmVhZGVyID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIGFkZCxcbiAgICAgICAgb25DdWVwb2ludCxcbiAgICAgICAgcmVtb3ZlQWxsLFxuICAgICAgICByZXNldCxcbiAgICAgICAgc2V0VG9sZXJhbmNlLFxuICAgICAgICB1cGRhdGVcbiAgICB9KTtcblxuICAgIHJldHVybiByZWFkZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpT1NQbGF5VmlkZW9JbmxpbmUoZWwsIGxvb3AgPSB0cnVlKSB7XG4gICAgY29uc3QgZnJhbWVUaW1lID0gMSAvIDI1O1xuXG4gICAgbGV0IHNlbGYsXG4gICAgICAgIGxhc3RUaW1lID0gMCxcbiAgICAgICAgcGxheWluZyA9IGZhbHNlO1xuXG4gICAgLy8gVGhpcyBjYW4gKGFuZCBzaG91bGQpIGJlIHB1dCBpbiBhIGNzcyBmaWxlIGluc3RlYWQgb2YgZG9pbmcgc3R5bGVTaGVldHNbMF0uaW5zZXJ0UnVsZTpcbiAgICBjb25zdCBjc3NSdWxlID0gJy5pT1NQbGF5VmlkZW9JbmxpbmU6Oi13ZWJraXQtbWVkaWEtY29udHJvbHMgeyBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDsgfSc7XG4gICAgZG9jdW1lbnQuc3R5bGVTaGVldHNbMF0uaW5zZXJ0UnVsZShjc3NSdWxlLCAwKTtcblxuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY29udHJvbHMnKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdpT1NQbGF5VmlkZW9JbmxpbmUnKTtcblxuXG4gICAgZnVuY3Rpb24gc2Vlayh0aW1lKSB7XG4gICAgICAgIGVsLmN1cnJlbnRUaW1lID0gdGltZTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIHBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRnJhbWUoKSB7XG4gICAgICAgIGlmICghcGxheWluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZSk7XG5cbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gbm93IC0gbGFzdFRpbWU7XG5cbiAgICAgICAgaWYgKGRlbHRhVGltZSA+PSBmcmFtZVRpbWUgKiAxMDAwKSB7XG4gICAgICAgICAgICBsYXN0VGltZSA9IG5vdztcblxuICAgICAgICAgICAgY29uc3QgZW5kZWQgPSBlbC5jdXJyZW50VGltZSArIGZyYW1lVGltZSA+PSBlbC5kdXJhdGlvbjtcblxuICAgICAgICAgICAgaWYgKGVuZGVkICYmIGxvb3ApIHtcbiAgICAgICAgICAgICAgICBzZWVrKDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbmRlZCkge1xuICAgICAgICAgICAgICAgIHBhdXNlKCk7XG4gICAgICAgICAgICAgICAgLy8gc2VsZi5lbWl0KCdlbmRlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWVrKGVsLmN1cnJlbnRUaW1lICsgZnJhbWVUaW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2VsZi5lbWl0KCd0aW1ldXBkYXRlJywgZWwuY3VycmVudFRpbWUsIHNlbGYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgcGxheWluZyA9IHRydWU7XG4gICAgICAgIHVwZGF0ZUZyYW1lKCk7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIHNlbGYucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIHBhdXNlKCk7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfVxuXG4gICAgLy8gc2VsZiA9IE9iamVjdC5jcmVhdGUoRW1pdHRlci5wcm90b3R5cGUsIHtcbiAgICBzZWxmID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgICAgIF9ldmVudHM6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7fVxuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95OiB7XG4gICAgICAgICAgICB2YWx1ZTogZGVzdHJveVxuICAgICAgICB9LFxuICAgICAgICBwYXVzZToge1xuICAgICAgICAgICAgdmFsdWU6IHBhdXNlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXk6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwbGF5XG4gICAgICAgIH0sXG4gICAgICAgIHNlZWs6IHtcbiAgICAgICAgICAgIHZhbHVlOiBzZWVrXG4gICAgICAgIH0sXG4gICAgICAgIGVsOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3VycmVudFRpbWU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuZHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxvb3A6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvb3A7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxvb3AgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxheWluZzoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoc2VsZik7XG59XG4iLCJpbXBvcnQgY3VlcG9pbnRzUmVhZGVyIGZyb20gJy4vY3VlcG9pbnRzUmVhZGVyJztcbmltcG9ydCBpT1NQbGF5VmlkZW9JbmxpbmUgZnJvbSAnLi9pT1NQbGF5VmlkZW9JbmxpbmUnO1xuaW1wb3J0IHZpZGVvUGxheWVyIGZyb20gJy4vdmlkZW9QbGF5ZXInO1xuaW1wb3J0IHZpbWVvIGZyb20gJy4vdmltZW8nO1xuaW1wb3J0IHlvdXR1YmUgZnJvbSAnLi95b3V0dWJlJztcbmltcG9ydCB5b3V0dWJlQmFzaWMgZnJvbSAnLi95b3V0dWJlQmFzaWMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3VlcG9pbnRzUmVhZGVyLFxuICAgIGlPU1BsYXlWaWRlb0lubGluZSxcbiAgICB2aWRlb1BsYXllcixcbiAgICB2aW1lbyxcbiAgICB5b3V0dWJlLFxuICAgIHlvdXR1YmVCYXNpY1xufTtcbiIsImltcG9ydCBlbWl0dGVyIGZyb20gJy4uL2V2ZW50cy9lbWl0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9QbGF5ZXIodmlkZW9FbCkge1xuICAgIGxldCBlbCA9IHZpZGVvRWwgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICBsZXQgcGxheWVyO1xuXG4gICAgZnVuY3Rpb24gbWV0YWRhdGFIYW5kbGVyKCkge1xuICAgICAgICBwbGF5ZXIuZW1pdCgnbWV0YWRhdGEnLCB7XG4gICAgICAgICAgICBzcmM6IGVsLmN1cnJlbnRTcmMsXG4gICAgICAgICAgICB3aWR0aDogZWwudmlkZW9XaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogZWwudmlkZW9IZWlnaHQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZWwuZHVyYXRpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FucGxheUhhbmRsZXIoKSB7XG4gICAgICAgIHBsYXllci5lbWl0KCdyZWFkeScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXlIYW5kbGVyKCkge1xuICAgICAgICBwbGF5ZXIuZW1pdCgncGxheScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZGVkSGFuZGxlcigpIHtcbiAgICAgICAgcGxheWVyLmVtaXQoJ2VuZGVkJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKCkge1xuICAgICAgICBwbGF5ZXIuZW1pdCgnZXJyb3InLCBlbC5lcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGltZXVwZGF0ZUhhbmRsZXIoKSB7XG4gICAgICAgIHBsYXllci5lbWl0KCd0aW1ldXBkYXRlJywgZWwuY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIG1ldGFkYXRhSGFuZGxlcik7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXl0aHJvdWdoJywgY2FucGxheUhhbmRsZXIpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwbGF5JywgcGxheUhhbmRsZXIpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgcGxheUhhbmRsZXIpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9ySGFuZGxlcik7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZW5kZWRIYW5kbGVyKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRpbWV1cGRhdGVIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIG1ldGFkYXRhSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIGNhbnBsYXlIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBwbGF5SGFuZGxlciwgZmFsc2UpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgcGxheUhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBlbmRlZEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRpbWV1cGRhdGVIYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgcGxheWVyLm9mZigpO1xuICAgICAgICBlbC5wYXVzZSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QmxvYlVSTCh1cmwpIHtcbiAgICAgICAgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodXJsKTtcbiAgICAgICAgZnVuY3Rpb24gcmV2b2tlKCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCByZXZva2UpO1xuICAgICAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsIHJldm9rZSk7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZCh1cmwpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5CbG9iICYmIHVybCBpbnN0YW5jZW9mIHdpbmRvdy5CbG9iKSB7XG4gICAgICAgICAgICB1cmwgPSBnZXRCbG9iVVJMKHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICBlbC5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICBlbC5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICBlbC5zcmMgPSB1cmw7XG4gICAgICAgIGVsLmxvYWQoKTtcblxuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgIGVsLnBsYXkoKTtcblxuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICBlbC5wYXVzZSgpO1xuXG4gICAgICAgIHJldHVybiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Vlayh0aW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbC5jdXJyZW50VGltZSA9IHRpbWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgcGxheWVyID0gT2JqZWN0LmNyZWF0ZShlbWl0dGVyLnByb3RvdHlwZSwge1xuICAgICAgICBfZXZlbnRzOiB7XG4gICAgICAgICAgICB2YWx1ZToge31cbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveToge1xuICAgICAgICAgICAgdmFsdWU6IGRlc3Ryb3lcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZDoge1xuICAgICAgICAgICAgdmFsdWU6IGxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgcGF1c2U6IHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXVzZVxuICAgICAgICB9LFxuICAgICAgICBwbGF5OiB7XG4gICAgICAgICAgICB2YWx1ZTogcGxheVxuICAgICAgICB9LFxuICAgICAgICBzZWVrOiB7XG4gICAgICAgICAgICB2YWx1ZTogc2Vla1xuICAgICAgICB9LFxuICAgICAgICBlbDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRUaW1lOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZWwuY3VycmVudFRpbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2b2x1bWU6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLnZvbHVtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZWwudm9sdW1lID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3QuZnJlZXplKHBsYXllcik7XG59XG4iLCJpbXBvcnQgZW1pdHRlciBmcm9tICcuLi9ldmVudHMvZW1pdHRlcic7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLnZpbWVvLmNvbS9wbGF5ZXIvanMtYXBpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpbWVvKGVsKSB7XG4gICAgY29uc3QgdmltZW9QbGF5ZXIgPSBlbC5jb250ZW50V2luZG93O1xuICAgIGNvbnN0IHJlID0gL15odHRwcz86XFwvXFwvcGxheWVyLnZpbWVvLmNvbS87XG4gICAgbGV0IHBsYXllciwgb3JpZ2luID0gJyonLCBwYXVzZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHNlbmRDb21tYW5kKG1ldGhvZCwgdmFsdWUgPSAnJykge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbWV0aG9kXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBkYXRhLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHZpbWVvUGxheWVyLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIG9yaWdpbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgcGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHNlbmRDb21tYW5kKCdwbGF5Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICAgIHNlbmRDb21tYW5kKCdwYXVzZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgICAgIHNlbmRDb21tYW5kKCdhZGRFdmVudExpc3RlbmVyJywgJ3BsYXknKTtcbiAgICAgICAgc2VuZENvbW1hbmQoJ2FkZEV2ZW50TGlzdGVuZXInLCAncGF1c2UnKTtcbiAgICAgICAgc2VuZENvbW1hbmQoJ2FkZEV2ZW50TGlzdGVuZXInLCAnZmluaXNoJyk7XG4gICAgICAgIHNlbmRDb21tYW5kKCdhZGRFdmVudExpc3RlbmVyJywgJ3BsYXlQcm9ncmVzcycpO1xuICAgICAgICBwbGF5ZXIuZW1pdCgncmVhZHknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBsYXkoKSB7XG4gICAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBwbGF5ZXIuZW1pdCgncGxheScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGF1c2UoKSB7XG4gICAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICAgIHBsYXllci5lbWl0KCdwYXVzZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRmluaXNoKCkge1xuICAgICAgICBwbGF5ZXIuZW1pdCgnZW5kZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBsYXlQcm9ncmVzcyhkYXRhKSB7XG4gICAgICAgIHBsYXllci5lbWl0KCd0aW1ldXBkYXRlJywgZGF0YS5zZWNvbmRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgaXNWaW1lbyA9IHJlLnRlc3QoZXZlbnQub3JpZ2luKTtcblxuICAgICAgICBpZiAoIWlzVmltZW8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgIGlmIChkYXRhLnBsYXllcl9pZCAmJiBlbC5pZCAhPT0gZGF0YS5wbGF5ZXJfaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcmlnaW4gPT09ICcqJykge1xuICAgICAgICAgICAgb3JpZ2luID0gZXZlbnQub3JpZ2luO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50KSB7XG4gICAgICAgICAgICBjYXNlICdyZWFkeSc6XG4gICAgICAgICAgICAgICAgb25SZWFkeShkYXRhLnBsYXllcl9pZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwbGF5UHJvZ3Jlc3MnOlxuICAgICAgICAgICAgICAgIG9uUGxheVByb2dyZXNzKGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgICAgICAgICBvblBsYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3BhdXNlJzpcbiAgICAgICAgICAgICAgICBvblBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmaW5pc2gnOlxuICAgICAgICAgICAgICAgIG9uRmluaXNoKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcblxuICAgIHBsYXllciA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShlbWl0dGVyLnByb3RvdHlwZSksIHtcbiAgICAgICAgX2V2ZW50czoge30sXG4gICAgICAgIHBsYXksXG4gICAgICAgIHBhdXNlLFxuICAgICAgICBwYXVzZWQ6ICgpID0+IHBhdXNlZCxcbiAgICAgICAgZGVzdHJveVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBsYXllcjtcbn1cbiIsIi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvaWZyYW1lX2FwaV9yZWZlcmVuY2UjRXZlbnRzXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geW91dHViZShlbCkge1xuICAgIGxldCBlbWl0dGVyID0gbnVsbCwgcGxheWVyID0gbnVsbCwgcGF1c2VkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICByZXR1cm4gZW1pdHRlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVyLnBhdXNlVmlkZW8oKTtcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICAgICAgZW1pdHRlci5lbWl0KCdyZWFkeScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qge1BsYXllclN0YXRlfSA9IHdpbmRvdy5ZVDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQ1VFRDpcbiAgICAgICAgICAgIGNhc2UgUGxheWVyU3RhdGUuQlVGRkVSSU5HOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5QTEFZSU5HOlxuICAgICAgICAgICAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdCgncGxheScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbGF5ZXJTdGF0ZS5QQVVTRUQ6XG4gICAgICAgICAgICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoJ3BhdXNlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsYXllclN0YXRlLkVOREVEOlxuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdCgnZW5kZWQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVzdHJveSgpIHt9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIoKSB7XG4gICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllciA9IG5ldyB3aW5kb3cuWVQuUGxheWVyKGVsLCB7XG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBvblJlYWR5LFxuICAgICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGlmICh3aW5kb3cuWVQpIHtcbiAgICAgICAgY3JlYXRlUGxheWVyKCk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cueXRQbGF5ZXJDYWxscykge1xuICAgICAgICB3aW5kb3cueXRQbGF5ZXJDYWxscy5wdXNoKGNyZWF0ZVBsYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Lnl0UGxheWVyQ2FsbHMgPSBbY3JlYXRlUGxheWVyXTtcbiAgICAgICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aW5kb3cueXRQbGF5ZXJDYWxscy5mb3JFYWNoKChjYWxsKSA9PiBjYWxsKCkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cblxuICAgIGVtaXR0ZXIgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSksIHtcbiAgICAgICAgX2V2ZW50czoge30sXG4gICAgICAgIHBsYXksXG4gICAgICAgIHBhdXNlLFxuICAgICAgICBwYXVzZWQ6ICgpID0+IHBhdXNlZCxcbiAgICAgICAgZGVzdHJveVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVtaXR0ZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB5b3V0dWJlQmFzaWMoZWwpIHtcbiAgICBjb25zdCBpZnJhbWUgPSBlbC5jb250ZW50V2luZG93O1xuXG4gICAgZnVuY3Rpb24gc2VuZENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBpZnJhbWUucG9zdE1lc3NhZ2UoYHtcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCIke2NvbW1hbmR9XCIsXCJhcmdzXCI6XCJcIn1gLCAnKicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgIHNlbmRDb21tYW5kKCdwbGF5VmlkZW8nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgc2VuZENvbW1hbmQoJ3BhdXNlVmlkZW8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5LFxuICAgICAgICBwYXVzZVxuICAgIH07XG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1pbmlTaWduYWxCaW5kaW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaVNpZ25hbEJpbmRpbmcoZm4sIG9uY2UsIHRoaXNBcmcpIHtcbiAgICBpZiAob25jZSA9PT0gdW5kZWZpbmVkKSBvbmNlID0gZmFsc2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNpZ25hbEJpbmRpbmcpO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9vbmNlID0gb25jZTtcbiAgICB0aGlzLl90aGlzQXJnID0gdGhpc0FyZztcbiAgICB0aGlzLl9uZXh0ID0gdGhpcy5fcHJldiA9IHRoaXMuX293bmVyID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2lnbmFsQmluZGluZywgW3tcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgICBpZiAodGhpcy5fb3duZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX293bmVyLmRldGFjaCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsQmluZGluZztcbn0pKCk7XG5cbmZ1bmN0aW9uIF9hZGRNaW5pU2lnbmFsQmluZGluZyhzZWxmLCBub2RlKSB7XG4gIGlmICghc2VsZi5faGVhZCkge1xuICAgIHNlbGYuX2hlYWQgPSBub2RlO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuX3RhaWwuX25leHQgPSBub2RlO1xuICAgIG5vZGUuX3ByZXYgPSBzZWxmLl90YWlsO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9XG5cbiAgbm9kZS5fb3duZXIgPSBzZWxmO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgTWluaVNpZ25hbCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWwpO1xuXG4gICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbCwgW3tcbiAgICBrZXk6ICdoYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZXJzKCkge1xuICAgICAgdmFyIGV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG5cbiAgICAgIGlmIChleGlzdHMpIHJldHVybiAhIW5vZGU7XG5cbiAgICAgIHZhciBlZSA9IFtdO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBlZS5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhub2RlKSB7XG4gICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgTWluaVNpZ25hbEJpbmRpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNoYXMoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBNaW5pU2lnbmFsQmluZGluZyBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlLl9vd25lciA9PT0gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX29uY2UpIHRoaXMuZGV0YWNoKG5vZGUpO1xuICAgICAgICBub2RlLl9mbi5hcHBseShub2RlLl90aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2FkZCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIGZhbHNlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjb25jZSgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIHRydWUsIHRoaXNBcmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjZGV0YWNoKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuX293bmVyICE9PSB0aGlzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKG5vZGUuX3ByZXYpIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xuICAgICAgaWYgKG5vZGUuX25leHQpIG5vZGUuX25leHQuX3ByZXYgPSBub2RlLl9wcmV2O1xuXG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy5faGVhZCkge1xuICAgICAgICB0aGlzLl9oZWFkID0gbm9kZS5fbmV4dDtcbiAgICAgICAgaWYgKG5vZGUuX25leHQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlID09PSB0aGlzLl90YWlsKSB7XG4gICAgICAgIHRoaXMuX3RhaWwgPSBub2RlLl9wcmV2O1xuICAgICAgICB0aGlzLl90YWlsLl9uZXh0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoQWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoQWxsKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdGhpcztcblxuICAgICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSBudWxsO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBub2RlLl9vd25lciA9IG51bGw7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTaWduYWw7XG59KSgpO1xuXG5NaW5pU2lnbmFsLk1pbmlTaWduYWxCaW5kaW5nID0gTWluaVNpZ25hbEJpbmRpbmc7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1pbmlTaWduYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9iamVjdFBvb2woZmFjdG9yeUZuKSB7XG5cbiAgICBsZXQgcG9vbCA9IFtdO1xuICAgIGxldCBudW1DcmVhdGVkID0gMDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBvb2wgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBvb2w7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBpZiAoIHBvb2wubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbnVtQ3JlYXRlZCsrO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5Rm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGlzcG9zZSAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHBvb2wucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbGwgKGNvdW50KSB7XG4gICAgICAgICAgICB3aGlsZSAoIHBvb2wubGVuZ3RoIDwgY291bnQgKSB7XG4gICAgICAgICAgICAgICAgbnVtQ3JlYXRlZCsrO1xuICAgICAgICAgICAgICAgIHBvb2xbcG9vbC5sZW5ndGhdID0gZmFjdG9yeUZuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtcHR5ICgpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TnVtQ3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1DcmVhdGVkO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiIsImNvbnN0IHthYnMsIGF0YW4yLCBjb3MsIHNpbiwgc3FydH0gPSBNYXRoO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdHMgPSBvcHRpb25zO1xuXG4gICAgICAgIHRoaXMuX2JvdW5kcyA9IHt9O1xuICAgICAgICB0aGlzLl9vdXRlckJvdW5kcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRzID0ge1xuICAgICAgICAgICAgYWxpdmU6IHRydWUsXG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIGFuZ2xlOiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBncmF2aXR5OiAwLFxuICAgICAgICAgICAgbWFzczogMSxcbiAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgIGJvdW5jZToge3g6IC0xLCB5OiAtMX0sXG4gICAgICAgICAgICBmcmljdGlvbjogMSxcbiAgICAgICAgICAgIGxpZmVUaW1lOiAwLFxuICAgICAgICAgICAgYm91bmRzOiB7eDogMCwgeTogMCwgd2lkdGg6IDEyODAsIGhlaWdodDogNzIwfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3Byb3BzID0gT2JqZWN0LmtleXModGhpcy5fZGVmYXVsdHMpO1xuXG4gICAgICAgIHRoaXMucmVzZXQob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmVzZXQob3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZzID0gdGhpcy5fZGVmYXVsdHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5fcHJvcHM7XG4gICAgICAgIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IGRlZnM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcHJvcHNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9wdHNba2V5XSB8fCBkZWZzW2tleV07XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGRlZnNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5nbGUgPSBvcHRzLmFuZ2xlIHx8IGRlZnMuYW5nbGU7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gb3B0cy5zcGVlZCB8fCBkZWZzLnNwZWVkO1xuXG4gICAgICAgIHRoaXMudnggPSBjb3MoYW5nbGUpICogc3BlZWQ7XG4gICAgICAgIHRoaXMudnkgPSBzaW4oYW5nbGUpICogc3BlZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnZ4ICo9IHRoaXMuZnJpY3Rpb247XG4gICAgICAgIHRoaXMudnkgKj0gdGhpcy5mcmljdGlvbjtcbiAgICAgICAgdGhpcy52eSArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4O1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWNjZWxsZXJhdGUoc3BlZWQsIGFuZ2xlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYW5nbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBhbmdsZSA9IHRoaXMuYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52eCArPSBjb3MoYW5nbGUpICogc3BlZWQ7XG4gICAgICAgIHRoaXMudnkgKz0gc2luKGFuZ2xlKSAqIHNwZWVkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXQgc3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZ4ID09PSAwICYmIHRoaXMudnkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXJ0KHRoaXMudnggKiB0aGlzLnZ4ICsgdGhpcy52eSAqIHRoaXMudnkpO1xuICAgIH1cblxuICAgIHNldCBzcGVlZCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGU7XG4gICAgICAgIHRoaXMudnggPSBjb3MoYW5nbGUpICogdmFsdWU7XG4gICAgICAgIHRoaXMudnkgPSBzaW4oYW5nbGUpICogdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGFuZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy52eCA9PT0gMCAmJiB0aGlzLnZ5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXRhbjIodGhpcy52eSwgdGhpcy52eCk7XG4gICAgfVxuXG4gICAgc2V0IGFuZ2xlKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy52eCA9IGNvcyh2YWx1ZSkgKiBzcGVlZDtcbiAgICAgICAgdGhpcy52eSA9IHNpbih2YWx1ZSkgKiBzcGVlZDtcbiAgICB9XG5cbiAgICBzZXRCb3VuZHMoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLl9ib3VuZHMueCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy5fYm91bmRzLnkgPSB5IHx8IDA7XG4gICAgICAgIHRoaXMuX2JvdW5kcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9ib3VuZHMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGdldCBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHM7XG4gICAgfVxuXG4gICAgc2V0IGJvdW5kcyhvYikge1xuICAgICAgICBjb25zdCB7eCwgeSwgd2lkdGgsIGhlaWdodH0gPSBvYjtcbiAgICAgICAgdGhpcy5zZXRCb3VuZHMoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgZ2V0IGxlZnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggLSB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBnZXQgcmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKyB0aGlzLnJhZGl1cztcbiAgICB9XG5cbiAgICBnZXQgdG9wKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55IC0gdGhpcy5yYWRpdXM7XG4gICAgfVxuXG4gICAgZ2V0IGJvdHRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueSArIHRoaXMucmFkaXVzO1xuICAgIH1cblxuICAgIGdldCBvdXRlckJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5fb3V0ZXJCb3VuZHMubGVmdCA9IHRoaXMuX2JvdW5kcy54IC0gdGhpcy5yYWRpdXM7XG4gICAgICAgIHRoaXMuX291dGVyQm91bmRzLnJpZ2h0ID0gdGhpcy5fYm91bmRzLnggKyB0aGlzLl9ib3VuZHMud2lkdGggKyB0aGlzLnJhZGl1cztcbiAgICAgICAgdGhpcy5fb3V0ZXJCb3VuZHMudG9wID0gdGhpcy5fYm91bmRzLnkgLSB0aGlzLnJhZGl1cztcbiAgICAgICAgdGhpcy5fb3V0ZXJCb3VuZHMuYm90dG9tID0gdGhpcy5fYm91bmRzLnkgKyB0aGlzLl9ib3VuZHMuaGVpZ2h0ICsgdGhpcy5yYWRpdXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdXRlckJvdW5kcztcbiAgICB9XG5cbiAgICBhbmdsZVRvKHApIHtcbiAgICAgICAgcmV0dXJuIGF0YW4yKHAueSAtIHRoaXMueSwgcC54IC0gdGhpcy54KTtcbiAgICB9XG5cbiAgICBkaXN0YW5jZVRvKHApIHtcbiAgICAgICAgY29uc3QgZHggPSBwLnggLSB0aGlzLng7XG4gICAgICAgIGNvbnN0IGR5ID0gcC55IC0gdGhpcy55O1xuICAgICAgICByZXR1cm4gc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgbW92ZVRvKHAsIHRocnVzdCA9IDAuMDA1KSB7XG4gICAgICAgIGNvbnN0IGR4ID0gcC54IC0gdGhpcy54O1xuICAgICAgICBjb25zdCBkeSA9IHAueSAtIHRoaXMueTtcblxuICAgICAgICB0aGlzLnZ4ICs9IGR4ICogdGhydXN0O1xuICAgICAgICB0aGlzLnZ5ICs9IGR5ICogdGhydXN0O1xuXG4gICAgICAgIGlmIChhYnModGhpcy52eCkgPiBhYnMoZHgpKSB7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gZHg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWJzKHRoaXMudnkpID4gYWJzKGR5KSkge1xuICAgICAgICAgICAgdGhpcy52eSA9IGR5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ3Jhdml0YXRlVG8ocCkge1xuICAgICAgICBjb25zdCBkeCA9IHAueCAtIHRoaXMueDtcbiAgICAgICAgY29uc3QgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIGNvbnN0IGRpc3RTcSA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgICBpZiAoZGlzdFNxID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZGlzdCA9IHNxcnQoZGlzdFNxKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcmNlID0gcC5tYXNzIC8gZGlzdFNxO1xuICAgICAgICAgICAgY29uc3QgYXggPSBkeCAvIGRpc3QgKiBmb3JjZTtcbiAgICAgICAgICAgIGNvbnN0IGF5ID0gZHkgLyBkaXN0ICogZm9yY2U7XG4gICAgICAgICAgICB0aGlzLnZ4ICs9IGF4O1xuICAgICAgICAgICAgdGhpcy52eSArPSBheTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNwcmluZ1RvKHAsIHN0aWZmbmVzcywgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGR4ID0gcC54IC0gdGhpcy54O1xuICAgICAgICBjb25zdCBkeSA9IHAueSAtIHRoaXMueTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBzcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgY29uc3QgZm9yY2UgPSAoZGlzdGFuY2UgLSAobGVuZ3RoIHx8IDApKSAqIChzdGlmZm5lc3MgfHwgMC4yKTtcblxuICAgICAgICBpZiAoYWJzKGRpc3RhbmNlICogZm9yY2UpID4gMCkge1xuICAgICAgICAgICAgdGhpcy52eCArPSBkeCAvIGRpc3RhbmNlICogZm9yY2U7XG4gICAgICAgICAgICB0aGlzLnZ5ICs9IGR5IC8gZGlzdGFuY2UgKiBmb3JjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbGxpZGVzKHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzdGFuY2VUbyhwKSA8PSB0aGlzLnJhZGl1cyArIHAucmFkaXVzO1xuICAgIH1cblxuICAgIGVkZ2VDb2xsaWRlKCkge1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5fYm91bmRzLnggKyB0aGlzLnJhZGl1cztcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLl9ib3VuZHMueCArIHRoaXMuX2JvdW5kcy53aWR0aCAtIHRoaXMucmFkaXVzO1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLl9ib3VuZHMueSArIHRoaXMucmFkaXVzO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLl9ib3VuZHMueSArIHRoaXMuX2JvdW5kcy5oZWlnaHQgLSB0aGlzLnJhZGl1cztcblxuICAgICAgICBpZiAodGhpcy54IDwgbGVmdCkge1xuICAgICAgICAgICAgdGhpcy54ID0gbGVmdDtcbiAgICAgICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogdGhpcy5ib3VuY2UueDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnggPiByaWdodCkge1xuICAgICAgICAgICAgdGhpcy54ID0gcmlnaHQ7XG4gICAgICAgICAgICB0aGlzLnZ4ID0gdGhpcy52eCAqIHRoaXMuYm91bmNlLng7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy55IDwgdG9wKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSB0b3A7XG4gICAgICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIHRoaXMuYm91bmNlLnk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy55ID4gYm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSBib3R0b207XG4gICAgICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIHRoaXMuYm91bmNlLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlZGdlV3JhcCgpIHtcbiAgICAgICAgY29uc3Qge2xlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbX0gPSB0aGlzLm91dGVyQm91bmRzO1xuXG4gICAgICAgIGlmICh0aGlzLnggPCBsZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLnggPSByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnggPiByaWdodCkge1xuICAgICAgICAgICAgdGhpcy54ID0gbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnkgPCB0b3ApIHtcbiAgICAgICAgICAgIHRoaXMueSA9IGJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnkgPiBib3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVkZ2VLaWxsKCkge1xuICAgICAgICBjb25zdCB7bGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tfSA9IHRoaXMub3V0ZXJCb3VuZHM7XG5cbiAgICAgICAgaWYgKHRoaXMueCA8IGxlZnQgfHwgdGhpcy54ID4gcmlnaHQgfHwgdGhpcy55IDwgdG9wIHx8IHRoaXMueSA+IGJvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWRnZVJlc2V0KCkge1xuICAgICAgICBjb25zdCB7bGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tfSA9IHRoaXMub3V0ZXJCb3VuZHM7XG5cbiAgICAgICAgaWYgKHRoaXMueCA8IGxlZnQgfHwgdGhpcy54ID4gcmlnaHQgfHwgdGhpcy55IDwgdG9wIHx8IHRoaXMueSA+IGJvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlmZUtpbGwoKSB7XG4gICAgICAgIHRoaXMubGlmZVRpbWUtLTtcblxuICAgICAgICBpZiAodGhpcy5saWZlVGltZSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFsaXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgYW5kcm9pZCBmcm9tICcuLi9vcy9hbmRyb2lkJztcblxuLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0NDAzNzY2L2hvdy10by1kZXRlY3QtdGhlLXN0b2NrLWFuZHJvaWQtYnJvd3NlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW5kcm9pZE5hdGl2ZSh1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgICBpZiAoIWFuZHJvaWQodWEpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0FuZHJvaWRNb2JpbGUgPSB1YS5pbmRleE9mKCdNb3ppbGxhLzUuMCcpID4gLTEgJiYgdWEuaW5kZXhPZignQXBwbGVXZWJLaXQnKSA+IC0xO1xuXG4gICAgY29uc3QgcmVBcHBsZVdlYktpdCA9IC9BcHBsZVdlYktpdFxcLyhbXFxkLl0rKS87XG4gICAgY29uc3QgcmVzdWx0QXBwbGVXZWJLaXQgPSByZUFwcGxlV2ViS2l0LmV4ZWModWEpO1xuICAgIGNvbnN0IGFwcGxlV2ViS2l0VmVyc2lvbiA9IHJlc3VsdEFwcGxlV2ViS2l0ID8gcGFyc2VGbG9hdChyZUFwcGxlV2ViS2l0LmV4ZWModWEpWzFdKSA6IG51bGw7XG5cbiAgICBjb25zdCByZUNocm9tZSA9IC9DaHJvbWVcXC8oW1xcZC5dKykvO1xuICAgIGNvbnN0IHJlc3VsdENocm9tZSA9IHJlQ2hyb21lLmV4ZWModWEpO1xuICAgIGNvbnN0IGNocm9tZVZlcnNpb24gPSByZXN1bHRDaHJvbWUgPyBwYXJzZUZsb2F0KHJlQ2hyb21lLmV4ZWModWEpWzFdKSA6IG51bGw7XG5cbiAgICByZXR1cm4gaXNBbmRyb2lkTW9iaWxlICYmIChhcHBsZVdlYktpdFZlcnNpb24gJiYgYXBwbGVXZWJLaXRWZXJzaW9uIDwgNTM3KSB8fCAoY2hyb21lVmVyc2lvbiAmJiBjaHJvbWVWZXJzaW9uIDwgMzcpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWVWZXJzaW9uKHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgIGxldCB2ID0gMDtcbiAgICBpZiAoL01TSUUgKFxcZCtcXC5cXGQrKTsvLnRlc3QodWEpKSB7XG4gICAgICAgIHYgPSBwYXJzZUludChSZWdFeHAuJDEsIDEwKTtcbiAgICB9IGVsc2UgaWYgKC9UcmlkZW50XFwvKFxcZCtcXC5cXGQrKSguKilydjooXFxkK1xcLlxcZCspLy50ZXN0KHVhKSkge1xuICAgICAgICB2ID0gcGFyc2VJbnQoUmVnRXhwLiQzLCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuIiwiaW1wb3J0IG9zIGZyb20gJy4uL29zJztcbmltcG9ydCBpZVZlcnNpb24gZnJvbSAnLi9pZVZlcnNpb24nO1xuaW1wb3J0IGFuZHJvaWROYXRpdmUgZnJvbSAnLi9hbmRyb2lkTmF0aXZlJztcbmltcG9ydCBzYWZhcmkgZnJvbSAnLi9zYWZhcmknO1xuXG5jb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5jb25zdCBjaHJvbWVpT1MgPSAoKSA9PiBvcy5pb3MoKSAmJiAvQ3JpT1MvLnRlc3QodWEpO1xuY29uc3QgZmlyZWZveCA9ICgpID0+IC9GaXJlZm94Ly50ZXN0KHVhKTtcbmNvbnN0IGllID0gKCkgPT4gaWVWZXJzaW9uKCkgPiAwO1xuY29uc3Qgc2FmYXJpTW9iaWxlID0gKCkgPT4gb3MuaW9zKCkgJiYgL0FwcGxlV2ViS2l0Ly50ZXN0KHVhKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFuZHJvaWROYXRpdmUsXG4gICAgY2hyb21laU9TLFxuICAgIGZpcmVmb3gsXG4gICAgaWUsXG4gICAgaWVWZXJzaW9uLFxuICAgIHNhZmFyaSxcbiAgICBzYWZhcmlNb2JpbGVcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYWZhcmkodWEgPSBuYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgcmV0dXJuICEvQW5kcm9pZC8udGVzdCh1YSkgJiYgIS9DaHJvbWUvLnRlc3QodWEpICYmIC9TYWZhcmkvLnRlc3QodWEpO1xufVxuIiwiY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5jb25zdCBpcGFkID0gKCkgPT4gL2lQYWQvaS50ZXN0KHVhKTtcbmNvbnN0IGlwb2QgPSAoKSA9PiAvaVBvZC9pLnRlc3QodWEpO1xuY29uc3QgaXBob25lID0gKCkgPT4gL2lQaG9uZS9pLnRlc3QodWEpO1xuY29uc3QgbW9iaWxlID0gKCkgPT4gISF1YS5tYXRjaCgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaXxXaW5kb3dzIFBob25lfFN5bWJpYW5PUy9pKTtcbmNvbnN0IGRlc2t0b3AgPSAoKSA9PiAhbW9iaWxlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZXNrdG9wLFxuICAgIGlwYWQsXG4gICAgaXBob25lLFxuICAgIGlwb2QsXG4gICAgbW9iaWxlXG59O1xuIiwiaW1wb3J0IGJyb3dzZXIgZnJvbSAnLi9icm93c2VyJztcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi9kZXZpY2UnO1xuaW1wb3J0IG9zIGZyb20gJy4vb3MnO1xuaW1wb3J0IHN1cHBvcnRzIGZyb20gJy4vc3VwcG9ydHMnO1xuaW1wb3J0IHNjcmVlbiBmcm9tICcuL3NjcmVlbic7XG5cbmNvbnN0IGxvY2FsID0gL14oPzpodHRwcz86XFwvXFwvKT8oPzpsb2NhbGhvc3R8MTkyXFwuMTY4KS8udGVzdCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBicm93c2VyLFxuICAgIGRldmljZSxcbiAgICBvcyxcbiAgICBzdXBwb3J0cyxcbiAgICBzY3JlZW4sXG4gICAgbG9jYWxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgICByZXR1cm4gL0FuZHJvaWQvaS50ZXN0KHVhKTtcbn1cbiIsImltcG9ydCBhbmRyb2lkIGZyb20gJy4vYW5kcm9pZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuZHJvaWRWZXJzaW9uKHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgIGlmICghYW5kcm9pZCh1YSkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IHZlcnNpb24gPSB1YS5tYXRjaCgvQW5kcm9pZCAoXFxkKyg/OlxcLlxcZCspKyk7LylbMV07XG4gICAgY29uc3QgW2EsIGJdID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGAke2F9LiR7Yn1gKTtcbn1cbiIsImltcG9ydCBhbmRyb2lkIGZyb20gJy4vYW5kcm9pZCc7XG5pbXBvcnQgYW5kcm9pZFZlcnNpb24gZnJvbSAnLi9hbmRyb2lkVmVyc2lvbic7XG5pbXBvcnQgaW9zIGZyb20gJy4vaW9zJztcbmltcG9ydCBpb3NWZXJzaW9uIGZyb20gJy4vaW9zVmVyc2lvbic7XG5pbXBvcnQgbGludXggZnJvbSAnLi9saW51eCc7XG5pbXBvcnQgbWFjIGZyb20gJy4vbWFjJztcbmltcG9ydCB3aW5kb3dzIGZyb20gJy4vd2luZG93cyc7XG5pbXBvcnQgd2luZG93c1Bob25lIGZyb20gJy4vd2luZG93c1Bob25lJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFuZHJvaWQsXG4gICAgYW5kcm9pZFZlcnNpb24sXG4gICAgaW9zLFxuICAgIGlvc1ZlcnNpb24sXG4gICAgbGludXgsXG4gICAgbWFjLFxuICAgIHdpbmRvd3MsXG4gICAgd2luZG93c1Bob25lXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW9zKHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgIHJldHVybiAvaVBbYW9dZHxpUGhvbmUvaS50ZXN0KHVhKTtcbn1cbiIsImltcG9ydCBpb3MgZnJvbSAnLi9pb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpb3NWZXJzaW9uKHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgIGlmIChpb3ModWEpKSB7XG4gICAgICAgIGNvbnN0IFssIGIsIGNdID0gdWEubWF0Y2goL09TIChcXGQrKV8oXFxkKykvaSk7XG4gICAgICAgIGlmIChiICYmIGMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGAke2J9LiR7Y31gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbiIsImltcG9ydCBhbmRyb2lkIGZyb20gJy4vYW5kcm9pZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbnV4KHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCkge1xuICAgIHJldHVybiAhYW5kcm9pZCh1YSkgJiYgL0xpbnV4Ly50ZXN0KHVhKTtcbn1cbiIsImltcG9ydCBpb3MgZnJvbSAnLi9pb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWModWEgPSBuYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgcmV0dXJuICFpb3ModWEpICYmIC9NYWMgT1MvLnRlc3QodWEpO1xufVxuIiwiaW1wb3J0IHdpbmRvd3NQaG9uZSBmcm9tICcuL3dpbmRvd3NQaG9uZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpbmRvd3ModWEgPSBuYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gICAgcmV0dXJuICF3aW5kb3dzUGhvbmUodWEpICYmIC9XaW5kb3dzLy50ZXN0KHVhKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpbmRvd3NQaG9uZSh1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgICByZXR1cm4gL1dpbmRvd3MgUGhvbmUvaS50ZXN0KHVhKTtcbn1cbiIsIi8vIHNjcmVlbi53aWR0aCAvIHNjcmVlbi5oZWlnaHQgaXMgb2Z0ZW4gd3JvbmcgaW4gQW5kcm9pZFxuY29uc3QgaGVpZ2h0ID0gKCkgPT4gTWF0aC5tYXgod2luZG93Lm91dGVySGVpZ2h0LCB3aW5kb3cuc2NyZWVuLmhlaWdodCk7XG5jb25zdCB3aWR0aCA9ICgpID0+IE1hdGgubWF4KHdpbmRvdy5vdXRlcldpZHRoLCB3aW5kb3cuc2NyZWVuLndpZHRoKTtcbmNvbnN0IGRwciA9ICgpID0+IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5jb25zdCByZXRpbmEgPSAoKSA9PiBkcHIoKSA+IDE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgZHByLFxuICAgIHJldGluYVxufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+ICEhd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQ7XG4iLCJpbXBvcnQgd2ViZ2wgZnJvbSAnLi93ZWJnbCc7XG5pbXBvcnQgd2VibSBmcm9tICcuL3dlYm0nO1xuaW1wb3J0IG1wNCBmcm9tICcuL21wNCc7XG5pbXBvcnQgZGV2aWNlT3JpZW50YXRpb24gZnJvbSAnLi9kZXZpY2VPcmllbnRhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB3ZWJnbCxcbiAgICB3ZWJtLFxuICAgIG1wNCxcbiAgICBkZXZpY2VPcmllbnRhdGlvblxufTtcbiIsImNvbnN0IHZpZGVvRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gISEodmlkZW9FbC5jYW5QbGF5VHlwZSAmJiB2aWRlb0VsLmNhblBsYXlUeXBlKCd2aWRlby9tcDQ7IGNvZGVjcz1cImF2YzEuNDJFMDFFLCBtcDRhLjQwLjJcIicpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYmdsKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuICAgICAgICByZXR1cm4gISEod2luZG93LldlYkdMUmVuZGVyaW5nQ29udGV4dCAmJiBjb250ZXh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJjb25zdCB2aWRlb0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbmV4cG9ydCBkZWZhdWx0ICgpID0+ICEhKHZpZGVvRWwuY2FuUGxheVR5cGUgJiYgdmlkZW9FbC5jYW5QbGF5VHlwZSgndmlkZW8vd2VibTsgY29kZWNzPVwidnA4LCB2b3JiaXNcIicpKTtcbiIsIi8qXG4gKiBjbGFzc0xpc3QgKHBhcnRpYWwgcG9seWZpbGwgZm9yIElFIDEwLCBJRSAxMSBhbmQgRmlyZWZveCA8MjQpXG4gKiBhZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9jbGFzc0xpc3QuanNcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdfJyk7XG5cbiAgICB0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjMScsICdjMicpO1xuXG4gICAgLy8gUG9seWZpbGwgZm9yIElFIDEwLzExIGFuZCBGaXJlZm94IDwyNiwgd2hlcmUgY2xhc3NMaXN0LmFkZCBhbmRcbiAgICAvLyBjbGFzc0xpc3QucmVtb3ZlIGV4aXN0IGJ1dCBzdXBwb3J0IG9ubHkgb25lIGFyZ3VtZW50IGF0IGEgdGltZS5cbiAgICBpZiAoIXRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYzInKSkge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNZXRob2QobWV0aG9kKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbCA9IHdpbmRvdy5ET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF07XG5cbiAgICAgICAgICAgIHdpbmRvdy5ET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsLmNhbGwodGhpcywgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlTWV0aG9kKCdhZGQnKTtcbiAgICAgICAgY3JlYXRlTWV0aG9kKCdyZW1vdmUnKTtcbiAgICB9XG5cbiAgICB0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjMycsIGZhbHNlKTtcblxuICAgIC8vIFBvbHlmaWxsIGZvciBJRSAxMCwgSUUgMTEgYW5kIEZpcmVmb3ggPDI0LCB3aGVyZSBjbGFzc0xpc3QudG9nZ2xlIGRvZXMgbm90XG4gICAgLy8gc3VwcG9ydCB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgIGlmICh0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2MzJykpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gd2luZG93LkRPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG4gICAgICAgIHdpbmRvdy5ET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHRva2VuLCBmb3JjZSkge1xuICAgICAgICAgICAgZm9yY2UgPSAhIWZvcmNlO1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHRoaXMuY29udGFpbnModG9rZW4pID09PSBmb3JjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JjZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0ZXN0RWxlbWVudCA9IG51bGw7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKGZuKSB7XG4gICAgd2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fTtcbiAgICBjb25zdCBtZXRob2RzID0gW1xuICAgICAgICAnYXNzZXJ0JyxcbiAgICAgICAgJ2NsZWFyJyxcbiAgICAgICAgJ2NvdW50JyxcbiAgICAgICAgJ2RlYnVnJyxcbiAgICAgICAgJ2RpcicsXG4gICAgICAgICdkaXJ4bWwnLFxuICAgICAgICAnZXJyb3InLFxuICAgICAgICAnZ3JvdXAnLFxuICAgICAgICAnZ3JvdXBDb2xsYXBzZWQnLFxuICAgICAgICAnZ3JvdXBFbmQnLFxuICAgICAgICAnaW5mbycsXG4gICAgICAgICdsb2cnLFxuICAgICAgICAnbWFya1RpbWVsaW5lJyxcbiAgICAgICAgJ21lbW9yeScsXG4gICAgICAgICdwcm9maWxlJyxcbiAgICAgICAgJ3Byb2ZpbGVFbmQnLFxuICAgICAgICAndGFibGUnLFxuICAgICAgICAndGltZScsXG4gICAgICAgICd0aW1lRW5kJyxcbiAgICAgICAgJ3RpbWVTdGFtcCcsXG4gICAgICAgICd0aW1lbGluZScsXG4gICAgICAgICd0aW1lbGluZUVuZCcsXG4gICAgICAgICd0cmFjZScsXG4gICAgICAgICd3YXJuJ1xuICAgIF07XG4gICAgbWV0aG9kcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlW25hbWVdID0gd2luZG93LmNvbnNvbGVbbmFtZV0gfHwgZm47XG4gICAgfSk7XG59KGZ1bmN0aW9uKCkge30pKTtcbiIsImltcG9ydCAnLi9jbGFzc0xpc3QnO1xuaW1wb3J0ICcuL2NvbnNvbGUnO1xuaW1wb3J0ICcuL3JlcXVlc3RBbmltYXRpb25GcmFtZSc7XG4iLCIvKlxuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChpb3M2IGFuZCBhbmRyb2lkIDwgNC40KVxuICovXG5cbihmdW5jdGlvbigpIHtcbiAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgY29uc3QgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yc1t4XSArXG4gICAgICAgICAgICAgICAgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB9XG4gICAgfVxufSgpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVwKHVybCwgd2lkdGggPSA4MDAsIGhlaWdodCA9IDYwMCwgbmFtZSA9ICcnKSB7XG4gICAgY29uc3QgbGVmdCA9ICh3aW5kb3cuc2NyZWVuLndpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICBjb25zdCB0b3AgPSAod2luZG93LnNjcmVlbi5oZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAvLyBjb25zdCBsZWZ0ID0gKHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgLy8gY29uc3QgdG9wID0gKHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICBjb25zdCBkZWZhdWx0cyA9ICdkaXJlY3Rvcmllcz1ubyxsb2NhdGlvbj1ubyxtZW51YmFyPW5vLHJlc2l6YWJsZT1ubyxzY3JvbGxiYXJzPW5vLHN0YXR1cz1ubyx0b29sYmFyPW5vJztcbiAgICBjb25zdCBwYXJhbXMgPSBgd2lkdGg9JHt3aWR0aH0saGVpZ2h0PSR7aGVpZ2h0fSx0b3A9JHt0b3B9LGxlZnQ9JHtsZWZ0fSwke2RlZmF1bHRzfWA7XG4gICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4odXJsLCBuYW1lLCBwYXJhbXMpO1xuICAgIGlmICh3aW4gPT09IG51bGwgfHwgdHlwZW9mIHdpbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAod2luZG93LmZvY3VzKSB7XG4gICAgICAgIHdpbi5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsIlxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoYm91bmRzLCBkZXB0aCwgbWF4RGVwdGgsIG1heENoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuX2JvdW5kcyA9IGJvdW5kcztcbiAgICAgICAgdGhpcy5fZGVwdGggPSBkZXB0aDtcbiAgICAgICAgdGhpcy5fbWF4RGVwdGggPSBtYXhEZXB0aDtcbiAgICAgICAgdGhpcy5fbWF4Q2hpbGRyZW4gPSBtYXhDaGlsZHJlbjtcblxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICB9XG5cbiAgICBpbnNlcnQoaXRlbSkge1xuICAgICAgICBpZiAodGhpcy5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZmluZEluZGV4KGl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5ub2Rlc1tpbmRleF0uaW5zZXJ0KGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIGlmICghKHRoaXMuX2RlcHRoID49IHRoaXMuX21heERlcHRoKSAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMuX21heENoaWxkcmVuKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3ViZGl2aWRlKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0KHRoaXMuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXRyaWV2ZShpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9maW5kSW5kZXgoaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2Rlc1tpbmRleF0ucmV0cmlldmUoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICBfZmluZEluZGV4KGl0ZW0pIHtcbiAgICAgICAgY29uc3Qge3gsIHksIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy5fYm91bmRzO1xuXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gaXRlbS54ID4geCArIHdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgYm90dG9tID0gaXRlbS55ID4geSArIGhlaWdodCAvIDI7XG5cbiAgICAgICAgbGV0IGluZGV4O1xuXG4gICAgICAgIGlmIChyaWdodCkge1xuICAgICAgICAgICAgaW5kZXggPSBib3R0b20gPyBOb2RlLkJSIDogTm9kZS5UUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gYm90dG9tID8gTm9kZS5CTCA6IE5vZGUuVEw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgc3ViZGl2aWRlKCkge1xuICAgICAgICBjb25zdCBkZXB0aCA9IHRoaXMuX2RlcHRoICsgMTtcblxuICAgICAgICBjb25zdCB7eCwgeSwgd2lkdGgsIGhlaWdodH0gPSB0aGlzLl9ib3VuZHM7XG4gICAgICAgIGNvbnN0IHcgPSB3aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGggPSBoZWlnaHQgLyAyO1xuXG4gICAgICAgIHRoaXMubm9kZXNbTm9kZS5UTF0gPSBuZXcgTm9kZSh7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHdpZHRoOiB3LFxuICAgICAgICAgICAgaGVpZ2h0OiBoXG4gICAgICAgIH0sXG4gICAgICAgIGRlcHRoLCB0aGlzLl9tYXhEZXB0aCwgdGhpcy5fbWF4Q2hpbGRyZW4pO1xuXG4gICAgICAgIHRoaXMubm9kZXNbTm9kZS5UUl0gPSBuZXcgTm9kZSh7XG4gICAgICAgICAgICB4OiB4ICsgdyxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaFxuICAgICAgICB9LFxuICAgICAgICBkZXB0aCwgdGhpcy5fbWF4RGVwdGgsIHRoaXMuX21heENoaWxkcmVuKTtcblxuICAgICAgICB0aGlzLm5vZGVzW05vZGUuQkxdID0gbmV3IE5vZGUoe1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IHkgKyBoLFxuICAgICAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgICAgICBoZWlnaHQ6IGhcbiAgICAgICAgfSxcbiAgICAgICAgZGVwdGgsIHRoaXMuX21heERlcHRoLCB0aGlzLl9tYXhDaGlsZHJlbik7XG5cbiAgICAgICAgdGhpcy5ub2Rlc1tOb2RlLkJSXSA9IG5ldyBOb2RlKHtcbiAgICAgICAgICAgIHg6IHggKyB3LFxuICAgICAgICAgICAgeTogeSArIGgsXG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaFxuICAgICAgICB9LFxuICAgICAgICBkZXB0aCwgdGhpcy5fbWF4RGVwdGgsIHRoaXMuX21heENoaWxkcmVuKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLm5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5wb3AoKS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Ob2RlLlRMID0gMDtcbk5vZGUuVFIgPSAxO1xuTm9kZS5CTCA9IDI7XG5Ob2RlLkJSID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVhZFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKGJvdW5kcywgbWF4RGVwdGggPSAtMSwgbWF4Q2hpbGRyZW4gPSAtMSkge1xuICAgICAgICB0aGlzLnJvb3QgPSBuZXcgTm9kZShib3VuZHMsIDAsIG1heERlcHRoLCBtYXhDaGlsZHJlbik7XG4gICAgfVxuXG4gICAgaW5zZXJ0KGl0ZW0pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdC5pbnNlcnQoaXRlbVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuaW5zZXJ0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucm9vdC5jbGVhcigpO1xuICAgIH1cblxuICAgIHJldHJpZXZlKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5yZXRyaWV2ZShpdGVtKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgcG9wdXAgZnJvbSAnLi4vcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbWFpbCh1cmwsIHN1YmplY3QgPSAnJywgYm9keSA9ICcnKSB7XG4gICAgdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG4gICAgc3ViamVjdCA9IGVuY29kZVVSSUNvbXBvbmVudChzdWJqZWN0KTtcblxuICAgIGNvbnN0IG5ld2xpbmVzID0gZW5jb2RlVVJJQ29tcG9uZW50KCdcXHJcXG5cXHJcXG4nKTtcbiAgICBib2R5ID0gYm9keSA/IGAke2VuY29kZVVSSUNvbXBvbmVudChib2R5KX0ke25ld2xpbmVzfWAgOiAnJztcblxuICAgIHJldHVybiBwb3B1cChgbWFpbHRvOj9zdWJqZWN0PSR7c3ViamVjdH0mYm9keT0ke2JvZHl9JHt1cmx9YCk7XG59XG4iLCJpbXBvcnQgcG9wdXAgZnJvbSAnLi4vcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmYWNlYm9vayh1cmwpIHtcbiAgICB1cmwgPSBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICByZXR1cm4gcG9wdXAoYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWApO1xufVxuIiwiaW1wb3J0IHBvcHVwIGZyb20gJy4uL3BvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmFjZWJvb2tGZWVkRGlhbG9nKGFwcElkLCByZWRpcmVjdCwgdXJsLCB0aXRsZSA9ICcnLCBpbWFnZSA9ICcnLCBjYXB0aW9uID0gJycsIGRlc2MgPSAnJywgc291cmNlID0gJycpIHtcbiAgICB0aXRsZSA9IGVuY29kZVVSSUNvbXBvbmVudCh0aXRsZSk7XG4gICAgY2FwdGlvbiA9IGVuY29kZVVSSUNvbXBvbmVudChjYXB0aW9uKTtcbiAgICBkZXNjID0gZW5jb2RlVVJJQ29tcG9uZW50KGRlc2MpO1xuXG4gICAgY29uc3QgcGFyYW1zID0gYD9kaXNwbGF5PXBvcHVwJnNob3dfZXJyb3I9dHJ1ZSZhcHBfaWQ9JHthcHBJZH0mc291cmNlPSR7c291cmNlfSZyZWRpcmVjdF91cmk9JHtyZWRpcmVjdH1gO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgbmFtZT0ke3RpdGxlfSZsaW5rPSR7dXJsfSZjYXB0aW9uPSR7Y2FwdGlvbn0mZGVzY3JpcHRpb249JHtkZXNjfSZwaWN0dXJlPSR7aW1hZ2V9YDtcblxuICAgIHJldHVybiBwb3B1cChgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RpYWxvZy9mZWVkPyR7cGFyYW1zfSYke2NvbnRlbnR9YCk7XG59XG4iLCJpbXBvcnQgcG9wdXAgZnJvbSAnLi4vcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnb29nbGVwbHVzKHVybCkge1xuICAgIHVybCA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmwpO1xuICAgIHJldHVybiBwb3B1cChgaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPSR7dXJsfWApO1xufVxuIiwiaW1wb3J0IGVtYWlsIGZyb20gJy4vZW1haWwnO1xuaW1wb3J0IGZhY2Vib29rIGZyb20gJy4vZmFjZWJvb2snO1xuaW1wb3J0IGZhY2Vib29rRmVlZERpYWxvZyBmcm9tICcuL2ZhY2Vib29rRmVlZERpYWxvZyc7XG5pbXBvcnQgZ29vZ2xlcGx1cyBmcm9tICcuL2dvb2dsZXBsdXMnO1xuaW1wb3J0IGxpbmtlZGluIGZyb20gJy4vbGlua2VkaW4nO1xuaW1wb3J0IHBpbnRlcmVzdCBmcm9tICcuL3BpbnRlcmVzdCc7XG5pbXBvcnQgcmVkZGl0IGZyb20gJy4vcmVkZGl0JztcbmltcG9ydCByZW5yZW4gZnJvbSAnLi9yZW5yZW4nO1xuaW1wb3J0IHNtcyBmcm9tICcuL3Ntcyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuL3R3aXR0ZXInO1xuaW1wb3J0IHZrb250YWt0ZSBmcm9tICcuL3Zrb250YWt0ZSc7XG5pbXBvcnQgd2VpYm8gZnJvbSAnLi93ZWlibyc7XG5pbXBvcnQgd2hhdHNhcHAgZnJvbSAnLi93aGF0c2FwcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBlbWFpbCxcbiAgICBmYWNlYm9vayxcbiAgICBmYWNlYm9va0ZlZWREaWFsb2csXG4gICAgZ29vZ2xlcGx1cyxcbiAgICBsaW5rZWRpbixcbiAgICBwaW50ZXJlc3QsXG4gICAgcmVkZGl0LFxuICAgIHJlbnJlbixcbiAgICBzbXMsXG4gICAgdHdpdHRlcixcbiAgICB2a29udGFrdGUsXG4gICAgd2VpYm8sXG4gICAgd2hhdHNhcHBcbn07XG4iLCJpbXBvcnQgcG9wdXAgZnJvbSAnLi4vcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5rZWRpbih1cmwsIHRpdGxlID0gJycpIHtcbiAgICB1cmwgPSBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICB0aXRsZSA9IGVuY29kZVVSSUNvbXBvbmVudCh0aXRsZSk7XG4gICAgcmV0dXJuIHBvcHVwKGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9JHt1cmx9JnRpdGxlPSR7dGl0bGV9YCk7XG59XG4iLCJpbXBvcnQgcG9wdXAgZnJvbSAnLi4vcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaW50ZXJlc3QodXJsLCBtZWRpYSwgZGVzYyA9ICcnKSB7XG4gICAgdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG4gICAgbWVkaWEgPSBlbmNvZGVVUklDb21wb25lbnQobWVkaWEpO1xuICAgIGRlc2MgPSBlbmNvZGVVUklDb21wb25lbnQoZGVzYyk7XG4gICAgcmV0dXJuIHBvcHVwKGBodHRwczovL3BpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vP3VybD0ke3VybH0mbWVkaWE9JHttZWRpYX0mZGVzY3JpcHRpb249JHtkZXNjfWApO1xufVxuIiwiaW1wb3J0IHBvcHVwIGZyb20gJy4uL3BvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkZGl0KHVybCwgdGl0bGUgPSAnJykge1xuICAgIHVybCA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmwpO1xuICAgIHRpdGxlID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlKTtcbiAgICByZXR1cm4gcG9wdXAoYGh0dHBzOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0P3VybD0ke3VybH0mdGl0bGU9JHt0aXRsZX1gKTtcbn1cbiIsImltcG9ydCBwb3B1cCBmcm9tICcuLi9wb3B1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZrb250YWt0ZSh1cmwsIHRpdGxlID0gJycpIHtcbiAgICB1cmwgPSBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICB0aXRsZSA9IGVuY29kZVVSSUNvbXBvbmVudCh0aXRsZSk7XG4gICAgcmV0dXJuIHBvcHVwKGBodHRwOi8vc2hhcmUucmVucmVuLmNvbS9zaGFyZS9idXR0b25zaGFyZS5kbz9saW5rPSR7dXJsfSZ0aXRsZT0ke3RpdGxlfWApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc21zKHVybCwgYm9keSA9ICcnKSB7XG4gICAgdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG5cbiAgICBjb25zdCBuZXdsaW5lcyA9IGVuY29kZVVSSUNvbXBvbmVudCgnXFxyXFxuXFxyXFxuJyk7XG4gICAgYm9keSA9IGJvZHkgPyBgJHtlbmNvZGVVUklDb21wb25lbnQoYm9keSl9JHtuZXdsaW5lc31gIDogJyc7XG5cbiAgICBjb25zdCBpb3MgPSAvaVBbYW9dZHxpUGhvbmUvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbnN0IGRlbGltID0gaW9zID8gJyYnIDogJz8nO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgc21zOiR7ZGVsaW19Ym9keT0ke2JvZHl9JHt1cmx9YDtcbn1cbiIsImltcG9ydCBwb3B1cCBmcm9tICcuLi9wb3B1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3aXR0ZXIodXJsLCB0ZXh0ID0gJycsIGhhc2h0YWdzID0gJycsIHJlbGF0ZWQgPSAnJykge1xuICAgIHVybCA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmwpO1xuICAgIHRleHQgPSBlbmNvZGVVUklDb21wb25lbnQodGV4dCk7XG4gICAgaGFzaHRhZ3MgPSBlbmNvZGVVUklDb21wb25lbnQoaGFzaHRhZ3MpO1xuICAgIHJlbGF0ZWQgPSBlbmNvZGVVUklDb21wb25lbnQocmVsYXRlZCk7XG5cbiAgICByZXR1cm4gcG9wdXAoYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0ke3VybH0mdGV4dD0ke3RleHR9Jmhhc2h0YWdzPSR7aGFzaHRhZ3N9JnJlbGF0ZWQ9JHtyZWxhdGVkfWApO1xufVxuIiwiaW1wb3J0IHBvcHVwIGZyb20gJy4uL3BvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmtvbnRha3RlKHVybCwgdGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJywgaW1hZ2UgPSAnJykge1xuICAgIHVybCA9IGVuY29kZVVSSUNvbXBvbmVudCh1cmwpO1xuICAgIHRpdGxlID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlKTtcbiAgICBkZXNjcmlwdGlvbiA9IGVuY29kZVVSSUNvbXBvbmVudChkZXNjcmlwdGlvbik7XG4gICAgaW1hZ2UgPSBlbmNvZGVVUklDb21wb25lbnQoaW1hZ2UpO1xuICAgIHJldHVybiBwb3B1cChgaHR0cDovL3Zrb250YWt0ZS5ydS9zaGFyZS5waHA/dXJsPSR7dXJsfSZ0aXRsZT0ke3RpdGxlfSZkZXNjcmlwdGlvbj0ke2Rlc2NyaXB0aW9ufSZpbWFnZT0ke2ltYWdlfWApO1xufVxuIiwiaW1wb3J0IHBvcHVwIGZyb20gJy4uL3BvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VpYm8odXJsLCB0aXRsZSA9ICcnLCBpbWFnZSA9ICcnKSB7XG4gICAgdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG4gICAgdGl0bGUgPSBlbmNvZGVVUklDb21wb25lbnQodGl0bGUpO1xuICAgIGltYWdlID0gZW5jb2RlVVJJQ29tcG9uZW50KGltYWdlKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IGB1cmw9JHt1cmx9JmFwcGtleT0mdGl0bGU9JHt0aXRsZX0mcGljPSR7aW1hZ2V9JnJhbGF0ZVVpZD0mbGFuZ3VhZ2U9emhfY25gO1xuICAgIHJldHVybiBwb3B1cChgaHR0cDovL3NlcnZpY2Uud2VpYm8uY29tL3NoYXJlL3NoYXJlLnBocD8ke3BhcmFtc31gKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdoYXRzYXBwKHVybCwgYm9keSA9ICcnKSB7XG4gICAgdXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG5cbiAgICBjb25zdCBuZXdsaW5lcyA9IGVuY29kZVVSSUNvbXBvbmVudCgnXFxyXFxuXFxyXFxuJyk7XG4gICAgYm9keSA9IGJvZHkgPyBgJHtlbmNvZGVVUklDb21wb25lbnQoYm9keSl9JHtuZXdsaW5lc31gIDogJyc7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGB3aGF0c2FwcDovL3NlbmQ/dGV4dD0ke2JvZHl9JHt1cmx9YDtcbn1cbiIsImZ1bmN0aW9uIGxvYWQoa2V5KSB7XG4gICAgbGV0IGl0ZW0gPSBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgcmV0dXJuIGl0ZW07XG59XG5cbmZ1bmN0aW9uIHNhdmUoa2V5LCBpdGVtKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkblxcJ3Qgc2F2ZSBpbiBsb2NhbFN0b3JhZ2UnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRKU09OKGtleSkge1xuICAgIGNvbnN0IGl0ZW0gPSBsb2FkKGtleSk7XG4gICAgcmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gc2F2ZUpTT04oa2V5LCBpdGVtKSB7XG4gICAgcmV0dXJuIHNhdmUoa2V5LCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH0gY2F0Y2ggKGVycikge31cbn1cblxuZXhwb3J0IGRlZmF1bHQge2xvYWQsIHNhdmUsIGxvYWRKU09OLCBzYXZlSlNPTiwgcmVtb3ZlfTtcbiIsIi8vIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2Ygc3Vic3RyIGluIHN0clxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWZ0ZXJGaXJzdChzdHIsIHN1YnN0cikge1xuICAgIGxldCBpbmRleCA9IHN0ci5pbmRleE9mKHN1YnN0cik7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGluZGV4ICs9IHN1YnN0ci5sZW5ndGg7XG4gICAgcmV0dXJuIHN0ci5zbGljZShpbmRleCk7XG59XG4iLCIvLyBldmVyeXRoaW5nIGFmdGVyIHRoZSBsYXN0IG9jY3VyZW5jZSBvZiBzdWJzdHIgaW4gc3RyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZnRlckxhc3Qoc3RyLCBzdWJzdHIpIHtcbiAgICBsZXQgaW5kZXggPSBzdHIubGFzdEluZGV4T2Yoc3Vic3RyKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaW5kZXggKz0gc3Vic3RyLmxlbmd0aDtcbiAgICByZXR1cm4gc3RyLnNsaWNlKGluZGV4KTtcbn1cbiIsIi8vIGV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHN1YnN0ciBpbiBzdHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJlZm9yZUZpcnN0KHN0ciwgc3Vic3RyKSB7XG4gICAgY29uc3QgaW5kZXggPSBzdHIuaW5kZXhPZihzdWJzdHIpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnNsaWNlKDAsIGluZGV4KTtcbn1cbiIsIi8vIGV2ZXJ5dGhpbmcgYmVmb3JlIHRoZSBsYXN0IG9jY3VycmVuY2Ugb2Ygc3Vic3RyIGluIHRoZSBzdHJpbmcuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiZWZvcmVMYXN0KHN0ciwgc3Vic3RyKSB7XG4gICAgY29uc3QgaW5kZXggPSBzdHIubGFzdEluZGV4T2Yoc3Vic3RyKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5zbGljZSgwLCBpbmRleCk7XG59XG4iLCIvLyB3aGV0aGVyIHN0ciBiZWdpbnMgd2l0aCBzdWJzdHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJlZ2luc1dpdGgoc3RyLCBzdWJzdHIpIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2Yoc3Vic3RyKSA9PT0gMDtcbn1cbiIsIi8vIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IG9jY3VyYW5jZSBvZiBzdGFydCBhbmQgYmVmb3JlIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGVuZFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmV0d2VlbihzdHIsIHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgc3Vic3RyID0gJyc7XG4gICAgbGV0IHN0YXJ0SW5kZXggPSBzdHIuaW5kZXhPZihzdGFydCk7XG4gICAgaWYgKHN0YXJ0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHN0YXJ0SW5kZXggKz0gc3RhcnQubGVuZ3RoO1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IHN0ci5pbmRleE9mKGVuZCwgc3RhcnRJbmRleCk7XG4gICAgICAgIGlmIChlbmRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHN1YnN0ciA9IHN0ci5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cjtcbn1cbiIsImltcG9ydCBlc2NhcGVQYXR0ZXJuIGZyb20gJy4vZXNjYXBlUGF0dGVybic7XG5pbXBvcnQgdHJ1bmNhdGUgZnJvbSAnLi90cnVuY2F0ZSc7XG4vLyBVdGlsaXR5IG1ldGhvZCB0aGF0IGludGVsbGlnZW50bHkgYnJlYWtzIHVwIHlvdXIgc3RyaW5nLFxuLy8gYWxsb3dpbmcgeW91IHRvIGNyZWF0ZSBibG9ja3Mgb2YgcmVhZGFibGUgdGV4dC5cbi8vIFRoaXMgbWV0aG9kIHJldHVybnMgeW91IHRoZSBjbG9zZXN0IHBvc3NpYmxlIG1hdGNoIHRvIHRoZSBkZWxpbSBwYXJhbWF0ZXIsXG4vLyB3aGlsZSBrZWVwaW5nIHRoZSB0ZXh0IGxlbmd0aCB3aXRoaW4gdGhlIGxlbiBwYXJhbXRlci5cbi8vIElmIGEgbWF0Y2ggY2FuJ3QgYmUgZm91bmQgaW4geW91ciBzcGVjaWZpZWQgbGVuZ3RoIGFuICAnLi4uJyBpcyBhZGRlZCB0byB0aGF0IGJsb2NrLFxuLy8gYW5kIHRoZSBibG9ja2luZyBjb250aW51ZXMgdW50aWxsIGFsbCB0aGUgdGV4dCBpcyBicm9rZW4gYXBhcnQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBibG9jayhzdHIsIGxlbiwgZGVsaW0gPSAnLicpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgIGlmICghc3RyIHx8ICFzdHIuaW5jbHVkZXMoZGVsaW0pKSB7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgaWYgKGRlbGltID09PSAnICcpIHtcbiAgICAgICAgc3RyICs9IGRlbGltO1xuICAgIH1cblxuICAgIGxldCBjaHJJbmRleCA9IDA7XG4gICAgY29uc3QgcmVwbFBhdHQgPSBuZXcgUmVnRXhwKCdbXicgKyBlc2NhcGVQYXR0ZXJuKGRlbGltKSArICddKyQnKTtcblxuICAgIHdoaWxlIChjaHJJbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHN1YlN0cmluZyA9IHN0ci5zdWJzdHIoY2hySW5kZXgsIGxlbik7XG4gICAgICAgIGlmICghc3ViU3RyaW5nLmluY2x1ZGVzKGRlbGltKSkge1xuICAgICAgICAgICAgYXJyLnB1c2godHJ1bmNhdGUoc3ViU3RyaW5nLCBzdWJTdHJpbmcubGVuZ3RoKSk7XG4gICAgICAgICAgICBjaHJJbmRleCArPSBzdWJTdHJpbmcubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHN1YlN0cmluZyA9IHN1YlN0cmluZy5yZXBsYWNlKHJlcGxQYXR0LCAnJyk7XG4gICAgICAgIGNockluZGV4ICs9IHN1YlN0cmluZy5sZW5ndGg7XG4gICAgICAgIGFyci5wdXNoKHN1YlN0cmluZy50cmltKCkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuIiwiLy8gQ2FwaXRhbGl6ZSB0aGUgZmlyc3Qgd29yZCBpbiBhIHN0cmluZyBvciBhbGwgd29yZHNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyLCBhbGwgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN1YnN0ciA9IHN0ci50cmltTGVmdCgpO1xuICAgIGNvbnN0IHJlID0gYWxsID8gL14ufFxcYi4vZyA6IC8oXlxcdykvO1xuICAgIHJldHVybiBzdWJzdHIucmVwbGFjZShyZSwgKG1hdGNoKSA9PiBtYXRjaC50b1VwcGVyQ2FzZSgpKTtcbn1cbiIsImltcG9ydCBlc2NhcGVQYXR0ZXJuIGZyb20gJy4vZXNjYXBlUGF0dGVybic7XG5cbi8vIHRoZSBudW1iZXIgb2YgdGltZXMgc3Vic3RyIGFwcGVhcnMgd2l0aGluIHN0clxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY291bnRPZihzdHIsIHN1YnN0ciwgY2FzZVNlbnNpdGl2ZSkge1xuICAgIGNvbnN0IGVzY2FwZWRTdHIgPSBlc2NhcGVQYXR0ZXJuKHN1YnN0cik7XG4gICAgY29uc3QgZmxhZ3MgPSAoIWNhc2VTZW5zaXRpdmUpID8gJ2lnJyA6ICdnJztcbiAgICByZXR1cm4gc3RyLm1hdGNoKG5ldyBSZWdFeHAoZXNjYXBlZFN0ciwgZmxhZ3MpKS5sZW5ndGg7XG59XG4iLCIvLyBMZXZlbnNodGVpbiBkaXN0YW5jZSAoZWRpdERpc3RhbmNlKSBpcyBhIG1lYXN1cmUgb2YgdGhlIHNpbWlsYXJpdHkgYmV0d2VlblxuLy8gdHdvIHN0cmluZ3MuIFRoZSBkaXN0YW5jZSBpcyB0aGUgbnVtYmVyIG9mIGRlbGV0aW9ucywgaW5zZXJ0aW9ucywgb3Jcbi8vIHN1YnN0aXR1dGlvbnMgcmVxdWlyZWQgdG8gdHJhbnNmb3JtIHNvdXJjZSBpbnRvIHRhcmdldC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXREaXN0YW5jZShzb3VyY2UgPSAnJywgdGFyZ2V0ID0gJycpIHtcblxuICAgIGlmIChzb3VyY2UgPT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoIXNvdXJjZS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnN0IGQgPSBbXTtcbiAgICBsZXQgaSwgaiwgY29zdDtcblxuICAgIGZvciAoaSA9IDA7IGkgPD0gc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRbaV0gPSBbXTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8PSBzb3VyY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZFtpXVswXSA9IGk7XG4gICAgfVxuICAgIGZvciAoaiA9IDA7IGogPD0gdGFyZ2V0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRbMF1bal0gPSBqO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDE7IGkgPD0gc291cmNlLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3Qgc2kgPSBzb3VyY2UuY2hhckF0KGkgLSAxKTtcbiAgICAgICAgZm9yIChqID0gMTsgaiA8PSB0YXJnZXQubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgY29uc3QgdGogPSB0YXJnZXQuY2hhckF0KGogLSAxKTtcblxuICAgICAgICAgICAgaWYgKHNpID09PSB0aikge1xuICAgICAgICAgICAgICAgIGNvc3QgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb3N0ID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZFtpXVtqXSA9IE1hdGgubWluKGRbaSAtIDFdW2pdICsgMSwgZFtpXVtqIC0gMV0gKyAxLCBkW2kgLSAxXVtqIC0gMV0gKyBjb3N0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkW3NvdXJjZS5sZW5ndGhdW3RhcmdldC5sZW5ndGhdO1xufVxuIiwiLy8gd2hldGhlciBzdHIgZW5kcyB3aXRoIHN1YnN0clxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kc1dpdGgoc3RyLCBzdWJzdHIpIHtcbiAgICByZXR1cm4gc3RyLmxhc3RJbmRleE9mKHN1YnN0cikgPT09IHN0ci5sZW5ndGggLSBzdWJzdHIubGVuZ3RoO1xufVxuIiwiLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyKSk7XG4vLyAgICAgcmV0dXJuIGRpdi5pbm5lckhUTUw7XG4vLyB9XG5cbmNvbnN0IGVudGl0eU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgJ1xcJyc6ICcmIzM5OycsXG4gICAgJy8nOiAnJiN4MkY7JyxcbiAgICAnYCc6ICcmI3g2MDsnLFxuICAgICc9JzogJyYjeDNEOydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpXG4gICAgICAgIC5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csIGZ1bmN0aW9uIGZyb21FbnRpdHlNYXAocykge1xuICAgICAgICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICAgICAgfSk7XG59XG4iLCIvLyByZWdleCBlc2NhcGUgcGF0dGVyblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4ucmVwbGFjZSgvKFxcXXxcXFt8XFx7fFxcfXxcXCh8XFwpfFxcKnxcXCt8XFw/fFxcLnxcXFxcKS9nLCAnXFxcXCQxJyk7XG59XG4iLCJpbXBvcnQgcmVtb3ZlRXh0cmFXaGl0ZXNwYWNlIGZyb20gJy4vcmVtb3ZlRXh0cmFXaGl0ZXNwYWNlJztcblxuLy8gd2hldGhlciBzdHIgY29udGFpbnMgYW55IHRleHRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhc1RleHQoc3RyKSB7XG4gICAgcmV0dXJuICEhcmVtb3ZlRXh0cmFXaGl0ZXNwYWNlKHN0cikubGVuZ3RoO1xufVxuIiwiaW1wb3J0IGFmdGVyRmlyc3QgZnJvbSAnLi9hZnRlckZpcnN0JztcbmltcG9ydCBhZnRlckxhc3QgZnJvbSAnLi9hZnRlckxhc3QnO1xuaW1wb3J0IGJlZm9yZUZpcnN0IGZyb20gJy4vYmVmb3JlRmlyc3QnO1xuaW1wb3J0IGJlZm9yZUxhc3QgZnJvbSAnLi9iZWZvcmVMYXN0JztcbmltcG9ydCBiZWdpbnNXaXRoIGZyb20gJy4vYmVnaW5zV2l0aCc7XG5pbXBvcnQgYmV0d2VlbiBmcm9tICcuL2JldHdlZW4nO1xuaW1wb3J0IGJsb2NrIGZyb20gJy4vYmxvY2snO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi9jYXBpdGFsaXplJztcbmltcG9ydCBjb3VudE9mIGZyb20gJy4vY291bnRPZic7XG5pbXBvcnQgZWRpdERpc3RhbmNlIGZyb20gJy4vZWRpdERpc3RhbmNlJztcbmltcG9ydCBlbmRzV2l0aCBmcm9tICcuL2VuZHNXaXRoJztcbmltcG9ydCBlc2NhcGVIVE1MIGZyb20gJy4vZXNjYXBlSFRNTCc7XG5pbXBvcnQgZXNjYXBlUGF0dGVybiBmcm9tICcuL2VzY2FwZVBhdHRlcm4nO1xuaW1wb3J0IGhhc1RleHQgZnJvbSAnLi9oYXNUZXh0JztcbmltcG9ydCBpc051bWVyaWMgZnJvbSAnLi9pc051bWVyaWMnO1xuaW1wb3J0IHBhZExlZnQgZnJvbSAnLi9wYWRMZWZ0JztcbmltcG9ydCBwYWRSaWdodCBmcm9tICcuL3BhZFJpZ2h0JztcbmltcG9ydCBwcmV2ZW50V2lkb3cgZnJvbSAnLi9wcmV2ZW50V2lkb3cnO1xuaW1wb3J0IHByb3BlckNhc2UgZnJvbSAnLi9wcm9wZXJDYXNlJztcbmltcG9ydCByZW1vdmUgZnJvbSAnLi9yZW1vdmUnO1xuaW1wb3J0IHJlbW92ZUV4dHJhV2hpdGVzcGFjZSBmcm9tICcuL3JlbW92ZUV4dHJhV2hpdGVzcGFjZSc7XG5pbXBvcnQgcmV2ZXJzZSBmcm9tICcuL3JldmVyc2UnO1xuaW1wb3J0IHJldmVyc2VXb3JkcyBmcm9tICcuL3JldmVyc2VXb3Jkcyc7XG5pbXBvcnQgc2ltaWxhcml0eSBmcm9tICcuL3NpbWlsYXJpdHknO1xuaW1wb3J0IHN0cmlwVGFncyBmcm9tICcuL3N0cmlwVGFncyc7XG5pbXBvcnQgc3dhcENhc2UgZnJvbSAnLi9zd2FwQ2FzZSc7XG5pbXBvcnQgdGltZUNvZGUgZnJvbSAnLi90aW1lQ29kZSc7XG5pbXBvcnQgdG9OdW1iZXIgZnJvbSAnLi90b051bWJlcic7XG5pbXBvcnQgdHJ1bmNhdGUgZnJvbSAnLi90cnVuY2F0ZSc7XG5pbXBvcnQgd29yZENvdW50IGZyb20gJy4vd29yZENvdW50JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFmdGVyRmlyc3QsXG4gICAgYWZ0ZXJMYXN0LFxuICAgIGJlZm9yZUZpcnN0LFxuICAgIGJlZm9yZUxhc3QsXG4gICAgYmVnaW5zV2l0aCxcbiAgICBiZXR3ZWVuLFxuICAgIGJsb2NrLFxuICAgIGNhcGl0YWxpemUsXG4gICAgY291bnRPZixcbiAgICBlZGl0RGlzdGFuY2UsXG4gICAgZW5kc1dpdGgsXG4gICAgZXNjYXBlSFRNTCxcbiAgICBlc2NhcGVQYXR0ZXJuLFxuICAgIGhhc1RleHQsXG4gICAgaXNOdW1lcmljLFxuICAgIHBhZExlZnQsXG4gICAgcGFkUmlnaHQsXG4gICAgcHJldmVudFdpZG93LFxuICAgIHByb3BlckNhc2UsXG4gICAgcmVtb3ZlLFxuICAgIHJlbW92ZUV4dHJhV2hpdGVzcGFjZSxcbiAgICByZXZlcnNlLFxuICAgIHJldmVyc2VXb3JkcyxcbiAgICBzaW1pbGFyaXR5LFxuICAgIHN0cmlwVGFncyxcbiAgICBzd2FwQ2FzZSxcbiAgICB0aW1lQ29kZSxcbiAgICB0b051bWJlcixcbiAgICB0cnVuY2F0ZSxcbiAgICB3b3JkQ291bnRcbn07XG4iLCIvLyB3aGV0aGVyIHN0ciBpcyBudW1lcmljXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWVyaWMoc3RyKSB7XG4gICAgY29uc3QgcmVneCA9IC9eWy0rXT9cXGQqXFwuP1xcZCsoPzpbZUVdWy0rXT9cXGQrKT8kLztcbiAgICByZXR1cm4gcmVneC50ZXN0KHN0cik7XG59XG4iLCIvLyBwYWQgc3RyIHdpdGggc3Vic3RyIGZyb20gdGhlIGxlZnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZExlZnQoc3RyLCBzdWJzdHIsIGxlbmd0aCkge1xuICAgIHN0ciA9IFN0cmluZyhzdHIpO1xuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgIHN0ciA9IHN1YnN0ciArIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbiIsIi8vIHBhZHMgc3RyIHdpdGggc3Vic3RyIGZyb20gdGhlIHJpZ2h0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWRSaWdodChzdHIsIHN1YnN0ciwgbGVuZ3RoKSB7XG4gICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgc3RyICs9IHN1YnN0cjtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXZlbnRXaWRvdyhzdHIpIHtcbiAgICBzdHIgPSBzdHIudHJpbSgpO1xuXG4gICAgY29uc3QgbGFzdFNwYWNlID0gc3RyLmxhc3RJbmRleE9mKCcgJyk7XG4gICAgaWYgKGxhc3RTcGFjZSA+IDApIHtcbiAgICAgICAgcmV0dXJuIGAke3N0ci5zbGljZSgwLCBsYXN0U3BhY2UpfSZuYnNwOyR7c3RyLnNsaWNlKGxhc3RTcGFjZSArIDEpfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4vY2FwaXRhbGl6ZSc7XG5cbi8vIHByb3BlciBjYXNlIHN0ciBpbiBzZW50ZW5jZSBmb3JtYXRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb3BlckNhc2Uoc3RyKSB7XG4gICAgY29uc3QgbmV3U3RyID0gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxiKFteLj87IV0rKS8sIGNhcGl0YWxpemUpO1xuICAgIHJldHVybiBuZXdTdHIucmVwbGFjZSgvXFxiW2ldXFxiLywgJ0knKTtcbn1cbiIsImltcG9ydCBlc2NhcGVQYXR0ZXJuIGZyb20gJy4vZXNjYXBlUGF0dGVybic7XG5cbi8vIHJlbW92ZSBhbGwgaW5zdGFuY2VzIG9mIHN1YnN0ciBpbiBzdHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZShzdHIsIHN1YnN0ciwgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgZXNjYXBlZFN0ciA9IGVzY2FwZVBhdHRlcm4oc3Vic3RyKTtcbiAgICBjb25zdCBmbGFncyA9IGNhc2VTZW5zaXRpdmUgPyAnZycgOiAnaWcnO1xuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZWRTdHIsIGZsYWdzKSwgJycpO1xufVxuIiwiLy8gcmVtb3ZlIGV4dHJhIHdoaXRlc3BhY2UgKGV4dHJhIHNwYWNlcywgdGFicywgbGluZSBicmVha3MsIGV0YylcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUV4dHJhV2hpdGVzcGFjZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG59XG4iLCIvLyByZXZlcnNlIGNoYXJhY3RlciBvcmRlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV2ZXJzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG59XG4iLCIvLyByZXZlcnNlIHdvcmQgb3JkZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldmVyc2VXb3JkcyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KCcgJykucmV2ZXJzZSgpLmpvaW4oJyAnKTtcbn1cbiIsImltcG9ydCBlZGl0RGlzdGFuY2UgZnJvbSAnLi9lZGl0RGlzdGFuY2UnO1xuXG4vLyBwZXJjZW50YWdlIG9mIHNpbWlsaWFyaXR5IGZyb20gMCB0byAxXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1pbGFyaXR5KGEsIGIpIHtcbiAgICBjb25zdCBlID0gZWRpdERpc3RhbmNlKGEsIGIpO1xuICAgIGNvbnN0IG0gPSBNYXRoLm1heChhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICAgIGlmIChtID09PSAwKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gKDEgLSBlIC8gbSk7XG59XG4iLCIvLyByZW1vdmUgYWxsIEhUTUwgdGFncyBmcm9tIHN0clxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyaXBUYWdzKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvPFxcLz9bXj5dKz4vaWdtLCAnJyk7XG59XG4iLCJcbi8vIHN3YXBzIHRoZSBjYXNlIG9mIHN0clxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3dhcENhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFx3KS8sIGZ1bmN0aW9uKG5ld1N0cikge1xuICAgICAgICBjb25zdCBsb3dlciA9IG5ld1N0ci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB1cHBlciA9IG5ld1N0ci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBzd2l0Y2ggKG5ld1N0cikge1xuICAgICAgICAgICAgY2FzZSBsb3dlcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBwZXI7XG4gICAgICAgICAgICBjYXNlIHVwcGVyOlxuICAgICAgICAgICAgICAgIHJldHVybiBsb3dlcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0cjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLy8gZm9ybWF0cyBzZWNvbmRzIGludG8gSEg6TU06U1NcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVDb2RlKHNlY29uZHMsIGRlbGltID0gJzonKSB7XG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChzZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3QgcyA9IE1hdGguZmxvb3IoKHNlY29uZHMgJSAzNjAwKSAlIDYwKTtcbiAgICBjb25zdCBociA9IChoIDwgMTAgPyAnMCcgKyBoIDogaCkgKyBkZWxpbTtcbiAgICBjb25zdCBtbiA9IChtIDwgMTAgPyAnMCcgKyBtIDogbSkgKyBkZWxpbTtcbiAgICBjb25zdCBzYyA9IChzIDwgMTAgPyAnMCcgKyBzIDogcyk7XG4gICAgcmV0dXJuIGhyICsgbW4gKyBzYztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvTnVtYmVyKHN0cikge1xuICAgIHJldHVybiBOdW1iZXIoc3RyLnJlcGxhY2UoL1teMC05Ll0vZywgJycpKTtcbn1cbiIsIi8vIHRydW5jYXRlIHRvIGxlbmd0aCB3aXRoIHN1ZmZpeFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJ1bmNhdGUoc3RyLCBsZW4sIHN1ZmZpeCA9ICcuLi4nKSB7XG4gICAgbGVuIC09IHN1ZmZpeC5sZW5ndGg7XG4gICAgbGV0IHRydW5jID0gc3RyO1xuICAgIGlmICh0cnVuYy5sZW5ndGggPiBsZW4pIHtcbiAgICAgICAgdHJ1bmMgPSB0cnVuYy5zdWJzdHIoMCwgbGVuKTtcbiAgICAgICAgY29uc3QgciA9IC9bXlxcc10vO1xuICAgICAgICBpZiAoci50ZXN0KHN0ci5jaGFyQXQobGVuKSkpIHtcbiAgICAgICAgICAgIHRydW5jID0gdHJ1bmMucmVwbGFjZSgvXFx3KyR8XFxzKyQvLCAnJykudHJpbVJpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ1bmMgKz0gc3VmZml4O1xuICAgIH1cbiAgICByZXR1cm4gdHJ1bmM7XG59XG4iLCIvLyB0aGUgbnVtYmVyIG9mIHdvcmRzIGluIGEgc3RyaW5nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3b3JkQ291bnQoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5tYXRjaCgvXFxiXFx3K1xcYi9nKS5sZW5ndGg7XG59XG4iLCIvLyBpbXBvcnQgU2lnbmFsIGZyb20gJ3NpZ25hbHMnO1xuaW1wb3J0IE1pbmlTaWduYWwgZnJvbSAnbWluaS1zaWduYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLm9uVXBkYXRlID0gbmV3IFNpZ25hbCgpO1xuICAgICAgICB0aGlzLm9uVXBkYXRlID0gbmV3IE1pbmlTaWduYWwoKTtcblxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0ID0gMDtcbiAgICAgICAgLy8gdGhpcy5hY2N1bXVsYXRlZCA9IDA7XG4gICAgICAgIC8vIHRoaXMuc3RlcCA9IDEwMDAgLyA2MDtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG5cbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGR0ID0gbm93IC0gdGhpcy5sYXN0O1xuICAgICAgICBpZiAoZHQgPiAyMCkge1xuICAgICAgICAgICAgZHQgPSAyMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3QgPSBub3c7XG5cbiAgICAgICAgLy8gIC8vIGZpeGVkIHN0ZXA6XG4gICAgICAgIC8vIHRoaXMuYWNjdW11bGF0ZWQgKz0gZHQ7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHdoaWxlICh0aGlzLmFjY3VtdWxhdGVkID49IHRoaXMuc3RlcCkge1xuICAgICAgICAvLyAgICAgdGhpcy5hY2N1bXVsYXRlZCAtPSB0aGlzLnN0ZXA7XG4gICAgICAgIC8vICAgICB0aGlzLm9uVXBkYXRlLmRpc3BhdGNoKHRoaXMuc3RlcCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICB0aGlzLm9uVXBkYXRlLmRpc3BhdGNoKGR0ICogMC4wMDEpO1xuICAgIH1cblxuICAgIGFkZChmbiwgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vblVwZGF0ZS5hZGQoZm4sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJlbW92ZShiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMub25VcGRhdGUuZGV0YWNoKGJpbmRpbmcpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZShmbiwgY29udGV4dCkge1xuICAgIC8vICAgICB0aGlzLm9uVXBkYXRlLnJlbW92ZShmbiwgY29udGV4dCk7XG4gICAgLy8gfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnQoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSB7XG4gICAgaWYgKCF3aW5kb3cuZ2EpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuZ2EoJ3NlbmQnLCAnZXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpO1xufVxuIiwiaW1wb3J0IGV2ZW50IGZyb20gJy4vZXZlbnQnO1xuaW1wb3J0IHBhZ2V2aWV3IGZyb20gJy4vcGFnZXZpZXcnO1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGV2ZW50LFxuICAgIHBhZ2V2aWV3LFxuICAgIGxvYWRcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkKGdhQWNjb3VudCkge1xuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsaXplIEdvb2dsZSBBbmFseXRpY3Mgd2l0aCBhY2NvdW50IElkOicsIGdhQWNjb3VudCk7XG5cbiAgICAvKmVzbGludC1kaXNhYmxlKi9cbiAgICAoZnVuY3Rpb24oaSxzLG8sZyxyLGEsbSl7aVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J109cjtpW3JdPWlbcl18fGZ1bmN0aW9uKCl7XG5cdChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuXHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG5cdH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnLy93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnZ2EnKTtcbiAgICAvKmVzbGludC1lbmFibGUqL1xuXG4gICAgd2luZG93LmdhKCdjcmVhdGUnLCBnYUFjY291bnQsICdhdXRvJyk7XG4gICAgd2luZG93LmdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdldmlldyhwYXRoKSB7XG4gICAgaWYgKCF3aW5kb3cuZ2EpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcbn1cbiIsImltcG9ydCB7ZWFzZU91dFF1YWR9IGZyb20gJy4uL2Vhc2UvcXVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIHtcbiAgICBjb25zdHJ1Y3RvcihvYiwgcHJvcHMsIGR1cmF0aW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub2IgPSBvYjtcblxuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMudG8ocHJvcHMsIGR1cmF0aW9uLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvKHByb3BzLCBkdXJhdGlvbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5lYXNlID0gb3B0aW9ucy5lYXNlIHx8IGVhc2VPdXRRdWFkO1xuICAgICAgICB0aGlzLmRlbGF5ID0gb3B0aW9ucy5kZWxheSB8fCAwO1xuICAgICAgICB0aGlzLm9uVXBkYXRlID0gb3B0aW9ucy5vblVwZGF0ZTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb3B0aW9ucy5vbkNvbXBsZXRlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fcHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgICAgIHRoaXMuX2JlZ2luVmFscyA9IHt9O1xuICAgICAgICB0aGlzLl9jaGFuZ2VWYWxzID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvcCA9IHRoaXMuX3Byb3BzW2ldO1xuICAgICAgICAgICAgdGhpcy5fYmVnaW5WYWxzW3Byb3BdID0gdGhpcy5vYltwcm9wXTtcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZVZhbHNbcHJvcF0gPSBwcm9wc1twcm9wXSAtIHRoaXMuX2JlZ2luVmFsc1twcm9wXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy50aW1lID09PSB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWxheSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXkgLT0gZHQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWUgKz0gZHQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGltZSA+IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRoaXMuZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Byb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wID0gdGhpcy5fcHJvcHNbaV07XG4gICAgICAgICAgICB0aGlzLm9iW3Byb3BdID0gdGhpcy5lYXNlKHRoaXMudGltZSwgdGhpcy5fYmVnaW5WYWxzW3Byb3BdLCB0aGlzLl9jaGFuZ2VWYWxzW3Byb3BdLCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKHRoaXMub2IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGltZSA9PT0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUodGhpcy5vYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImxldCBoaWRkZW4sXG4gICAgY2hhbmdlO1xuXG5pZiAodHlwZW9mIGRvY3VtZW50LmhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBoaWRkZW4gPSAnaGlkZGVuJztcbiAgICBjaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG59IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgY2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaGlkZGVuID0gJ21zSGlkZGVuJztcbiAgICBjaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBoaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICBjaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBoaWRkZW4sXG4gICAgY2hhbmdlXG59O1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZW1pdHRlciBmcm9tICcuLi9ldmVudHMvZW1pdHRlcic7XG5cbmNvbnN0IHZpc2liaWxpdHkgPSBPYmplY3QuY3JlYXRlKGVtaXR0ZXIucHJvdG90eXBlLCB7XG4gICAgaGlkZGVuOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRbYXBpLmhpZGRlbl07XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmIChkb2N1bWVudFthcGkuaGlkZGVuXSkge1xuICAgICAgICB2aXNpYmlsaXR5LmVtaXQoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZpc2liaWxpdHkuZW1pdCgnc2hvd24nKTtcbiAgICB9XG59XG5cbmlmIChhcGkuY2hhbmdlKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihhcGkuY2hhbmdlLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlzaWJpbGl0eTtcbiJdfQ==
