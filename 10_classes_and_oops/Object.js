function multplyTwonum(num1,num2) {
   return num1*num2

}
multplyTwonum.power=4
console.log(multplyTwonum(2,3));
console.log(multplyTwonum.power);
console.log(multplyTwonum.prototype);

function creatUser(username,score) {
    this.username=username
    this.score=score
    
}
creatUser.prototype.increment=function(){
    this.score++
}
creatUser.prototype.printme=function(){
    console.log(`price is ${this.score}`)
}
const chai=new creatUser('chai',25)
const tea=new creatUser('tea',250)

chai.printme()

