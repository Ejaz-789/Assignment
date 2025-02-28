// length
const cars=['Albarth','Aixam','Acura'];
console.log(Number.length);

// tostring()
const number=[1,2,3,4];
console.log(number.toString());

// at(index)
const color=['red','green','blue'];
console.log(color.at(1));

// push
color.push('yellow','purple');
console.log(color);

// pop
color.pop();
console.log(color); //  last item deleted

// shift()
const shift=color.shift();
console.log(shift);// output red
console.log(color); //  ouput ['green','blue','yelloe']

// unshift
color.unshift("white");// insert element at the first
console.log(color);

// join seperator
const intro=['hi','i am ', 'Ejaz'];
console.log(intro.join(' '));

const arr1=[1,2];
const arr2=[3,4];
const combined=arr1.concat(arr2,5);
console.log(combined);

// flat()
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat(2)); // Output: [1, 2, 3, 4, 5, 6]

// array manipulation
const months = ['Jan', 'March', 'April'];

// splice
months.splice(1, 0, 'Feb');
console.log(months); // Output: ['Jan', 'Feb', 'March', 'April']

//slice
const animals = ['ant', 'bee', 'cat', 'dog'];
console.log(animals.slice(0, 3));

// copywithin
const numbers=[1,2,3,4,5,6];
numbers.copyWithin(0,3);
console.log(numbers);

// indexof
console.log(months.indexOf('April'));

// findindex using call back
const values=[20,24,30,43,343];
const index=values.findIndex(num => num > 25);
console.log(index);

// include
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));
 
// map
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// reduce
const sum = numbers.reduce((value, currValue) => value + currValue, 0);
console.log(sum); // Output: 10

// some
const haveEven = numbers.some(num => num % 2 === 0);
console.log(haveEven);

// every
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);