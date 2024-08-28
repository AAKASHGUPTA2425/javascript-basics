class Users {
    constructor(username, email, password) {
        this.username=username
        this.password=password
        this.email=email
    }


    encryptepassword() {
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new Users("chaudary", "chai123@gmail.com", "123")
console.log(chai.encryptepassword());
console.log(chai.changeUsername());


//behind the scene

function User(username, email, password){
    this.username=username
    this.password=password
    this.email=email}
User.prototype.encryptepassword=function(){
    return `${this.password}abc`
}

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User("chaudary", "chai123@gmail.com", "123")
console.log(tea.encryptepassword());

console.log(tea.changeUsername());

