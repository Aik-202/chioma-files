let k
 // Making it more user friendly, let's go!!!!!
let a = [];

//My Functions
const elementsentering = () => {
    for(e = 0; e != a.length; e++){
        a[e] = parseInt(prompt('Enter element a' + e));
    }
}
const bubblesort = () => {
    for(i = 0; i != (a.length); i++){
        for(x = 0; x != (a.length); x++){
            var j = x+ 1;
            if(a[x] > a[j]){
                k = a[x];
                a[x] = a[j]; 
                a[j] = k;
            }
        }
    }
    console.log(a);
}
const binarysearch = () => {
    var mid = Math.floor((a.length-1)/2);

    if(inp == a[mid]){
                console.log('Found it!!! That was easy, the array index of \u0020'+ a[mid] + '\u0020 is \u0020'  + mid);
    } 
    if(inp > a[mid]){
        for(s = mid+1; s != a.length; s++){
            var el = a[s];
            if(el == inp){
                console.log('Found it!!!, the array index of \u0020'+ el + '\u0020 is \u0020'  + s);
            }
        }
    }
    if(inp < a[mid]){
        for(s = mid-1; s != mid; s--){
            var el = a[s];
            if(el == inp){
                console.log('Found it!!!, the array index of \u0020'+ el + '\u0020 is \u0020'  + s);
            }
        }
    }    
    else{
        console.log('There is no element like that!!');
    } 
}

let al = parseInt(prompt('What is the size of your array'));
 a.length = al; 

//OOOh no, now i need a function to accept the array elements, alot of prompt...!!!
elementsentering();

//Sorting.........
bubblesort();
let inp = parseInt(prompt('What element are you looking for'));

//Searching
binarysearch();




/* for a fixed array
var a = [3,2,1,5,6,4];
var k
const bubblesort = () => {
    for(i = 0; i != (a.length); i++){
        for(x = 0; x != (a.length); x++){
            var j = x+ 1;
            if(a[x] > a[j]){
                k = a[x];
                a[x] = a[j]; 
                a[j] = k;
            }
        }
    }
   console.log(a);
}
const binarysearch = () => {
    let mid = Math.floor((a.length-1)/2);

    if(inp == a[mid]){
                console.log('Found it!!! That was easy, the array index of \u0020'+ a[mid] + '\u0020 is \u0020'  + mid);
    }    

    if(inp > a[mid]){
        for(s = mid+1; s != a.length; s++){
            var el = a[s];
            if(el == inp){
                console.log('Found it!!!, the array index of \u0020'+ el + '\u0020 is \u0020'  + s);
            }
        }
    }
    if(inp < a[mid]){
        for(s = mid-1; s != mid; s--){
            var el = a[s];
            if(el == inp){
                console.log('Found it!!!, the array index of \u0020'+ el + '\u0020 is \u0020'  + s);
            }
        }
    }
    else{
        console.log('Nothing like that');
    }
}
bubblesort();
var inp = parseInt(prompt('What element are you looking for'));
binarysearch();
*/

/*
var c = 0;
var a = [3,2,1];
const selectionsort = () => {
    for(i = 0; i != a.length; i++){
        for(j = 1; j != a.length; j++){
            if(a[c] > a[j]){
                
               var b = a[c];
               a[c] = a[j];
               a[j] = b; 
            }
        }
    }
}
selectionsort();
console.log(a);
*/
