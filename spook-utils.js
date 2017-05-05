/*global module:true */
/**
 * @namespace spookUtils
 * @description <p>A collection of reusable utilities for creating Node modules</p>
 <p>To install:</p>
 <pre>npm install spookUtils</pre>
 <p>To use in your project:</p>
 <pre>var spookUtils = require('spookUtils');</pre>
 */
var spookUtils = (function () {
	'use strict';

	return {
		/**
		 * @function cloneObject
		 * @description Creates a new object that shares the same property values as an original object
		 * @memberOf spookUtils
		 * @param {object} inObj The object to clone
		 * @param {object} targetObj An optional target object to clone to
		 * @returns {object} The object result of the cloning operation
		 */
		cloneObject: function (inObj, targetObj) {
			if (typeof inObj === 'object' && inObj !== null) {
				var _this = spookUtils,
					i = 0,
					inObjKeys = Object.keys(inObj),
					inObjKeyCount = inObjKeys.length,
					objKey = '',
					objKeyType = '',
					objKeyVal = null,
					retVal = (typeof targetObj === 'object' && targetObj !== null ? targetObj : {});

				// Transfer properties recursively
				for (i = 0; i < inObjKeyCount; i++) {
					objKey = inObjKeys[i];
					objKeyVal = inObj[objKey];
					objKeyType = typeof objKeyVal;

					// Treat null values differently
					if (objKeyType === 'object' && objKeyVal === null) {
						objKeyType = 'null';
					} else if (Array.isArray(objKeyVal) === true) {
						objKeyType = 'array';
					}

					// Transfer intelligently based on the type
					switch (objKeyType) {
						case 'array':
							retVal[objKey] = JSON.parse(JSON.stringify(objKeyVal));
							break;
						case 'boolean':
							retVal[objKey] = (objKeyVal === true);
							break;
						case 'number':
							retVal[objKey] = parseInt(objKeyVal, 10);
							break;
						case 'object':
							retVal[objKey] = _this.cloneObject(objKeyVal);
							break;
						case 'null':
							retVal[objKey] = null;
							break;
						case 'string':
							retVal[objKey] = '' + objKeyVal;
							break;
					}
				}

				return retVal;
			} else {
				return null;
			}
		},
		/**
		 * @function combineObjects
		 * @description Combines a collection of objects and returns the resulting object
		 * @memberOf spookUtils
		 * @param {type} objArray
		 * @returns {object} The result of combining the objects
		 */
		combineObjects: function (objArray) {
			if (typeof objArray === 'object' && Array.isArray(objArray) === true) {
				var _this = spookUtils,
					currentObj = null,
					i = 0,
					objCount = objArray.length,
					retVal = null;

				// Traverse through the objects
				for (i = 0; i < objCount; i++) {
					currentObj = objArray[i];

					if (typeof currentObj === 'object' && currentObj !== null) {
						retVal = _this.cloneObject(currentObj, retVal);
					}
				}

				return retVal;
			} else {
				return null;
			}
		},
		/**
		 * @function isValidObject
		 * @description Determines if an object is a valid, non-null object
		 * @memberOf spookUtils
		 * @param {object} inObj The object to validate
		 * @returns {boolean} The boolean result of evaluating inObj
		 */
		isValidObject: function (inObj) {
			return (typeof inObj === 'object' && inObj !== null);
		},
		/**
		 * @function validBoolean
		 * @description Attempts to parse an object as a valid boolean
		 * @memberOf spookUtils
		 * @param {object} inObj The object to validate as a boolean
		 * @param {boolean} retVal The default value to return, defaults to `false`
		 * @returns {boolean} The boolean result of evaluating inObj
		 */
		validBoolean: function (inObj, retVal) {
			if (typeof inObj === 'boolean') {
				retVal = inObj;
			} else if (typeof inObj === 'number') {
				retVal = (inObj === 1 ? true : false);
			} else if (typeof inObj === 'string') {
				retVal = (inObj === 'true' ? true : false);
			} else if (typeof retVal !== 'boolean') {
				retVal = false;
			}

			return retVal;
		},
		/**
		 * @function validNumber
		 * @description Attempts to parse an object as a valid base-10 number
		 * @memberOf spookUtils
		 * @param {object} inObj The object to validate as a number
		 * @param {number} retVal The default value to return, defaults to `0`
		 * @returns {number} The numerical result of evaluating inObj
		 */
		validNumber: function (inObj, retVal) {
			if (typeof inObj === 'number') {
				retVal = inObj;
			} else if (typeof inObj !== 'undefined' && isNaN(inObj) === false) {
				retVal = parseInt(inObj, 10);
			} else if (typeof retVal !== 'number') {
				retVal = (typeof retVal !== 'undefined' && isNaN(retVal) === false ? parseInt(retVal, 10) : 0);
			}

			return retVal;
		},
		/**
		 * @function validObject
		 * @description Attempts to parse an object as a valid object
		 * @memberOf spookUtils
		 * @param {object} inObj The object to validate as an object
		 * @param {object} retVal The default value to return, defaults to `null`
		 * @returns {object} The object result of evaluating inObj
		 */
		validObject: function (inObj, retVal) {
			if (typeof inObj === 'object') {
				retVal = inObj;
			} else if (typeof inObj === 'string') {
				try {
					retVal = JSON.parse(inObj);
				} catch (e) {
					retVal = null;
				}
			} else if (typeof retVal === 'string') {
				try {
					retVal = JSON.parse(retVal);
				} catch (e) {
					retVal = null;
				}
			} else if (typeof retVal !== 'object' && typeof retVal !== 'string') {
				retVal = null;
			}

			return retVal;
		},
		/**
		 * @function validString
		 * @description Attempts to parse an object as a valid string
		 * @memberOf spookUtils
		 * @param {object} inObj The object to validate as an object
		 * @param {string} retVal The default value to return, defaults to `''`
		 * @returns {string} The string result of evaluating inObj
		 */
		validString: function (inObj, retVal) {
			if (typeof inObj === 'string') {
				retVal = inObj;
			} else if (typeof inObj !== 'undefined' && typeof inObj.toString === 'function') {
				retVal = inObj.toString();
			} else if (typeof retVal !== 'undefined' && typeof retVal.toString === 'function') {
				retVal = retVal.toString();
			} else if (typeof retVal !== 'string') {
				retVal = '';
			}

			return retVal;
		}
	};
}());
module.exports = spookUtils;