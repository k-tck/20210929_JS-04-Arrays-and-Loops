// JS-04 Arrays and Loops
// https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops
// PLEASE open in Node.js https://replit.com/languages/javascript
// Exercise3


// Part1
let xValue = 10;
while (xValue > 0) {
	xValue -= 0.5
	console.log(xValue)
}


// Part2
let oddNum = 1
while (oddNum < 100) {
    console.log(oddNum);
    oddNum += 2;
}


// Part3
const origin=[1];
let loopNum=0;
let arrayValue=1

const n=6     	/* user entry value */

while (loopNum < n) {
	origin.push(arrayValue)
	origin.splice(0,1)
	loopNum += 1
	arrayValue += 1
	console.log(origin)
}


// Part4
const n = 4		/* user entry value */

let loopNum=0
let sum = 0

while (loopNum < 5 ) {
	sum = (n*(n+1))/2
	loopNum += 1
}
console.log(sum)