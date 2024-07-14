// stack memory(primitive)  heap memory(non primitive)
let myname="aakash gupta"
let Name=myname
Name="harsh gupta"
console.log(Name);
console.log(myname);

let userone={
    email:"aakash@gmail.com",
    phoneNo:12323,
}
let usertwo=userone
usertwo.email="AAKASH@gmail.com"
console.log(userone.email);
console.log(usertwo.email);


// in stack memory the memory is taken as copy while in heap it's points to orignal