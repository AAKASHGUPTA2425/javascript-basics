// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element);
    
// }
// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop valur is ${i}`);
//    for (let j = 0; j <=10; j++) {
//     // console.log(`inner loop no is ${j},outer loop no is ${i}`);
//     console.log(i+'*'+j+'='+ (i*j));
//    }
    
// }

const arr=["aakash","sid","aj","badam shake"]
// console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}

//break/continue
for (let index = 1; index <=20; index++) {
   if(index==5){
    // console.log("5 is detected");
    break
   }
    // console.log(`i value is: ${index}`);
}
for (let index = 1; index <=20; index++) {
   if(index==5){
    console.log("5 is detected");
    continue
   }
    console.log(`i value is: ${index}`);
}