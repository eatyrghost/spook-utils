/*global module:true */
/**
 * @namespace spook-utils
 * @description <p>A collection of reusable utilities for creating Node modules</p>
 <p>To install:</p>
 <pre>npm install spook-utils</pre>
 <p>To use in your project:</p>
 <pre>var spookUtils = require('spook-utils');</pre>
 */
module.exports = {
	/**
	 * @function isValidObject
	 * @description Determines if an object is a valid, non-null object
	 * @memberOf spook-utils
	 * @param {object} inObj The object to validate
	 * @returns {boolean} The boolean result of evaluating inObj
	 */
	isValidObject: function (inObj) {
		return (typeof inObj === 'object' && inObj !== null);
	},
	/**
	 * @function validBoolean
	 * @description Attempts to parse an object as a valid boolean
	 * @memberOf spook-utils
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
	 * @memberOf spook-utils
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
	 * @memberOf spook-utils
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
	 * @memberOf spook-utils
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