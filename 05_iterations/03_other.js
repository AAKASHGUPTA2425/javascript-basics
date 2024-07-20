//for of
const arr=[1,2,3,4,5,6,7,8,9]
for (const num of arr) {
    // console.log(num);
}
const greeting ="hello"
for (const i  of greeting) {
    // console.log(`each charactor is : ${i}`);
}
//map
const map=new Map
map.set('IN',"india")
map.set('USA',"United States of America")
map.set('FR',"France")
// console.log(map);
for (const [key,values] of map) {
    // console.log(key+ ":-"+values);
}
for (const key of map) {
    // console.log(key);
}
for (const [key,values] of map) {
    console.log(values);
}

//forof not works on objects
