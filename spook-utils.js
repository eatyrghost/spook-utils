/*global module:true */
/**
 * @namespace spookUtils
 * @description <p>A collection of reusable utilities for creating Node modules or web experiences.</p>
 <p>To install:</p>
 <pre>npm install spook-utils</pre>
 <p>To use in your project:</p>
 <pre>var spookUtils = require('spook-utils');</pre>
 <p>Alternatively, include <samp>./dist/spook-utils.min.js</samp> and <samp>./dist/spook-utils.min.js.map</samp> in your project.</p>
 */
var spookUtils = (function () {
	'use strict';

	return {
		/**
		 * @function cloneObject
		 * @description Creates a new object that shares the same property values as an original object
		 * @memberOf spookUtils
		 * @param {object} inputObject The object to clone
		 * @param {object} targetObj An optional target object to clone to
		 * @returns {object} The object result of the cloning operation
		 */
		cloneObject: function (inputObject, targetObj) {
			var _this = spookUtils,
				i = 0,
				inputObjectKeys = null,
				inputObjectKeyCount = 0,
				objectKey = '',
				objectKeyType = '',
				objectKeyValue = null,
				returnValue = (_this.isValidObject(targetObj) === true ? targetObj : {});

			if (_this.isValidObject(inputObject) === true) {
				// Transfer properties recursively
				inputObjectKeys = Object.keys(inputObject);
				inputObjectKeyCount = inputObjectKeys.length;
				for (i = 0; i < inputObjectKeyCount; i++) {
					objectKey = inputObjectKeys[i];
					objectKeyValue = inputObject[objectKey];
					objectKeyType = typeof objectKeyValue;

					// Treat null values differently
					if (objectKeyType === 'object' && objectKeyValue === null) {
						objectKeyType = 'null';
					} else if (Array.isArray(objectKeyValue) === true) {
						objectKeyType = 'array';
					}

					// Transfer intelligently based on the type
					switch (objectKeyType) {
						case 'array':
							returnValue[objectKey] = JSON.parse(JSON.stringify(objectKeyValue));
							break;
						case 'boolean':
							returnValue[objectKey] = (objectKeyValue === true);
							break;
						case 'function':
							returnValue[objectKey] = objectKeyValue.bind(returnValue);
							break;
						case 'number':
							returnValue[objectKey] = parseInt(objectKeyValue, 10);
							break;
						case 'object':
							returnValue[objectKey] = _this.cloneObject(objectKeyValue);
							break;
						case 'null':
							returnValue[objectKey] = null;
							break;
						case 'string':
							returnValue[objectKey] = '' + objectKeyValue;
							break;
					}
				}

				return returnValue;
			} else {
				return null;
			}
		},
		/**
		 * @function combineObjects
		 * @description Combines a collection of objects and returns the resulting object
		 * @memberOf spookUtils
		 * @param {array} objArray An array of objects to combine
		 * @returns {object} The result of combining the objects
		 */
		combineObjects: function (objArray) {
			var _this = spookUtils,
				currentObject = null,
				i = 0,
				objectCount = 0,
				returnValue = null;

			if (Array.isArray(objArray) === true) {
				// Traverse through the objects
				objectCount = objArray.length;
				for (i = 0; i < objectCount; i++) {
					currentObject = objArray[i];

					if (_this.isValidObject(currentObject) === true) {
						returnValue = _this.cloneObject(currentObject, returnValue);
					}
				}

				return returnValue;
			} else {
				return null;
			}
		},
		/**
		 * @function isValidObject
		 * @description Determines if an object is a valid, non-null object
		 * @memberOf spookUtils
		 * @param {object} inputObject The object to validate
		 * @returns {boolean} The boolean result of evaluating inputObject
		 */
		isValidObject: function (inputObject) {
			return (typeof inputObject === 'object' && inputObject !== null);
		},
		/**
		 * @function validBoolean
		 * @description Attempts to parse an object as a valid boolean
		 * @memberOf spookUtils
		 * @param {object} inputObject The object to validate as a boolean
		 * @param {boolean} returnValue The default value to return, defaults to `false`
		 * @returns {boolean} The boolean result of evaluating inputObject
		 */
		validBoolean: function (inputObject, returnValue) {
			if (typeof inputObject === 'boolean') {
				returnValue = inputObject;
			} else if (typeof inputObject === 'number') {
				returnValue = (inputObject === 1 ? true : false);
			} else if (typeof inputObject === 'string') {
				returnValue = (inputObject === 'true' ? true : false);
			} else if (typeof returnValue !== 'boolean') {
				returnValue = false;
			}

			return returnValue;
		},
		/**
		 * @function validNumber
		 * @description Attempts to parse an object as a valid base-10 number
		 * @memberOf spookUtils
		 * @param {object} inputObject The object to validate as a number
		 * @param {number} returnValue The default value to return, defaults to `0`
		 * @returns {number} The numerical result of evaluating inputObject
		 */
		validNumber: function (inputObject, returnValue) {
			if (typeof inputObject === 'number') {
				returnValue = inputObject;
			} else if (typeof inputObject !== 'undefined' && isNaN(inputObject) === false) {
				returnValue = parseInt(inputObject, 10);
			} else if (typeof returnValue !== 'number') {
				returnValue = (typeof returnValue !== 'undefined' && isNaN(returnValue) === false ? parseInt(returnValue, 10) : 0);
			}

			return returnValue;
		},
		/**
		 * @function validObject
		 * @description Attempts to parse an object as a valid object
		 * @memberOf spookUtils
		 * @param {object} inputObject The object to validate as an object
		 * @param {object} returnValue The default value to return, defaults to `null`
		 * @returns {object} The object result of evaluating inputObject
		 */
		validObject: function (inputObject, returnValue) {
			if (typeof inputObject === 'object') {
				returnValue = inputObject;
			} else if (typeof inputObject === 'string') {
				try {
					returnValue = JSON.parse(inputObject);
				} catch (e) {
					returnValue = null;
				}
			} else if (typeof returnValue === 'string') {
				try {
					returnValue = JSON.parse(returnValue);
				} catch (e) {
					returnValue = null;
				}
			} else if (typeof returnValue !== 'object' && typeof returnValue !== 'string') {
				returnValue = null;
			}

			return returnValue;
		},
		/**
		 * @function validString
		 * @description Attempts to parse an object as a valid string
		 * @memberOf spookUtils
		 * @param {object} inputObject The object to validate as an object
		 * @param {string} returnValue The default value to return, defaults to `''`
		 * @returns {string} The string result of evaluating inputObject
		 */
		validString: function (inputObject, returnValue) {
			if (typeof inputObject === 'string') {
				returnValue = inputObject;
			} else if (typeof inputObject !== 'undefined' && typeof inputObject.toString === 'function') {
				returnValue = inputObject.toString();
			} else if (typeof returnValue !== 'undefined' && typeof returnValue.toString === 'function') {
				returnValue = returnValue.toString();
			} else if (typeof returnValue !== 'string') {
				returnValue = '';
			}

			return returnValue;
		}
	};
}());

// Create a global-scoped object
try {
	window.spookUtils = spookUtils;
} catch (e) {
}

// Create a module
try {
	module.exports = spookUtils;
} catch (e) {
}