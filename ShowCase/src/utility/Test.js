var fruits = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


var popX = fruits.pop();
var shiftX = fruits.shift();
fruits.unshift("Lemon");
delete fruits[0];
fruits.unshift(1);
fruits.splice(1,1)
var citrus = fruits.slice(3);
console.log(fruits)
console.log(citrus)
