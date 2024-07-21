const arr=[1,2,3,4]
// const total=arr.reduce(function(accumulator,currentvalue){
//     console.log(`acc: ${accumulator} and curr:${currentvalue}`);
// return accumulator+currentvalue
// },0)
// const total=arr.reduce((acc,currvalue)=>{
//     return acc+currvalue
// },0)
// console.log(total);
const shoppinglist=[
    {
        course:"js course",
        price:1999
    },
    {
        course:"web dev course",
        price:19990
    },
    {
        course:"py course",
        price:999
    },
    {
        course:"data science course",
        price:19999
    },
]
const total=shoppinglist.reduce((acc,item)=>{
    console.log(acc,item.price);
    return acc+item.price},0)
console.log(total);