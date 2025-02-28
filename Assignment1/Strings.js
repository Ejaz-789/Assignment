const name="ejaz khan";
const education="BS";
const program="  software engineering  ";
console.log(name.length);

// charAt(index)
console.log(name.charAt(0));

// charCodeat(index) unicode value for a character\
console.log(name.charCodeAt(0));

// at(index)  return the specified character
console.log(name.at(5));

// slice(startindex,endindex)
console.log(name.slice(0,6));

// substring(startindex,endindex) do not accept negative indices
console.log(name.substring(5,9));

// substr(start,length)
console.log(name.substr(0,4));

//to upper case
console.log(name.toUpperCase());

// tolowecase
console.log(name.toLowerCase());

// concat
console.log(name.concat(" ",education));

// trim()
console.log(program.trim());

// trimstar
console.log(program.trimStart());

// trimend()
console.log(program.trimEnd());

// padstart(targetlength,padstring)
const str="5";
console.log(str.padStart(3,"0"));

// padend
console.log(str.padEnd(3,0));

// repeat count
const exa="Hello";
console.log(exa.repeat(3));

// replace
const rep="hi ejaz khan";
console.log(rep.replace("ejaz","java script"));

// split
console.log(rep.split(","));