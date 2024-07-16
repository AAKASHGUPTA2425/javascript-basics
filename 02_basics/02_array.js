const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["batman","superman","flash"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


const all_heroes=marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

// const all_new_heroes=[...marvel_heroes,...dc_heroes] //spread
// console.log(all_new_heroes);
// const another_arr=[1,2,3,4,[4,5,6],7,[6,7,[4,5]]]
// const real_another_arr=another_arr.flat(Infinity)
// console.log(real_another_arr);
console.log(Array.isArray("aakash"));
console.log(Array.from("aakash"));
console.log(Array.from({name:"aakash"}));//interesting
const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2, score3));
