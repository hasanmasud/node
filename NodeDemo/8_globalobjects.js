console.log(__filename);
console.log(__dirname);

function printHello(){
	   console.log( "Hello, World!");
}
// Now call above function after 5 seconds
var t = setTimeout(printHello,5000);

//Now clear the timer
clearTimeout(t);
	

function printHello(){
	   console.log( "interval .....!");
}
	// Now call above function after 2 seconds
setInterval(printHello, 2000);