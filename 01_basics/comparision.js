// console.log(2>1)
// console.log(2>1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2!=1)

// console.log("2">1)
// console.log("02">1)

// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
/*the reason is that an equality check== and comparisions> < >= <= work diffrently.
Comparisions convert null to a number,treating it as 0. 
that's why null>=0is true and null>0 is false */

// console.log(undefined==0);
// console.log(undefined>=0);
// console.log(undefined<=0);
// console.log(undefined<0);
// console.log(undefined>0);

/*=== strictly check*/
console.log("2"===2);