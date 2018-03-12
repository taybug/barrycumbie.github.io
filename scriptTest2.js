// create a loop to "print out" all elements in the dom.
// 1. createa my loop structure
// 2. how so i access an element on my page and  then all of them.
//.getElementByTagName('*');
//console.log(all);

console.log('A'); 

function printDom(){
var all = document;
console.log('B'); 
for (var i=0, max=all.length; i < max; i++) {
	
	console.log(all[i]);
}
}

// if (document.getElementsByTagName)
//     var elements = document.getElementsByTagName(all);
// else
//     // loop through all elements instead
// print(elements);
  };

console.log('C'); 

printDom(); 
// 3. how do i print them all out. - start on the console
