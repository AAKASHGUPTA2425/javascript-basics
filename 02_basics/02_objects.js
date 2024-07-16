// const newtinder = new Object() //singleton object
const newtinders = {}//it is not singleton object
newtinders.id="121hjh23"
newtinders.name="buddy"
newtinders.isloggedin=false
// console.log(newtinders);
const regularuser={
    email:"buddy@gmail.com",
    fullname:{
        username:{
            firstname:"aakash",
            lastname:"gupta"
        }
    },
    isloggedin:false
}
// console.log(regularuser.fullname.username.firstname)
// console.log(regularuser.fullname)
// console.log(regularuser.fullname.username)
// console.log(regularuser)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
//const abj4={obj1,obj2,onj3}//this will not concanicate
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3};
// console.log(obj4);

const user =[
    {
        email:"aaka@gmail.com",
        name:"aaka"
    },
    {
        email:"aaka@gmail.com",
        name:"aaka"
    },
    {
        email:"aaka@gmail.com",
        name:"aaka"
    },
    {
        email:"aaka@gmail.com",
        name:"aaka"
    },
    {
        email:"aaka@gmail.com",
        name:"aaka"
    },
]
console.log(user[1].email);
console.log(newtinders);
console.log(Object.keys(newtinders));//it will show as array
console.log(Object.values(newtinders));//it will show as array
console.log(Object.entries(newtinders));//it will show as array
console.log(newtinders.hasOwnProperty('isloggedin'));