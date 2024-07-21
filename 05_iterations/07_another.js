const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynums.map((num)=>{return num+10})
// console.log(newnum);
// const newnum=[]
// mynums.forEach((i)=>{
//     newnum.push(i+10)
// })
const newnum=mynums.map((num)=>(num*10)).map((num)=>num+1).filter((num)=>num>=40)
console.log(newnum);