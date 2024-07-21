const num=[1,2,3,4,5,6,7,8,9,10]
// const numb=num.filter((i)=>(i>4))
// // const numb=num.filter((i)=>{
//     return i>4
// })
// const numb=[]
// num.forEach((i)=>{
//     if(i>4){
//       numb.push(i)
//     }
// })
// console.log(numb);
const books=[
    {
        title:"book one",publish:1980,edition:2004
    },
    {
        title:"book two",publish:1980,edition:2005
    },
    {
        title:"book three",publish:1989,edition:2009
    },
    {
        title:"book four",publish:1999,edition:2019
    },
    {
        title:"book five",publish:1940,edition:2024
    },
    {
        title:"book six",publish:1988,edition:2010
    },
    {
        title:"book seven ",publish:1990,edition:2015
    }
]
// const userbook=books.filter((bk)=>bk.edition>2010)
const userbook=books.filter((bk=>{return bk.publish>=1990 && bk.edition>=2019 }))
console.log(userbook);