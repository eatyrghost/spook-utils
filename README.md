<a name="spook-utils"></a>

## spook-utils : <code>object</code>
<p>A collection of reusable utilities for creating Node modules</p>
 <p>To install:</p>
 <pre>npm install spook-utils</pre>
 <p>To use in your project:</p>
 <pre>var spookUtils = require('spook-utils');</pre>

**Kind**: global namespace  

* [spook-utils](#spook-utils) : <code>object</code>
    * [.isValidObject(inObj)](#spook-utils.isValidObject) ⇒ <code>boolean</code>
    * [.validBoolean(inObj, retVal)](#spook-utils.validBoolean) ⇒ <code>boolean</code>
    * [.validNumber(inObj, retVal)](#spook-utils.validNumber) ⇒ <code>number</code>
    * [.validObject(inObj, retVal)](#spook-utils.validObject) ⇒ <code>object</code>
    * [.validString(inObj, retVal)](#spook-utils.validString) ⇒ <code>string</code>

<a name="spook-utils.isValidObject"></a>

### spook-utils.isValidObject(inObj) ⇒ <code>boolean</code>
Determines if an object is a valid, non-null object

**Kind**: static method of <code>[spook-utils](#spook-utils)</code>  
**Returns**: <code>boolean</code> - The boolean result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate |

<a name="spook-utils.validBoolean"></a>

### spook-utils.validBoolean(inObj, retVal) ⇒ <code>boolean</code>
Attempts to parse an object as a valid boolean

**Kind**: static method of <code>[spook-utils](#spook-utils)</code>  
**Returns**: <code>boolean</code> - The boolean result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate as a boolean |
| retVal | <code>boolean</code> | The default value to return, defaults to `false` |

<a name="spook-utils.validNumber"></a>

### spook-utils.validNumber(inObj, retVal) ⇒ <code>number</code>
Attempts to parse an object as a valid base-10 number

**Kind**: static method of <code>[spook-utils](#spook-utils)</code>  
**Returns**: <code>number</code> - The numerical result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate as a number |
| retVal | <code>number</code> | The default value to return, defaults to `0` |

<a name="spook-utils.validObject"></a>

### spook-utils.validObject(inObj, retVal) ⇒ <code>object</code>
Attempts to parse an object as a valid object

**Kind**: static method of <code>[spook-utils](#spook-utils)</code>  
**Returns**: <code>object</code> - The object result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate as an object |
| retVal | <code>object</code> | The default value to return, defaults to `null` |

<a name="spook-utils.validString"></a>

### spook-utils.validString(inObj, retVal) ⇒ <code>string</code>
Attempts to parse an object as a valid string

**Kind**: static method of <code>[spook-utils](#spook-utils)</code>  
**Returns**: <code>string</code> - The string result of evaluating inObj  

| Param | Type | Description |
| --- | --- | --- |
| inObj | <code>object</code> | The object to validate as an object |
| retVal | <code>string</code> | The default value to return, defaults to `''` |

