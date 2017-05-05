var spookUtils = require('./spook-utils.js'),
	clone1 = null,
	combine1 = null,
	obj1 = {
		'dog': true,
		'name': 'Roofus',
		'showName': function () {
			console.log(this.name);
		}
	},
	obj2 = {
		'age': 4,
		'pug': true
	},
	obj3 = {
		'black': true,
		'tan': false,
		'toys': [
			'ball',
			'rope',
			{
				'blue-kong': false,
				'red-kong': 'yes',
				'white-kong': 2
			}
		]
	};

clone1 = spookUtils.cloneObject(obj1);
combine1 = spookUtils.combineObjects([null, obj1, obj2, obj3, null]);

console.log(Object.keys(clone1));
console.log(Object.keys(combine1));
obj1.name = 'Fluffy';
obj1.showName = function () {
	console.log('My name is ' + this.name);
};
obj2.age = 5;
obj3.toys = null;
console.log(obj1.name);
console.log(clone1.name);
console.log(combine1.name);
obj1.showName();
clone1.showName();
combine1.showName();
console.log(obj2.age);
console.log(combine1.age);
console.log(obj3.toys);
console.log(combine1.toys);