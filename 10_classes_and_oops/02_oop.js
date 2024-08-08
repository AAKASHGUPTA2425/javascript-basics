const user ={
    username:"aakash",
    loginCount:8,
    signeIn:true,
    getuserdetails:function(){
       console.log("Got user detail from database");
    }

}
console.log(user.username);
console.log(user.getuserdetails());
