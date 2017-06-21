<a name="spookUtils"></a>

## spookUtils : <code>object</code>
<p>A collection of reusable utilities for creating Node modules or web experiences.</p>
 <p>To install:</p>
 <pre>npm install spook-utils</pre>
 <p>To use in your project:</p>
 <pre>var spookUtils = require('spook-utils');</pre>
 <p>Alternatively, include <samp>./dist/spook-utils.min.js</samp> and <samp>./dist/spook-utils.min.js.map</samp> in your project.</p>

**Kind**: global namespace  

* [spookUtils](#spookUtils) : <code>object</code>
    * [.cloneObject(inputObject, targetObj)](#spookUtils.cloneObject) ⇒ <code>object</code>
    * [.combineObjects(objArray)](#spookUtils.combineObjects) ⇒ <code>object</code>
    * [.isValidObject(inputObject)](#spookUtils.isValidObject) ⇒ <code>boolean</code>
    * [.validBoolean(inputObject, returnValue)](#spookUtils.validBoolean) ⇒ <code>boolean</code>
    * [.validNumber(inputObject, returnValue)](#spookUtils.validNumber) ⇒ <code>number</code>
    * [.validObject(inputObject, returnValue)](#spookUtils.validObject) ⇒ <code>object</code>
    * [.validString(inputObject, returnValue)](#spookUtils.validString) ⇒ <code>string</code>

<a name="spookUtils.cloneObject"></a>

### spookUtils.cloneObject(inputObject, targetObj) ⇒ <code>object</code>
Creates a new object that shares the same property values as an original object

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>object</code> - The object result of the cloning operation  

| Param | Type | Description |
| --- | --- | --- |
| inputObject | <code>object</code> | The object to clone |
| targetObj | <code>object</code> | An optional target object to clone to |

<a name="spookUtils.combineObjects"></a>

### spookUtils.combineObjects(objArray) ⇒ <code>object</code>
Combines a collection of objects and returns the resulting object

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>object</code> - The result of combining the objects  

| Param | Type | Description |
| --- | --- | --- |
| objArray | <code>array</code> | An array of objects to combine |

<a name="spookUtils.isValidObject"></a>

### spookUtils.isValidObject(inputObject) ⇒ <code>boolean</code>
Determines if an object is a valid, non-null object

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>boolean</code> - The boolean result of evaluating inputObject  

| Param | Type | Description |
| --- | --- | --- |
| inputObject | <code>object</code> | The object to validate |

<a name="spookUtils.validBoolean"></a>

### spookUtils.validBoolean(inputObject, returnValue) ⇒ <code>boolean</code>
Attempts to parse an object as a valid boolean

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>boolean</code> - The boolean result of evaluating inputObject  

| Param | Type | Description |
| --- | --- | --- |
| inputObject | <code>object</code> | The object to validate as a boolean |
| returnValue | <code>boolean</code> | The default value to return, defaults to `false` |

<a name="spookUtils.validNumber"></a>

### spookUtils.validNumber(inputObject, returnValue) ⇒ <code>number</code>
Attempts to parse an object as a valid base-10 number

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>number</code> - The numerical result of evaluating inputObject  

| Param | Type | Description |
| --- | --- | --- |
| inputObject | <code>object</code> | The object to validate as a number |
| returnValue | <code>number</code> | The default value to return, defaults to `0` |

<a name="spookUtils.validObject"></a>

### spookUtils.validObject(inputObject, returnValue) ⇒ <code>object</code>
Attempts to parse an object as a valid object

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>object</code> - The object result of evaluating inputObject  

| Param | Type | Description |
| --- | --- | --- |
| inputObject | <code>object</code> | The object to validate as an object |
| returnValue | <code>object</code> | The default value to return, defaults to `null` |

<a name="spookUtils.validString"></a>

### spookUtils.validString(inputObject, returnValue) ⇒ <code>string</code>
Attempts to parse an object as a valid string

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>string</code> - The string result of evaluating inputObject  

| Param | Type | Description |
| --- | --- | --- |
| inputObject | <code>object</code> | The object to validate as an object |
| returnValue | <code>string</code> | The default value to return, defaults to `''` |

