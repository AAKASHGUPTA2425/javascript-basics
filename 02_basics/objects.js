//singleton
//objest.create

//objects literals
const symb=Symbol("key1")
const jsobject={
    name:"aakash",
    "full name":"aakash gupta",
    [symb]:"mykey1",
    age:19,
  email:"aakash@gmail.com",
  phone_no:213143141,
  isloggedin:true,
  login:["monday","tuesday"]
}
// console.log(jsobject.name);
// console.log(jsobject["name"]);
// console.log(jsobject["full name"]);
// console.log( jsobject[symb]);
// jsobject.email="aakashchatgpt@gmail.com"
// console.log(jsobject);
// Object.freeze(jsobject)
// jsobject.email="aakashgoogle.com"
// console.log(jsobject);

jsobject.greeting = function(){
  console.log("hello jsobject");
}
jsobject.greeting2 = function(){
  console.log(`hello jsobject, ${this.name}`);
}
console.log(jsobject.greeting());
console.log(jsobject.greeting2());