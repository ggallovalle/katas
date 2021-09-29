"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.windowed = exports.chunked = exports.take = void 0;
/**
 * Take the first `n` elements out of iterable.
 * @param n
 * @param source
 */
function take(n, source) {
    var counter, _i, source_1, x;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                counter = 0;
                _i = 0, source_1 = source;
                _a.label = 1;
            case 1:
                if (!(_i < source_1.length)) return [3 /*break*/, 4];
                x = source_1[_i];
                counter++;
                return [4 /*yield*/, x];
            case 2:
                _a.sent();
                if (counter === n) {
                    return [3 /*break*/, 4];
                }
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
exports.take = take;
/**
 * Splits the `source` into an array of arrays, each not exiding the given `size`.
 * @param size the number of elements to take in each list.
 * @param source
 */
function chunked(size, source) {
    var counter, accumulator, _i, source_2, x;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (size <= 0)
                    throw new RangeError("`size` MUST be >= 0");
                counter = 0;
                accumulator = [];
                _i = 0, source_2 = source;
                _a.label = 1;
            case 1:
                if (!(_i < source_2.length)) return [3 /*break*/, 4];
                x = source_2[_i];
                counter++;
                accumulator.push(x);
                if (!(counter == size)) return [3 /*break*/, 3];
                return [4 /*yield*/, accumulator];
            case 2:
                _a.sent();
                counter = 0;
                accumulator = [];
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                if (!(accumulator.length !== 0)) return [3 /*break*/, 6];
                return [4 /*yield*/, accumulator
                    /**
                     * Returns an iterable of snapshots of the window of the given `size` sliding
                     * along the `source` with the given `opts.step`, where each snapshot is an array.
                     *
                     * @param size the number of elements to take in each window
                     * @param source
                     * @param {Object} opts - options
                     * @param {boolean} opts.partialWindow - controls wether or not to keep partial
                     */
                ];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}
exports.chunked = chunked;
/**
 *
 * Returns an iterable of snapshots of the window of the given `size` sliding
 * along the `source` with the given `opts.step`, where each snapshot is an array.
 *
 * @param {number} size - the number of elements to take in each window.
 * @param {Iterator<A>} source
 * @param {Object} options
 * @param {string} [opts.partialWindow=false] - controls wether or not to keep partial window.
 */
function windowed(size, source, options) {
    var counter, accumulator, _i, source_3, x;
    var _a;
    if (options === void 0) { options = {
        step: 1,
        partialWindow: false
    }; }
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                counter = 0;
                accumulator = [];
                _i = 0, source_3 = source;
                _b.label = 1;
            case 1:
                if (!(_i < source_3.length)) return [3 /*break*/, 4];
                x = source_3[_i];
                counter++;
                accumulator.push(x);
                if (!(counter === size)) return [3 /*break*/, 3];
                return [4 /*yield*/, accumulator];
            case 2:
                _b.sent();
                counter = counter - ((_a = options === null || options === void 0 ? void 0 : options.step) !== null && _a !== void 0 ? _a : 0);
                accumulator = accumulator.slice(options.step);
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                if (!options.partialWindow) return [3 /*break*/, 6];
                return [4 /*yield*/, accumulator];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6: return [2 /*return*/];
        }
    });
}
exports.windowed = windowed;
