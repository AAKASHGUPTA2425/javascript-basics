const user ={
    username:"aakash",
    loginCount:8,
    signeIn:true,
    getuserdetails:function(){
    //    console.log("Got user detail from database");
    // console.log(`username:${this.username}`);
    console.log(this);
    
    
    }

}
// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(this);
function User (username,loginCount,signeIn){
    this.username=username;
    this.loginCount=loginCount;
    this.signeIn=signeIn

    return this
}
const userOne=new User('aakash',23,true);
const usertwo=new User('harsh',23,false);
console.log(userOne);
console.log(usertwo);

