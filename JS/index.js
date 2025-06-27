//Write a function that finds unique elements in two arrays.
function findUnique(arr1, arr2) {
  let uniqueArr1 = arr1.filter(elem => !arr2.includes(elem));
  let uniqueArr2 = arr2.filter(elem => !arr1.includes(elem));
  return [...uniqueArr1,...uniqueArr2];
}
let result = findUnique([1,2,3,4,5,6,7,8,9,10], [2,4,6,7,8,10]);
console.log(result); 

//Write a function that finds the longest word in a sentence.
function longestWord(sentence){
    let words=sentence.split(" ");
    let longestWord=" ";

    words.forEach(element => {
        if(element.length>longestWord.length){
            longestWord=element;
        }
    });
    return longestWord;
}
console.log(longestWord("My name is Praveen Kumar."))

// Create a chainable function that allows method chaining like:
function chain(value){
    return{
        add(n){
            return chain(value+n);
        },
        subtract(n){
            return chain(value-n)
        },
        result(){
            return value;
        }
    }
}
console.log(chain(10).add(5).subtract(2).result())

//concept of hoisting
console.log(a); // undefined
var a = 5;

Hello(); 
function Hello() {
  console.log("Hello from Praveen!");
}
// console.log(b);//with let/const,we get error
// let b = 10;
