// JS-04 Arrays and Loops
// https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops
// PLEASE open in Node.js https://replit.com/languages/javascript
// Exercise2

for (let height=0; height < 5; height++) {
	let star = "*";
	for (let row=0; row < height; row++) {
		star += "*"
	}
	console.log(star)
}