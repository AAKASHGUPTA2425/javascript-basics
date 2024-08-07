const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls ,cryptography,network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
promiseOne.then(
    function () {
        console.log('promise consumed');

    }
)
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('async 2 task complete');
        resolve()
    }, 1000);
}).then(function () {
    console.log('async 2 resolved');

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'user', emailid: 'aakash@.com' })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);

})
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: 'aakash', passward: 123 })
        } else {
            reject('ERROR')
        }
    }, 1000)
})
promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then(function (username) {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(()=>{console.log('the promise is resolved or reject finally')})



const promiseFive=new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'harsh', passward: 123 })
        } else {
            reject('ERROR')
        }
    }, 1000)
})

async function consumedpromisefive(){
    try {
        const response=await promiseFive    
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
}
consumedpromisefive()