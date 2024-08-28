class User {
    constructor(username){
        this.username=username
    }
    logme(){
       console.log(`name is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    newcourse(){
        console.log(`a new course is added by ${this.username}`);
        
    }
}

const aakash=new Teacher("aakash","aakash@gmail.com","123")
aakash.newcourse();
aakash.logme();
const harsh=new User("harsh")
harsh.logme()
console.log(aakash instanceof User);
console.log(aakash instanceof Teacher);
console.log(aakash === harsh);

