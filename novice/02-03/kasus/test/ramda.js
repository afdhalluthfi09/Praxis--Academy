const R = require('ramda');
const U = require('underscore');

// lodash
const L = require('lodash');



console.log(U)
console.log(U)

// versi Ramda
let arr=[2,34,5,67,8]
let even = e => e % 2 == 0;
console.log("versi ramda : " + R.filter(even,arr))

// versi _underscore
let evens = U.filter(arr,function(num){return num % 2 == 0});
console.log("versi Underscore : " + evens);

//  versi lodash 
let Narr =[2,3,4];
let gab =L.concat(Narr,[5,6,7,8]);
console.log("versi Lodash : " + gab)