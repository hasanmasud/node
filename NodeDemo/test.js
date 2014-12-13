/**
 * 
 */
var ob = new Array();
for(var i=0;i<5;i++){
	ob[i] = new Object();
	ob[i].name = 'masud'+i;
	ob[i].getName = function(){return this.name};
}
for(i =0;i<ob.length;i++){
	console.log(ob[i].getName());
}