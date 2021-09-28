let puppy = {
	"name": "Timmy",
	"age": 3,
}

function objectToArray(object) {
	let result = [];
	for(var i in object) {
		result.push([i, object[i]]);	
	}
	return result;
}

console.log(objectToArray(puppy));