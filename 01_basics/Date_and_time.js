//DATES

let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleTimeString());

let mydate=new Date(2023,0,30)
let mydate = new Date(2023, 0, 30, 5, 3)
console.log(mydate.toISOString());
let mydate = new Date("2023-01-14")
let mydate = new Date("01-14-2023")
// console.log(mydate.toLocaleString());
let mytime= Date.now()
console.log(mytime);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));

let days=new Date()
// console.log(days.getDay())
// console.log(days.getMonth())
// console.log(days.getFullYear())
// console.log(days.getTime())

days.toLocaleString('default',{
    weekday:"long"
})

