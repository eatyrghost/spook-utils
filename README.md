<a name="spookUtils"></a>

## spookUtils : <code>object</code>
<p>A collection of reusable utilities for creating Node modules</p>
 <p>To install:</p>
 <pre>npm install spookUtils</pre>
 <p>To use in your project:</p>
 <pre>var spookUtils = require('spookUtils');</pre>

**Kind**: global namespace  

* [spookUtils](#spookUtils) : <code>object</code>
    * [.cloneObject(inObj, targetObj)](#spookUtils.cloneObject) ⇒ <code>object</code>
    * [.combineObjects(objArray)](#spookUtils.combineObjects) ⇒ <code>unresolved</code>
    * [.isValidObject(inObj)](#spookUtils.isValidObject) ⇒ <code>boolean</code>
    * [.validBoolean(inObj, retVal)](#spookUtils.validBoolean) ⇒ <code>boolean</code>
    * [.validNumber(inObj, retVal)](#spookUtils.validNumber) ⇒ <code>number</code>
    * [.validObject(inObj, retVal)](#spookUtils.validObject) ⇒ <code>object</code>
    * [.validString(inObj, retVal)](#spookUtils.validString) ⇒ <code>string</code>

<a name="spookUtils.cloneObject"></a>

### spookUtils.cloneObject(inObj, targetObj) ⇒ <code>object</code>
Creates a new object that shares the same property values as an original object

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>object</code> - The object result of the cloning operation  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to clone |
| targetObj | <code>object</code> | An optional target object to clone to |

<a name="spookUtils.combineObjects"></a>

### spookUtils.combineObjects(objArray) ⇒ <code>unresolved</code>
Combines a collection of objects and returns the resulting object

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  

| Param | Type |
| --- | --- |
| objArray | <code>type</code> | 

<a name="spookUtils.isValidObject"></a>

### spookUtils.isValidObject(inObj) ⇒ <code>boolean</code>
Determines if an object is a valid, non-null object

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>boolean</code> - The boolean result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate |

<a name="spookUtils.validBoolean"></a>

### spookUtils.validBoolean(inObj, retVal) ⇒ <code>boolean</code>
Attempts to parse an object as a valid boolean

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>boolean</code> - The boolean result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate as a boolean |
| retVal | <code>boolean</code> | The default value to return, defaults to `false` |

<a name="spookUtils.validNumber"></a>

### spookUtils.validNumber(inObj, retVal) ⇒ <code>number</code>
Attempts to parse an object as a valid base-10 number

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>number</code> - The numerical result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate as a number |
| retVal | <code>number</code> | The default value to return, defaults to `0` |

<a name="spookUtils.validObject"></a>

### spookUtils.validObject(inObj, retVal) ⇒ <code>object</code>
Attempts to parse an object as a valid object

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>object</code> - The object result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate as an object |
| retVal | <code>object</code> | The default value to return, defaults to `null` |

<a name="spookUtils.validString"></a>

### spookUtils.validString(inObj, retVal) ⇒ <code>string</code>
Attempts to parse an object as a valid string

**Kind**: static method of <code>[spookUtils](#spookUtils)</code>  
**Returns**: <code>string</code> - The string result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate as an object |
| retVal | <code>string</code> | The default value to return, defaults to `''` |

