const lang=["js","cpp","python","c"]
lang.forEach(function(item){
    // console.log(item);
})
lang.forEach((item)=>{
    // console.log(item);
})

function printmee (item){
    console.log(item);
}
// lang.forEach(printmee)

lang.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})
const codding=[
    {langname:"javascript",
    filetype:"js"
},
    {langname:"python",
    filetype:"py"
},
    {langname:"c++",
    filetype:"cpp"
}
]
codding.forEach((key)=>{
    console.log(key.langname)
})