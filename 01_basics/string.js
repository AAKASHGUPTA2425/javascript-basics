const name = "aakash"
const repocount = 20
console.log(name + repocount + "value");
console.log(`my name is ${name}. my repocount is ${repocount}`)
const gamename = new String('aakash-game-001')
console.log(gamename.length);
console.log(gamename.toLowerCase());
console.log(gamename.toUpperCase());
console.log(gamename.__proto__);
console.log(gamename.charAt(4));
console.log(gamename.indexOf("a"));


const newString= gamename.substring(3,6)
console.log(newString);
const anotherString= gamename.slice(-8,6)
console.log(anotherString);



const newStringone="    aakash   "
console.log(newStringone);
console.log(newStringone.trim());


const url="http://aakash.com/aakash%90gupta"
console.log(url.replace("%90","-"));
console.log(url.includes('aaksh'));
console.log(url.includes('aakash'));

console.log(gamename.split('-'));
