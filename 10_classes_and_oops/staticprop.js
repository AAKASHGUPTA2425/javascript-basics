class User{
    constructor(username){
    this.username=username
    }

   logme(){
    console.log(`username : ${this.username}`);
   }

    static creatid(){
        return "1213"
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }


}





const phone=new User("nothing")
console.log(phone.creatid);
phone.logme()
const iphone=new Teacher("apple","apple@phone.com")
console.log(iphone.creatid);
iphone.logme()
