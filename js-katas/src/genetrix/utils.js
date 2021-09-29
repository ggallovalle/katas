"use strict";
exports.__esModule = true;
exports.len = void 0;
function len(source) {
    var _a;
    //@ts-expect-error either has size or length
    return (_a = source.length) !== null && _a !== void 0 ? _a : source.size;
}
exports.len = len;
