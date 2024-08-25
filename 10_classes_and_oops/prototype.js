// const myname='aakash     '
// console.log(myname.truelength());









let heroes=['thor','spiderman']
let heroespower={
    thor:"hammer",
    spiderman:'sling',

    getspiderpower:function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}
Object.prototype.aakash=function(){
    console.log(`aakash is present`);
    
}
Array.prototype.heyaakash=function(){
    console.log('hey aakash is here');
    
}
// heroespower.aakash()
// heroes.aakash()
// heroes.heyaakash()
// heroespower.heyaakash()
const user={
    name:'harsh',
    email:'harshgoogle@gmal.com'
}
const teacher={
    makeVideo:true
}
const teachersupport={
    isavailable:false
}
const TAsupport={
makeAssgnment:'JS assgnment',
fulltme:'true',
__proto__:teachersupport
}
teacher.__proto__=user


//modern technique
Object.setPrototypeOf(teachersupport,teacher)

let anothername="harsh     "

String.prototype.truelength=function(){
console.log(`${this}`);

console.log(`true length is : ${this.trim().length}`);
}
anothername.truelength()

'bhawna'.truelength()
'sachin'.truelength()