/*
* Created by Taranjeet Singh
* Created on 15  September 2019 : 10:15 am IST
* */
(() => {

    //----------------------------------------------------------------
    /*Create Array methods.*/

    const ArrayProto = Array.prototype,
        ObjProto = Object.prototype,
        SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

    const isNativeArray = Array.isArray,
        nativeCreate = Object.create,
        nativeKeys = Object.keys;

    const hasOwnProperty = ObjProto.hasOwnProperty,
        push = ArrayProto.push,
        slice = ArrayProto.slice,
        toString = ObjProto.toString;

    //----------------------------------------------------------------

    /*Create the >>Rocket>> reference object for use below.*/
    const _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };
    //----------------------------------------------------------------
    /*Current version.*/
    _.VERSION = '0.0.1';
    //----------------------------------------------------------------

    /*Initial Setup.*/
    /*Assign root to global or window object*/
    const root = typeof self == 'object'
        && self.self === self
        && self
        || typeof global == 'object'
        && global.global === global
        && global ||
        this ||
        {};
    //----------------------------------------------------------------

    /*Export the >>Rocket>> object for **Node.js** */
    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) exports = module.exports = _;
        // Export >>Rocket>>
        exports._ = _;
    } else root._ = _;
    //----------------------------------------------------------------

})();